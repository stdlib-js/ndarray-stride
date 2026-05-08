"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(p,n){
var i=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/assert-is-collection/dist'),l=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){var t;if(typeof r!="object"||r===null||!o(r.shape))throw new TypeError(a('1ml4f',r));if(!i(e))throw new TypeError(a('1ml7f',e));if(t=l(r,e),i(t))return t;throw new TypeError(a('1ml4f',r))}n.exports=m
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
