// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,m=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,y,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):l.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var j=String.fromCharCode,S=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,a,o,u,l,p,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,p=0;p<e.length;p++)if(s(n=e[p]))u+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){return"string"==typeof e}function O(e){var r,t,n;if(!N(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var $=Object.prototype,A=$.toString,P=$.__defineGetter__,C=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__,Z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",q=U()?function(e){var r,t,n,i,a;if(null==e)return X.call(e);t=e[D],a=D,r=null!=(i=e)&&Y.call(i,a);try{e[D]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[D]=t:delete e[D],n}:function(e){return X.call(e)},B=Number,H=B.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof B||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Q(e){return L(e)||K(e)}W(Q,"isPrimitive",L),W(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=B.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return te(e)===e}function ie(e){return e<ee&&e>re&&ne(e)}function ae(e){return L(e)&&ie(e)}function oe(e){return K(e)&&ie(e.valueOf())}function ce(e){return ae(e)||oe(e)}function se(e,r){return"column-major"===r?function(e){var r,t,n;for(r=[],t=1,n=0;n<e.length;n++)r.push(t),t*=e[n];return r}(e):function(e){var r,t,n,i;for(r=e.length,t=[],i=0;i<r;i++)t.push(0);for(n=1,i=r-1;i>=0;i--)t[i]=n,n*=e[i];return t}(e)}function ue(e,r){var t,n,i,a;if(t=function(e){var r=e.ndims;return"number"==typeof r?r:e.shape.length}(e),0===t)throw new TypeError(O("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",t));if(a=t-1,-1===(n=(i=r)<0?(i+=a+1)<0?-1:i:i>a?-1:i))throw new RangeError(O("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",t,r));return function(e,r){var t,n,i;return"object"!=typeof(i=e.strides)||null===i?0===(n=e.shape).length?[0]:("string"!=typeof(t=e.order)&&(t="row-major"),se(n,t)):r?function(e){var r,t,n;for(t=e.length,r=[],n=0;n<t;n++)r.push(e[n]);return r}(i):i}(e,!1)[n]}return W(ce,"isPrimitive",ae),W(ce,"isObject",oe),W(se,"assign",(function(e,r,t){return"column-major"===r?function(e,r){var t,n;for(t=1,n=0;n<e.length;n++)r[n]=t,t*=e[n];return r}(e,t):function(e,r){var t,n;for(t=1,n=e.length-1;n>=0;n--)r[n]=t,t*=e[n];return r}(e,t)})),function(e,r){var t,n;if("object"!=typeof e||null===e||!("object"==typeof(n=e.shape)&&null!==n&&"number"==typeof n.length&&ne(n.length)&&n.length>=0&&n.length<=9007199254740991))throw new TypeError(O("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(!ae(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(ae(t=ue(e,r)))return t;throw new TypeError(O("invalid argument. First argument must be an ndarray. Value: `%s`.",e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).stride=r();
//# sourceMappingURL=index.js.map
