"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=s(function(p,n){
var i=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/assert-is-collection/dist'),l=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r){var t;if(typeof e!="object"||e===null||!o(e.shape))throw new TypeError(a('1ml4f',e));if(!i(r))throw new TypeError(a('1ml7f',r));if(t=l(e,r),i(t))return t;throw new TypeError(a('1ml4f',e))}n.exports=m
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
