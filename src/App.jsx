import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

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

// Enhanced OrbitControls with touch support and slower rotation
class SimpleOrbitControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.enableDamping = true;
        this.dampingFactor = 0.12; // Even more damping for slower movement
        this.enablePan = false;
        this.enableZoom = false;
        this.minDistance = 8;
        this.maxDistance = 25;
        
        this.spherical = new THREE.Spherical();
        this.sphericalDelta = new THREE.Spherical();
        
        this.target = new THREE.Vector3();
        this.offset = new THREE.Vector3();
        
        this.rotateSpeed = 0.3; // Even slower rotate speed
        this.isMouseDown = false;
        this.isTouchDown = false;
        this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE };
        
        this.lastMousePosition = { x: 0, y: 0 };
        this.lastTouchPosition = { x: 0, y: 0 };
        
        // Mouse events
        this.handleMouseDown = (event) => {
            if (event.button === 0) {
                this.isMouseDown = true;
                this.lastMousePosition.x = event.clientX;
                this.lastMousePosition.y = event.clientY;
            }
        };
        
        this.handleMouseMove = (event) => {
            if (!this.isMouseDown) return;
            
            const deltaX = event.clientX - this.lastMousePosition.x;
            const deltaY = event.clientY - this.lastMousePosition.y;
            
            this.sphericalDelta.theta -= 2 * Math.PI * deltaX / this.domElement.clientHeight * this.rotateSpeed;
            this.sphericalDelta.phi -= 2 * Math.PI * deltaY / this.domElement.clientHeight * this.rotateSpeed;
            
            this.lastMousePosition.x = event.clientX;
            this.lastMousePosition.y = event.clientY;
        };
        
        this.handleMouseUp = () => {
            this.isMouseDown = false;
        };

        // Touch events for mobile
        this.handleTouchStart = (event) => {
            if (event.touches.length === 1) {
                this.isTouchDown = true;
                this.lastTouchPosition.x = event.touches[0].clientX;
                this.lastTouchPosition.y = event.touches[0].clientY;
            }
        };

        this.handleTouchMove = (event) => {
            if (!this.isTouchDown || event.touches.length !== 1) return;
            
            event.preventDefault(); // Prevent scrolling
            
            const deltaX = event.touches[0].clientX - this.lastTouchPosition.x;
            const deltaY = event.touches[0].clientY - this.lastTouchPosition.y;
            
            this.sphericalDelta.theta -= 2 * Math.PI * deltaX / this.domElement.clientHeight * this.rotateSpeed;
            this.sphericalDelta.phi -= 2 * Math.PI * deltaY / this.domElement.clientHeight * this.rotateSpeed;
            
            this.lastTouchPosition.x = event.touches[0].clientX;
            this.lastTouchPosition.y = event.touches[0].clientY;
        };

        this.handleTouchEnd = () => {
            this.isTouchDown = false;
        };
        
        // Add event listeners
        this.domElement.addEventListener('mousedown', this.handleMouseDown);
        this.domElement.addEventListener('mousemove', this.handleMouseMove);
        this.domElement.addEventListener('mouseup', this.handleMouseUp);
        this.domElement.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        this.domElement.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        this.domElement.addEventListener('touchend', this.handleTouchEnd);
        this.domElement.addEventListener('contextmenu', (event) => event.preventDefault());
        
        // Initialize camera position
        this.offset.copy(this.camera.position).sub(this.target);
        this.spherical.setFromVector3(this.offset);
    }
    
    update() {
        this.offset.copy(this.camera.position).sub(this.target);
        this.spherical.setFromVector3(this.offset);
        
        this.spherical.theta += this.sphericalDelta.theta;
        this.spherical.phi += this.sphericalDelta.phi;
        
        this.spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.spherical.phi));
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));
        
        this.offset.setFromSpherical(this.spherical);
        this.camera.position.copy(this.target).add(this.offset);
        this.camera.lookAt(this.target);
        
        if (this.enableDamping) {
            this.sphericalDelta.theta *= (1 - this.dampingFactor);
            this.sphericalDelta.phi *= (1 - this.dampingFactor);
        } else {
            this.sphericalDelta.set(0, 0, 0);
        }
        
        return false;
    }
    
    dispose() {
        this.domElement.removeEventListener('mousedown', this.handleMouseDown);
        this.domElement.removeEventListener('mousemove', this.handleMouseMove);
        this.domElement.removeEventListener('mouseup', this.handleMouseUp);
        this.domElement.removeEventListener('touchstart', this.handleTouchStart);
        this.domElement.removeEventListener('touchmove', this.handleTouchMove);
        this.domElement.removeEventListener('touchend', this.handleTouchEnd);
    }
}

