(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function m0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function jx(){if(Q_)return To;Q_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var J_;function Zx(){return J_||(J_=1,Pf.exports=jx()),Pf.exports}var Ye=Zx(),zf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Kx(){if($_)return se;$_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||M}var N=O.prototype=new _;N.constructor=O,E(N,y.prototype),N.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(U,tt,vt,yt,Q,mt){return vt=mt.ref,{$$typeof:o,type:U,key:tt,ref:vt!==void 0?vt:null,props:mt}}function X(U,tt){return I(U.type,tt,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return tt[vt]})}var H=/\/+/g;function ot(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):tt.toString(36)}function rt(){}function pt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(rt,rt):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,tt,vt,yt,Q){var mt=typeof U;(mt==="undefined"||mt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case t:Mt=!0;break;case g:return Mt=U._init,ut(Mt(U._payload),tt,vt,yt,Q)}}if(Mt)return Q=Q(U),Mt=yt===""?"."+ot(U,0):yt,D(Q)?(vt="",Mt!=null&&(vt=Mt.replace(H,"$&/")+"/"),ut(Q,tt,vt,"",function(oe){return oe})):Q!=null&&(w(Q)&&(Q=X(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+Mt)),tt.push(Q)),1;Mt=0;var At=yt===""?".":yt+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)yt=U[Ct],mt=At+ot(yt,Ct),Mt+=ut(yt,tt,vt,mt,Q);else if(Ct=x(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(yt=U.next()).done;)yt=yt.value,mt=At+ot(yt,Ct++),Mt+=ut(yt,tt,vt,mt,Q);else if(mt==="object"){if(typeof U.then=="function")return ut(pt(U),tt,vt,yt,Q);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(U,tt,vt){if(U==null)return U;var yt=[],Q=0;return ut(U,yt,"","",function(mt){return tt.call(vt,mt,Q++)}),yt}function Z(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return se.Children={map:P,forEach:function(U,tt,vt){P(U,function(){tt.apply(this,arguments)},vt)},count:function(U){var tt=0;return P(U,function(){tt++}),tt},toArray:function(U){return P(U,function(tt){return tt})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},se.Component=y,se.Fragment=i,se.Profiler=l,se.PureComponent=O,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cloneElement=function(U,tt,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Q=U.key,mt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(Q=""+tt.key),tt)!B.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(yt[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];yt.children=At}return I(U.type,Q,void 0,void 0,mt,yt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},se.createElement=function(U,tt,vt){var yt,Q={},mt=null;if(tt!=null)for(yt in tt.key!==void 0&&(mt=""+tt.key),tt)B.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=tt[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return I(U,mt,void 0,void 0,null,Q)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=w,se.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},se.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},se.startTransition=function(U){var tt=G.T,vt={};G.T=vt;try{var yt=U(),Q=G.S;Q!==null&&Q(vt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,W)}catch(mt){W(mt)}finally{G.T=tt}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(U){return G.H.use(U)},se.useActionState=function(U,tt,vt){return G.H.useActionState(U,tt,vt)},se.useCallback=function(U,tt){return G.H.useCallback(U,tt)},se.useContext=function(U){return G.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,tt){return G.H.useDeferredValue(U,tt)},se.useEffect=function(U,tt,vt){var yt=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,tt)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(U,tt,vt){return G.H.useImperativeHandle(U,tt,vt)},se.useInsertionEffect=function(U,tt){return G.H.useInsertionEffect(U,tt)},se.useLayoutEffect=function(U,tt){return G.H.useLayoutEffect(U,tt)},se.useMemo=function(U,tt){return G.H.useMemo(U,tt)},se.useOptimistic=function(U,tt){return G.H.useOptimistic(U,tt)},se.useReducer=function(U,tt,vt){return G.H.useReducer(U,tt,vt)},se.useRef=function(U){return G.H.useRef(U)},se.useState=function(U){return G.H.useState(U)},se.useSyncExternalStore=function(U,tt,vt){return G.H.useSyncExternalStore(U,tt,vt)},se.useTransition=function(){return G.H.useTransition()},se.version="19.1.0",se}var tg;function od(){return tg||(tg=1,zf.exports=Kx()),zf.exports}var aa=od();const Qx=m0(aa);var If={exports:{}},bo={},Bf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Jx(){return eg||(eg=1,function(o){function t(P,Z){var W=P.length;P.push(Z);t:for(;0<W;){var St=W-1>>>1,U=P[St];if(0<l(U,Z))P[St]=Z,P[W]=U,W=St;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Z=P[0],W=P.pop();if(W!==Z){P[0]=W;t:for(var St=0,U=P.length,tt=U>>>1;St<tt;){var vt=2*(St+1)-1,yt=P[vt],Q=vt+1,mt=P[Q];if(0>l(yt,W))Q<U&&0>l(mt,yt)?(P[St]=mt,P[Q]=W,St=Q):(P[St]=yt,P[vt]=W,St=vt);else if(Q<U&&0>l(mt,W))P[St]=mt,P[Q]=W,St=Q;else break t}}return Z}function l(P,Z){var W=P.sortIndex-Z.sortIndex;return W!==0?W:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,E=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=P)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function G(P){if(R=!1,D(P),!E)if(i(m)!==null)E=!0,B||(B=!0,ot());else{var Z=i(p);Z!==null&&ut(G,Z.startTime-P)}}var B=!1,I=-1,X=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<X)}function H(){if(y=!1,B){var P=o.unstable_now();w=P;var Z=!0;try{t:{E=!1,R&&(R=!1,O(I),I=-1),M=!0;var W=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var U=St(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,D(P),Z=!0;break e}v===i(m)&&s(m),D(P)}else s(m);v=i(m)}if(v!==null)Z=!0;else{var tt=i(p);tt!==null&&ut(G,tt.startTime-P),Z=!1}}break t}finally{v=null,x=W,M=!1}Z=void 0}}finally{Z?ot():B=!1}}}var ot;if(typeof N=="function")ot=function(){N(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=H,ot=function(){pt.postMessage(null)}}else ot=function(){_(H,0)};function ut(P,Z){I=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var W=x;x=Z;try{return P()}finally{x=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return Z()}finally{x=W}},o.unstable_scheduleCallback=function(P,Z,W){var St=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,P={id:g++,callback:Z,priorityLevel:P,startTime:W,expirationTime:U,sortIndex:-1},W>St?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(R?(O(I),I=-1):R=!0,ut(G,W-St))):(P.sortIndex=U,t(m,P),E||M||(E=!0,B||(B=!0,ot()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Z=x;return function(){var W=x;x=Z;try{return P.apply(this,arguments)}finally{x=W}}}}(Ff)),Ff}var ng;function $x(){return ng||(ng=1,Bf.exports=Jx()),Bf.exports}var Hf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function tS(){if(ig)return wn;ig=1;var o=od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var ag;function eS(){if(ag)return Hf.exports;ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hf.exports=tS(),Hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function nS(){if(sg)return bo;sg=1;var o=$x(),t=od(),i=eS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,r=f;break}if(b===r){S=!0,r=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,r=c;break}if(b===r){S=!0,r=f,a=c;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],U=-1;function tt(e){return{current:e}}function vt(e){0>U||(e.current=St[U],St[U]=null,U--)}function yt(e,n){U++,St[U]=e.current,e.current=n}var Q=tt(null),mt=tt(null),Mt=tt(null),At=tt(null);function Ct(e,n){switch(yt(Mt,n),yt(mt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=b_(n),e=A_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Q),yt(Q,e)}function oe(){vt(Q),vt(mt),vt(Mt)}function Kt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=A_(n,e.type);n!==a&&(yt(mt,e),yt(Q,a))}function Le(e){mt.current===e&&(vt(Q),vt(mt)),At.current===e&&(vt(At),xo._currentValue=W)}var Be=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Sn=o.unstable_shouldYield,Me=o.unstable_requestPaint,he=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,Je=o.unstable_LowPriority,L=o.unstable_IdlePriority,T=o.log,et=o.unstable_setDisableYieldValue,ft=null,dt=null;function lt(e){if(typeof T=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var xt=256,Pt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Wt(r):(S&=b,S!==0?c=Wt(S):a||(a=b&~e,a!==0&&(c=Wt(a))))):(b=r&~f,b!==0?c=Wt(b):S!==0?c=Wt(S):a||(a=r&~e,a!==0&&(c=Wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Ot(a),_t=1<<ct;b[ct]=0,z[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~_t}r!==0&&gt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ee(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:W_(e.type))}function kn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,yn="__reactProps$"+dn,On="__reactContainer$"+dn,qa="__reactEvents$"+dn,Vo="__reactListeners$"+dn,ko="__reactHandles$"+dn,Ya="__reactResources$"+dn,ca="__reactMarker$"+dn;function ua(e){delete e[rn],delete e[yn],delete e[qa],delete e[Vo],delete e[ko]}function Ni(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=D_(e);e!==null;){if(a=e[rn])return a;e=D_(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[rn]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function fa(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[ca]=!0}var Xo=new Set,Wo={};function Pi(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Wo[e]=n,e=0;e<n.length;e++)Xo.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function j(e){return Be.call(st,e)?!0:Be.call(at,e)?!1:Y.test(e)?st[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var It,Jt;function jt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+Jt}var kt=!1;function ce(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var z=S.split(`
`),J=b.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===J.length)for(r=z.length-1,c=J.length-1;1<=r&&0<=c&&z[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==J[c]){var ct=`
`+z[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return jt("Activity");default:return""}}function Ge(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Zt(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ha=/[\n"\\]/g;function Ve(e){return e.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(e,n,a,r,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,xe(n)):a!=null?Rn(e,S,xe(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function Fe(e,n,a,r,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Mi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ad(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&bd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&bd(e,f,n[f])}function Nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return Y0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oc=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Cs=null;function Rd(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[yn]||null;if(!c)throw Error(s(90));zi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ee(r)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var zc=!1;function Cd(e,n,a){if(zc)return e(n,a);zc=!0;try{var r=e(n);return r}finally{if(zc=!1,(Rs!==null||Cs!==null)&&(Ul(),Rs&&(n=Rs,e=Cs,Cs=Rs=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function Ur(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Bi)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Ic=!1}var da=null,Bc=null,Yo=null;function wd(){if(Yo)return Yo;var e,n=Bc,a=n.length,r,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return Yo=c.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Dd(){return!1}function Pn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Dd,this.isPropagationStopped=Dd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Pn(Za),Nr=g({},Za,{view:0,detail:0}),j0=Pn(Nr),Fc,Hc,Or,Qo=g({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Fc=e.screenX-Or.screenX,Hc=e.screenY-Or.screenY):Hc=Fc=0,Or=e),Fc)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Ud=Pn(Qo),Z0=g({},Qo,{dataTransfer:0}),K0=Pn(Z0),Q0=g({},Nr,{relatedTarget:0}),Gc=Pn(Q0),J0=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Pn(J0),tv=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ev=Pn(tv),nv=g({},Za,{data:0}),Ld=Pn(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sv[e])?!!n[e]:!1}function Vc(){return rv}var ov=g({},Nr,{key:function(e){if(e.key){var n=iv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=Pn(ov),cv=g({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Pn(cv),uv=g({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),fv=Pn(uv),hv=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=Pn(hv),pv=g({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=Pn(pv),_v=g({},Za,{newState:0,oldState:0}),gv=Pn(_v),vv=[9,13,27,32],kc=Bi&&"CompositionEvent"in window,Pr=null;Bi&&"documentMode"in document&&(Pr=document.documentMode);var xv=Bi&&"TextEvent"in window&&!Pr,Od=Bi&&(!kc||Pr&&8<Pr&&11>=Pr),Pd=" ",zd=!1;function Id(e,n){switch(e){case"keyup":return vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function Sv(e,n){switch(e){case"compositionend":return Bd(n);case"keypress":return n.which!==32?null:(zd=!0,Pd);case"textInput":return e=n.data,e===Pd&&zd?null:e;default:return null}}function yv(e,n){if(ws)return e==="compositionend"||!kc&&Id(e,n)?(e=wd(),Yo=Bc=da=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mv[e.type]:n==="textarea"}function Hd(e,n,a,r){Rs?Cs?Cs.push(r):Cs=[r]:Rs=r,n=Il(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var zr=null,Ir=null;function Ev(e){S_(e,0)}function Jo(e){var n=ja(e);if(Ee(n))return e}function Gd(e,n){if(e==="change")return n}var Vd=!1;if(Bi){var Xc;if(Bi){var Wc="oninput"in document;if(!Wc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Wc=typeof kd.oninput=="function"}Xc=Wc}else Xc=!1;Vd=Xc&&(!document.documentMode||9<document.documentMode)}function Xd(){zr&&(zr.detachEvent("onpropertychange",Wd),Ir=zr=null)}function Wd(e){if(e.propertyName==="value"&&Jo(Ir)){var n=[];Hd(n,Ir,e,Pc(e)),Cd(Ev,n)}}function Tv(e,n,a){e==="focusin"?(Xd(),zr=n,Ir=a,zr.attachEvent("onpropertychange",Wd)):e==="focusout"&&Xd()}function bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Ir)}function Av(e,n){if(e==="click")return Jo(n)}function Rv(e,n){if(e==="input"||e==="change")return Jo(n)}function Cv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Cv;function Br(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Be.call(n,c)||!Xn(e[c],n[c]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,n){var a=qd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qd(a)}}function jd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=An(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=An(e.document)}return n}function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var wv=Bi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Yc=null,Fr=null,jc=!1;function Kd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ds==null||Ds!==An(r)||(r=Ds,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Br(Fr,r)||(Fr=r,r=Il(Yc,"onSelect"),0<r.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ds)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Zc={},Qd={};Bi&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Qa(e){if(Zc[e])return Zc[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qd)return Zc[e]=n[a];return e}var Jd=Qa("animationend"),$d=Qa("animationiteration"),tp=Qa("animationstart"),Dv=Qa("transitionrun"),Uv=Qa("transitionstart"),Lv=Qa("transitioncancel"),ep=Qa("transitionend"),np=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function ui(e,n){np.set(e,n),Pi(n,[e])}var ip=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},ip.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var ei=[],Ls=0,Qc=0;function $o(){for(var e=Ls,n=Qc=Ls=0;n<e;){var a=ei[n];ei[n++]=null;var r=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&ap(a,c,f)}}function tl(e,n,a,r){ei[Ls++]=e,ei[Ls++]=n,ei[Ls++]=a,ei[Ls++]=r,Qc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jc(e,n,a,r){return tl(e,n,a,r),el(e)}function Ns(e,n){return tl(e,null,null,n),el(e)}function ap(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function el(e){if(50<uo)throw uo=0,sf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Os={};function Nv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,r){return new Nv(e,n,a,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")$c(e)&&(S=1);else if(typeof e=="string")S=Px(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Wn(31,a,n,c),e.elementType=w,e.lanes=f,e;case E:return Ja(a.children,c,f,n);case R:S=8,c|=24;break;case y:return e=Wn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case G:return e=Wn(13,a,n,c),e.elementType=G,e.lanes=f,e;case B:return e=Wn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:S=10;break t;case O:S=9;break t;case D:S=11;break t;case I:S=14;break t;case X:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Wn(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ja(e,n,a,r){return e=Wn(7,e,r,n),e.lanes=a,e}function tu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function eu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ps=[],zs=0,il=null,al=0,ni=[],ii=0,$a=null,Hi=1,Gi="";function ts(e,n){Ps[zs++]=al,Ps[zs++]=il,il=e,al=n}function rp(e,n,a){ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=$a,$a=e;var r=Hi;e=Gi;var c=32-Ot(r)-1;r&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Hi=1<<32-Ot(n)+c|a<<c|r,Gi=f+e}else Hi=1<<f|a<<c|r,Gi=e}function nu(e){e.return!==null&&(ts(e,1),rp(e,1,0))}function iu(e){for(;e===il;)il=Ps[--zs],Ps[zs]=null,al=Ps[--zs],Ps[zs]=null;for(;e===$a;)$a=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null}var Ln=null,Ze=null,Ce=!1,es=null,Ei=!1,au=Error(s(519));function ns(e){var n=Error(s(418,""));throw Vr(ti(n,e)),au}function op(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[yn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)pe(ho[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),je(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Mn(n,r.value,r.defaultValue,r.children),je(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||T_(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Bl),n=!0):n=!1,n||ns(e)}function lp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Ln=Ln.return}}function Hr(e){if(e!==Ln)return!1;if(!Ce)return lp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ns(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,wa(e.type)?(e=bf,bf=null,Ze=e):Ze=n):Ze=Ln?hi(e.stateNode.nextSibling):null;return!0}function Gr(){Ze=Ln=null,Ce=!1}function cp(){var e=es;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),es=null),e}function Vr(e){es===null?es=[e]:es.push(e)}var su=tt(null),is=null,Vi=null;function pa(e,n,a){yt(su,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=su.current,vt(su)}function ru(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function ou(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ru(f.return,a,e),r||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ru(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function kr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=c.type;Xn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===At.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&ou(n,e,a,r),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return up(is,e)}function rl(e,n){return is===null&&as(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var Ov=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Pv=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new Ov,data:new Map,refCount:0}}function Xr(e){e.refCount--,e.refCount===0&&Pv(zv,function(){e.controller.abort()})}var Wr=null,cu=0,Is=0,Bs=null;function Iv(e,n){if(Wr===null){var a=Wr=[];cu=0,Is=hf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return cu++,n.then(fp,fp),n}function fp(){if(--cu===0&&Wr!==null){Bs!==null&&(Bs.status="fulfilled");var e=Wr;Wr=null,Is=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var hp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iv(e,n),hp!==null&&hp(e,n)};var ss=tt(null);function uu(){var e=ss.current;return e!==null?e:ke.pooledCache}function ol(e,n){n===null?yt(ss,ss.current):yt(ss,n.pool)}function dp(){var e=uu();return e===null?null:{parent:ln._currentValue,pool:e}}var qr=Error(s(460)),pp=Error(s(474)),ll=Error(s(542)),fu={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cl(){}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(cl,cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(cl,cl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw Yr=n,qr}}var Yr=null;function gp(){if(Yr===null)throw Error(s(459));var e=Yr;return Yr=null,e}function vp(e){if(e===qr||e===ll)throw Error(s(483))}var ma=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=el(e),ap(e,null,a),n}return tl(e,r,n,a),el(e)}function jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}function pu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var mu=!1;function Zr(){if(mu){var e=Bs;if(e!==null)throw e}}function Kr(e,n,a,r){mu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,J=z.next;z.next=null,S===null?f=J:S.next=J,S=z;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==S&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=z))}if(f!==null){var _t=c.baseState;S=0,ct=J=z=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(ye&nt)===nt:(r&nt)===nt){nt!==0&&nt===Is&&(mu=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=e,Qt=b;nt=n;var Pe=a;switch(Qt.tag){case 1:if(te=Qt.payload,typeof te=="function"){_t=te.call(Pe,_t,nt);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Qt.payload,nt=typeof te=="function"?te.call(Pe,_t,nt):te,nt==null)break t;_t=g({},_t,nt);break t;case 2:ma=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=it,z=_t):ct=ct.next=it,S|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(z=_t),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ba|=S,e.lanes=S,e.memoizedState=_t}}function xp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Sp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xp(a[e],n)}var Fs=tt(null),ul=tt(0);function yp(e,n){e=Ki,yt(ul,e),yt(Fs,n),Ki=e|n.baseLanes}function _u(){yt(ul,Ki),yt(Fs,Fs.current)}function gu(){Ki=ul.current,vt(Fs),vt(ul)}var va=0,ue=null,Ne=null,nn=null,fl=!1,Hs=!1,rs=!1,hl=0,Qr=0,Gs=null,Fv=0;function $e(){throw Error(s(321))}function vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function xu(e,n,a,r,c,f){return va=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?am:sm,rs=!1,f=a(r,c),rs=!1,Hs&&(f=Ep(n,a,r,c)),Mp(e),f}function Mp(e){P.H=vl;var n=Ne!==null&&Ne.next!==null;if(va=0,nn=Ne=ue=null,fl=!1,Qr=0,Gs=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&sl(e)&&(mn=!0))}function Ep(e,n,a,r){ue=e;var c=0;do{if(Hs&&(Gs=null),Qr=0,Hs=!1,25<=c)throw Error(s(301));if(c+=1,nn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=qv,f=n(a,r)}while(Hs);return f}function Hv(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function Su(){var e=hl!==0;return hl=0,e}function yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Mu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}va=0,nn=Ne=ue=null,Hs=!1,Qr=hl=0,Gs=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=nn===null?ue.memoizedState:nn.next;if(n!==null)nn=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var n=Qr;return Qr+=1,Gs===null&&(Gs=[]),e=_p(Gs,e,n),n=ue,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?am:sm),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Tu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=an();return bu(n,Ne,e)}function bu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,z=null,J=n,ct=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(ye&_t)===_t:(va&_t)===_t){var nt=J.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Is&&(ct=!0);else if((va&nt)===nt){J=J.next,nt===Is&&(ct=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=_t,S=f):z=z.next=_t,ue.lanes|=nt,ba|=nt;_t=J.action,rs&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else nt={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=nt,S=f):z=z.next=nt,ue.lanes|=_t,ba|=_t;J=J.next}while(J!==null&&J!==n);if(z===null?S=f:z.next=b,!Xn(f,e.memoizedState)&&(mn=!0,ct&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Au(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Tp(e,n,a){var r=ue,c=an(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Xn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,mn=!0),c=c.queue;var b=Rp.bind(null,r,c,e);if($r(2048,8,b,[e]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,Vs(9,ml(),Ap.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(va&124)!==0||bp(r,n,a)}return a}function bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Eu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ap(e,n,a,r){n.value=a,n.getSnapshot=r,Cp(n)&&wp(e)}function Rp(e,n,a){return a(function(){Cp(n)&&wp(e)})}function Cp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function wp(e){var n=Ns(e,2);n!==null&&Kn(n,e,2)}function Ru(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),rs){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Dp(e,n,a,r){return e.baseState=a,bu(e,Ne,typeof r=="function"?r:Xi)}function Gv(e,n,a,r,c){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var b=a(c,r),z=P.S;z!==null&&z(S,b),Lp(e,n,b)}catch(J){Cu(e,n,J)}finally{P.T=f}}else try{f=a(c,r),Lp(e,n,f)}catch(J){Cu(e,n,J)}}function Lp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Np(e,n,r)},function(r){return Cu(e,n,r)}):Np(e,n,a)}function Np(e,n,a){n.status="fulfilled",n.value=a,Op(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Up(e,a)))}function Cu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Op(n),n=n.next;while(n!==r)}e.action=null}function Op(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pp(e,n){return n}function zp(e,n){if(Ce){var a=ke.formState;if(a!==null){t:{var r=ue;if(Ce){if(Ze){e:{for(var c=Ze,f=Ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=hi(c.nextSibling),r=c.data==="F!";break t}}ns(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:n},a.queue=r,a=em.bind(null,ue,r),r.dispatch=a,r=Ru(!1),f=Nu.bind(null,ue,!1,r.queue),r=zn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Gv.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Ip(e){var n=an();return Bp(n,Ne,e)}function Bp(e,n,a){if(n=bu(e,n,Pp)[0],e=pl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(S){throw S===qr?ll:S}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Vs(9,ml(),Vv.bind(null,c,a),null)),[r,f,e]}function Vv(e,n){e.action=n}function Fp(e){var n=an(),a=Ne;if(a!==null)return Bp(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Vs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Eu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function ml(){return{destroy:void 0,resource:void 0}}function Hp(){return an().memoizedState}function _l(e,n,a,r){var c=zn();r=r===void 0?null:r,ue.flags|=e,c.memoizedState=Vs(1|n,ml(),a,r)}function $r(e,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Ne!==null&&r!==null&&vu(r,Ne.memoizedState.deps)?c.memoizedState=Vs(n,f,a,r):(ue.flags|=e,c.memoizedState=Vs(1|n,f,a,r))}function Gp(e,n){_l(8390656,8,e,n)}function Vp(e,n){$r(2048,8,e,n)}function kp(e,n){return $r(4,2,e,n)}function Xp(e,n){return $r(4,4,e,n)}function Wp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,a){a=a!=null?a.concat([e]):null,$r(4,4,Wp.bind(null,n,e),a)}function wu(){}function Yp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&vu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function jp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&vu(n,r[1]))return r[0];if(r=e(),rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r}function Du(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Qm(),ue.lanes|=e,ba|=e,a)}function Zp(e,n,a,r){return Xn(a,n)?a:Fs.current!==null?(e=Du(e,a,r),Xn(e,n)||(mn=!0),e):(va&42)===0?(mn=!0,e.memoizedState=a):(e=Qm(),ue.lanes|=e,ba|=e,n)}function Kp(e,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,b={};P.T=b,Nu(e,!1,n,a);try{var z=c(),J=P.S;if(J!==null&&J(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=Bv(z,r);to(e,n,ct,Zn(e))}else to(e,n,r,Zn(e))}catch(_t){to(e,n,{then:function(){},status:"rejected",reason:_t},Zn())}finally{Z.p=f,P.T=S}}function kv(){}function Uu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Qp(e).queue;Kp(e,c,n,W,a===null?kv:function(){return Jp(e),a(r)})}function Qp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Qp(e).next.queue;to(e,n,{},Zn())}function Lu(){return Cn(xo)}function $p(){return an().memoizedState}function tm(){return an().memoizedState}function Xv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=_a(a);var r=ga(n,e,a);r!==null&&(Kn(r,n,a),jr(r,n,a)),n={cache:lu()},e.payload=n;return}n=n.return}}function Wv(e,n,a){var r=Zn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?nm(n,a):(a=Jc(e,n,a,r),a!==null&&(Kn(a,e,r),im(a,n,r)))}function em(e,n,a){var r=Zn();to(e,n,a,r)}function to(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))nm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,S))return tl(e,n,c,0),ke===null&&$o(),!1}catch{}finally{}if(a=Jc(e,n,c,r),a!==null)return Kn(a,e,r),im(a,n,r),!0}return!1}function Nu(e,n,a,r){if(r={lane:2,revertLane:hf(),action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=Jc(e,a,r,2),n!==null&&Kn(n,e,2)}function gl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function nm(e,n){Hs=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}var vl={readContext:Cn,use:dl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},am={readContext:Cn,use:dl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Gp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Wp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var c=a(n);if(rs){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Wv.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ru(e);var n=e.queue,a=em.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:wu,useDeferredValue:function(e,n){var a=zn();return Du(a,e,n)},useTransition:function(){var e=Ru(!1);return e=Kp.bind(null,ue,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=zn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ye&124)!==0||bp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Gp(Rp.bind(null,r,f,e),[e]),r.flags|=2048,Vs(9,ml(),Ap.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=ke.identifierPrefix;if(Ce){var a=Gi,r=Hi;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Fv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Lu,useFormState:zp,useActionState:zp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tu,useCacheRefresh:function(){return zn().memoizedState=Xv.bind(null,ue)}},sm={readContext:Cn,use:dl,useCallback:Yp,useContext:Cn,useEffect:Vp,useImperativeHandle:qp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:jp,useReducer:pl,useRef:Hp,useState:function(){return pl(Xi)},useDebugValue:wu,useDeferredValue:function(e,n){var a=an();return Zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=pl(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Lu,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var a=an();return Dp(a,Ne,e,n)},useMemoCache:Tu,useCacheRefresh:tm},qv={readContext:Cn,use:dl,useCallback:Yp,useContext:Cn,useEffect:Vp,useImperativeHandle:qp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:jp,useReducer:Au,useRef:Hp,useState:function(){return Au(Xi)},useDebugValue:wu,useDeferredValue:function(e,n){var a=an();return Ne===null?Du(a,e,n):Zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Au(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Lu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,n){var a=an();return Ne!==null?Dp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:tm},ks=null,eo=0;function xl(e){var n=eo;return eo+=1,ks===null&&(ks=[]),_p(ks,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){var n=e._init;return n(e._payload)}function om(e){function n(q,V){if(e){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function r(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Fi(q,V),q.index=0,q.sibling=null,q}function f(q,V,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=67108866,V):K):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,V,K,ht){return V===null||V.tag!==6?(V=tu(K,q.mode,ht),V.return=q,V):(V=c(V,K),V.return=q,V)}function z(q,V,K,ht){var Ft=K.type;return Ft===E?ct(q,V,K.props.children,ht,K.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===X&&rm(Ft)===V.type)?(V=c(V,K.props),no(V,K),V.return=q,V):(V=nl(K.type,K.key,K.props,null,q.mode,ht),no(V,K),V.return=q,V)}function J(q,V,K,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=eu(K,q.mode,ht),V.return=q,V):(V=c(V,K.children||[]),V.return=q,V)}function ct(q,V,K,ht,Ft){return V===null||V.tag!==7?(V=Ja(K,q.mode,ht,Ft),V.return=q,V):(V=c(V,K),V.return=q,V)}function _t(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=tu(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=nl(V.type,V.key,V.props,null,q.mode,K),no(K,V),K.return=q,K;case M:return V=eu(V,q.mode,K),V.return=q,V;case X:var ht=V._init;return V=ht(V._payload),_t(q,V,K)}if(ut(V)||ot(V))return V=Ja(V,q.mode,K,null),V.return=q,V;if(typeof V.then=="function")return _t(q,xl(V),K);if(V.$$typeof===N)return _t(q,rl(q,V),K);Sl(q,V)}return null}function nt(q,V,K,ht){var Ft=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:b(q,V,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?z(q,V,K,ht):null;case M:return K.key===Ft?J(q,V,K,ht):null;case X:return Ft=K._init,K=Ft(K._payload),nt(q,V,K,ht)}if(ut(K)||ot(K))return Ft!==null?null:ct(q,V,K,ht,null);if(typeof K.then=="function")return nt(q,V,xl(K),ht);if(K.$$typeof===N)return nt(q,V,rl(q,K),ht);Sl(q,K)}return null}function it(q,V,K,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(K)||null,b(V,q,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return q=q.get(ht.key===null?K:ht.key)||null,z(V,q,ht,Ft);case M:return q=q.get(ht.key===null?K:ht.key)||null,J(V,q,ht,Ft);case X:var fe=ht._init;return ht=fe(ht._payload),it(q,V,K,ht,Ft)}if(ut(ht)||ot(ht))return q=q.get(K)||null,ct(V,q,ht,Ft,null);if(typeof ht.then=="function")return it(q,V,K,xl(ht),Ft);if(ht.$$typeof===N)return it(q,V,K,rl(V,ht),Ft);Sl(V,ht)}return null}function te(q,V,K,ht){for(var Ft=null,fe=null,Xt=V,$t=V=0,gn=null;Xt!==null&&$t<K.length;$t++){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var be=nt(q,Xt,K[$t],ht);if(be===null){Xt===null&&(Xt=gn);break}e&&Xt&&be.alternate===null&&n(q,Xt),V=f(be,V,$t),fe===null?Ft=be:fe.sibling=be,fe=be,Xt=gn}if($t===K.length)return a(q,Xt),Ce&&ts(q,$t),Ft;if(Xt===null){for(;$t<K.length;$t++)Xt=_t(q,K[$t],ht),Xt!==null&&(V=f(Xt,V,$t),fe===null?Ft=Xt:fe.sibling=Xt,fe=Xt);return Ce&&ts(q,$t),Ft}for(Xt=r(Xt);$t<K.length;$t++)gn=it(Xt,q,$t,K[$t],ht),gn!==null&&(e&&gn.alternate!==null&&Xt.delete(gn.key===null?$t:gn.key),V=f(gn,V,$t),fe===null?Ft=gn:fe.sibling=gn,fe=gn);return e&&Xt.forEach(function(Oa){return n(q,Oa)}),Ce&&ts(q,$t),Ft}function Qt(q,V,K,ht){if(K==null)throw Error(s(151));for(var Ft=null,fe=null,Xt=V,$t=V=0,gn=null,be=K.next();Xt!==null&&!be.done;$t++,be=K.next()){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var Oa=nt(q,Xt,be.value,ht);if(Oa===null){Xt===null&&(Xt=gn);break}e&&Xt&&Oa.alternate===null&&n(q,Xt),V=f(Oa,V,$t),fe===null?Ft=Oa:fe.sibling=Oa,fe=Oa,Xt=gn}if(be.done)return a(q,Xt),Ce&&ts(q,$t),Ft;if(Xt===null){for(;!be.done;$t++,be=K.next())be=_t(q,be.value,ht),be!==null&&(V=f(be,V,$t),fe===null?Ft=be:fe.sibling=be,fe=be);return Ce&&ts(q,$t),Ft}for(Xt=r(Xt);!be.done;$t++,be=K.next())be=it(Xt,q,$t,be.value,ht),be!==null&&(e&&be.alternate!==null&&Xt.delete(be.key===null?$t:be.key),V=f(be,V,$t),fe===null?Ft=be:fe.sibling=be,fe=be);return e&&Xt.forEach(function(Yx){return n(q,Yx)}),Ce&&ts(q,$t),Ft}function Pe(q,V,K,ht){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;V!==null;){if(V.key===Ft){if(Ft=K.type,Ft===E){if(V.tag===7){a(q,V.sibling),ht=c(V,K.props.children),ht.return=q,q=ht;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===X&&rm(Ft)===V.type){a(q,V.sibling),ht=c(V,K.props),no(ht,K),ht.return=q,q=ht;break t}a(q,V);break}else n(q,V);V=V.sibling}K.type===E?(ht=Ja(K.props.children,q.mode,ht,K.key),ht.return=q,q=ht):(ht=nl(K.type,K.key,K.props,null,q.mode,ht),no(ht,K),ht.return=q,q=ht)}return S(q);case M:t:{for(Ft=K.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),ht=c(V,K.children||[]),ht.return=q,q=ht;break t}else{a(q,V);break}else n(q,V);V=V.sibling}ht=eu(K,q.mode,ht),ht.return=q,q=ht}return S(q);case X:return Ft=K._init,K=Ft(K._payload),Pe(q,V,K,ht)}if(ut(K))return te(q,V,K,ht);if(ot(K)){if(Ft=ot(K),typeof Ft!="function")throw Error(s(150));return K=Ft.call(K),Qt(q,V,K,ht)}if(typeof K.then=="function")return Pe(q,V,xl(K),ht);if(K.$$typeof===N)return Pe(q,V,rl(q,K),ht);Sl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),ht=c(V,K),ht.return=q,q=ht):(a(q,V),ht=tu(K,q.mode,ht),ht.return=q,q=ht),S(q)):a(q,V)}return function(q,V,K,ht){try{eo=0;var Ft=Pe(q,V,K,ht);return ks=null,Ft}catch(Xt){if(Xt===qr||Xt===ll)throw Xt;var fe=Wn(29,Xt,null,q.mode);return fe.lanes=ht,fe.return=q,fe}finally{}}}var Xs=om(!0),lm=om(!1),ai=tt(null),Ti=null;function xa(e){var n=e.alternate;yt(cn,cn.current&1),yt(ai,e),Ti===null&&(n===null||Fs.current!==null||n.memoizedState!==null)&&(Ti=e)}function cm(e){if(e.tag===22){if(yt(cn,cn.current),yt(ai,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else Sa()}function Sa(){yt(cn,cn.current),yt(ai,ai.current)}function Wi(e){vt(ai),Ti===e&&(Ti=null),vt(cn)}var cn=tt(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Tf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ou(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Pu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Zn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Kn(n,e,r),jr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Zn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Kn(n,e,r),jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(e,r,a),n!==null&&(Kn(n,e,a),jr(n,e,a))}};function um(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!Br(a,r)||!Br(c,f):!0}function fm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Pu.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hm(e){Ml(e)}function dm(e){console.error(e)}function pm(e){Ml(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function zu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function _m(e){return e=_a(e),e.tag=3,e}function gm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){mm(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){mm(n,a,r),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Yv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ti===null?of():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===fu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),cf(e,r,c)),!1;case 22:return a.flags|=65536,r===fu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),cf(e,r,c)),!1}throw Error(s(435,a.tag))}return cf(e,r,c),of(),!1}if(Ce)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==au&&(e=Error(s(422),{cause:r}),Vr(ti(e,a)))):(r!==au&&(n=Error(s(423),{cause:r}),Vr(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ti(r,a),c=zu(e.stateNode,r,c),pu(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),co===null?co=[f]:co.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=zu(a.stateNode,r,e),pu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_m(c),gm(c,e,a,r),pu(a,c),!1}a=a.return}while(a!==null);return!1}var vm=Error(s(461)),mn=!1;function En(e,n,a,r){n.child=e===null?lm(n,null,a,r):Xs(n,e.child,a,r)}function xm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var b in r)b!=="ref"&&(S[b]=r[b])}else S=r;return as(n),r=xu(e,n,a,S,f,c),b=Su(),e!==null&&!mn?(yu(e,n,c),qi(e,n,c)):(Ce&&b&&nu(n),n.flags|=1,En(e,n,r,c),n.child)}function Sm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!$c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(e,n,f,r,c)):(e=nl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Xu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Br,a(S,r)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Br(f,r)&&e.ref===n.ref)if(mn=!1,n.pendingProps=r=f,Xu(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,qi(e,n,c)}return Iu(e,n,a,r,c)}function Mm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return Em(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,f!==null?f.cachePool:null),f!==null?yp(n,f):_u(),cm(n);else return n.lanes=n.childLanes=536870912,Em(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ol(n,f.cachePool),yp(n,f),Sa(),n.memoizedState=null):(e!==null&&ol(n,null),_u(),Sa());return En(e,n,c,a),n.child}function Em(e,n,a,r){var c=uu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ol(n,null),_u(),cm(n),e!==null&&kr(e,n,r,!0),null}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Iu(e,n,a,r,c){return as(n),a=xu(e,n,a,r,void 0,c),r=Su(),e!==null&&!mn?(yu(e,n,c),qi(e,n,c)):(Ce&&r&&nu(n),n.flags|=1,En(e,n,a,c),n.child)}function Tm(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=Ep(n,r,a,c),Mp(e),r=Su(),e!==null&&!mn?(yu(e,n,f),qi(e,n,f)):(Ce&&r&&nu(n),n.flags|=1,En(e,n,a,f),n.child)}function bm(e,n,a,r,c){if(as(n),n.stateNode===null){var f=Os,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},hu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Os,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ou(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Pu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=os(a,b);f.props=z;var J=f.context,ct=a.contextType;S=Os,typeof ct=="object"&&ct!==null&&(S=Cn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==S)&&fm(n,f,r,S),ma=!1;var nt=n.memoizedState;f.state=nt,Kr(n,r,f,c),Zr(),J=n.memoizedState,b||nt!==J||ma?(typeof _t=="function"&&(Ou(n,a,_t,r),J=n.memoizedState),(z=ma||um(n,a,z,r,nt,J,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=S,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,du(e,n),S=n.memoizedProps,ct=os(a,S),f.props=ct,_t=n.pendingProps,nt=f.context,J=a.contextType,z=Os,typeof J=="object"&&J!==null&&(z=Cn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||nt!==z)&&fm(n,f,r,z),ma=!1,nt=n.memoizedState,f.state=nt,Kr(n,r,f,c),Zr();var it=n.memoizedState;S!==_t||nt!==it||ma||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof b=="function"&&(Ou(n,a,b,r),it=n.memoizedState),(ct=ma||um(n,a,ct,r,nt,it,z)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,it,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,it,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=z,r=ct):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Xs(n,e.child,null,c),n.child=Xs(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=qi(e,n,c),e}function Am(e,n,a,r){return Gr(),n.flags|=256,En(e,n,a,r),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(e){return{baseLanes:e,cachePool:dp()}}function Hu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Rm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(c?xa(n):Sa(),Ce){var b=Ze,z;if(z=b){t:{for(z=b,b=Ei;z.nodeType!==8;){if(!b){b=null;break t}if(z=hi(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Ln=n,Ze=null,z=!0):z=!1}z||ns(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Tf(b)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return b=r.children,r=r.fallback,c?(Sa(),c=n.mode,b=bl({mode:"hidden",children:b},c),r=Ja(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Fu(a),c.childLanes=Hu(e,S,a),n.memoizedState=Bu,r):(xa(n),Gu(n,b))}if(z=e.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Vu(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=r.fallback,b=n.mode,r=bl({mode:"visible",children:r.children},b),c=Ja(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Xs(n,e.child,null,a),r=n.child,r.memoizedState=Fu(a),r.childLanes=Hu(e,S,a),n.memoizedState=Bu,n=c);else if(xa(n),Tf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var J=S.dgst;S=J,r=Error(s(419)),r.stack="",r.digest=S,Vr({value:r,source:null,stack:null}),n=Vu(e,n,a)}else if(mn||kr(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=ke,S!==null&&(r=a&-a,r=(r&42)!==0?1:ee(r),r=(r&(S.suspendedLanes|a))!==0?0:r,r!==0&&r!==z.retryLane))throw z.retryLane=r,Ns(e,r),Kn(S,e,r),vm;b.data==="$?"||of(),n=Vu(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=hi(b.nextSibling),Ln=n,Ce=!0,es=null,Ei=!1,e!==null&&(ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=$a,Hi=e.id,Gi=e.overflow,$a=n),n=Gu(n,r.children),n.flags|=4096);return n}return c?(Sa(),c=r.fallback,b=n.mode,z=e.child,J=z.sibling,r=Fi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,J!==null?c=Fi(J,c):(c=Ja(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Fu(a):(z=b.cachePool,z!==null?(J=ln._currentValue,z=z.parent!==J?{parent:J,pool:J}:z):z=dp(),b={baseLanes:b.baseLanes|a,cachePool:z}),c.memoizedState=b,c.childLanes=Hu(e,S,a),n.memoizedState=Bu,r):(xa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Gu(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vu(e,n,a){return Xs(n,e.child,null,a),e=Gu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ru(e.return,n,a)}function ku(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function wm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(En(e,n,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cm(e,a,n);else if(e.tag===19)Cm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(yt(cn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ku(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&yl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ku(n,!0,a,null,f);break;case"together":ku(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Xu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function jv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),pa(n,ln,e.memoizedState.cache),Gr();break;case 27:case 5:Kt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(e,n,a):(xa(n),e=qi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(kr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(cn,cn.current),r)break;return null;case 22:case 23:return n.lanes=0,Mm(e,n,a);case 24:pa(n,ln,e.memoizedState.cache)}return qi(e,n,a)}function Dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Xu(e,a)&&(n.flags&128)===0)return mn=!1,jv(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ce&&(n.flags&1048576)!==0&&rp(n,al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")$c(r)?(e=os(r,e),n.tag=1,n=bm(null,n,r,e,a)):(n.tag=0,n=Iu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===D){n.tag=11,n=xm(null,n,r,e,a);break t}else if(c===I){n.tag=14,n=Sm(null,n,r,e,a);break t}}throw n=pt(r)||r,Error(s(306,n,""))}}return n;case 0:return Iu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=os(r,n.pendingProps),bm(e,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,du(e,n),Kr(n,r,null,a);var S=n.memoizedState;if(r=S.cache,pa(n,ln,r),r!==f.cache&&ou(n,[ln],a,!0),Zr(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Am(e,n,r,a);break t}else if(r!==c){c=ti(Error(s(424)),n),Vr(c),n=Am(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=hi(e.firstChild),Ln=n,Ce=!0,es=null,Ei=!0,a=lm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gr(),r===c){n=qi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=O_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,r=Fl(Mt.current).createElement(a),r[rn]=n,r[yn]=e,bn(r,a,e),en(r),n.stateNode=r):n.memoizedState=O_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ce&&(r=n.stateNode=U_(n.type,n.pendingProps,Mt.current),Ln=n,Ei=!0,c=Ze,wa(n.type)?(bf=c,Ze=hi(r.firstChild)):Ze=c),En(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((c=r=Ze)&&(r=Mx(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,Ln=n,Ze=hi(r.firstChild),Ei=!1,c=!0):c=!1),c||ns(n)),Kt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,yf(c,f)?r=null:S!==null&&yf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=xu(e,n,Hv,null,null,a),xo._currentValue=c),Tl(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=Ex(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Ln=n,Ze=null,e=!0):e=!1),e||ns(n)),null;case 13:return Rm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Xs(n,null,r,a):En(e,n,r,a),n.child;case 11:return xm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Cn(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Sm(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return wm(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=bl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Mm(e,n,a);case 24:return as(n),r=Cn(ln),e===null?(c=uu(),c===null&&(c=ke,f=lu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},hu(n),pa(n,ln,c)):((e.lanes&a)!==0&&(du(e,n),Kr(n,null,null,a),Zr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,ln,r)):(r=f.cache,pa(n,ln,r),r!==c.cache&&ou(n,[ln],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function Um(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F_(n)){if(n=ai.current,n!==null&&((ye&4194048)===ye?Ti!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ti))throw Yr=fu,pp;e.flags|=8192}}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,js|=n)}function io(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Zv(e,n,a){var r=n.pendingProps;switch(iu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(qe(n),Um(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),qe(n),Um(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==r&&Yi(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Q.current,Hr(n)?op(n):(e=U_(c,r,a),n.stateNode=e,Yi(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=Q.current,Hr(n))op(n);else{switch(c=Fl(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[rn]=n,e[yn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,Hr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||T_(e.nodeValue,a)),e||ns(n)}else e=Fl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&_f(n.stateNode.containerInfo),qe(n),null;case 10:return ki(n.type),qe(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return qe(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)io(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,io(c,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sp(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&he()>wl&&(n.flags|=128,r=!0,io(c,!1),n.lanes=4194304)}else{if(!r)if(e=yl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),io(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ce)return qe(n),null}else 2*he()-c.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,r=!0,io(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=he(),n.sibling=null,e=cn.current,yt(cn,r?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Wi(n),gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Kv(e,n){switch(iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(cn),null;case 4:return oe(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),gu(),e!==null&&vt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function Lm(e,n){switch(iu(n),n.tag){case 3:ki(ln),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Wi(n);break;case 19:vt(cn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),gu(),e!==null&&vt(ss);break;case 24:ki(ln)}}function ao(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(b){He(n,n.return,b)}}function ya(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var z=a,J=b;try{J()}catch(ct){He(c,z,ct)}}}r=r.next}while(r!==f)}}catch(ct){He(n,n.return,ct)}}function Nm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sp(n,a)}catch(r){He(e,e.return,r)}}}function Om(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){He(e,n,c)}}function bi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Pm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function Wu(e,n,a){try{var r=e.stateNode;gx(r,e.type,a,n),r[yn]=n}catch(c){He(e,e.return,c)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function qu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bl));else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yu(e,n,a),e=e.sibling;e!==null;)Yu(e,n,a),e=e.sibling}function Rl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function Im(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,r,a),n[rn]=e,n[yn]=a}catch(f){He(e,e.return,f)}}var ji=!1,tn=!1,ju=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Qv(e,n){if(e=e.containerInfo,xf=Wl,e=Zd(e),qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,z=-1,J=0,ct=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||c!==0&&_t.nodeType!==3||(b=S+c),_t!==f||r!==0&&_t.nodeType!==3||(z=S+r),_t.nodeType===3&&(S+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++J===c&&(b=S),nt===f&&++ct===r&&(z=S),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:e,selectionRange:a},Wl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var te=os(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(te,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){He(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ef(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Fm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),r&4&&ao(5,a);break;case 1:if(Ma(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}r&64&&Nm(a),r&512&&so(a,a.return);break;case 3:if(Ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&r&4&&Im(a);case 26:case 5:Ma(e,a),n===null&&r&4&&Pm(a),r&512&&so(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),r&4&&Vm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rx.bind(null,a),Tx(e,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||tn,c=ji;var f=tn;ji=r,(tn=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),ji=c,tn=f}break;case 30:break;default:Ma(e,a)}}function Hm(e){var n=e.alternate;n!==null&&(e.alternate=null,Hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,In=!1;function Zi(e,n,a){for(a=a.child;a!==null;)Gm(e,n,a),a=a.sibling}function Gm(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:tn||bi(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||bi(a,n);var r=We,c=In;wa(a.type)&&(We=a.stateNode,In=!1),Zi(e,n,a),mo(a.stateNode),We=r,In=c;break;case 5:tn||bi(a,n);case 6:if(r=We,c=In,We=null,Zi(e,n,a),We=r,In=c,We!==null)if(In)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:We!==null&&(In?(e=We,w_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):w_(We,a.stateNode));break;case 4:r=We,c=In,We=a.stateNode.containerInfo,In=!0,Zi(e,n,a),We=r,In=c;break;case 0:case 11:case 14:case 15:tn||ya(2,a,n),tn||ya(4,a,n),Zi(e,n,a);break;case 1:tn||(bi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Om(a,n,r)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:tn=(r=tn)||a.memoizedState!==null,Zi(e,n,a),tn=r;break;default:Zi(e,n,a)}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){He(n,n.return,a)}}function Jv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(s(435,e.tag))}}function Zu(e,n){var a=Jv(e);n.forEach(function(r){var c=ox.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){We=b.stateNode,In=!1;break t}break;case 5:We=b.stateNode,In=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(We===null)throw Error(s(160));Gm(f,S,c),We=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var fi=null;function km(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),r&4&&(ya(3,e,e.return),ao(3,e),ya(5,e,e.return));break;case 1:qn(n,e),Yn(e),r&512&&(tn||a===null||bi(a,a.return)),r&64&&ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=fi;if(qn(n,e),Yn(e),r&512&&(tn||a===null||bi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ca]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,r,a),f[rn]=e,en(f),r=f;break t;case"link":var S=I_("link","href",c).get(r+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;case"meta":if(S=I_("meta","content",c).get(r+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,en(f),r=f}e.stateNode=r}else B_(c,e.type,e.stateNode);else e.stateNode=z_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?B_(c,e.type,e.stateNode):z_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Wu(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),r&512&&(tn||a===null||bi(a,a.return)),a!==null&&r&4&&Wu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),r&512&&(tn||a===null||bi(a,a.return)),e.flags&32){c=e.stateNode;try{Mi(c,"")}catch(it){He(e,e.return,it)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Wu(e,c,a!==null?a.memoizedProps:c)),r&1024&&(ju=!0);break;case 6:if(qn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(it){He(e,e.return,it)}}break;case 3:if(Vl=null,c=fi,fi=Hl(n.containerInfo),qn(n,e),fi=c,Yn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(it){He(e,e.return,it)}ju&&(ju=!1,Xm(e));break;case 4:r=fi,fi=Hl(e.stateNode.containerInfo),qn(n,e),Yn(e),fi=r;break;case 12:qn(n,e),Yn(e);break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ef=he()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zu(e,r)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=ji,ct=tn;if(ji=J||c,tn=ct||z,qn(n,e),tn=ct,ji=J,Yn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ji||tn||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=z.stateNode;var _t=z.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(z,z.return,it)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(it){He(z,z.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Zu(e,a))));break;case 19:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zu(e,r)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=qu(e);Rl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Mi(S,""),a.flags&=-33);var b=qu(e);Rl(e,b,S);break;case 3:case 4:var z=a.stateNode.containerInfo,J=qu(e);Yu(e,J,z);break;default:throw Error(s(161))}}catch(ct){He(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ls(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Om(n,n.return,a),ls(n);break;case 27:mo(n.stateNode);case 26:case 5:bi(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),ao(4,f);break;case 1:if(Ea(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){He(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)xp(z[c],b)}catch(J){He(r,r.return,J)}}a&&S&64&&Nm(f),so(f,f.return);break;case 27:Im(f);case 26:case 5:Ea(c,f,a),a&&r===null&&S&4&&Pm(f),so(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&S&4&&Vm(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),so(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function Ku(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xr(a))}function Qu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e))}function Ai(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(e,n,a,r),n=n.sibling}function Wm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,r),c&2048&&ao(9,n);break;case 1:Ai(e,n,a,r);break;case 3:Ai(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e)));break;case 12:if(c&2048){Ai(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){He(n,n.return,z)}}else Ai(e,n,a,r);break;case 13:Ai(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,r):ro(e,n):f._visibility&2?Ai(e,n,a,r):(f._visibility|=2,Ws(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Ku(S,n);break;case 24:Ai(e,n,a,r),c&2048&&Qu(n.alternate,n);break;default:Ai(e,n,a,r)}}function Ws(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,z=r,J=S.flags;switch(S.tag){case 0:case 11:case 15:Ws(f,S,b,z,c),ao(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Ws(f,S,b,z,c):ro(f,S):(ct._visibility|=2,Ws(f,S,b,z,c)),c&&J&2048&&Ku(S.alternate,S);break;case 24:Ws(f,S,b,z,c),c&&J&2048&&Qu(S.alternate,S);break;default:Ws(f,S,b,z,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ro(a,r),c&2048&&Ku(r.alternate,r);break;case 24:ro(a,r),c&2048&&Qu(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function qs(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 26:qs(e),e.flags&oo&&e.memoizedState!==null&&Ix(fi,e.memoizedState,e.memoizedProps);break;case 5:qs(e);break;case 3:case 4:var n=fi;fi=Hl(e.stateNode.containerInfo),qs(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,qs(e),oo=n):qs(e));break;default:qs(e)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Zm(r,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):lo(e);break;default:lo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Zm(r,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function Zm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Hm(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var $v={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},tx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,de=null,ye=0,Ue=0,jn=null,Ta=!1,Ys=!1,Ju=!1,Ki=0,Ke=0,ba=0,cs=0,$u=0,si=0,js=0,co=null,Bn=null,tf=!1,ef=0,wl=1/0,Dl=null,Aa=null,Tn=0,Ra=null,Zs=null,Ks=0,nf=0,af=null,Km=null,uo=0,sf=null;function Zn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(P.T!==null){var e=Is;return e!==0?e:hf()}return Te()}function Qm(){si===0&&(si=(ye&536870912)===0||Ce?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Qs(e,0),Ca(e,ye,si,!1)),zt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(cs|=a),Ke===4&&Ca(e,ye,si,!1)),Ri(e))}function Jm(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),c=r?ix(e,n):lf(e,n,!0),f=r;do{if(c===0){Ys&&!r&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ex(a)){c=lf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=co;var z=b.current.memoizedState.isDehydrated;if(z&&(Qs(b,S).flags|=256),S=lf(b,S,!1),S!==2){if(Ju&&!z){b.errorRecoveryDisabledLanes|=f,cs|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Qs(e,0),Ca(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,si,!Ta);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ef+300-he(),10<c)){if(Ca(r,n,si,!Ta),qt(r,0,!0)!==0)break t;r.timeoutHandle=R_($m.bind(null,r,a,Bn,Dl,tf,n,si,cs,js,Ta,f,2,-0,0),c);break t}$m(r,a,Bn,Dl,tf,n,si,cs,js,Ta,f,0,-0,0)}}break}while(!0);Ri(e)}function $m(e,n,a,r,c,f,S,b,z,J,ct,_t,nt,it){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:zx},qm(n),_t=Bx(),_t!==null)){e.cancelPendingCommit=_t(r_.bind(null,e,n,f,a,r,c,S,b,z,ct,1,nt,it)),Ca(e,f,S,!J);return}r_(e,n,f,a,r,c,S,b,z)}function ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,r){n&=~$u,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&gt(e,a,n)}function Ul(){return(De&6)===0?(fo(0),!1):!0}function rf(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Vi=is=null,Mu(e),ks=null,eo=0,e=de;for(;e!==null;)Lm(e.alternate,e),e=e.return;de=null}}function Qs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),rf(),ke=e,de=a=Fi(e.current,null),ye=n,Ue=0,jn=null,Ta=!1,Ys=Rt(e,n),Ju=!1,js=si=$u=cs=ba=Ke=0,Bn=co=null,tf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ot(r),f=1<<c;n|=e[c],r&=~f}return Ki=n,$o(),a}function t_(e,n){ue=null,P.H=vl,n===qr||n===ll?(n=gp(),Ue=3):n===pp?(n=gp(),Ue=4):Ue=n===vm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,de===null&&(Ke=1,El(e,ti(n,e.current)))}function e_(){var e=P.H;return P.H=vl,e===null?vl:e}function n_(){var e=P.A;return P.A=$v,e}function of(){Ke=4,Ta||(ye&4194048)!==ye&&ai.current!==null||(Ys=!0),(ba&134217727)===0&&(cs&134217727)===0||ke===null||Ca(ke,ye,si,!1)}function lf(e,n,a){var r=De;De|=2;var c=e_(),f=n_();(ke!==e||ye!==n)&&(Dl=null,Qs(e,n)),n=!1;var S=Ke;t:do try{if(Ue!==0&&de!==null){var b=de,z=jn;switch(Ue){case 8:rf(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Ue;if(Ue=0,jn=null,Js(e,b,z,J),a&&Ys){S=0;break t}break;default:J=Ue,Ue=0,jn=null,Js(e,b,z,J)}}nx(),S=Ke;break}catch(ct){t_(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Vi=is=null,De=r,P.H=c,P.A=f,de===null&&(ke=null,ye=0,$o()),S}function nx(){for(;de!==null;)i_(de)}function ix(e,n){var a=De;De|=2;var r=e_(),c=n_();ke!==e||ye!==n?(Dl=null,wl=he()+500,Qs(e,n)):Ys=Rt(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=jn;e:switch(Ue){case 1:Ue=0,jn=null,Js(e,n,f,1);break;case 2:case 9:if(mp(f)){Ue=0,jn=null,a_(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ri(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:mp(f)?(Ue=0,jn=null,a_(n)):(Ue=0,jn=null,Js(e,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var b=de;if(!S||F_(S)){Ue=0,jn=null;var z=b.sibling;if(z!==null)de=z;else{var J=b.return;J!==null?(de=J,Ll(J)):de=null}break e}}Ue=0,jn=null,Js(e,n,f,5);break;case 6:Ue=0,jn=null,Js(e,n,f,6);break;case 8:rf(),Ke=6;break t;default:throw Error(s(462))}}ax();break}catch(ct){t_(e,ct)}while(!0);return Vi=is=null,P.H=r,P.A=c,De=a,de!==null?0:(ke=null,ye=0,$o(),Ke)}function ax(){for(;de!==null&&!Sn();)i_(de)}function i_(e){var n=Dm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ll(e):de=n}function a_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Tm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Tm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Mu(n);default:Lm(a,n),n=de=sp(n,Ki),n=Dm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ll(e):de=n}function Js(e,n,a,r){Vi=is=null,Mu(n),ks=null,eo=0;var c=n.return;try{if(Yv(e,c,n,a,ye)){Ke=1,El(e,ti(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ke=1,El(e,ti(a,e.current)),de=null;return}n.flags&32768?(Ce||r===1?e=!0:Ys||(ye&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=ai.current,r!==null&&r.tag===13&&(r.flags|=16384))),s_(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){s_(n,Ta);return}e=n.return;var a=Zv(n.alternate,n,Ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ke===0&&(Ke=5)}function s_(e,n){do{var a=Kv(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ke=6,de=null}function r_(e,n,a,r,c,f,S,b,z){e.cancelPendingCommit=null;do Nl();while(Tn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Qc,bt(e,a,f,S,b,z),e===ke&&(de=ke=null,ye=0),Zs=n,Ra=e,Ks=a,nf=f,af=c,Km=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lx(ie,function(){return f_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=Z.p,Z.p=2,S=De,De|=4;try{Qv(e,n,a)}finally{De=S,Z.p=c,P.T=r}}Tn=1,o_(),l_(),c_()}}function o_(){if(Tn===1){Tn=0;var e=Ra,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=De;De|=4;try{km(n,e);var f=Sf,S=Zd(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&jd(b.ownerDocument.documentElement,b)){if(z!==null&&qc(b)){var J=z.start,ct=z.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var _t=b.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=b.textContent.length,Qt=Math.min(z.start,te),Pe=z.end===void 0?Qt:Math.min(z.end,te);!it.extend&&Qt>Pe&&(S=Pe,Pe=Qt,Qt=S);var q=Yd(b,Qt),V=Yd(b,Pe);if(q&&V&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=_t.createRange();K.setStart(q.node,q.offset),it.removeAllRanges(),Qt>Pe?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(_t=[],it=b;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var ht=_t[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Wl=!!xf,Sf=xf=null}finally{De=c,Z.p=r,P.T=a}}e.current=n,Tn=2}}function l_(){if(Tn===2){Tn=0;var e=Ra,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var c=De;De|=4;try{Fm(e,n.alternate,n)}finally{De=c,Z.p=r,P.T=a}}Tn=3}}function c_(){if(Tn===4||Tn===3){Tn=0,Me();var e=Ra,n=Zs,a=Ks,r=Km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Zs=Ra=null,u_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),we(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<r.length;S++){var b=r[S];f(b.value,{componentStack:b.stack})}}finally{P.T=n,Z.p=c}}(Ks&3)!==0&&Nl(),Ri(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===sf?uo++:(uo=0,sf=e):uo=0,fo(0)}}function u_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xr(n)))}function Nl(e){return o_(),l_(),c_(),f_()}function f_(){if(Tn!==5)return!1;var e=Ra,n=nf;nf=0;var a=we(Ks),r=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=af,af=null;var f=Ra,S=Ks;if(Tn=0,Zs=Ra=null,Ks=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,jm(f.current),Wm(f,f.current,S,a),De=b,fo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,P.T=r,u_(e,n)}}function h_(e,n,a){n=ti(a,n),n=zu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(zt(e,2),Ri(e))}function He(e,n,a){if(e.tag===3)h_(e,e,a);else for(;n!==null;){if(n.tag===3){h_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=ti(a,e),a=_m(2),r=ga(n,a,2),r!==null&&(gm(a,r,n,e),zt(r,2),Ri(r));break}}n=n.return}}function cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ju=!0,c.add(a),e=sx.bind(null,e,n,a),n.then(e,e))}function sx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(Ke===4||Ke===3&&(ye&62914560)===ye&&300>he()-ef?(De&2)===0&&Qs(e,0):$u|=a,js===ye&&(js=0)),Ri(e)}function d_(e,n){n===0&&(n=Ut()),e=Ns(e,n),e!==null&&(zt(e,n),Ri(e))}function rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d_(e,a)}function ox(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),d_(e,a)}function lx(e,n){return ge(e,n)}var Ol=null,$s=null,uf=!1,Pl=!1,ff=!1,us=0;function Ri(e){e!==$s&&e.next===null&&($s===null?Ol=$s=e:$s=$s.next=e),Pl=!0,uf||(uf=!0,ux())}function fo(e,n){if(!ff&&Pl){ff=!0;do for(var a=!1,r=Ol;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,g_(r,f))}else f=ye,f=qt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,g_(r,f));r=r.next}while(a);ff=!1}}function cx(){p_()}function p_(){Pl=uf=!1;var e=0;us!==0&&(vx()&&(e=us),us=0);for(var n=he(),a=null,r=Ol;r!==null;){var c=r.next,f=m_(r,n);f===0?(r.next=null,a===null?Ol=c:a.next=c,c===null&&($s=a)):(a=r,(e!==0||(f&3)!==0)&&(Pl=!0)),r=c}fo(e)}function m_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),b=1<<S,z=c[S];z===-1?((b&a)===0||(b&r)!==0)&&(c[S]=ne(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=ye,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&F(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&F(r),we(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=L;break;default:a=ie}return r=__.bind(null,e),a=ge(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&F(r),e.callbackPriority=2,e.callbackNode=null,2}function __(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var r=ye;return r=qt(e,e===ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Jm(e,r,n),m_(e,he()),e.callbackNode!=null&&e.callbackNode===a?__.bind(null,e):null)}function g_(e,n){if(Nl())return null;Jm(e,n,!0)}function ux(){Sx(function(){(De&6)!==0?ge(ve,cx):p_()})}function hf(){return us===0&&(us=k()),us}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function x_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=v_((c[yn]||null).action),S=r.submitter;S&&(n=(n=S[yn]||null)?v_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Ko("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(us!==0){var z=S?x_(c,S):new FormData(c);Uu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=S?x_(c,S):new FormData(c),Uu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var df=0;df<Kc.length;df++){var pf=Kc[df],hx=pf.toLowerCase(),dx=pf[0].toUpperCase()+pf.slice(1);ui(hx,"on"+dx)}ui(Jd,"onAnimationEnd"),ui($d,"onAnimationIteration"),ui(tp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Dv,"onTransitionRun"),ui(Uv,"onTransitionStart"),ui(Lv,"onTransitionCancel"),ui(ep,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function S_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var b=r[S],z=b.instance,J=b.currentTarget;if(b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){Ml(ct)}c.currentTarget=null,f=z}else for(S=0;S<r.length;S++){if(b=r[S],z=b.instance,J=b.currentTarget,b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){Ml(ct)}c.currentTarget=null,f=z}}}}function pe(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var r=e+"__bubble";a.has(r)||(y_(n,e,2,!1),a.add(r))}function mf(e,n,a){var r=0;n&&(r|=4),y_(a,e,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[zl]){e[zl]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(px.has(a)||mf(a,!1,e),mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,mf("selectionchange",!1,n))}}function y_(e,n,a,r){switch(W_(n)){case 2:var c=Gx;break;case 8:c=Vx;break;default:c=Df}a=c.bind(null,n,a,e),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function gf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var b=r.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=r.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Ni(b),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){r=f=S;continue t}b=b.parentNode}}r=r.return}Cd(function(){var J=f,ct=Pc(a),_t=[];t:{var nt=np.get(e);if(nt!==void 0){var it=Ko,te=e;switch(e){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":it=lv;break;case"focusin":te="focus",it=Gc;break;case"focusout":te="blur",it=Gc;break;case"beforeblur":case"afterblur":it=Gc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=fv;break;case Jd:case $d:case tp:it=$0;break;case ep:it=dv;break;case"scroll":case"scrollend":it=j0;break;case"wheel":it=mv;break;case"copy":case"cut":case"paste":it=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Nd;break;case"toggle":case"beforetoggle":it=gv}var Qt=(n&4)!==0,Pe=!Qt&&(e==="scroll"||e==="scrollend"),q=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var V=J,K;V!==null;){var ht=V;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||q===null||(ht=Ur(V,q),ht!=null&&Qt.push(po(V,ht,K))),Pe)break;V=V.return}0<Qt.length&&(nt=new it(nt,te,null,a,ct),_t.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Oc&&(te=a.relatedTarget||a.fromElement)&&(Ni(te)||te[On]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=J,te=te?Ni(te):null,te!==null&&(Pe=u(te),Qt=te.tag,te!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(te=null)):(it=null,te=J),it!==te)){if(Qt=Ud,ht="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Nd,ht="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=it==null?nt:ja(it),K=te==null?nt:ja(te),nt=new Qt(ht,V+"leave",it,a,ct),nt.target=Pe,nt.relatedTarget=K,ht=null,Ni(ct)===J&&(Qt=new Qt(q,V+"enter",te,a,ct),Qt.target=K,Qt.relatedTarget=Pe,ht=Qt),Pe=ht,it&&te)e:{for(Qt=it,q=te,V=0,K=Qt;K;K=tr(K))V++;for(K=0,ht=q;ht;ht=tr(ht))K++;for(;0<V-K;)Qt=tr(Qt),V--;for(;0<K-V;)q=tr(q),K--;for(;V--;){if(Qt===q||q!==null&&Qt===q.alternate)break e;Qt=tr(Qt),q=tr(q)}Qt=null}else Qt=null;it!==null&&M_(_t,nt,it,Qt,!1),te!==null&&Pe!==null&&M_(_t,Pe,te,Qt,!0)}}t:{if(nt=J?ja(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Gd;else if(Fd(nt))if(Vd)Ft=Rv;else{Ft=bv;var fe=Tv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Nc(J.elementType)&&(Ft=Gd):Ft=Av;if(Ft&&(Ft=Ft(e,J))){Hd(_t,Ft,a,ct);break t}fe&&fe(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&Rn(nt,"number",nt.value)}switch(fe=J?ja(J):window,e){case"focusin":(Fd(fe)||fe.contentEditable==="true")&&(Ds=fe,Yc=J,Fr=null);break;case"focusout":Fr=Yc=Ds=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Kd(_t,a,ct);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Kd(_t,a,ct)}var Xt;if(kc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else ws?Id(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Od&&a.locale!=="ko"&&(ws||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&ws&&(Xt=wd()):(da=ct,Bc="value"in da?da.value:da.textContent,ws=!0)),fe=Il(J,$t),0<fe.length&&($t=new Ld($t,e,null,a,ct),_t.push({event:$t,listeners:fe}),Xt?$t.data=Xt:(Xt=Bd(a),Xt!==null&&($t.data=Xt)))),(Xt=xv?Sv(e,a):yv(e,a))&&($t=Il(J,"onBeforeInput"),0<$t.length&&(fe=new Ld("onBeforeInput","beforeinput",null,a,ct),_t.push({event:fe,listeners:$t}),fe.data=Xt)),fx(_t,e,J,a,ct)}S_(_t,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ur(e,a),c!=null&&r.unshift(po(e,c,f)),c=Ur(e,n),c!=null&&r.push(po(e,c,f))),e.tag===3)return r;e=e.return}return[]}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var b=a,z=b.alternate,J=b.stateNode;if(b=b.tag,z!==null&&z===r)break;b!==5&&b!==26&&b!==27||J===null||(z=J,c?(J=Ur(a,f),J!=null&&S.unshift(po(a,J,z))):c||(J=Ur(a,f),J!=null&&S.push(po(a,J,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var mx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(mx,`
`).replace(_x,"")}function T_(e,n){return n=E_(n),E_(e)===n}function Bl(){}function Oe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Mi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Mi(e,""+r);break;case"className":wt(e,"class",r);break;case"tabIndex":wt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,r);break;case"style":Ad(e,r,f);break;case"data":if(n!=="object"){wt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Bl);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Tt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=q0.get(a)||a,Tt(e,a,r))}}function vf(e,n,a,r,c,f){switch(a){case"style":Ad(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Mi(e,r):(typeof r=="number"||typeof r=="bigint")&&Mi(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Tt(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),r&&Oe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=f=S=c=null,z=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":S=ct;break;case"checked":z=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Oe(e,n,r,ct,a,null)}}Fe(e,f,b,z,J,S,c,!1),je(e);return;case"select":pe("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":r=b;default:Oe(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!r,n!=null?on(e,!!r,n,!1):a!=null&&on(e,!!r,a,!0);return;case"textarea":pe("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Oe(e,n,S,b,a,null)}Mn(e,r,c,f),je(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(e,n,z,r,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)pe(ho[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,J,r,a,null)}return;default:if(Nc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&vf(e,n,ct,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Oe(e,n,b,r,a,null))}function gx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,z=null,J=null,ct=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=_t;default:r.hasOwnProperty(it)||Oe(e,n,it,null,r,_t)}}for(var nt in r){var it=r[nt];if(_t=a[nt],r.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":S=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==_t&&Oe(e,n,nt,it,r,_t)}}zi(e,S,b,z,J,ct,f,c);return;case"select":it=S=b=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":it=z;default:r.hasOwnProperty(f)||Oe(e,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==z&&Oe(e,n,c,f,r,z)}n=b,a=S,r=it,nt!=null?on(e,!!a,nt,!1):!!r!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,r,f)}pn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Oe(e,n,te,null,r,nt)}for(z in r)if(nt=r[z],it=a[z],r.hasOwnProperty(z)&&nt!==it&&(nt!=null||it!=null))switch(z){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,n,z,nt,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!r.hasOwnProperty(Qt)&&Oe(e,n,Qt,null,r,nt);for(J in r)if(nt=r[J],it=a[J],r.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Oe(e,n,J,nt,r,it)}return;default:if(Nc(n)){for(var Pe in a)nt=a[Pe],a.hasOwnProperty(Pe)&&nt!==void 0&&!r.hasOwnProperty(Pe)&&vf(e,n,Pe,void 0,r,nt);for(ct in r)nt=r[ct],it=a[ct],!r.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||vf(e,n,ct,nt,r,it);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!r.hasOwnProperty(q)&&Oe(e,n,q,null,r,nt);for(_t in r)nt=r[_t],it=a[_t],!r.hasOwnProperty(_t)||nt===it||nt==null&&it==null||Oe(e,n,_t,nt,r,it)}var xf=null,Sf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function vx(){var e=window.event;return e&&e.type==="popstate"?e===Mf?!1:(Mf=e,!0):(Mf=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(e){return C_.resolve(null).then(e).catch(yx)}:R_;function yx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function w_(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var S=e.ownerDocument;if(a&1&&mo(S.documentElement),a&2&&mo(S.body),a&4)for(a=S.head,mo(a),S=a.firstChild;S;){var b=S.nextSibling,z=S.nodeName;S[ca]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),Eo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);Eo(n)}function Ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Ex(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function Tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Tx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var bf=null;function D_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function U_(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var ri=new Map,L_=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=Z.d;Z.d={f:bx,r:Ax,D:Rx,C:Cx,L:wx,m:Dx,X:Lx,S:Ux,M:Nx};function bx(){var e=Qi.f(),n=Ul();return e||n}function Ax(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Qi.r(e)}var er=typeof document>"u"?null:document;function N_(e,n,a){var r=er;if(r&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),L_.has(c)||(L_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),bn(n,"link",e),en(n),r.head.appendChild(n)))}}function Rx(e){Qi.D(e),N_("dns-prefetch",e,null)}function Cx(e,n){Qi.C(e,n),N_("preconnect",e,n)}function wx(e,n,a){Qi.L(e,n,a);var r=er;if(r&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var f=c;switch(n){case"style":f=nr(e);break;case"script":f=ir(e)}ri.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(_o(f))||n==="script"&&r.querySelector(go(f))||(n=r.createElement("link"),bn(n,"link",e),en(n),r.head.appendChild(n)))}}function Dx(e,n){Qi.m(e,n);var a=er;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(r)+'"][href="'+Ve(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ir(e)}if(!ri.has(f)&&(e=g({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}r=a.createElement("link"),bn(r,"link",e),en(r),a.head.appendChild(r)}}}function Ux(e,n,a){Qi.S(e,n,a);var r=er;if(r&&e){var c=fa(r).hoistableStyles,f=nr(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=r.querySelector(_o(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Af(e,a);var z=S=r.createElement("link");en(z),bn(z,"link",e),z._p=new Promise(function(J,ct){z.onload=J,z.onerror=ct}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Gl(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function Lx(e,n){Qi.X(e,n);var a=er;if(a&&e){var r=fa(a).hoistableScripts,c=ir(e),f=r.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0},n),(n=ri.get(c))&&Rf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Nx(e,n){Qi.M(e,n);var a=er;if(a&&e){var r=fa(a).hoistableScripts,c=ir(e),f=r.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Rf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function O_(e,n,a,r){var c=(c=Mt.current)?Hl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=nr(a.href),a=fa(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nr(a.href);var f=fa(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(_o(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||Ox(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ir(a),a=fa(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function nr(e){return'href="'+Ve(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function P_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ox(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),en(n),e.head.appendChild(n))}function ir(e){return'[src="'+Ve(e)+'"]'}function go(e){return"script[async]"+e}function z_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(r)return n.instance=r,en(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),en(r),bn(r,"style",c),Gl(r,a.precedence,e),n.instance=r;case"stylesheet":c=nr(a.href);var f=e.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;r=P_(a),(c=ri.get(c))&&Af(r,c),f=(e.ownerDocument||e).createElement("link"),en(f);var S=f;return S._p=new Promise(function(b,z){S.onload=b,S.onerror=z}),bn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=ir(a.src),(c=e.querySelector(go(f)))?(n.instance=c,en(c),c):(r=a,(c=ri.get(f))&&(r=g({},a),Rf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),bn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,e));return n.instance}function Gl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var b=r[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Af(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function I_(e,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ca]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=r.get(S);b?b.push(f):r.set(S,[f])}}return r}function B_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Px(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function zx(){}function Ix(e,n,a){if(vo===null)throw Error(s(475));var r=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=nr(a.href),f=e.querySelector(_o(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=kl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=P_(a),(c=ri.get(c))&&Af(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(b,z){S.onload=b,S.onerror=z}),bn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=kl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Bx(){if(vo===null)throw Error(s(475));var e=vo;return e.stylesheets&&e.count===0&&Cf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Cf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Cf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(Fx,e),Xl=null,kl.call(e))}function Fx(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var r=a.get(null);else{a=new Map,Xl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Hx(e,n,a,r,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function H_(e,n,a,r,c,f,S,b,z,J,ct,_t){return e=new Hx(e,n,a,S,b,z,J,_t),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=lu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},hu(f),e}function G_(e){return e?(e=Os,e):Os}function V_(e,n,a,r,c,f){c=G_(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(e,r,n),a!==null&&(Kn(a,e,n),jr(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function wf(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function X_(e){if(e.tag===13){var n=Ns(e,67108864);n!==null&&Kn(n,e,67108864),wf(e,67108864)}}var Wl=!0;function Gx(e,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Df(e,n,a,r)}finally{Z.p=f,P.T=c}}function Vx(e,n,a,r){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Df(e,n,a,r)}finally{Z.p=f,P.T=c}}function Df(e,n,a,r){if(Wl){var c=Uf(r);if(c===null)gf(e,n,r,ql,a),q_(e,r);else if(Xx(c,e,n,a,r))r.stopPropagation();else if(q_(e,r),n&4&&-1<kx.indexOf(e)){for(;c!==null;){var f=Oi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Wt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var z=1<<31-Ot(S);b.entanglements[1]|=z,S&=~z}Ri(f),(De&6)===0&&(wl=he()+500,fo(0))}}break;case 13:b=Ns(f,2),b!==null&&Kn(b,f,2),Ul(),wf(f,2)}if(f=Uf(r),f===null&&gf(e,n,r,ql,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else gf(e,n,r,null,a)}}function Uf(e){return e=Pc(e),Lf(e)}var ql=null;function Lf(e){if(ql=null,e=Ni(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function W_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ve:return 2;case Yt:return 8;case ie:case Je:return 32;case L:return 268435456;default:return 32}default:return 32}}var Nf=!1,Da=null,Ua=null,La=null,So=new Map,yo=new Map,Na=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Oi(n),n!==null&&X_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Xx(e,n,a,r,c){switch(n){case"focusin":return Da=Mo(Da,e,n,a,r,c),!0;case"dragenter":return Ua=Mo(Ua,e,n,a,r,c),!0;case"mouseover":return La=Mo(La,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Mo(So.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,r,c)),!0}return!1}function Y_(e){var n=Ni(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var r=Zn();r=ee(r);var c=Ns(a,r);c!==null&&Kn(c,a,r),wf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Uf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Oc=r,a.target.dispatchEvent(r),Oc=null}else return n=Oi(a),n!==null&&X_(n),e.blockedOn=a,!1;n.shift()}return!0}function j_(e,n,a){Yl(e)&&a.delete(n)}function Wx(){Nf=!1,Da!==null&&Yl(Da)&&(Da=null),Ua!==null&&Yl(Ua)&&(Ua=null),La!==null&&Yl(La)&&(La=null),So.forEach(j_),yo.forEach(j_)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Nf||(Nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wx)))}var Zl=null;function Z_(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Lf(r||a)===null)continue;break}var f=Oi(a);f!==null&&(e.splice(n,3),n-=3,Uu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Eo(e){function n(z){return jl(z,e)}Da!==null&&jl(Da,e),Ua!==null&&jl(Ua,e),La!==null&&jl(La,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[yn]||null;if(typeof f=="function")S||Z_(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[yn]||null)b=S.formAction;else if(Lf(c)!==null)continue}else b=S.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Z_(a)}}}function Of(e){this._internalRoot=e}Kl.prototype.render=Of.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Zn();V_(a,r,e,n,null,null)},Kl.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;V_(e.current,2,null,e,null,null),Ul(),n[On]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&Y_(e)}};var K_=t.version;if(K_!=="19.1.0")throw Error(s(527,K_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var qx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ft=Ql.inject(qx),dt=Ql}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=hm,f=dm,S=pm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=H_(e,1,!1,null,null,a,r,c,f,S,b,null),e[On]=n.current,_f(e),new Of(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=hm,S=dm,b=pm,z=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=H_(e,1,!0,n,a??null,r,c,f,S,b,z,J),n.context=G_(null),a=n.current,r=Zn(),r=ee(r),c=_a(r),c.callback=null,ga(a,c,r),a=r,n.current.lanes=a,zt(n,a),Ri(n),e[On]=n.current,_f(e),new Kl(n)},bo.version="19.1.0",bo}var rg;function iS(){if(rg)return If.exports;rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),If.exports=nS(),If.exports}var aS=iS();const sS=m0(aS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="177",yr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rS=0,og=1,oS=2,_0=1,lS=2,ia=3,Xa=0,Gn=1,gi=2,Va=0,Mr=1,lg=2,cg=3,ug=4,cS=5,vs=100,uS=101,fS=102,hS=103,dS=104,pS=200,mS=201,_S=202,gS=203,xh=204,Sh=205,vS=206,xS=207,SS=208,yS=209,MS=210,ES=211,TS=212,bS=213,AS=214,yh=0,Mh=1,Eh=2,br=3,Th=4,bh=5,Ah=6,Rh=7,g0=0,RS=1,CS=2,ka=0,wS=1,DS=2,US=3,LS=4,NS=5,OS=6,PS=7,v0=300,Ar=301,Rr=302,Ch=303,wh=304,Dc=306,Dh=1e3,Ss=1001,Uh=1002,yi=1003,zS=1004,Jl=1005,wi=1006,Gf=1007,ys=1008,Ui=1009,x0=1010,S0=1011,No=1012,cd=1013,Es=1014,sa=1015,Io=1016,ud=1017,fd=1018,Oo=1020,y0=35902,M0=1021,E0=1022,xi=1023,Po=1026,zo=1027,T0=1028,hd=1029,b0=1030,dd=1031,pd=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Ih=37492,Bh=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Tc=36492,$h=36494,td=36495,A0=36283,ed=36284,nd=36285,id=36286,IS=3200,BS=3201,R0=0,FS=1,Ga="",li="srgb",Cr="srgb-linear",Rc="linear",ze="srgb",ar=7680,fg=519,HS=512,GS=513,VS=514,C0=515,kS=516,XS=517,WS=518,qS=519,hg=35044,dg="300 es",ra=2e3,Cc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,ad=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function me(o,t,i){return Math.max(t,Math.min(i,o))}function YS(o,t){return(o%t+t)%t}function Vf(o,t,i){return(1-i)*o+i*t}function Ao(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const jS={DEG2RAD:bc};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==E){let y=1-d;const _=m*x+p*M+g*E+v*R,O=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const G=Math.sqrt(N),B=Math.atan2(G,_*O);y=Math.sin(y*B)/G,d=Math.sin(d*B)/G}const D=d*O;if(m=m*y+x*D,p=p*y+M*D,g=g*y+E*D,v=v*y+R*D,y===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*v+m*M-p*x,t[i+1]=m*E+g*x+p*v-d*M,t[i+2]=p*E+g*M+d*x-m*v,t[i+3]=g*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"YZX":this._x=x*g*v+p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v-x*M*E;break;case"XZY":this._x=x*g*v-p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(pg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(pg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new $,pg=new Ts;class re{constructor(t,i,s,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],E=s[8],R=l[0],y=l[3],_=l[6],O=l[1],N=l[4],D=l[7],G=l[2],B=l[5],I=l[8];return u[0]=h*R+d*O+m*G,u[3]=h*y+d*N+m*B,u[6]=h*_+d*D+m*I,u[1]=p*R+g*O+v*G,u[4]=p*y+g*N+v*B,u[7]=p*_+g*D+v*I,u[2]=x*R+M*O+E*G,u[5]=x*y+M*N+E*B,u[8]=x*_+M*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xf.makeScale(t,i)),this}rotate(t){return this.premultiply(Xf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new re;function w0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZS(){const o=wc("canvas");return o.style.display="block",o}const mg={};function Er(o){o in mg||(mg[o]=!0,console.warn(o))}function KS(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function QS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function JS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _g=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cr]:{primaries:t,whitePoint:s,transfer:Rc,toXYZ:_g,fromXYZ:gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:_g,fromXYZ:gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ae=$S();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class ty{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{sr===void 0&&(sr=wc("canvas")),sr.width=t.width,sr.height=t.height;const l=sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=wc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ey=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Wf(l[h].image)):u.push(Wf(l[h]))}else u=Wf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ty.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ny=0;const qf=new $;class Vn extends As{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ss,l=Ss,u=wi,h=ys,d=xi,m=Ui,p=Vn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Bo(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=v0;Vn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,G=(_+1)/2,B=(g+x)/4,I=(v+R)/4,X=(E+y)/4;return N>D&&N>G?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=B/s,u=I/s):D>G?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=B/l,u=X/l):G<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),s=I/u,l=X/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-R)/O,this.z=(x-g)/O,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iy extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends iy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class D0 extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),tc.subVectors(this.max,Ro),rr.subVectors(t.a,Ro),or.subVectors(t.b,Ro),lr.subVectors(t.c,Ro),Pa.subVectors(or,rr),za.subVectors(lr,or),fs.subVectors(rr,lr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-fs.z,fs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,fs.z,0,-fs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!Yf(i,rr,or,lr,tc)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rr,or,lr,tc))?!1:(ec.crossVectors(Pa,za),i=[ec.x,ec.y,ec.z],Yf(i,rr,or,lr,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,$l=new Fo,rr=new $,or=new $,lr=new $,Pa=new $,za=new $,fs=new $,Ro=new $,tc=new $,ec=new $,hs=new $;function Yf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){hs.fromArray(o,u);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const sy=new Fo,Co=new $,jf=new $;class _d{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):sy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(jf)),this.expandByPoint(Co.copy(t.center).sub(jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new $,Zf=new $,nc=new $,Ia=new $,Kf=new $,ic=new $,Qf=new $;class gd{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Zf.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(Zf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Ia.dot(this.direction),m=-Ia.dot(nc),p=Ia.lengthSq(),g=Math.abs(1-h*h);let v,x,M,E;if(g>0)if(v=h*m-d,x=h*d-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const R=1/g;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zf).addScaledVector(nc,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){Kf.subVectors(i,t),ic.subVectors(s,t),Qf.crossVectors(Kf,ic);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(ic.crossVectors(Ia,ic));if(m<0)return null;const p=d*this.direction.dot(Kf.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,s,l,u,h,d,m,p,g,v,x,M,E,R,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,v,x,M,E,R,y)}set(t,i,s,l,u,h,d,m,p,g,v,x,M,E,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=E,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/cr.setFromMatrixColumn(t,0).length(),u=1/cr.setFromMatrixColumn(t,1).length(),h=1/cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,E=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,E=p*g,R=p*v;i[0]=x+R*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,E=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,E=d*g,R=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ry,t,oy)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ba.crossVectors(s,Qn),Ba.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ba.crossVectors(s,Qn)),Ba.normalize(),ac.crossVectors(Qn,Ba),l[0]=Ba.x,l[4]=ac.x,l[8]=Qn.x,l[1]=Ba.y,l[5]=ac.y,l[9]=Qn.y,l[2]=Ba.z,l[6]=ac.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],E=s[2],R=s[6],y=s[10],_=s[14],O=s[3],N=s[7],D=s[11],G=s[15],B=l[0],I=l[4],X=l[8],w=l[12],C=l[1],H=l[5],ot=l[9],rt=l[13],pt=l[2],ut=l[6],P=l[10],Z=l[14],W=l[3],St=l[7],U=l[11],tt=l[15];return u[0]=h*B+d*C+m*pt+p*W,u[4]=h*I+d*H+m*ut+p*St,u[8]=h*X+d*ot+m*P+p*U,u[12]=h*w+d*rt+m*Z+p*tt,u[1]=g*B+v*C+x*pt+M*W,u[5]=g*I+v*H+x*ut+M*St,u[9]=g*X+v*ot+x*P+M*U,u[13]=g*w+v*rt+x*Z+M*tt,u[2]=E*B+R*C+y*pt+_*W,u[6]=E*I+R*H+y*ut+_*St,u[10]=E*X+R*ot+y*P+_*U,u[14]=E*w+R*rt+y*Z+_*tt,u[3]=O*B+N*C+D*pt+G*W,u[7]=O*I+N*H+D*ut+G*St,u[11]=O*X+N*ot+D*P+G*U,u[15]=O*w+N*rt+D*Z+G*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],E=t[3],R=t[7],y=t[11],_=t[15];return E*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],E=t[12],R=t[13],y=t[14],_=t[15],O=v*y*p-R*x*p+R*m*M-d*y*M-v*m*_+d*x*_,N=E*x*p-g*y*p-E*m*M+h*y*M+g*m*_-h*x*_,D=g*R*p-E*v*p+E*d*M-h*R*M-g*d*_+h*v*_,G=E*v*m-g*R*m-E*d*x+h*R*x+g*d*y-h*v*y,B=i*O+s*N+l*D+u*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=O*I,t[1]=(R*x*u-v*y*u-R*l*M+s*y*M+v*l*_-s*x*_)*I,t[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*I,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*I,t[4]=N*I,t[5]=(g*y*u-E*x*u+E*l*M-i*y*M-g*l*_+i*x*_)*I,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*_-i*m*_)*I,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*I,t[8]=D*I,t[9]=(E*v*u-g*R*u-E*s*M+i*R*M+g*s*_-i*v*_)*I,t[10]=(h*R*u-E*d*u+E*s*p-i*R*p-h*s*_+i*d*_)*I,t[11]=(g*d*u-h*v*u-g*s*p+i*v*p+h*s*M-i*d*M)*I,t[12]=G*I,t[13]=(g*R*l-E*v*l+E*s*x-i*R*x-g*s*y+i*v*y)*I,t[14]=(E*d*l-h*R*l-E*s*m+i*R*m+h*s*y-i*d*y)*I,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,E=u*v,R=h*g,y=h*v,_=d*v,O=m*p,N=m*g,D=m*v,G=s.x,B=s.y,I=s.z;return l[0]=(1-(R+_))*G,l[1]=(M+D)*G,l[2]=(E-N)*G,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(x+_))*B,l[6]=(y+O)*B,l[7]=0,l[8]=(E+N)*I,l[9]=(y-O)*I,l[10]=(1-(x+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const h=cr.set(l[4],l[5],l[6]).length(),d=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,g=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ra){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ra)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Cc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ra){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(h-u),x=(i+t)*p,M=(s+l)*g;let E,R;if(d===ra)E=(h+u)*v,R=-2*v;else if(d===Cc)E=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cr=new $,pi=new Xe,ry=new $(0,0,0),oy=new $(1,1,1),Ba=new $,ac=new $,Qn=new $,vg=new Xe,xg=new Ts;class Li{constructor(t=0,i=0,s=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return vg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xg.setFromEuler(this),this.setFromQuaternion(xg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ly=0;const Sg=new $,ur=new Ts,ta=new Xe,sc=new $,wo=new $,cy=new $,uy=new Ts,yg=new $(1,0,0),Mg=new $(0,1,0),Eg=new $(0,0,1),Tg={type:"added"},fy={type:"removed"},fr={type:"childadded",child:null},Jf={type:"childremoved",child:null};class xn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new $,i=new Li,s=new Ts,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new re}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(yg,t)}rotateY(t){return this.rotateOnAxis(Mg,t)}rotateZ(t){return this.rotateOnAxis(Eg,t)}translateOnAxis(t,i){return Sg.copy(t).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yg,t)}translateY(t){return this.translateOnAxis(Mg,t)}translateZ(t){return this.translateOnAxis(Eg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?sc.copy(t):sc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(wo,sc,this.up):ta.lookAt(sc,wo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(ta),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tg),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fy),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tg),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,cy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,uy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new $(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,ea=new $,$f=new $,na=new $,hr=new $,dr=new $,bg=new $,th=new $,eh=new $,nh=new $,ih=new Qe,ah=new Qe,sh=new Qe;class vi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){mi.subVectors(l,i),ea.subVectors(s,i),$f.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(ea),m=mi.dot($f),p=ea.dot(ea),g=ea.dot($f),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,E=(h*g-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return ih.setScalar(0),ah.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ih,u.x),h.addScaledVector(ah,u.y),h.addScaledVector(sh,u.z),h}static isFrontFacing(t,i,s,l){return mi.subVectors(s,i),ea.subVectors(t,i),mi.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),mi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;hr.subVectors(l,s),dr.subVectors(u,s),th.subVectors(t,s);const m=hr.dot(th),p=dr.dot(th);if(m<=0&&p<=0)return i.copy(s);eh.subVectors(t,l);const g=hr.dot(eh),v=dr.dot(eh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(hr,h);nh.subVectors(t,u);const M=hr.dot(nh),E=dr.dot(nh);if(E>=0&&M<=E)return i.copy(u);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(dr,d);const y=g*E-M*v;if(y<=0&&v-g>=0&&M-E>=0)return bg.subVectors(u,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(bg,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(s).addScaledVector(hr,h).addScaledVector(dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},rc={h:0,s:0,l:0};function rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=YS(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=rh(h,u,t+1/3),this.g=rh(h,u,t),this.b=rh(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=U0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ae.workingToColorSpace(Un.copy(this),t),Math.round(me(Un.r*255,0,255))*65536+Math.round(me(Un.g*255,0,255))*256+Math.round(me(Un.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=li){Ae.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(rc);const s=Vf(Fa.h,rc.h,i),l=Vf(Fa.s,rc.s,i),u=Vf(Fa.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new _e;_e.NAMES=U0;let hy=0;class Ho extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Mr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Sh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xd extends Ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new $,oc=new ae;let dy=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=hg,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ao(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hg&&(t.usage=this.usage),t}}class L0 extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class N0 extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $n extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let py=0;const oi=new Xe,oh=new xn,pr=new $,Jn=new Fo,Do=new Fo,vn=new $;class la extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?N0:L0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new re().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Jn.min,Do.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Do.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Do.min),Jn.expandByPoint(Do.max))}Jn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(pr.fromBufferAttribute(t,p),vn.add(pr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new $,m[X]=new $;const p=new $,g=new $,v=new $,x=new ae,M=new ae,E=new ae,R=new $,y=new $;function _(X,w,C){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(x),E.sub(x);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[X].add(R),d[w].add(R),d[C].add(R),m[X].add(y),m[w].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,w=O.length;X<w;++X){const C=O[X],H=C.start,ot=C.count;for(let rt=H,pt=H+ot;rt<pt;rt+=3)_(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new $,D=new $,G=new $,B=new $;function I(X){G.fromBufferAttribute(l,X),B.copy(G);const w=d[X];N.copy(w),N.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(B,w);const H=D.dot(m[X])<0?-1:1;h.setXYZW(X,N.x,N.y,N.z,H)}for(let X=0,w=O.length;X<w;++X){const C=O[X],H=C.start,ot=C.count;for(let rt=H,pt=H+ot;rt<pt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,g=new $,v=new $;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)x[E++]=p[M++]}return new Di(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new Xe,ds=new gd,lc=new _d,Rg=new $,cc=new $,uc=new $,fc=new $,lh=new $,hc=new $,Cg=new $,dc=new $;class Si extends xn{constructor(t=new la,i=new xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(lh.fromBufferAttribute(v,t),h?hc.addScaledVector(lh,g):hc.addScaledVector(lh.sub(i),g))}i.add(hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),ds.copy(t.ray).recast(t.near),!(lc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(lc,Rg)===null||ds.origin.distanceToSquared(Rg)>(t.far-t.near)**2))&&(Ag.copy(u).invert(),ds.copy(t.ray).applyMatrix4(Ag),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const y=x[E],_=h[y.materialIndex],O=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=O,G=N;D<G;D+=3){const B=d.getX(D),I=d.getX(D+1),X=d.getX(D+2);l=pc(this,_,t,s,p,g,v,B,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=E,_=R;y<_;y+=3){const O=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=pc(this,h,t,s,p,g,v,O,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const y=x[E],_=h[y.materialIndex],O=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=O,G=N;D<G;D+=3){const B=D,I=D+1,X=D+2;l=pc(this,_,t,s,p,g,v,B,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=E,_=R;y<_;y+=3){const O=y,N=y+1,D=y+2;l=pc(this,h,t,s,p,g,v,O,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function my(o,t,i,s,l,u,h,d){let m;if(t.side===Gn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const g=my(o,t,i,s,cc,uc,fc,Cg);if(g){const v=new $;vi.getBarycoord(Cg,cc,uc,fc,v),l&&(g.uv=vi.getInterpolatedAttribute(l,d,m,p,v,new ae)),u&&(g.uv1=vi.getInterpolatedAttribute(u,d,m,p,v,new ae)),h&&(g.normal=vi.getInterpolatedAttribute(h,d,m,p,v,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};vi.getNormal(cc,uc,fc,x.normal),g.face=x,g.barycoord=v}return g}class Go extends la{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(v,2));function E(R,y,_,O,N,D,G,B,I,X,w){const C=D/I,H=G/X,ot=D/2,rt=G/2,pt=B/2,ut=I+1,P=X+1;let Z=0,W=0;const St=new $;for(let U=0;U<P;U++){const tt=U*H-rt;for(let vt=0;vt<ut;vt++){const yt=vt*C-ot;St[R]=yt*O,St[y]=tt*N,St[_]=pt,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[_]=B>0?1:-1,g.push(St.x,St.y,St.z),v.push(vt/I),v.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let tt=0;tt<I;tt++){const vt=x+tt+ut*U,yt=x+tt+ut*(U+1),Q=x+(tt+1)+ut*(U+1),mt=x+(tt+1)+ut*U;m.push(vt,yt,mt),m.push(yt,Q,mt),W+=6}d.addGroup(M,W,w),M+=W,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)t[l]=s[l]}return t}function _y(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function O0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const gy={clone:wr,merge:Nn};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=_y(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class P0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new $,wg=new ae,Dg=new ae;class ci extends P0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,wg,Dg),i.subVectors(Dg,wg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,_r=1;class Sy extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(mr,_r,t,i);l.layers=this.layers,this.add(l);const u=new ci(mr,_r,t,i);u.layers=this.layers,this.add(u);const h=new ci(mr,_r,t,i);h.layers=this.layers,this.add(h);const d=new ci(mr,_r,t,i);d.layers=this.layers,this.add(d);const m=new ci(mr,_r,t,i);m.layers=this.layers,this.add(m);const p=new ci(mr,_r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class z0 extends Vn{constructor(t=[],i=Ar,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yy extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new z0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Go(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Va});u.uniforms.tEquirect.value=i;const h=new Si(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=wi),new Sy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Ms extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(My)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ms;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ey extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new $,Ty=new $,by=new re;class _i{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=uh.subVectors(s,i).cross(Ty.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||by.getNormalMatrix(t),l=this.coplanarPoint(uh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new _d,mc=new $;class Sd{constructor(t=new _i,i=new _i,s=new _i,l=new _i,u=new _i,h=new _i){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],R=l[10],y=l[11],_=l[12],O=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,y-M,D-_).normalize(),s[1].setComponents(m+u,x+p,y+M,D+_).normalize(),s[2].setComponents(m+h,x+g,y+E,D+O).normalize(),s[3].setComponents(m-h,x-g,y-E,D-O).normalize(),s[4].setComponents(m-d,x-v,y-R,D-N).normalize(),i===ra)s[5].setComponents(m+d,x+v,y+R,D+N).normalize();else if(i===Cc)s[5].setComponents(d,v,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I0 extends Vn{constructor(t,i,s=Es,l,u,h,d=yi,m=yi,p,g=Po,v=1){if(g!==Po&&g!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uc extends la{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],E=[],R=[],y=[];for(let _=0;_<g;_++){const O=_*x-h;for(let N=0;N<p;N++){const D=N*v-u;E.push(D,-O,0),R.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const N=O+p*_,D=O+p*(_+1),G=O+1+p*(_+1),B=O+1+p*_;M.push(N,D,B),M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.width,t.height,t.widthSegments,t.heightSegments)}}class yd extends la{constructor(t=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,M=new $,E=new ae;for(let R=0;R<=l;R++){for(let y=0;y<=s;y++){const _=u+y/s*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let R=0;R<l;R++){const y=R*(s+1);for(let _=0;_<s;_++){const O=_+y,N=O,D=O+s+1,G=O+s+2,B=O+1;d.push(N,D,B),d.push(D,G,B)}}this.setIndex(d),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(p,3)),this.setAttribute("uv",new $n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Md extends la{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new $,x=new $,M=[],E=[],R=[],y=[];for(let _=0;_<=s;_++){const O=[],N=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let G=0;G<=i;G++){const B=G/i;v.x=-t*Math.cos(l+B*u)*Math.sin(h+N*d),v.y=t*Math.cos(h+N*d),v.z=t*Math.sin(l+B*u)*Math.sin(h+N*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(B+D,1-N),O.push(p++)}g.push(O)}for(let _=0;_<s;_++)for(let O=0;O<i;O++){const N=g[_][O+1],D=g[_][O],G=g[_+1][O],B=g[_+1][O+1];(_!==0||h>0)&&M.push(N,D,B),(_!==s-1||m<Math.PI)&&M.push(D,G,B)}this.setIndex(M),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Md(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ay extends Ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ry extends Ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cy extends Ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class B0 extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const fh=new Xe,Ug=new $,Lg=new $;class wy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Ug.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ug),Lg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Lg),i.updateMatrixWorld(),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class F0 extends P0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Dy extends wy{constructor(){super(new F0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uy extends B0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Dy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ly extends B0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ny extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ng=new Xe;class Oy{constructor(t,i,s=0,l=1/0){this.ray=new gd(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ng.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(t,i=!0,s=[]){return sd(t,this,s,i),s.sort(Og),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)sd(t[l],this,s,i);return s.sort(Og),s}}function Og(o,t){return o.distance-t.distance}function sd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)sd(u[h],t,i,!0)}}class Pg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function zg(o,t,i,s){const l=zy(s);switch(i){case M0:return o*t;case T0:return o*t/l.components*l.byteLength;case hd:return o*t/l.components*l.byteLength;case b0:return o*t*2/l.components*l.byteLength;case dd:return o*t*2/l.components*l.byteLength;case E0:return o*t*3/l.components*l.byteLength;case xi:return o*t*4/l.components*l.byteLength;case pd:return o*t*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(t,8)/2;case zh:case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tc:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case A0:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zy(o){switch(o){case Ui:case x0:return{byteLength:1,components:1};case No:case S0:case Io:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Es:case cd:case sa:return{byteLength:4,components:1};case y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Iy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],R=v[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const R=v[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ME=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:By,alphahash_pars_fragment:Fy,alphamap_fragment:Hy,alphamap_pars_fragment:Gy,alphatest_fragment:Vy,alphatest_pars_fragment:ky,aomap_fragment:Xy,aomap_pars_fragment:Wy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:jy,beginnormal_vertex:Zy,bsdfs:Ky,iridescence_fragment:Qy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:eM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:aM,color_pars_vertex:sM,color_vertex:rM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:hM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:_M,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:DM,envmap_vertex:SM,fog_vertex:yM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:wM,lights_toon_fragment:UM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:OM,lights_physical_fragment:PM,lights_physical_pars_fragment:zM,lights_fragment_begin:IM,lights_fragment_maps:BM,lights_fragment_end:FM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:kM,map_fragment:XM,map_pars_fragment:WM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:KM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:$M,morphtarget_vertex:tE,normal_fragment_begin:eE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:sE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:hE,premultiplied_alpha_fragment:dE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:_E,roughnessmap_fragment:gE,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:SE,shadowmap_vertex:yE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:bE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:wE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:LE,uv_pars_fragment:NE,uv_pars_vertex:OE,uv_vertex:PE,worldpos_vertex:zE,background_vert:IE,background_frag:BE,backgroundCube_vert:FE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:VE,depth_vert:kE,depth_frag:XE,distanceRGBA_vert:WE,distanceRGBA_frag:qE,equirect_vert:YE,equirect_frag:jE,linedashed_vert:ZE,linedashed_frag:KE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:$E,meshlambert_frag:tT,meshmatcap_vert:eT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:hT,shadow_vert:dT,shadow_frag:pT,sprite_vert:mT,sprite_frag:_T},Lt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const _c={r:0,b:0,g:0},ms=new Li,gT=new Xe;function vT(o,t,i,s,l,u,h){const d=new _e(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function E(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function R(N){let D=!1;const G=E(N);G===null?_(d,m):G&&G.isColor&&(_(G,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,D){const G=E(D);G&&(G.isCubeTexture||G.mapping===Dc)?(g===void 0&&(g=new Si(new Go(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:wr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(ms)),g.material.toneMapped=Ae.getTransfer(G.colorSpace)!==ze,(v!==G||x!==G.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,M=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Si(new Uc(2,2),new Wa({name:"BackgroundMaterial",uniforms:wr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(G.colorSpace)!==ze,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=G,x=G.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(_c,O0(o)),s.buffers.color.setClear(_c.r,_c.g,_c.b,D,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:R,addToRenderList:y,dispose:O}}function xT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,H,ot,rt,pt){let ut=!1;const P=v(rt,ot,H);u!==P&&(u=P,p(u.object)),ut=M(C,rt,ot,pt),ut&&E(C,rt,ot,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(C,H,ot,rt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,H,ot){const rt=ot.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ut=pt[H.id];ut===void 0&&(ut={},pt[H.id]=ut);let P=ut[rt];return P===void 0&&(P=x(m()),ut[rt]=P),P}function x(C){const H=[],ot=[],rt=[];for(let pt=0;pt<i;pt++)H[pt]=0,ot[pt]=0,rt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,H,ot,rt){const pt=u.attributes,ut=H.attributes;let P=0;const Z=ot.getAttributes();for(const W in Z)if(Z[W].location>=0){const U=pt[W];let tt=ut[W];if(tt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),U===void 0||U.attribute!==tt||tt&&U.data!==tt.data)return!0;P++}return u.attributesNum!==P||u.index!==rt}function E(C,H,ot,rt){const pt={},ut=H.attributes;let P=0;const Z=ot.getAttributes();for(const W in Z)if(Z[W].location>=0){let U=ut[W];U===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const tt={};tt.attribute=U,U&&U.data&&(tt.data=U.data),pt[W]=tt,P++}u.attributes=pt,u.attributesNum=P,u.index=rt}function R(){const C=u.newAttributes;for(let H=0,ot=C.length;H<ot;H++)C[H]=0}function y(C){_(C,0)}function _(C,H){const ot=u.newAttributes,rt=u.enabledAttributes,pt=u.attributeDivisors;ot[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),pt[C]!==H&&(o.vertexAttribDivisor(C,H),pt[C]=H)}function O(){const C=u.newAttributes,H=u.enabledAttributes;for(let ot=0,rt=H.length;ot<rt;ot++)H[ot]!==C[ot]&&(o.disableVertexAttribArray(ot),H[ot]=0)}function N(C,H,ot,rt,pt,ut,P){P===!0?o.vertexAttribIPointer(C,H,ot,pt,ut):o.vertexAttribPointer(C,H,ot,rt,pt,ut)}function D(C,H,ot,rt){R();const pt=rt.attributes,ut=ot.getAttributes(),P=H.defaultAttributeValues;for(const Z in ut){const W=ut[Z];if(W.location>=0){let St=pt[Z];if(St===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const U=St.normalized,tt=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const yt=vt.buffer,Q=vt.type,mt=vt.bytesPerElement,Mt=Q===o.INT||Q===o.UNSIGNED_INT||St.gpuType===cd;if(St.isInterleavedBufferAttribute){const At=St.data,Ct=At.stride,oe=St.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<W.locationSize;Kt++)_(W.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)y(W.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Kt=0;Kt<W.locationSize;Kt++)N(W.location+Kt,tt/W.locationSize,Q,U,Ct*mt,(oe+tt/W.locationSize*Kt)*mt,Mt)}else{if(St.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)_(W.location+At,St.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let At=0;At<W.locationSize;At++)y(W.location+At);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let At=0;At<W.locationSize;At++)N(W.location+At,tt/W.locationSize,Q,U,tt*mt,tt/W.locationSize*At*mt,Mt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(W.location,U);break;case 3:o.vertexAttrib3fv(W.location,U);break;case 4:o.vertexAttrib4fv(W.location,U);break;default:o.vertexAttrib1fv(W.location,U)}}}}O()}function G(){X();for(const C in s){const H=s[C];for(const ot in H){const rt=H[ot];for(const pt in rt)g(rt[pt].object),delete rt[pt];delete H[ot]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const ot in H){const rt=H[ot];for(const pt in rt)g(rt[pt].object),delete rt[pt];delete H[ot]}delete s[C.id]}function I(C){for(const H in s){const ot=s[H];if(ot[C.id]===void 0)continue;const rt=ot[C.id];for(const pt in rt)g(rt[pt].object),delete rt[pt];delete ot[C.id]}}function X(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function ST(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*x[R];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==xi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ui&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sa&&!X)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:G,maxSamples:B}}function MT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new _i,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const O=u?0:s,N=O*4;let D=_.clippingState||null;m.value=D,D=g(E,x,N,M);for(let G=0;G!==N;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,E){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const _=M+R*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,D=M;N!==R;++N,D+=4)h.copy(v[N]).applyMatrix4(O,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function ET(o){let t=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ar:d===wh&&(h.mapping=Rr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new yy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Sr=4,Ig=[.125,.215,.35,.446,.526,.582],xs=20,hh=new F0,Bg=new _e;let dh=null,ph=0,mh=0,_h=!1;const gs=(1+Math.sqrt(5))/2,gr=1/gs,Fg=[new $(-gs,gr,0),new $(gs,gr,0),new $(-gr,0,gs),new $(gr,0,gs),new $(0,gs,-gr),new $(0,gs,gr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],TT=new $;class Hg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=TT}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,gc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Io,format:xi,colorSpace:Cr,depthBuffer:!1},l=Gg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(u)),this._blurMaterial=AT(u,t,i)}return l}_compileMaterial(t){const i=new Si(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,s,l,u){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Bg),v.toneMapping=ka,v.autoClear=!1;const E=new xd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),R=new Si(new Go,E);let y=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,y=!0):(E.color.copy(Bg),y=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const D=this._cubeSize;gc(l,N*D,O>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(R,m),v.render(t,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ar||t.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Si(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;gc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,hh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Fg[(l-u-1)%Fg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Si(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=u/E,y=isFinite(u)?1+Math.floor(g*R):xs;y>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const _=[];let O=0;for(let I=0;I<xs;++I){const X=I/R,w=Math.exp(-X*X/2);_.push(w),I===0?O+=w:I<y&&(O+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const D=this._sizeLods[l],G=3*D*(l>N-Sr?l-N+Sr:0),B=4*(this._cubeSize-D);gc(i,G,B,3*D,2*D),m.setRenderTarget(i),m.render(v,hh)}}function bT(o){const t=[],i=[],s=[];let l=o;const u=o-Sr+1+Ig.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Sr?m=Ig[h-o+Sr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,R=3,y=2,_=1,O=new Float32Array(R*E*M),N=new Float32Array(y*E*M),D=new Float32Array(_*E*M);for(let B=0;B<M;B++){const I=B%3*2/3-1,X=B>2?0:-1,w=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];O.set(w,R*E*B),N.set(x,y*E*B);const C=[B,B,B,B,B,B];D.set(C,_*E*B)}const G=new la;G.setAttribute("position",new Di(O,R)),G.setAttribute("uv",new Di(N,y)),G.setAttribute("faceIndex",new Di(D,_)),t.push(G),l>Sr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Gg(o,t,i){const s=new bs(o,t,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function AT(o,t,i){const s=new Float32Array(xs),l=new $(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Vg(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function kg(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,g=m===Ar||m===Rr;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Hg(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Hg(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function CT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Er("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function wT(o,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let N=0,D=O.length;N<D;N+=3){const G=O[N+0],B=O[N+1],I=O[N+2];x.push(G,B,B,I,I,G)}}else if(E!==void 0){const O=E.array;R=E.version;for(let N=0,D=O.length/3-1;N<D;N+=3){const G=N+0,B=N+1,I=N+2;x.push(G,B,B,I,I,G)}}else return;const y=new(w0(x)?N0:L0)(x,1);y.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function DT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(s,M,u,x*h,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,s,1)}function v(x,M,E,R){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,R,0,E);let _=0;for(let O=0;O<E;O++)_+=M[O]*R[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function UT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(o,t,i){const s=new WeakMap,l=new Qe;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let G=d.attributes.position.count*D,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const I=new Float32Array(G*B*4*v),X=new D0(I,G,B,v);X.type=sa,X.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const ot=_[H],rt=O[H],pt=N[H],ut=G*B*4*H;for(let P=0;P<ot.count;P++){const Z=P*w;E===!0&&(l.fromBufferAttribute(ot,P),I[ut+Z+0]=l.x,I[ut+Z+1]=l.y,I[ut+Z+2]=l.z,I[ut+Z+3]=0),R===!0&&(l.fromBufferAttribute(rt,P),I[ut+Z+4]=l.x,I[ut+Z+5]=l.y,I[ut+Z+6]=l.z,I[ut+Z+7]=0),y===!0&&(l.fromBufferAttribute(pt,P),I[ut+Z+8]=l.x,I[ut+Z+9]=l.y,I[ut+Z+10]=l.z,I[ut+Z+11]=pt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new ae(G,B)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function NT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const G0=new Vn,Xg=new I0(1,1),V0=new D0,k0=new ay,X0=new z0,Wg=[],qg=[],Yg=new Float32Array(16),jg=new Float32Array(9),Zg=new Float32Array(4);function Dr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Wg[l];if(u===void 0&&(u=new Float32Array(l),Wg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Lc(o,t){let i=qg[t];i===void 0&&(i=new Int32Array(t),qg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function BT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Zg.set(s),o.uniformMatrix2fv(this.addr,!1,Zg),hn(i,s)}}function FT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;jg.set(s),o.uniformMatrix3fv(this.addr,!1,jg),hn(i,s)}}function HT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Yg.set(s),o.uniformMatrix4fv(this.addr,!1,Yg),hn(i,s)}}function GT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function WT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function ZT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Xg.compareFunction=C0,u=Xg):u=G0,i.setTexture2D(t||u,l)}function KT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||k0,l)}function QT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||X0,l)}function JT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||V0,l)}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return IT;case 35674:return BT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function tb(o,t){o.uniform1fv(this.addr,t)}function eb(o,t){const i=Dr(t,this.size,2);o.uniform2fv(this.addr,i)}function nb(o,t){const i=Dr(t,this.size,3);o.uniform3fv(this.addr,i)}function ib(o,t){const i=Dr(t,this.size,4);o.uniform4fv(this.addr,i)}function ab(o,t){const i=Dr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,t){const i=Dr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rb(o,t){const i=Dr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ob(o,t){o.uniform1iv(this.addr,t)}function lb(o,t){o.uniform2iv(this.addr,t)}function cb(o,t){o.uniform3iv(this.addr,t)}function ub(o,t){o.uniform4iv(this.addr,t)}function fb(o,t){o.uniform1uiv(this.addr,t)}function hb(o,t){o.uniform2uiv(this.addr,t)}function db(o,t){o.uniform3uiv(this.addr,t)}function pb(o,t){o.uniform4uiv(this.addr,t)}function mb(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||G0,u[h])}function _b(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||k0,u[h])}function gb(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||X0,u[h])}function vb(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||V0,u[h])}function xb(o){switch(o){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return vb}}class Sb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class yb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xb(i.type)}}class Mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Kg(o,t){o.seq.push(t),o.map[t.id]=t}function Eb(o,t,i){const s=o.name,l=s.length;for(gh.lastIndex=0;;){const u=gh.exec(s),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Kg(i,p===void 0?new Sb(d,o,t):new yb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Mb(d),Kg(i,v)),i=v}}}class Ac{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Eb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Qg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Tb=37297;let bb=0;function Ab(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Jg=new re;function Rb(o){Ae._getMatrix(Jg,Ae.workingColorSpace,o);const t=`mat3( ${Jg.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function $g(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ab(o.getShaderSource(t),h)}else return l}function Cb(o,t){const i=Rb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function wb(o,t){let i;switch(t){case wS:i="Linear";break;case DS:i="Reinhard";break;case US:i="Cineon";break;case LS:i="ACESFilmic";break;case OS:i="AgX";break;case PS:i="Neutral";break;case NS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new $;function Db(){Ae.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),t=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Lb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Nb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Lo(o){return o!==""}function t0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(Ob,zb)}const Pb=new Map;function zb(o,t){let i=le[t];if(i===void 0){const s=Pb.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return rd(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(o){return o.replace(Ib,Bb)}function Bb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function i0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===lS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Hb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Vb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case g0:t="ENVMAP_BLENDING_MULTIPLY";break;case RS:t="ENVMAP_BLENDING_MIX";break;case CS:t="ENVMAP_BLENDING_ADD";break}return t}function kb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Xb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Fb(i),p=Hb(i),g=Gb(i),v=Vb(i),x=kb(i),M=Ub(i),E=Lb(u),R=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(y=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?le.tonemapping_pars_fragment:"",i.toneMapping!==ka?wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Cb("linearToOutputTexel",i.outputColorSpace),Db(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=rd(h),h=t0(h,i),h=e0(h,i),d=rd(d),d=t0(d,i),d=e0(d,i),h=n0(h),d=n0(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=O+y+h,D=O+_+d,G=Qg(l,l.VERTEX_SHADER,N),B=Qg(l,l.FRAGMENT_SHADER,D);l.attachShader(R,G),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(H){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(G).trim(),pt=l.getShaderInfoLog(B).trim();let ut=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,G,B);else{const Z=$g(l,G,"vertex"),W=$g(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+Z+`
`+W)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(rt===""||pt==="")&&(P=!1);P&&(H.diagnostics={runnable:ut,programLog:ot,vertexShader:{log:rt,prefix:y},fragmentShader:{log:pt,prefix:_}})}l.deleteShader(G),l.deleteShader(B),X=new Ac(l,R),w=Nb(l,R)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Tb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let Wb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Yb(t),i.set(t,s)),s}}class Yb{constructor(t){this.id=Wb++,this.code=t,this.usedTimes=0}}function jb(o,t,i,s,l,u,h){const d=new vd,m=new qb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,H,ot,rt){const pt=ot.fog,ut=rt.geometry,P=w.isMeshStandardMaterial?ot.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),W=Z&&Z.mapping===Dc?Z.image.height:null,St=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,tt=U!==void 0?U.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let yt,Q,mt,Mt;if(St){const Te=Ci[St];yt=Te.vertexShader,Q=Te.fragmentShader}else yt=w.vertexShader,Q=w.fragmentShader,m.update(w),mt=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=rt.isInstancedMesh===!0,Kt=rt.isBatchedMesh===!0,Le=!!w.map,Be=!!w.matcap,ge=!!Z,F=!!w.aoMap,Sn=!!w.lightMap,Me=!!w.bumpMap,he=!!w.normalMap,Gt=!!w.displacementMap,ve=!!w.emissiveMap,Yt=!!w.metalnessMap,ie=!!w.roughnessMap,Je=w.anisotropy>0,L=w.clearcoat>0,T=w.dispersion>0,et=w.iridescence>0,ft=w.sheen>0,dt=w.transmission>0,lt=Je&&!!w.anisotropyMap,Ot=L&&!!w.clearcoatMap,Dt=L&&!!w.clearcoatNormalMap,Ht=L&&!!w.clearcoatRoughnessMap,Vt=et&&!!w.iridescenceMap,xt=et&&!!w.iridescenceThicknessMap,Pt=ft&&!!w.sheenColorMap,Wt=ft&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Rt=!!w.specularColorMap,ne=!!w.specularIntensityMap,k=dt&&!!w.transmissionMap,Ut=dt&&!!w.thicknessMap,Et=!!w.gradientMap,zt=!!w.alphaMap,bt=w.alphaTest>0,gt=!!w.alphaHash,Bt=!!w.extensions;let ee=ka;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ee=o.toneMapping);const we={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Q,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&rt._colorsTexture!==null,instancing:oe,instancingColor:oe&&rt.instanceColor!==null,instancingMorph:oe&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:Be,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Sn,bumpMap:Me,normalMap:he,displacementMap:x&&Gt,emissiveMap:ve,normalMapObjectSpace:he&&w.normalMapType===FS,normalMapTangentSpace:he&&w.normalMapType===R0,metalnessMap:Yt,roughnessMap:ie,anisotropy:Je,anisotropyMap:lt,clearcoat:L,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:T,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ft,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Rt,specularIntensityMap:ne,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:w.transparent===!1&&w.blending===Mr&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:gt,combine:w.combine,mapUv:Le&&R(w.map.channel),aoMapUv:F&&R(w.aoMap.channel),lightMapUv:Sn&&R(w.lightMap.channel),bumpMapUv:Me&&R(w.bumpMap.channel),normalMapUv:he&&R(w.normalMap.channel),displacementMapUv:Gt&&R(w.displacementMap.channel),emissiveMapUv:ve&&R(w.emissiveMap.channel),metalnessMapUv:Yt&&R(w.metalnessMap.channel),roughnessMapUv:ie&&R(w.roughnessMap.channel),anisotropyMapUv:lt&&R(w.anisotropyMap.channel),clearcoatMapUv:Ot&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&R(w.sheenRoughnessMap.channel),specularMapUv:qt&&R(w.specularMap.channel),specularColorMapUv:Rt&&R(w.specularColorMap.channel),specularIntensityMapUv:ne&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Ut&&R(w.thicknessMap.channel),alphaMapUv:zt&&R(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(he||Je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(Le||zt),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:ve&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(O(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let H;if(C){const ot=Ci[C];H=gy.clone(ot.uniforms)}else H=w.uniforms;return H}function G(w,C){let H;for(let ot=0,rt=g.length;ot<rt;ot++){const pt=g[ot];if(pt.cacheKey===C){H=pt,++H.usedTimes;break}}return H===void 0&&(H=new Xb(o,C,w,u),g.push(H)),H}function B(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:X}}function Zb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Kb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function a0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function s0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,E,R,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:R,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=y),t++,_}function d(v,x,M,E,R,y){const _=h(v,x,M,E,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,E,R,y){const _=h(v,x,M,E,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Kb),s.length>1&&s.sort(x||a0),l.length>1&&l.sort(x||a0)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Qb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new s0,o.set(s,[h])):l>=u.length?(h=new s0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Jb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new _e};break;case"SpotLight":i={position:new $,direction:new $,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function $b(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let tA=0;function eA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nA(o){const t=new Jb,i=$b(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,u=new Xe,h=new Xe;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,R=0,y=0,_=0,O=0,N=0,D=0,G=0,B=0,I=0;p.sort(eA);for(let w=0,C=p.length;w<C;w++){const H=p[w],ot=H.color,rt=H.intensity,pt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ot.r*rt,v+=ot.g*rt,x+=ot.b*rt;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],rt);I++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,W=i.get(H);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=H.shadow.matrix,O++}s.directional[M]=P,M++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ot).multiplyScalar(rt),P.distance=pt,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[R]=P;const Z=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,Z.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[R]=Z.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,s.spotShadow[R]=W,s.spotShadowMap[R]=ut,D++}R++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(ot).multiplyScalar(rt),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=P,y++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const Z=H.shadow,W=i.get(H);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=H.shadow.matrix,N++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(rt),P.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==R||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==O||X.numPointShadows!==N||X.numSpotShadows!==D||X.numSpotMaps!==G||X.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,X.directionalLength=M,X.pointLength=E,X.spotLength=R,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=O,X.numPointShadows=N,X.numSpotShadows=D,X.numSpotMaps=G,X.numLightProbes=I,s.version=tA++)}function m(p,g){let v=0,x=0,M=0,E=0,R=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const N=p[_];if(N.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(N.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function r0(o){const t=new nA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function iA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new r0(o),t.set(l,[d])):u>=h.length?(d=new r0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rA(o,t,i){let s=new Sd;const l=new ae,u=new ae,h=new Qe,d=new Ry({depthPacking:BS}),m=new Cy,p={},g=i.maxTextureSize,v={[Xa]:Gn,[Gn]:Xa,[gi]:gi},x=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:aA,fragmentShader:sA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new la;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Si(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let _=this.type;this.render=function(B,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Va),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const rt=_!==ia&&this.type===ia,pt=_===ia&&this.type!==ia;for(let ut=0,P=B.length;ut<P;ut++){const Z=B[ut],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,W.mapSize.y=u.y)),W.map===null||rt===!0||pt===!0){const tt=this.type!==ia?{minFilter:yi,magFilter:yi}:{};W.map!==null&&W.map.dispose(),W.map=new bs(l.x,l.y,tt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const U=W.getViewportCount();for(let tt=0;tt<U;tt++){const vt=W.getViewport(tt);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),ot.viewport(h),W.updateMatrices(Z,tt),s=W.getFrustum(),D(I,X,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===ia&&O(W,X),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,H)};function O(B,I){const X=t.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new bs(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(I,null,X,x,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(I,null,X,M,R,null)}function N(B,I,X,w){let C=null;const H=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ot=C.uuid,rt=I.uuid;let pt=p[ot];pt===void 0&&(pt={},p[ot]=pt);let ut=pt[rt];ut===void 0&&(ut=C.clone(),pt[rt]=ut,I.addEventListener("dispose",G)),C=ut}if(C.visible=I.visible,C.wireframe=I.wireframe,w===ia?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=o.properties.get(C);ot.light=X}return C}function D(B,I,X,w,C){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===ia)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const rt=t.update(B),pt=B.material;if(Array.isArray(pt)){const ut=rt.groups;for(let P=0,Z=ut.length;P<Z;P++){const W=ut[P],St=pt[W.materialIndex];if(St&&St.visible){const U=N(B,St,w,C);B.onBeforeShadow(o,B,I,X,rt,U,W),o.renderBufferDirect(X,null,rt,U,B,W),B.onAfterShadow(o,B,I,X,rt,U,W)}}}else if(pt.visible){const ut=N(B,pt,w,C);B.onBeforeShadow(o,B,I,X,rt,ut,null),o.renderBufferDirect(X,null,rt,ut,B,null),B.onAfterShadow(o,B,I,X,rt,ut,null)}}const ot=B.children;for(let rt=0,pt=ot.length;rt<pt;rt++)D(ot[rt],I,X,w,C)}function G(B){B.target.removeEventListener("dispose",G);for(const X in p){const w=p[X],C=B.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const oA={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[br]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:br};function lA(o,t){function i(){let k=!1;const Ut=new Qe;let Et=null;const zt=new Qe(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,gt,Bt,ee,we){we===!0&&(bt*=ee,gt*=ee,Bt*=ee),Ut.set(bt,gt,Bt,ee),zt.equals(Ut)===!1&&(o.clearColor(bt,gt,Bt,ee),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(gt){if(Ut!==gt){const Bt=t.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ut=gt;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(gt){gt?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(gt){Et!==gt&&!k&&(o.depthMask(gt),Et=gt)},setFunc:function(gt){if(Ut&&(gt=oA[gt]),zt!==gt){switch(gt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){bt!==gt&&(Ut&&(gt=1-gt),o.clearDepth(gt),bt=gt)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,gt=null,Bt=null,ee=null,we=null;return{setTest:function(Te){k||(Te?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!k&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,kn,dn){(Et!==Te||zt!==kn||bt!==dn)&&(o.stencilFunc(Te,kn,dn),Et=Te,zt=kn,bt=dn)},setOp:function(Te,kn,dn){(gt!==Te||Bt!==kn||ee!==dn)&&(o.stencilOp(Te,kn,dn),gt=Te,Bt=kn,ee=dn)},setLocked:function(Te){k=Te},setClear:function(Te){we!==Te&&(o.clearStencil(Te),we=Te)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,gt=null,Bt=null,ee=null,we=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],E=null,R=!1,y=null,_=null,O=null,N=null,D=null,G=null,B=null,I=new _e(0,0,0),X=0,w=!1,C=null,H=null,ot=null,rt=null,pt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Z>=2);let St=null,U={};const tt=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),yt=new Qe().fromArray(tt),Q=new Qe().fromArray(vt);function mt(k,Ut,Et,zt){const bt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Et;Bt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return gt}const Mt={};Mt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(br),Me(!1),he(og),At(o.CULL_FACE),F(Va);function At(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function oe(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let Et=M,zt=!1;if(k){Et=x.get(Ut),Et===void 0&&(Et=[],x.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Bt=bt.length;gt<Bt;gt++)Et[gt]=o.COLOR_ATTACHMENT0+gt;Et.length=bt.length,zt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Et)}function Le(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Be={[vs]:o.FUNC_ADD,[uS]:o.FUNC_SUBTRACT,[fS]:o.FUNC_REVERSE_SUBTRACT};Be[hS]=o.MIN,Be[dS]=o.MAX;const ge={[pS]:o.ZERO,[mS]:o.ONE,[_S]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[MS]:o.SRC_ALPHA_SATURATE,[SS]:o.DST_COLOR,[vS]:o.DST_ALPHA,[gS]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[yS]:o.ONE_MINUS_DST_COLOR,[xS]:o.ONE_MINUS_DST_ALPHA,[ES]:o.CONSTANT_COLOR,[TS]:o.ONE_MINUS_CONSTANT_COLOR,[bS]:o.CONSTANT_ALPHA,[AS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,Et,zt,bt,gt,Bt,ee,we,Te){if(k===Va){R===!0&&(Ct(o.BLEND),R=!1);return}if(R===!1&&(At(o.BLEND),R=!0),k!==cS){if(k!==y||Te!==w){if((_!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),_=vs,D=vs),Te)switch(k){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lg:o.blendFunc(o.ONE,o.ONE);break;case cg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ug:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case cg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ug:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,N=null,G=null,B=null,I.set(0,0,0),X=0,y=k,w=Te}return}bt=bt||Ut,gt=gt||Et,Bt=Bt||zt,(Ut!==_||bt!==D)&&(o.blendEquationSeparate(Be[Ut],Be[bt]),_=Ut,D=bt),(Et!==O||zt!==N||gt!==G||Bt!==B)&&(o.blendFuncSeparate(ge[Et],ge[zt],ge[gt],ge[Bt]),O=Et,N=zt,G=gt,B=Bt),(ee.equals(I)===!1||we!==X)&&(o.blendColor(ee.r,ee.g,ee.b,we),I.copy(ee),X=we),y=k,w=!1}function Sn(k,Ut){k.side===gi?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=k.side===Gn;Ut&&(Et=!Et),Me(Et),k.blending===Mr&&k.transparent===!1?F(Va):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function he(k){k!==rS?(At(o.CULL_FACE),k!==H&&(k===og?o.cullFace(o.BACK):k===oS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=k}function Gt(k){k!==ot&&(P&&o.lineWidth(k),ot=k)}function ve(k,Ut,Et){k?(At(o.POLYGON_OFFSET_FILL),(rt!==Ut||pt!==Et)&&(o.polygonOffset(Ut,Et),rt=Ut,pt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(k){k?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ie(k){k===void 0&&(k=o.TEXTURE0+ut-1),St!==k&&(o.activeTexture(k),St=k)}function Je(k,Ut,Et){Et===void 0&&(St===null?Et=o.TEXTURE0+ut-1:Et=St);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(St!==Et&&(o.activeTexture(Et),St=Et),o.bindTexture(k,Ut||Mt[k]),zt.type=k,zt.texture=Ut)}function L(){const k=U[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Wt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function qt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,U={},v={},x=new WeakMap,M=[],E=null,R=!1,y=null,_=null,O=null,N=null,D=null,G=null,B=null,I=new _e(0,0,0),X=0,w=!1,C=null,H=null,ot=null,rt=null,pt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Kt,useProgram:Le,setBlending:F,setMaterial:Sn,setFlipSided:Me,setCullFace:he,setLineWidth:Gt,setPolygonOffset:ve,setScissorTest:Yt,activeTexture:ie,bindTexture:Je,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Vt,texImage3D:xt,updateUBOMapping:qt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ft,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ne}}function cA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):wc("canvas")}function R(L,T,et){let ft=1;const dt=Je(L);if((dt.width>et||dt.height>et)&&(ft=et/Math.max(dt.width,dt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ft*dt.width),Ot=Math.floor(ft*dt.height);v===void 0&&(v=E(lt,Ot));const Dt=T?E(lt,Ot):v;return Dt.width=lt,Dt.height=Ot,Dt.getContext("2d").drawImage(L,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,et,ft,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=T;if(T===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),T===o.RGBA){const Ot=dt?Rc:Ae.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Ot===ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function D(L,T){let et;return L?T===null||T===Es||T===Oo?et=o.DEPTH24_STENCIL8:T===sa?et=o.DEPTH32F_STENCIL8:T===No&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===Oo?et=o.DEPTH_COMPONENT24:T===sa?et=o.DEPTH_COMPONENT32F:T===No&&(et=o.DEPTH_COMPONENT16),et}function G(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),C(T)}function X(L){const T=s.get(L);if(T.__webglInit===void 0)return;const et=L.source,ft=x.get(et);if(ft){const dt=ft[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(ft).length===0&&x.delete(et)}s.remove(L)}function w(L){const T=s.get(L);o.deleteTexture(T.__webglTexture);const et=L.source,ft=x.get(et);delete ft[T.__cacheKey],h.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let dt=0;dt<T.__webglFramebuffer[ft].length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][dt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let ft=0,dt=et.length;ft<dt;ft++){const lt=s.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ft])}s.remove(L)}let H=0;function ot(){H=0}function rt(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function pt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ut(L,T){const et=s.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,L,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function P(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function Z(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function W(L,T){const et=s.get(L);if(L.version>0&&et.__version!==L.version){At(et,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const St={[Dh]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},U={[yi]:o.NEAREST,[zS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Gf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},tt={[HS]:o.NEVER,[qS]:o.ALWAYS,[GS]:o.LESS,[C0]:o.LEQUAL,[VS]:o.EQUAL,[WS]:o.GEQUAL,[kS]:o.GREATER,[XS]:o.NOTEQUAL};function vt(L,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Gf||T.magFilter===Jl||T.magFilter===ys||T.minFilter===wi||T.minFilter===Gf||T.minFilter===Jl||T.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==Jl&&T.minFilter!==ys||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ft=T.source;let dt=x.get(ft);dt===void 0&&(dt={},x.set(ft,dt));const lt=pt(T);if(lt!==L.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[lt].usedTimes++;const Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(T)),L.__cacheKey=lt,L.__webglTexture=dt[lt].texture}return et}function Q(L,T,et){return Math.floor(Math.floor(L/et)/T)}function mt(L,T,et,ft){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,ft,T.data);else{lt.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<lt.length;xt++){const Pt=lt[Ot],Wt=lt[xt],qt=Pt.start+Pt.count,Rt=Q(Wt.start,T.width,4),ne=Q(Pt.start,T.width,4);Wt.start<=qt+1&&Rt===ne&&Q(Wt.start+Wt.count-1,T.width,4)===Rt?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,lt[Ot]=Wt)}lt.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let xt=0,Pt=lt.length;xt<Pt;xt++){const Wt=lt[xt],qt=Math.floor(Wt.start/4),Rt=Math.ceil(Wt.count/4),ne=qt%T.width,k=Math.floor(qt/T.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ne,k,Ut,Et,et,ft,T.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function Mt(L,T,et){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const dt=yt(L,T),lt=T.source;i.bindTexture(ft,L.__webglTexture,o.TEXTURE0+et);const Ot=s.get(lt);if(lt.version!==Ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Ht=T.colorSpace===Ga?null:Ae.getPrimaries(T.colorSpace),Vt=T.colorSpace===Ga||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=R(T.image,!1,l.maxTextureSize);xt=ie(T,xt);const Pt=u.convert(T.format,T.colorSpace),Wt=u.convert(T.type);let qt=N(T.internalFormat,Pt,Wt,T.colorSpace,T.isVideoTexture);vt(ft,T);let Rt;const ne=T.mipmaps,k=T.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=lt.dataReady,zt=G(T,xt);if(T.isDepthTexture)qt=D(T.format===zo,T.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,qt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,null));else if(T.isDataTexture)if(ne.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,gt=ne.length;bt<gt;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data);T.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height),Et&&mt(T,xt,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,ne[0].width,ne[0].height,xt.depth);for(let bt=0,gt=ne.length;bt<gt;bt++)if(Rt=ne[bt],T.format!==xi)if(Pt!==null)if(k){if(Et)if(T.layerUpdates.size>0){const Bt=zg(Rt.width,Rt.height,T.format,T.type);for(const ee of T.layerUpdates){const we=Rt.data.subarray(ee*Bt/Rt.data.BYTES_PER_ELEMENT,(ee+1)*Bt/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ee,Rt.width,Rt.height,1,Pt,we)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Wt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Pt,Wt,Rt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,gt=ne.length;bt<gt;bt++)Rt=ne[bt],T.format!==xi?Pt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data)}else if(T.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,xt.width,xt.height,xt.depth),Et)if(T.layerUpdates.size>0){const bt=zg(xt.width,xt.height,T.format,T.type);for(const gt of T.layerUpdates){const Bt=xt.data.subarray(gt*bt/xt.data.BYTES_PER_ELEMENT,(gt+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,xt.width,xt.height,1,Pt,Wt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(T.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,qt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(T.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height);else{let bt=xt.width,gt=xt.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,qt,bt,gt,0,Pt,Wt,null),bt>>=1,gt>>=1}}else if(ne.length>0){if(k&&Ut){const bt=Je(ne[0]);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}for(let bt=0,gt=ne.length;bt<gt;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,Wt,Rt):i.texImage2D(o.TEXTURE_2D,bt,qt,Pt,Wt,Rt);T.generateMipmaps=!1}else if(k){if(Ut){const bt=Je(xt);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,xt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,xt);y(T)&&_(ft),Ot.__version=lt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function At(L,T,et){if(T.image.length!==6)return;const ft=yt(L,T),dt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const lt=s.get(dt);if(dt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Ot=Ae.getPrimaries(Ae.workingColorSpace),Dt=T.colorSpace===Ga?null:Ae.getPrimaries(T.colorSpace),Ht=T.colorSpace===Ga||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let gt=0;gt<6;gt++)!Vt&&!xt?Pt[gt]=R(T.image[gt],!0,l.maxCubemapSize):Pt[gt]=xt?T.image[gt].image:T.image[gt],Pt[gt]=ie(T,Pt[gt]);const Wt=Pt[0],qt=u.convert(T.format,T.colorSpace),Rt=u.convert(T.type),ne=N(T.internalFormat,qt,Rt,T.colorSpace),k=T.isVideoTexture!==!0,Ut=lt.__version===void 0||ft===!0,Et=dt.dataReady;let zt=G(T,Wt);vt(o.TEXTURE_CUBE_MAP,T);let bt;if(Vt){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,Wt.width,Wt.height);for(let gt=0;gt<6;gt++){bt=Pt[gt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ee=bt[Bt];T.format!==xi?qt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ee.width,ee.height,qt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ne,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ee.width,ee.height,qt,Rt,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ne,ee.width,ee.height,0,qt,Rt,ee.data)}}}else{if(bt=T.mipmaps,k&&Ut){bt.length>0&&zt++;const gt=Je(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(xt){k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt[gt].width,Pt[gt].height,qt,Rt,Pt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,Pt[gt].width,Pt[gt].height,0,qt,Rt,Pt[gt].data);for(let Bt=0;Bt<bt.length;Bt++){const we=bt[Bt].image[gt].image;k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,we.width,we.height,qt,Rt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ne,we.width,we.height,0,qt,Rt,we.data)}}else{k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt,Rt,Pt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,qt,Rt,Pt[gt]);for(let Bt=0;Bt<bt.length;Bt++){const ee=bt[Bt];k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,qt,Rt,ee.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ne,qt,Rt,ee.image[gt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),lt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ct(L,T,et,ft,dt,lt){const Ot=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Ht=N(et.internalFormat,Ot,Dt,et.colorSpace),Vt=s.get(T),xt=s.get(et);if(xt.__renderTarget=T,!Vt.__hasExternalTextures){const Pt=Math.max(1,T.width>>lt),Wt=Math.max(1,T.height>>lt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Ht,Pt,Wt,T.depth,0,Ot,Dt,null):i.texImage2D(dt,lt,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,dt,xt.__webglTexture,0,Gt(T)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,dt,xt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(L,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const ft=T.depthTexture,dt=ft&&ft.isDepthTexture?ft.type:null,lt=D(T.stencilBuffer,dt),Ot=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(T);ve(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,lt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,lt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,L)}else{const ft=T.textures;for(let dt=0;dt<ft.length;dt++){const lt=ft[dt],Ot=u.convert(lt.format,lt.colorSpace),Dt=u.convert(lt.type),Ht=N(lt.internalFormat,Ot,Dt,lt.colorSpace),Vt=Gt(T);et&&ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,T.width,T.height):ve(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const dt=ft.__webglTexture,lt=Gt(T);if(T.depthTexture.format===Po)ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(T.depthTexture.format===zo)ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Le(L){const T=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",dt)};ft.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=ft}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?Kt(T.__webglFramebuffer[0],L):Kt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(T.__webglDepthbuffer[ft],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),oe(T.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(L,T,et){const ft=s.get(L);T!==void 0&&Ct(ft.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(L)}function ge(L){const T=L.texture,et=s.get(L),ft=s.get(T);L.addEventListener("dispose",I);const dt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=s.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ve(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=u.convert(Ht.format,Ht.colorSpace),xt=u.convert(Ht.type),Pt=N(Ht.internalFormat,Vt,xt,Ht.colorSpace,L.isXRRenderTarget===!0),Wt=Gt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],xt=s.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),vt(o.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,L,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(Vt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),vt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],L,T,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Dt,0);y(T)&&_(Dt),i.unbindTexture()}L.depthBuffer&&Le(L)}function F(L){const T=L.textures;for(let et=0,ft=T.length;et<ft;et++){const dt=T[et];if(y(dt)){const lt=O(L),Ot=s.get(dt).__webglTexture;i.bindTexture(lt,Ot),_(lt),i.unbindTexture()}}}const Sn=[],Me=[];function he(L){if(L.samples>0){if(ve(L)===!1){const T=L.textures,et=L.width,ft=L.height;let dt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(L),Dt=T.length>1;if(Dt)for(let Vt=0;Vt<T.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<T.length;Vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(T[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,dt,o.NEAREST),m===!0&&(Sn.length=0,Me.length=0,Sn.push(o.COLOR_ATTACHMENT0+Vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Sn.push(lt),Me.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<T.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(T[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Gt(L){return Math.min(l.maxSamples,L.samples)}function ve(L){const T=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ie(L,T){const et=L.colorSpace,ft=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Cr&&et!==Ga&&(Ae.getTransfer(et)===ze?(ft!==xi||dt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ot,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ve}function uA(o,t){function i(s,l=Ga){let u;const h=Ae.getTransfer(l);if(s===Ui)return o.UNSIGNED_BYTE;if(s===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(s===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===y0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===x0)return o.BYTE;if(s===S0)return o.SHORT;if(s===No)return o.UNSIGNED_SHORT;if(s===cd)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Io)return o.HALF_FLOAT;if(s===M0)return o.ALPHA;if(s===E0)return o.RGB;if(s===xi)return o.RGBA;if(s===Po)return o.DEPTH_COMPONENT;if(s===zo)return o.DEPTH_STENCIL;if(s===T0)return o.RED;if(s===hd)return o.RED_INTEGER;if(s===b0)return o.RG;if(s===dd)return o.RG_INTEGER;if(s===pd)return o.RGBA_INTEGER;if(s===Sc||s===yc||s===Mc||s===Ec)if(h===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Nh||s===Oh||s===Ph)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh||s===Ih||s===Bh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===zh||s===Ih)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Bh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Fh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===$h||s===td)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Tc)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===A0||s===ed||s===nd||s===id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new Uc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends As{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,E=null;const R=new dA,y=i.getContextAttributes();let _=null,O=null;const N=[],D=[],G=new ae;let B=null;const I=new ci;I.viewport=new Qe;const X=new ci;X.viewport=new Qe;const w=[I,X],C=new Ny;let H=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=N[Q];return mt===void 0&&(mt=new ch,N[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=N[Q];return mt===void 0&&(mt=new ch,N[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=N[Q];return mt===void 0&&(mt=new ch,N[Q]=mt),mt.getHandSpace()};function rt(Q){const mt=D.indexOf(Q.inputSource);if(mt===-1)return;const Mt=N[mt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function pt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<N.length;Q++){const mt=D[Q];mt!==null&&(D[Q]=null,N[Q].disconnect(mt))}H=null,ot=null,R.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,O=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?zo:Po,At=y.stencil?Oo:Es);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new bs(x.textureWidth,x.textureHeight,{format:xi,type:Ui,depthTexture:new I0(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new bs(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ut(Q){for(let mt=0;mt<Q.removed.length;mt++){const Mt=Q.removed[mt],At=D.indexOf(Mt);At>=0&&(D[At]=null,N[At].disconnect(Mt))}for(let mt=0;mt<Q.added.length;mt++){const Mt=Q.added[mt];let At=D.indexOf(Mt);if(At===-1){for(let oe=0;oe<N.length;oe++)if(oe>=D.length){D.push(Mt),At=oe;break}else if(D[oe]===null){D[oe]=Mt,At=oe;break}if(At===-1)break}const Ct=N[At];Ct&&Ct.connect(Mt)}}const P=new $,Z=new $;function W(Q,mt,Mt){P.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const At=P.distanceTo(Z),Ct=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Kt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Be=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],Sn=(oe[8]+1)/oe[0],Me=Kt*F,he=Kt*Sn,Gt=At/(-F+Sn),ve=Gt*-F;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Kt+Gt,ie=Le+Gt,Je=Me-ve,L=he+(At-ve),T=Be*Le/ie*Yt,et=ge*Le/ie*Yt;Q.projectionMatrix.makePerspective(Je,L,T,et,Yt,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,Mt=Q.far;R.texture!==null&&(R.depthNear>0&&(mt=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),C.near=X.near=I.near=mt,C.far=X.far=I.far=Mt,(H!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ot=C.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|X.layers.mask;const At=Q.parent,Ct=C.cameras;St(C,At);for(let oe=0;oe<Ct.length;oe++)St(Ct[oe],At);Ct.length===2?W(C,I,X):C.projectionMatrix.copy(I.projectionMatrix),U(Q,C,At)};function U(Q,mt,Mt){Mt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let tt=null;function vt(Q,mt){if(g=mt.getViewerPose(p||h),E=mt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let At=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<Mt.length;Kt++){const Le=Mt[Kt];let Be=null;if(M!==null)Be=M.getViewport(Le);else{const F=v.getViewSubImage(x,Le);Be=F.viewport,Kt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let ge=w[Kt];ge===void 0&&(ge=new ci,ge.layers.enable(Kt),ge.viewport=new Qe,w[Kt]=ge),ge.matrix.fromArray(Le.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Le.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(Mt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let Mt=0;Mt<N.length;Mt++){const At=D[Mt],Ct=N[Mt];At!==null&&Ct!==void 0&&Ct.update(At,mt,p||h)}tt&&tt(Q,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),E=null}const yt=new H0;yt.setAnimationLoop(vt),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const _s=new Li,mA=new Xe;function _A(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,O0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,O,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),N=O.envMap,D=O.envMapRotation;N&&(y.envMap.value=N,_s.copy(D),_s.x*=-1,_s.y*=-1,_s.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(_s)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function gA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,N){const D=N.program;s.uniformBlockBinding(O,D)}function p(O,N){let D=l[O.id];D===void 0&&(E(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",y));const G=N.program;s.updateUBOMapping(O,G);const B=t.render.frame;u[O.id]!==B&&(x(O),u[O.id]=B)}function g(O){const N=v();O.__bindingPointIndex=N;const D=o.createBuffer(),G=O.__size,B=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const N=l[O.id],D=O.uniforms,G=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,I=D.length;B<I;B++){const X=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,C=X.length;w<C;w++){const H=X[w];if(M(H,B,w,G)===!0){const ot=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let ut=0;ut<rt.length;ut++){const P=rt[ut],Z=R(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ot+pt,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,pt),pt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,N,D,G){const B=O.value,I=N+"_"+D;if(G[I]===void 0)return typeof B=="number"||typeof B=="boolean"?G[I]=B:G[I]=B.clone(),!0;{const X=G[I];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return G[I]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(O){const N=O.uniforms;let D=0;const G=16;for(let I=0,X=N.length;I<X;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,H=w.length;C<H;C++){const ot=w[C],rt=Array.isArray(ot.value)?ot.value:[ot.value];for(let pt=0,ut=rt.length;pt<ut;pt++){const P=rt[pt],Z=R(P),W=D%G,St=W%Z.boundary,U=W+St;D+=St,U!==0&&G-U<Z.storage&&(D+=G-U),ot.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=Z.storage}}}const B=D%G;return B>0&&(D+=G-B),O.__size=D,O.__cache={},this}function R(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function y(O){const N=O.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class vA{constructor(t={}){const{canvas:i=ZS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=li;let B=0,I=0,X=null,w=-1,C=null;const H=new Qe,ot=new Qe;let rt=null;const pt=new _e(0);let ut=0,P=i.width,Z=i.height,W=1,St=null,U=null;const tt=new Qe(0,0,P,Z),vt=new Qe(0,0,P,Z);let yt=!1;const Q=new Sd;let mt=!1,Mt=!1;const At=new Xe,Ct=new Xe,oe=new $,Kt=new Qe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ge(){return X===null?W:1}let F=s;function Sn(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",gt,!1),F===null){const Y="webgl2";if(F=Sn(Y,A),F===null)throw Sn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,he,Gt,ve,Yt,ie,Je,L,T,et,ft,dt,lt,Ot,Dt,Ht,Vt,xt,Pt,Wt,qt,Rt,ne,k;function Ut(){Me=new CT(F),Me.init(),Rt=new uA(F,Me),he=new yT(F,Me,t,Rt),Gt=new lA(F,Me),he.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),ve=new UT(F),Yt=new Zb,ie=new cA(F,Me,Gt,Yt,he,Rt,ve),Je=new ET(D),L=new RT(D),T=new Iy(F),ne=new xT(F,T),et=new wT(F,T,ve,ne),ft=new NT(F,et,T,ve),Pt=new LT(F,he,ie),Ht=new MT(Yt),dt=new jb(D,Je,L,Me,he,ne,Ht),lt=new _A(D,Yt),Ot=new Qb,Dt=new iA(Me),xt=new vT(D,Je,L,Gt,ft,M,m),Vt=new rA(D,ft,he),k=new gA(F,ve,he,Gt),Wt=new ST(F,Me,ve),qt=new DT(F,Me,ve),ve.programs=dt.programs,D.capabilities=he,D.extensions=Me,D.properties=Yt,D.renderLists=Ot,D.shadowMap=Vt,D.state=Gt,D.info=ve}Ut();const Et=new pA(D,F);this.xr=Et,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(P,Z,!1))},this.getSize=function(A){return A.set(P,Z)},this.setSize=function(A,Y,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Z=Y,i.width=Math.floor(A*W),i.height=Math.floor(Y*W),at===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*W,Z*W).floor()},this.setDrawingBufferSize=function(A,Y,at){P=A,Z=Y,W=at,i.width=Math.floor(A*at),i.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,Y,at,st){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,Y,at,st),Gt.viewport(H.copy(tt).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,Y,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,Y,at,st),Gt.scissor(ot.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Gt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let st=0;if(A){let j=!1;if(X!==null){const Tt=X.texture.format;j=Tt===pd||Tt===dd||Tt===hd}if(j){const Tt=X.texture.type,wt=Tt===Ui||Tt===Es||Tt===No||Tt===Oo||Tt===ud||Tt===fd,Nt=xt.getClearColor(),It=xt.getClearAlpha(),Jt=Nt.r,jt=Nt.g,kt=Nt.b;wt?(E[0]=Jt,E[1]=jt,E[2]=kt,E[3]=It,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=Jt,R[1]=jt,R[2]=kt,R[3]=It,F.clearBufferiv(F.COLOR,0,R))}else st|=F.COLOR_BUFFER_BIT}Y&&(st|=F.DEPTH_BUFFER_BIT),at&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Je.dispose(),L.dispose(),ft.dispose(),ne.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",yn),On.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ve.autoReset,Y=Vt.enabled,at=Vt.autoUpdate,st=Vt.needsUpdate,j=Vt.type;Ut(),ve.autoReset=A,Vt.enabled=Y,Vt.autoUpdate=at,Vt.needsUpdate=st,Vt.type=j}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const Y=A.target;Y.removeEventListener("dispose",Bt),ee(Y)}function ee(A){we(A),Yt.remove(A)}function we(A){const Y=Yt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,st,j,Tt){Y===null&&(Y=Le);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Nt=ja(A,Y,at,st,j);Gt.setMaterial(st,wt);let It=at.index,Jt=1;if(st.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;Jt=2}const jt=at.drawRange,kt=at.attributes.position;let ce=jt.start*Jt,Re=(jt.start+jt.count)*Jt;Tt!==null&&(ce=Math.max(ce,Tt.start*Jt),Re=Math.min(Re,(Tt.start+Tt.count)*Jt)),It!==null?(ce=Math.max(ce,0),Re=Math.min(Re,It.count)):kt!=null&&(ce=Math.max(ce,0),Re=Math.min(Re,kt.count));const Ge=Re-ce;if(Ge<0||Ge===1/0)return;ne.setup(j,st,Nt,at,It);let xe,Se=Wt;if(It!==null&&(xe=T.get(It),Se=qt,Se.setIndex(xe)),j.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*ge()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(j.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*ge()),j.isLineSegments?Se.setMode(F.LINES):j.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else j.isPoints?Se.setMode(F.POINTS):j.isSprite&&Se.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Se.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,je=j._multiDrawCounts,Ee=j._multiDrawCount,An=It?T.get(It).bytesPerElement:1,ha=Yt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<Ee;Ve++)ha.setValue(F,"_gl_DrawID",Ve),Se.render(Zt[Ve]/An,je[Ve])}else if(j.isInstancedMesh)Se.renderInstances(ce,Ge,j.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,Zt);Se.renderInstances(ce,Ge,je)}else Se.render(ce,Ge)};function Te(A,Y,at){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,ua(A,Y,at),A.side=Xa,A.needsUpdate=!0,ua(A,Y,at),A.side=gi):ua(A,Y,at)}this.compile=function(A,Y,at=null){at===null&&(at=A),_=Dt.get(at),_.init(Y),N.push(_),at.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Te(Nt,at,j),st.add(Nt)}else Te(Tt,at,j),st.add(Tt)}),_=N.pop(),st},this.compileAsync=function(A,Y,at=null){const st=this.compile(A,Y,at);return new Promise(j=>{function Tt(){if(st.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){j(A);return}setTimeout(Tt,10)}Me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let kn=null;function dn(A){kn&&kn(A)}function rn(){On.stop()}function yn(){On.start()}const On=new H0;On.setAnimationLoop(dn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){kn=A,Et.setAnimationLoop(A),A===null?On.stop():On.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",yn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Y),Y=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Y,X),_=Dt.get(A,N.length),_.init(Y),N.push(_),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=Ht.init(this.clippingPlanes,Mt),y=Ot.get(A,O.length),y.init(),O.push(y),Et.enabled===!0&&Et.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,Y,-1/0,D.sortObjects)}qa(A,Y,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,U),Be=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Be&&xt.addToRenderList(y,A),this.info.render.frame++,mt===!0&&Ht.beginShadows();const at=_.state.shadowsArray;Vt.render(at,A,Y),mt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];ko(st,j,A,It)}Be&&xt.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Vo(y,A,It,It.viewport)}}else j.length>0&&ko(st,j,A,Y),Be&&xt.render(A),Vo(y,A,Y);X!==null&&I===0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(D,A,Y),ne.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],mt===!0&&Ht.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function qa(A,Y,at,st){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){st&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const wt=ft.update(A),Nt=A.material;Nt.visible&&y.push(A,wt,Nt,at,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const wt=ft.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const It=wt.groups;for(let Jt=0,jt=It.length;Jt<jt;Jt++){const kt=It[Jt],ce=Nt[kt.materialIndex];ce&&ce.visible&&y.push(A,wt,ce,at,Kt.z,kt)}}else Nt.visible&&y.push(A,wt,Nt,at,Kt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],Y,at,st)}function Vo(A,Y,at,st){const j=A.opaque,Tt=A.transmissive,wt=A.transparent;_.setupLightsView(at),mt===!0&&Ht.setGlobalState(D.clippingPlanes,at),st&&Gt.viewport(H.copy(st)),j.length>0&&Ya(j,Y,at),Tt.length>0&&Ya(Tt,Y,at),wt.length>0&&Ya(wt,Y,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ko(A,Y,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new bs(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Io:Ui,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],wt=st.viewport||H;Tt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(pt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Be&&xt.render(at);const It=D.toneMapping;D.toneMapping=ka;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),mt===!0&&Ht.setGlobalState(D.clippingPlanes,st),Ya(A,at,st),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ce=Y.length;kt<ce;kt++){const Re=Y[kt],Ge=Re.object,xe=Re.geometry,Se=Re.material,Zt=Re.group;if(Se.side===gi&&Ge.layers.test(st.layers)){const je=Se.side;Se.side=Gn,Se.needsUpdate=!0,ca(Ge,at,st,xe,Se,Zt),Se.side=je,Se.needsUpdate=!0,jt=!0}}jt===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(pt,ut),Jt!==void 0&&(st.viewport=Jt),D.toneMapping=It}function Ya(A,Y,at){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const wt=A[j],Nt=wt.object,It=wt.geometry,Jt=wt.group;let jt=wt.material;jt.allowOverride===!0&&st!==null&&(jt=st),Nt.layers.test(at.layers)&&ca(Nt,Y,at,It,jt,Jt)}}function ca(A,Y,at,st,j,Tt){A.onBeforeRender(D,Y,at,st,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,Y,at,st,A,Tt),j.transparent===!0&&j.side===gi&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,D.renderBufferDirect(at,Y,st,j,A,Tt),j.side=Xa,j.needsUpdate=!0,D.renderBufferDirect(at,Y,st,j,A,Tt),j.side=gi):D.renderBufferDirect(at,Y,st,j,A,Tt),A.onAfterRender(D,Y,at,st,j,Tt)}function ua(A,Y,at){Y.isScene!==!0&&(Y=Le);const st=Yt.get(A),j=_.state.lights,Tt=_.state.shadowsArray,wt=j.state.version,Nt=dt.getParameters(A,j.state,Tt,Y,at),It=dt.getProgramCacheKey(Nt);let Jt=st.programs;st.environment=A.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(A.isMeshStandardMaterial?L:Je).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Bt),Jt=new Map,st.programs=Jt);let jt=Jt.get(It);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===wt)return Oi(A,Nt),jt}else Nt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Nt,D),jt=dt.acquireProgram(Nt,It),Jt.set(It,jt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Oi(A,Nt),st.needsLights=en(A),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function Ni(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Oi(A,Y){const at=Yt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function ja(A,Y,at,st,j){Y.isScene!==!0&&(Y=Le),ie.resetTextureUnits();const Tt=Y.fog,wt=st.isMeshStandardMaterial?Y.environment:null,Nt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cr,It=(st.isMeshStandardMaterial?L:Je).get(st.envMap||wt),Jt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Ge=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const xe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Se=xe!==void 0?xe.length:0,Zt=Yt.get(st),je=_.state.lights;if(mt===!0&&(Mt===!0||A!==C)){const pn=A===C&&st.id===w;Ht.setState(st,A,pn)}let Ee=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==je.state.version||Zt.outputColorSpace!==Nt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==It||st.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==Jt||Zt.vertexTangents!==jt||Zt.morphTargets!==kt||Zt.morphNormals!==ce||Zt.morphColors!==Re||Zt.toneMapping!==Ge||Zt.morphTargetsCount!==Se)&&(Ee=!0):(Ee=!0,Zt.__version=st.version);let An=Zt.currentProgram;Ee===!0&&(An=ua(st,Y,j));let ha=!1,Ve=!1,zi=!1;const Fe=An.getUniforms(),Rn=Zt.uniforms;if(Gt.useProgram(An.program)&&(ha=!0,Ve=!0,zi=!0),st.id!==w&&(w=st.id,Ve=!0),ha||C!==A){Gt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),QS(At),JS(At),Fe.setValue(F,"projectionMatrix",At)):Fe.setValue(F,"projectionMatrix",A.projectionMatrix),Fe.setValue(F,"viewMatrix",A.matrixWorldInverse);const Mn=Fe.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,oe.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ve=!0,zi=!0)}if(j.isSkinnedMesh){Fe.setOptional(F,j,"bindMatrix"),Fe.setOptional(F,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Fe.setValue(F,"boneTexture",pn.boneTexture,ie))}j.isBatchedMesh&&(Fe.setOptional(F,j,"batchingTexture"),Fe.setValue(F,"batchingTexture",j._matricesTexture,ie),Fe.setOptional(F,j,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",j._indirectTexture,ie),Fe.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",j._colorsTexture,ie));const on=at.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Pt.update(j,at,An),(Ve||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Fe.setValue(F,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=It,Rn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Rn.envMapIntensity.value=Y.environmentIntensity),Ve&&(Fe.setValue(F,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&fa(Rn,zi),Tt&&st.fog===!0&&lt.refreshFogUniforms(Rn,Tt),lt.refreshMaterialUniforms(Rn,st,W,Z,_.state.transmissionRenderTarget[A.id]),Ac.upload(F,Ni(Zt),Rn,ie)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ac.upload(F,Ni(Zt),Rn,ie),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(F,"center",j.center),Fe.setValue(F,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(F,"normalMatrix",j.normalMatrix),Fe.setValue(F,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let Mn=0,Mi=pn.length;Mn<Mi;Mn++){const Ii=pn[Mn];k.update(Ii,An),k.bind(Ii,An)}}return An}function fa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,at){const st=Yt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=Y,Yt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const at=Yt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const Xo=F.createFramebuffer();this.setRenderTarget=function(A,Y=0,at=0){X=A,B=Y,I=at;let st=!0,j=null,Tt=!1,wt=!1;if(A){const It=Yt.get(A);if(It.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)ie.setupRenderTarget(A);else if(It.__hasExternalTextures)ie.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&Yt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const jt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?j=jt[Y][at]:j=jt[Y],Tt=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?j=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[at]:j=jt,H.copy(A.viewport),ot.copy(A.scissor),rt=A.scissorTest}else H.copy(tt).multiplyScalar(W).floor(),ot.copy(vt).multiplyScalar(W).floor(),rt=yt;if(at!==0&&(j=Xo),Gt.bindFramebuffer(F.FRAMEBUFFER,j)&&st&&Gt.drawBuffers(A,j),Gt.viewport(H),Gt.scissor(ot),Gt.setScissorTest(rt),Tt){const It=Yt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,at)}else if(wt){const It=Yt.get(A.texture),Jt=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,at,Jt)}else if(A!==null&&at!==0){const It=Yt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,Y,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Gt.bindFramebuffer(F.FRAMEBUFFER,It);try{const Jt=A.textures[Nt],jt=Jt.format,kt=Jt.type;if(!he.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-st&&at>=0&&at<=A.height-j&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(Y,at,st,j,Rt.convert(jt),Rt.convert(kt),Tt))}finally{const Jt=X!==null?Yt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(Y>=0&&Y<=A.width-st&&at>=0&&at<=A.height-j){Gt.bindFramebuffer(F.FRAMEBUFFER,It);const Jt=A.textures[Nt],jt=Jt.format,kt=Jt.type;if(!he.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(Y,at,st,j,Rt.convert(jt),Rt.convert(kt),0);const Re=X!==null?Yt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Re);const Ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await KS(F,Ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(ce),F.deleteSync(Ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),wt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;ie.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,wt,Nt,j,Tt),Gt.unbindTexture()};const Wo=F.createFramebuffer(),Pi=F.createFramebuffer();this.copyTextureToTexture=function(A,Y,at=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let wt,Nt,It,Jt,jt,kt,ce,Re,Ge;const xe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,jt=at.min.y,kt=at.isBox3?at.min.z:0;else{const on=Math.pow(2,-j);wt=Math.floor(xe.width*on),Nt=Math.floor(xe.height*on),A.isDataArrayTexture?It=xe.depth:A.isData3DTexture?It=Math.floor(xe.depth*on):It=1,Jt=0,jt=0,kt=0}st!==null?(ce=st.x,Re=st.y,Ge=st.z):(ce=0,Re=0,Ge=0);const Se=Rt.convert(Y.format),Zt=Rt.convert(Y.type);let je;Y.isData3DTexture?(ie.setTexture3D(Y,0),je=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),je=F.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),An=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ha=F.getParameter(F.UNPACK_SKIP_PIXELS),Ve=F.getParameter(F.UNPACK_SKIP_ROWS),zi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Rn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const on=Yt.get(A),pn=Yt.get(Y),Mn=Yt.get(on.__renderTarget),Mi=Yt.get(pn.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ii=0;Ii<It;Ii++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,j,kt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,Tt,Ge+Ii)),F.blitFramebuffer(Jt,jt,wt,Nt,ce,Re,wt,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Yt.has(A)){const on=Yt.get(A),pn=Yt.get(Y);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,Wo),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi);for(let Mn=0;Mn<It;Mn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,on.__webglTexture,j),Rn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Ge+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,Tt),j!==0?F.blitFramebuffer(Jt,jt,wt,Nt,ce,Re,wt,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):Rn?F.copyTexSubImage3D(je,Tt,ce,Re,Ge+Mn,Jt,jt,wt,Nt):F.copyTexSubImage2D(je,Tt,ce,Re,Jt,jt,wt,Nt);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(je,Tt,ce,Re,Ge,wt,Nt,It,Se,Zt,xe.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(je,Tt,ce,Re,Ge,wt,Nt,It,Se,xe.data):F.texSubImage3D(je,Tt,ce,Re,Ge,wt,Nt,It,Se,Zt,xe):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,ce,Re,wt,Nt,Se,Zt,xe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,ce,Re,xe.width,xe.height,Se,xe.data):F.texSubImage2D(F.TEXTURE_2D,Tt,ce,Re,wt,Nt,Se,Zt,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,An),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ha),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zi),Tt===0&&Y.generateMipmaps&&F.generateMipmap(je),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,at=null,st=null,j=0){return Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,at,st,j)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){B=0,I=0,X=null,Gt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const o0={type:"change"},Td={type:"start"},W0={type:"end"},xc=new gd,l0=new _i,xA=Math.cos(70*jS.DEG2RAD),un=new $,Hn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6;class SA extends Py{constructor(t,i=null){super(t,i),this.state=Ie.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ts,this._lastTargetPosition=new $,this._quat=new Ts().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pg,this._sphericalDelta=new Pg,this._scale=1,this._panOffset=new $,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new $,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MA.bind(this),this._onPointerDown=yA.bind(this),this._onPointerUp=EA.bind(this),this._onContextMenu=DA.bind(this),this._onMouseWheel=AA.bind(this),this._onKeyDown=RA.bind(this),this._onTouchStart=CA.bind(this),this._onTouchMove=wA.bind(this),this._onMouseDown=TA.bind(this),this._onMouseMove=bA.bind(this),this._interceptControlDown=UA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o0),this.update(),this.state=Ie.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),l<-Math.PI?l+=Hn:l>Math.PI&&(l-=Hn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(xc.origin.copy(this.object.position),xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xc.direction))<xA?this.object.lookAt(this.target):(l0.setFromNormalAndCoplanarPoint(this.object.up,this.target),xc.intersectPlane(l0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(o0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Hn/60*this.autoRotateSpeed*t:Hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function yA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function MA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function EA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function TA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ie.DOLLY;break;case yr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ie.ROTATE}break;case yr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Td)}function bA(o){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function AA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(o.preventDefault(),this.dispatchEvent(Td),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(W0))}function RA(o){this.enabled!==!1&&this._handleKeyDown(o)}function CA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ie.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ie.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Td)}function wA(o){switch(this._trackPointer(o),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ie.NONE}}function DA(o){this.enabled!==!1&&o.preventDefault()}function UA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class NA extends xn{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ae(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof i.element.ownerDocument.defaultView.Element&&i.element.parentNode!==null&&i.element.remove()})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const vr=new $,c0=new Xe,u0=new Xe,f0=new $,h0=new $;class OA{constructor(t={}){const i=this;let s,l,u,h;const d={objects:new WeakMap},m=t.element!==void 0?t.element:document.createElement("div");m.style.overflow="hidden",this.domElement=m,this.getSize=function(){return{width:s,height:l}},this.render=function(E,R){E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),c0.copy(R.matrixWorldInverse),u0.multiplyMatrices(R.projectionMatrix,c0),g(E,E,R),M(E)},this.setSize=function(E,R){s=E,l=R,u=s/2,h=l/2,m.style.width=E+"px",m.style.height=R+"px"};function p(E){E.isCSS2DObject&&(E.element.style.display="none");for(let R=0,y=E.children.length;R<y;R++)p(E.children[R])}function g(E,R,y){if(E.visible===!1){p(E);return}if(E.isCSS2DObject){vr.setFromMatrixPosition(E.matrixWorld),vr.applyMatrix4(u0);const _=vr.z>=-1&&vr.z<=1&&E.layers.test(y.layers)===!0,O=E.element;O.style.display=_===!0?"":"none",_===!0&&(E.onBeforeRender(i,R,y),O.style.transform="translate("+-100*E.center.x+"%,"+-100*E.center.y+"%)translate("+(vr.x*u+u)+"px,"+(-vr.y*h+h)+"px)",O.parentNode!==m&&m.appendChild(O),E.onAfterRender(i,R,y));const N={distanceToCameraSquared:v(y,E)};d.objects.set(E,N)}for(let _=0,O=E.children.length;_<O;_++)g(E.children[_],R,y)}function v(E,R){return f0.setFromMatrixPosition(E.matrixWorld),h0.setFromMatrixPosition(R.matrixWorld),f0.distanceToSquared(h0)}function x(E){const R=[];return E.traverseVisible(function(y){y.isCSS2DObject&&R.push(y)}),R}function M(E){const R=x(E).sort(function(_,O){if(_.renderOrder!==O.renderOrder)return O.renderOrder-_.renderOrder;const N=d.objects.get(_).distanceToCameraSquared,D=d.objects.get(O).distanceToCameraSquared;return N-D}),y=R.length;for(let _=0,O=R.length;_<O;_++)R[_].element.style.zIndex=y-_}}}const d0={layers:[{color:new _e("#EA4C5F"),name:"Skills"},{color:new _e("#8E3B66"),name:"Projects"},{color:new _e("#532F4C"),name:"About"},{color:new _e("#333333"),name:"Contact"},{color:new _e("#CCCCCC"),name:"Home"}]},p0={Home:{title:"Stefan Mladenovski",subtitle:"Data Analyst at A1",description:"Drag the orb to look inside. Hover a layer to see the menu and click to navigate."},Skills:{title:"Technical Skills",description:"A deep proficiency in the essential tools and languages for modern data analysis, from data wrangling to visualization.",items:["Python (Pandas, NumPy)","SQL","Power BI","Microsoft Excel","Tableau","Bash Scripting","Data Warehousing","ETL Processes"]},Projects:{title:"Projects",description:"A selection of projects demonstrating my ability to transform raw data into actionable business insights.",items:[{name:"Sales Dashboard Automation",desc:"Developed an automated pipeline using Python and SQL to feed a real-time Power BI dashboard, reducing manual reporting time by 90%."},{name:"Customer Segmentation Analysis",desc:"Utilized clustering algorithms in Python to identify key customer segments, leading to a 15% increase in targeted marketing campaign effectiveness."},{name:"Operational Efficiency Report",desc:"Created comprehensive reports in Excel and Power BI to track KPIs, identifying bottlenecks and enabling a 20% improvement in process efficiency."}]},About:{title:"About Me",description:"I am a detail-oriented Data Analyst at A1 with a passion for uncovering the stories hidden within data. My expertise lies in transforming complex datasets into clear, actionable insights using tools like Python, SQL, and Power BI. I thrive on solving business challenges and am always eager to leverage my analytical skills to drive strategic decisions. When I'm not wrangling data, I enjoy exploring new technologies and contributing to open-source projects."},Contact:{title:"Get In Touch",description:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.",items:[{type:"Email",value:"stefan.mladenovski@example.com"},{type:"LinkedIn",value:"/in/stefan-mladenovski"},{type:"GitHub",value:"@stefan-mladenovski"}]}},Uo=(o,t,i)=>(1-i)*o+i*t,PA=({setActivePage:o})=>{const t=aa.useRef(null),i=aa.useRef(null),s=aa.useMemo(()=>new Oy,[]),l=aa.useMemo(()=>new ae,[]),u=aa.useRef(null),h=aa.useRef(null);return aa.useEffect(()=>{const d=t.current;if(!d)return;const m=new Ey,p=new ci(40,d.clientWidth/d.clientHeight,1,200);p.position.set(0,0,15);const g=new vA({antialias:!0,alpha:!0});g.setSize(d.clientWidth,d.clientHeight),g.setPixelRatio(window.devicePixelRatio),g.localClippingEnabled=!0,d.appendChild(g.domElement);const v=new OA;v.setSize(d.clientWidth,d.clientHeight),v.domElement.style.position="absolute",v.domElement.style.top="0px",v.domElement.style.pointerEvents="none",d.appendChild(v.domElement);const x=new SA(p,g.domElement);x.enableDamping=!0,x.enablePan=!1,x.enableZoom=!1,x.minDistance=8,x.maxDistance=25,m.add(new Ly(16777215,.5));const M=new Uy(16777215,1);M.position.set(5,10,7.5),m.add(M);const E=[new _i(new $(1,0,0),0),new _i(new $(0,-1,0),0),new _i(new $(0,0,-1),0)];u.current=new Ms,m.add(u.current),h.current=new Ms,m.add(h.current);const R=3,y=.5;d0.layers.forEach((B,I)=>{const X=R-I*y;if(X<=0)return;const w=new Md(X,64,64),C=new Ay({color:B.color,metalness:.1,roughness:.6,clippingPlanes:E,clipIntersection:!0,side:gi}),H=new Si(w,C);H.userData={layerIndex:I},u.current.add(H);const ot=X-y,rt=new yd(ot<0?0:ot,X,64,1),pt=new xd({visible:!1,side:gi}),ut=new Si(rt,pt);ut.userData={layerIndex:I},h.current.add(ut);const P=document.createElement("div");P.className="label",P.textContent=B.name,P.style.color="#FFFFFF",P.style.textShadow=`0 0 8px ${B.color.getStyle()}`,P.style.opacity="0",P.style.transition="opacity 0.3s ease, transform 0.3s ease",P.style.transformOrigin="center";const Z=new NA(P),W=new xn,St=X-y/2;W.position.set(0,0,St),H.add(W),W.add(Z)});const _=()=>{p.aspect=d.clientWidth/d.clientHeight,p.updateProjectionMatrix(),g.setSize(d.clientWidth,d.clientHeight),v.setSize(d.clientWidth,d.clientHeight)},O=B=>{const I=d.getBoundingClientRect();l.x=(B.clientX-I.left)/I.width*2-1,l.y=-((B.clientY-I.top)/I.height)*2+1;const X=new Ms;X.children=h.current.children,X.quaternion.copy(p.quaternion),s.setFromCamera(l,p);const w=s.intersectObjects(X.children);w.length>0?i.current=w[0].object.userData.layerIndex:i.current=null},N=()=>{if(i.current!==null){const B=d0.layers[i.current].name;o(B)}};window.addEventListener("resize",_),d.addEventListener("mousemove",O),d.addEventListener("click",N);let D;const G=()=>{D=requestAnimationFrame(G),x.update();const B=i.current;u.current&&u.current.children.length>0&&u.current.children.forEach((I,X)=>{const w=X===B,C=w?1.2:1;I.scale.x=Uo(I.scale.x,C,.1),I.scale.y=Uo(I.scale.y,C,.1),I.scale.z=Uo(I.scale.z,C,.1);const H=I.children[0];if(H&&H.children[0]){const ot=H.children[0],rt=w?1:.8,pt=ot.element.style.transform?parseFloat(ot.element.style.transform.replace("scale(","")):1;ot.element.style.opacity=Uo(parseFloat(ot.element.style.opacity),w?1:0,.2),ot.element.style.transform=`scale(${Uo(pt,rt,.2)})`}}),g.render(m,p),v.render(m,p)};return G(),()=>{cancelAnimationFrame(D),window.removeEventListener("resize",_),d&&(d.removeEventListener("mousemove",O),d.removeEventListener("click",N),g.domElement&&d.removeChild(g.domElement),v.domElement&&d.removeChild(v.domElement))}},[o,l,s]),Ye.jsx("div",{ref:t,className:"absolute top-0 left-0 w-full h-full"})};function zA(){const[o,t]=aa.useState("Home"),i=()=>{const s=p0[o]||p0.Home;return Ye.jsxs("div",{className:"w-full max-w-3xl mx-auto animate-fadeIn",children:[Ye.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-2",children:s.title}),Ye.jsx("p",{className:"text-lg md:text-xl text-gray-300 mb-6",children:s.subtitle||s.description}),o==="Projects"&&s.items.map((l,u)=>Ye.jsxs("div",{className:"mb-4 p-4 border-l-2 border-pink-500 bg-gray-800/30 rounded-r-lg",children:[Ye.jsx("h3",{className:"font-semibold text-white",children:l.name}),Ye.jsx("p",{className:"text-gray-400",children:l.desc})]},u)),o==="Skills"&&Ye.jsx("div",{className:"flex flex-wrap gap-3",children:s.items.map((l,u)=>Ye.jsx("span",{className:"bg-gray-700/50 text-gray-200 py-2 px-4 rounded-full text-sm",children:l},u))}),o==="Contact"&&s.items.map((l,u)=>Ye.jsxs("div",{className:"mb-2",children:[Ye.jsxs("span",{className:"font-semibold text-white",children:[l.type,": "]}),Ye.jsx("span",{className:"text-gray-300",children:l.value})]},u))]},o)};return Ye.jsxs("div",{className:"font-sans bg-gray-900 min-h-screen text-white flex flex-col items-center relative overflow-x-hidden",children:[Ye.jsx("style",{children:`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
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
            `}),Ye.jsx("div",{className:"relative w-full h-[50vh] flex-shrink-0 cursor-grab active:cursor-grabbing",children:Ye.jsx(PA,{setActivePage:t})}),Ye.jsx("div",{className:"relative z-10 w-full flex-grow flex items-start justify-center p-8",children:Ye.jsx("div",{className:"w-full text-center",children:i()})}),Ye.jsx("div",{className:"absolute top-8 right-8 z-20 cursor-pointer text-gray-400 hover:text-white transition-colors",onClick:()=>t("Home"),children:Ye.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Ye.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})]})}sS.createRoot(document.getElementById("root")).render(Ye.jsx(Qx.StrictMode,{children:Ye.jsx(zA,{})}));
