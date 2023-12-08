// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,m=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,v,"e"),n=f.call(n,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,h,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var j=String.fromCharCode,S=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,u,l,p,f;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(s(n=r[p]))u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function O(r){var e,t,n;if(!N(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var P=Object.prototype,$=P.toString,A=P.__defineGetter__,C=P.__defineSetter__,R=P.__lookupGetter__,G=P.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function Z(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var q=M()?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[D],a=D,e=null!=(i=r)&&Y.call(i,a);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},B=Number,H=B.prototype.toString;var J=M();function K(r){return"object"==typeof r&&(r instanceof B||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return L(r)||K(r)}Z(Q,"isPrimitive",L),Z(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=B.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return tr(r)===r}function ir(r){return r<rr&&r>er&&nr(r)}function ar(r){return L(r)&&ir(r)}function or(r){return K(r)&&ir(r.valueOf())}function cr(r){return ar(r)||or(r)}Z(cr,"isPrimitive",ar),Z(cr,"isObject",or);function sr(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,i;for(e=r.length,t=[],i=0;i<e;i++)t.push(0);for(n=1,i=e-1;i>=0;i--)t[i]=n,n*=r[i];return t}(r)}Z(sr,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));function ur(r,e){var t,n,i,a;if(t=function(r){var e=r.ndims;return"number"==typeof e?e:r.shape.length}(r),0===t)throw new TypeError(O("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",t));if(a=t-1,-1===(n=(i=e)<0?(i+=a+1)<0?-1:i:i>a?-1:i))throw new RangeError(O("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",t,e));return function(r,e){var t,n,i;return"object"!=typeof(i=r.strides)||null===i?0===(n=r.shape).length?[0]:("string"!=typeof(t=r.order)&&(t="row-major"),sr(n,t)):e?function(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}(i):i}(r,!1)[n]}function lr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function pr(r,e){var t,n;if("object"!=typeof r||null===r||!("object"==typeof(n=r.shape)&&null!==n&&"number"==typeof n.length&&nr(n.length)&&n.length>=0&&n.length<=9007199254740991))throw new TypeError(lr("null4f,Pc",r));if(!cr(e))throw new TypeError(lr("null7f,LW",e));if(cr(t=ur(r,e)))return t;throw new TypeError(lr("null4f,Pc",r))}export{pr as default};
//# sourceMappingURL=mod.js.map
