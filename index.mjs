// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-stride@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function i(i,n){var o;if("object"!=typeof i||null===i||!e(i.shape))throw new TypeError(t("null4f,Pc",i));if(!r(n))throw new TypeError(t("null7f,LW",n));if(o=s(i,n),r(o))return o;throw new TypeError(t("null4f,Pc",i))}export{i as default};
//# sourceMappingURL=index.mjs.map
