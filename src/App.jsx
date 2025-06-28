import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

// --- Constants & Configuration ---
const COLORS = {
  background: '#111111',
  text: '#ffffff',
  layers: [
    { color: new THREE.Color('#EA4C5F'), name: 'Skills' },
    { color: new THREE.Color('#8E3B66'), name: 'Projects' },
    { color: new THREE.Color('#532F4C'), name: 'About' },
    { color: new THREE.Color('#333333'), name: 'Contact' },
    { color: new THREE.Color('#CCCCCC'), name: 'Home' },
  ],
};

const CONTENT = {
    Home: {
        title: "Stefan Mladenovski",
        subtitle: "Data Analyst at A1",
        description: "Drag the orb to look inside. Hover a layer to see the menu and click to navigate.",
    },
    Skills: {
        title: "Technical Skills",
        description: "A deep proficiency in the essential tools and languages for modern data analysis, from data wrangling to visualization.",
        items: ["Python (Pandas, NumPy)", "SQL", "Power BI", "Microsoft Excel", "Tableau", "Bash Scripting", "Data Warehousing", "ETL Processes"]
    },
    Projects: {
        title: "Projects",
        description: "A selection of projects demonstrating my ability to transform raw data into actionable business insights.",
        items: [
            { name: "Sales Dashboard Automation", desc: "Developed an automated pipeline using Python and SQL to feed a real-time Power BI dashboard, reducing manual reporting time by 90%." },
            { name: "Customer Segmentation Analysis", desc: "Utilized clustering algorithms in Python to identify key customer segments, leading to a 15% increase in targeted marketing campaign effectiveness." },
            { name: "Operational Efficiency Report", desc: "Created comprehensive reports in Excel and Power BI to track KPIs, identifying bottlenecks and enabling a 20% improvement in process efficiency." },
        ]
    },
    About: {
        title: "About Me",
        description: "I am a detail-oriented Data Analyst at A1 with a passion for uncovering the stories hidden within data. My expertise lies in transforming complex datasets into clear, actionable insights using tools like Python, SQL, and Power BI. I thrive on solving business challenges and am always eager to leverage my analytical skills to drive strategic decisions. When I'm not wrangling data, I enjoy exploring new technologies and contributing to open-source projects.",
    },
    Contact: {
        title: "Get In Touch",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.",
        items: [
            { type: "Email", value: "stefan.mladenovski@example.com" },
            { type: "LinkedIn", value: "/in/stefan-mladenovski" },
            { type: "GitHub", value: "@stefan-mladenovski" },
        ]
    }
};

// --- Helper Functions ---
const lerp = (start, end, alpha) => (1 - alpha) * start + alpha * end;

