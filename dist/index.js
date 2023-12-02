"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(p,i){
var n=require('@stdlib/assert-is-integer/dist'),o=require('@stdlib/assert-is-collection/dist'),l=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function g(r,e){var t;if(typeof r!="object"||r===null||!o(r.shape))throw new TypeError(a('null4f',r));if(!n(e))throw new TypeError(a('null7f',e));if(t=l(r,e),n(t))return t;throw new TypeError(a('null4f',r))}i.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