// --- React Components ---
const ThreeScene = ({ setActivePage }) => {
    const mountRef = useRef(null);
    const hoveredLayerIndexRef = useRef(null);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const mouse = useMemo(() => new THREE.Vector2(), []);
    const sphereGroupRef = useRef(null);
    const invisibleSpheresRef = useRef(null); // For click detection

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

        const controls = new SimpleOrbitControls(camera, renderer.domElement);

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

        // Create invisible spheres for better click detection
        invisibleSpheresRef.current = new THREE.Group();
        scene.add(invisibleSpheresRef.current);

        const baseRadius = 3;
        const radiusStep = 0.5;

        // Create visible spheres and invisible interaction spheres
        COLORS.layers.forEach((layer, i) => {
            const sphereRadius = baseRadius - i * radiusStep;
            if (sphereRadius <= 0) return;
            
            // Visible sphere
            const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
            const material = new THREE.MeshStandardMaterial({
                color: layer.color,
                metalness: 0.1,
                roughness: 0.6,
                clippingPlanes: clippingPlanes,
                clipIntersection: true,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.85,
            });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.userData = { layerIndex: i, layerName: layer.name };
            sphereGroupRef.current.add(sphere);

            // Invisible sphere for interaction (slightly larger for easier clicking)
            const interactionRadius = sphereRadius + 0.1;
            const invisibleGeometry = new THREE.SphereGeometry(interactionRadius, 32, 32);
            const invisibleMaterial = new THREE.MeshBasicMaterial({ 
                visible: false,
                side: THREE.DoubleSide
            });
            const invisibleSphere = new THREE.Mesh(invisibleGeometry, invisibleMaterial);
            invisibleSphere.userData = { layerIndex: i, layerName: layer.name };
            invisibleSpheresRef.current.add(invisibleSphere);
        });

        const handleResize = () => {
            camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
        };

        const getPointerPosition = (event) => {
            const rect = mountNode.getBoundingClientRect();
            let clientX, clientY;
            
            if (event.touches && event.touches.length > 0) {
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
            } else {
                clientX = event.clientX;
                clientY = event.clientY;
            }
            
            return {
                x: ((clientX - rect.left) / rect.width) * 2 - 1,
                y: -((clientY - rect.top) / rect.height) * 2 + 1
            };
        };

        const handlePointerMove = (event) => {
            const pointer = getPointerPosition(event);
            mouse.x = pointer.x;
            mouse.y = pointer.y;
            
            raycaster.setFromCamera(mouse, camera);
            
            // Check intersections with invisible spheres for better detection
            const intersects = raycaster.intersectObjects(invisibleSpheresRef.current.children);
            
            if (intersects.length > 0) {
                // Find the closest intersection
                const closestIntersect = intersects.reduce((closest, current) => {
                    return current.distance < closest.distance ? current : closest;
                });
                
                hoveredLayerIndexRef.current = closestIntersect.object.userData.layerIndex;
            } else {
                hoveredLayerIndexRef.current = null;
            }
        };

        const handleClick = (event) => {
            // Use the same raycasting logic for clicks
            const pointer = getPointerPosition(event);
            raycaster.setFromCamera({ x: pointer.x, y: pointer.y }, camera);
            
            const intersects = raycaster.intersectObjects(invisibleSpheresRef.current.children);
            
            if (intersects.length > 0) {
                const closestIntersect = intersects.reduce((closest, current) => {
                    return current.distance < closest.distance ? current : closest;
                });
                
                const pageName = COLORS.layers[closestIntersect.object.userData.layerIndex].name;
                setActivePage(pageName);
            }
        };

        // Add both mouse and touch event listeners
        window.addEventListener('resize', handleResize);
        mountNode.addEventListener('mousemove', handlePointerMove);
        mountNode.addEventListener('touchmove', handlePointerMove, { passive: true });
        mountNode.addEventListener('click', handleClick);
        mountNode.addEventListener('touchend', handleClick);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            
            const hoveredIndex = hoveredLayerIndexRef.current;

            // Animate all visible spheres
            if (sphereGroupRef.current && sphereGroupRef.current.children.length > 0) {
                sphereGroupRef.current.children.forEach((sphere, i) => {
                    const isHovered = i === hoveredIndex;
                    const targetScale = isHovered ? 1.2 : 1.0;
                    
                    // Smooth scaling animation
                    sphere.scale.x = lerp(sphere.scale.x, targetScale, 0.15);
                    sphere.scale.y = lerp(sphere.scale.y, targetScale, 0.15);
                    sphere.scale.z = lerp(sphere.scale.z, targetScale, 0.15);
                    
                    // Add glow effect for hovered layer
                    if (isHovered) {
                        sphere.material.emissive.copy(sphere.material.color).multiplyScalar(0.15);
                        sphere.material.opacity = 0.95;
                    } else {
                        sphere.material.emissive.setHex(0x000000);
                        sphere.material.opacity = 0.85;
                    }
                });
            }

            // Sync invisible spheres with visible ones for consistent interaction
            if (invisibleSpheresRef.current && sphereGroupRef.current) {
                invisibleSpheresRef.current.children.forEach((invisibleSphere, i) => {
                    const visibleSphere = sphereGroupRef.current.children[i];
                    if (visibleSphere) {
                        invisibleSphere.scale.copy(visibleSphere.scale);
                    }
                });
            }
            
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            controls.dispose();
            window.removeEventListener('resize', handleResize);
            if (mountNode) {
                mountNode.removeEventListener('mousemove', handlePointerMove);
                mountNode.removeEventListener('touchmove', handlePointerMove);
                mountNode.removeEventListener('click', handleClick);
                mountNode.removeEventListener('touchend', handleClick);
                if (renderer.domElement) mountNode.removeChild(renderer.domElement);
            }
        };
    }, [setActivePage, mouse, raycaster]);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing touch-none" />;
};

