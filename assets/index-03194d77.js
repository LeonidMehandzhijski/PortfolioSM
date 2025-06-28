(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Gg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qh={exports:{}},Ha={},Jh={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Hg=Symbol.for("react.portal"),Wg=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Yg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Kg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),Tf=Symbol.iterator;function Jg(n){return n===null||typeof n!="object"?null:(n=Tf&&n[Tf]||n["@@iterator"],typeof n=="function"?n:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,np={};function us(n,e,t){this.props=n,this.context=e,this.refs=np,this.updater=t||ep}us.prototype.isReactComponent={};us.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};us.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ip(){}ip.prototype=us.prototype;function yc(n,e,t){this.props=n,this.context=e,this.refs=np,this.updater=t||ep}var Sc=yc.prototype=new ip;Sc.constructor=yc;tp(Sc,us.prototype);Sc.isPureReactComponent=!0;var Cf=Array.isArray,rp=Object.prototype.hasOwnProperty,Mc={current:null},sp={key:!0,ref:!0,__self:!0,__source:!0};function op(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rp.call(e,i)&&!sp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ho,type:n,key:s,ref:o,props:r,_owner:Mc.current}}function e0(n,e){return{$$typeof:ho,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function wc(n){return typeof n=="object"&&n!==null&&n.$$typeof===ho}function t0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var bf=/\/+/g;function dl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?t0(""+n.key):e.toString(36)}function sa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ho:case Hg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+dl(o,0):i,Cf(r)?(t="",n!=null&&(t=n.replace(bf,"$&/")+"/"),sa(r,e,t,"",function(u){return u})):r!=null&&(wc(r)&&(r=e0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+dl(s,a);o+=sa(s,e,t,l,r)}else if(l=Jg(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+dl(s,a++),o+=sa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(n,e,t){if(n==null)return n;var i=[],r=0;return sa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function n0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var kt={current:null},oa={transition:null},i0={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:Mc};function ap(){throw Error("act(...) is not supported in production builds of React.")}be.Children={map:wo,forEach:function(n,e,t){wo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wo(n,function(){e++}),e},toArray:function(n){return wo(n,function(e){return e})||[]},only:function(n){if(!wc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};be.Component=us;be.Fragment=Wg;be.Profiler=Xg;be.PureComponent=yc;be.StrictMode=jg;be.Suspense=Zg;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0;be.act=ap;be.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=tp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)rp.call(e,l)&&!sp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ho,type:n.type,key:r,ref:s,props:i,_owner:o}};be.createContext=function(n){return n={$$typeof:$g,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:qg,_context:n},n.Consumer=n};be.createElement=op;be.createFactory=function(n){var e=op.bind(null,n);return e.type=n,e};be.createRef=function(){return{current:null}};be.forwardRef=function(n){return{$$typeof:Yg,render:n}};be.isValidElement=wc;be.lazy=function(n){return{$$typeof:Qg,_payload:{_status:-1,_result:n},_init:n0}};be.memo=function(n,e){return{$$typeof:Kg,type:n,compare:e===void 0?null:e}};be.startTransition=function(n){var e=oa.transition;oa.transition={};try{n()}finally{oa.transition=e}};be.unstable_act=ap;be.useCallback=function(n,e){return kt.current.useCallback(n,e)};be.useContext=function(n){return kt.current.useContext(n)};be.useDebugValue=function(){};be.useDeferredValue=function(n){return kt.current.useDeferredValue(n)};be.useEffect=function(n,e){return kt.current.useEffect(n,e)};be.useId=function(){return kt.current.useId()};be.useImperativeHandle=function(n,e,t){return kt.current.useImperativeHandle(n,e,t)};be.useInsertionEffect=function(n,e){return kt.current.useInsertionEffect(n,e)};be.useLayoutEffect=function(n,e){return kt.current.useLayoutEffect(n,e)};be.useMemo=function(n,e){return kt.current.useMemo(n,e)};be.useReducer=function(n,e,t){return kt.current.useReducer(n,e,t)};be.useRef=function(n){return kt.current.useRef(n)};be.useState=function(n){return kt.current.useState(n)};be.useSyncExternalStore=function(n,e,t){return kt.current.useSyncExternalStore(n,e,t)};be.useTransition=function(){return kt.current.useTransition()};be.version="18.3.1";Jh.exports=be;var kn=Jh.exports;const r0=Gg(kn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=kn,o0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),l0=Object.prototype.hasOwnProperty,u0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function lp(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o0,type:n,key:s,ref:o,props:r,_owner:u0.current}}Ha.Fragment=a0;Ha.jsx=lp;Ha.jsxs=lp;Qh.exports=Ha;var up=Qh.exports;const Ke=up.jsx,Xn=up.jsxs;var _u={},cp={exports:{}},rn={},fp={exports:{}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,B){var O=D.length;D.push(B);e:for(;0<O;){var re=O-1>>>1,R=D[re];if(0<r(R,B))D[re]=B,D[O]=R,O=re;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var B=D[0],O=D.pop();if(O!==B){D[0]=O;e:for(var re=0,R=D.length,Z=R>>>1;re<Z;){var ee=2*(re+1)-1,z=D[ee],se=ee+1,ue=D[se];if(0>r(z,O))se<R&&0>r(ue,z)?(D[re]=ue,D[se]=O,re=se):(D[re]=z,D[ee]=O,re=ee);else if(se<R&&0>r(ue,O))D[re]=ue,D[se]=O,re=se;else break e}}return B}function r(D,B){var O=D.sortIndex-B.sortIndex;return O!==0?O:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,S=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=D)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(u)}}function x(D){if(h=!1,_(D),!S)if(t(l)!==null)S=!0,Y(w);else{var B=t(u);B!==null&&J(x,B.startTime-D)}}function w(D,B){S=!1,h&&(h=!1,m(y),y=-1),g=!0;var O=f;try{for(_(B),d=t(l);d!==null&&(!(d.expirationTime>B)||D&&!q());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var R=re(d.expirationTime<=B);B=n.unstable_now(),typeof R=="function"?d.callback=R:d===t(l)&&i(l),_(B)}else i(l);d=t(l)}if(d!==null)var Z=!0;else{var ee=t(u);ee!==null&&J(x,ee.startTime-B),Z=!1}return Z}finally{d=null,f=O,g=!1}}var T=!1,A=null,y=-1,C=5,L=-1;function q(){return!(n.unstable_now()-L<C)}function $(){if(A!==null){var D=n.unstable_now();L=D;var B=!0;try{B=A(!0,D)}finally{B?U():(T=!1,A=null)}}else T=!1}var U;if(typeof v=="function")U=function(){v($)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,j=N.port2;N.port1.onmessage=$,U=function(){j.postMessage(null)}}else U=function(){p($,0)};function Y(D){A=D,T||(T=!0,U())}function J(D,B){y=p(function(){D(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){S||g||(S=!0,Y(w))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var O=f;f=B;try{return D()}finally{f=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var O=f;f=D;try{return B()}finally{f=O}},n.unstable_scheduleCallback=function(D,B,O){var re=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?re+O:re):O=re,D){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=O+R,D={id:c++,callback:B,priorityLevel:D,startTime:O,expirationTime:R,sortIndex:-1},O>re?(D.sortIndex=O,e(u,D),t(l)===null&&D===t(u)&&(h?(m(y),y=-1):h=!0,J(x,O-re))):(D.sortIndex=R,e(l,D),S||g||(S=!0,Y(w))),D},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(D){var B=f;return function(){var O=f;f=B;try{return D.apply(this,arguments)}finally{f=O}}}})(dp);fp.exports=dp;var f0=fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=kn,nn=f0;function K(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hp=new Set,Xs={};function hr(n,e){Qr(n,e),Qr(n+"Capture",e)}function Qr(n,e){for(Xs[n]=e,n=0;n<e.length;n++)hp.add(e[n])}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},Lf={};function p0(n){return xu.call(Lf,n)?!0:xu.call(Af,n)?!1:h0.test(n)?Lf[n]=!0:(Af[n]=!0,!1)}function m0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function g0(n,e,t,i){if(e===null||typeof e>"u"||m0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xt[n]=new Ut(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xt[e]=new Ut(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xt[n]=new Ut(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xt[n]=new Ut(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xt[n]=new Ut(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xt[n]=new Ut(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xt[n]=new Ut(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xt[n]=new Ut(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xt[n]=new Ut(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Tc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ec,Tc);xt[e]=new Ut(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ec,Tc);xt[e]=new Ut(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ec,Tc);xt[e]=new Ut(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!0,!0)});function Cc(n,e,t,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g0(e,t,r,i)&&(t=null),i||r===null?p0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var fi=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),gp=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function ms(n){return n===null||typeof n!="object"?null:(n=Pf&&n[Pf]||n["@@iterator"],typeof n=="function"?n:null)}var Ye=Object.assign,hl;function Ps(n){if(hl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hl=e&&e[1]||""}return`
`+hl+n}var pl=!1;function ml(n,e){if(!n||pl)return"";pl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ps(n):""}function v0(n){switch(n.tag){case 5:return Ps(n.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return n=ml(n.type,!1),n;case 11:return n=ml(n.type.render,!1),n;case 1:return n=ml(n.type,!0),n;default:return""}}function wu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Dr:return"Fragment";case Pr:return"Portal";case yu:return"Profiler";case bc:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case mp:return(n.displayName||"Context")+".Consumer";case pp:return(n._context.displayName||"Context")+".Provider";case Ac:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lc:return e=n.displayName||null,e!==null?e:wu(n.type)||"Memo";case vi:e=n._payload,n=n._init;try{return wu(n(e))}catch{}}return null}function _0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x0(n){var e=vp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function To(n){n._valueTracker||(n._valueTracker=x0(n))}function _p(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function _a(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Eu(n,e){var t=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Df(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ii(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xp(n,e){e=e.checked,e!=null&&Cc(n,"checked",e,!1)}function Tu(n,e){xp(n,e);var t=Ii(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Cu(n,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Rf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Cu(n,e,t){(e!=="number"||_a(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ds=Array.isArray;function Hr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ii(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function bu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function If(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(K(92));if(Ds(t)){if(1<t.length)throw Error(K(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ii(t)}}function yp(n,e){var t=Ii(e.value),i=Ii(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Nf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Sp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Sp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Co,Mp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function qs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(n){y0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ks[e]=ks[n]})});function wp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ks.hasOwnProperty(n)&&ks[n]?(""+e).trim():e+"px"}function Ep(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=wp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var S0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lu(n,e){if(e){if(S0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Pu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function Pc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ru=null,Wr=null,jr=null;function zf(n){if(n=go(n)){if(typeof Ru!="function")throw Error(K(280));var e=n.stateNode;e&&(e=$a(e),Ru(n.stateNode,n.type,e))}}function Tp(n){Wr?jr?jr.push(n):jr=[n]:Wr=n}function Cp(){if(Wr){var n=Wr,e=jr;if(jr=Wr=null,zf(n),e)for(n=0;n<e.length;n++)zf(e[n])}}function bp(n,e){return n(e)}function Ap(){}var gl=!1;function Lp(n,e,t){if(gl)return n(e,t);gl=!0;try{return bp(n,e,t)}finally{gl=!1,(Wr!==null||jr!==null)&&(Ap(),Cp())}}function $s(n,e){var t=n.stateNode;if(t===null)return null;var i=$a(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(K(231,e,typeof t));return t}var Iu=!1;if(ai)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Iu=!1}function M0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Us=!1,xa=null,ya=!1,Nu=null,w0={onError:function(n){Us=!0,xa=n}};function E0(n,e,t,i,r,s,o,a,l){Us=!1,xa=null,M0.apply(w0,arguments)}function T0(n,e,t,i,r,s,o,a,l){if(E0.apply(this,arguments),Us){if(Us){var u=xa;Us=!1,xa=null}else throw Error(K(198));ya||(ya=!0,Nu=u)}}function pr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Pp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ff(n){if(pr(n)!==n)throw Error(K(188))}function C0(n){var e=n.alternate;if(!e){if(e=pr(n),e===null)throw Error(K(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Ff(r),n;if(s===i)return Ff(r),e;s=s.sibling}throw Error(K(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(K(189))}}if(t.alternate!==i)throw Error(K(190))}if(t.tag!==3)throw Error(K(188));return t.stateNode.current===t?n:e}function Dp(n){return n=C0(n),n!==null?Rp(n):null}function Rp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Rp(n);if(e!==null)return e;n=n.sibling}return null}var Ip=nn.unstable_scheduleCallback,kf=nn.unstable_cancelCallback,b0=nn.unstable_shouldYield,A0=nn.unstable_requestPaint,et=nn.unstable_now,L0=nn.unstable_getCurrentPriorityLevel,Dc=nn.unstable_ImmediatePriority,Np=nn.unstable_UserBlockingPriority,Sa=nn.unstable_NormalPriority,P0=nn.unstable_LowPriority,zp=nn.unstable_IdlePriority,Wa=null,Vn=null;function D0(n){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Wa,n,void 0,(n.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:N0,R0=Math.log,I0=Math.LN2;function N0(n){return n>>>=0,n===0?32:31-(R0(n)/I0|0)|0}var bo=64,Ao=4194304;function Rs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ma(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rs(a):(s&=o,s!==0&&(i=Rs(s)))}else o=t&~r,o!==0?i=Rs(o):s!==0&&(i=Rs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-bn(e),r=1<<t,i|=n[t],e&=~r;return i}function z0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=z0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function zu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fp(){var n=bo;return bo<<=1,!(bo&4194240)&&(bo=64),n}function vl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function po(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-bn(e),n[e]=t}function k0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-bn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Rc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-bn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ke=0;function kp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Up,Ic,Op,Bp,Vp,Fu=!1,Lo=[],Ei=null,Ti=null,Ci=null,Ys=new Map,Zs=new Map,xi=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(n,e){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function vs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=go(e),e!==null&&Ic(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function O0(n,e,t,i,r){switch(e){case"focusin":return Ei=vs(Ei,n,e,t,i,r),!0;case"dragenter":return Ti=vs(Ti,n,e,t,i,r),!0;case"mouseover":return Ci=vs(Ci,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ys.set(s,vs(Ys.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zs.set(s,vs(Zs.get(s)||null,n,e,t,i,r)),!0}return!1}function Gp(n){var e=Zi(n.target);if(e!==null){var t=pr(e);if(t!==null){if(e=t.tag,e===13){if(e=Pp(t),e!==null){n.blockedOn=e,Vp(n.priority,function(){Op(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ku(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Du=i,t.target.dispatchEvent(i),Du=null}else return e=go(t),e!==null&&Ic(e),n.blockedOn=t,!1;e.shift()}return!0}function Of(n,e,t){aa(n)&&t.delete(e)}function B0(){Fu=!1,Ei!==null&&aa(Ei)&&(Ei=null),Ti!==null&&aa(Ti)&&(Ti=null),Ci!==null&&aa(Ci)&&(Ci=null),Ys.forEach(Of),Zs.forEach(Of)}function _s(n,e){n.blockedOn===e&&(n.blockedOn=null,Fu||(Fu=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,B0)))}function Ks(n){function e(r){return _s(r,n)}if(0<Lo.length){_s(Lo[0],n);for(var t=1;t<Lo.length;t++){var i=Lo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ei!==null&&_s(Ei,n),Ti!==null&&_s(Ti,n),Ci!==null&&_s(Ci,n),Ys.forEach(e),Zs.forEach(e),t=0;t<xi.length;t++)i=xi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xi.length&&(t=xi[0],t.blockedOn===null);)Gp(t),t.blockedOn===null&&xi.shift()}var Xr=fi.ReactCurrentBatchConfig,wa=!0;function V0(n,e,t,i){var r=ke,s=Xr.transition;Xr.transition=null;try{ke=1,Nc(n,e,t,i)}finally{ke=r,Xr.transition=s}}function G0(n,e,t,i){var r=ke,s=Xr.transition;Xr.transition=null;try{ke=4,Nc(n,e,t,i)}finally{ke=r,Xr.transition=s}}function Nc(n,e,t,i){if(wa){var r=ku(n,e,t,i);if(r===null)bl(n,e,i,Ea,t),Uf(n,i);else if(O0(r,n,e,t,i))i.stopPropagation();else if(Uf(n,i),e&4&&-1<U0.indexOf(n)){for(;r!==null;){var s=go(r);if(s!==null&&Up(s),s=ku(n,e,t,i),s===null&&bl(n,e,i,Ea,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else bl(n,e,i,null,t)}}var Ea=null;function ku(n,e,t,i){if(Ea=null,n=Pc(i),n=Zi(n),n!==null)if(e=pr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Pp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ea=n,null}function Hp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case Dc:return 1;case Np:return 4;case Sa:case P0:return 16;case zp:return 536870912;default:return 16}default:return 16}}var Si=null,zc=null,la=null;function Wp(){if(la)return la;var n,e=zc,t=e.length,i,r="value"in Si?Si.value:Si.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return la=r.slice(n,1<i?1-i:void 0)}function ua(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function Bf(){return!1}function sn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:Bf,this.isPropagationStopped=Bf,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=sn(cs),mo=Ye({},cs,{view:0,detail:0}),H0=sn(mo),_l,xl,xs,ja=Ye({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xs&&(xs&&n.type==="mousemove"?(_l=n.screenX-xs.screenX,xl=n.screenY-xs.screenY):xl=_l=0,xs=n),_l)},movementY:function(n){return"movementY"in n?n.movementY:xl}}),Vf=sn(ja),W0=Ye({},ja,{dataTransfer:0}),j0=sn(W0),X0=Ye({},mo,{relatedTarget:0}),yl=sn(X0),q0=Ye({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=sn(q0),Y0=Ye({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=sn(Y0),K0=Ye({},cs,{data:0}),Gf=sn(K0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ev[n])?!!e[n]:!1}function kc(){return tv}var nv=Ye({},mo,{key:function(n){if(n.key){var e=Q0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iv=sn(nv),rv=Ye({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=sn(rv),sv=Ye({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),ov=sn(sv),av=Ye({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=sn(av),uv=Ye({},ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=sn(uv),fv=[9,13,27,32],Uc=ai&&"CompositionEvent"in window,Os=null;ai&&"documentMode"in document&&(Os=document.documentMode);var dv=ai&&"TextEvent"in window&&!Os,jp=ai&&(!Uc||Os&&8<Os&&11>=Os),Wf=String.fromCharCode(32),jf=!1;function Xp(n,e){switch(n){case"keyup":return fv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rr=!1;function hv(n,e){switch(n){case"compositionend":return qp(e);case"keypress":return e.which!==32?null:(jf=!0,Wf);case"textInput":return n=e.data,n===Wf&&jf?null:n;default:return null}}function pv(n,e){if(Rr)return n==="compositionend"||!Uc&&Xp(n,e)?(n=Wp(),la=zc=Si=null,Rr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jp&&e.locale!=="ko"?null:e.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!mv[n.type]:e==="textarea"}function $p(n,e,t,i){Tp(i),e=Ta(e,"onChange"),0<e.length&&(t=new Fc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Bs=null,Qs=null;function gv(n){sm(n,0)}function Xa(n){var e=zr(n);if(_p(e))return n}function vv(n,e){if(n==="change")return e}var Yp=!1;if(ai){var Sl;if(ai){var Ml="oninput"in document;if(!Ml){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Ml=typeof qf.oninput=="function"}Sl=Ml}else Sl=!1;Yp=Sl&&(!document.documentMode||9<document.documentMode)}function $f(){Bs&&(Bs.detachEvent("onpropertychange",Zp),Qs=Bs=null)}function Zp(n){if(n.propertyName==="value"&&Xa(Qs)){var e=[];$p(e,Qs,n,Pc(n)),Lp(gv,e)}}function _v(n,e,t){n==="focusin"?($f(),Bs=e,Qs=t,Bs.attachEvent("onpropertychange",Zp)):n==="focusout"&&$f()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xa(Qs)}function yv(n,e){if(n==="click")return Xa(e)}function Sv(n,e){if(n==="input"||n==="change")return Xa(e)}function Mv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ln=typeof Object.is=="function"?Object.is:Mv;function Js(n,e){if(Ln(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!xu.call(e,r)||!Ln(n[r],e[r]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zf(n,e){var t=Yf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yf(t)}}function Kp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Kp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Qp(){for(var n=window,e=_a();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=_a(n.document)}return e}function Oc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function wv(n){var e=Qp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Kp(t.ownerDocument.documentElement,t)){if(i!==null&&Oc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Zf(t,s);var o=Zf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ev=ai&&"documentMode"in document&&11>=document.documentMode,Ir=null,Uu=null,Vs=null,Ou=!1;function Kf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ou||Ir==null||Ir!==_a(i)||(i=Ir,"selectionStart"in i&&Oc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&Js(Vs,i)||(Vs=i,i=Ta(Uu,"onSelect"),0<i.length&&(e=new Fc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ir)))}function Do(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Nr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},wl={},Jp={};ai&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function qa(n){if(wl[n])return wl[n];if(!Nr[n])return n;var e=Nr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Jp)return wl[n]=e[t];return n}var em=qa("animationend"),tm=qa("animationiteration"),nm=qa("animationstart"),im=qa("transitionend"),rm=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(n,e){rm.set(n,e),hr(e,[n])}for(var El=0;El<Qf.length;El++){var Tl=Qf[El],Tv=Tl.toLowerCase(),Cv=Tl[0].toUpperCase()+Tl.slice(1);Fi(Tv,"on"+Cv)}Fi(em,"onAnimationEnd");Fi(tm,"onAnimationIteration");Fi(nm,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(im,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function Jf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,T0(i,e,void 0,n),n.currentTarget=null}function sm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,u),s=l}}}if(ya)throw n=Nu,ya=!1,Nu=null,n}function Ve(n,e){var t=e[Wu];t===void 0&&(t=e[Wu]=new Set);var i=n+"__bubble";t.has(i)||(om(e,n,2,!1),t.add(i))}function Cl(n,e,t){var i=0;e&&(i|=4),om(t,n,i,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function eo(n){if(!n[Ro]){n[Ro]=!0,hp.forEach(function(t){t!=="selectionchange"&&(bv.has(t)||Cl(t,!1,n),Cl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,Cl("selectionchange",!1,e))}}function om(n,e,t,i){switch(Hp(e)){case 1:var r=V0;break;case 4:r=G0;break;default:r=Nc}t=r.bind(null,e,t,n),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function bl(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lp(function(){var u=s,c=Pc(t),d=[];e:{var f=rm.get(n);if(f!==void 0){var g=Fc,S=n;switch(n){case"keypress":if(ua(t)===0)break e;case"keydown":case"keyup":g=iv;break;case"focusin":S="focus",g=yl;break;case"focusout":S="blur",g=yl;break;case"beforeblur":case"afterblur":g=yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ov;break;case em:case tm:case nm:g=$0;break;case im:g=lv;break;case"scroll":g=H0;break;case"wheel":g=cv;break;case"copy":case"cut":case"paste":g=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hf}var h=(e&4)!==0,p=!h&&n==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=$s(v,m),x!=null&&h.push(to(v,x,_)))),p)break;v=v.return}0<h.length&&(f=new g(f,S,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",f&&t!==Du&&(S=t.relatedTarget||t.fromElement)&&(Zi(S)||S[li]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(S=t.relatedTarget||t.toElement,g=u,S=S?Zi(S):null,S!==null&&(p=pr(S),S!==p||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(h=Vf,x="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(h=Hf,x="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:zr(g),_=S==null?f:zr(S),f=new h(x,v+"leave",g,t,c),f.target=p,f.relatedTarget=_,x=null,Zi(c)===u&&(h=new h(m,v+"enter",S,t,c),h.target=_,h.relatedTarget=p,x=h),p=x,g&&S)t:{for(h=g,m=S,v=0,_=h;_;_=mr(_))v++;for(_=0,x=m;x;x=mr(x))_++;for(;0<v-_;)h=mr(h),v--;for(;0<_-v;)m=mr(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=mr(h),m=mr(m)}h=null}else h=null;g!==null&&ed(d,f,g,h,!1),S!==null&&p!==null&&ed(d,p,S,h,!0)}}e:{if(f=u?zr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var w=vv;else if(Xf(f))if(Yp)w=Sv;else{w=xv;var T=_v}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=yv);if(w&&(w=w(n,u))){$p(d,w,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Cu(f,"number",f.value)}switch(T=u?zr(u):window,n){case"focusin":(Xf(T)||T.contentEditable==="true")&&(Ir=T,Uu=u,Vs=null);break;case"focusout":Vs=Uu=Ir=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Kf(d,t,c);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":Kf(d,t,c)}var A;if(Uc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Rr?Xp(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(jp&&t.locale!=="ko"&&(Rr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Rr&&(A=Wp()):(Si=c,zc="value"in Si?Si.value:Si.textContent,Rr=!0)),T=Ta(u,y),0<T.length&&(y=new Gf(y,n,null,t,c),d.push({event:y,listeners:T}),A?y.data=A:(A=qp(t),A!==null&&(y.data=A)))),(A=dv?hv(n,t):pv(n,t))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(c=new Gf("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}sm(d,e)})}function to(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ta(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$s(n,t),s!=null&&i.unshift(to(n,s,r)),s=$s(n,e),s!=null&&i.push(to(n,s,r))),n=n.return}return i}function mr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ed(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=$s(t,s),l!=null&&o.unshift(to(t,l,a))):r||(l=$s(t,s),l!=null&&o.push(to(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Av=/\r\n?/g,Lv=/\u0000|\uFFFD/g;function td(n){return(typeof n=="string"?n:""+n).replace(Av,`
`).replace(Lv,"")}function Io(n,e,t){if(e=td(e),td(n)!==e&&t)throw Error(K(425))}function Ca(){}var Bu=null,Vu=null;function Gu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(n){return nd.resolve(null).then(n).catch(Rv)}:Hu;function Rv(n){setTimeout(function(){throw n})}function Al(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ks(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ks(e)}function bi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function id(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Bn="__reactFiber$"+fs,no="__reactProps$"+fs,li="__reactContainer$"+fs,Wu="__reactEvents$"+fs,Iv="__reactListeners$"+fs,Nv="__reactHandles$"+fs;function Zi(n){var e=n[Bn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[li]||t[Bn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=id(n);n!==null;){if(t=n[Bn])return t;n=id(n)}return e}n=t,t=n.parentNode}return null}function go(n){return n=n[Bn]||n[li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(K(33))}function $a(n){return n[no]||null}var ju=[],Fr=-1;function ki(n){return{current:n}}function He(n){0>Fr||(n.current=ju[Fr],ju[Fr]=null,Fr--)}function Oe(n,e){Fr++,ju[Fr]=n.current,n.current=e}var Ni={},Ct=ki(Ni),Ht=ki(!1),rr=Ni;function Jr(n,e){var t=n.type.contextTypes;if(!t)return Ni;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Wt(n){return n=n.childContextTypes,n!=null}function ba(){He(Ht),He(Ct)}function rd(n,e,t){if(Ct.current!==Ni)throw Error(K(168));Oe(Ct,e),Oe(Ht,t)}function am(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(K(108,_0(n)||"Unknown",r));return Ye({},t,i)}function Aa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ni,rr=Ct.current,Oe(Ct,n),Oe(Ht,Ht.current),!0}function sd(n,e,t){var i=n.stateNode;if(!i)throw Error(K(169));t?(n=am(n,e,rr),i.__reactInternalMemoizedMergedChildContext=n,He(Ht),He(Ct),Oe(Ct,n)):He(Ht),Oe(Ht,t)}var Jn=null,Ya=!1,Ll=!1;function lm(n){Jn===null?Jn=[n]:Jn.push(n)}function zv(n){Ya=!0,lm(n)}function Ui(){if(!Ll&&Jn!==null){Ll=!0;var n=0,e=ke;try{var t=Jn;for(ke=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Jn=null,Ya=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(n+1)),Ip(Dc,Ui),r}finally{ke=e,Ll=!1}}return null}var kr=[],Ur=0,La=null,Pa=0,ln=[],un=0,sr=null,ti=1,ni="";function Xi(n,e){kr[Ur++]=Pa,kr[Ur++]=La,La=n,Pa=e}function um(n,e,t){ln[un++]=ti,ln[un++]=ni,ln[un++]=sr,sr=n;var i=ti;n=ni;var r=32-bn(i)-1;i&=~(1<<r),t+=1;var s=32-bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-bn(e)+r|t<<r|i,ni=s+n}else ti=1<<s|t<<r|i,ni=n}function Bc(n){n.return!==null&&(Xi(n,1),um(n,1,0))}function Vc(n){for(;n===La;)La=kr[--Ur],kr[Ur]=null,Pa=kr[--Ur],kr[Ur]=null;for(;n===sr;)sr=ln[--un],ln[un]=null,ni=ln[--un],ln[un]=null,ti=ln[--un],ln[un]=null}var Jt=null,Qt=null,We=!1,En=null;function cm(n,e){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function od(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Jt=n,Qt=bi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Jt=n,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=sr!==null?{id:ti,overflow:ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Jt=n,Qt=null,!0):!1;default:return!1}}function Xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qu(n){if(We){var e=Qt;if(e){var t=e;if(!od(n,e)){if(Xu(n))throw Error(K(418));e=bi(t.nextSibling);var i=Jt;e&&od(n,e)?cm(i,t):(n.flags=n.flags&-4097|2,We=!1,Jt=n)}}else{if(Xu(n))throw Error(K(418));n.flags=n.flags&-4097|2,We=!1,Jt=n}}}function ad(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jt=n}function No(n){if(n!==Jt)return!1;if(!We)return ad(n),We=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Gu(n.type,n.memoizedProps)),e&&(e=Qt)){if(Xu(n))throw fm(),Error(K(418));for(;e;)cm(n,e),e=bi(e.nextSibling)}if(ad(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(K(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Qt=bi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Qt=null}}else Qt=Jt?bi(n.stateNode.nextSibling):null;return!0}function fm(){for(var n=Qt;n;)n=bi(n.nextSibling)}function es(){Qt=Jt=null,We=!1}function Gc(n){En===null?En=[n]:En.push(n)}var Fv=fi.ReactCurrentBatchConfig;function ys(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(K(309));var i=t.stateNode}if(!i)throw Error(K(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(K(284));if(!t._owner)throw Error(K(290,n))}return n}function zo(n,e){throw n=Object.prototype.toString.call(e),Error(K(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ld(n){var e=n._init;return e(n._payload)}function dm(n){function e(m,v){if(n){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Di(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,n?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,x){return v===null||v.tag!==6?(v=Fl(_,m.mode,x),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,x){var w=_.type;return w===Dr?c(m,v,_.props.children,x,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vi&&ld(w)===v.type)?(x=r(v,_.props),x.ref=ys(m,v,_),x.return=m,x):(x=ga(_.type,_.key,_.props,null,m.mode,x),x.ref=ys(m,v,_),x.return=m,x)}function u(m,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=kl(_,m.mode,x),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,x,w){return v===null||v.tag!==7?(v=nr(_,m.mode,x,w),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Fl(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return _=ga(v.type,v.key,v.props,null,m.mode,_),_.ref=ys(m,null,v),_.return=m,_;case Pr:return v=kl(v,m.mode,_),v.return=m,v;case vi:var x=v._init;return d(m,x(v._payload),_)}if(Ds(v)||ms(v))return v=nr(v,m.mode,_,null),v.return=m,v;zo(m,v)}return null}function f(m,v,_,x){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(m,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Eo:return _.key===w?l(m,v,_,x):null;case Pr:return _.key===w?u(m,v,_,x):null;case vi:return w=_._init,f(m,v,w(_._payload),x)}if(Ds(_)||ms(_))return w!==null?null:c(m,v,_,x,null);zo(m,_)}return null}function g(m,v,_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(_)||null,a(v,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eo:return m=m.get(x.key===null?_:x.key)||null,l(v,m,x,w);case Pr:return m=m.get(x.key===null?_:x.key)||null,u(v,m,x,w);case vi:var T=x._init;return g(m,v,_,T(x._payload),w)}if(Ds(x)||ms(x))return m=m.get(_)||null,c(v,m,x,w,null);zo(v,x)}return null}function S(m,v,_,x){for(var w=null,T=null,A=v,y=v=0,C=null;A!==null&&y<_.length;y++){A.index>y?(C=A,A=null):C=A.sibling;var L=f(m,A,_[y],x);if(L===null){A===null&&(A=C);break}n&&A&&L.alternate===null&&e(m,A),v=s(L,v,y),T===null?w=L:T.sibling=L,T=L,A=C}if(y===_.length)return t(m,A),We&&Xi(m,y),w;if(A===null){for(;y<_.length;y++)A=d(m,_[y],x),A!==null&&(v=s(A,v,y),T===null?w=A:T.sibling=A,T=A);return We&&Xi(m,y),w}for(A=i(m,A);y<_.length;y++)C=g(A,m,y,_[y],x),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?y:C.key),v=s(C,v,y),T===null?w=C:T.sibling=C,T=C);return n&&A.forEach(function(q){return e(m,q)}),We&&Xi(m,y),w}function h(m,v,_,x){var w=ms(_);if(typeof w!="function")throw Error(K(150));if(_=w.call(_),_==null)throw Error(K(151));for(var T=w=null,A=v,y=v=0,C=null,L=_.next();A!==null&&!L.done;y++,L=_.next()){A.index>y?(C=A,A=null):C=A.sibling;var q=f(m,A,L.value,x);if(q===null){A===null&&(A=C);break}n&&A&&q.alternate===null&&e(m,A),v=s(q,v,y),T===null?w=q:T.sibling=q,T=q,A=C}if(L.done)return t(m,A),We&&Xi(m,y),w;if(A===null){for(;!L.done;y++,L=_.next())L=d(m,L.value,x),L!==null&&(v=s(L,v,y),T===null?w=L:T.sibling=L,T=L);return We&&Xi(m,y),w}for(A=i(m,A);!L.done;y++,L=_.next())L=g(A,m,y,L.value,x),L!==null&&(n&&L.alternate!==null&&A.delete(L.key===null?y:L.key),v=s(L,v,y),T===null?w=L:T.sibling=L,T=L);return n&&A.forEach(function($){return e(m,$)}),We&&Xi(m,y),w}function p(m,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Dr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Eo:e:{for(var w=_.key,T=v;T!==null;){if(T.key===w){if(w=_.type,w===Dr){if(T.tag===7){t(m,T.sibling),v=r(T,_.props.children),v.return=m,m=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vi&&ld(w)===T.type){t(m,T.sibling),v=r(T,_.props),v.ref=ys(m,T,_),v.return=m,m=v;break e}t(m,T);break}else e(m,T);T=T.sibling}_.type===Dr?(v=nr(_.props.children,m.mode,x,_.key),v.return=m,m=v):(x=ga(_.type,_.key,_.props,null,m.mode,x),x.ref=ys(m,v,_),x.return=m,m=x)}return o(m);case Pr:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=kl(_,m.mode,x),v.return=m,m=v}return o(m);case vi:return T=_._init,p(m,v,T(_._payload),x)}if(Ds(_))return S(m,v,_,x);if(ms(_))return h(m,v,_,x);zo(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,_),v.return=m,m=v):(t(m,v),v=Fl(_,m.mode,x),v.return=m,m=v),o(m)):t(m,v)}return p}var ts=dm(!0),hm=dm(!1),Da=ki(null),Ra=null,Or=null,Hc=null;function Wc(){Hc=Or=Ra=null}function jc(n){var e=Da.current;He(Da),n._currentValue=e}function $u(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function qr(n,e){Ra=n,Hc=Or=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Gt=!0),n.firstContext=null)}function pn(n){var e=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:e,next:null},Or===null){if(Ra===null)throw Error(K(308));Or=n,Ra.dependencies={lanes:0,firstContext:n}}else Or=Or.next=n;return e}var Ki=null;function Xc(n){Ki===null?Ki=[n]:Ki.push(n)}function pm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Xc(e)):(t.next=r.next,r.next=t),e.interleaved=t,ui(n,i)}function ui(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _i=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function si(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Re&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(n,t)}return r=i.interleaved,r===null?(e.next=e,Xc(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(n,t)}function ca(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rc(n,t)}}function ud(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ia(n,e,t,i){var r=n.updateQueue;_i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=n,h=a;switch(f=e,g=t,h.tag){case 1:if(S=h.payload,typeof S=="function"){d=S.call(g,d,f);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=h.payload,f=typeof S=="function"?S.call(g,d,f):S,f==null)break e;d=Ye({},d,f);break e;case 2:_i=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ar|=o,n.lanes=o,n.memoizedState=d}}function cd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(K(191,r));r.call(i)}}}var vo={},Gn=ki(vo),io=ki(vo),ro=ki(vo);function Qi(n){if(n===vo)throw Error(K(174));return n}function $c(n,e){switch(Oe(ro,e),Oe(io,n),Oe(Gn,vo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Au(e,n)}He(Gn),Oe(Gn,e)}function ns(){He(Gn),He(io),He(ro)}function gm(n){Qi(ro.current);var e=Qi(Gn.current),t=Au(e,n.type);e!==t&&(Oe(io,n),Oe(Gn,t))}function Yc(n){io.current===n&&(He(Gn),He(io))}var qe=ki(0);function Na(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pl=[];function Zc(){for(var n=0;n<Pl.length;n++)Pl[n]._workInProgressVersionPrimary=null;Pl.length=0}var fa=fi.ReactCurrentDispatcher,Dl=fi.ReactCurrentBatchConfig,or=0,$e=null,st=null,pt=null,za=!1,Gs=!1,so=0,kv=0;function yt(){throw Error(K(321))}function Kc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ln(n[t],e[t]))return!1;return!0}function Qc(n,e,t,i,r,s){if(or=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fa.current=n===null||n.memoizedState===null?Vv:Gv,n=t(i,r),Gs){s=0;do{if(Gs=!1,so=0,25<=s)throw Error(K(301));s+=1,pt=st=null,e.updateQueue=null,fa.current=Hv,n=t(i,r)}while(Gs)}if(fa.current=Fa,e=st!==null&&st.next!==null,or=0,pt=st=$e=null,za=!1,e)throw Error(K(300));return n}function Jc(){var n=so!==0;return so=0,n}function zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?$e.memoizedState=pt=n:pt=pt.next=n,pt}function mn(){if(st===null){var n=$e.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var e=pt===null?$e.memoizedState:pt.next;if(e!==null)pt=e,st=n;else{if(n===null)throw Error(K(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},pt===null?$e.memoizedState=pt=n:pt=pt.next=n}return pt}function oo(n,e){return typeof e=="function"?e(n):e}function Rl(n){var e=mn(),t=e.queue;if(t===null)throw Error(K(311));t.lastRenderedReducer=n;var i=st,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,$e.lanes|=c,ar|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ln(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,$e.lanes|=s,ar|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Il(n){var e=mn(),t=e.queue;if(t===null)throw Error(K(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ln(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function vm(){}function _m(n,e){var t=$e,i=mn(),r=e(),s=!Ln(i.memoizedState,r);if(s&&(i.memoizedState=r,Gt=!0),i=i.queue,ef(Sm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(t.flags|=2048,ao(9,ym.bind(null,t,i,r,e),void 0,null),gt===null)throw Error(K(349));or&30||xm(t,e,r)}return r}function xm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ym(n,e,t,i){e.value=t,e.getSnapshot=i,Mm(e)&&wm(n)}function Sm(n,e,t){return t(function(){Mm(e)&&wm(n)})}function Mm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ln(n,t)}catch{return!0}}function wm(n){var e=ui(n,1);e!==null&&An(e,n,1,-1)}function fd(n){var e=zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:n},e.queue=n,n=n.dispatch=Bv.bind(null,$e,n),[e.memoizedState,n]}function ao(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Em(){return mn().memoizedState}function da(n,e,t,i){var r=zn();$e.flags|=n,r.memoizedState=ao(1|e,t,void 0,i===void 0?null:i)}function Za(n,e,t,i){var r=mn();i=i===void 0?null:i;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,i!==null&&Kc(i,o.deps)){r.memoizedState=ao(e,t,s,i);return}}$e.flags|=n,r.memoizedState=ao(1|e,t,s,i)}function dd(n,e){return da(8390656,8,n,e)}function ef(n,e){return Za(2048,8,n,e)}function Tm(n,e){return Za(4,2,n,e)}function Cm(n,e){return Za(4,4,n,e)}function bm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Am(n,e,t){return t=t!=null?t.concat([n]):null,Za(4,4,bm.bind(null,e,n),t)}function tf(){}function Lm(n,e){var t=mn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kc(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Pm(n,e){var t=mn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kc(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Dm(n,e,t){return or&21?(Ln(t,e)||(t=Fp(),$e.lanes|=t,ar|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=t)}function Uv(n,e){var t=ke;ke=t!==0&&4>t?t:4,n(!0);var i=Dl.transition;Dl.transition={};try{n(!1),e()}finally{ke=t,Dl.transition=i}}function Rm(){return mn().memoizedState}function Ov(n,e,t){var i=Pi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Im(n))Nm(e,t);else if(t=pm(n,e,t,i),t!==null){var r=Ft();An(t,n,i,r),zm(t,e,i)}}function Bv(n,e,t){var i=Pi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Im(n))Nm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ln(a,o)){var l=e.interleaved;l===null?(r.next=r,Xc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=pm(n,e,r,i),t!==null&&(r=Ft(),An(t,n,i,r),zm(t,e,i))}}function Im(n){var e=n.alternate;return n===$e||e!==null&&e===$e}function Nm(n,e){Gs=za=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function zm(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rc(n,t)}}var Fa={readContext:pn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},Vv={readContext:pn,useCallback:function(n,e){return zn().memoizedState=[n,e===void 0?null:e],n},useContext:pn,useEffect:dd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,da(4194308,4,bm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return da(4194308,4,n,e)},useInsertionEffect:function(n,e){return da(4,2,n,e)},useMemo:function(n,e){var t=zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ov.bind(null,$e,n),[i.memoizedState,n]},useRef:function(n){var e=zn();return n={current:n},e.memoizedState=n},useState:fd,useDebugValue:tf,useDeferredValue:function(n){return zn().memoizedState=n},useTransition:function(){var n=fd(!1),e=n[0];return n=Uv.bind(null,n[1]),zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=$e,r=zn();if(We){if(t===void 0)throw Error(K(407));t=t()}else{if(t=e(),gt===null)throw Error(K(349));or&30||xm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,dd(Sm.bind(null,i,s,n),[n]),i.flags|=2048,ao(9,ym.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=zn(),e=gt.identifierPrefix;if(We){var t=ni,i=ti;t=(i&~(1<<32-bn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=so++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=kv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Gv={readContext:pn,useCallback:Lm,useContext:pn,useEffect:ef,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Cm,useMemo:Pm,useReducer:Rl,useRef:Em,useState:function(){return Rl(oo)},useDebugValue:tf,useDeferredValue:function(n){var e=mn();return Dm(e,st.memoizedState,n)},useTransition:function(){var n=Rl(oo)[0],e=mn().memoizedState;return[n,e]},useMutableSource:vm,useSyncExternalStore:_m,useId:Rm,unstable_isNewReconciler:!1},Hv={readContext:pn,useCallback:Lm,useContext:pn,useEffect:ef,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Cm,useMemo:Pm,useReducer:Il,useRef:Em,useState:function(){return Il(oo)},useDebugValue:tf,useDeferredValue:function(n){var e=mn();return st===null?e.memoizedState=n:Dm(e,st.memoizedState,n)},useTransition:function(){var n=Il(oo)[0],e=mn().memoizedState;return[n,e]},useMutableSource:vm,useSyncExternalStore:_m,useId:Rm,unstable_isNewReconciler:!1};function Mn(n,e){if(n&&n.defaultProps){e=Ye({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Yu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ye({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ka={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ft(),r=Pi(n),s=si(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(An(e,n,r,i),ca(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ft(),r=Pi(n),s=si(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(An(e,n,r,i),ca(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ft(),i=Pi(n),r=si(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(n,r,i),e!==null&&(An(e,n,i,t),ca(e,n,i))}};function hd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Js(t,i)||!Js(r,s):!0}function Fm(n,e,t){var i=!1,r=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(r=Wt(e)?rr:Ct.current,i=e.contextTypes,s=(i=i!=null)?Jr(n,r):Ni),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ka,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ka.enqueueReplaceState(e,e.state,null)}function Zu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},qc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pn(s):(s=Wt(e)?rr:Ct.current,r.context=Jr(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ka.enqueueReplaceState(r,r.state,null),Ia(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function is(n,e){try{var t="",i=e;do t+=v0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Nl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ku(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function km(n,e,t){t=si(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ua||(Ua=!0,ac=i),Ku(n,e)},t}function Um(n,e,t){t=si(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ku(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ku(n,e),typeof i!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function md(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Wv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=r_.bind(null,n,e,t),e.then(n,n))}function gd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function vd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=si(-1,1),e.tag=2,Ai(t,e,1))),t.lanes|=1),n)}var jv=fi.ReactCurrentOwner,Gt=!1;function It(n,e,t,i){e.child=n===null?hm(e,null,t,i):ts(e,n.child,t,i)}function _d(n,e,t,i,r){t=t.render;var s=e.ref;return qr(e,r),i=Qc(n,e,t,i,s,r),t=Jc(),n!==null&&!Gt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ci(n,e,r)):(We&&t&&Bc(e),e.flags|=1,It(n,e,i,r),e.child)}function xd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Om(n,e,s,i,r)):(n=ga(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Js,t(o,i)&&n.ref===e.ref)return ci(n,e,r)}return e.flags|=1,n=Di(s,i),n.ref=e.ref,n.return=e,e.child=n}function Om(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Js(s,i)&&n.ref===e.ref)if(Gt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Gt=!0);else return e.lanes=n.lanes,ci(n,e,r)}return Qu(n,e,t,i,r)}function Bm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Vr,Kt),Kt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Oe(Vr,Kt),Kt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Oe(Vr,Kt),Kt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Oe(Vr,Kt),Kt|=i;return It(n,e,r,t),e.child}function Vm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Qu(n,e,t,i,r){var s=Wt(t)?rr:Ct.current;return s=Jr(e,s),qr(e,r),t=Qc(n,e,t,i,s,r),i=Jc(),n!==null&&!Gt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ci(n,e,r)):(We&&i&&Bc(e),e.flags|=1,It(n,e,t,r),e.child)}function yd(n,e,t,i,r){if(Wt(t)){var s=!0;Aa(e)}else s=!1;if(qr(e,r),e.stateNode===null)ha(n,e),Fm(e,t,i),Zu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=pn(u):(u=Wt(t)?rr:Ct.current,u=Jr(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pd(e,o,i,u),_i=!1;var f=e.memoizedState;o.state=f,Ia(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Ht.current||_i?(typeof c=="function"&&(Yu(e,t,c,i),l=e.memoizedState),(a=_i||hd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,mm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=pn(l):(l=Wt(t)?rr:Ct.current,l=Jr(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pd(e,o,i,l),_i=!1,f=e.memoizedState,o.state=f,Ia(e,i,o,r);var S=e.memoizedState;a!==d||f!==S||Ht.current||_i?(typeof g=="function"&&(Yu(e,t,g,i),S=e.memoizedState),(u=_i||hd(e,t,u,i,f,S,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Ju(n,e,t,i,s,r)}function Ju(n,e,t,i,r,s){Vm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sd(e,t,!1),ci(n,e,s);i=e.stateNode,jv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ts(e,n.child,null,s),e.child=ts(e,null,a,s)):It(n,e,a,s),e.memoizedState=i.state,r&&sd(e,t,!0),e.child}function Gm(n){var e=n.stateNode;e.pendingContext?rd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&rd(n,e.context,!1),$c(n,e.containerInfo)}function Sd(n,e,t,i,r){return es(),Gc(r),e.flags|=256,It(n,e,t,i),e.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hm(n,e,t){var i=e.pendingProps,r=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Oe(qe,r&1),n===null)return qu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=el(o,i,0,null),n=nr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=tc(t),e.memoizedState=ec,n):nf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Di(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Di(a,s):(s=nr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?tc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ec,i}return s=n.child,n=s.sibling,i=Di(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function nf(n,e){return e=el({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Fo(n,e,t,i){return i!==null&&Gc(i),ts(e,n.child,null,t),n=nf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Xv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Nl(Error(K(422))),Fo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=el({mode:"visible",children:i.children},r,0,null),s=nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ts(e,n.child,null,o),e.child.memoizedState=tc(o),e.memoizedState=ec,s);if(!(e.mode&1))return Fo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(K(419)),i=Nl(s,i,void 0),Fo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Gt||a){if(i=gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(n,r),An(i,n,r,-1))}return uf(),i=Nl(Error(K(421))),Fo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=s_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Qt=bi(r.nextSibling),Jt=e,We=!0,En=null,n!==null&&(ln[un++]=ti,ln[un++]=ni,ln[un++]=sr,ti=n.id,ni=n.overflow,sr=e),e=nf(e,i.children),e.flags|=4096,e)}function Md(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),$u(n.return,e,t)}function zl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Wm(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(It(n,e,i.children,t),i=qe.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Md(n,t,e);else if(n.tag===19)Md(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Oe(qe,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Na(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),zl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Na(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}zl(e,!0,t,null,s);break;case"together":zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ha(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ci(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ar|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(K(153));if(e.child!==null){for(n=e.child,t=Di(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Di(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qv(n,e,t){switch(e.tag){case 3:Gm(e),es();break;case 5:gm(e);break;case 1:Wt(e.type)&&Aa(e);break;case 4:$c(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Oe(Da,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Oe(qe,qe.current&1),e.flags|=128,null):t&e.child.childLanes?Hm(n,e,t):(Oe(qe,qe.current&1),n=ci(n,e,t),n!==null?n.sibling:null);Oe(qe,qe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Wm(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Oe(qe,qe.current),i)break;return null;case 22:case 23:return e.lanes=0,Bm(n,e,t)}return ci(n,e,t)}var jm,nc,Xm,qm;jm=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nc=function(){};Xm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qi(Gn.current);var s=null;switch(t){case"input":r=Eu(n,r),i=Eu(n,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=bu(n,r),i=bu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ca)}Lu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qm=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ss(n,e){if(!We)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function St(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function $v(n,e,t){var i=e.pendingProps;switch(Vc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Wt(e.type)&&ba(),St(e),null;case 3:return i=e.stateNode,ns(),He(Ht),He(Ct),Zc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(No(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,En!==null&&(cc(En),En=null))),nc(n,e),St(e),null;case 5:Yc(e);var r=Qi(ro.current);if(t=e.type,n!==null&&e.stateNode!=null)Xm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(K(166));return St(e),null}if(n=Qi(Gn.current),No(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[no]=s,n=(e.mode&1)!==0,t){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(r=0;r<Is.length;r++)Ve(Is[r],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Df(i,s),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",i);break;case"textarea":If(i,s),Ve("invalid",i)}Lu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",""+a]):Xs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",i)}switch(t){case"input":To(i),Rf(i,s,!0);break;case"textarea":To(i),Nf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ca)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Sp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bn]=e,n[no]=i,jm(n,e,!1,!1),e.stateNode=n;e:{switch(o=Pu(t,i),t){case"dialog":Ve("cancel",n),Ve("close",n),r=i;break;case"iframe":case"object":case"embed":Ve("load",n),r=i;break;case"video":case"audio":for(r=0;r<Is.length;r++)Ve(Is[r],n);r=i;break;case"source":Ve("error",n),r=i;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),r=i;break;case"details":Ve("toggle",n),r=i;break;case"input":Df(n,i),r=Eu(n,i),Ve("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ve("invalid",n);break;case"textarea":If(n,i),r=bu(n,i),Ve("invalid",n);break;default:r=i}Lu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ep(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&qs(n,l):typeof l=="number"&&qs(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",n):l!=null&&Cc(n,s,l,o))}switch(t){case"input":To(n),Rf(n,i,!1);break;case"textarea":To(n),Nf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ii(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Hr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Hr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ca)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(n&&e.stateNode!=null)qm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(K(166));if(t=Qi(ro.current),Qi(Gn.current),No(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==t)&&(n=Jt,n!==null))switch(n.tag){case 3:Io(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return St(e),null;case 13:if(He(qe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(We&&Qt!==null&&e.mode&1&&!(e.flags&128))fm(),es(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(K(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[Bn]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else En!==null&&(cc(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||qe.current&1?ot===0&&(ot=3):uf())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return ns(),nc(n,e),n===null&&eo(e.stateNode.containerInfo),St(e),null;case 10:return jc(e.type._context),St(e),null;case 17:return Wt(e.type)&&ba(),St(e),null;case 19:if(He(qe),s=e.memoizedState,s===null)return St(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ss(s,!1);else{if(ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Na(n),o!==null){for(e.flags|=128,Ss(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Oe(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&et()>rs&&(e.flags|=128,i=!0,Ss(s,!1),e.lanes=4194304)}else{if(!i)if(n=Na(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return St(e),null}else 2*et()-s.renderingStartTime>rs&&t!==1073741824&&(e.flags|=128,i=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,t=qe.current,Oe(qe,i?t&1|2:t&1),e):(St(e),null);case 22:case 23:return lf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function Yv(n,e){switch(Vc(e),e.tag){case 1:return Wt(e.type)&&ba(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ns(),He(Ht),He(Ct),Zc(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Yc(e),null;case 13:if(He(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(K(340));es()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return He(qe),null;case 4:return ns(),null;case 10:return jc(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var ko=!1,Et=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,le=null;function Br(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qe(n,e,i)}else t.current=null}function ic(n,e,t){try{t()}catch(i){Qe(n,e,i)}}var wd=!1;function Kv(n,e){if(Bu=wa,n=Qp(),Oc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vu={focusedElem:n,selectionRange:t},wa=!1,le=e;le!==null;)if(e=le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,le=n;else for(;le!==null;){e=le;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var h=S.memoizedProps,p=S.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Mn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(x){Qe(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,le=n;break}le=e.return}return S=wd,wd=!1,S}function Hs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ic(e,t,s)}r=r.next}while(r!==i)}}function Qa(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function rc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $m(n){var e=n.alternate;e!==null&&(n.alternate=null,$m(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bn],delete e[no],delete e[Wu],delete e[Iv],delete e[Nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function Ed(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ca));else if(i!==4&&(n=n.child,n!==null))for(sc(n,e,t),n=n.sibling;n!==null;)sc(n,e,t),n=n.sibling}function oc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(oc(n,e,t),n=n.sibling;n!==null;)oc(n,e,t),n=n.sibling}var vt=null,wn=!1;function di(n,e,t){for(t=t.child;t!==null;)Zm(n,e,t),t=t.sibling}function Zm(n,e,t){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Wa,t)}catch{}switch(t.tag){case 5:Et||Br(t,e);case 6:var i=vt,r=wn;vt=null,di(n,e,t),vt=i,wn=r,vt!==null&&(wn?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(wn?(n=vt,t=t.stateNode,n.nodeType===8?Al(n.parentNode,t):n.nodeType===1&&Al(n,t),Ks(n)):Al(vt,t.stateNode));break;case 4:i=vt,r=wn,vt=t.stateNode.containerInfo,wn=!0,di(n,e,t),vt=i,wn=r;break;case 0:case 11:case 14:case 15:if(!Et&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ic(t,e,o),r=r.next}while(r!==i)}di(n,e,t);break;case 1:if(!Et&&(Br(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qe(t,e,a)}di(n,e,t);break;case 21:di(n,e,t);break;case 22:t.mode&1?(Et=(i=Et)||t.memoizedState!==null,di(n,e,t),Et=i):di(n,e,t);break;default:di(n,e,t)}}function Td(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Zv),e.forEach(function(i){var r=o_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _n(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,wn=!1;break e;case 3:vt=a.stateNode.containerInfo,wn=!0;break e;case 4:vt=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(vt===null)throw Error(K(160));Zm(s,o,r),vt=null,wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Km(e,n),e=e.sibling}function Km(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_n(e,n),In(n),i&4){try{Hs(3,n,n.return),Qa(3,n)}catch(h){Qe(n,n.return,h)}try{Hs(5,n,n.return)}catch(h){Qe(n,n.return,h)}}break;case 1:_n(e,n),In(n),i&512&&t!==null&&Br(t,t.return);break;case 5:if(_n(e,n),In(n),i&512&&t!==null&&Br(t,t.return),n.flags&32){var r=n.stateNode;try{qs(r,"")}catch(h){Qe(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xp(r,s),Pu(a,o);var u=Pu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Ep(r,d):c==="dangerouslySetInnerHTML"?Mp(r,d):c==="children"?qs(r,d):Cc(r,c,d,u)}switch(a){case"input":Tu(r,s);break;case"textarea":yp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Hr(r,!!s.multiple,s.defaultValue,!0):Hr(r,!!s.multiple,s.multiple?[]:"",!1))}r[no]=s}catch(h){Qe(n,n.return,h)}}break;case 6:if(_n(e,n),In(n),i&4){if(n.stateNode===null)throw Error(K(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){Qe(n,n.return,h)}}break;case 3:if(_n(e,n),In(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(h){Qe(n,n.return,h)}break;case 4:_n(e,n),In(n);break;case 13:_n(e,n),In(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(of=et())),i&4&&Td(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Et=(u=Et)||c,_n(e,n),Et=u):_n(e,n),In(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(le=n,c=n.child;c!==null;){for(d=le=c;le!==null;){switch(f=le,g=f.child,f.tag){case 0:case 11:case 14:case 15:Hs(4,f,f.return);break;case 1:Br(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(h){Qe(i,t,h)}}break;case 5:Br(f,f.return);break;case 22:if(f.memoizedState!==null){bd(d);continue}}g!==null?(g.return=f,le=g):bd(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wp("display",o))}catch(h){Qe(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){Qe(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_n(e,n),In(n),i&4&&Td(n);break;case 21:break;default:_n(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Ym(t)){var i=t;break e}t=t.return}throw Error(K(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qs(r,""),i.flags&=-33);var s=Ed(n);oc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ed(n);sc(n,a,o);break;default:throw Error(K(161))}}catch(l){Qe(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Qv(n,e,t){le=n,Qm(n)}function Qm(n,e,t){for(var i=(n.mode&1)!==0;le!==null;){var r=le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Et;a=ko;var u=Et;if(ko=o,(Et=l)&&!u)for(le=r;le!==null;)o=le,l=o.child,o.tag===22&&o.memoizedState!==null?Ad(r):l!==null?(l.return=o,le=l):Ad(r);for(;s!==null;)le=s,Qm(s),s=s.sibling;le=r,ko=a,Et=u}Cd(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,le=s):Cd(n)}}function Cd(n){for(;le!==null;){var e=le;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Qa(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Et)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Mn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}cd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ks(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Et||e.flags&512&&rc(e)}catch(f){Qe(e,e.return,f)}}if(e===n){le=null;break}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function bd(n){for(;le!==null;){var e=le;if(e===n){le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,le=t;break}le=e.return}}function Ad(n){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Qa(4,e)}catch(l){Qe(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{rc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{rc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===n){le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,le=a;break}le=e.return}}var Jv=Math.ceil,ka=fi.ReactCurrentDispatcher,rf=fi.ReactCurrentOwner,hn=fi.ReactCurrentBatchConfig,Re=0,gt=null,rt=null,_t=0,Kt=0,Vr=ki(0),ot=0,lo=null,ar=0,Ja=0,sf=0,Ws=null,Bt=null,of=0,rs=1/0,Qn=null,Ua=!1,ac=null,Li=null,Uo=!1,Mi=null,Oa=0,js=0,lc=null,pa=-1,ma=0;function Ft(){return Re&6?et():pa!==-1?pa:pa=et()}function Pi(n){return n.mode&1?Re&2&&_t!==0?_t&-_t:Fv.transition!==null?(ma===0&&(ma=Fp()),ma):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Hp(n.type)),n):1}function An(n,e,t,i){if(50<js)throw js=0,lc=null,Error(K(185));po(n,t,i),(!(Re&2)||n!==gt)&&(n===gt&&(!(Re&2)&&(Ja|=t),ot===4&&yi(n,_t)),jt(n,i),t===1&&Re===0&&!(e.mode&1)&&(rs=et()+500,Ya&&Ui()))}function jt(n,e){var t=n.callbackNode;F0(n,e);var i=Ma(n,n===gt?_t:0);if(i===0)t!==null&&kf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&kf(t),e===1)n.tag===0?zv(Ld.bind(null,n)):lm(Ld.bind(null,n)),Dv(function(){!(Re&6)&&Ui()}),t=null;else{switch(kp(i)){case 1:t=Dc;break;case 4:t=Np;break;case 16:t=Sa;break;case 536870912:t=zp;break;default:t=Sa}t=og(t,Jm.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Jm(n,e){if(pa=-1,ma=0,Re&6)throw Error(K(327));var t=n.callbackNode;if($r()&&n.callbackNode!==t)return null;var i=Ma(n,n===gt?_t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ba(n,i);else{e=i;var r=Re;Re|=2;var s=tg();(gt!==n||_t!==e)&&(Qn=null,rs=et()+500,tr(n,e));do try{n_();break}catch(a){eg(n,a)}while(1);Wc(),ka.current=s,Re=r,rt!==null?e=0:(gt=null,_t=0,e=ot)}if(e!==0){if(e===2&&(r=zu(n),r!==0&&(i=r,e=uc(n,r))),e===1)throw t=lo,tr(n,0),yi(n,i),jt(n,et()),t;if(e===6)yi(n,i);else{if(r=n.current.alternate,!(i&30)&&!e_(r)&&(e=Ba(n,i),e===2&&(s=zu(n),s!==0&&(i=s,e=uc(n,s))),e===1))throw t=lo,tr(n,0),yi(n,i),jt(n,et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(K(345));case 2:qi(n,Bt,Qn);break;case 3:if(yi(n,i),(i&130023424)===i&&(e=of+500-et(),10<e)){if(Ma(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ft(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Hu(qi.bind(null,n,Bt,Qn),e);break}qi(n,Bt,Qn);break;case 4:if(yi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jv(i/1960))-i,10<i){n.timeoutHandle=Hu(qi.bind(null,n,Bt,Qn),i);break}qi(n,Bt,Qn);break;case 5:qi(n,Bt,Qn);break;default:throw Error(K(329))}}}return jt(n,et()),n.callbackNode===t?Jm.bind(null,n):null}function uc(n,e){var t=Ws;return n.current.memoizedState.isDehydrated&&(tr(n,e).flags|=256),n=Ba(n,e),n!==2&&(e=Bt,Bt=t,e!==null&&cc(e)),n}function cc(n){Bt===null?Bt=n:Bt.push.apply(Bt,n)}function e_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ln(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(n,e){for(e&=~sf,e&=~Ja,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-bn(e),i=1<<t;n[t]=-1,e&=~i}}function Ld(n){if(Re&6)throw Error(K(327));$r();var e=Ma(n,0);if(!(e&1))return jt(n,et()),null;var t=Ba(n,e);if(n.tag!==0&&t===2){var i=zu(n);i!==0&&(e=i,t=uc(n,i))}if(t===1)throw t=lo,tr(n,0),yi(n,e),jt(n,et()),t;if(t===6)throw Error(K(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,qi(n,Bt,Qn),jt(n,et()),null}function af(n,e){var t=Re;Re|=1;try{return n(e)}finally{Re=t,Re===0&&(rs=et()+500,Ya&&Ui())}}function lr(n){Mi!==null&&Mi.tag===0&&!(Re&6)&&$r();var e=Re;Re|=1;var t=hn.transition,i=ke;try{if(hn.transition=null,ke=1,n)return n()}finally{ke=i,hn.transition=t,Re=e,!(Re&6)&&Ui()}}function lf(){Kt=Vr.current,He(Vr)}function tr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Pv(t)),rt!==null)for(t=rt.return;t!==null;){var i=t;switch(Vc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ba();break;case 3:ns(),He(Ht),He(Ct),Zc();break;case 5:Yc(i);break;case 4:ns();break;case 13:He(qe);break;case 19:He(qe);break;case 10:jc(i.type._context);break;case 22:case 23:lf()}t=t.return}if(gt=n,rt=n=Di(n.current,null),_t=Kt=e,ot=0,lo=null,sf=Ja=ar=0,Bt=Ws=null,Ki!==null){for(e=0;e<Ki.length;e++)if(t=Ki[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ki=null}return n}function eg(n,e){do{var t=rt;try{if(Wc(),fa.current=Fa,za){for(var i=$e.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}za=!1}if(or=0,pt=st=$e=null,Gs=!1,so=0,rf.current=null,t===null||t.return===null){ot=1,lo=e,rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gd(o);if(g!==null){g.flags&=-257,vd(g,o,a,s,e),g.mode&1&&md(s,u,e),e=g,l=u;var S=e.updateQueue;if(S===null){var h=new Set;h.add(l),e.updateQueue=h}else S.add(l);break e}else{if(!(e&1)){md(s,u,e),uf();break e}l=Error(K(426))}}else if(We&&a.mode&1){var p=gd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),vd(p,o,a,s,e),Gc(is(l,a));break e}}s=l=is(l,a),ot!==4&&(ot=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=km(s,l,e);ud(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Li===null||!Li.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Um(s,a,e);ud(s,x);break e}}s=s.return}while(s!==null)}ig(t)}catch(w){e=w,rt===t&&t!==null&&(rt=t=t.return);continue}break}while(1)}function tg(){var n=ka.current;return ka.current=Fa,n===null?Fa:n}function uf(){(ot===0||ot===3||ot===2)&&(ot=4),gt===null||!(ar&268435455)&&!(Ja&268435455)||yi(gt,_t)}function Ba(n,e){var t=Re;Re|=2;var i=tg();(gt!==n||_t!==e)&&(Qn=null,tr(n,e));do try{t_();break}catch(r){eg(n,r)}while(1);if(Wc(),Re=t,ka.current=i,rt!==null)throw Error(K(261));return gt=null,_t=0,ot}function t_(){for(;rt!==null;)ng(rt)}function n_(){for(;rt!==null&&!b0();)ng(rt)}function ng(n){var e=sg(n.alternate,n,Kt);n.memoizedProps=n.pendingProps,e===null?ig(n):rt=e,rf.current=null}function ig(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Yv(t,e),t!==null){t.flags&=32767,rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ot=6,rt=null;return}}else if(t=$v(t,e,Kt),t!==null){rt=t;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=n}while(e!==null);ot===0&&(ot=5)}function qi(n,e,t){var i=ke,r=hn.transition;try{hn.transition=null,ke=1,i_(n,e,t,i)}finally{hn.transition=r,ke=i}return null}function i_(n,e,t,i){do $r();while(Mi!==null);if(Re&6)throw Error(K(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(K(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(k0(n,s),n===gt&&(rt=gt=null,_t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Uo||(Uo=!0,og(Sa,function(){return $r(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=hn.transition,hn.transition=null;var o=ke;ke=1;var a=Re;Re|=4,rf.current=null,Kv(n,t),Km(t,n),wv(Vu),wa=!!Bu,Vu=Bu=null,n.current=t,Qv(t),A0(),Re=a,ke=o,hn.transition=s}else n.current=t;if(Uo&&(Uo=!1,Mi=n,Oa=r),s=n.pendingLanes,s===0&&(Li=null),D0(t.stateNode),jt(n,et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ua)throw Ua=!1,n=ac,ac=null,n;return Oa&1&&n.tag!==0&&$r(),s=n.pendingLanes,s&1?n===lc?js++:(js=0,lc=n):js=0,Ui(),null}function $r(){if(Mi!==null){var n=kp(Oa),e=hn.transition,t=ke;try{if(hn.transition=null,ke=16>n?16:n,Mi===null)var i=!1;else{if(n=Mi,Mi=null,Oa=0,Re&6)throw Error(K(331));var r=Re;for(Re|=4,le=n.current;le!==null;){var s=le,o=s.child;if(le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(le=u;le!==null;){var c=le;switch(c.tag){case 0:case 11:case 15:Hs(8,c,s)}var d=c.child;if(d!==null)d.return=c,le=d;else for(;le!==null;){c=le;var f=c.sibling,g=c.return;if($m(c),c===u){le=null;break}if(f!==null){f.return=g,le=f;break}le=g}}}var S=s.alternate;if(S!==null){var h=S.child;if(h!==null){S.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,le=m;break e}le=s.return}}var v=n.current;for(le=v;le!==null;){o=le;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,le=_;else e:for(o=v;le!==null;){if(a=le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qa(9,a)}}catch(w){Qe(a,a.return,w)}if(a===o){le=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,le=x;break e}le=a.return}}if(Re=r,Ui(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Wa,n)}catch{}i=!0}return i}finally{ke=t,hn.transition=e}}return!1}function Pd(n,e,t){e=is(t,e),e=km(n,e,1),n=Ai(n,e,1),e=Ft(),n!==null&&(po(n,1,e),jt(n,e))}function Qe(n,e,t){if(n.tag===3)Pd(n,n,t);else for(;e!==null;){if(e.tag===3){Pd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Li===null||!Li.has(i))){n=is(t,n),n=Um(e,n,1),e=Ai(e,n,1),n=Ft(),e!==null&&(po(e,1,n),jt(e,n));break}}e=e.return}}function r_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ft(),n.pingedLanes|=n.suspendedLanes&t,gt===n&&(_t&t)===t&&(ot===4||ot===3&&(_t&130023424)===_t&&500>et()-of?tr(n,0):sf|=t),jt(n,e)}function rg(n,e){e===0&&(n.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var t=Ft();n=ui(n,e),n!==null&&(po(n,e,t),jt(n,t))}function s_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),rg(n,t)}function o_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(K(314))}i!==null&&i.delete(e),rg(n,t)}var sg;sg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ht.current)Gt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Gt=!1,qv(n,e,t);Gt=!!(n.flags&131072)}else Gt=!1,We&&e.flags&1048576&&um(e,Pa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ha(n,e),n=e.pendingProps;var r=Jr(e,Ct.current);qr(e,t),r=Qc(null,e,i,n,r,t);var s=Jc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(i)?(s=!0,Aa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qc(e),r.updater=Ka,e.stateNode=r,r._reactInternals=e,Zu(e,i,n,t),e=Ju(null,e,i,!0,s,t)):(e.tag=0,We&&s&&Bc(e),It(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ha(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=l_(i),n=Mn(i,n),r){case 0:e=Qu(null,e,i,n,t);break e;case 1:e=yd(null,e,i,n,t);break e;case 11:e=_d(null,e,i,n,t);break e;case 14:e=xd(null,e,i,Mn(i.type,n),t);break e}throw Error(K(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mn(i,r),Qu(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mn(i,r),yd(n,e,i,r,t);case 3:e:{if(Gm(e),n===null)throw Error(K(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mm(n,e),Ia(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=is(Error(K(423)),e),e=Sd(n,e,i,t,r);break e}else if(i!==r){r=is(Error(K(424)),e),e=Sd(n,e,i,t,r);break e}else for(Qt=bi(e.stateNode.containerInfo.firstChild),Jt=e,We=!0,En=null,t=hm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(es(),i===r){e=ci(n,e,t);break e}It(n,e,i,t)}e=e.child}return e;case 5:return gm(e),n===null&&qu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Gu(i,r)?o=null:s!==null&&Gu(i,s)&&(e.flags|=32),Vm(n,e),It(n,e,o,t),e.child;case 6:return n===null&&qu(e),null;case 13:return Hm(n,e,t);case 4:return $c(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ts(e,null,i,t):It(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mn(i,r),_d(n,e,i,r,t);case 7:return It(n,e,e.pendingProps,t),e.child;case 8:return It(n,e,e.pendingProps.children,t),e.child;case 12:return It(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Oe(Da,i._currentValue),i._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===r.children&&!Ht.current){e=ci(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=si(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),$u(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(K(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),$u(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qr(e,t),r=pn(r),i=i(r),e.flags|=1,It(n,e,i,t),e.child;case 14:return i=e.type,r=Mn(i,e.pendingProps),r=Mn(i.type,r),xd(n,e,i,r,t);case 15:return Om(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mn(i,r),ha(n,e),e.tag=1,Wt(i)?(n=!0,Aa(e)):n=!1,qr(e,t),Fm(e,i,r),Zu(e,i,r,t),Ju(null,e,i,!0,n,t);case 19:return Wm(n,e,t);case 22:return Bm(n,e,t)}throw Error(K(156,e.tag))};function og(n,e){return Ip(n,e)}function a_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(n,e,t,i){return new a_(n,e,t,i)}function cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l_(n){if(typeof n=="function")return cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ac)return 11;if(n===Lc)return 14}return 2}function Di(n,e){var t=n.alternate;return t===null?(t=dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ga(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")cf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Dr:return nr(t.children,r,s,e);case bc:o=8,r|=8;break;case yu:return n=dn(12,t,e,r|2),n.elementType=yu,n.lanes=s,n;case Su:return n=dn(13,t,e,r),n.elementType=Su,n.lanes=s,n;case Mu:return n=dn(19,t,e,r),n.elementType=Mu,n.lanes=s,n;case gp:return el(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case pp:o=10;break e;case mp:o=9;break e;case Ac:o=11;break e;case Lc:o=14;break e;case vi:o=16,i=null;break e}throw Error(K(130,n==null?n:typeof n,""))}return e=dn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function nr(n,e,t,i){return n=dn(7,n,i,e),n.lanes=t,n}function el(n,e,t,i){return n=dn(22,n,i,e),n.elementType=gp,n.lanes=t,n.stateNode={isHidden:!1},n}function Fl(n,e,t){return n=dn(6,n,null,e),n.lanes=t,n}function kl(n,e,t){return e=dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function u_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ff(n,e,t,i,r,s,o,a,l){return n=new u_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(s),n}function c_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ag(n){if(!n)return Ni;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(K(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(n.tag===1){var t=n.type;if(Wt(t))return am(n,t,e)}return e}function lg(n,e,t,i,r,s,o,a,l){return n=ff(t,i,!0,n,r,s,o,a,l),n.context=ag(null),t=n.current,i=Ft(),r=Pi(t),s=si(i,r),s.callback=e??null,Ai(t,s,r),n.current.lanes=r,po(n,r,i),jt(n,i),n}function tl(n,e,t,i){var r=e.current,s=Ft(),o=Pi(r);return t=ag(t),e.context===null?e.context=t:e.pendingContext=t,e=si(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ai(r,e,o),n!==null&&(An(n,r,o,s),ca(n,r,o)),o}function Va(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function df(n,e){Dd(n,e),(n=n.alternate)&&Dd(n,e)}function f_(){return null}var ug=typeof reportError=="function"?reportError:function(n){console.error(n)};function hf(n){this._internalRoot=n}nl.prototype.render=hf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(K(409));tl(n,e,null,null)};nl.prototype.unmount=hf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;lr(function(){tl(null,n,null,null)}),e[li]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Bp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xi.length&&e!==0&&e<xi[t].priority;t++);xi.splice(t,0,n),t===0&&Gp(n)}};function pf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function d_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Va(o);s.call(u)}}var o=lg(e,i,n,0,null,!1,!1,"",Rd);return n._reactRootContainer=o,n[li]=o.current,eo(n.nodeType===8?n.parentNode:n),lr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Va(l);a.call(u)}}var l=ff(n,0,!1,null,null,!1,!1,"",Rd);return n._reactRootContainer=l,n[li]=l.current,eo(n.nodeType===8?n.parentNode:n),lr(function(){tl(e,l,t,i)}),l}function rl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Va(o);a.call(l)}}tl(e,o,n,r)}else o=d_(t,e,n,r,i);return Va(o)}Up=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rs(e.pendingLanes);t!==0&&(Rc(e,t|1),jt(e,et()),!(Re&6)&&(rs=et()+500,Ui()))}break;case 13:lr(function(){var i=ui(n,1);if(i!==null){var r=Ft();An(i,n,1,r)}}),df(n,1)}};Ic=function(n){if(n.tag===13){var e=ui(n,134217728);if(e!==null){var t=Ft();An(e,n,134217728,t)}df(n,134217728)}};Op=function(n){if(n.tag===13){var e=Pi(n),t=ui(n,e);if(t!==null){var i=Ft();An(t,n,e,i)}df(n,e)}};Bp=function(){return ke};Vp=function(n,e){var t=ke;try{return ke=n,e()}finally{ke=t}};Ru=function(n,e,t){switch(e){case"input":if(Tu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=$a(i);if(!r)throw Error(K(90));_p(i),Tu(i,r)}}}break;case"textarea":yp(n,t);break;case"select":e=t.value,e!=null&&Hr(n,!!t.multiple,e,!1)}};bp=af;Ap=lr;var h_={usingClientEntryPoint:!1,Events:[go,zr,$a,Tp,Cp,af]},Ms={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p_={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dp(n),n===null?null:n.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Wa=Oo.inject(p_),Vn=Oo}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;rn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(K(200));return c_(n,e,null,t)};rn.createRoot=function(n,e){if(!pf(n))throw Error(K(299));var t=!1,i="",r=ug;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ff(n,1,!1,null,null,t,!1,i,r),n[li]=e.current,eo(n.nodeType===8?n.parentNode:n),new hf(e)};rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(K(188)):(n=Object.keys(n).join(","),Error(K(268,n)));return n=Dp(e),n=n===null?null:n.stateNode,n};rn.flushSync=function(n){return lr(n)};rn.hydrate=function(n,e,t){if(!il(e))throw Error(K(200));return rl(null,n,e,!0,t)};rn.hydrateRoot=function(n,e,t){if(!pf(n))throw Error(K(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ug;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=lg(e,null,n,1,t??null,r,!1,s,o),n[li]=e.current,eo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new nl(e)};rn.render=function(n,e,t){if(!il(e))throw Error(K(200));return rl(null,n,e,!1,t)};rn.unmountComponentAtNode=function(n){if(!il(n))throw Error(K(40));return n._reactRootContainer?(lr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[li]=null})}),!0):!1};rn.unstable_batchedUpdates=af;rn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!il(t))throw Error(K(200));if(n==null||n._reactInternals===void 0)throw Error(K(38));return rl(n,e,t,!1,i)};rn.version="18.3.1-next-f1338f8080-20240426";function cg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cg)}catch(n){console.error(n)}}cg(),cp.exports=rn;var m_=cp.exports,Id=m_;_u.createRoot=Id.createRoot,_u.hydrateRoot=Id.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="150",g_={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},v_=0,Nd=1,__=2,fg=1,x_=2,Ns=3,zi=0,en=1,ii=2,Ri=0,Yr=1,zd=2,Fd=3,kd=4,y_=5,Lr=100,S_=101,M_=102,Ud=103,Od=104,w_=200,E_=201,T_=202,C_=203,dg=204,hg=205,b_=206,A_=207,L_=208,P_=209,D_=210,R_=0,I_=1,N_=2,fc=3,z_=4,F_=5,k_=6,U_=7,pg=0,O_=1,B_=2,oi=0,V_=1,G_=2,H_=3,W_=4,j_=5,mg=300,ss=301,os=302,dc=303,hc=304,sl=306,pc=1e3,Tn=1001,mc=1002,Nt=1003,Bd=1004,Ul=1005,cn=1006,X_=1007,uo=1008,ur=1009,q_=1010,$_=1011,gg=1012,Y_=1013,Ji=1014,er=1015,co=1016,Z_=1017,K_=1018,Zr=1020,Q_=1021,Cn=1023,J_=1024,ex=1025,ir=1026,as=1027,tx=1028,nx=1029,ix=1030,rx=1031,sx=1033,Ol=33776,Bl=33777,Vl=33778,Gl=33779,Vd=35840,Gd=35841,Hd=35842,Wd=35843,ox=36196,jd=37492,Xd=37496,qd=37808,$d=37809,Yd=37810,Zd=37811,Kd=37812,Qd=37813,Jd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,Hl=36492,ax=36283,ah=36284,lh=36285,uh=36286,cr=3e3,Ge=3001,lx=3200,ux=3201,vg=0,cx=1,Fn="srgb",fo="srgb-linear",_g="display-p3",Wl=7680,fx=519,ch=35044,fh="300 es",gc=1035;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jl=Math.PI/180,dh=180/Math.PI;function _o(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function dx(n,e){return(n%e+e)%e}function Xl(n,e,t){return(1-t)*n+t*e}function hh(n){return(n&n-1)===0&&n!==0}function hx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],S=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],x=r[7],w=r[2],T=r[5],A=r[8];return s[0]=o*h+a*v+l*w,s[3]=o*p+a*_+l*T,s[6]=o*m+a*x+l*A,s[1]=u*h+c*v+d*w,s[4]=u*p+c*_+d*T,s[7]=u*m+c*x+d*A,s[2]=f*h+g*v+S*w,s[5]=f*p+g*_+S*T,s[8]=f*m+g*x+S*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,S=t*d+i*f+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/S;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=g*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new zt;function xg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class xo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],S=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=S,e[t+3]=h;return}if(d!==h||l!==f||u!==g||c!==S){let p=1-a;const m=l*f+u*g+c*S+d*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*v);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const x=a*v;if(l=l*p+f*x,u=u*p+g*x,c=c*p+S*x,d=d*p+h*x,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=w,u*=w,c*=w,d*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],S=s[o+3];return e[t]=a*S+c*d+l*g-u*f,e[t+1]=l*S+c*f+u*d-a*g,e[t+2]=u*S+c*g+a*f-l*d,e[t+3]=c*S-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*S,this._y=u*g*d-f*c*S,this._z=u*c*S+f*g*d,this._w=u*c*d-f*g*S;break;case"YXZ":this._x=f*c*d+u*g*S,this._y=u*g*d-f*c*S,this._z=u*c*S-f*g*d,this._w=u*c*d+f*g*S;break;case"ZXY":this._x=f*c*d-u*g*S,this._y=u*g*d+f*c*S,this._z=u*c*S+f*g*d,this._w=u*c*d-f*g*S;break;case"ZYX":this._x=f*c*d-u*g*S,this._y=u*g*d+f*c*S,this._z=u*c*S-f*g*d,this._w=u*c*d+f*g*S;break;case"YZX":this._x=f*c*d+u*g*S,this._y=u*g*d+f*c*S,this._z=u*c*S-f*g*d,this._w=u*c*d-f*g*S;break;case"XZY":this._x=f*c*d-u*g*S,this._y=u*g*d-f*c*S,this._z=u*c*S+f*g*d,this._w=u*c*d+f*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new k,ph=new xo;function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const px=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mx=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),wi=new k;function gx(n){return n.convertSRGBToLinear(),wi.set(n.r,n.g,n.b).applyMatrix3(mx),n.setRGB(wi.x,wi.y,wi.z)}function vx(n){return wi.set(n.r,n.g,n.b).applyMatrix3(px),n.setRGB(wi.x,wi.y,wi.z).convertLinearToSRGB()}const _x={[fo]:n=>n,[Fn]:n=>n.convertSRGBToLinear(),[_g]:gx},xx={[fo]:n=>n,[Fn]:n=>n.convertLinearToSRGB(),[_g]:vx},Dt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return fo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_x[e],r=xx[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let gr;class yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=Ga("canvas")),gr.width=e.width,gr.height=e.height;const i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kr(t[i]/255)*255):t[i]=Kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Sg{constructor(e=null){this.isSource=!0,this.uuid=_o(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zl(r[o].image)):s.push(Zl(r[o]))}else s=Zl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yx=0;class tn extends ds{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Tn,r=Tn,s=cn,o=uo,a=Cn,l=ur,u=tn.DEFAULT_ANISOTROPY,c=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=_o(),this.name="",this.source=new Sg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=mg;tn.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],S=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(S-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(S+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,x=(g+1)/2,w=(m+1)/2,T=(c+f)/4,A=(d+h)/4,y=(S+p)/4;return _>x&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-S)*(p-S)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-S)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fr extends ds{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mg extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sx extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Hi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hi)}else i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox),Kl.applyMatrix4(e.matrixWorld),this.union(Kl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Vo.subVectors(this.max,ws),vr.subVectors(e.a,ws),_r.subVectors(e.b,ws),xr.subVectors(e.c,ws),hi.subVectors(_r,vr),pi.subVectors(xr,_r),Wi.subVectors(vr,xr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Wi.z,Wi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Wi.z,0,-Wi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Wi.y,Wi.x,0];return!Ql(t,vr,_r,xr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,vr,_r,xr,Vo))?!1:(Go.crossVectors(hi,pi),t=[Go.x,Go.y,Go.z],Ql(t,vr,_r,xr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new k,new k,new k,new k,new k,new k,new k,new k],Hi=new k,Kl=new yo,vr=new k,_r=new k,xr=new k,hi=new k,pi=new k,Wi=new k,ws=new k,Vo=new k,Go=new k,ji=new k;function Ql(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ji.fromArray(n,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),u=t.dot(ji),c=i.dot(ji);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Mx=new yo,Es=new k,Jl=new k;class gf{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Jl)),this.expandByPoint(Es.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new k,eu=new k,Ho=new k,mi=new k,tu=new k,Wo=new k,nu=new k;class wg{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){eu.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=mi.dot(this.direction),l=-mi.dot(Ho),u=mi.lengthSq(),c=Math.abs(1-o*o);let d,f,g,S;if(c>0)if(d=o*l-a,f=o*a-l,S=s*c,d>=0)if(f>=-S)if(f<=S){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-S?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=S?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(eu).addScaledVector(Ho,f),g}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){tu.subVectors(t,e),Wo.subVectors(i,e),nu.crossVectors(tu,Wo);let o=this.direction.dot(nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Wo.crossVectors(mi,Wo));if(l<0)return null;const u=a*this.direction.dot(tu.cross(mi));if(u<0||l+u>o)return null;const c=-a*mi.dot(nu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,g,S,h,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=S,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,S=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=g+S*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=S+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,S=u*c,h=u*d;t[0]=f+h*a,t[4]=S*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-S,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,S=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=S+g*a,t[1]=g+S*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,S=a*c,h=a*d;t[0]=l*c,t[4]=S*u-g,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=g*u-S,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,S=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=S*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*d+S,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,S=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=g*d-S,t[2]=S*d-g,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Ex)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),gi.crossVectors(i,Yt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),gi.crossVectors(i,Yt)),gi.normalize(),jo.crossVectors(Yt,gi),r[0]=gi.x,r[4]=jo.x,r[8]=Yt.x,r[1]=gi.y,r[5]=jo.y,r[9]=Yt.y,r[2]=gi.z,r[6]=jo.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],S=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],x=i[11],w=i[15],T=r[0],A=r[4],y=r[8],C=r[12],L=r[1],q=r[5],$=r[9],U=r[13],N=r[2],j=r[6],Y=r[10],J=r[14],D=r[3],B=r[7],O=r[11],re=r[15];return s[0]=o*T+a*L+l*N+u*D,s[4]=o*A+a*q+l*j+u*B,s[8]=o*y+a*$+l*Y+u*O,s[12]=o*C+a*U+l*J+u*re,s[1]=c*T+d*L+f*N+g*D,s[5]=c*A+d*q+f*j+g*B,s[9]=c*y+d*$+f*Y+g*O,s[13]=c*C+d*U+f*J+g*re,s[2]=S*T+h*L+p*N+m*D,s[6]=S*A+h*q+p*j+m*B,s[10]=S*y+h*$+p*Y+m*O,s[14]=S*C+h*U+p*J+m*re,s[3]=v*T+_*L+x*N+w*D,s[7]=v*A+_*q+x*j+w*B,s[11]=v*y+_*$+x*Y+w*O,s[15]=v*C+_*U+x*J+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],S=e[3],h=e[7],p=e[11],m=e[15];return S*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+t*l*g-t*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+t*u*d-t*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],S=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,_=S*f*u-c*p*u-S*l*g+o*p*g+c*l*m-o*f*m,x=c*h*u-S*d*u+S*a*g-o*h*g-c*a*m+o*d*m,w=S*d*l-c*h*l-S*a*f+o*h*f+c*a*p-o*d*p,T=t*v+i*_+r*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*A,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*A,e[4]=_*A,e[5]=(c*p*s-S*f*s+S*r*g-t*p*g-c*r*m+t*f*m)*A,e[6]=(S*l*s-o*p*s-S*r*u+t*p*u+o*r*m-t*l*m)*A,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*g+t*l*g)*A,e[8]=x*A,e[9]=(S*d*s-c*h*s-S*i*g+t*h*g+c*i*m-t*d*m)*A,e[10]=(o*h*s-S*a*s+S*i*u-t*h*u-o*i*m+t*a*m)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*g-t*a*g)*A,e[12]=w*A,e[13]=(c*h*r-S*d*r+S*i*f-t*h*f-c*i*p+t*d*p)*A,e[14]=(S*a*r-o*h*r-S*i*l+t*h*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,S=s*d,h=o*c,p=o*d,m=a*d,v=l*u,_=l*c,x=l*d,w=i.x,T=i.y,A=i.z;return r[0]=(1-(h+m))*w,r[1]=(g+x)*w,r[2]=(S-_)*w,r[3]=0,r[4]=(g-x)*T,r[5]=(1-(f+m))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(S+_)*A,r[9]=(p-v)*A,r[10]=(1-(f+h))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const u=1/s,c=1/o,d=1/a;return xn.elements[0]*=u,xn.elements[1]*=u,xn.elements[2]*=u,xn.elements[4]*=c,xn.elements[5]*=c,xn.elements[6]*=c,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new k,xn=new at,wx=new k(0,0,0),Ex=new k(1,1,1),gi=new k,jo=new k,Yt=new k,mh=new at,gh=new xo;class ol{constructor(e=0,t=0,i=0,r=ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ol.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tx=0;const vh=new k,Sr=new xo,Yn=new at,Xo=new k,Ts=new k,Cx=new k,bx=new xo,_h=new k(1,0,0),xh=new k(0,1,0),yh=new k(0,0,1),Ax={type:"added"},Sh={type:"removed"};class Tt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new k,t=new ol,i=new xo,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new zt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(_h,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(yh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_h,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xo.copy(e):Xo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ts,Xo,this.up):Yn.lookAt(Xo,Ts,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ax)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new k(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new k,Zn=new k,iu=new k,Kn=new k,Mr=new k,wr=new k,Mh=new k,ru=new k,su=new k,ou=new k;class ei{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Zn.subVectors(i,t),iu.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Zn),l=yn.dot(iu),u=Zn.dot(Zn),c=Zn.dot(iu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,S=(o*c-a*l)*f;return s.set(1-g-S,S,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Kn),l.set(0,0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Zn.subVectors(e,t),yn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ei.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,i),wr.subVectors(s,i),ru.subVectors(e,i);const l=Mr.dot(ru),u=wr.dot(ru);if(l<=0&&u<=0)return t.copy(i);su.subVectors(e,r);const c=Mr.dot(su),d=wr.dot(su);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Mr,o);ou.subVectors(e,s);const g=Mr.dot(ou),S=wr.dot(ou);if(S>=0&&g<=S)return t.copy(s);const h=g*u-l*S;if(h<=0&&u>=0&&S<=0)return a=u/(u-S),t.copy(i).addScaledVector(wr,a);const p=c*S-g*d;if(p<=0&&d-c>=0&&g-S>=0)return Mh.subVectors(s,r),a=(d-c)/(d-c+(g-S)),t.copy(r).addScaledVector(Mh,a);const m=1/(p+h+f);return o=h*m,a=f*m,t.copy(i).addScaledVector(Mr,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lx=0;class So extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Yr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dg,this.blendDst=hg,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},qo={h:0,s:0,l:0};function au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Dt.workingColorSpace){if(e=dx(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=au(o,s,e+1/3),this.g=au(o,s,e),this.b=au(o,s,e-1/3)}return Dt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Dt.fromWorkingColorSpace(wt.copy(this),e),Vt(wt.r*255,0,255)<<16^Vt(wt.g*255,0,255)<<8^Vt(wt.b*255,0,255)<<0}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Fn){Dt.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=i,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(qo);const i=Xl(Sn.h,qo.h,t),r=Xl(Sn.s,qo.s,t),s=Xl(Sn.l,qo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new ze;ze.NAMES=Eg;class Tg extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new k,$o=new Ue;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ch,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cg extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bg extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Px=0;const an=new at,lu=new Tt,Er=new k,Zt=new yo,Cs=new yo,ht=new k;class Oi extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?bg:Cg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Zt.min,Cs.min),Zt.expandByPoint(ht),ht.addVectors(Zt.max,Cs.max),Zt.expandByPoint(ht)):(Zt.expandByPoint(Cs.min),Zt.expandByPoint(Cs.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ht.fromBufferAttribute(a,u),l&&(Er.fromBufferAttribute(e,u),ht.add(Er)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new k,c[L]=new k;const d=new k,f=new k,g=new k,S=new Ue,h=new Ue,p=new Ue,m=new k,v=new k;function _(L,q,$){d.fromArray(r,L*3),f.fromArray(r,q*3),g.fromArray(r,$*3),S.fromArray(o,L*2),h.fromArray(o,q*2),p.fromArray(o,$*2),f.sub(d),g.sub(d),h.sub(S),p.sub(S);const U=1/(h.x*p.y-p.x*h.y);isFinite(U)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(U),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(U),u[L].add(m),u[q].add(m),u[$].add(m),c[L].add(v),c[q].add(v),c[$].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let L=0,q=x.length;L<q;++L){const $=x[L],U=$.start,N=$.count;for(let j=U,Y=U+N;j<Y;j+=3)_(i[j+0],i[j+1],i[j+2])}const w=new k,T=new k,A=new k,y=new k;function C(L){A.fromArray(s,L*3),y.copy(A);const q=u[L];w.copy(q),w.sub(A.multiplyScalar(A.dot(q))).normalize(),T.crossVectors(y,q);const U=T.dot(c[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=U}for(let L=0,q=x.length;L<q;++L){const $=x[L],U=$.start,N=$.count;for(let j=U,Y=U+N;j<Y;j+=3)C(i[j+0]),C(i[j+1]),C(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,d=new k;if(e)for(let f=0,g=e.count;f<g;f+=3){const S=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,S=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[S++]=u[g++]}return new Hn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new at,Nn=new wg,Yo=new gf,Eh=new k,bs=new k,As=new k,Ls=new k,uu=new k,Zo=new k,Ko=new Ue,Qo=new Ue,Jo=new Ue,cu=new k,ea=new k;class ri extends Tt{constructor(e=new Oi,t=new Tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(uu.fromBufferAttribute(d,e),o?Zo.addScaledVector(uu,c):Zo.addScaledVector(uu.sub(t),c))}t.add(Zo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),Yo.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Yo,Eh)===null||Nn.origin.distanceToSquared(Eh)>(e.far-e.near)**2))||(wh.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(wh),i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,S=d.length;g<S;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,x=v;_<x;_+=3){const w=a.getX(_),T=a.getX(_+1),A=a.getX(_+2);o=ta(this,p,e,Nn,u,c,w,T,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let h=g,p=S;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=ta(this,r,e,Nn,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,S=d.length;g<S;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,x=v;_<x;_+=3){const w=_,T=_+1,A=_+2;o=ta(this,p,e,Nn,u,c,w,T,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let h=g,p=S;h<p;h+=3){const m=h,v=h+1,_=h+2;o=ta(this,r,e,Nn,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function Dx(n,e,t,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ea);return u<t.near||u>t.far?null:{distance:u,point:ea.clone(),object:n}}function ta(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,bs),n.getVertexPosition(a,As),n.getVertexPosition(l,Ls);const u=Dx(n,e,t,i,bs,As,Ls,cu);if(u){r&&(Ko.fromBufferAttribute(r,o),Qo.fromBufferAttribute(r,a),Jo.fromBufferAttribute(r,l),u.uv=ei.getUV(cu,bs,As,Ls,Ko,Qo,Jo,new Ue)),s&&(Ko.fromBufferAttribute(s,o),Qo.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,l),u.uv2=ei.getUV(cu,bs,As,Ls,Ko,Qo,Jo,new Ue));const c={a:o,b:a,c:l,normal:new k,materialIndex:0};ei.getNormal(bs,As,Ls,c.normal),u.face=c}return u}class Mo extends Oi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;S("z","y","x",-1,-1,i,t,e,o,s,0),S("z","y","x",1,-1,i,t,-e,o,s,1),S("x","z","y",1,1,e,i,t,r,o,2),S("x","z","y",1,-1,e,i,-t,r,o,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(c,3)),this.setAttribute("uv",new Wn(d,2));function S(h,p,m,v,_,x,w,T,A,y,C){const L=x/A,q=w/y,$=x/2,U=w/2,N=T/2,j=A+1,Y=y+1;let J=0,D=0;const B=new k;for(let O=0;O<Y;O++){const re=O*q-U;for(let R=0;R<j;R++){const Z=R*L-$;B[h]=Z*v,B[p]=re*_,B[m]=N,u.push(B.x,B.y,B.z),B[h]=0,B[p]=0,B[m]=T>0?1:-1,c.push(B.x,B.y,B.z),d.push(R/A),d.push(1-O/y),J+=1}}for(let O=0;O<y;O++)for(let re=0;re<A;re++){const R=f+re+j*O,Z=f+re+j*(O+1),ee=f+(re+1)+j*(O+1),z=f+(re+1)+j*O;l.push(R,Z,z),l.push(Z,ee,z),D+=6}a.addGroup(g,D,C),g+=D,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=ls(n[t]);for(const r in i)e[r]=i[r]}return e}function Rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ag(n){return n.getRenderTarget()===null&&n.outputEncoding===Ge?Fn:fo}const Ix={clone:ls,merge:Rt};var Nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lg extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Lg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Cr=1;class Fx extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new fn(Tr,Cr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new fn(Tr,Cr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new fn(Tr,Cr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new fn(Tr,Cr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new fn(Tr,Cr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new fn(Tr,Cr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Pg extends tn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kx extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mo(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ri});s.uniforms.tEquirect.value=t;const o=new ri(r,s),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=cn),new Fx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const fu=new k,Ux=new k,Ox=new zt;class Un{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fu.subVectors(i,t).cross(Ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ox.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new gf,na=new k;class _f{constructor(e=new Un,t=new Un,i=new Un,r=new Un,s=new Un,o=new Un){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],S=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,d-l,h-f,_-p).normalize(),t[1].setComponents(a+r,d+l,h+f,_+p).normalize(),t[2].setComponents(a+s,d+u,h+g,_+m).normalize(),t[3].setComponents(a-s,d-u,h-g,_-m).normalize(),t[4].setComponents(a-o,d-c,h-S,_-v).normalize(),t[5].setComponents(a+o,d+c,h+S,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let S;if(d instanceof Float32Array)S=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)S=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=5123;else if(d instanceof Int16Array)S=5122;else if(d instanceof Uint32Array)S=5125;else if(d instanceof Int32Array)S=5124;else if(d instanceof Int8Array)S=5120;else if(d instanceof Uint8Array)S=5121;else if(d instanceof Uint8ClampedArray)S=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;n.bindBuffer(d,u),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class xf extends Oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,g=[],S=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-o;for(let _=0;_<u;_++){const x=_*d-s;S.push(x,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,x=v+u*(m+1),w=v+1+u*(m+1),T=v+1+u*m;g.push(_,x,T),g.push(x,w,T)}this.setIndex(g),this.setAttribute("position",new Wn(S,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx="vec3 transformed = vec3( position );",$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Zx=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Kx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oy=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,Ty=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Py=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ky=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,tS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,DS=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,RS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,IS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,NS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,FS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,$S=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,n1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,r1=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,l1=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,c1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,d1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,g1=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,v1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Hx,alphatest_pars_fragment:Wx,aomap_fragment:jx,aomap_pars_fragment:Xx,begin_vertex:qx,beginnormal_vertex:$x,bsdfs:Yx,iridescence_fragment:Zx,bumpmap_pars_fragment:Kx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ty,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ay,defaultnormal_vertex:ly,displacementmap_pars_vertex:uy,displacementmap_vertex:cy,emissivemap_fragment:fy,emissivemap_pars_fragment:dy,encodings_fragment:hy,encodings_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:vy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Py,envmap_vertex:xy,fog_vertex:yy,fog_pars_vertex:Sy,fog_fragment:My,fog_pars_fragment:wy,gradientmap_pars_fragment:Ey,lightmap_fragment:Ty,lightmap_pars_fragment:Cy,lights_lambert_fragment:by,lights_lambert_pars_fragment:Ay,lights_pars_begin:Ly,lights_toon_fragment:Dy,lights_toon_pars_fragment:Ry,lights_phong_fragment:Iy,lights_phong_pars_fragment:Ny,lights_physical_fragment:zy,lights_physical_pars_fragment:Fy,lights_fragment_begin:ky,lights_fragment_maps:Uy,lights_fragment_end:Oy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Hy,map_fragment:Wy,map_pars_fragment:jy,map_particle_fragment:Xy,map_particle_pars_fragment:qy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:Yy,morphcolor_vertex:Zy,morphnormal_vertex:Ky,morphtarget_pars_vertex:Qy,morphtarget_vertex:Jy,normal_fragment_begin:eS,normal_fragment_maps:tS,normal_pars_fragment:nS,normal_pars_vertex:iS,normal_vertex:rS,normalmap_pars_fragment:sS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:lS,iridescence_pars_fragment:uS,output_fragment:cS,packing:fS,premultiplied_alpha_fragment:dS,project_vertex:hS,dithering_fragment:pS,dithering_pars_fragment:mS,roughnessmap_fragment:gS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:xS,shadowmap_vertex:yS,shadowmask_pars_fragment:SS,skinbase_vertex:MS,skinning_pars_vertex:wS,skinning_vertex:ES,skinnormal_vertex:TS,specularmap_fragment:CS,specularmap_pars_fragment:bS,tonemapping_fragment:AS,tonemapping_pars_fragment:LS,transmission_fragment:PS,transmission_pars_fragment:DS,uv_pars_fragment:RS,uv_pars_vertex:IS,uv_vertex:NS,uv2_pars_fragment:zS,uv2_pars_vertex:FS,uv2_vertex:kS,worldpos_vertex:US,background_vert:OS,background_frag:BS,backgroundCube_vert:VS,backgroundCube_frag:GS,cube_vert:HS,cube_frag:WS,depth_vert:jS,depth_frag:XS,distanceRGBA_vert:qS,distanceRGBA_frag:$S,equirect_vert:YS,equirect_frag:ZS,linedashed_vert:KS,linedashed_frag:QS,meshbasic_vert:JS,meshbasic_frag:e1,meshlambert_vert:t1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:r1,meshnormal_vert:s1,meshnormal_frag:o1,meshphong_vert:a1,meshphong_frag:l1,meshphysical_vert:u1,meshphysical_frag:c1,meshtoon_vert:f1,meshtoon_frag:d1,points_vert:h1,points_frag:p1,shadow_vert:m1,shadow_frag:g1,sprite_vert:v1,sprite_frag:_1},ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},On={basic:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Rt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Rt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Rt([ie.points,ie.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Rt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Rt([ie.common,ie.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Rt([ie.sprite,ie.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Rt([ie.common,ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Rt([ie.lights,ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};On.physical={uniforms:Rt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const ia={r:0,b:0,g:0};function x1(n,e,t,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function S(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===sl)?(c===void 0&&(c=new ri(new Mo(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ls(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Ge,(d!==_||f!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new ri(new xf(2,2),new dr({name:"BackgroundMaterial",uniforms:ls(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(ia,Ag(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:S}}function y1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(N,j,Y,J,D){let B=!1;if(o){const O=h(J,Y,j);u!==O&&(u=O,g(u.object)),B=m(N,J,Y,D),B&&v(N,J,Y,D)}else{const O=j.wireframe===!0;(u.geometry!==J.id||u.program!==Y.id||u.wireframe!==O)&&(u.geometry=J.id,u.program=Y.id,u.wireframe=O,B=!0)}D!==null&&t.update(D,34963),(B||c)&&(c=!1,y(N,j,Y,J),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function S(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,j,Y){const J=Y.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let B=D[j.id];B===void 0&&(B={},D[j.id]=B);let O=B[J];return O===void 0&&(O=p(f()),B[J]=O),O}function p(N){const j=[],Y=[],J=[];for(let D=0;D<r;D++)j[D]=0,Y[D]=0,J[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Y,attributeDivisors:J,object:N,attributes:{},index:null}}function m(N,j,Y,J){const D=u.attributes,B=j.attributes;let O=0;const re=Y.getAttributes();for(const R in re)if(re[R].location>=0){const ee=D[R];let z=B[R];if(z===void 0&&(R==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),R==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),ee===void 0||ee.attribute!==z||z&&ee.data!==z.data)return!0;O++}return u.attributesNum!==O||u.index!==J}function v(N,j,Y,J){const D={},B=j.attributes;let O=0;const re=Y.getAttributes();for(const R in re)if(re[R].location>=0){let ee=B[R];ee===void 0&&(R==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),R==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const z={};z.attribute=ee,ee&&ee.data&&(z.data=ee.data),D[R]=z,O++}u.attributes=D,u.attributesNum=O,u.index=J}function _(){const N=u.newAttributes;for(let j=0,Y=N.length;j<Y;j++)N[j]=0}function x(N){w(N,0)}function w(N,j){const Y=u.newAttributes,J=u.enabledAttributes,D=u.attributeDivisors;Y[N]=1,J[N]===0&&(n.enableVertexAttribArray(N),J[N]=1),D[N]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,j),D[N]=j)}function T(){const N=u.newAttributes,j=u.enabledAttributes;for(let Y=0,J=j.length;Y<J;Y++)j[Y]!==N[Y]&&(n.disableVertexAttribArray(Y),j[Y]=0)}function A(N,j,Y,J,D,B){i.isWebGL2===!0&&(Y===5124||Y===5125)?n.vertexAttribIPointer(N,j,Y,D,B):n.vertexAttribPointer(N,j,Y,J,D,B)}function y(N,j,Y,J){if(i.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=J.attributes,B=Y.getAttributes(),O=j.defaultAttributeValues;for(const re in B){const R=B[re];if(R.location>=0){let Z=D[re];if(Z===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){const ee=Z.normalized,z=Z.itemSize,se=t.get(Z);if(se===void 0)continue;const ue=se.buffer,de=se.type,he=se.bytesPerElement;if(Z.isInterleavedBufferAttribute){const xe=Z.data,Te=xe.stride,Ae=Z.offset;if(xe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<R.locationSize;Fe++)w(R.location+Fe,xe.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<R.locationSize;Fe++)x(R.location+Fe);n.bindBuffer(34962,ue);for(let Fe=0;Fe<R.locationSize;Fe++)A(R.location+Fe,z/R.locationSize,de,ee,Te*he,(Ae+z/R.locationSize*Fe)*he)}else{if(Z.isInstancedBufferAttribute){for(let xe=0;xe<R.locationSize;xe++)w(R.location+xe,Z.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<R.locationSize;xe++)x(R.location+xe);n.bindBuffer(34962,ue);for(let xe=0;xe<R.locationSize;xe++)A(R.location+xe,z/R.locationSize,de,ee,z*he,z/R.locationSize*xe*he)}}else if(O!==void 0){const ee=O[re];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(R.location,ee);break;case 3:n.vertexAttrib3fv(R.location,ee);break;case 4:n.vertexAttrib4fv(R.location,ee);break;default:n.vertexAttrib1fv(R.location,ee)}}}}T()}function C(){$();for(const N in a){const j=a[N];for(const Y in j){const J=j[Y];for(const D in J)S(J[D].object),delete J[D];delete j[Y]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const j=a[N.id];for(const Y in j){const J=j[Y];for(const D in J)S(J[D].object),delete J[D];delete j[Y]}delete a[N.id]}function q(N){for(const j in a){const Y=a[j];if(Y[N.id]===void 0)continue;const J=Y[N.id];for(const D in J)S(J[D].object),delete J[D];delete Y[N.id]}}function $(){U(),c=!0,u!==l&&(u=l,g(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function S1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function M1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),S=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=f>0,x=o||e.has("OES_texture_float"),w=_&&x,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:S,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:T}}function w1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Un,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,g){const S=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||S===null||S.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,_=v*4;let x=m.clippingState||null;l.value=x,x=c(S,f,_,g);for(let w=0;w!==_;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,S){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,S!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=g;_!==h;++_,x+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function E1(n){let e=new WeakMap;function t(o,a){return a===dc?o.mapping=ss:a===hc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===dc||a===hc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new kx(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rg extends Lg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Th=[.125,.215,.35,.446,.526,.582],Yi=20,du=new Rg,Ch=new ze;let hu=null;const $i=(1+Math.sqrt(5))/2,Ar=1/$i,bh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,$i,Ar),new k(0,$i,-Ar),new k(Ar,0,$i),new k(-Ar,0,$i),new k($i,Ar,0),new k(-$i,Ar,0)];class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu),e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:co,format:Cn,encoding:cr,depthBuffer:!1},r=Lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T1(s)),this._blurMaterial=C1(s,e,t)}return r}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Ch),c.toneMapping=oi,c.autoClear=!1;const g=new Tg({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),S=new ri(new Mo,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(Ch),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;ra(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(S,a),c.render(e,a)}S.geometry.dispose(),S.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ra(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,du)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(r-1)%bh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ri(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yi-1),h=s/S,p=isFinite(s)?1+Math.floor(c*h):Yi;p>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const m=[];let v=0;for(let A=0;A<Yi;++A){const y=A/h,C=Math.exp(-y*y/2);m.push(C),A===0?v+=C:A<p&&(v+=2*C)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=S,f.mipInt.value=_-i;const x=this._sizeLods[r],w=3*x*(r>_-Gr?r-_+Gr:0),T=4*(this._cubeSize-x);ra(t,w,T,3*x,2*x),l.setRenderTarget(t),l.render(d,du)}}function T1(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+Th.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Gr?l=Th[o-n+Gr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,S=6,h=3,p=2,m=1,v=new Float32Array(h*S*g),_=new Float32Array(p*S*g),x=new Float32Array(m*S*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,y=T>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(C,h*S*T),_.set(f,p*S*T);const L=[T,T,T,T,T,T];x.set(L,m*S*T)}const w=new Oi;w.setAttribute("position",new Hn(v,h)),w.setAttribute("uv",new Hn(_,p)),w.setAttribute("faceIndex",new Hn(x,m)),e.push(w),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lh(n,e,t){const i=new fr(n,e,t);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function C1(n,e,t){const i=new Float32Array(Yi),r=new k(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ph(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Dh(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function b1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===dc||l===hc,c=l===ss||l===os;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ah(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Ah(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function A1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L1(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const S in f)e.update(f[S],34962);const g=d.morphAttributes;for(const S in g){const h=g[S];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,S=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,x=v.length;_<x;_+=3){const w=v[_+0],T=v[_+1],A=v[_+2];f.push(w,T,T,A,A,w)}}else{const v=S.array;h=S.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const w=_+0,T=_+1,A=_+2;f.push(w,T,T,A,A,w)}}const p=new(xg(f)?bg:Cg)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function P1(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,S){if(S===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,S),t.update(g,s,S)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function D1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function R1(n,e){return n[0]-e[0]}function I1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function N1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const S=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=S!==void 0?S.length:0;let p=s.get(c);if(p===void 0||p.count!==h){let j=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",j)};var g=j;p!==void 0&&p.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],y=c.morphAttributes.color||[];let C=0;_===!0&&(C=1),x===!0&&(C=2),w===!0&&(C=3);let L=c.attributes.position.count*C,q=1;L>e.maxTextureSize&&(q=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const $=new Float32Array(L*q*4*h),U=new Mg($,L,q,h);U.type=er,U.needsUpdate=!0;const N=C*4;for(let Y=0;Y<h;Y++){const J=T[Y],D=A[Y],B=y[Y],O=L*q*4*Y;for(let re=0;re<J.count;re++){const R=re*N;_===!0&&(o.fromBufferAttribute(J,re),$[O+R+0]=o.x,$[O+R+1]=o.y,$[O+R+2]=o.z,$[O+R+3]=0),x===!0&&(o.fromBufferAttribute(D,re),$[O+R+4]=o.x,$[O+R+5]=o.y,$[O+R+6]=o.z,$[O+R+7]=0),w===!0&&(o.fromBufferAttribute(B,re),$[O+R+8]=o.x,$[O+R+9]=o.y,$[O+R+10]=o.z,$[O+R+11]=B.itemSize===4?o.w:1)}}p={count:h,texture:U,size:new Ue(L,q)},s.set(c,p),c.addEventListener("dispose",j)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];const v=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const S=f===void 0?0:f.length;let h=i[c.id];if(h===void 0||h.length!==S){h=[];for(let x=0;x<S;x++)h[x]=[x,0];i[c.id]=h}for(let x=0;x<S;x++){const w=h[x];w[0]=x,w[1]=f[x]}h.sort(I1);for(let x=0;x<8;x++)x<S&&h[x][1]?(a[x][0]=h[x][0],a[x][1]=h[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(R1);const p=c.morphAttributes.position,m=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=a[x],T=w[0],A=w[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&c.getAttribute("morphTarget"+x)!==p[T]&&c.setAttribute("morphTarget"+x,p[T]),m&&c.getAttribute("morphNormal"+x)!==m[T]&&c.setAttribute("morphNormal"+x,m[T]),r[x]=A,v+=A):(p&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const _=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function z1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ig=new tn,Ng=new Mg,zg=new Sx,Fg=new Pg,Rh=[],Ih=[],Nh=new Float32Array(16),zh=new Float32Array(9),Fh=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rh[r];if(s===void 0&&(s=new Float32Array(r),Rh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function F1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function O1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function B1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),ut(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),ut(t,i)}}function G1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,i))return;Nh.set(i),n.uniformMatrix4fv(this.addr,!1,Nh),ut(t,i)}}function H1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function K1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ig,r)}function Q1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zg,r)}function J1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fg,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ng,r)}function tM(n){switch(n){case 5126:return F1;case 35664:return k1;case 35665:return U1;case 35666:return O1;case 35674:return B1;case 35675:return V1;case 35676:return G1;case 5124:case 35670:return H1;case 35667:case 35671:return W1;case 35668:case 35672:return j1;case 35669:case 35673:return X1;case 5125:return q1;case 36294:return $1;case 36295:return Y1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return eM}}function nM(n,e){n.uniform1fv(this.addr,e)}function iM(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function rM(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function sM(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function oM(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aM(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lM(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uM(n,e){n.uniform1iv(this.addr,e)}function cM(n,e){n.uniform2iv(this.addr,e)}function fM(n,e){n.uniform3iv(this.addr,e)}function dM(n,e){n.uniform4iv(this.addr,e)}function hM(n,e){n.uniform1uiv(this.addr,e)}function pM(n,e){n.uniform2uiv(this.addr,e)}function mM(n,e){n.uniform3uiv(this.addr,e)}function gM(n,e){n.uniform4uiv(this.addr,e)}function vM(n,e,t){const i=this.cache,r=e.length,s=al(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ig,s[o])}function _M(n,e,t){const i=this.cache,r=e.length,s=al(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zg,s[o])}function xM(n,e,t){const i=this.cache,r=e.length,s=al(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fg,s[o])}function yM(n,e,t){const i=this.cache,r=e.length,s=al(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ng,s[o])}function SM(n){switch(n){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return oM;case 35675:return aM;case 35676:return lM;case 5124:case 35670:return uM;case 35667:case 35671:return cM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return hM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}class MM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=tM(t.type)}}class wM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=SM(t.type)}}class EM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function kh(n,e){n.seq.push(e),n.map[e.id]=e}function TM(n,e,t){const i=n.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),o=pu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){kh(t,u===void 0?new MM(a,n,e):new wM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new EM(a),kh(t,d)),t=d}}}class va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let CM=0;function bM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AM(n){switch(n){case cr:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Oh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bM(n.getShaderSource(e),o)}else return r}function LM(n,e){const t=AM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function PM(n,e){let t;switch(e){case V_:t="Linear";break;case G_:t="Reinhard";break;case H_:t="OptimizedCineon";break;case W_:t="ACESFilmic";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function DM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function RM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zs(n){return n!==""}function Bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NM=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(NM,zM)}function zM(n,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vc(t)}const FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(n){return n.replace(FM,kM)}function kM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ns&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function VM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pg:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function GM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UM(t),u=OM(t),c=BM(t),d=VM(t),f=GM(t),g=t.isWebGL2?"":DM(t),S=RM(s),h=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[S].filter(zs).join(`
`),p.length>0&&(p+=`
`),m=[g,S].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(p=[Hh(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[g,Hh(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?we.tonemapping_pars_fragment:"",t.toneMapping!==oi?PM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,LM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=vc(o),o=Bh(o,t),o=Vh(o,t),a=vc(a),a=Bh(a,t),a=Vh(a,t),o=Gh(o),a=Gh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+o,x=v+m+a,w=Uh(r,35633,_),T=Uh(r,35632,x);if(r.attachShader(h,w),r.attachShader(h,T),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(w).trim(),q=r.getShaderInfoLog(T).trim();let $=!0,U=!0;if(r.getProgramParameter(h,35714)===!1){$=!1;const N=Oh(r,w,"vertex"),j=Oh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+N+`
`+j)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:$,programLog:C,vertexShader:{log:L,prefix:p},fragmentShader:{log:q,prefix:m}})}r.deleteShader(w),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new va(r,h)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=IM(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=T,this}let WM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XM(e),t.set(e,i)),i}}class XM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function qM(n,e,t,i,r,s,o){const a=new vf,l=new jM,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,C,L,q,$){const U=q.fog,N=$.geometry,j=y.isMeshStandardMaterial?q.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),J=Y&&Y.mapping===sl?Y.image.height:null,D=S[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const B=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,O=B!==void 0?B.length:0;let re=0;N.morphAttributes.position!==void 0&&(re=1),N.morphAttributes.normal!==void 0&&(re=2),N.morphAttributes.color!==void 0&&(re=3);let R,Z,ee,z;if(D){const Te=On[D];R=Te.vertexShader,Z=Te.fragmentShader}else R=y.vertexShader,Z=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),z=l.getFragmentShaderID(y);const se=n.getRenderTarget(),ue=y.alphaTest>0,de=y.clearcoat>0,he=y.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:y.type,vertexShader:R,fragmentShader:Z,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:se===null?n.outputEncoding:se.isXRRenderTarget===!0?se.texture.encoding:cr,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===cx,tangentSpaceNormalMap:y.normalMapType===vg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ge,clearcoat:de,clearcoatMap:de&&!!y.clearcoatMap,clearcoatRoughnessMap:de&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!y.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!y.iridescenceMap,iridescenceThicknessMap:he&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Yr,alphaMap:!!y.alphaMap,alphaTest:ue,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:oi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===en,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)C.push(L),C.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(C,y),v(C,y),C.push(n.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function m(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function v(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),y.push(a.mask)}function _(y){const C=S[y.type];let L;if(C){const q=On[C];L=Ix.clone(q.uniforms)}else L=y.uniforms;return L}function x(y,C){let L;for(let q=0,$=u.length;q<$;q++){const U=u[q];if(U.cacheKey===C){L=U,++L.usedTimes;break}}return L===void 0&&(L=new HM(n,C,y,s),u.push(L)),L}function w(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:x,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function $M(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function YM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,g,S,h,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:S,renderOrder:d.renderOrder,z:h,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,S,h,p){const m=o(d,f,g,S,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(d,f,g,S,h,p){const m=o(d,f,g,S,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||YM),i.length>1&&i.sort(f||Wh),r.length>1&&r.sort(f||Wh)}function c(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ZM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jh,n.set(i,[o])):r>=s.length?(o=new jh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function QM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JM=0;function ew(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tw(n,e){const t=new KM,i=QM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,o=new at,a=new at;function l(c,d){let f=0,g=0,S=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,x=0,w=0,T=0,A=0,y=0;c.sort(ew);const C=d===!0?Math.PI:1;for(let q=0,$=c.length;q<$;q++){const U=c[q],N=U.color,j=U.intensity,Y=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*j*C,g+=N.g*j*C,S+=N.b*j*C;else if(U.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(U.sh.coefficients[D],j);else if(U.isDirectionalLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const B=U.shadow,O=i.get(U);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.directionalShadow[h]=O,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=U.shadow.matrix,x++}r.directional[h]=D,h++}else if(U.isSpotLight){const D=t.get(U);D.position.setFromMatrixPosition(U.matrixWorld),D.color.copy(N).multiplyScalar(j*C),D.distance=Y,D.coneCos=Math.cos(U.angle),D.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),D.decay=U.decay,r.spot[m]=D;const B=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,B.updateMatrices(U),U.castShadow&&y++),r.spotLightMatrix[m]=B.matrix,U.castShadow){const O=i.get(U);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.spotShadow[m]=O,r.spotShadowMap[m]=J,T++}m++}else if(U.isRectAreaLight){const D=t.get(U);D.color.copy(N).multiplyScalar(j),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=D,v++}else if(U.isPointLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*C),D.distance=U.distance,D.decay=U.decay,U.castShadow){const B=U.shadow,O=i.get(U);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=U.shadow.matrix,w++}r.point[p]=D,p++}else if(U.isHemisphereLight){const D=t.get(U);D.skyColor.copy(U.color).multiplyScalar(j*C),D.groundColor.copy(U.groundColor).multiplyScalar(j*C),r.hemi[_]=D,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=S;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==v||L.hemiLength!==_||L.numDirectionalShadows!==x||L.numPointShadows!==w||L.numSpotShadows!==T||L.numSpotMaps!==A)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,L.directionalLength=h,L.pointLength=p,L.spotLength=m,L.rectAreaLength=v,L.hemiLength=_,L.numDirectionalShadows=x,L.numPointShadows=w,L.numSpotShadows=T,L.numSpotMaps=A,r.version=JM++)}function u(c,d){let f=0,g=0,S=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const x=c[v];if(x.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(x.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),S++}else if(x.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(x.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),g++}else if(x.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Xh(n,e){const t=new tw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function nw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Xh(n,e),t.set(s,[l])):o>=a.length?(l=new Xh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class iw extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rw extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
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
}`;function aw(n,e,t){let i=new _f;const r=new Ue,s=new Ue,o=new mt,a=new iw({depthPacking:ux}),l=new rw,u={},c=t.maxTextureSize,d={[zi]:en,[en]:zi,[ii]:ii},f=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const S=new Oi;S.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new ri(S,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg,this.render=function(x,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Ri),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let q=0,$=x.length;q<$;q++){const U=x[q],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null){const J=this.type!==Ns?{minFilter:Nt,magFilter:Nt}:{};N.map=new fr(r.x,r.y,J),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Y=N.getViewportCount();for(let J=0;J<Y;J++){const D=N.getViewport(J);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),L.viewport(o),N.updateMatrices(U,J),i=N.getFrustum(),_(w,T,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Ns&&m(N,T),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,y,C)};function m(x,w){const T=e.update(h);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new fr(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,T,f,h,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,T,g,h,null)}function v(x,w,T,A,y,C){let L=null;const q=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(q!==void 0)L=q;else if(L=T.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=L.uuid,U=w.uuid;let N=u[$];N===void 0&&(N={},u[$]=N);let j=N[U];j===void 0&&(j=L.clone(),N[U]=j),L=j}return L.visible=w.visible,L.wireframe=w.wireframe,C===Ns?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=A,L.farDistance=y),L}function _(x,w,T,A,y){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===Ns)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const q=e.update(x),$=x.material;if(Array.isArray($)){const U=q.groups;for(let N=0,j=U.length;N<j;N++){const Y=U[N],J=$[Y.materialIndex];if(J&&J.visible){const D=v(x,J,A,T.near,T.far,y);n.renderBufferDirect(T,null,q,D,x,Y)}}}else if($.visible){const U=v(x,$,A,T.near,T.far,y);n.renderBufferDirect(T,null,q,U,x,null)}}const L=x.children;for(let q=0,$=L.length;q<$;q++)_(L[q],w,T,A,y)}}function lw(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const G=new mt;let Q=null;const ae=new mt(0,0,0,0);return{setMask:function(fe){Q!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Be,ft,Lt,Dn){Dn===!0&&(fe*=Lt,Be*=Lt,ft*=Lt),G.set(fe,Be,ft,Lt),ae.equals(G)===!1&&(n.clearColor(fe,Be,ft,Lt),ae.copy(G))},reset:function(){P=!1,Q=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,G=null,Q=null,ae=null;return{setTest:function(fe){fe?ue(2929):de(2929)},setMask:function(fe){G!==fe&&!P&&(n.depthMask(fe),G=fe)},setFunc:function(fe){if(Q!==fe){switch(fe){case R_:n.depthFunc(512);break;case I_:n.depthFunc(519);break;case N_:n.depthFunc(513);break;case fc:n.depthFunc(515);break;case z_:n.depthFunc(514);break;case F_:n.depthFunc(518);break;case k_:n.depthFunc(516);break;case U_:n.depthFunc(517);break;default:n.depthFunc(515)}Q=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(n.clearDepth(fe),ae=fe)},reset:function(){P=!1,G=null,Q=null,ae=null}}}function o(){let P=!1,G=null,Q=null,ae=null,fe=null,Be=null,ft=null,Lt=null,Dn=null;return{setTest:function(Je){P||(Je?ue(2960):de(2960))},setMask:function(Je){G!==Je&&!P&&(n.stencilMask(Je),G=Je)},setFunc:function(Je,on,Rn){(Q!==Je||ae!==on||fe!==Rn)&&(n.stencilFunc(Je,on,Rn),Q=Je,ae=on,fe=Rn)},setOp:function(Je,on,Rn){(Be!==Je||ft!==on||Lt!==Rn)&&(n.stencilOp(Je,on,Rn),Be=Je,ft=on,Lt=Rn)},setLocked:function(Je){P=Je},setClear:function(Je){Dn!==Je&&(n.clearStencil(Je),Dn=Je)},reset:function(){P=!1,G=null,Q=null,ae=null,fe=null,Be=null,ft=null,Lt=null,Dn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},S=new WeakMap,h=[],p=null,m=!1,v=null,_=null,x=null,w=null,T=null,A=null,y=null,C=!1,L=null,q=null,$=null,U=null,N=null;const j=n.getParameter(35661);let Y=!1,J=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(D)[1]),Y=J>=1):D.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Y=J>=2);let B=null,O={};const re=n.getParameter(3088),R=n.getParameter(2978),Z=new mt().fromArray(re),ee=new mt().fromArray(R);function z(P,G,Q){const ae=new Uint8Array(4),fe=n.createTexture();n.bindTexture(P,fe),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Be=0;Be<Q;Be++)n.texImage2D(G+Be,0,6408,1,1,0,6408,5121,ae);return fe}const se={};se[3553]=z(3553,3553,1),se[34067]=z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ue(2929),l.setFunc(fc),Ot(!1),At(Nd),ue(2884),bt(Ri);function ue(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function de(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function he(P,G){return g[P]!==G?(n.bindFramebuffer(P,G),g[P]=G,i&&(P===36009&&(g[36160]=G),P===36160&&(g[36009]=G)),!0):!1}function xe(P,G){let Q=h,ae=!1;if(P)if(Q=S.get(G),Q===void 0&&(Q=[],S.set(G,Q)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(Q.length!==fe.length||Q[0]!==36064){for(let Be=0,ft=fe.length;Be<ft;Be++)Q[Be]=36064+Be;Q.length=fe.length,ae=!0}}else Q[0]!==36064&&(Q[0]=36064,ae=!0);else Q[0]!==1029&&(Q[0]=1029,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Te(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const Ae={[Lr]:32774,[S_]:32778,[M_]:32779};if(i)Ae[Ud]=32775,Ae[Od]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ae[Ud]=P.MIN_EXT,Ae[Od]=P.MAX_EXT)}const Fe={[w_]:0,[E_]:1,[T_]:768,[dg]:770,[D_]:776,[L_]:774,[b_]:772,[C_]:769,[hg]:771,[P_]:775,[A_]:773};function bt(P,G,Q,ae,fe,Be,ft,Lt){if(P===Ri){m===!0&&(de(3042),m=!1);return}if(m===!1&&(ue(3042),m=!0),P!==y_){if(P!==v||Lt!==C){if((_!==Lr||T!==Lr)&&(n.blendEquation(32774),_=Lr,T=Lr),Lt)switch(P){case Yr:n.blendFuncSeparate(1,771,1,771);break;case zd:n.blendFunc(1,1);break;case Fd:n.blendFuncSeparate(0,769,0,1);break;case kd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yr:n.blendFuncSeparate(770,771,1,771);break;case zd:n.blendFunc(770,1);break;case Fd:n.blendFuncSeparate(0,769,0,1);break;case kd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,w=null,A=null,y=null,v=P,C=Lt}return}fe=fe||G,Be=Be||Q,ft=ft||ae,(G!==_||fe!==T)&&(n.blendEquationSeparate(Ae[G],Ae[fe]),_=G,T=fe),(Q!==x||ae!==w||Be!==A||ft!==y)&&(n.blendFuncSeparate(Fe[Q],Fe[ae],Fe[Be],Fe[ft]),x=Q,w=ae,A=Be,y=ft),v=P,C=!1}function gn(P,G){P.side===ii?de(2884):ue(2884);let Q=P.side===en;G&&(Q=!Q),Ot(Q),P.blending===Yr&&P.transparent===!1?bt(Ri):bt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),je(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(32926):de(32926)}function Ot(P){L!==P&&(P?n.frontFace(2304):n.frontFace(2305),L=P)}function At(P){P!==v_?(ue(2884),P!==q&&(P===Nd?n.cullFace(1029):P===__?n.cullFace(1028):n.cullFace(1032))):de(2884),q=P}function Ze(P){P!==$&&(Y&&n.lineWidth(P),$=P)}function je(P,G,Q){P?(ue(32823),(U!==G||N!==Q)&&(n.polygonOffset(G,Q),U=G,N=Q)):de(32823)}function Pn(P){P?ue(3089):de(3089)}function vn(P){P===void 0&&(P=33984+j-1),B!==P&&(n.activeTexture(P),B=P)}function b(P,G,Q){Q===void 0&&(B===null?Q=33984+j-1:Q=B);let ae=O[Q];ae===void 0&&(ae={type:void 0,texture:void 0},O[Q]=ae),(ae.type!==P||ae.texture!==G)&&(B!==Q&&(n.activeTexture(Q),B=Q),n.bindTexture(P,G||se[P]),ae.type=P,ae.texture=G)}function M(){const P=O[B];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){Z.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function me(P){ee.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function Ie(P,G){let Q=d.get(G);Q===void 0&&(Q=new WeakMap,d.set(G,Q));let ae=Q.get(P);ae===void 0&&(ae=n.getUniformBlockIndex(G,P.name),Q.set(P,ae))}function Xe(P,G){const ae=d.get(G).get(P);c.get(G)!==ae&&(n.uniformBlockBinding(G,ae,P.__bindingPointIndex),c.set(G,ae))}function ct(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},B=null,O={},g={},S=new WeakMap,h=[],p=null,m=!1,v=null,_=null,x=null,w=null,T=null,A=null,y=null,C=!1,L=null,q=null,$=null,U=null,N=null,Z.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ue,disable:de,bindFramebuffer:he,drawBuffers:xe,useProgram:Te,setBlending:bt,setMaterial:gn,setFlipSided:Ot,setCullFace:At,setLineWidth:Ze,setPolygonOffset:je,setScissorTest:Pn,activeTexture:vn,bindTexture:b,unbindTexture:M,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:pe,texImage3D:Se,updateUBOMapping:Ie,uniformBlockBinding:Xe,texStorage2D:X,texStorage3D:ye,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:ge,compressedTexSubImage3D:ce,scissor:_e,viewport:me,reset:ct}}function uw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):Ga("canvas")}function _(b,M,H,te){let ne=1;if((b.width>te||b.height>te)&&(ne=te/Math.max(b.width,b.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=M?hx:Math.floor,ge=oe(ne*b.width),ce=oe(ne*b.height);h===void 0&&(h=v(ge,ce));const X=H?v(ge,ce):h;return X.width=ge,X.height=ce,X.getContext("2d").drawImage(b,0,0,ge,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+ce+")."),X}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return hh(b.width)&&hh(b.height)}function w(b){return a?!1:b.wrapS!==Tn||b.wrapT!==Tn||b.minFilter!==Nt&&b.minFilter!==cn}function T(b,M){return b.generateMipmaps&&M&&b.minFilter!==Nt&&b.minFilter!==cn}function A(b){n.generateMipmap(b)}function y(b,M,H,te,ne=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=M;return M===6403&&(H===5126&&(oe=33326),H===5131&&(oe=33325),H===5121&&(oe=33321)),M===33319&&(H===5126&&(oe=33328),H===5131&&(oe=33327),H===5121&&(oe=33323)),M===6408&&(H===5126&&(oe=34836),H===5131&&(oe=34842),H===5121&&(oe=te===Ge&&ne===!1?35907:32856),H===32819&&(oe=32854),H===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(b,M,H){return T(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function L(b){return b===Nt||b===Bd||b===Ul?9728:9729}function q(b){const M=b.target;M.removeEventListener("dispose",q),U(M),M.isVideoTexture&&S.delete(M)}function $(b){const M=b.target;M.removeEventListener("dispose",$),j(M)}function U(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,te=p.get(H);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(b),Object.keys(te).length===0&&p.delete(H)}i.remove(b)}function N(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const H=b.source,te=p.get(H);delete te[M.__cacheKey],o.memory.textures--}function j(b){const M=b.texture,H=i.get(b),te=i.get(M);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const ge=i.get(M[ne]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(b)}let Y=0;function J(){Y=0}function D(){const b=Y;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Y+=1,b}function B(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function O(b,M){const H=i.get(b);if(b.isVideoTexture&&Pn(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,b,M);return}}t.bindTexture(3553,H.__webglTexture,33984+M)}function re(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){de(H,b,M);return}t.bindTexture(35866,H.__webglTexture,33984+M)}function R(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){de(H,b,M);return}t.bindTexture(32879,H.__webglTexture,33984+M)}function Z(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){he(H,b,M);return}t.bindTexture(34067,H.__webglTexture,33984+M)}const ee={[pc]:10497,[Tn]:33071,[mc]:33648},z={[Nt]:9728,[Bd]:9984,[Ul]:9986,[cn]:9729,[X_]:9985,[uo]:9987};function se(b,M,H){if(H?(n.texParameteri(b,10242,ee[M.wrapS]),n.texParameteri(b,10243,ee[M.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ee[M.wrapR]),n.texParameteri(b,10240,z[M.magFilter]),n.texParameteri(b,10241,z[M.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(M.wrapS!==Tn||M.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,L(M.magFilter)),n.texParameteri(b,10241,L(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==Ul&&M.minFilter!==uo||M.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ue(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",q));const te=M.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const oe=B(M);if(oe!==b.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[oe].usedTimes++;const ge=ne[b.__cacheKey];ge!==void 0&&(ne[b.__cacheKey].usedTimes--,ge.usedTimes===0&&N(M)),b.__cacheKey=oe,b.__webglTexture=ne[oe].texture}return H}function de(b,M,H){let te=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=35866),M.isData3DTexture&&(te=32879);const ne=ue(b,M),oe=M.source;t.bindTexture(te,b.__webglTexture,33984+H);const ge=i.get(oe);if(oe.version!==ge.__version||ne===!0){t.activeTexture(33984+H),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const ce=w(M)&&x(M.image)===!1;let X=_(M.image,ce,!1,c);X=vn(M,X);const ye=x(X)||a,pe=s.convert(M.format,M.encoding);let Se=s.convert(M.type),_e=y(M.internalFormat,pe,Se,M.encoding,M.isVideoTexture);se(te,M,ye);let me;const Ie=M.mipmaps,Xe=a&&M.isVideoTexture!==!0,ct=ge.__version===void 0||ne===!0,P=C(M,X,ye);if(M.isDepthTexture)_e=6402,a?M.type===er?_e=36012:M.type===Ji?_e=33190:M.type===Zr?_e=35056:_e=33189:M.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ir&&_e===6402&&M.type!==gg&&M.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ji,Se=s.convert(M.type)),M.format===as&&_e===6402&&(_e=34041,M.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zr,Se=s.convert(M.type))),ct&&(Xe?t.texStorage2D(3553,1,_e,X.width,X.height):t.texImage2D(3553,0,_e,X.width,X.height,0,pe,Se,null));else if(M.isDataTexture)if(Ie.length>0&&ye){Xe&&ct&&t.texStorage2D(3553,P,_e,Ie[0].width,Ie[0].height);for(let G=0,Q=Ie.length;G<Q;G++)me=Ie[G],Xe?t.texSubImage2D(3553,G,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(3553,G,_e,me.width,me.height,0,pe,Se,me.data);M.generateMipmaps=!1}else Xe?(ct&&t.texStorage2D(3553,P,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,pe,Se,X.data)):t.texImage2D(3553,0,_e,X.width,X.height,0,pe,Se,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&ct&&t.texStorage3D(35866,P,_e,Ie[0].width,Ie[0].height,X.depth);for(let G=0,Q=Ie.length;G<Q;G++)me=Ie[G],M.format!==Cn?pe!==null?Xe?t.compressedTexSubImage3D(35866,G,0,0,0,me.width,me.height,X.depth,pe,me.data,0,0):t.compressedTexImage3D(35866,G,_e,me.width,me.height,X.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,G,0,0,0,me.width,me.height,X.depth,pe,Se,me.data):t.texImage3D(35866,G,_e,me.width,me.height,X.depth,0,pe,Se,me.data)}else{Xe&&ct&&t.texStorage2D(3553,P,_e,Ie[0].width,Ie[0].height);for(let G=0,Q=Ie.length;G<Q;G++)me=Ie[G],M.format!==Cn?pe!==null?Xe?t.compressedTexSubImage2D(3553,G,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(3553,G,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,G,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(3553,G,_e,me.width,me.height,0,pe,Se,me.data)}else if(M.isDataArrayTexture)Xe?(ct&&t.texStorage3D(35866,P,_e,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,pe,Se,X.data)):t.texImage3D(35866,0,_e,X.width,X.height,X.depth,0,pe,Se,X.data);else if(M.isData3DTexture)Xe?(ct&&t.texStorage3D(32879,P,_e,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,pe,Se,X.data)):t.texImage3D(32879,0,_e,X.width,X.height,X.depth,0,pe,Se,X.data);else if(M.isFramebufferTexture){if(ct)if(Xe)t.texStorage2D(3553,P,_e,X.width,X.height);else{let G=X.width,Q=X.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,_e,G,Q,0,pe,Se,null),G>>=1,Q>>=1}}else if(Ie.length>0&&ye){Xe&&ct&&t.texStorage2D(3553,P,_e,Ie[0].width,Ie[0].height);for(let G=0,Q=Ie.length;G<Q;G++)me=Ie[G],Xe?t.texSubImage2D(3553,G,0,0,pe,Se,me):t.texImage2D(3553,G,_e,pe,Se,me);M.generateMipmaps=!1}else Xe?(ct&&t.texStorage2D(3553,P,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,pe,Se,X)):t.texImage2D(3553,0,_e,pe,Se,X);T(M,ye)&&A(te),ge.__version=oe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function he(b,M,H){if(M.image.length!==6)return;const te=ue(b,M),ne=M.source;t.bindTexture(34067,b.__webglTexture,33984+H);const oe=i.get(ne);if(ne.version!==oe.__version||te===!0){t.activeTexture(33984+H),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,X=[];for(let G=0;G<6;G++)!ge&&!ce?X[G]=_(M.image[G],!1,!0,u):X[G]=ce?M.image[G].image:M.image[G],X[G]=vn(M,X[G]);const ye=X[0],pe=x(ye)||a,Se=s.convert(M.format,M.encoding),_e=s.convert(M.type),me=y(M.internalFormat,Se,_e,M.encoding),Ie=a&&M.isVideoTexture!==!0,Xe=oe.__version===void 0||te===!0;let ct=C(M,ye,pe);se(34067,M,pe);let P;if(ge){Ie&&Xe&&t.texStorage2D(34067,ct,me,ye.width,ye.height);for(let G=0;G<6;G++){P=X[G].mipmaps;for(let Q=0;Q<P.length;Q++){const ae=P[Q];M.format!==Cn?Se!==null?Ie?t.compressedTexSubImage2D(34069+G,Q,0,0,ae.width,ae.height,Se,ae.data):t.compressedTexImage2D(34069+G,Q,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+G,Q,0,0,ae.width,ae.height,Se,_e,ae.data):t.texImage2D(34069+G,Q,me,ae.width,ae.height,0,Se,_e,ae.data)}}}else{P=M.mipmaps,Ie&&Xe&&(P.length>0&&ct++,t.texStorage2D(34067,ct,me,X[0].width,X[0].height));for(let G=0;G<6;G++)if(ce){Ie?t.texSubImage2D(34069+G,0,0,0,X[G].width,X[G].height,Se,_e,X[G].data):t.texImage2D(34069+G,0,me,X[G].width,X[G].height,0,Se,_e,X[G].data);for(let Q=0;Q<P.length;Q++){const fe=P[Q].image[G].image;Ie?t.texSubImage2D(34069+G,Q+1,0,0,fe.width,fe.height,Se,_e,fe.data):t.texImage2D(34069+G,Q+1,me,fe.width,fe.height,0,Se,_e,fe.data)}}else{Ie?t.texSubImage2D(34069+G,0,0,0,Se,_e,X[G]):t.texImage2D(34069+G,0,me,Se,_e,X[G]);for(let Q=0;Q<P.length;Q++){const ae=P[Q];Ie?t.texSubImage2D(34069+G,Q+1,0,0,Se,_e,ae.image[G]):t.texImage2D(34069+G,Q+1,me,Se,_e,ae.image[G])}}}T(M,pe)&&A(34067),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function xe(b,M,H,te,ne){const oe=s.convert(H.format,H.encoding),ge=s.convert(H.type),ce=y(H.internalFormat,oe,ge,H.encoding);i.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ce,M.width,M.height,M.depth,0,oe,ge,null):t.texImage2D(ne,0,ce,M.width,M.height,0,oe,ge,null)),t.bindFramebuffer(36160,b),je(M)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,i.get(H).__webglTexture,0,Ze(M)):(ne===3553||ne>=34069&&ne<=34074)&&n.framebufferTexture2D(36160,te,ne,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(b,M,H){if(n.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(H||je(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===er?te=36012:ne.type===Ji&&(te=33190));const oe=Ze(M);je(M)?f.renderbufferStorageMultisampleEXT(36161,oe,te,M.width,M.height):n.renderbufferStorageMultisample(36161,oe,te,M.width,M.height)}else n.renderbufferStorage(36161,te,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){const te=Ze(M);H&&je(M)===!1?n.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const oe=te[ne],ge=s.convert(oe.format,oe.encoding),ce=s.convert(oe.type),X=y(oe.internalFormat,ge,ce,oe.encoding),ye=Ze(M);H&&je(M)===!1?n.renderbufferStorageMultisample(36161,ye,X,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(36161,ye,X,M.width,M.height):n.renderbufferStorage(36161,X,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Ae(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ne=Ze(M);if(M.depthTexture.format===ir)je(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):n.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===as)je(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):n.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=n.createRenderbuffer(),Te(M.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Te(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function bt(b,M,H){const te=i.get(b);M!==void 0&&xe(te.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&Fe(b)}function gn(b){const M=b.texture,H=i.get(b),te=i.get(M);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,ge=x(b)||a;if(ne){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)H.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const ce=b.texture;for(let X=0,ye=ce.length;X<ye;X++){const pe=i.get(ce[X]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&je(b)===!1){const ce=oe?M:[M];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let X=0;X<ce.length;X++){const ye=ce[X];H.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[X]);const pe=s.convert(ye.format,ye.encoding),Se=s.convert(ye.type),_e=y(ye.internalFormat,pe,Se,ye.encoding,b.isXRRenderTarget===!0),me=Ze(b);n.renderbufferStorageMultisample(36161,me,_e,b.width,b.height),n.framebufferRenderbuffer(36160,36064+X,36161,H.__webglColorRenderbuffer[X])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),se(34067,M,ge);for(let ce=0;ce<6;ce++)xe(H.__webglFramebuffer[ce],b,M,36064,34069+ce);T(M,ge)&&A(34067),t.unbindTexture()}else if(oe){const ce=b.texture;for(let X=0,ye=ce.length;X<ye;X++){const pe=ce[X],Se=i.get(pe);t.bindTexture(3553,Se.__webglTexture),se(3553,pe,ge),xe(H.__webglFramebuffer,b,pe,36064+X,3553),T(pe,ge)&&A(3553)}t.unbindTexture()}else{let ce=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ce=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),se(ce,M,ge),xe(H.__webglFramebuffer,b,M,36064,ce),T(M,ge)&&A(ce),t.unbindTexture()}b.depthBuffer&&Fe(b)}function Ot(b){const M=x(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ne=H.length;te<ne;te++){const oe=H[te];if(T(oe,M)){const ge=b.isWebGLCubeRenderTarget?34067:3553,ce=i.get(oe).__webglTexture;t.bindTexture(ge,ce),A(ge),t.unbindTexture()}}}function At(b){if(a&&b.samples>0&&je(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,te=b.height;let ne=16384;const oe=[],ge=b.stencilBuffer?33306:36096,ce=i.get(b),X=b.isWebGLMultipleRenderTargets===!0;if(X)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){oe.push(36064+ye),b.depthBuffer&&oe.push(ge);const pe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(pe===!1&&(b.depthBuffer&&(ne|=256),b.stencilBuffer&&(ne|=1024)),X&&n.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[ye]),pe===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),X){const Se=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Se,0)}n.blitFramebuffer(0,0,H,te,0,0,H,te,ne,9728),g&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,ce.__webglColorRenderbuffer[ye]);const pe=i.get(M[ye]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,pe,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function Ze(b){return Math.min(d,b.samples)}function je(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pn(b){const M=o.render.frame;S.get(b)!==M&&(S.set(b,M),b.update())}function vn(b,M){const H=b.encoding,te=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===gc||H!==cr&&(H===Ge?a===!1?e.has("EXT_sRGB")===!0&&te===Cn?(b.format=gc,b.minFilter=cn,b.generateMipmaps=!1):M=yg.sRGBToLinear(M):(te!==Cn||ne!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=D,this.resetTextureUnits=J,this.setTexture2D=O,this.setTexture2DArray=re,this.setTexture3D=R,this.setTextureCube=Z,this.rebindTextures=bt,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je}function cw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ur)return 5121;if(s===Z_)return 32819;if(s===K_)return 32820;if(s===q_)return 5120;if(s===$_)return 5122;if(s===gg)return 5123;if(s===Y_)return 5124;if(s===Ji)return 5125;if(s===er)return 5126;if(s===co)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Q_)return 6406;if(s===Cn)return 6408;if(s===J_)return 6409;if(s===ex)return 6410;if(s===ir)return 6402;if(s===as)return 34041;if(s===gc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tx)return 6403;if(s===nx)return 36244;if(s===ix)return 33319;if(s===rx)return 33320;if(s===sx)return 36249;if(s===Ol||s===Bl||s===Vl||s===Gl)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vd||s===Gd||s===Hd||s===Wd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ox)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jd||s===Xd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jd)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qd||s===$d||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$d)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eh)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===th)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nh)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ih)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rh)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sh)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oh)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hl)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ax||s===ah||s===lh||s===uh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class fw extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dw={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,S=.005;u.inputState.pinching&&f>g+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class hw extends tn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ir,c!==ir&&c!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ir&&(i=Ji),i===void 0&&c===as&&(i=Zr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class pw extends ds{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,S=null;const h=t.getContextAttributes();let p=null,m=null;const v=[],_=[],x=new Set,w=new Map,T=new fn;T.layers.enable(1),T.viewport=new mt;const A=new fn;A.layers.enable(2),A.viewport=new mt;const y=[T,A],C=new fw;C.layers.enable(1),C.layers.enable(2);let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let Z=v[R];return Z===void 0&&(Z=new mu,v[R]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(R){let Z=v[R];return Z===void 0&&(Z=new mu,v[R]=Z),Z.getGripSpace()},this.getHand=function(R){let Z=v[R];return Z===void 0&&(Z=new mu,v[R]=Z),Z.getHandSpace()};function $(R){const Z=_.indexOf(R.inputSource);if(Z===-1)return;const ee=v[Z];ee!==void 0&&ee.dispatchEvent({type:R.type,data:R.inputSource})}function U(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let R=0;R<v.length;R++){const Z=_[R];Z!==null&&(_[R]=null,v[R].disconnect(Z))}L=null,q=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(R){u=R},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:g}),m=new fr(g.framebufferWidth,g.framebufferHeight,{format:Cn,type:ur,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Z=null,ee=null,z=null;h.depth&&(z=h.stencil?35056:33190,Z=h.stencil?as:ir,ee=h.stencil?Zr:Ji);const se={colorFormat:32856,depthFormat:z,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(se),r.updateRenderState({layers:[f]}),m=new fr(f.textureWidth,f.textureHeight,{format:Cn,type:ur,depthTexture:new hw(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ue=e.properties.get(m);ue.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(R){for(let Z=0;Z<R.removed.length;Z++){const ee=R.removed[Z],z=_.indexOf(ee);z>=0&&(_[z]=null,v[z].disconnect(ee))}for(let Z=0;Z<R.added.length;Z++){const ee=R.added[Z];let z=_.indexOf(ee);if(z===-1){for(let ue=0;ue<v.length;ue++)if(ue>=_.length){_.push(ee),z=ue;break}else if(_[ue]===null){_[ue]=ee,z=ue;break}if(z===-1)break}const se=v[z];se&&se.connect(ee)}}const j=new k,Y=new k;function J(R,Z,ee){j.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const z=j.distanceTo(Y),se=Z.projectionMatrix.elements,ue=ee.projectionMatrix.elements,de=se[14]/(se[10]-1),he=se[14]/(se[10]+1),xe=(se[9]+1)/se[5],Te=(se[9]-1)/se[5],Ae=(se[8]-1)/se[0],Fe=(ue[8]+1)/ue[0],bt=de*Ae,gn=de*Fe,Ot=z/(-Ae+Fe),At=Ot*-Ae;Z.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(At),R.translateZ(Ot),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Ze=de+Ot,je=he+Ot,Pn=bt-At,vn=gn+(z-At),b=xe*he/je*Ze,M=Te*he/je*Ze;R.projectionMatrix.makePerspective(Pn,vn,b,M,Ze,je)}function D(R,Z){Z===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(Z.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;C.near=A.near=T.near=R.near,C.far=A.far=T.far=R.far,(L!==C.near||q!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,q=C.far);const Z=R.parent,ee=C.cameras;D(C,Z);for(let se=0;se<ee.length;se++)D(ee[se],Z);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),R.matrix.copy(C.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const z=R.children;for(let se=0,ue=z.length;se<ue;se++)z[se].updateMatrixWorld(!0);ee.length===2?J(C,T,A):C.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(R){l=R,f!==null&&(f.fixedFoveation=R),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=R)},this.getPlanes=function(){return x};let B=null;function O(R,Z){if(c=Z.getViewerPose(u||o),S=Z,c!==null){const ee=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let z=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,z=!0);for(let se=0;se<ee.length;se++){const ue=ee[se];let de=null;if(g!==null)de=g.getViewport(ue);else{const xe=d.getViewSubImage(f,ue);de=xe.viewport,se===0&&(e.setRenderTargetTextures(m,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(m))}let he=y[se];he===void 0&&(he=new fn,he.layers.enable(se),he.viewport=new mt,y[se]=he),he.matrix.fromArray(ue.transform.matrix),he.projectionMatrix.fromArray(ue.projectionMatrix),he.viewport.set(de.x,de.y,de.width,de.height),se===0&&C.matrix.copy(he.matrix),z===!0&&C.cameras.push(he)}}for(let ee=0;ee<v.length;ee++){const z=_[ee],se=v[ee];z!==null&&se!==void 0&&se.update(z,Z,u||o)}if(B&&B(R,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ee=null;for(const z of x)Z.detectedPlanes.has(z)||(ee===null&&(ee=[]),ee.push(z));if(ee!==null)for(const z of ee)x.delete(z),w.delete(z),i.dispatchEvent({type:"planeremoved",data:z});for(const z of Z.detectedPlanes)if(!x.has(z))x.add(z),w.set(z,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:z});else{const se=w.get(z);z.lastChangedTime>se&&(w.set(z,z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:z}))}}S=null}const re=new Dg;re.setAnimationLoop(O),this.setAnimationLoop=function(R){B=R},this.dispose=function(){}}}function mw(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,Ag(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),S(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===en&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===en&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===en&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function S(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function gw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(S(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",p));const w=_.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function c(v){const _=d();v.__bindingPointIndex=_;const x=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(35345,x),n.bufferData(35345,w,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],x=v.uniforms,w=v.__cache;n.bindBuffer(35345,_);for(let T=0,A=x.length;T<A;T++){const y=x[T];if(g(y,T,w)===!0){const C=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let q=0;for(let $=0;$<L.length;$++){const U=L[$],N=h(U);typeof U=="number"?(y.__data[0]=U,n.bufferSubData(35345,C+q,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=U.elements[0],y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=U.elements[0],y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=U.elements[0]):(U.toArray(y.__data,q),q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,y.__data)}}n.bindBuffer(35345,null)}function g(v,_,x){const w=v.value;if(x[_]===void 0){if(typeof w=="number")x[_]=w;else{const T=Array.isArray(w)?w:[w],A=[];for(let y=0;y<T.length;y++)A.push(T[y].clone());x[_]=A}return!0}else if(typeof w=="number"){if(x[_]!==w)return x[_]=w,!0}else{const T=Array.isArray(x[_])?x[_]:[x[_]],A=Array.isArray(w)?w:[w];for(let y=0;y<T.length;y++){const C=T[y];if(C.equals(A[y])===!1)return C.copy(A[y]),!0}}return!1}function S(v){const _=v.uniforms;let x=0;const w=16;let T=0;for(let A=0,y=_.length;A<y;A++){const C=_[A],L={boundary:0,storage:0},q=Array.isArray(C.value)?C.value:[C.value];for(let $=0,U=q.length;$<U;$++){const N=q[$],j=h(N);L.boundary+=j.boundary,L.storage+=j.storage}if(C.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,A>0){T=x%w;const $=w-T;T!==0&&$-L.boundary<0&&(x+=w-T,C.__offset=x)}x+=L.storage}return T=x%w,T>0&&(x+=w-T),v.__size=x,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function vw(){const n=Ga("canvas");return n.style.display="block",n}function Sf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:vw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=cr,this.useLegacyLights=!0,this.toneMapping=oi,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,x=-1,w=null;const T=new mt,A=new mt;let y=null,C=e.width,L=e.height,q=1,$=null,U=null;const N=new mt(0,0,C,L),j=new mt(0,0,C,L);let Y=!1;const J=new _f;let D=!1,B=!1,O=null;const re=new at,R=new k,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return _===null?q:1}let z=t;function se(E,F){for(let V=0;V<E.length;V++){const I=E[V],W=e.getContext(I,F);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mf}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",me,!1),z===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),z=se(F,E),z===null)throw se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ue,de,he,xe,Te,Ae,Fe,bt,gn,Ot,At,Ze,je,Pn,vn,b,M,H,te,ne,oe,ge,ce,X;function ye(){ue=new A1(z),de=new M1(z,ue,n),ue.init(de),ge=new cw(z,ue,de),he=new lw(z,ue,de),xe=new D1,Te=new $M,Ae=new uw(z,ue,he,Te,de,ge,xe),Fe=new E1(h),bt=new b1(h),gn=new Bx(z,de),ce=new y1(z,ue,gn,de),Ot=new L1(z,gn,xe,ce),At=new z1(z,Ot,gn,xe),te=new N1(z,de,Ae),b=new w1(Te),Ze=new qM(h,Fe,bt,ue,de,ce,b),je=new mw(h,Te),Pn=new ZM,vn=new nw(ue,de),H=new x1(h,Fe,bt,he,At,c,o),M=new aw(h,At,de),X=new gw(z,xe,de,he),ne=new S1(z,ue,xe,de),oe=new P1(z,ue,xe,de),xe.programs=Ze.programs,h.capabilities=de,h.extensions=ue,h.properties=Te,h.renderLists=Pn,h.shadowMap=M,h.state=he,h.info=xe}ye();const pe=new pw(h,z);this.xr=pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(C,L,!1))},this.getSize=function(E){return E.set(C,L)},this.setSize=function(E,F,V=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,L=F,e.width=Math.floor(E*q),e.height=Math.floor(F*q),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(C*q,L*q).floor()},this.setDrawingBufferSize=function(E,F,V){C=E,L=F,q=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,F,V,I){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,F,V,I),he.viewport(T.copy(N).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,F,V,I){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,V,I),he.scissor(A.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){he.setScissorTest(Y=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(E=!0,F=!0,V=!0){let I=0;E&&(I|=16384),F&&(I|=256),V&&(I|=1024),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Pn.dispose(),vn.dispose(),Te.dispose(),Fe.dispose(),bt.dispose(),At.dispose(),ce.dispose(),X.dispose(),Ze.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Q),pe.removeEventListener("sessionend",ae),O&&(O.dispose(),O=null),fe.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=xe.autoReset,F=M.enabled,V=M.autoUpdate,I=M.needsUpdate,W=M.type;ye(),xe.autoReset=E,M.enabled=F,M.autoUpdate=V,M.needsUpdate=I,M.type=W}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const F=E.target;F.removeEventListener("dispose",Ie),Xe(F)}function Xe(E){ct(E),Te.remove(E)}function ct(E){const F=Te.get(E).programs;F!==void 0&&(F.forEach(function(V){Ze.releaseProgram(V)}),E.isShaderMaterial&&Ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,I,W,ve){F===null&&(F=Z);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Ug(E,F,V,I,W);he.setMaterial(I,Me);let Ce=V.index,Ne=1;I.wireframe===!0&&(Ce=Ot.getWireframeAttribute(V),Ne=2);const Le=V.drawRange,Pe=V.attributes.position;let tt=Le.start*Ne,Xt=(Le.start+Le.count)*Ne;ve!==null&&(tt=Math.max(tt,ve.start*Ne),Xt=Math.min(Xt,(ve.start+ve.count)*Ne)),Ce!==null?(tt=Math.max(tt,0),Xt=Math.min(Xt,Ce.count)):Pe!=null&&(tt=Math.max(tt,0),Xt=Math.min(Xt,Pe.count));const jn=Xt-tt;if(jn<0||jn===1/0)return;ce.setup(W,I,Ee,V,Ce);let Bi,nt=ne;if(Ce!==null&&(Bi=gn.get(Ce),nt=oe,nt.setIndex(Bi)),W.isMesh)I.wireframe===!0?(he.setLineWidth(I.wireframeLinewidth*ee()),nt.setMode(1)):nt.setMode(4);else if(W.isLine){let De=I.linewidth;De===void 0&&(De=1),he.setLineWidth(De*ee()),W.isLineSegments?nt.setMode(1):W.isLineLoop?nt.setMode(2):nt.setMode(3)}else W.isPoints?nt.setMode(0):W.isSprite&&nt.setMode(4);if(W.isInstancedMesh)nt.renderInstances(tt,jn,W.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ll=Math.min(V.instanceCount,De);nt.renderInstances(tt,jn,ll)}else nt.render(tt,jn)},this.compile=function(E,F){function V(I,W,ve){I.transparent===!0&&I.side===ii&&I.forceSinglePass===!1?(I.side=en,I.needsUpdate=!0,on(I,W,ve),I.side=zi,I.needsUpdate=!0,on(I,W,ve),I.side=ii):on(I,W,ve)}f=vn.get(E),f.init(),S.push(f),E.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(h.useLegacyLights),E.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let ve=0;ve<W.length;ve++){const Me=W[ve];V(Me,E,I)}else V(W,E,I)}),S.pop(),f=null};let P=null;function G(E){P&&P(E)}function Q(){fe.stop()}function ae(){fe.start()}const fe=new Dg;fe.setAnimationLoop(G),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(E){P=E,pe.setAnimationLoop(E),E===null?fe.stop():fe.start()},pe.addEventListener("sessionstart",Q),pe.addEventListener("sessionend",ae),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,F,_),f=vn.get(E,S.length),f.init(),S.push(f),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(re),B=this.localClippingEnabled,D=b.init(this.clippingPlanes,B),d=Pn.get(E,g.length),d.init(),g.push(d),Be(E,F,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort($,U),D===!0&&b.beginShadows();const V=f.state.shadowsArray;if(M.render(V,E,F),D===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(d,E),f.setupLights(h.useLegacyLights),F.isArrayCamera){const I=F.cameras;for(let W=0,ve=I.length;W<ve;W++){const Me=I[W];ft(d,E,Me,Me.viewport)}}else ft(d,E,F);_!==null&&(Ae.updateMultisampleRenderTarget(_),Ae.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,F),ce.resetDefaultState(),x=-1,w=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Be(E,F,V,I){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){I&&R.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Me=At.update(E),Ee=E.material;Ee.visible&&d.push(E,Me,Ee,V,R.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==xe.render.frame&&(E.skeleton.update(),E.skeleton.frame=xe.render.frame),!E.frustumCulled||J.intersectsObject(E))){I&&R.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Me=At.update(E),Ee=E.material;if(Array.isArray(Ee)){const Ce=Me.groups;for(let Ne=0,Le=Ce.length;Ne<Le;Ne++){const Pe=Ce[Ne],tt=Ee[Pe.materialIndex];tt&&tt.visible&&d.push(E,Me,tt,V,R.z,Pe)}}else Ee.visible&&d.push(E,Me,Ee,V,R.z,null)}}const ve=E.children;for(let Me=0,Ee=ve.length;Me<Ee;Me++)Be(ve[Me],F,V,I)}function ft(E,F,V,I){const W=E.opaque,ve=E.transmissive,Me=E.transparent;f.setupLightsView(V),D===!0&&b.setGlobalState(h.clippingPlanes,V),ve.length>0&&Lt(W,F,V),I&&he.viewport(T.copy(I)),W.length>0&&Dn(W,F,V),ve.length>0&&Dn(ve,F,V),Me.length>0&&Dn(Me,F,V),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Lt(E,F,V){const I=de.isWebGL2;O===null&&(O=new fr(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?co:ur,minFilter:uo,samples:I&&s===!0?4:0}));const W=h.getRenderTarget();h.setRenderTarget(O),h.clear();const ve=h.toneMapping;h.toneMapping=oi,Dn(E,F,V),h.toneMapping=ve,Ae.updateMultisampleRenderTarget(O),Ae.updateRenderTargetMipmap(O),h.setRenderTarget(W)}function Dn(E,F,V){const I=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ve=E.length;W<ve;W++){const Me=E[W],Ee=Me.object,Ce=Me.geometry,Ne=I===null?Me.material:I,Le=Me.group;Ee.layers.test(V.layers)&&Je(Ee,F,V,Ce,Ne,Le)}}function Je(E,F,V,I,W,ve){E.onBeforeRender(h,F,V,I,W,ve),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(h,F,V,I,E,ve),W.transparent===!0&&W.side===ii&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,h.renderBufferDirect(V,F,I,W,E,ve),W.side=zi,W.needsUpdate=!0,h.renderBufferDirect(V,F,I,W,E,ve),W.side=ii):h.renderBufferDirect(V,F,I,W,E,ve),E.onAfterRender(h,F,V,I,W,ve)}function on(E,F,V){F.isScene!==!0&&(F=Z);const I=Te.get(E),W=f.state.lights,ve=f.state.shadowsArray,Me=W.state.version,Ee=Ze.getParameters(E,W.state,ve,F,V),Ce=Ze.getProgramCacheKey(Ee);let Ne=I.programs;I.environment=E.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(E.isMeshStandardMaterial?bt:Fe).get(E.envMap||I.environment),Ne===void 0&&(E.addEventListener("dispose",Ie),Ne=new Map,I.programs=Ne);let Le=Ne.get(Ce);if(Le!==void 0){if(I.currentProgram===Le&&I.lightsStateVersion===Me)return Rn(E,Ee),Le}else Ee.uniforms=Ze.getUniforms(E),E.onBuild(V,Ee,h),E.onBeforeCompile(Ee,h),Le=Ze.acquireProgram(Ee,Ce),Ne.set(Ce,Le),I.uniforms=Ee.uniforms;const Pe=I.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=b.uniform),Rn(E,Ee),I.needsLights=Bg(E),I.lightsStateVersion=Me,I.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const tt=Le.getUniforms(),Xt=va.seqWithValue(tt.seq,Pe);return I.currentProgram=Le,I.uniformsList=Xt,Le}function Rn(E,F){const V=Te.get(E);V.outputEncoding=F.outputEncoding,V.instancing=F.instancing,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Ug(E,F,V,I,W){F.isScene!==!0&&(F=Z),Ae.resetTextureUnits();const ve=F.fog,Me=I.isMeshStandardMaterial?F.environment:null,Ee=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:cr,Ce=(I.isMeshStandardMaterial?bt:Fe).get(I.envMap||Me),Ne=I.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!I.normalMap&&!!V.attributes.tangent,Pe=!!V.morphAttributes.position,tt=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color,jn=I.toneMapped?h.toneMapping:oi,Bi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=Bi!==void 0?Bi.length:0,De=Te.get(I),ll=f.state.lights;if(D===!0&&(B===!0||E!==w)){const qt=E===w&&I.id===x;b.setState(I,E,qt)}let dt=!1;I.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ll.state.version||De.outputEncoding!==Ee||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ce||I.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==b.numPlanes||De.numIntersection!==b.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Le||De.morphTargets!==Pe||De.morphNormals!==tt||De.morphColors!==Xt||De.toneMapping!==jn||de.isWebGL2===!0&&De.morphTargetsCount!==nt)&&(dt=!0):(dt=!0,De.__version=I.version);let Vi=De.currentProgram;dt===!0&&(Vi=on(I,F,W));let wf=!1,ps=!1,ul=!1;const Pt=Vi.getUniforms(),Gi=De.uniforms;if(he.useProgram(Vi.program)&&(wf=!0,ps=!0,ul=!0),I.id!==x&&(x=I.id,ps=!0),wf||w!==E){if(Pt.setValue(z,"projectionMatrix",E.projectionMatrix),de.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,ps=!0,ul=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const qt=Pt.map.cameraPosition;qt!==void 0&&qt.setValue(z,R.setFromMatrixPosition(E.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&Pt.setValue(z,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){Pt.setOptional(z,W,"bindMatrix"),Pt.setOptional(z,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(de.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Pt.setValue(z,"boneTexture",qt.boneTexture,Ae),Pt.setValue(z,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cl=V.morphAttributes;if((cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&de.isWebGL2===!0)&&te.update(W,V,Vi),(ps||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,Pt.setValue(z,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Gi.envMap.value=Ce,Gi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ps&&(Pt.setValue(z,"toneMappingExposure",h.toneMappingExposure),De.needsLights&&Og(Gi,ul),ve&&I.fog===!0&&je.refreshFogUniforms(Gi,ve),je.refreshMaterialUniforms(Gi,I,q,L,O),va.upload(z,De.uniformsList,Gi,Ae)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(va.upload(z,De.uniformsList,Gi,Ae),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Pt.setValue(z,"center",W.center),Pt.setValue(z,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(z,"normalMatrix",W.normalMatrix),Pt.setValue(z,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const qt=I.uniformsGroups;for(let fl=0,Vg=qt.length;fl<Vg;fl++)if(de.isWebGL2){const Ef=qt[fl];X.update(Ef,Vi),X.bind(Ef,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function Og(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Bg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,F,V){Te.get(E.texture).__webglTexture=F,Te.get(E.depthTexture).__webglTexture=V;const I=Te.get(E);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=V===void 0,I.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const V=Te.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){_=E,m=F,v=V;let I=!0,W=null,ve=!1,Me=!1;if(E){const Ce=Te.get(E);Ce.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),I=!1):Ce.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):Ce.__hasExternalTextures&&Ae.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Le=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Le[F],ve=!0):de.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?W=Te.get(E).__webglMultisampledFramebuffer:W=Le,T.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else T.copy(N).multiplyScalar(q).floor(),A.copy(j).multiplyScalar(q).floor(),y=Y;if(he.bindFramebuffer(36160,W)&&de.drawBuffers&&I&&he.drawBuffers(E,W),he.viewport(T),he.scissor(A),he.setScissorTest(y),ve){const Ce=Te.get(E.texture);z.framebufferTexture2D(36160,36064,34069+F,Ce.__webglTexture,V)}else if(Me){const Ce=Te.get(E.texture),Ne=F||0;z.framebufferTextureLayer(36160,36064,Ce.__webglTexture,V||0,Ne)}x=-1},this.readRenderTargetPixels=function(E,F,V,I,W,ve,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){he.bindFramebuffer(36160,Ee);try{const Ce=E.texture,Ne=Ce.format,Le=Ce.type;if(Ne!==Cn&&ge.convert(Ne)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===co&&(ue.has("EXT_color_buffer_half_float")||de.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Le!==ur&&ge.convert(Le)!==z.getParameter(35738)&&!(Le===er&&(de.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-I&&V>=0&&V<=E.height-W&&z.readPixels(F,V,I,W,ge.convert(Ne),ge.convert(Le),ve)}finally{const Ce=_!==null?Te.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(E,F,V=0){const I=Math.pow(2,-V),W=Math.floor(F.image.width*I),ve=Math.floor(F.image.height*I);Ae.setTexture2D(F,0),z.copyTexSubImage2D(3553,V,0,0,E.x,E.y,W,ve),he.unbindTexture()},this.copyTextureToTexture=function(E,F,V,I=0){const W=F.image.width,ve=F.image.height,Me=ge.convert(V.format),Ee=ge.convert(V.type);Ae.setTexture2D(V,0),z.pixelStorei(37440,V.flipY),z.pixelStorei(37441,V.premultiplyAlpha),z.pixelStorei(3317,V.unpackAlignment),F.isDataTexture?z.texSubImage2D(3553,I,E.x,E.y,W,ve,Me,Ee,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(3553,I,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):z.texSubImage2D(3553,I,E.x,E.y,Me,Ee,F.image),I===0&&V.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V,I,W=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,Ce=ge.convert(I.format),Ne=ge.convert(I.type);let Le;if(I.isData3DTexture)Ae.setTexture3D(I,0),Le=32879;else if(I.isDataArrayTexture)Ae.setTexture2DArray(I,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment);const Pe=z.getParameter(3314),tt=z.getParameter(32878),Xt=z.getParameter(3316),jn=z.getParameter(3315),Bi=z.getParameter(32877),nt=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(3314,nt.width),z.pixelStorei(32878,nt.height),z.pixelStorei(3316,E.min.x),z.pixelStorei(3315,E.min.y),z.pixelStorei(32877,E.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Le,W,F.x,F.y,F.z,ve,Me,Ee,Ce,Ne,nt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Le,W,F.x,F.y,F.z,ve,Me,Ee,Ce,nt.data)):z.texSubImage3D(Le,W,F.x,F.y,F.z,ve,Me,Ee,Ce,Ne,nt),z.pixelStorei(3314,Pe),z.pixelStorei(32878,tt),z.pixelStorei(3316,Xt),z.pixelStorei(3315,jn),z.pixelStorei(32877,Bi),W===0&&I.generateMipmaps&&z.generateMipmap(Le),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,he.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Sf.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class _w extends Sf{}_w.prototype.isWebGL1Renderer=!0;class xw extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Mf extends Oi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new k,f=new k,g=[],S=[],h=[],p=[];for(let m=0;m<=i;m++){const v=[],_=m/i;let x=0;m==0&&o==0?x=.5/t:m==i&&l==Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),S.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(T+x,1-_),v.push(u++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const _=c[m][v+1],x=c[m][v],w=c[m+1][v],T=c[m+1][v+1];(m!==0||o>0)&&g.push(_,x,T),(m!==i-1||l<Math.PI)&&g.push(x,w,T)}this.setIndex(g),this.setAttribute("position",new Wn(S,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yw extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kg extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const gu=new at,qh=new k,$h=new k;class Sw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(qh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mw extends Sw{constructor(){super(new Rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ww extends kg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Mw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ew extends kg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tw{constructor(e,t,i=0,r=1/0){this.ray=new wg(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return _c(e,this,i,t),i.sort(Yh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)_c(e[r],this,i,t);return i.sort(Yh),i}}function Yh(n,e){return n.distance-e.distance}function _c(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)_c(r[s],e,t,!0)}}class Zh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);const xc={background:"#111111",text:"#ffffff",layers:[{color:new ze("#EA4C5F"),name:"Skills"},{color:new ze("#8E3B66"),name:"Projects"},{color:new ze("#532F4C"),name:"About"},{color:new ze("#333333"),name:"Contact"},{color:new ze("#CCCCCC"),name:"Home"}]},Kh={Home:{title:"Stefan Mladenovski",subtitle:"Data Analyst at A1",description:"Drag the orb to look inside. Hover a layer to see the menu and click to navigate."},Skills:{title:"Technical Skills",description:"A deep proficiency in the essential tools and languages for modern data analysis, from data wrangling to visualization.",items:["Python (Pandas, NumPy)","SQL","Power BI","Microsoft Excel","Tableau","Bash Scripting","Data Warehousing","ETL Processes"]},Projects:{title:"Projects",description:"A selection of projects demonstrating my ability to transform raw data into actionable business insights.",items:[{name:"Sales Dashboard Automation",desc:"Developed an automated pipeline using Python and SQL to feed a real-time Power BI dashboard, reducing manual reporting time by 90%."},{name:"Customer Segmentation Analysis",desc:"Utilized clustering algorithms in Python to identify key customer segments, leading to a 15% increase in targeted marketing campaign effectiveness."},{name:"Operational Efficiency Report",desc:"Created comprehensive reports in Excel and Power BI to track KPIs, identifying bottlenecks and enabling a 20% improvement in process efficiency."}]},About:{title:"About Me",description:"I am a detail-oriented Data Analyst at A1 with a passion for uncovering the stories hidden within data. My expertise lies in transforming complex datasets into clear, actionable insights using tools like Python, SQL, and Power BI. I thrive on solving business challenges and am always eager to leverage my analytical skills to drive strategic decisions. When I'm not wrangling data, I enjoy exploring new technologies and contributing to open-source projects."},Contact:{title:"Get In Touch",description:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.",items:[{type:"Email",value:"stefan.mladenovski@example.com"},{type:"LinkedIn",value:"/in/stefan-mladenovski"},{type:"GitHub",value:"@stefan-mladenovski"}]}},vu=(n,e,t)=>(1-t)*n+t*e;class Cw{constructor(e,t){this.camera=e,this.domElement=t,this.enableDamping=!0,this.dampingFactor=.08,this.enablePan=!1,this.enableZoom=!1,this.minDistance=8,this.maxDistance=25,this.spherical=new Zh,this.sphericalDelta=new Zh,this.target=new k,this.offset=new k,this.rotateSpeed=.2,this.isMouseDown=!1,this.isTouchDown=!1,this.mouseButtons={LEFT:g_.ROTATE},this.lastMousePosition={x:0,y:0},this.lastTouchPosition={x:0,y:0},this.handleMouseDown=i=>{i.button===0&&(this.isMouseDown=!0,this.lastMousePosition.x=i.clientX,this.lastMousePosition.y=i.clientY)},this.handleMouseMove=i=>{if(!this.isMouseDown)return;const r=i.clientX-this.lastMousePosition.x,s=i.clientY-this.lastMousePosition.y;this.sphericalDelta.theta-=2*Math.PI*r/this.domElement.clientHeight*this.rotateSpeed,this.sphericalDelta.phi-=2*Math.PI*s/this.domElement.clientHeight*this.rotateSpeed,this.lastMousePosition.x=i.clientX,this.lastMousePosition.y=i.clientY},this.handleMouseUp=()=>{this.isMouseDown=!1},this.handleTouchStart=i=>{i.touches.length===1&&(this.isTouchDown=!0,this.lastTouchPosition.x=i.touches[0].clientX,this.lastTouchPosition.y=i.touches[0].clientY)},this.handleTouchMove=i=>{if(!this.isTouchDown||i.touches.length!==1)return;i.preventDefault();const r=i.touches[0].clientX-this.lastTouchPosition.x,s=i.touches[0].clientY-this.lastTouchPosition.y;this.sphericalDelta.theta-=2*Math.PI*r/this.domElement.clientHeight*this.rotateSpeed,this.sphericalDelta.phi-=2*Math.PI*s/this.domElement.clientHeight*this.rotateSpeed,this.lastTouchPosition.x=i.touches[0].clientX,this.lastTouchPosition.y=i.touches[0].clientY},this.handleTouchEnd=()=>{this.isTouchDown=!1},this.domElement.addEventListener("mousedown",this.handleMouseDown),this.domElement.addEventListener("mousemove",this.handleMouseMove),this.domElement.addEventListener("mouseup",this.handleMouseUp),this.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.domElement.addEventListener("touchend",this.handleTouchEnd),this.domElement.addEventListener("contextmenu",i=>i.preventDefault()),this.offset.copy(this.camera.position).sub(this.target),this.spherical.setFromVector3(this.offset)}update(){return this.offset.copy(this.camera.position).sub(this.target),this.spherical.setFromVector3(this.offset),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.phi=Math.max(.1,Math.min(Math.PI-.1,this.spherical.phi)),this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.offset.setFromSpherical(this.spherical),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.enableDamping?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),!1}dispose(){this.domElement.removeEventListener("mousedown",this.handleMouseDown),this.domElement.removeEventListener("mousemove",this.handleMouseMove),this.domElement.removeEventListener("mouseup",this.handleMouseUp),this.domElement.removeEventListener("touchstart",this.handleTouchStart),this.domElement.removeEventListener("touchmove",this.handleTouchMove),this.domElement.removeEventListener("touchend",this.handleTouchEnd)}}const bw=({setActivePage:n})=>{const e=kn.useRef(null),t=kn.useRef(null),i=kn.useMemo(()=>new Tw,[]),r=kn.useMemo(()=>new Ue,[]),s=kn.useRef(null);return kn.useEffect(()=>{const o=e.current;if(!o)return;const a=new xw,l=new fn(40,o.clientWidth/o.clientHeight,1,200);l.position.set(0,0,15);const u=new Sf({antialias:!0,alpha:!0});u.setSize(o.clientWidth,o.clientHeight),u.setPixelRatio(window.devicePixelRatio),u.localClippingEnabled=!0,o.appendChild(u.domElement);const c=new Cw(l,u.domElement);a.add(new Ew(16777215,.6));const d=new ww(16777215,1.2);d.position.set(5,10,7.5),a.add(d);const f=[new Un(new k(1,0,0),0),new Un(new k(0,-1,0),0),new Un(new k(0,0,-1),0)];s.current=new Fs,a.add(s.current);const g=3,S=.4;xc.layers.forEach((w,T)=>{const A=g-T*S;if(A<=0)return;const y=new Mf(A,128,128),C=new yw({color:w.color,metalness:.2,roughness:.4,clippingPlanes:f,clipIntersection:!0,side:ii,transparent:!0,opacity:.8}),L=new ri(y,C);L.userData={layerIndex:T,layerName:w.name,originalRadius:A},s.current.add(L)});const h=()=>{l.aspect=o.clientWidth/o.clientHeight,l.updateProjectionMatrix(),u.setSize(o.clientWidth,o.clientHeight)},p=w=>{const T=o.getBoundingClientRect();let A,y;return w.touches&&w.touches.length>0?(A=w.touches[0].clientX,y=w.touches[0].clientY):(A=w.clientX,y=w.clientY),{x:(A-T.left)/T.width*2-1,y:-((y-T.top)/T.height)*2+1}},m=w=>{const T=p(w);r.x=T.x,r.y=T.y,i.setFromCamera(r,l);const A=i.intersectObjects(s.current.children);if(A.length>0){let y=null;for(const C of A){const L=C.point;if(L.x>=0||L.y<=0||L.z<=0){y=C;break}}y?t.current=y.object.userData.layerIndex:t.current=null}else t.current=null},v=w=>{const T=p(w);i.setFromCamera({x:T.x,y:T.y},l);const A=i.intersectObjects(s.current.children);if(A.length>0){let y=null;for(const C of A){const L=C.point;if(L.x>=0||L.y<=0||L.z<=0){y=C;break}}if(y){const C=xc.layers[y.object.userData.layerIndex].name;n(C)}}};window.addEventListener("resize",h),o.addEventListener("mousemove",m),o.addEventListener("touchmove",m,{passive:!0}),o.addEventListener("click",v),o.addEventListener("touchend",v);let _;const x=()=>{_=requestAnimationFrame(x),c.update();const w=t.current;s.current&&s.current.children.length>0&&s.current.children.forEach((T,A)=>{const y=A===w,C=y?1.3:1;T.scale.x=vu(T.scale.x,C,.12),T.scale.y=vu(T.scale.y,C,.12),T.scale.z=vu(T.scale.z,C,.12),y?(T.material.emissive.copy(T.material.color).multiplyScalar(.25),T.material.opacity=.95,T.material.metalness=.4):(T.material.emissive.setHex(0),T.material.opacity=.8,T.material.metalness=.2)}),u.render(a,l)};return x(),()=>{cancelAnimationFrame(_),c.dispose(),window.removeEventListener("resize",h),o&&(o.removeEventListener("mousemove",m),o.removeEventListener("touchmove",m),o.removeEventListener("click",v),o.removeEventListener("touchend",v),u.domElement&&o.removeChild(u.domElement))}},[n,r,i]),Ke("div",{ref:e,className:"absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"})};function Aw(){const[n,e]=kn.useState("Home"),t=()=>{const i=Kh[n]||Kh.Home;return Xn("div",{className:"w-full max-w-4xl mx-auto animate-fadeIn px-4 sm:px-6 lg:px-8",children:[Ke("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight",children:i.title}),i.subtitle&&Ke("h2",{className:"text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4",children:i.subtitle}),Ke("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed",children:i.description}),n==="Projects"&&i.items.map((r,s)=>Xn("div",{className:"mb-4 p-3 sm:p-4 border-l-2 border-pink-500 bg-gray-800/30 rounded-r-lg",children:[Ke("h3",{className:"font-semibold text-white text-sm sm:text-base md:text-lg mb-1",children:r.name}),Ke("p",{className:"text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed",children:r.desc})]},s)),n==="Skills"&&Ke("div",{className:"flex flex-wrap gap-2 sm:gap-3",children:i.items.map((r,s)=>Ke("span",{className:"bg-gray-700/50 text-gray-200 py-1 sm:py-2 px-2 sm:px-3 md:px-4 rounded-full text-xs sm:text-sm transition-all hover:bg-gray-600/50",children:r},s))}),n==="Contact"&&i.items.map((r,s)=>Xn("div",{className:"mb-2 text-sm sm:text-base md:text-lg",children:[Xn("span",{className:"font-semibold text-white",children:[r.type,": "]}),Ke("span",{className:"text-gray-300",children:r.value})]},s))]},n)};return Xn("div",{className:"font-sans bg-gray-900 min-h-screen text-white flex flex-col items-center relative overflow-hidden",children:[Ke("style",{children:`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
              .font-sans { font-family: 'Inter', sans-serif; }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
              .touch-none { touch-action: none; }
              
              /* Improved mobile scrolling */
              @media (max-width: 768px) {
                .touch-none { touch-action: pan-y; }
              }
            `}),Xn("div",{className:"relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] flex-shrink-0",children:[Ke(bw,{setActivePage:e}),Xn("div",{className:"absolute top-2 sm:top-4 left-2 sm:left-4 z-10 text-white",children:[Xn("div",{className:"text-xs sm:text-sm opacity-70 mb-1 sm:mb-2",children:[Ke("span",{className:"hidden sm:inline",children:"Hover/Touch layers to explore"}),Ke("span",{className:"sm:hidden",children:"Touch layers to explore"})]}),xc.layers.map((i,r)=>Xn("div",{className:"flex items-center gap-1 sm:gap-2 text-xs sm:text-sm cursor-pointer hover:opacity-100 opacity-60 transition-all duration-200 mb-1 p-1 rounded hover:bg-gray-800/30",onClick:()=>e(i.name),children:[Ke("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full shadow-sm",style:{backgroundColor:i.color.getStyle()}}),Ke("span",{className:"font-medium",children:i.name})]},r))]})]}),Ke("div",{className:"relative z-10 w-full flex-grow flex items-start justify-center p-4 sm:p-6 md:p-8",children:Ke("div",{className:"w-full text-center",children:t()})}),Ke("div",{className:"absolute top-3 sm:top-4 md:top-8 right-3 sm:right-4 md:right-8 z-20 cursor-pointer text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/30 rounded-full",onClick:()=>e("Home"),children:Ke("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Ke("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})]})}_u.createRoot(document.getElementById("root")).render(Ke(r0.StrictMode,{children:Ke(Aw,{})}));
