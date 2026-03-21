function qc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var za={exports:{}},gl={},Pa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),td=Symbol.for("react.portal"),nd=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),od=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),us=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var _a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ta=Object.assign,Ra={};function hn(e,t,n){this.props=e,this.context=t,this.refs=Ra,this.updater=n||_a}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function La(){}La.prototype=hn.prototype;function ao(e,t,n){this.props=e,this.context=t,this.refs=Ra,this.updater=n||_a}var uo=ao.prototype=new La;uo.constructor=ao;Ta(uo,hn.prototype);uo.isPureReactComponent=!0;var cs=Array.isArray,Ia=Object.prototype.hasOwnProperty,co={current:null},Oa={key:!0,ref:!0,__self:!0,__source:!0};function Da(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Ia.call(t,r)&&!Oa.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:or,type:e,key:i,ref:s,props:l,_owner:co.current}}function fd(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ds=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case or:case td:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Dl(s,0):r,cs(l)?(n="",e!=null&&(n=e.replace(ds,"$&/")+"/"),Lr(l,t,n,"",function(c){return c})):l!=null&&(fo(l)&&(l=fd(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(ds,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",cs(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Dl(i,a);s+=Lr(i,t,n,u,l)}else if(u=dd(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Dl(i,a++),s+=Lr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Ir={transition:null},hd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:co};function Ma(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=hn;L.Fragment=nd;L.Profiler=ld;L.PureComponent=ao;L.StrictMode=rd;L.Suspense=ad;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hd;L.act=Ma;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ta({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=co.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ia.call(t,u)&&!Oa.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:or,type:e.type,key:l,ref:i,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:id,_context:e},e.Consumer=e};L.createElement=Da;L.createFactory=function(e){var t=Da.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:sd,render:e}};L.isValidElement=fo;L.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:md}};L.memo=function(e,t){return{$$typeof:ud,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};L.unstable_act=Ma;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Pa.exports=L;var j=Pa.exports;const Fa=ed(j),gd=qc({__proto__:null,default:Fa},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=j,vd=Symbol.for("react.element"),yd=Symbol.for("react.fragment"),wd=Object.prototype.hasOwnProperty,kd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jd={key:!0,ref:!0,__self:!0,__source:!0};function Ua(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)wd.call(t,r)&&!jd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:vd,type:e,key:i,ref:s,props:l,_owner:kd.current}}gl.Fragment=yd;gl.jsx=Ua;gl.jsxs=Ua;za.exports=gl;var o=za.exports,di={},Aa={exports:{}},we={},Ba={exports:{}},$a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var R=z.length;z.push(_);e:for(;0<R;){var H=R-1>>>1,J=z[H];if(0<l(J,_))z[H]=_,z[R]=J,R=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var _=z[0],R=z.pop();if(R!==_){z[0]=R;e:for(var H=0,J=z.length,fr=J>>>1;H<fr;){var Nt=2*(H+1)-1,Ol=z[Nt],Ct=Nt+1,pr=z[Ct];if(0>l(Ol,R))Ct<J&&0>l(pr,Ol)?(z[H]=pr,z[Ct]=R,H=Ct):(z[H]=Ol,z[Nt]=R,H=Nt);else if(Ct<J&&0>l(pr,R))z[H]=pr,z[Ct]=R,H=Ct;else break e}}return _}function l(z,_){var R=z.sortIndex-_.sortIndex;return R!==0?R:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,p=null,g=3,v=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=z)r(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(c)}}function x(z){if(w=!1,m(z),!y)if(n(u)!==null)y=!0,Ll(b);else{var _=n(c);_!==null&&Il(x,_.startTime-z)}}function b(z,_){y=!1,w&&(w=!1,f(P),P=-1),v=!0;var R=g;try{for(m(_),p=n(u);p!==null&&(!(p.expirationTime>_)||z&&!je());){var H=p.callback;if(typeof H=="function"){p.callback=null,g=p.priorityLevel;var J=H(p.expirationTime<=_);_=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),m(_)}else r(u);p=n(u)}if(p!==null)var fr=!0;else{var Nt=n(c);Nt!==null&&Il(x,Nt.startTime-_),fr=!1}return fr}finally{p=null,g=R,v=!1}}var N=!1,C=null,P=-1,O=5,T=-1;function je(){return!(e.unstable_now()-T<O)}function Bt(){if(C!==null){var z=e.unstable_now();T=z;var _=!0;try{_=C(!0,z)}finally{_?St():(N=!1,C=null)}}else N=!1}var St;if(typeof d=="function")St=function(){d(Bt)};else if(typeof MessageChannel<"u"){var as=new MessageChannel,Zc=as.port2;as.port1.onmessage=Bt,St=function(){Zc.postMessage(null)}}else St=function(){k(Bt,0)};function Ll(z){C=z,N||(N=!0,St())}function Il(z,_){P=k(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ll(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var R=g;g=_;try{return z()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=g;g=z;try{return _()}finally{g=R}},e.unstable_scheduleCallback=function(z,_,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,z={id:h++,callback:_,priorityLevel:z,startTime:R,expirationTime:J,sortIndex:-1},R>H?(z.sortIndex=R,t(c,z),n(u)===null&&z===n(c)&&(w?(f(P),P=-1):w=!0,Il(x,R-H))):(z.sortIndex=J,t(u,z),y||v||(y=!0,Ll(b))),z},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(z){var _=g;return function(){var R=g;g=_;try{return z.apply(this,arguments)}finally{g=R}}}})($a);Ba.exports=$a;var bd=Ba.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=j,ye=bd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wa=new Set,Bn={};function Ut(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Wa.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,Nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},ps={};function Cd(e){return fi.call(ps,e)?!0:fi.call(fs,e)?!1:Nd.test(e)?ps[e]=!0:(fs[e]=!0,!1)}function Ed(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zd(e,t,n,r){if(t===null||typeof t>"u"||Ed(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,mo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,mo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,mo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ho(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zd(t,n,l,r)&&(n=null),r||l===null?Cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),pi=Symbol.for("react.profiler"),Va=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),vo=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Qa=Symbol.for("react.offscreen"),ms=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ml;function zn(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Fl=!1;function Ul(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function Pd(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Wt:return"Portal";case pi:return"Profiler";case go:return"StrictMode";case mi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ha:return(e.displayName||"Context")+".Consumer";case Va:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vo:return t=e.displayName||null,t!==null?t:gi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return gi(e(t))}catch{}}return null}function _d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gi(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ka(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Td(e){var t=Ka(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Td(e))}function Ya(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ka(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&ho(e,"checked",t,!1)}function vi(e,t){Ga(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Pn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Xa(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function qa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=qa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ld=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(Ld[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,nn=null,rn=null;function ys(e){if(e=ur(e)){if(typeof Ni!="function")throw Error(S(280));var t=e.stateNode;t&&(t=kl(t),Ni(e.stateNode,e.type,t))}}function tu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function nu(){if(nn){var e=nn,t=rn;if(rn=nn=null,ys(e),t)for(e=0;e<t.length;e++)ys(t[e])}}function ru(e,t){return e(t)}function lu(){}var Al=!1;function iu(e,t,n){if(Al)return e(t,n);Al=!0;try{return ru(e,t,n)}finally{Al=!1,(nn!==null||rn!==null)&&(lu(),nu())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ci=!1;if(Ke)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Ci=!1}function Id(e,t,n,r,l,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ln=!1,Qr=null,Kr=!1,Ei=null,Od={onError:function(e){Ln=!0,Qr=e}};function Dd(e,t,n,r,l,i,s,a,u){Ln=!1,Qr=null,Id.apply(Od,arguments)}function Md(e,t,n,r,l,i,s,a,u){if(Dd.apply(this,arguments),Ln){if(Ln){var c=Qr;Ln=!1,Qr=null}else throw Error(S(198));Kr||(Kr=!0,Ei=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ws(e){if(At(e)!==e)throw Error(S(188))}function Fd(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ws(l),e;if(i===r)return ws(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function su(e){return e=Fd(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var uu=ye.unstable_scheduleCallback,ks=ye.unstable_cancelCallback,Ud=ye.unstable_shouldYield,Ad=ye.unstable_requestPaint,Q=ye.unstable_now,Bd=ye.unstable_getCurrentPriorityLevel,wo=ye.unstable_ImmediatePriority,cu=ye.unstable_UserBlockingPriority,Yr=ye.unstable_NormalPriority,$d=ye.unstable_LowPriority,du=ye.unstable_IdlePriority,xl=null,Ue=null;function Wd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Qd,Vd=Math.log,Hd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Vd(e)/Hd|0)|0}var vr=64,yr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=_n(a):(i&=s,i!==0&&(r=_n(i)))}else s=n&~l,s!==0?r=_n(s):i!==0&&(r=_n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function Kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Le(i),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=Kd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,jo,hu,gu,xu,Pi=!1,wr=[],st=null,at=null,ut=null,Vn=new Map,Hn=new Map,nt=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function jn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Jd(e,t,n,r,l){switch(t){case"focusin":return st=jn(st,e,t,n,r,l),!0;case"dragenter":return at=jn(at,e,t,n,r,l),!0;case"mouseover":return ut=jn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Vn.set(i,jn(Vn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Hn.set(i,jn(Hn.get(i)||null,e,t,n,r,l)),!0}return!1}function vu(e){var t=Pt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=ou(n),t!==null){e.blockedOn=t,xu(e.priority,function(){hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Si=r,n.target.dispatchEvent(r),Si=null}else return t=ur(n),t!==null&&jo(t),e.blockedOn=n,!1;t.shift()}return!0}function bs(e,t,n){Or(e)&&n.delete(t)}function Zd(){Pi=!1,st!==null&&Or(st)&&(st=null),at!==null&&Or(at)&&(at=null),ut!==null&&Or(ut)&&(ut=null),Vn.forEach(bs),Hn.forEach(bs)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pi||(Pi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Zd)))}function Qn(e){function t(l){return bn(l,e)}if(0<wr.length){bn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&bn(st,e),at!==null&&bn(at,e),ut!==null&&bn(ut,e),Vn.forEach(t),Hn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)vu(n),n.blockedOn===null&&nt.shift()}var ln=Je.ReactCurrentBatchConfig,Xr=!0;function qd(e,t,n,r){var l=D,i=ln.transition;ln.transition=null;try{D=1,bo(e,t,n,r)}finally{D=l,ln.transition=i}}function ef(e,t,n,r){var l=D,i=ln.transition;ln.transition=null;try{D=4,bo(e,t,n,r)}finally{D=l,ln.transition=i}}function bo(e,t,n,r){if(Xr){var l=_i(e,t,n,r);if(l===null)Jl(e,t,r,Jr,n),js(e,r);else if(Jd(l,e,t,n,r))r.stopPropagation();else if(js(e,r),t&4&&-1<Xd.indexOf(e)){for(;l!==null;){var i=ur(l);if(i!==null&&mu(i),i=_i(e,t,n,r),i===null&&Jl(e,t,r,Jr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var Jr=null;function _i(e,t,n,r){if(Jr=null,e=yo(r),e=Pt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ou(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bd()){case wo:return 1;case cu:return 4;case Yr:case $d:return 16;case du:return 536870912;default:return 16}default:return 16}}var lt=null,So=null,Dr=null;function wu(){if(Dr)return Dr;var e,t=So,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Ss(){return!1}function ke(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:Ss,this.isPropagationStopped=Ss,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=ke(gn),ar=W({},gn,{view:0,detail:0}),tf=ke(ar),$l,Wl,Sn,vl=W({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?($l=e.screenX-Sn.screenX,Wl=e.screenY-Sn.screenY):Wl=$l=0,Sn=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Ns=ke(vl),nf=W({},vl,{dataTransfer:0}),rf=ke(nf),lf=W({},ar,{relatedTarget:0}),Vl=ke(lf),of=W({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=ke(of),af=W({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=ke(af),cf=W({},gn,{data:0}),Cs=ke(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function Co(){return mf}var hf=W({},ar,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=ke(hf),xf=W({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=ke(xf),vf=W({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),yf=ke(vf),wf=W({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=ke(wf),jf=W({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=ke(jf),Sf=[9,13,27,32],Eo=Ke&&"CompositionEvent"in window,In=null;Ke&&"documentMode"in document&&(In=document.documentMode);var Nf=Ke&&"TextEvent"in window&&!In,ku=Ke&&(!Eo||In&&8<In&&11>=In),zs=" ",Ps=!1;function ju(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Cf(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(Ps=!0,zs);case"textInput":return e=t.data,e===zs&&Ps?null:e;default:return null}}function Ef(e,t){if(Ht)return e==="compositionend"||!Eo&&ju(e,t)?(e=wu(),Dr=So=lt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zf[e.type]:t==="textarea"}function Su(e,t,n,r){tu(r),t=Zr(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Kn=null;function Pf(e){Ou(e,0)}function yl(e){var t=Yt(e);if(Ya(t))return e}function _f(e,t){if(e==="change")return t}var Nu=!1;if(Ke){var Hl;if(Ke){var Ql="oninput"in document;if(!Ql){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),Ql=typeof Ts.oninput=="function"}Hl=Ql}else Hl=!1;Nu=Hl&&(!document.documentMode||9<document.documentMode)}function Rs(){On&&(On.detachEvent("onpropertychange",Cu),Kn=On=null)}function Cu(e){if(e.propertyName==="value"&&yl(Kn)){var t=[];Su(t,Kn,e,yo(e)),iu(Pf,t)}}function Tf(e,t,n){e==="focusin"?(Rs(),On=t,Kn=n,On.attachEvent("onpropertychange",Cu)):e==="focusout"&&Rs()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Kn)}function Lf(e,t){if(e==="click")return yl(t)}function If(e,t){if(e==="input"||e==="change")return yl(t)}function Of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Of;function Yn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!fi.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Df(e){var t=zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eu(n.ownerDocument.documentElement,n)){if(r!==null&&zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Is(n,i);var s=Is(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=Ke&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ti=null,Dn=null,Ri=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ri||Qt==null||Qt!==Hr(r)||(r=Qt,"selectionStart"in r&&zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Yn(Dn,r)||(Dn=r,r=Zr(Ti,"onSelect"),0<r.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Kl={},Pu={};Ke&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function wl(e){if(Kl[e])return Kl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pu)return Kl[e]=t[n];return e}var _u=wl("animationend"),Tu=wl("animationiteration"),Ru=wl("animationstart"),Lu=wl("transitionend"),Iu=new Map,Ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Iu.set(e,t),Ut(t,[e])}for(var Yl=0;Yl<Ds.length;Yl++){var Gl=Ds[Yl],Ff=Gl.toLowerCase(),Uf=Gl[0].toUpperCase()+Gl.slice(1);vt(Ff,"on"+Uf)}vt(_u,"onAnimationEnd");vt(Tu,"onAnimationIteration");vt(Ru,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Lu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Md(r,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;Ms(l,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;Ms(l,a,c),i=u}}}if(Kr)throw e=Ei,Kr=!1,Ei=null,e}function F(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[br]){e[br]=!0,Wa.forEach(function(n){n!=="selectionchange"&&(Af.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Xl("selectionchange",!1,t))}}function Du(e,t,n,r){switch(yu(t)){case 1:var l=qd;break;case 4:l=ef;break;default:l=bo}n=l.bind(null,t,n,e),l=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=Pt(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}iu(function(){var c=i,h=yo(n),p=[];e:{var g=Iu.get(e);if(g!==void 0){var v=No,y=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":v=gf;break;case"focusin":y="focus",v=Vl;break;case"focusout":y="blur",v=Vl;break;case"beforeblur":case"afterblur":v=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yf;break;case _u:case Tu:case Ru:v=sf;break;case Lu:v=kf;break;case"scroll":v=tf;break;case"wheel":v=bf;break;case"copy":case"cut":case"paste":v=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Es}var w=(t&4)!==0,k=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Wn(d,f),x!=null&&w.push(Xn(d,x,m)))),k)break;d=d.return}0<w.length&&(g=new v(g,y,null,n,h),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Si&&(y=n.relatedTarget||n.fromElement)&&(Pt(y)||y[Ye]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Pt(y):null,y!==null&&(k=At(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=Ns,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Es,x="onPointerLeave",f="onPointerEnter",d="pointer"),k=v==null?g:Yt(v),m=y==null?g:Yt(y),g=new w(x,d+"leave",v,n,h),g.target=k,g.relatedTarget=m,x=null,Pt(h)===c&&(w=new w(f,d+"enter",y,n,h),w.target=m,w.relatedTarget=k,x=w),k=x,v&&y)t:{for(w=v,f=y,d=0,m=w;m;m=$t(m))d++;for(m=0,x=f;x;x=$t(x))m++;for(;0<d-m;)w=$t(w),d--;for(;0<m-d;)f=$t(f),m--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=$t(w),f=$t(f)}w=null}else w=null;v!==null&&Fs(p,g,v,w,!1),y!==null&&k!==null&&Fs(p,k,y,w,!0)}}e:{if(g=c?Yt(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=_f;else if(_s(g))if(Nu)b=If;else{b=Rf;var N=Tf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Lf);if(b&&(b=b(e,c))){Su(p,b,n,h);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&yi(g,"number",g.value)}switch(N=c?Yt(c):window,e){case"focusin":(_s(N)||N.contentEditable==="true")&&(Qt=N,Ti=c,Dn=null);break;case"focusout":Dn=Ti=Qt=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Os(p,n,h);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":Os(p,n,h)}var C;if(Eo)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ht?ju(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ku&&n.locale!=="ko"&&(Ht||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ht&&(C=wu()):(lt=h,So="value"in lt?lt.value:lt.textContent,Ht=!0)),N=Zr(c,P),0<N.length&&(P=new Cs(P,e,null,n,h),p.push({event:P,listeners:N}),C?P.data=C:(C=bu(n),C!==null&&(P.data=C)))),(C=Nf?Cf(e,n):Ef(e,n))&&(c=Zr(c,"onBeforeInput"),0<c.length&&(h=new Cs("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}Ou(p,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Xn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Xn(e,i,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Wn(n,i),u!=null&&s.unshift(Xn(n,u,a))):l||(u=Wn(n,i),u!=null&&s.push(Xn(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Bf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function Us(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace($f,"")}function Sr(e,t,n){if(t=Us(t),Us(e)!==t&&n)throw Error(S(425))}function qr(){}var Li=null,Ii=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(Hf)}:Di;function Hf(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+xn,Jn="__reactProps$"+xn,Ye="__reactContainer$"+xn,Mi="__reactEvents$"+xn,Qf="__reactListeners$"+xn,Kf="__reactHandles$"+xn;function Pt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bs(e);e!==null;){if(n=e[Fe])return n;e=Bs(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function kl(e){return e[Jn]||null}var Fi=[],Gt=-1;function yt(e){return{current:e}}function U(e){0>Gt||(e.current=Fi[Gt],Fi[Gt]=null,Gt--)}function M(e,t){Gt++,Fi[Gt]=e.current,e.current=t}var xt={},oe=yt(xt),pe=yt(!1),It=xt;function un(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function el(){U(pe),U(oe)}function $s(e,t,n){if(oe.current!==xt)throw Error(S(168));M(oe,t),M(pe,n)}function Mu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,_d(e)||"Unknown",l));return W({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,It=oe.current,M(oe,e),M(pe,pe.current),!0}function Ws(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Mu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(oe),M(oe,e)):U(pe),M(pe,n)}var We=null,jl=!1,ql=!1;function Fu(e){We===null?We=[e]:We.push(e)}function Yf(e){jl=!0,Fu(e)}function wt(){if(!ql&&We!==null){ql=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,jl=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),uu(wo,wt),l}finally{D=t,ql=!1}}return null}var Xt=[],Jt=0,nl=null,rl=0,be=[],Se=0,Ot=null,Ve=1,He="";function Et(e,t){Xt[Jt++]=rl,Xt[Jt++]=nl,nl=e,rl=t}function Uu(e,t,n){be[Se++]=Ve,be[Se++]=He,be[Se++]=Ot,Ot=e;var r=Ve;e=He;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var i=32-Le(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ve=1<<32-Le(t)+l|n<<l|r,He=i+e}else Ve=1<<i|n<<l|r,He=e}function Po(e){e.return!==null&&(Et(e,1),Uu(e,1,0))}function _o(e){for(;e===nl;)nl=Xt[--Jt],Xt[Jt]=null,rl=Xt[--Jt],Xt[Jt]=null;for(;e===Ot;)Ot=be[--Se],be[Se]=null,He=be[--Se],be[Se]=null,Ve=be[--Se],be[Se]=null}var ve=null,xe=null,A=!1,Re=null;function Au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,xe=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,xe=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(A){var t=xe;if(t){var n=t;if(!Vs(e,t)){if(Ui(e))throw Error(S(418));t=ct(n.nextSibling);var r=ve;t&&Vs(e,t)?Au(r,n):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(Ui(e))throw Error(S(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Nr(e){if(e!==ve)return!1;if(!A)return Hs(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=xe)){if(Ui(e))throw Bu(),Error(S(418));for(;t;)Au(e,t),t=ct(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ve?ct(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=xe;e;)e=ct(e.nextSibling)}function cn(){xe=ve=null,A=!1}function To(e){Re===null?Re=[e]:Re.push(e)}var Gf=Je.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function $u(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function i(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,x){return d===null||d.tag!==6?(d=oi(m,f.mode,x),d.return=f,d):(d=l(d,m),d.return=f,d)}function u(f,d,m,x){var b=m.type;return b===Vt?h(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===et&&Qs(b)===d.type)?(x=l(d,m.props),x.ref=Nn(f,d,m),x.return=f,x):(x=Vr(m.type,m.key,m.props,null,f.mode,x),x.ref=Nn(f,d,m),x.return=f,x)}function c(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=si(m,f.mode,x),d.return=f,d):(d=l(d,m.children||[]),d.return=f,d)}function h(f,d,m,x,b){return d===null||d.tag!==7?(d=Lt(m,f.mode,x,b),d.return=f,d):(d=l(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oi(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return m=Vr(d.type,d.key,d.props,null,f.mode,m),m.ref=Nn(f,null,d),m.return=f,m;case Wt:return d=si(d,f.mode,m),d.return=f,d;case et:var x=d._init;return p(f,x(d._payload),m)}if(Pn(d)||wn(d))return d=Lt(d,f.mode,m,null),d.return=f,d;Cr(f,d)}return null}function g(f,d,m,x){var b=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:a(f,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hr:return m.key===b?u(f,d,m,x):null;case Wt:return m.key===b?c(f,d,m,x):null;case et:return b=m._init,g(f,d,b(m._payload),x)}if(Pn(m)||wn(m))return b!==null?null:h(f,d,m,x,null);Cr(f,m)}return null}function v(f,d,m,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,a(d,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return f=f.get(x.key===null?m:x.key)||null,u(d,f,x,b);case Wt:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,b);case et:var N=x._init;return v(f,d,m,N(x._payload),b)}if(Pn(x)||wn(x))return f=f.get(m)||null,h(d,f,x,b,null);Cr(d,x)}return null}function y(f,d,m,x){for(var b=null,N=null,C=d,P=d=0,O=null;C!==null&&P<m.length;P++){C.index>P?(O=C,C=null):O=C.sibling;var T=g(f,C,m[P],x);if(T===null){C===null&&(C=O);break}e&&C&&T.alternate===null&&t(f,C),d=i(T,d,P),N===null?b=T:N.sibling=T,N=T,C=O}if(P===m.length)return n(f,C),A&&Et(f,P),b;if(C===null){for(;P<m.length;P++)C=p(f,m[P],x),C!==null&&(d=i(C,d,P),N===null?b=C:N.sibling=C,N=C);return A&&Et(f,P),b}for(C=r(f,C);P<m.length;P++)O=v(C,f,P,m[P],x),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),d=i(O,d,P),N===null?b=O:N.sibling=O,N=O);return e&&C.forEach(function(je){return t(f,je)}),A&&Et(f,P),b}function w(f,d,m,x){var b=wn(m);if(typeof b!="function")throw Error(S(150));if(m=b.call(m),m==null)throw Error(S(151));for(var N=b=null,C=d,P=d=0,O=null,T=m.next();C!==null&&!T.done;P++,T=m.next()){C.index>P?(O=C,C=null):O=C.sibling;var je=g(f,C,T.value,x);if(je===null){C===null&&(C=O);break}e&&C&&je.alternate===null&&t(f,C),d=i(je,d,P),N===null?b=je:N.sibling=je,N=je,C=O}if(T.done)return n(f,C),A&&Et(f,P),b;if(C===null){for(;!T.done;P++,T=m.next())T=p(f,T.value,x),T!==null&&(d=i(T,d,P),N===null?b=T:N.sibling=T,N=T);return A&&Et(f,P),b}for(C=r(f,C);!T.done;P++,T=m.next())T=v(C,f,P,T.value,x),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?P:T.key),d=i(T,d,P),N===null?b=T:N.sibling=T,N=T);return e&&C.forEach(function(Bt){return t(f,Bt)}),A&&Et(f,P),b}function k(f,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case hr:e:{for(var b=m.key,N=d;N!==null;){if(N.key===b){if(b=m.type,b===Vt){if(N.tag===7){n(f,N.sibling),d=l(N,m.props.children),d.return=f,f=d;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===et&&Qs(b)===N.type){n(f,N.sibling),d=l(N,m.props),d.ref=Nn(f,N,m),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}m.type===Vt?(d=Lt(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=Vr(m.type,m.key,m.props,null,f.mode,x),x.ref=Nn(f,d,m),x.return=f,f=x)}return s(f);case Wt:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=l(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=si(m,f.mode,x),d.return=f,f=d}return s(f);case et:return N=m._init,k(f,d,N(m._payload),x)}if(Pn(m))return y(f,d,m,x);if(wn(m))return w(f,d,m,x);Cr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,m),d.return=f,f=d):(n(f,d),d=oi(m,f.mode,x),d.return=f,f=d),s(f)):n(f,d)}return k}var dn=$u(!0),Wu=$u(!1),ll=yt(null),il=null,Zt=null,Ro=null;function Lo(){Ro=Zt=il=null}function Io(e){var t=ll.current;U(ll),e._currentValue=t}function Bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){il=e,Ro=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(il===null)throw Error(S(308));Zt=e,il.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var _t=null;function Oo(e){_t===null?_t=[e]:_t.push(e)}function Vu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,Oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}function Ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;s=0,h=c=u=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(v,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,p,g):y,g==null)break e;p=W({},p,g);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=p):h=h.next=v,s|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(u=p),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=p}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var cr={},Ae=yt(cr),Zn=yt(cr),qn=yt(cr);function Tt(e){if(e===cr)throw Error(S(174));return e}function Mo(e,t){switch(M(qn,t),M(Zn,e),M(Ae,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}U(Ae),M(Ae,t)}function fn(){U(Ae),U(Zn),U(qn)}function Qu(e){Tt(qn.current);var t=Tt(Ae.current),n=ki(t,e.type);t!==n&&(M(Zn,e),M(Ae,n))}function Fo(e){Zn.current===e&&(U(Ae),U(Zn))}var B=yt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Uo(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Ur=Je.ReactCurrentDispatcher,ti=Je.ReactCurrentBatchConfig,Dt=0,$=null,G=null,Z=null,al=!1,Mn=!1,er=0,Xf=0;function re(){throw Error(S(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,l,i){if(Dt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?ep:tp,e=n(r,l),Mn){i=0;do{if(Mn=!1,er=0,25<=i)throw Error(S(301));i+=1,Z=G=null,t.updateQueue=null,Ur.current=np,e=n(r,l)}while(Mn)}if(Ur.current=ul,t=G!==null&&G.next!==null,Dt=0,Z=G=$=null,al=!1,t)throw Error(S(300));return e}function $o(){var e=er!==0;return er=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,G=e;else{if(e===null)throw Error(S(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function tr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,u=null,c=i;do{var h=c.lane;if((Dt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,$.lanes|=h,Mt|=h}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Oe(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ku(){}function Yu(e,t){var n=$,r=ze(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Wo(Ju.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,nr(9,Xu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(S(349));Dt&30||Gu(n,t,l)}return l}function Gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,Zu(t)&&qu(e)}function Ju(e,t,n){return n(function(){Zu(t)&&qu(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function qu(e){var t=Ge(e,1);t!==null&&Ie(t,e,1,-1)}function Gs(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=qf.bind(null,$,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return ze().memoizedState}function Ar(e,t,n,r){var l=Me();$.flags|=e,l.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(G!==null){var s=G.memoizedState;if(i=s.destroy,r!==null&&Ao(r,s.deps)){l.memoizedState=nr(t,n,i,r);return}}$.flags|=e,l.memoizedState=nr(1|t,n,i,r)}function Xs(e,t){return Ar(8390656,8,e,t)}function Wo(e,t){return bl(2048,8,e,t)}function tc(e,t){return bl(4,2,e,t)}function nc(e,t){return bl(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,rc.bind(null,t,e),n)}function Vo(){}function ic(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function oc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sc(e,t,n){return Dt&21?(Oe(n,t)||(n=fu(),$.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Jf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{D=n,ti.transition=r}}function ac(){return ze().memoizedState}function Zf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(t,n);else if(n=Vu(e,t,n,r),n!==null){var l=ae();Ie(n,e,r,l),dc(n,t,r)}}function qf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,s)){var u=t.interleaved;u===null?(l.next=l,Oo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Vu(e,t,l,r),n!==null&&(l=ae(),Ie(n,e,r,l),dc(n,t,r))}}function uc(e){var t=e.alternate;return e===$||t!==null&&t===$}function cc(e,t){Mn=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}var ul={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ep={readContext:Ee,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Gs,useDebugValue:Vo,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Gs(!1),t=e[0];return e=Jf.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Me();if(A){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),q===null)throw Error(S(349));Dt&30||Gu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Xs(Ju.bind(null,r,i,e),[e]),r.flags|=2048,nr(9,Xu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=q.identifierPrefix;if(A){var n=He,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tp={readContext:Ee,useCallback:ic,useContext:Ee,useEffect:Wo,useImperativeHandle:lc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:oc,useReducer:ni,useRef:ec,useState:function(){return ni(tr)},useDebugValue:Vo,useDeferredValue:function(e){var t=ze();return sc(t,G.memoizedState,e)},useTransition:function(){var e=ni(tr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1},np={readContext:Ee,useCallback:ic,useContext:Ee,useEffect:Wo,useImperativeHandle:lc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:oc,useReducer:ri,useRef:ec,useState:function(){return ri(tr)},useDebugValue:Vo,useDeferredValue:function(e){var t=ze();return G===null?t.memoizedState=e:sc(t,G.memoizedState,e)},useTransition:function(){var e=ri(tr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Ie(t,e,r,n),Fr(t,e,r))}};function Js(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function fc(e,t,n){var r=!1,l=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=me(t)?It:oe.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Do(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=me(t)?It:oe.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Pd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,eo=r),Vi(e,t)},n}function mc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Vi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xp.bind(null,e,t,n),t.then(e,e))}function ea(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ta(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var lp=Je.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?Wu(t,null,n,r):dn(t,e.child,n,r)}function na(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Bo(e,t,n,r,i,l),n=$o(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&n&&Po(t),t.flags|=1,se(e,t,r,l),t.child)}function ra(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Zo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hc(e,t,i,r,l)):(e=Vr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(s,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Hi(e,t,n,r,l)}function gc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(en,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(en,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M(en,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M(en,ge),ge|=r;return se(e,t,l,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,r,l){var i=me(n)?It:oe.current;return i=un(t,i),on(t,l),n=Bo(e,t,n,r,i,l),r=$o(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&r&&Po(t),t.flags|=1,se(e,t,n,l),t.child)}function la(e,t,n,r,l){if(me(n)){var i=!0;tl(t)}else i=!1;if(on(t,l),t.stateNode===null)Br(e,t),fc(t,n,r),Wi(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=me(n)?It:oe.current,c=un(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zs(t,s,r,c),tt=!1;var g=t.memoizedState;s.state=g,ol(t,r,s,l),u=t.memoizedState,a!==r||g!==u||pe.current||tt?(typeof h=="function"&&($i(t,n,h,r),u=t.memoizedState),(a=tt||Js(t,n,a,r,g,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Hu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:_e(t.type,a),s.props=c,p=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=me(n)?It:oe.current,u=un(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||g!==u)&&Zs(t,s,r,u),tt=!1,g=t.memoizedState,s.state=g,ol(t,r,s,l);var y=t.memoizedState;a!==p||g!==y||pe.current||tt?(typeof v=="function"&&($i(t,n,v,r),y=t.memoizedState),(c=tt||Js(t,n,c,r,g,y,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Qi(e,t,n,r,i,l)}function Qi(e,t,n,r,l,i){xc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Ws(t,n,!1),Xe(e,t,i);r=t.stateNode,lp.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&Ws(t,n,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Mo(e,t.containerInfo)}function ia(e,t,n,r,l){return cn(),To(l),t.flags|=256,se(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,l=B.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(B,l&1),e===null)return Ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=El(s,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Ki,e):Ho(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ip(e,t,s,r,a,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=mt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=mt(a,i):(i=Lt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Yi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ki,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&To(r),dn(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=li(Error(S(422))),Er(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=El({mode:"visible",children:r.children},l,0,null),i=Lt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,s),t.child.memoizedState=Yi(s),t.memoizedState=Ki,i);if(!(t.mode&1))return Er(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=li(i,r,void 0),Er(e,t,s,r)}if(a=(s&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),Ie(r,e,l,-1))}return Jo(),r=li(Error(S(421))),Er(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,xe=ct(l.nextSibling),ve=t,A=!0,Re=null,e!==null&&(be[Se++]=Ve,be[Se++]=He,be[Se++]=Ot,Ve=e.id,He=e.overflow,Ot=t),t=Ho(t,r.children),t.flags|=4096,t)}function oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bi(e.return,t,n)}function ii(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function wc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oa(e,n,t);else if(e.tag===19)oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ii(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ii(t,!0,n,null,i);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function op(e,t,n){switch(t.tag){case 3:vc(t),cn();break;case 5:Qu(t);break;case 1:me(t.type)&&tl(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?yc(e,t,n):(M(B,B.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);M(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,gc(e,t,n)}return Xe(e,t,n)}var kc,Gi,jc,bc;kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};jc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(Ae.current);var i=null;switch(n){case"input":l=xi(e,l),r=xi(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=wi(e,l),r=wi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}ji(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&F("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};bc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sp(e,t,n){var r=t.pendingProps;switch(_o(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&el(),le(t),null;case 3:return r=t.stateNode,fn(),U(pe),U(oe),Uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(ro(Re),Re=null))),Gi(e,t),le(t),null;case 5:Fo(t);var l=Tt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)jc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return le(t),null}if(e=Tt(Ae.current),Nr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Jn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":hs(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":xs(r,i),F("invalid",r)}ji(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),l=["children",""+a]):Bn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":gr(r),gs(r,i,!0);break;case"textarea":gr(r),vs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ja(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Fe]=t,e[Jn]=r,kc(e,t,!1,!1),t.stateNode=e;e:{switch(s=bi(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":hs(e,r),l=xi(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":xs(e,r),l=wi(e,r),F("invalid",e);break;default:l=r}ji(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?eu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Za(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$n(e,u):typeof u=="number"&&$n(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&ho(e,i,u,s))}switch(n){case"input":gr(e),gs(e,r,!1);break;case"textarea":gr(e),vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)bc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Tt(qn.current),Tt(Ae.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return le(t),null;case 13:if(U(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&xe!==null&&t.mode&1&&!(t.flags&128))Bu(),cn(),t.flags|=98560,i=!1;else if(i=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Fe]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Re!==null&&(ro(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Jo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return fn(),Gi(e,t),e===null&&Gn(t.stateNode.containerInfo),le(t),null;case 10:return Io(t.type._context),le(t),null;case 17:return me(t.type)&&el(),le(t),null;case 19:if(U(B),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Cn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=sl(e),s!==null){for(t.flags|=128,Cn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!A)return le(t),null}else 2*Q()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=B.current,M(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Xo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ap(e,t){switch(_o(t),t.tag){case 1:return me(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),U(pe),U(oe),Uo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return fn(),null;case 10:return Io(t.type._context),null;case 22:case 23:return Xo(),null;case 24:return null;default:return null}}var zr=!1,ie=!1,up=typeof WeakSet=="function"?WeakSet:Set,E=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Xi(e,t,n){try{n()}catch(r){V(e,t,r)}}var sa=!1;function cp(e,t){if(Li=Xr,e=zu(),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,p=e,g=null;t:for(;;){for(var v;p!==n||l!==0&&p.nodeType!==3||(a=s+l),p!==i||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++c===l&&(a=s),g===i&&++h===r&&(u=s),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},Xr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:_e(t.type,w),k);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=sa,sa=!1,y}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Xi(t,n,i)}l=l.next}while(l!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Jn],delete t[Mi],delete t[Qf],delete t[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}var ee=null,Te=!1;function qe(e,t,n){for(n=n.child;n!==null;)Cc(e,t,n),n=n.sibling}function Cc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:ie||qt(n,t);case 6:var r=ee,l=Te;ee=null,qe(e,t,n),ee=r,Te=l,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Qn(e)):Zl(ee,n.stateNode));break;case 4:r=ee,l=Te,ee=n.stateNode.containerInfo,Te=!0,qe(e,t,n),ee=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Xi(n,t,s),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!ie&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,qe(e,t,n),ie=r):qe(e,t,n);break;default:qe(e,t,n)}}function ua(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new up),t.forEach(function(r){var l=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Te=!1;break e;case 3:ee=a.stateNode.containerInfo,Te=!0;break e;case 4:ee=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(ee===null)throw Error(S(160));Cc(i,s,l),ee=null,Te=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ec(t,e),t=t.sibling}function Ec(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),De(e),r&4){try{Fn(3,e,e.return),Nl(3,e)}catch(w){V(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Pe(t,e),De(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Pe(t,e),De(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(w){V(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ga(l,i),bi(a,s);var c=bi(a,i);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?eu(l,p):h==="dangerouslySetInnerHTML"?Za(l,p):h==="children"?$n(l,p):ho(l,h,p,c)}switch(a){case"input":vi(l,i);break;case"textarea":Xa(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tn(l,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Jn]=i}catch(w){V(e,e.return,w)}}break;case 6:if(Pe(t,e),De(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){V(e,e.return,w)}}break;case 3:if(Pe(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Pe(t,e),De(e);break;case 13:Pe(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=Q())),r&4&&ua(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,Pe(t,e),ie=c):Pe(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(p=E=h;E!==null;){switch(g=E,v=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:qt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:qt(g,g.return);break;case 22:if(g.memoizedState!==null){da(p);continue}}v!==null?(v.return=g,E=v):da(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qa("display",s))}catch(w){V(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){V(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pe(t,e),De(e),r&4&&ua(e);break;case 21:break;default:Pe(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=aa(e);qi(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=aa(e);Zi(e,a,s);break;default:throw Error(S(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,n){E=e,zc(e)}function zc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||zr;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=zr;var c=ie;if(zr=s,(ie=u)&&!c)for(E=l;E!==null;)s=E,u=s.child,s.tag===22&&s.memoizedState!==null?fa(l):u!==null?(u.return=s,E=u):fa(l);for(;i!==null;)E=i,zc(i),i=i.sibling;E=l,zr=a,ie=c}ca(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):ca(e)}}function ca(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Qn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&Ji(t)}catch(g){V(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function da(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function fa(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Ji(t)}catch(u){V(t,i,u)}break;case 5:var s=t.return;try{Ji(t)}catch(u){V(t,s,u)}}}catch(u){V(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var fp=Math.ceil,cl=Je.ReactCurrentDispatcher,Qo=Je.ReactCurrentOwner,Ce=Je.ReactCurrentBatchConfig,I=0,q=null,Y=null,te=0,ge=0,en=yt(0),X=0,rr=null,Mt=0,Cl=0,Ko=0,Un=null,de=null,Yo=0,mn=1/0,$e=null,dl=!1,eo=null,ft=null,Pr=!1,it=null,fl=0,An=0,to=null,$r=-1,Wr=0;function ae(){return I&6?Q():$r!==-1?$r:$r=Q()}function pt(e){return e.mode&1?I&2&&te!==0?te&-te:Gf.transition!==null?(Wr===0&&(Wr=fu()),Wr):(e=D,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Ie(e,t,n,r){if(50<An)throw An=0,to=null,Error(S(185));sr(e,n,r),(!(I&2)||e!==q)&&(e===q&&(!(I&2)&&(Cl|=n),X===4&&rt(e,te)),he(e,r),n===1&&I===0&&!(t.mode&1)&&(mn=Q()+500,jl&&wt()))}function he(e,t){var n=e.callbackNode;Yd(e,t);var r=Gr(e,e===q?te:0);if(r===0)n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ks(n),t===1)e.tag===0?Yf(pa.bind(null,e)):Fu(pa.bind(null,e)),Vf(function(){!(I&6)&&wt()}),n=null;else{switch(pu(r)){case 1:n=wo;break;case 4:n=cu;break;case 16:n=Yr;break;case 536870912:n=du;break;default:n=Yr}n=Dc(n,Pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pc(e,t){if($r=-1,Wr=0,I&6)throw Error(S(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Gr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var l=I;I|=2;var i=Tc();(q!==e||te!==t)&&($e=null,mn=Q()+500,Rt(e,t));do try{hp();break}catch(a){_c(e,a)}while(!0);Lo(),cl.current=i,I=l,Y!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(l=zi(e),l!==0&&(r=l,t=no(e,l))),t===1)throw n=rr,Rt(e,0),rt(e,r),he(e,Q()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!pp(l)&&(t=pl(e,r),t===2&&(i=zi(e),i!==0&&(r=i,t=no(e,i))),t===1))throw n=rr,Rt(e,0),rt(e,r),he(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:zt(e,de,$e);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Yo+500-Q(),10<t)){if(Gr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Di(zt.bind(null,e,de,$e),t);break}zt(e,de,$e);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-Le(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Di(zt.bind(null,e,de,$e),r);break}zt(e,de,$e);break;case 5:zt(e,de,$e);break;default:throw Error(S(329))}}}return he(e,Q()),e.callbackNode===n?Pc.bind(null,e):null}function no(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=pl(e,t),e!==2&&(t=de,de=n,t!==null&&ro(t)),e}function ro(e){de===null?de=e:de.push.apply(de,e)}function pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ko,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function pa(e){if(I&6)throw Error(S(327));sn();var t=Gr(e,0);if(!(t&1))return he(e,Q()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=zi(e);r!==0&&(t=r,n=no(e,r))}if(n===1)throw n=rr,Rt(e,0),rt(e,t),he(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,de,$e),he(e,Q()),null}function Go(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(mn=Q()+500,jl&&wt())}}function Ft(e){it!==null&&it.tag===0&&!(I&6)&&sn();var t=I;I|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,I=t,!(I&6)&&wt()}}function Xo(){ge=en.current,U(en)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(_o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:fn(),U(pe),U(oe),Uo();break;case 5:Fo(r);break;case 4:fn();break;case 13:U(B);break;case 19:U(B);break;case 10:Io(r.type._context);break;case 22:case 23:Xo()}n=n.return}if(q=e,Y=e=mt(e.current,null),te=ge=t,X=0,rr=null,Ko=Cl=Mt=0,de=Un=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}_t=null}return e}function _c(e,t){do{var n=Y;try{if(Lo(),Ur.current=ul,al){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}al=!1}if(Dt=0,Z=G=$=null,Mn=!1,er=0,Qo.current=null,n===null||n.return===null){X=1,rr=t,Y=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=ea(s);if(v!==null){v.flags&=-257,ta(v,s,a,i,t),v.mode&1&&qs(i,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){qs(i,c,t),Jo();break e}u=Error(S(426))}}else if(A&&a.mode&1){var k=ea(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ta(k,s,a,i,t),To(pn(u,a));break e}}i=u=pn(u,a),X!==4&&(X=2),Un===null?Un=[i]:Un.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=pc(i,u,t);Ks(i,f);break e;case 1:a=u;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ft===null||!ft.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=mc(i,a,t);Ks(i,x);break e}}i=i.return}while(i!==null)}Lc(n)}catch(b){t=b,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Tc(){var e=cl.current;return cl.current=ul,e===null?ul:e}function Jo(){(X===0||X===3||X===2)&&(X=4),q===null||!(Mt&268435455)&&!(Cl&268435455)||rt(q,te)}function pl(e,t){var n=I;I|=2;var r=Tc();(q!==e||te!==t)&&($e=null,Rt(e,t));do try{mp();break}catch(l){_c(e,l)}while(!0);if(Lo(),I=n,cl.current=r,Y!==null)throw Error(S(261));return q=null,te=0,X}function mp(){for(;Y!==null;)Rc(Y)}function hp(){for(;Y!==null&&!Ud();)Rc(Y)}function Rc(e){var t=Oc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Lc(e):Y=t,Qo.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ap(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=sp(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function zt(e,t,n){var r=D,l=Ce.transition;try{Ce.transition=null,D=1,gp(e,t,n,r)}finally{Ce.transition=l,D=r}return null}function gp(e,t,n,r){do sn();while(it!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gd(e,i),e===q&&(Y=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Dc(Yr,function(){return sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var s=D;D=1;var a=I;I|=4,Qo.current=null,cp(e,n),Ec(n,e),Df(Ii),Xr=!!Li,Ii=Li=null,e.current=n,dp(n),Ad(),I=a,D=s,Ce.transition=i}else e.current=n;if(Pr&&(Pr=!1,it=e,fl=l),i=e.pendingLanes,i===0&&(ft=null),Wd(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(dl)throw dl=!1,e=eo,eo=null,e;return fl&1&&e.tag!==0&&sn(),i=e.pendingLanes,i&1?e===to?An++:(An=0,to=e):An=0,wt(),null}function sn(){if(it!==null){var e=pu(fl),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,fl=0,I&6)throw Error(S(331));var l=I;for(I|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(E=c;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Fn(8,h,i)}var p=h.child;if(p!==null)p.return=h,E=p;else for(;E!==null;){h=E;var g=h.sibling,v=h.return;if(Sc(h),h===c){E=null;break}if(g!==null){g.return=v,E=g;break}E=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){s=E;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,E=m;else e:for(s=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nl(9,a)}}catch(b){V(a,a.return,b)}if(a===s){E=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,E=x;break e}E=a.return}}if(I=l,wt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function ma(e,t,n){t=pn(n,t),t=pc(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(sr(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)ma(e,e,n);else for(;t!==null;){if(t.tag===3){ma(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=pn(n,e),e=mc(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(sr(t,1,e),he(t,e));break}}t=t.return}}function xp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Yo?Rt(e,0):Ko|=n),he(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ae();e=Ge(e,t),e!==null&&(sr(e,t,n),he(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Ic(e,n)}var Oc;Oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,op(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&Uu(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var l=un(t,oe.current);on(t,n),l=Bo(null,t,r,e,l,n);var i=$o();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,tl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Wi(t,r,e,n),t=Qi(null,t,r,!0,i,n)):(t.tag=0,A&&i&&Po(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=kp(r),e=_e(r,e),l){case 0:t=Hi(null,t,r,e,n);break e;case 1:t=la(null,t,r,e,n);break e;case 11:t=na(null,t,r,e,n);break e;case 14:t=ra(null,t,r,_e(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Hi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),la(e,t,r,l,n);case 3:e:{if(vc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Hu(e,t),ol(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(S(423)),t),t=ia(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(S(424)),t),t=ia(e,t,r,n,l);break e}else for(xe=ct(t.stateNode.containerInfo.firstChild),ve=t,A=!0,Re=null,n=Wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&Ai(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Oi(r,l)?s=null:i!==null&&Oi(r,i)&&(t.flags|=32),xc(e,t),se(e,t,s,n),t.child;case 6:return e===null&&Ai(t),null;case 13:return yc(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),na(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,M(ll,r._currentValue),r._currentValue=s,i!==null)if(Oe(i.value,s)){if(i.children===l.children&&!pe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Bi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bi(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=Ee(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=_e(r,t.pendingProps),l=_e(r.type,l),ra(e,t,r,l,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Br(e,t),t.tag=1,me(r)?(e=!0,tl(t)):e=!1,on(t,n),fc(t,r,l),Wi(t,r,l,n),Qi(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return gc(e,t,n)}throw Error(S(156,t.tag))};function Dc(e,t){return uu(e,t)}function wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new wp(e,t,n,r)}function Zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===vo)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")Zo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Vt:return Lt(n.children,l,i,t);case go:s=8,l|=8;break;case pi:return e=Ne(12,n,t,l|2),e.elementType=pi,e.lanes=i,e;case mi:return e=Ne(13,n,t,l),e.elementType=mi,e.lanes=i,e;case hi:return e=Ne(19,n,t,l),e.elementType=hi,e.lanes=i,e;case Qa:return El(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Va:s=10;break e;case Ha:s=9;break e;case xo:s=11;break e;case vo:s=14;break e;case et:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Qa,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function qo(e,t,n,r,l,i,s,a,u){return e=new jp(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(i),e}function bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mc(e){if(!e)return xt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(me(n))return Mu(e,n,t)}return t}function Fc(e,t,n,r,l,i,s,a,u){return e=qo(n,r,!0,e,l,i,s,a,u),e.context=Mc(null),n=e.current,r=ae(),l=pt(n),i=Qe(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,sr(e,l,r),he(e,r),e}function zl(e,t,n,r){var l=t.current,i=ae(),s=pt(l);return n=Mc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,s),e!==null&&(Ie(e,l,s,i),Fr(e,l,s)),s}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ha(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){ha(e,t),(e=e.alternate)&&ha(e,t)}function Sp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ts(e){this._internalRoot=e}Pl.prototype.render=ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));zl(e,t,null,null)};Pl.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){zl(null,e,null,null)}),t[Ye]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&vu(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ga(){}function Np(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=ml(s);i.call(c)}}var s=Fc(t,r,e,0,null,!1,!1,"",ga);return e._reactRootContainer=s,e[Ye]=s.current,Gn(e.nodeType===8?e.parentNode:e),Ft(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=ml(u);a.call(c)}}var u=qo(e,0,!1,null,null,!1,!1,"",ga);return e._reactRootContainer=u,e[Ye]=u.current,Gn(e.nodeType===8?e.parentNode:e),Ft(function(){zl(t,u,n,r)}),u}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var u=ml(s);a.call(u)}}zl(t,s,e,l)}else s=Np(n,t,e,l,r);return ml(s)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(ko(t,n|1),he(t,Q()),!(I&6)&&(mn=Q()+500,wt()))}break;case 13:Ft(function(){var r=Ge(e,1);if(r!==null){var l=ae();Ie(r,e,1,l)}}),es(e,1)}};jo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ae();Ie(t,e,134217728,n)}es(e,134217728)}};hu=function(e){if(e.tag===13){var t=pt(e),n=Ge(e,t);if(n!==null){var r=ae();Ie(n,e,t,r)}es(e,t)}};gu=function(){return D};xu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Ni=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=kl(r);if(!l)throw Error(S(90));Ya(r),vi(r,l)}}}break;case"textarea":Xa(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};ru=Go;lu=Ft;var Cp={usingClientEntryPoint:!1,Events:[ur,Yt,kl,tu,nu,Go]},En={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=su(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{xl=_r.inject(Ep),Ue=_r}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(t))throw Error(S(200));return bp(e,t,null,n)};we.createRoot=function(e,t){if(!ns(e))throw Error(S(299));var n=!1,r="",l=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=qo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Gn(e.nodeType===8?e.parentNode:e),new ts(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=su(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Ft(e)};we.hydrate=function(e,t,n){if(!_l(t))throw Error(S(200));return Tl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!ns(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fc(t,null,e,1,n??null,l,!1,i,s),e[Ye]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Pl(t)};we.render=function(e,t,n){if(!_l(t))throw Error(S(200));return Tl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!_l(e))throw Error(S(40));return e._reactRootContainer?(Ft(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};we.unstable_batchedUpdates=Go;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Tl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function Ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac)}catch(e){console.error(e)}}Ac(),Aa.exports=we;var zp=Aa.exports,xa=zp;di.createRoot=xa.createRoot,di.hydrateRoot=xa.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const va="popstate";function Pp(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:s,hash:a}=r.location;return lo("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:hl(l)}return Tp(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _p(){return Math.random().toString(36).substr(2,8)}function ya(e,t){return{usr:e.state,key:e.key,idx:t}}function lo(e,t,n,r){return n===void 0&&(n=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||_p()})}function hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Tp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,s=l.history,a=ot.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(lr({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function p(){a=ot.Pop;let k=h(),f=k==null?null:k-c;c=k,u&&u({action:a,location:w.location,delta:f})}function g(k,f){a=ot.Push;let d=lo(w.location,k,f);c=h()+1;let m=ya(d,c),x=w.createHref(d);try{s.pushState(m,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;l.location.assign(x)}i&&u&&u({action:a,location:w.location,delta:1})}function v(k,f){a=ot.Replace;let d=lo(w.location,k,f);c=h();let m=ya(d,c),x=w.createHref(d);s.replaceState(m,"",x),i&&u&&u({action:a,location:w.location,delta:0})}function y(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof k=="string"?k:hl(k);return d=d.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(l,s)},listen(k){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(va,p),u=k,()=>{l.removeEventListener(va,p),u=null}},createHref(k){return t(l,k)},createURL:y,encodeLocation(k){let f=y(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(k){return s.go(k)}};return w}var wa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wa||(wa={}));function Rp(e,t,n){return n===void 0&&(n="/"),Lp(e,t,n)}function Lp(e,t,n,r){let l=typeof t=="string"?vn(t):t,i=ls(l.pathname||"/",n);if(i==null)return null;let s=Bc(e);Ip(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Qp(i);a=Wp(s[u],c)}return a}function Bc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(K(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ht([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bc(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Bp(c,i.index),routesMeta:h})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,s);else for(let u of $c(i.path))l(i,s,u)}),t}function $c(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let s=$c(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),l&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ip(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$p(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Op=/^:[\w-]+$/,Dp=3,Mp=2,Fp=1,Up=10,Ap=-2,ka=e=>e==="*";function Bp(e,t){let n=e.split("/"),r=n.length;return n.some(ka)&&(r+=Ap),t&&(r+=Mp),n.filter(l=>!ka(l)).reduce((l,i)=>l+(Op.test(i)?Dp:i===""?Fp:Up),r)}function $p(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Wp(e,t,n){let{routesMeta:r}=e,l={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=Vp({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p)return null;Object.assign(l,p.params),s.push({params:l,pathname:ht([i,p.pathname]),pathnameBase:Jp(ht([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=ht([i,p.pathnameBase]))}return s}function Vp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let w=a[p]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[p];return v&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Hp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Qp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ls(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yp=e=>Kp.test(e);function Gp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?vn(e):e,i;if(n)if(Yp(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),rs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=ja(n.substring(1),"/"):i=ja(n,t)}else i=t;return{pathname:i,search:Zp(r),hash:qp(l)}}function ja(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ai(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function is(e,t){let n=Xp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function os(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=vn(e):(l=lr({},e),K(!l.pathname||!l.pathname.includes("?"),ai("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),ai("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),ai("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}a=p>=0?t[p]:"/"}let u=Gp(l,a),c=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Jp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function em(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wc=["post","put","patch","delete"];new Set(Wc);const tm=["get",...Wc];new Set(tm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const ss=j.createContext(null),nm=j.createContext(null),kt=j.createContext(null),Rl=j.createContext(null),jt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=j.createContext(null);function rm(e,t){let{relative:n}=t===void 0?{}:t;yn()||K(!1);let{basename:r,navigator:l}=j.useContext(kt),{hash:i,pathname:s,search:a}=Qc(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:ht([r,s])),l.createHref({pathname:u,search:a,hash:i})}function yn(){return j.useContext(Rl)!=null}function dr(){return yn()||K(!1),j.useContext(Rl).location}function Hc(e){j.useContext(kt).static||j.useLayoutEffect(e)}function Ze(){let{isDataRoute:e}=j.useContext(jt);return e?gm():lm()}function lm(){yn()||K(!1);let e=j.useContext(ss),{basename:t,future:n,navigator:r}=j.useContext(kt),{matches:l}=j.useContext(jt),{pathname:i}=dr(),s=JSON.stringify(is(l,n.v7_relativeSplatPath)),a=j.useRef(!1);return Hc(()=>{a.current=!0}),j.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=os(c,JSON.parse(s),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ht([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,s,i,e])}function Qc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(kt),{matches:l}=j.useContext(jt),{pathname:i}=dr(),s=JSON.stringify(is(l,r.v7_relativeSplatPath));return j.useMemo(()=>os(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function im(e,t){return om(e,t)}function om(e,t,n,r){yn()||K(!1);let{navigator:l}=j.useContext(kt),{matches:i}=j.useContext(jt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=dr(),h;if(t){var p;let k=typeof t=="string"?vn(t):t;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||K(!1),h=k}else h=c;let g=h.pathname||"/",v=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=Rp(e,{pathname:v}),w=dm(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ht([u,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:ht([u,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&w?j.createElement(Rl.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ot.Pop}},w):w}function sm(){let e=hm(),t=em(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,null)}const am=j.createElement(sm,null);class um extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(jt.Provider,{value:this.props.routeContext},j.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cm(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(ss);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(jt.Provider,{value:t},r)}function dm(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let h=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||K(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:v}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,p,g)=>{let v,y=!1,w=null,k=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||am,u&&(c<0&&g===0?(xm("route-fallback"),y=!0,k=null):c===g&&(y=!0,k=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),d=()=>{let m;return v?m=w:y?m=k:p.route.Component?m=j.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=h,j.createElement(cm,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?j.createElement(um,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Kc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kc||{}),Yc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yc||{});function fm(e){let t=j.useContext(ss);return t||K(!1),t}function pm(e){let t=j.useContext(nm);return t||K(!1),t}function mm(e){let t=j.useContext(jt);return t||K(!1),t}function Gc(e){let t=mm(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function hm(){var e;let t=j.useContext(Vc),n=pm(),r=Gc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gm(){let{router:e}=fm(Kc.UseNavigateStable),t=Gc(Yc.UseNavigateStable),n=j.useRef(!1);return Hc(()=>{n.current=!0}),j.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ir({fromRouteId:t},i)))},[e,t])}const ba={};function xm(e,t,n){ba[e]||(ba[e]=!0)}function vm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function io(e){let{to:t,replace:n,state:r,relative:l}=e;yn()||K(!1);let{future:i,static:s}=j.useContext(kt),{matches:a}=j.useContext(jt),{pathname:u}=dr(),c=Ze(),h=os(t,is(a,i.v7_relativeSplatPath),u,l==="path"),p=JSON.stringify(h);return j.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:l}),[c,p,l,n,r]),null}function Be(e){K(!1)}function ym(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:s=!1,future:a}=e;yn()&&K(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:i,static:s,future:ir({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=vn(r));let{pathname:h="/",search:p="",hash:g="",state:v=null,key:y="default"}=r,w=j.useMemo(()=>{let k=ls(h,u);return k==null?null:{location:{pathname:k,search:p,hash:g,state:v,key:y},navigationType:l}},[u,h,p,g,v,y,l]);return w==null?null:j.createElement(kt.Provider,{value:c},j.createElement(Rl.Provider,{children:n,value:w}))}function wm(e){let{children:t,location:n}=e;return im(oo(t),n)}new Promise(()=>{});function oo(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,l)=>{if(!j.isValidElement(r))return;let i=[...t,l];if(r.type===j.Fragment){n.push.apply(n,oo(r.props.children,i));return}r.type!==Be&&K(!1),!r.props.index||!r.props.children||K(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=oo(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function km(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function jm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bm(e,t){return e.button===0&&(!t||t==="_self")&&!jm(e)}const Sm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nm="6";try{window.__reactRouterVersion=Nm}catch{}const Cm="startTransition",Sa=gd[Cm];function Em(e){let{basename:t,children:n,future:r,window:l}=e,i=j.useRef();i.current==null&&(i.current=Pp({window:l,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=j.useCallback(p=>{c&&Sa?Sa(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>s.listen(h),[s,h]),j.useEffect(()=>vm(r),[r]),j.createElement(ym,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xc=j.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:h,viewTransition:p}=t,g=km(t,Sm),{basename:v}=j.useContext(kt),y,w=!1;if(typeof c=="string"&&Pm.test(c)&&(y=c,zm))try{let m=new URL(window.location.href),x=c.startsWith("//")?new URL(m.protocol+c):new URL(c),b=ls(x.pathname,v);x.origin===m.origin&&b!=null?c=b+x.search+x.hash:w=!0}catch{}let k=rm(c,{relative:l}),f=_m(c,{replace:s,state:a,target:u,preventScrollReset:h,relative:l,viewTransition:p});function d(m){r&&r(m),m.defaultPrevented||f(m)}return j.createElement("a",so({},g,{href:y||k,onClick:w||i?r:d,ref:n,target:u}))});var Na;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Na||(Na={}));var Ca;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ca||(Ca={}));function _m(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=Ze(),c=dr(),h=Qc(e,{relative:s});return j.useCallback(p=>{if(bm(p,n)){p.preventDefault();let g=r!==void 0?r:hl(c)===hl(h);u(e,{replace:g,state:l,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,h,r,l,n,e,i,s,a])}const Jc=j.createContext(),Tr="http://localhost:8000";function Tm({children:e}){const[t,n]=j.useState(null),[r,l]=j.useState(!0),[i,s]=j.useState(null);j.useEffect(()=>{const g=localStorage.getItem("token");g?a(g):l(!1)},[]);const a=async g=>{try{const v=await fetch(`${Tr}/api/auth/me`,{headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"}});if(v.ok){const y=await v.json();n(y)}else localStorage.removeItem("token"),n(null)}catch(v){console.error("Token verification failed:",v),localStorage.removeItem("token"),n(null)}finally{l(!1)}},u=async(g,v,y,w)=>{s(null);try{const k=await fetch(`${Tr}/api/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g,email:v,password:y,role:w})}),f=await k.json();return k.ok?{success:!0,message:f.message}:(s(f.detail||"Registration failed"),{success:!1,error:f.detail})}catch(k){const f="Registration error: "+k.message;return s(f),{success:!1,error:f}}},c=async(g,v)=>{s(null);try{const y=await fetch(`${Tr}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g,password:v})}),w=await y.json();return y.ok?(localStorage.setItem("token",w.access_token),n({email:w.name,role:w.role,name:w.name}),{success:!0,role:w.role}):(s(w.detail||"Login failed"),{success:!1,error:w.detail})}catch(y){const w="Login error: "+y.message;return s(w),{success:!1,error:w}}},h=async()=>{try{const g=localStorage.getItem("token");g&&await fetch(`${Tr}/api/auth/logout`,{method:"POST",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"}})}catch(g){console.error("Logout error:",g)}finally{localStorage.removeItem("token"),n(null),s(null)}},p=()=>localStorage.getItem("token");return o.jsx(Jc.Provider,{value:{user:t,loading:r,error:i,register:u,login:c,logout:h,getToken:p},children:e})}function bt(){const e=j.useContext(Jc);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function Rr({children:e,requiredRole:t}){const{user:n,loading:r}=bt();return r?o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#080c14",color:"#cbd5e1"},children:o.jsx("div",{children:"Loading..."})}):n?t&&n.role!==t?o.jsx(io,{to:"/login",replace:!0}):e:o.jsx(io,{to:"/login",replace:!0})}const Rm="/assets/citypune-Cgfb62yz.jpg";function Lm(){const e=Ze(),{user:t}=bt();return j.useEffect(()=>{t&&(t.role==="citizen"?e("/citizen/dashboard"):t.role==="official"?e("/official/dashboard"):t.role==="worker"&&e("/worker/dashboard"))},[t,e]),o.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #080c14 0%, #0d1520 100%)"},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: #cbd5e1; }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
          background: linear-gradient(180deg, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0.85) 100%);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(6, 182, 212, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 1px rgba(6, 182, 212, 0.2);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }
        
        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #f0f9ff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .nav-logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4));
        }
        
        .nav-logo span {
          color: #06b6d4;
          transition: all 0.3s ease;
        }
        
        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
          list-style: none;
        }
        
        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #0891b2);
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        
        .nav-link:hover {
          color: #06b6d4;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        .login-buttons {
          display: flex;
          gap: 12px;
        }
        
        .btn-login {
          padding: 9px 20px;
          border: 1.5px solid rgba(6, 182, 212, 0.3);
          background: rgba(6, 182, 212, 0.05);
          color: #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .btn-login:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-login:hover {
          background: rgba(6, 182, 212, 0.15);
          border-color: #06b6d4;
          color: #06b6d4;
          box-shadow: 0 0 16px rgba(6, 182, 212, 0.2), inset 0 0 16px rgba(6, 182, 212, 0.05);
          transform: translateY(-2px);
        }
        
        .btn-login:hover:before {
          left: 100%;
        }
        
        .btn-signup {
          padding: 9px 20px;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          color: #000;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(6, 182, 212, 0.3);
        }
        
        .btn-signup:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        
        .btn-signup:hover {
          background: linear-gradient(135deg, #0891b2 0%, #067a8f 100%);
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(6, 182, 212, 0.4);
        }
        
        .btn-signup:hover:before {
          width: 300px;
          height: 300px;
        }
        
        .hero {
          padding: 100px 40px;
          text-align: center;
          width: 100%;
          margin: 0 auto;
          position: relative;
          margin-bottom: 40px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .hero-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #06b6d4;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }
        
        .hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #f0f9ff;
          letter-spacing: -0.5px;
          margin-bottom: 24px;
          margin-top: -30px;
          display: inline-block;
        }
        
        .hero-label span { color: #06b6d4; }
        
        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 64px;
          font-weight: 800;
          color: #f0f9ff;
          line-height: 1.3;
          margin-bottom: 24px;
          margin-top: 0px;
          letter-spacing: -0.5px;
        }
        
        .hero-title span { color: #06b6d4; }
        
        .hero-subtitle {
          font-size: 18px;
          color: #f0f9ff;
          margin-bottom: 40px;
          line-height: 1.6;
          font-weight: 500;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(6, 182, 212, 0.3);
          letter-spacing: 0.5px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 80px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 0;
        }
        
        .stat-item {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 12px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        
        .stat-item:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(6, 182, 212, 0.2);
        }
        
        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #06b6d4;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
          line-height: 1.5;
        }
        
        .btn-primary {
          padding: 14px 32px;
          background: #06b6d4;
          color: #000;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .btn-primary:hover {
          background: #0891b2;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3);
        }
        
        .btn-secondary {
          padding: 14px 32px;
          background: transparent;
          color: #06b6d4;
          border: 2px solid #06b6d4;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .btn-secondary:hover {
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 80px;
        }
        
        .feature-card {
          background: #111d2e;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s;
        }
        
        .feature-card:hover {
          border-color: #06b6d4;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
        }
        
        .feature-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        
        .feature-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }
        
        .feature-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .roles-section {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 60px 40px;
          margin-bottom: 80px;
        }
        
        .roles-title {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #f0f9ff;
          text-align: center;
          margin-bottom: 48px;
        }
        
        .roles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .role-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s;
        }
        
        .role-card:hover {
          border-color: #06b6d4;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
        }
        
        .role-badge {
          display: inline-block;
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .role-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .role-name {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }
        
        .role-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .role-features {
          text-align: left;
          font-size: 12px;
          color: #cbd5e1;
          margin-bottom: 20px;
        }
        
        .role-features li {
          margin-bottom: 6px;
          margin-left: 20px;
        }
        
        .role-btn {
          padding: 10px 20px;
          background: #06b6d4;
          color: #000;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
          width: 100%;
        }
        
        .role-btn:hover {
          background: #0891b2;
          transform: scale(1.02);
        }
        
        .cta-section {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          border-radius: 16px;
          padding: 60px 40px;
          text-align: center;
          margin-bottom: 80px;
        }
        
        .cta-title {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #000;
          margin-bottom: 16px;
        }
        
        .cta-desc {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 32px;
        }
        
        .cta-btn {
          padding: 14px 40px;
          background: #000;
          color: #06b6d4;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .cta-btn:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
        }
        
        .features-detail-section {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 80px 40px;
          margin-bottom: 80px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-detail-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .features-detail-title {
          font-family: 'Outfit', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 16px;
        }

        .features-detail-subtitle {
          font-size: 16px;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .feature-detail-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 40px;
          transition: all 0.3s;
        }

        .feature-detail-card:hover {
          border-color: #06b6d4;
          box-shadow: 0 12px 48px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }

        .feature-detail-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .feature-detail-title {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .feature-detail-desc {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .feature-benefits {
          list-style: none;
          margin-top: 16px;
        }

        .feature-benefits li {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .feature-benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #06b6d4;
          font-weight: bold;
        }

        .features-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-top: 40px;
          border-top: 1px solid #1e3048;
        }

        .stat-box {
          text-align: center;
        }

        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #06b6d4;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          color: #94a3b8;
        }

        .about-section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-title {
          font-family: 'Outfit', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 16px;
        }

        .about-subtitle {
          font-size: 16px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        .about-text {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.9;
        }

        .about-text p {
          margin-bottom: 16px;
        }

        .about-text strong {
          color: #06b6d4;
          font-weight: 600;
        }

        .about-highlight {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 40px;
        }

        .about-highlight-title {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .about-highlight-desc {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .about-mission {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .mission-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s;
        }

        .mission-card:hover {
          border-color: #06b6d4;
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }

        .mission-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .mission-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }

        .mission-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }

        .about-team {
          text-align: center;
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 50px;
          margin-bottom: 40px;
        }

        .about-team-title {
          font-family: 'Outfit', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .about-team-desc {
          font-size: 15px;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .footer {
          background: linear-gradient(180deg, #080c14 0%, #0d1520 100%);
          border-top: 1px solid #1e3048;
          padding: 60px 40px 0 40px;
          color: #64748b;
          font-size: 13px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid #1e3048;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-title {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #f0f9ff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .footer-link:hover {
          color: #06b6d4;
          transform: translateX(4px);
        }

        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 8px;
        }

        .footer-logo span {
          color: #06b6d4;
        }

        .footer-description {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          color: #06b6d4;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: #06b6d4;
          color: #000;
          border-color: #06b6d4;
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          padding: 30px 0;
        }

        .footer-legal {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          color: #64748b;
          text-decoration: none;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .footer-legal-link:hover {
          color: #06b6d4;
        }

        .footer-credits {
          text-align: right;
          color: #64748b;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-bottom { grid-template-columns: 1fr; text-align: left; }
          .footer-credits { text-align: left; }
        }
        
        @media (max-width: 1024px) {
          .features, .roles-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 40px; }
          .navbar { padding: 16px 24px; }
        }
      `}),o.jsxs("nav",{className:"navbar",children:[o.jsxs("div",{className:"nav-logo",onClick:()=>e("/"),children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("ul",{className:"nav-links",children:[o.jsx("li",{children:o.jsx("a",{className:"nav-link",href:"#features",children:"Features"})}),o.jsx("li",{children:o.jsx("a",{className:"nav-link",href:"#roles",children:"User Roles"})}),o.jsx("li",{children:o.jsx("a",{className:"nav-link",href:"#about",children:"About"})})]}),o.jsxs("div",{className:"login-buttons",children:[o.jsx("button",{className:"btn-login",onClick:()=>e("/login"),children:"Sign In"}),o.jsx("button",{className:"btn-signup",onClick:()=>e("/register"),children:"Get Started"})]})]}),o.jsx("section",{className:"hero",style:{backgroundImage:`linear-gradient(135deg, rgba(8, 12, 20, 0.6) 0%, rgba(8, 12, 20, 0.4) 100%), url(${Rm})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"hero-label",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("h1",{className:"hero-title",children:["Report & Resolve ",o.jsx("span",{children:"Civic Issues"})," Faster"]}),o.jsx("p",{className:"hero-subtitle",children:"CityPulse connects citizens, officials, and workers to resolve urban problems efficiently. Report potholes, broken streetlights, waterlogging, and more with AI-powered triage."}),o.jsxs("div",{className:"hero-buttons",children:[o.jsx("button",{className:"btn-primary",onClick:()=>e("/register"),children:"Start Reporting Issues"}),o.jsx("button",{className:"btn-secondary",onClick:()=>document.getElementById("roles").scrollIntoView({behavior:"smooth"}),children:"Learn More"})]}),o.jsxs("div",{className:"hero-stats",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("div",{className:"stat-value",children:"✅ 50K+"}),o.jsx("div",{className:"stat-label",children:"Issues Resolved"})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("div",{className:"stat-value",children:"🏙️ 15+"}),o.jsx("div",{className:"stat-label",children:"Cities Served"})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("div",{className:"stat-value",children:"⚡ 2.4h"}),o.jsx("div",{className:"stat-label",children:"Avg. Resolution"})]})]})]})}),o.jsxs("section",{className:"features-detail-section",id:"features",children:[o.jsxs("div",{className:"features-detail-header",children:[o.jsx("h2",{className:"features-detail-title",children:"Powerful Features Built for Impact"}),o.jsx("p",{className:"features-detail-subtitle",children:"Designed to make civic engagement seamless, transparent, and effective"})]}),o.jsxs("div",{className:"features-detail-grid",children:[o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"📍"}),o.jsx("div",{className:"feature-detail-title",children:"Location-Based Reporting"}),o.jsx("div",{className:"feature-detail-desc",children:"File complaints with precise GPS coordinates and integrate with real-time mapping. Our system automatically detects your location and helps workers find issues quickly."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"Automatic GPS detection"}),o.jsx("li",{children:"Real-time map integration"}),o.jsx("li",{children:"Location history tracking"}),o.jsx("li",{children:"Nearby issues discovery"})]})]}),o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"🤖"}),o.jsx("div",{className:"feature-detail-title",children:"AI-Powered Triage"}),o.jsx("div",{className:"feature-detail-desc",children:"Intelligent systems automatically categorize, prioritize, and route complaints to the right departments. Machine learning improves accuracy over time."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"Auto-categorization"}),o.jsx("li",{children:"Smart severity detection"}),o.jsx("li",{children:"Department routing"}),o.jsx("li",{children:"Duplicate issue detection"})]})]}),o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"⚡"}),o.jsx("div",{className:"feature-detail-title",children:"Real-Time Tracking"}),o.jsx("div",{className:"feature-detail-desc",children:"Track your complaint from filing through resolution. Receive instant notifications at each stage and stay informed about progress."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"Live status updates"}),o.jsx("li",{children:"Push notifications"}),o.jsx("li",{children:"Photo documentation"}),o.jsx("li",{children:"Completion certificates"})]})]}),o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"📊"}),o.jsx("div",{className:"feature-detail-title",children:"Analytics Dashboard"}),o.jsx("div",{className:"feature-detail-desc",children:"Visual insights for officials to monitor resolution rates, identify hotspots, and make data-driven decisions for city improvement."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"KPI tracking & reporting"}),o.jsx("li",{children:"Hotspot analysis"}),o.jsx("li",{children:"Performance metrics"}),o.jsx("li",{children:"Trend prediction"})]})]}),o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"👥"}),o.jsx("div",{className:"feature-detail-title",children:"Multi-Stakeholder Platform"}),o.jsx("div",{className:"feature-detail-desc",children:"Unified system for citizens reporting, officials managing, and workers executing. Complete transparency across the entire resolution process."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"Role-based access control"}),o.jsx("li",{children:"Cross-team collaboration"}),o.jsx("li",{children:"Communication tools"}),o.jsx("li",{children:"Audit trails"})]})]}),o.jsxs("div",{className:"feature-detail-card",children:[o.jsx("div",{className:"feature-detail-icon",children:"🔒"}),o.jsx("div",{className:"feature-detail-title",children:"Secure & Transparent"}),o.jsx("div",{className:"feature-detail-desc",children:"Bank-level security for all data. Full transparency with audit logs, ensuring accountability at every step of the complaint resolution."}),o.jsxs("ul",{className:"feature-benefits",children:[o.jsx("li",{children:"End-to-end encryption"}),o.jsx("li",{children:"Data privacy compliance"}),o.jsx("li",{children:"Full audit trail"}),o.jsx("li",{children:"Accountability tracking"})]})]})]}),o.jsxs("div",{className:"features-stats",children:[o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-number",children:"99.9%"}),o.jsx("div",{className:"stat-label",children:"System Uptime"})]}),o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-number",children:"2.4h"}),o.jsx("div",{className:"stat-label",children:"Avg. Resolution Time"})]}),o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-number",children:"95%"}),o.jsx("div",{className:"stat-label",children:"User Satisfaction"})]})]})]}),o.jsxs("section",{className:"roles-section",id:"roles",children:[o.jsx("div",{className:"roles-title",children:"Three Ways to Participate"}),o.jsxs("div",{className:"roles-grid",children:[o.jsxs("div",{className:"role-card",children:[o.jsx("div",{className:"role-badge",children:"CITIZEN"}),o.jsx("div",{className:"role-icon",children:"👤"}),o.jsx("div",{className:"role-name",children:"Citizen Portal"}),o.jsx("div",{className:"role-desc",children:"Report civic issues in your area and track resolutions"}),o.jsxs("ul",{className:"role-features",children:[o.jsx("li",{children:"✓ File complaints with photos"}),o.jsx("li",{children:"✓ Track complaint status"}),o.jsx("li",{children:"✓ View nearby issues"}),o.jsx("li",{children:"✓ Submit feedback"})]}),o.jsx("button",{className:"role-btn",onClick:()=>e("/register?role=citizen"),children:"Register as Citizen"})]}),o.jsxs("div",{className:"role-card",children:[o.jsx("div",{className:"role-badge",children:"OFFICIAL"}),o.jsx("div",{className:"role-icon",children:"👨‍💼"}),o.jsx("div",{className:"role-name",children:"Official Dashboard"}),o.jsx("div",{className:"role-desc",children:"Manage and oversee complaint resolution across departments"}),o.jsxs("ul",{className:"role-features",children:[o.jsx("li",{children:"✓ Analytics & KPI tracking"}),o.jsx("li",{children:"✓ Department management"}),o.jsx("li",{children:"✓ Complaint assignment"}),o.jsx("li",{children:"✓ SLA monitoring"})]}),o.jsx("button",{className:"role-btn",onClick:()=>e("/register?role=official"),children:"Register as Official"})]}),o.jsxs("div",{className:"role-card",children:[o.jsx("div",{className:"role-badge",children:"WORKER"}),o.jsx("div",{className:"role-icon",children:"👷"}),o.jsx("div",{className:"role-name",children:"Worker Portal"}),o.jsx("div",{className:"role-desc",children:"Receive and complete assigned tasks in the field"}),o.jsxs("ul",{className:"role-features",children:[o.jsx("li",{children:"✓ View assigned tasks"}),o.jsx("li",{children:"✓ Update task status"}),o.jsx("li",{children:"✓ Submit work documentation"}),o.jsx("li",{children:"✓ Real-time navigation"})]}),o.jsx("button",{className:"role-btn",onClick:()=>e("/register?role=worker"),children:"Register as Worker"})]})]})]}),o.jsxs("section",{className:"about-section",id:"about",children:[o.jsxs("div",{className:"about-header",children:[o.jsx("h2",{className:"about-title",children:"About CityPulse"}),o.jsx("p",{className:"about-subtitle",children:"Transforming urban governance through technology, transparency, and community engagement"})]}),o.jsxs("div",{className:"about-content",children:[o.jsxs("div",{className:"about-text",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"CityPulse"})," is a revolutionary civic engagement platform designed to bridge the gap between citizens and municipal authorities. We believe every voice matters, and every civic issue deserves attention."]}),o.jsx("p",{children:"Our mission is to create smarter, more responsive cities by enabling citizens to report urban issues with ease, and empowering officials to respond efficiently. Through our intelligent AI-powered system, complaints are automatically categorized, prioritized, and routed to the right departments."}),o.jsx("p",{children:"Built with cutting-edge technology and a deep understanding of municipal operations, CityPulse has already transformed how cities manage everything from potholes and waterlogging to street lighting and waste management."})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"about-highlight",children:[o.jsx("div",{className:"about-highlight-title",children:"🎯 Our Vision"}),o.jsx("div",{className:"about-highlight-desc",children:"To build a world where every citizen can report civic issues, and every issue gets resolved transparently and efficiently. We envision cities where technology and community work together to create better living spaces for everyone."})]}),o.jsxs("div",{className:"about-highlight",children:[o.jsx("div",{className:"about-highlight-title",children:"💡 Our Approach"}),o.jsx("div",{className:"about-highlight-desc",children:"We combine human-centric design with powerful AI technology. Every feature is built with feedback from citizens, officials, and field workers to ensure maximum utility and ease of use."})]})]})]}),o.jsxs("div",{className:"about-mission",children:[o.jsxs("div",{className:"mission-card",children:[o.jsx("div",{className:"mission-icon",children:"🤝"}),o.jsx("div",{className:"mission-title",children:"Community First"}),o.jsx("div",{className:"mission-desc",children:"Empowering citizens to take action in their communities and see real-time impact."})]}),o.jsxs("div",{className:"mission-card",children:[o.jsx("div",{className:"mission-icon",children:"📊"}),o.jsx("div",{className:"mission-title",children:"Data-Driven"}),o.jsx("div",{className:"mission-desc",children:"Using analytics to identify patterns and enable proactive city management."})]}),o.jsxs("div",{className:"mission-card",children:[o.jsx("div",{className:"mission-icon",children:"🔄"}),o.jsx("div",{className:"mission-title",children:"Transparent"}),o.jsx("div",{className:"mission-desc",children:"Complete visibility into every issue from reporting through resolution."})]})]}),o.jsxs("div",{className:"about-team",children:[o.jsx("h3",{className:"about-team-title",children:"Built for Every Stakeholder"}),o.jsx("p",{className:"about-team-desc",children:"CityPulse was designed collaboratively with citizens, municipal officials, and field workers to address real challenges in urban governance. Our platform respects the complexity of municipal operations while keeping the citizen experience simple and intuitive. Every feature, every workflow, and every metric has been thoughtfully crafted to maximize impact and transparency."})]})]}),o.jsxs("section",{className:"cta-section",children:[o.jsx("div",{className:"cta-title",children:"Ready to Make a Difference?"}),o.jsx("div",{className:"cta-desc",children:"Join thousands of citizens making their cities better, one report at a time"}),o.jsx("button",{className:"cta-btn",onClick:()=>e("/register"),children:"Get Started"})]}),o.jsx("footer",{className:"footer",children:o.jsxs("div",{className:"footer-content",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-section",children:[o.jsxs("div",{className:"footer-logo",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsx("p",{className:"footer-description",children:"Transforming urban governance through technology, making cities smarter, one issue at a time."}),o.jsxs("div",{className:"footer-socials",children:[o.jsx("a",{className:"social-icon",href:"#",title:"Twitter",children:"𝕏"}),o.jsx("a",{className:"social-icon",href:"#",title:"Facebook",children:"f"}),o.jsx("a",{className:"social-icon",href:"#",title:"LinkedIn",children:"in"}),o.jsx("a",{className:"social-icon",href:"#",title:"Instagram",children:"📷"})]})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Product"}),o.jsx("a",{className:"footer-link",href:"#features",children:"Features"}),o.jsx("a",{className:"footer-link",href:"#roles",children:"User Roles"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Pricing"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Download"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Changelog"})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Company"}),o.jsx("a",{className:"footer-link",href:"#about",children:"About Us"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Blog"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Press"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Careers"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Contact"})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Support"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Documentation"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Help Center"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"API Docs"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Community"}),o.jsx("a",{className:"footer-link",onClick:()=>e("/login"),children:"Status Page"})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("div",{className:"footer-legal",children:[o.jsx("a",{className:"footer-legal-link",href:"#",children:"Privacy Policy"}),o.jsx("a",{className:"footer-legal-link",href:"#",children:"Terms of Service"}),o.jsx("a",{className:"footer-legal-link",href:"#",children:"Cookie Policy"}),o.jsx("a",{className:"footer-legal-link",href:"#",children:"© 2026 CityPulse"})]}),o.jsx("div",{className:"footer-credits",children:"Made with ❤️ for better cities | All rights reserved"})]})]})})]})}function Im(){const e=Ze(),{login:t,error:n}=bt(),[r,l]=j.useState(""),[i,s]=j.useState(""),[a,u]=j.useState(!1),[c,h]=j.useState(""),p=async v=>{if(v.preventDefault(),h(""),u(!0),!r||!i){h("Please enter email and password"),u(!1);return}const y=await t(r,i);y.success?y.role==="citizen"?e("/citizen/dashboard"):y.role==="official"?e("/official/dashboard"):y.role==="worker"&&e("/worker/dashboard"):h(y.error||"Login failed"),u(!1)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 40px;
      background: rgba(8, 12, 20, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1e3048;
    }
    
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #f0f9ff;
      cursor: pointer;
    }
    
    .nav-logo span { color: #06b6d4; }
    
    .nav-home {
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'DM Sans', sans-serif;
    }
    
    .nav-home:hover {
      background: #111d2e;
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .login-container {
      background: #080c14;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
      color: #cbd5e1;
    }

    .login-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    .login-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .login-logo {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .login-logo span {
      color: #06b6d4;
    }

    .login-subtitle {
      color: #64748b;
      font-size: 14px;
    }

    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .form-input {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-input:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 8px;
      padding: 12px;
      color: #ef4444;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .submit-button {
      width: 100%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 15px;
      font-family: 'Syne', sans-serif;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-bottom: 16px;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .signup-link {
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
    }

    .signup-link a {
      color: #06b6d4;
      text-decoration: none;
      font-weight: 600;
    }

    .signup-link a:hover {
      text-decoration: underline;
    }

    .divider {
      text-align: center;
      margin: 24px 0;
      color: #334155;
      font-size: 13px;
    }

    .demo-note {
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 8px;
      padding: 12px;
      font-size: 12px;
      color: #94a3b8;
      margin-top: 16px;
    }
  `}),o.jsxs("nav",{className:"navbar",children:[o.jsxs("div",{className:"nav-logo",onClick:()=>e("/"),children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsx("button",{className:"nav-home",onClick:()=>e("/"),children:"← Back to Home"})]}),o.jsx("div",{className:"login-container",children:o.jsxs("div",{className:"login-card",children:[o.jsxs("div",{className:"login-header",children:[o.jsxs("div",{className:"login-logo",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsx("div",{className:"login-subtitle",children:"Urban Grievance Management"})]}),(c||n)&&o.jsx("div",{className:"error-message",children:c||n}),o.jsxs("form",{onSubmit:p,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Email Address"}),o.jsx("input",{type:"email",className:"form-input",placeholder:"you@example.com",value:r,onChange:v=>l(v.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Password"}),o.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••",value:i,onChange:v=>s(v.target.value),required:!0})]}),o.jsx("button",{type:"submit",className:"submit-button",disabled:a,children:a?"Logging in...":"Sign In"})]}),o.jsxs("div",{className:"signup-link",children:["Don't have an account? ",o.jsx(Xc,{to:"/register",children:"Sign up here"})]}),o.jsx("div",{className:"divider",children:"Demo Credentials"}),o.jsxs("div",{className:"demo-note",children:[o.jsx("strong",{children:"Citizen:"})," citizen@demo.com / demo123",o.jsx("br",{}),o.jsx("strong",{children:"Official:"})," official@demo.com / demo123",o.jsx("br",{}),o.jsx("strong",{children:"Worker:"})," worker@demo.com / demo123"]})]})})]})}function Om(){const e=Ze(),{register:t,error:n}=bt(),[r,l]=j.useState(""),[i,s]=j.useState(""),[a,u]=j.useState(""),[c,h]=j.useState(""),[p,g]=j.useState("citizen"),[v,y]=j.useState(!1),[w,k]=j.useState(""),[f,d]=j.useState(!1),m=async N=>{if(N.preventDefault(),k(""),d(!1),y(!0),!r||!i||!a||!c){k("Please fill in all fields"),y(!1);return}if(a!==c){k("Passwords do not match"),y(!1);return}if(a.length<6){k("Password must be at least 6 characters"),y(!1);return}const C=await t(r,i,a,p);C.success?(d(!0),l(""),s(""),u(""),h(""),setTimeout(()=>{e("/login")},1500)):k(C.error||"Registration failed"),y(!1)},x=`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 40px;
      background: rgba(8, 12, 20, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1e3048;
    }
    
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #f0f9ff;
      cursor: pointer;
    }
    
    .nav-logo span { color: #06b6d4; }
    
    .nav-home {
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'DM Sans', sans-serif;
    }
    
    .nav-home:hover {
      background: #111d2e;
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .register-container {
      background: #080c14;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
      color: #cbd5e1;
      padding: 20px;
    }

    .register-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    .register-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .register-logo {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .register-logo span {
      color: #06b6d4;
    }

    .register-subtitle {
      color: #64748b;
      font-size: 14px;
    }

    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .form-input,
    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .form-select option {
      background: #111d2e;
      color: #f0f9ff;
    }

    .error-message,
    .success-message {
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
    }

    .success-message {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
    }

    .submit-button {
      width: 100%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 15px;
      font-family: 'Syne', sans-serif;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-top: 20px;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .login-link {
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
      margin-top: 20px;
    }

    .login-link a {
      color: #06b6d4;
      text-decoration: none;
      font-weight: 600;
    }

    .login-link a:hover {
      text-decoration: underline;
    }

    .role-description {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
  `,b={citizen:"File complaints and track issues",official:"Manage departments and SLA tracking",worker:"Update and resolve assigned complaints"};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:x}),o.jsxs("nav",{className:"navbar",children:[o.jsxs("div",{className:"nav-logo",onClick:()=>e("/"),children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsx("button",{className:"nav-home",onClick:()=>e("/"),children:"← Back to Home"})]}),o.jsx("div",{className:"register-container",children:o.jsxs("div",{className:"register-card",children:[o.jsxs("div",{className:"register-header",children:[o.jsxs("div",{className:"register-logo",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsx("div",{className:"register-subtitle",children:"Join the Urban Grievance Network"})]}),(w||n)&&o.jsx("div",{className:"error-message",children:w||n}),f&&o.jsx("div",{className:"success-message",children:"✓ Registration successful! Redirecting to login..."}),!f&&o.jsxs("form",{onSubmit:m,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Full Name"}),o.jsx("input",{type:"text",className:"form-input",placeholder:"Priya Sharma",value:r,onChange:N=>l(N.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Email Address"}),o.jsx("input",{type:"email",className:"form-input",placeholder:"you@example.com",value:i,onChange:N=>s(N.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"I am a..."}),o.jsxs("select",{className:"form-select",value:p,onChange:N=>g(N.target.value),children:[o.jsx("option",{value:"citizen",children:"Citizen"}),o.jsx("option",{value:"official",children:"Government Official"}),o.jsx("option",{value:"worker",children:"Department Worker"})]}),o.jsx("div",{className:"role-description",children:b[p]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Password"}),o.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••",value:a,onChange:N=>u(N.target.value),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Confirm Password"}),o.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••",value:c,onChange:N=>h(N.target.value),required:!0})]}),o.jsx("button",{type:"submit",className:"submit-button",disabled:v,children:v?"Creating Account...":"Create Account"})]}),o.jsxs("div",{className:"login-link",children:["Already have an account? ",o.jsx(Xc,{to:"/login",children:"Sign in here"})]})]})})]})}const Ea="http://localhost:8000";function Dm(){const e=Ze(),{user:t,logout:n}=bt(),[r,l]=j.useState("file"),[i,s]=j.useState([]),[a,u]=j.useState(""),[c,h]=j.useState(null);j.useEffect(()=>{p()},[]);const p=async()=>{try{const k=localStorage.getItem("token"),f=await fetch(`${Ea}/api/complaints/?limit=20`,{headers:{Authorization:`Bearer ${k}`,"Content-Type":"application/json"}});if(f.ok){const d=await f.json();s(d.complaints||[])}}catch(k){console.error("Failed to fetch complaints:",k)}},g=async()=>{if(a)try{const k=await fetch(`${Ea}/api/complaints/track/${a}`);k.ok?h(await k.json()):h({error:"Ticket not found"})}catch{h({error:"Error tracking complaint"})}},v=async()=>{await n(),e("/login")},y=`
    .citizen-dashboard {
      background: #080c14;
      min-height: 100vh;
      color: #cbd5e1;
      font-family: 'DM Sans', sans-serif;
    }

    .dashboard-header {
      background: #0d1520;
      border-bottom: 1px solid #1e3048;
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }

    .header-title span {
      color: #06b6d4;
    }

    .user-info {
      font-size: 13px;
      color: #94a3b8;
    }

    .user-name {
      color: #cbd5e1;
      font-weight: 600;
    }

    .header-right {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #ef4444;
      color: #ef4444;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .dashboard-container {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 32px;
      border-bottom: 1px solid #1e3048;
      padding-bottom: 16px;
    }

    .tab-btn {
      padding: 8px 20px;
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .tab-btn.active {
      color: #06b6d4;
      border-bottom-color: #06b6d4;
    }

    .tab-btn:hover {
      color: #cbd5e1;
    }

    .tab-content {
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .form-group {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .form-input,
    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus {
      border-color: #06b6d4;
    }

    .btn-primary {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .complaints-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .complaint-item {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      display: grid;
      grid-template-columns: 100px 1fr 120px 100px;
      gap: 16px;
      align-items: center;
    }

    .complaint-id {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      color: #06b6d4;
      font-size: 14px;
    }

    .complaint-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .complaint-type {
      font-weight: 600;
      color: #f0f9ff;
      font-size: 14px;
    }

    .complaint-location {
      color: #64748b;
      font-size: 12px;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .status-pending {
      background: rgba(100, 116, 139, 0.2);
      color: #94a3b8;
    }

    .status-progress {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .status-resolved {
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
    }

    .tracking-result {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }

    .tracking-error {
      color: #ef4444;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #64748b;
    }
  `,w=k=>k==="Resolved"?"status-resolved":k==="In Progress"?"status-progress":"status-pending";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:y}),o.jsxs("div",{className:"citizen-dashboard",children:[o.jsxs("div",{className:"dashboard-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"header-title",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("div",{className:"user-info",children:["Welcome, ",o.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Citizen"})]})]}),o.jsx("div",{className:"header-right",children:o.jsx("button",{className:"logout-btn",onClick:v,children:"Logout"})})]}),o.jsxs("div",{className:"dashboard-container",children:[o.jsxs("div",{className:"tabs",children:[o.jsx("button",{className:`tab-btn ${r==="file"?"active":""}`,onClick:()=>l("file"),children:"📝 File Complaint"}),o.jsx("button",{className:`tab-btn ${r==="track"?"active":""}`,onClick:()=>l("track"),children:"🔍 Track Complaints"}),o.jsx("button",{className:`tab-btn ${r==="nearby"?"active":""}`,onClick:()=>l("nearby"),children:"📍 Nearby Issues"})]}),o.jsxs("div",{className:"tab-content",children:[r==="file"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"File a New Complaint"}),o.jsx("p",{style:{color:"#94a3b8",marginBottom:"20px"},children:'Use the "File Complaint" tab in the main CityPulse dashboard'}),o.jsx("button",{className:"btn-primary",onClick:()=>e("/citizen/file"),children:"Go to File Complaint"})]}),r==="track"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"Track Your Complaints"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Ticket ID"}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. CP-2847",value:a,onChange:k=>u(k.target.value.toUpperCase()),style:{flex:1}}),o.jsx("button",{className:"btn-primary",onClick:g,children:"Track"})]})]}),c&&o.jsx("div",{className:"tracking-result",children:c.error?o.jsxs("div",{className:"tracking-error",children:["❌ ",c.error]}):o.jsxs("div",{children:[o.jsxs("div",{style:{marginBottom:"12px"},children:[o.jsx("strong",{children:"Ticket:"})," ",c.ticket_id]}),o.jsxs("div",{style:{marginBottom:"12px"},children:[o.jsx("strong",{children:"Status:"})," ",o.jsx("span",{className:`status-badge ${w(c.status)}`,children:c.status})]}),o.jsxs("div",{style:{marginBottom:"12px"},children:[o.jsx("strong",{children:"Issue:"})," ",c.issue_type]}),o.jsxs("div",{style:{marginBottom:"12px"},children:[o.jsx("strong",{children:"Department:"})," ",c.department]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Priority:"})," ",c.priority]})]})}),o.jsxs("div",{style:{marginTop:"32px"},children:[o.jsx("h4",{style:{marginBottom:"16px",color:"#f0f9ff"},children:"Your Recent Complaints"}),i.length>0?o.jsx("div",{className:"complaints-list",children:i.slice(0,5).map(k=>o.jsxs("div",{className:"complaint-item",children:[o.jsx("div",{className:"complaint-id",children:k.ticket_id}),o.jsxs("div",{className:"complaint-info",children:[o.jsx("div",{className:"complaint-type",children:k.issue_type}),o.jsx("div",{className:"complaint-location",children:k.location})]}),o.jsx("div",{children:k.department}),o.jsx("div",{className:`status-badge ${w(k.status)}`,children:k.status})]},k.ticket_id))}):o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"No complaints filed yet"})})]})]}),r==="nearby"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"Nearby Issues"}),o.jsx("p",{style:{color:"#94a3b8"},children:"View the main dashboard to see nearby issues on the heat map"}),o.jsx("button",{className:"btn-primary",style:{marginTop:"16px"},onClick:()=>e("/dashboard"),children:"Go to Dashboard"})]})]})]})]})]})}const Mm="http://localhost:8000";function Fm(){const e=Ze(),{user:t,logout:n}=bt(),[r,l]=j.useState({issueType:"",location:"",description:"",severity:"medium",attachments:[]}),[i,s]=j.useState(!1),[a,u]=j.useState(""),[c,h]=j.useState(!1),[p,g]=j.useState(""),v=["Pothole","Streetlight Failure","Waterlogging","Garbage Overflow","Road Cave-in","Broken Footpath","Water Pipe Burst","Illegal Dumping","Tree Fallen","Sewage Overflow","Traffic Signal Malfunction","Other"],y=(x,b,N)=>{const C={Pothole:"PWD","Streetlight Failure":"Electricity",Waterlogging:"Water Board","Garbage Overflow":"Sanitation","Road Cave-in":"PWD","Broken Footpath":"PWD","Water Pipe Burst":"Water Board","Illegal Dumping":"Sanitation","Tree Fallen":"Parks & Gardens","Sewage Overflow":"Water Board","Traffic Signal Malfunction":"Traffic Police",Other:"General"},P={9:"CRITICAL",7:"HIGH",5:"MEDIUM",2:"LOW"},O=C[x]||"General";let T=P[N]?P[N]:"MEDIUM";return["urgent","danger","accident","injured","hazard","critical","blocked"].some(St=>b.toLowerCase().includes(St))&&(T="CRITICAL"),{department:O,priority:T,routed:!0,algorithm:"AI-Triage-v1.0"}},w=x=>{const{name:b,value:N}=x.target;l(C=>({...C,[b]:N}))},k=()=>r.issueType?y(r.issueType,r.description,r.severity):null,f=async x=>{if(x.preventDefault(),u(""),s(!0),!r.issueType||!r.location||!r.description){u("Please fill in all required fields"),s(!1);return}if(r.description.length<20){u("Description must be at least 20 characters"),s(!1);return}try{const b=y(r.issueType,r.description,r.severity),N=localStorage.getItem("token"),C={issue_type:r.issueType,location:r.location,description:r.description,severity:r.severity,department:b.department,priority:b.priority},P=await fetch(`${Mm}/api/complaints/file`,{method:"POST",headers:{Authorization:`Bearer ${N}`,"Content-Type":"application/json"},body:JSON.stringify(C)}),O=await P.json();P.ok&&O.ticket_id?(h(!0),g(O.ticket_id),l({issueType:"",location:"",description:"",severity:"medium",attachments:[]}),setTimeout(()=>{e("/citizen/dashboard")},2e3)):u(O.message||"Failed to file complaint")}catch(b){u("Error filing complaint: "+b.message)}s(!1)},d=async()=>{await n(),e("/login")};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .file-complaint-page {
      background: #080c14;
      min-height: 100vh;
      color: #cbd5e1;
      font-family: 'DM Sans', sans-serif;
    }

    .dashboard-header {
      background: #0d1520;
      border-bottom: 1px solid #1e3048;
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }

    .header-title span {
      color: #06b6d4;
    }

    .user-info {
      font-size: 13px;
      color: #94a3b8;
    }

    .user-name {
      color: #cbd5e1;
      font-weight: 600;
    }

    .header-right {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .back-btn,
    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .back-btn:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .logout-btn {
      border-color: #ef4444;
      color: #ef4444;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .page-container {
      padding: 32px;
      max-width: 800px;
      margin: 0 auto;
    }

    .form-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 20px;
    }

    .form-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
      color: #f0f9ff;
    }

    .form-subtitle {
      color: #94a3b8;
      font-size: 14px;
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .form-input,
    .form-select,
    .form-textarea {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .success-message {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    .btn-submit,
    .btn-cancel {
      flex: 1;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .btn-submit {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
    }

    .btn-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-cancel {
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
    }

    .btn-cancel:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .ticket-info {
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: #06b6d4;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
    }

    .ticket-label {
      font-size: 11px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .ticket-value {
      font-family: 'Syne', sans-serif;
      font-size: 18px;
      font-weight: 800;
    }

    .tips-section {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
    }

    .tips-title {
      font-weight: 600;
      color: #f0f9ff;
      margin-bottom: 8px;
    }

    .tips-list {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
    }

    .tips-list li {
      margin-bottom: 6px;
    }

    .ai-analyzer-panel {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.05) 100%);
      border: 2px solid rgba(6, 182, 212, 0.3);
      border-radius: 12px;
      padding: 20px;
      margin-top: 24px;
      backdrop-filter: blur(8px);
    }

    .ai-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #06b6d4;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .ai-icon {
      font-size: 18px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }

    .ai-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .ai-item {
      background: rgba(17, 29, 46, 0.6);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 8px;
      padding: 12px;
    }

    .ai-label {
      font-size: 11px;
      color: #94a3b8;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 4px;
      letter-spacing: 0.05em;
    }

    .ai-value {
      font-size: 15px;
      font-weight: 700;
      color: #06b6d4;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .priority-critical {
      color: #ef4444;
    }

    .priority-high {
      color: #f59e0b;
    }

    .priority-medium {
      color: #06b6d4;
    }

    .priority-low {
      color: #10b981;
    }

    .ai-note {
      font-size: 12px;
      color: #64748b;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(6, 182, 212, 0.2);
      font-style: italic;
    }
  `}),o.jsxs("div",{className:"file-complaint-page",children:[o.jsxs("div",{className:"dashboard-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"header-title",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("div",{className:"user-info",children:["Welcome, ",o.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Citizen"})]})]}),o.jsxs("div",{className:"header-right",children:[o.jsx("button",{className:"back-btn",onClick:()=>e("/citizen/dashboard"),children:"← Back to Dashboard"}),o.jsx("button",{className:"logout-btn",onClick:d,children:"Logout"})]})]}),o.jsxs("div",{className:"page-container",children:[o.jsxs("div",{className:"form-card",children:[o.jsx("div",{className:"form-title",children:"📝 File a New Complaint"}),o.jsx("div",{className:"form-subtitle",children:"Report civic issues in your area. Our AI system will automatically route your complaint to the right department."}),a&&o.jsxs("div",{className:"error-message",children:["❌ ",a]}),c&&o.jsxs("div",{className:"success-message",children:["✓ Complaint filed successfully! Ticket: ",o.jsx("strong",{children:p})]}),!c&&o.jsxs("form",{onSubmit:f,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Issue Type *"}),o.jsxs("select",{name:"issueType",value:r.issueType,onChange:w,className:"form-select",required:!0,children:[o.jsx("option",{value:"",children:"Select an issue type..."}),v.map(x=>o.jsx("option",{value:x,children:x},x))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Location *"}),o.jsx("input",{type:"text",name:"location",placeholder:"e.g., FC Road, Shivajinagar",value:r.location,onChange:w,className:"form-input",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Severity Level"}),o.jsxs("select",{name:"severity",value:r.severity,onChange:w,className:"form-select",children:[o.jsx("option",{value:"low",children:"Low"}),o.jsx("option",{value:"medium",children:"Medium"}),o.jsx("option",{value:"high",children:"High"}),o.jsx("option",{value:"critical",children:"Critical"})]})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Description *"}),o.jsx("textarea",{name:"description",placeholder:"Describe the issue in detail... (minimum 20 characters)",value:r.description,onChange:w,className:"form-textarea",required:!0,minLength:20})]}),k()&&o.jsxs("div",{className:"ai-analyzer-panel",children:[o.jsxs("div",{className:"ai-title",children:[o.jsx("span",{className:"ai-icon",children:"🤖"}),"AI Analyzer"]}),o.jsxs("div",{className:"ai-grid",children:[o.jsxs("div",{className:"ai-item",children:[o.jsx("div",{className:"ai-label",children:"🏢 Department"}),o.jsx("div",{className:"ai-value",children:k().department})]}),o.jsxs("div",{className:"ai-item",children:[o.jsx("div",{className:"ai-label",children:"⚡ Priority"}),o.jsx("div",{className:`ai-value priority-${typeof k().priority=="string"?k().priority.toLowerCase():"medium"}`,children:k().priority})]}),o.jsxs("div",{className:"ai-item",children:[o.jsx("div",{className:"ai-label",children:"📊 Severity"}),o.jsxs("div",{className:"ai-value",children:[k().priority==="CRITICAL"?"🔴":k().priority==="HIGH"?"🟠":k().priority==="MEDIUM"?"🔵":"🟢",k().priority==="CRITICAL"?"9":k().priority==="HIGH"?"7":k().priority==="MEDIUM"?"5":"2","/10"]})]}),o.jsxs("div",{className:"ai-item",children:[o.jsx("div",{className:"ai-label",children:"⏱️ SLA"}),o.jsx("div",{className:"ai-value",children:k().priority==="CRITICAL"?"2h":k().priority==="HIGH"?"6h":"24h"})]})]}),o.jsxs("div",{className:"ai-note",children:["ℹ️ AI analysis: Your complaint will be auto-routed to ",k().department," with ",k().priority," priority."]})]}),o.jsxs("div",{className:"button-group",children:[o.jsx("button",{type:"submit",className:"btn-submit",disabled:i,children:i?"Filing Complaint...":"File Complaint"}),o.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>e("/citizen/dashboard"),children:"Cancel"})]})]}),c&&o.jsx("p",{style:{textAlign:"center",color:"#94a3b8",marginTop:"16px"},children:"Redirecting to dashboard in a moment..."})]}),o.jsxs("div",{className:"tips-section",children:[o.jsx("div",{className:"tips-title",children:"📋 Tips for Filing a Complaint"}),o.jsxs("ul",{className:"tips-list",children:[o.jsx("li",{children:"✓ Be specific about the location - include nearby landmarks"}),o.jsx("li",{children:"✓ Provide detailed description to help faster resolution"}),o.jsx("li",{children:"✓ Mark severity accurately - it helps with prioritization"}),o.jsx("li",{children:"✓ Our AI system automatically routes to the right department"}),o.jsx("li",{children:"✓ Track your complaint status using your ticket ID on the dashboard"})]})]})]})]})]})}const ui="http://localhost:8000";function Um(){const e=Ze(),{user:t,logout:n}=bt(),[r,l]=j.useState("analytics"),[i,s]=j.useState(null),[a,u]=j.useState([]),[c,h]=j.useState(null),[p,g]=j.useState("");j.useEffect(()=>{v()},[]);const v=async()=>{try{const d=localStorage.getItem("token"),[m,x]=await Promise.all([fetch(`${ui}/api/analytics/summary`,{headers:{Authorization:`Bearer ${d}`}}),fetch(`${ui}/api/complaints/?limit=50`,{headers:{Authorization:`Bearer ${d}`}})]);if(m.ok&&s(await m.json()),x.ok){const b=await x.json();u(b.complaints||[])}}catch(d){console.error("Failed to fetch data:",d)}},y=async()=>{if(!(!c||!p))try{const d=localStorage.getItem("token");(await fetch(`${ui}/api/complaints/${c.ticket_id}/status`,{method:"PATCH",headers:{Authorization:`Bearer ${d}`,"Content-Type":"application/json"},body:JSON.stringify({status:p,note:""})})).ok&&(h(null),g(""),v())}catch(d){console.error("Failed to update status:",d)}},w=async()=>{await n(),e("/login")},k=`
    .official-dashboard {
      background: #080c14;
      min-height: 100vh;
      color: #cbd5e1;
      font-family: 'DM Sans', sans-serif;
    }

    .dashboard-header {
      background: #0d1520;
      border-bottom: 1px solid #1e3048;
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }

    .header-title span {
      color: #06b6d4;
    }

    .user-info {
      font-size: 13px;
      color: #94a3b8;
    }

    .user-name {
      color: #cbd5e1;
      font-weight: 600;
    }

    .badge-official {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      color: #6366f1;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      margin-left: 8px;
    }

    .header-right {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #ef4444;
      color: #ef4444;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .dashboard-container {
      padding: 32px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 32px;
      border-bottom: 1px solid #1e3048;
      padding-bottom: 16px;
    }

    .tab-btn {
      padding: 8px 20px;
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .tab-btn.active {
      color: #06b6d4;
      border-bottom-color: #06b6d4;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 32px;
    }

    @media (max-width: 900px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .stat-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
    }

    .stat-value {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #06b6d4;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 12px;
      color: #94a3b8;
      text-transform: uppercase;
      font-weight: 600;
    }

    .card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .complaints-table {
      overflow-x: auto;
    }

    .complaints-table table {
      width: 100%;
      border-collapse: collapse;
    }

    .complaints-table th {
      background: #0d1520;
      padding: 12px;
      text-align: left;
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      border-bottom: 1px solid #1e3048;
    }

    .complaints-table td {
      padding: 16px 12px;
      border-bottom: 1px solid #1e3048;
      font-size: 14px;
    }

    .complaints-table tr:hover {
      background: #0d1520;
      cursor: pointer;
    }

    .ticket-id {
      font-family: 'Syne', sans-serif;
      color: #06b6d4;
      font-weight: 700;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .status-pending {
      background: rgba(100, 116, 139, 0.2);
      color: #94a3b8;
    }

    .status-progress {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .status-resolved {
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
    }

    .status-critical {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 32px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    .modal-row {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      background: #0d1520;
      border-radius: 8px;
    }

    .modal-label {
      color: #94a3b8;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .modal-value {
      color: #f0f9ff;
      font-weight: 600;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px;
      color: #f0f9ff;
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-select:focus {
      outline: none;
      border-color: #06b6d4;
    }

    .modal-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-primary,
    .btn-secondary {
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      flex: 1;
    }

    .btn-primary {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid #1e3048;
      color: #94a3b8;
    }

    .btn-secondary:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #64748b;
    }
  `,f=d=>d==="Resolved"?"status-resolved":d==="In Progress"?"status-progress":d==="Critical"?"status-critical":"status-pending";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:k}),o.jsxs("div",{className:"official-dashboard",children:[o.jsxs("div",{className:"dashboard-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"header-title",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("div",{className:"user-info",children:["Welcome, ",o.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Official"}),o.jsx("span",{className:"badge-official",children:"OFFICIAL"})]})]}),o.jsx("div",{className:"header-right",children:o.jsx("button",{className:"logout-btn",onClick:w,children:"Logout"})})]}),o.jsxs("div",{className:"dashboard-container",children:[o.jsxs("div",{className:"tabs",children:[o.jsx("button",{className:`tab-btn ${r==="analytics"?"active":""}`,onClick:()=>l("analytics"),children:"📊 Analytics"}),o.jsx("button",{className:`tab-btn ${r==="manage"?"active":""}`,onClick:()=>l("manage"),children:"📋 Manage Complaints"})]}),r==="analytics"&&i&&o.jsxs("div",{children:[o.jsxs("div",{className:"stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:i.total||0}),o.jsx("div",{className:"stat-label",children:"Total Complaints"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:i.active||0}),o.jsx("div",{className:"stat-label",children:"Active"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:i.resolved||0}),o.jsx("div",{className:"stat-label",children:"Resolved"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-value",children:i.critical||0}),o.jsx("div",{className:"stat-label",children:"Critical"})]})]}),o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"KPI Metrics"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px"},children:[o.jsxs("div",{style:{background:"#0d1520",padding:"16px",borderRadius:"8px"},children:[o.jsx("div",{style:{fontSize:"12px",color:"#94a3b8",marginBottom:"4px"},children:"Resolution Rate"}),o.jsxs("div",{style:{fontSize:"24px",fontWeight:"700",color:"#10b981"},children:[i.resolution_rate?Math.round(i.resolution_rate):0,"%"]})]}),o.jsxs("div",{style:{background:"#0d1520",padding:"16px",borderRadius:"8px"},children:[o.jsx("div",{style:{fontSize:"12px",color:"#94a3b8",marginBottom:"4px"},children:"Avg Resolution"}),o.jsxs("div",{style:{fontSize:"24px",fontWeight:"700",color:"#06b6d4"},children:[i.avg_resolution_hours?Math.round(i.avg_resolution_hours):0,"h"]})]})]})]})]}),r==="manage"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"Manage Complaints"}),a.length>0?o.jsx("div",{className:"complaints-table",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Ticket ID"}),o.jsx("th",{children:"Issue Type"}),o.jsx("th",{children:"Location"}),o.jsx("th",{children:"Department"}),o.jsx("th",{children:"Priority"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Action"})]})}),o.jsx("tbody",{children:a.map(d=>o.jsxs("tr",{children:[o.jsx("td",{className:"ticket-id",children:d.ticket_id}),o.jsx("td",{children:d.issue_type}),o.jsx("td",{children:d.location}),o.jsx("td",{children:d.department}),o.jsx("td",{children:d.priority}),o.jsx("td",{children:o.jsx("span",{className:`status-badge ${f(d.status)}`,children:d.status})}),o.jsx("td",{children:o.jsx("button",{onClick:()=>{h(d),g(d.status)},style:{background:"transparent",border:"1px solid #06b6d4",color:"#06b6d4",padding:"4px 12px",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"600"},children:"Update"})})]},d.ticket_id))})]})}):o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"No complaints to manage"})})]}),c&&o.jsx("div",{className:"modal-overlay",onClick:()=>h(null),children:o.jsxs("div",{className:"modal",onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:["Update Complaint ",c.ticket_id]}),o.jsxs("div",{className:"modal-content",children:[o.jsxs("div",{className:"modal-row",children:[o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Issue"}),o.jsx("div",{className:"modal-value",children:c.issue_type})]}),o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Priority"}),o.jsx("div",{className:"modal-value",children:c.priority})]})]}),o.jsxs("div",{className:"modal-row",children:[o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Location"}),o.jsx("div",{className:"modal-value",children:c.location})]}),o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Department"}),o.jsx("div",{className:"modal-value",children:c.department})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Change Status"}),o.jsxs("select",{className:"form-select",value:p,onChange:d=>g(d.target.value),children:[o.jsx("option",{value:"Pending",children:"Pending"}),o.jsx("option",{value:"In Progress",children:"In Progress"}),o.jsx("option",{value:"Critical",children:"Critical"}),o.jsx("option",{value:"Resolved",children:"Resolved"})]})]})]}),o.jsxs("div",{className:"modal-buttons",children:[o.jsx("button",{className:"btn-secondary",onClick:()=>h(null),children:"Cancel"}),o.jsx("button",{className:"btn-primary",onClick:y,children:"Update Status"})]})]})})]})]})]})}const ci="http://localhost:8000";function Am(){const e=Ze(),{user:t,logout:n}=bt(),[r,l]=j.useState("assigned"),[i,s]=j.useState([]),[a,u]=j.useState(null),[c,h]=j.useState(""),[p,g]=j.useState("");j.useEffect(()=>{v()},[]);const v=async()=>{var x;try{const b=localStorage.getItem("token"),N=await fetch(`${ci}/api/complaints/?limit=100`,{headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"}});if(N.ok){const P=((x=(await N.json()).complaints)==null?void 0:x.filter(O=>O.status==="In Progress"||O.status==="Pending"))||[];s(P)}}catch(b){console.error("Failed to fetch complaints:",b)}},y=async x=>{if(!c.trim()){alert("Please add a note before resolving");return}try{const b=localStorage.getItem("token");(await fetch(`${ci}/api/complaints/${x}/status`,{method:"PATCH",headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"},body:JSON.stringify({status:"Resolved",note:c})})).ok&&(u(null),h(""),v())}catch(b){console.error("Failed to resolve complaint:",b)}},w=async()=>{try{const x=localStorage.getItem("token");(await fetch(`${ci}/api/complaints/${a.ticket_id}/status`,{method:"PATCH",headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"},body:JSON.stringify({status:p,note:c})})).ok&&(u(null),h(""),g(""),v())}catch(x){console.error("Failed to update status:",x)}},k=async()=>{await n(),e("/login")},f=`
    .worker-dashboard {
      background: #080c14;
      min-height: 100vh;
      color: #cbd5e1;
      font-family: 'DM Sans', sans-serif;
    }

    .dashboard-header {
      background: #0d1520;
      border-bottom: 1px solid #1e3048;
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }

    .header-title span {
      color: #06b6d4;
    }

    .user-info {
      font-size: 13px;
      color: #94a3b8;
    }

    .user-name {
      color: #cbd5e1;
      font-weight: 600;
    }

    .badge-worker {
      display: inline-block;
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      margin-left: 8px;
    }

    .header-right {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #ef4444;
      color: #ef4444;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .dashboard-container {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 32px;
      border-bottom: 1px solid #1e3048;
      padding-bottom: 16px;
    }

    .tab-btn {
      padding: 8px 20px;
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .tab-btn.active {
      color: #06b6d4;
      border-bottom-color: #06b6d4;
    }

    .card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .complaints-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }

    @media (max-width: 900px) {
      .complaints-grid {
        grid-template-columns: 1fr;
      }
    }

    .complaint-card {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .complaint-card:hover {
      border-color: #06b6d4;
      background: #162030;
    }

    .complaint-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .ticket-id {
      font-family: 'Syne', sans-serif;
      color: #06b6d4;
      font-weight: 700;
      font-size: 14px;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
    }

    .status-pending {
      background: rgba(100, 116, 139, 0.2);
      color: #94a3b8;
    }

    .status-progress {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .complaint-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .info-row {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }

    .info-label {
      color: #94a3b8;
      font-weight: 600;
    }

    .info-value {
      color: #cbd5e1;
      font-weight: 500;
    }

    .severity-bar {
      background: #0d1520;
      height: 4px;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .severity-fill {
      height: 100%;
      border-radius: 2px;
    }

    .action-buttons {
      display: flex;
      gap: 8px;
    }

    .btn-update,
    .btn-resolve {
      flex: 1;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.2s;
    }

    .btn-update {
      background: transparent;
      border: 1px solid #06b6d4;
      color: #06b6d4;
    }

    .btn-update:hover {
      background: rgba(6, 182, 212, 0.1);
    }

    .btn-resolve {
      background: #10b981;
      color: #000;
    }

    .btn-resolve:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 32px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    .modal-row {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      background: #0d1520;
      border-radius: 8px;
    }

    .modal-label {
      color: #94a3b8;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .modal-value {
      color: #f0f9ff;
      font-weight: 600;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .form-input,
    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px;
      color: #f0f9ff;
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus {
      outline: none;
      border-color: #06b6d4;
    }

    .form-input[type="textarea"],
    textarea.form-input {
      resize: vertical;
      min-height: 120px;
    }

    .modal-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-primary,
    .btn-secondary {
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      flex: 1;
    }

    .btn-primary {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #000;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid #1e3048;
      color: #94a3b8;
    }

    .btn-secondary:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #64748b;
    }

    .severity-critical { background: #ef4444; }
    .severity-high { background: #f59e0b; }
    .severity-medium { background: #06b6d4; }
    .severity-low { background: #10b981; }
  `,d=x=>x>=9?"severity-critical":x>=7?"severity-high":x>=5?"severity-medium":"severity-low",m=x=>x==="In Progress"?"status-progress":"status-pending";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:f}),o.jsxs("div",{className:"worker-dashboard",children:[o.jsxs("div",{className:"dashboard-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"header-title",children:["City",o.jsx("span",{children:"Pulse"})]}),o.jsxs("div",{className:"user-info",children:["Welcome, ",o.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Worker"}),o.jsx("span",{className:"badge-worker",children:"WORKER"})]})]}),o.jsx("div",{className:"header-right",children:o.jsx("button",{className:"logout-btn",onClick:k,children:"Logout"})})]}),o.jsxs("div",{className:"dashboard-container",children:[o.jsxs("div",{className:"tabs",children:[o.jsxs("button",{className:`tab-btn ${r==="assigned"?"active":""}`,onClick:()=>l("assigned"),children:["📋 Assigned Complaints (",i.length,")"]}),o.jsx("button",{className:`tab-btn ${r==="guide"?"active":""}`,onClick:()=>l("guide"),children:"📖 Work Guide"})]}),r==="assigned"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"Your Assigned Tasks"}),i.length>0?o.jsx("div",{className:"complaints-grid",children:i.map(x=>o.jsxs("div",{className:"complaint-card",children:[o.jsxs("div",{className:"complaint-header",children:[o.jsx("div",{className:"ticket-id",children:x.ticket_id}),o.jsx("span",{className:`status-badge ${m(x.status)}`,children:x.status})]}),o.jsx("div",{style:{fontSize:"13px",fontWeight:"600",marginBottom:"8px",color:"#f0f9ff"},children:x.issue_type}),o.jsxs("div",{style:{fontSize:"12px",color:"#94a3b8",marginBottom:"12px"},children:["📍 ",x.location]}),o.jsx("div",{className:"severity-bar",children:o.jsx("div",{className:`severity-fill ${d(x.severity)}`,style:{width:`${x.severity/10*100}%`}})}),o.jsxs("div",{className:"complaint-info",children:[o.jsxs("div",{className:"info-row",children:[o.jsx("div",{className:"info-label",children:"Severity"}),o.jsxs("div",{className:"info-value",children:[x.severity,"/10"]})]}),o.jsxs("div",{className:"info-row",children:[o.jsx("div",{className:"info-label",children:"Priority"}),o.jsx("div",{className:"info-value",children:x.priority})]}),o.jsxs("div",{className:"info-row",children:[o.jsx("div",{className:"info-label",children:"Department"}),o.jsx("div",{className:"info-value",children:x.department})]})]}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn-update",onClick:()=>{u(x),g(x.status),h("")},children:"📝 Update Status"}),o.jsx("button",{className:"btn-resolve",onClick:()=>{u(x),g("Resolved"),h("")},children:"✓ Resolve"})]})]},x.ticket_id))}):o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"✓ No pending complaints assigned to you"})})]}),r==="guide"&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-title",children:"Worker Instructions"}),o.jsxs("div",{style:{lineHeight:"1.8",color:"#cbd5e1"},children:[o.jsx("h3",{style:{marginTop:"16px",color:"#f0f9ff"},children:"1. Review Assigned Complaints"}),o.jsx("p",{children:'Check the "Assigned Complaints" tab for all tasks assigned to you.'}),o.jsx("h3",{style:{marginTop:"16px",color:"#f0f9ff"},children:"2. Update Progress"}),o.jsx("p",{children:'Click "Update Status" to change from Pending to In Progress as you work on the issue.'}),o.jsx("h3",{style:{marginTop:"16px",color:"#f0f9ff"},children:"3. Upload Repair Photo"}),o.jsx("p",{children:"When resolved, include a before/after photo as documentation."}),o.jsx("h3",{style:{marginTop:"16px",color:"#f0f9ff"},children:"4. Mark as Resolved"}),o.jsx("p",{children:'When the issue is fixed, click "Resolve" and add a completion note.'}),o.jsx("h3",{style:{marginTop:"16px",color:"#f0f9ff"},children:"5. Notes Section"}),o.jsx("p",{children:"Always add completion notes for the record - describes what was done and any follow-up needed."}),o.jsxs("div",{style:{background:"#0d1520",border:"1px solid #1e3048",borderRadius:"8px",padding:"16px",marginTop:"24px"},children:[o.jsx("p",{style:{color:"#10b981",fontWeight:"600"},children:"💡 Pro Tip"}),o.jsx("p",{children:"Add detailed notes for each update so officials can track progress and understand any roadblocks."})]})]})]}),a&&o.jsx("div",{className:"modal-overlay",onClick:()=>u(null),children:o.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modal-title",children:[p==="Resolved"?"✓ Mark as Resolved":"Update Status"," - ",a.ticket_id]}),o.jsxs("div",{className:"modal-content",children:[o.jsxs("div",{className:"modal-row",children:[o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Issue"}),o.jsx("div",{className:"modal-value",children:a.issue_type})]}),o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Severity"}),o.jsxs("div",{className:"modal-value",children:[a.severity,"/10"]})]})]}),o.jsxs("div",{className:"modal-row",children:[o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Location"}),o.jsx("div",{className:"modal-value",children:a.location})]}),o.jsxs("div",{children:[o.jsx("div",{className:"modal-label",children:"Department"}),o.jsx("div",{className:"modal-value",children:a.department})]})]}),p!=="Resolved"&&o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Change Status To"}),o.jsxs("select",{className:"form-select",value:p,onChange:x=>g(x.target.value),children:[o.jsx("option",{value:"Pending",children:"Pending"}),o.jsx("option",{value:"In Progress",children:"In Progress"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Work Notes / Completion Details"}),o.jsx("textarea",{className:"form-input",placeholder:p==="Resolved"?"Describe what was done and mark as resolved...":"Add notes about your progress...",value:c,onChange:x=>h(x.target.value),rows:6,style:{fontFamily:"DM Sans, sans-serif"}})]})]}),o.jsxs("div",{className:"modal-buttons",children:[o.jsx("button",{className:"btn-secondary",onClick:()=>u(null),children:"Cancel"}),o.jsx("button",{className:"btn-primary",onClick:()=>{p==="Resolved"?y(a.ticket_id):w()},children:p==="Resolved"?"Mark Resolved":"Update Status"})]})]})})]})]})]})}function Bm(){return o.jsx(Em,{children:o.jsx(Tm,{children:o.jsxs(wm,{children:[o.jsx(Be,{path:"/",element:o.jsx(Lm,{})}),o.jsx(Be,{path:"/login",element:o.jsx(Im,{})}),o.jsx(Be,{path:"/register",element:o.jsx(Om,{})}),o.jsx(Be,{path:"/citizen/dashboard",element:o.jsx(Rr,{requiredRole:"citizen",children:o.jsx(Dm,{})})}),o.jsx(Be,{path:"/citizen/file",element:o.jsx(Rr,{requiredRole:"citizen",children:o.jsx(Fm,{})})}),o.jsx(Be,{path:"/official/dashboard",element:o.jsx(Rr,{requiredRole:"official",children:o.jsx(Um,{})})}),o.jsx(Be,{path:"/worker/dashboard",element:o.jsx(Rr,{requiredRole:"worker",children:o.jsx(Am,{})})}),o.jsx(Be,{path:"*",element:o.jsx(io,{to:"/",replace:!0})})]})})})}di.createRoot(document.getElementById("root")).render(o.jsx(Fa.StrictMode,{children:o.jsx(Bm,{})}));