export default function App() {
    const [activePage, setActivePage] = useState('Home');

    const renderContent = () => {
        const contentData = CONTENT[activePage] || CONTENT.Home;
        return (
            <div key={activePage} className="w-full max-w-3xl mx-auto animate-fadeIn px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{contentData.title}</h1>
                {contentData.subtitle && (
                    <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-4">{contentData.subtitle}</h2>
                )}
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">{contentData.description}</p>
                
                {activePage === 'Projects' && contentData.items.map((item, index) => (
                    <div key={index} className="mb-4 p-4 border-l-2 border-pink-500 bg-gray-800/30 rounded-r-lg">
                        <h3 className="font-semibold text-white text-sm md:text-base">{item.name}</h3>
                        <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                    </div>
                ))}
                {activePage === 'Skills' && (
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {contentData.items.map((item, index) => (
                           <span key={index} className="bg-gray-700/50 text-gray-200 py-1 md:py-2 px-2 md:px-4 rounded-full text-xs md:text-sm">{item}</span>
                        ))}
                    </div>
                )}
                 {activePage === 'Contact' && contentData.items.map((item, index) => (
                    <div key={index} className="mb-2 text-sm md:text-base">
                        <span className="font-semibold text-white">{item.type}: </span>
                        <span className="text-gray-300">{item.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div className="font-sans bg-gray-900 min-h-screen text-white flex flex-col items-center relative overflow-hidden">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
              .font-sans { font-family: 'Inter', sans-serif; }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
              .touch-none { touch-action: none; }
            `}</style>
            
            <div className="relative w-full h-[40vh] md:h-[50vh] flex-shrink-0">
                <ThreeScene setActivePage={setActivePage} />
                
                {/* Layer labels - responsive positioning */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10 text-white">
                    <div className="text-xs md:text-sm opacity-70 mb-1">Hover/Touch layers to explore</div>
                    {COLORS.layers.map((layer, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-1 md:gap-2 text-xs cursor-pointer hover:opacity-100 opacity-60 transition-opacity mb-1"
                            onClick={() => setActivePage(layer.name)}
                        >
                            <div 
                                className="w-2 h-2 md:w-3 md:h-3 rounded-full" 
                                style={{ backgroundColor: layer.color.getStyle() }}
                            ></div>
                            <span className="text-xs md:text-sm">{layer.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full flex-grow flex items-start justify-center p-4 md:p-8">
               <div className="w-full text-center">
                   {renderContent()}
               </div>
            </div>
            
            <div 
                className="absolute top-4 md:top-8 right-4 md:right-8 z-20 cursor-pointer text-gray-400 hover:text-white transition-colors"
                onClick={() => setActivePage('Home')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
        </div>
    );
}