// --- React Components ---
const ThreeScene = ({ setActivePage }) => {
    const mountRef = useRef(null);
    const hoveredLayerIndexRef = useRef(null);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const mouse = useMemo(() => new THREE.Vector2(), []);
    const sphereGroupRef = useRef(null);
    const interactionGroupRef = useRef(null); 

    useEffect(() => {
        const mountNode = mountRef.current;
        if (!mountNode) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, mountNode.clientWidth / mountNode.clientHeight, 1, 200);
        camera.position.set(0, 0, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.localClippingEnabled = true;
        mountNode.appendChild(renderer.domElement);
        
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        mountNode.appendChild(labelRenderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.minDistance = 8;
        controls.maxDistance = 25;

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
        dirLight.position.set(5, 10, 7.5);
        scene.add(dirLight);

        const clippingPlanes = [
            new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, -1, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)
        ];

        sphereGroupRef.current = new THREE.Group();
        scene.add(sphereGroupRef.current);
        interactionGroupRef.current = new THREE.Group();
        scene.add(interactionGroupRef.current);

        const baseRadius = 3;
        const radiusStep = 0.5;

        COLORS.layers.forEach((layer, i) => {
            const sphereRadius = baseRadius - i * radiusStep;
            if (sphereRadius <= 0) return;
            
            const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
            const material = new THREE.MeshStandardMaterial({
                color: layer.color,
                metalness: 0.1,
                roughness: 0.6,
                clippingPlanes: clippingPlanes,
                clipIntersection: true,
                side: THREE.DoubleSide, 
            });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.userData = { layerIndex: i };
            sphereGroupRef.current.add(sphere);

            const innerR = sphereRadius - radiusStep;
            const ringGeom = new THREE.RingGeometry(innerR < 0 ? 0 : innerR, sphereRadius, 64, 1);
            const ringMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
            const ring = new THREE.Mesh(ringGeom, ringMat);
            ring.userData = { layerIndex: i };
            interactionGroupRef.current.add(ring);
            
            const labelDiv = document.createElement('div');
            labelDiv.className = 'label';
            labelDiv.textContent = layer.name;
            labelDiv.style.color = '#FFFFFF';
            labelDiv.style.textShadow = `0 0 8px ${layer.color.getStyle()}`;
            labelDiv.style.opacity = '0';
            labelDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            labelDiv.style.transformOrigin = 'center';
            
            const label = new CSS2DObject(labelDiv);
            
            const labelAnchor = new THREE.Object3D();
            const labelRadius = sphereRadius - (radiusStep / 2);
            labelAnchor.position.set(0, 0, labelRadius);
            sphere.add(labelAnchor);
            labelAnchor.add(label);
        });

        const handleResize = () => {
            camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
            labelRenderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
        };

        const handleMouseMove = (event) => {
            const rect = mountNode.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            const tempInteractionGroup = new THREE.Group();
            tempInteractionGroup.children = interactionGroupRef.current.children;
            tempInteractionGroup.quaternion.copy(camera.quaternion);

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(tempInteractionGroup.children);

            if (intersects.length > 0) {
                 hoveredLayerIndexRef.current = intersects[0].object.userData.layerIndex;
            } else {
                hoveredLayerIndexRef.current = null;
            }
        };

        const handleClick = () => {
             if (hoveredLayerIndexRef.current !== null) {
                 const pageName = COLORS.layers[hoveredLayerIndexRef.current].name;
                 setActivePage(pageName);
             }
        };

        window.addEventListener('resize', handleResize);
        mountNode.addEventListener('mousemove', handleMouseMove);
        mountNode.addEventListener('click', handleClick);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            
            const hoveredIndex = hoveredLayerIndexRef.current;

            if (sphereGroupRef.current && sphereGroupRef.current.children.length > 0) {
                sphereGroupRef.current.children.forEach((sphere, i) => {
                    const isHovered = i === hoveredIndex;
                    const targetScale = isHovered ? 1.2 : 1.0;
                    sphere.scale.x = lerp(sphere.scale.x, targetScale, 0.1);
                    sphere.scale.y = lerp(sphere.scale.y, targetScale, 0.1);
                    sphere.scale.z = lerp(sphere.scale.z, targetScale, 0.1);

                    const labelAnchor = sphere.children[0];
                    if (labelAnchor && labelAnchor.children[0]) {
                        const label = labelAnchor.children[0];
                        const targetLabelScale = isHovered ? 1 : 0.8;
                        const currentScale = label.element.style.transform ? parseFloat(label.element.style.transform.replace('scale(','').replace(')','')) : 1;
                        label.element.style.opacity = lerp(parseFloat(label.element.style.opacity), isHovered ? 1 : 0, 0.2);
                        label.element.style.transform = `scale(${lerp(currentScale, targetLabelScale, 0.2)})`;
                    }
                });
            }
            
            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (mountNode) {
                mountNode.removeEventListener('mousemove', handleMouseMove);
                mountNode.removeEventListener('click', handleClick);
                if (renderer.domElement) mountNode.removeChild(renderer.domElement);
                if (labelRenderer.domElement) mountNode.removeChild(labelRenderer.domElement);
            }
        };
    }, [setActivePage, mouse, raycaster]);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default function App() {
    const [activePage, setActivePage] = useState('Home');

    const renderContent = () => {
        const contentData = CONTENT[activePage] || CONTENT.Home;
        return (
            <div key={activePage} className="w-full max-w-3xl mx-auto animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{contentData.title}</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">{contentData.subtitle || contentData.description}</p>
                {activePage === 'Projects' && contentData.items.map((item, index) => (
                    <div key={index} className="mb-4 p-4 border-l-2 border-pink-500 bg-gray-800/30 rounded-r-lg">
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
                {activePage === 'Skills' && (
                    <div className="flex flex-wrap gap-3">
                        {contentData.items.map((item, index) => (
                           <span key={index} className="bg-gray-700/50 text-gray-200 py-2 px-4 rounded-full text-sm">{item}</span>
                        ))}
                    </div>
                )}
                 {activePage === 'Contact' && contentData.items.map((item, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-semibold text-white">{item.type}: </span>
                        <span className="text-gray-300">{item.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div className="font-sans bg-gray-900 min-h-screen text-white flex flex-col items-center relative overflow-x-hidden">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
              .font-sans { font-family: 'Inter', sans-serif; }
              .label {
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                font-size: 20px;
                background: rgba(0,0,0,0.4);
                padding: 4px 10px;
                border-radius: 5px;
                pointer-events: none;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
            `}</style>
            
            <div className="relative w-full h-[50vh] flex-shrink-0 cursor-grab active:cursor-grabbing">
                <ThreeScene setActivePage={setActivePage} />
            </div>

            <div className="relative z-10 w-full flex-grow flex items-start justify-center p-8">
               <div className="w-full text-center">
                   {renderContent()}
               </div>
            </div>
            
            <div 
                className="absolute top-8 right-8 z-20 cursor-pointer text-gray-400 hover:text-white transition-colors"
                onClick={() => setActivePage('Home')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
        </div>
    );
}