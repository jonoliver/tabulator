(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(2829)}])},2829:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return nP}});var r=e(5893),i=e(9008),o=e.n(i);function u(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function s(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if("Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,t)}}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||u(n,t)||s(n,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n){return function(n){if(Array.isArray(n))return c(n)}(n)||u(n)||s(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=e(7294);function d(n){for(var t=arguments.length,e=Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+n+(e.length?" "+e.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function C(n){return!!n&&!!n[q]}function p(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var e=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return e===Object||"function"==typeof e&&Function.toString.call(e)===J}(n)||Array.isArray(n)||!!n[$]||!!n.constructor[$]||m(n)||j(n))}function h(n,t,e){void 0===e&&(e=!1),0===v(n)?(e?Object.keys:Y)(n).forEach(function(r){e&&"symbol"==typeof r||t(r,n[r],n)}):n.forEach(function(e,r){return t(r,e,n)})}function v(n){var t=n[q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:m(n)?2:j(n)?3:0}function y(n,t){return 2===v(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function b(n,t,e){var r=v(n);2===r?n.set(t,e):3===r?(n.delete(t),n.add(e)):n[t]=e}function m(n){return B&&n instanceof Map}function j(n){return U&&n instanceof Set}function x(n){return n.o||n.t}function g(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=Q(n);delete t[q];for(var e=Y(t),r=0;r<e.length;r++){var i=e[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function H(n,t){return void 0===t&&(t=!1),V(n)||C(n)||!p(n)||(v(n)>1&&(n.set=n.add=n.clear=n.delete=L),Object.freeze(n),t&&h(n,function(n,t){return H(t,!0)},!0)),n}function L(){d(2)}function V(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function w(n){var t=nn[n];return t||d(18,n),t}function _(n,t){t&&(w("Patches"),n.u=[],n.s=[],n.v=t)}function P(n){O(n),n.p.forEach(M),n.p=null}function O(n){n===K&&(K=n.l)}function A(n){return K={p:[],l:K,h:n,m:!0,_:0}}function M(n){var t=n[q];0===t.i||1===t.i?t.j():t.O=!0}function k(n,t){t._=t.p.length;var e=t.p[0],r=void 0!==n&&n!==e;return t.h.g||w("ES5").S(t,n,r),r?(e[q].P&&(P(t),d(4)),p(n)&&(n=S(t,n),t.l||N(t,n)),t.u&&w("Patches").M(e[q].t,n,t.u,t.s)):n=S(t,e,[]),P(t),t.u&&t.v(t.u,t.s),n!==X?n:void 0}function S(n,t,e){if(V(t))return t;var r=t[q];if(!r)return h(t,function(i,o){return E(n,r,t,i,o,e)},!0),t;if(r.A!==n)return t;if(!r.P)return N(n,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=g(r.k):r.o;h(3===r.i?new Set(i):i,function(t,o){return E(n,r,i,t,o,e)}),N(n,i,!1),e&&n.u&&w("Patches").R(r,e,n.u,n.s)}return r.o}function E(n,t,e,r,i,o){if(C(i)){var u=S(n,i,o&&t&&3!==t.i&&!y(t.D,r)?o.concat(r):void 0);if(b(e,r,u),!C(u))return;n.m=!1}if(p(i)&&!V(i)){if(!n.h.F&&n._<1)return;S(n,i),t&&t.A.l||N(n,i)}}function N(n,t,e){void 0===e&&(e=!1),n.h.F&&n.m&&H(t,e)}function Z(n,t){var e=n[q];return(e?x(e):n)[t]}function I(n,t){if(t in n)for(var e=Object.getPrototypeOf(n);e;){var r=Object.getOwnPropertyDescriptor(e,t);if(r)return r;e=Object.getPrototypeOf(e)}}function F(n){n.P||(n.P=!0,n.l&&F(n.l))}function D(n){n.o||(n.o=g(n.t))}function R(n,t,e){var r,i,o,u,c,s,a,f,l,d=m(t)?w("MapSet").N(t,e):j(t)?w("MapSet").T(t,e):n.g?(c=u={i:(o=Array.isArray(t))?1:0,A:e?e.A:K,P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},s=nt,o&&(c=[u],s=ne),f=(a=Proxy.revocable(c,s)).revoke,l=a.proxy,u.k=l,u.j=f,l):w("ES5").J(t,e);return(e?e.A:K).p.push(d),d}function z(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return g(n)}var T,K,G="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),B="undefined"!=typeof Map,U="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=G?Symbol.for("immer-nothing"):((T={})["immer-nothing"]=!0,T),$=G?Symbol.for("immer-draftable"):"__$immer_draftable",q=G?Symbol.for("immer-state"):"__$immer_state",J=""+Object.prototype.constructor,Y="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,Q=Object.getOwnPropertyDescriptors||function(n){var t={};return Y(n).forEach(function(e){t[e]=Object.getOwnPropertyDescriptor(n,e)}),t},nn={},nt={get:function(n,t){if(t===q)return n;var e,r,i,o,u,c=x(n);if(!y(c,t))return e=n,r=c,(u=I(r,i=t))?"value"in u?u.value:null===(o=u.get)||void 0===o?void 0:o.call(e.k):void 0;var s=c[t];return n.I||!p(s)?s:s===Z(n.t,t)?(D(n),n.o[t]=R(n.A.h,s,n)):s},has:function(n,t){return t in x(n)},ownKeys:function(n){return Reflect.ownKeys(x(n))},set:function(n,t,e){var r=I(x(n),t);if(null==r?void 0:r.set)return r.set.call(n.k,e),!0;if(!n.P){var i,o,u=Z(x(n),t),c=null==u?void 0:u[q];if(c&&c.t===e)return n.o[t]=e,n.D[t]=!1,!0;if((e===u?0!==e||1/e==1/u:e!=e&&u!=u)&&(void 0!==e||y(n.t,t)))return!0;D(n),F(n)}return n.o[t]===e&&"number"!=typeof e&&(void 0!==e||t in n.o)||(n.o[t]=e,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==Z(n.t,t)||t in n.t?(n.D[t]=!1,D(n),F(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var e=x(n),r=Reflect.getOwnPropertyDescriptor(e,t);return r?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:r.enumerable,value:e[t]}:r},defineProperty:function(){d(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){d(12)}},ne={};h(nt,function(n,t){ne[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ne.deleteProperty=function(n,t){return ne.set.call(this,n,t,void 0)},ne.set=function(n,t,e){return nt.set.call(this,n[0],t,e,n[0])};var nr=new(function(){function n(n){var t=this;this.g=W,this.F=!0,this.produce=function(n,e,r){if("function"==typeof n&&"function"!=typeof e){var i,o=e;return e=n,function(n){var r=this;void 0===n&&(n=o);for(var i=arguments.length,u=Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=arguments[c];return t.produce(n,function(n){var t;return(t=e).call.apply(t,[r,n].concat(u))})}}if("function"!=typeof e&&d(6),void 0!==r&&"function"!=typeof r&&d(7),p(n)){var u=A(t),c=R(t,n,void 0),s=!0;try{i=e(c),s=!1}finally{s?P(u):O(u)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then(function(n){return _(u,r),k(n,u)},function(n){throw P(u),n}):(_(u,r),k(i,u))}if(!n||"object"!=typeof n){if(void 0===(i=e(n))&&(i=n),i===X&&(i=void 0),t.F&&H(i,!0),r){var a=[],f=[];w("Patches").M(n,i,a,f),r(a,f)}return i}d(21,n)},this.produceWithPatches=function(n,e){if("function"==typeof n)return function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(e,function(t){return n.apply(void 0,[t].concat(i))})};var r,i,o=t.produce(n,e,function(n,t){r=n,i=t});return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(n){return[n,r,i]}):[o,r,i]},"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze)}var t=n.prototype;return t.createDraft=function(n){p(n)||d(8),C(n)&&(t=n,C(t)||d(22,t),n=function n(t){if(!p(t))return t;var e,r=t[q],i=v(t);if(r){if(!r.P&&(r.i<4||!w("ES5").K(r)))return r.t;r.I=!0,e=z(t,i),r.I=!1}else e=z(t,i);return h(e,function(t,i){var o,u;r&&(2===v(o=r.t)?o.get(t):o[t])===i||b(e,t,n(i))}),3===i?new Set(e):e}(t));var t,e=A(this),r=R(this,n,void 0);return r[q].C=!0,O(e),r},t.finishDraft=function(n,t){var e,r=(n&&n[q]).A;return _(r,t),k(void 0,r)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!W&&d(20),this.g=n},t.applyPatches=function(n,t){for(e=t.length-1;e>=0;e--){var e,r=t[e];if(0===r.path.length&&"replace"===r.op){n=r.value;break}}e>-1&&(t=t.slice(e+1));var i=w("Patches").$;return C(n)?i(n,t):this.produce(n,function(n){return i(n,t)})},n}()),ni=nr.produce;nr.produceWithPatches.bind(nr),nr.setAutoFreeze.bind(nr),nr.setUseProxies.bind(nr),nr.applyPatches.bind(nr),nr.createDraft.bind(nr),nr.finishDraft.bind(nr);var no=e(1163),nu="abcdefghijklmnopqrstuvwxyz",nc=function(n){var t=null==n?void 0:n.match(/-([a-z0-9]*)/g),e=/([a-z|]|[0-9|]+)/g;return{strungs:(t||[]).map(function(n){return{notes:((n||"").match(e)||[]).map(function(n){var t=parseInt(n,10);return isNaN(t)?{number:nu.indexOf(n)}:Array(t).fill({})}).flat()}})}},ns=e(1521),na=e.n(ns),nf=e(4032),nl=e.n(nf),nd=function(){return(0,r.jsxs)("header",{className:nl().header,children:[(0,r.jsx)("svg",{viewBox:"0 0 817 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M105.5 1.412C103.85 2.145 101.375 3.963 100 5.451L97.5 8.158L97.206 36.579L96.912 65H104.956H113V57V49H128.773H144.547L152.5 57L160.453 65H173.473H186.493L155.659 34.75C138.7 18.112 122.993 3.487 120.755 2.25C116.155 -0.293 110.087 -0.627 105.5 1.412ZM190 32.542V65.083L231.25 64.792C268.914 64.525 272.821 64.34 276.191 62.664C281.372 60.087 283.213 56.751 283.773 48.928C284.196 43.022 283.932 41.646 281.535 37.242C278.887 32.376 278.861 32.169 280.504 28.992C281.809 26.47 282.111 23.736 281.845 16.885C281.52 8.539 281.325 7.861 278.412 4.949C276.714 3.252 273.564 1.454 271.412 0.955C269.26 0.456 250.063 0.0369999 228.75 0.0239999L190 0V32.542ZM475.5 1.412C473.85 2.145 471.375 3.963 470 5.451L467.5 8.158L467.206 36.579L466.912 65H474.956H483V57V49H498.773H514.547L522.5 57L530.453 65H543.473H556.493L525.659 34.75C508.7 18.112 492.993 3.487 490.755 2.25C486.155 -0.293 480.087 -0.627 475.5 1.412ZM637.685 1.017C633.145 2.379 628.361 6.622 626.102 11.289C624.226 15.164 624.001 17.402 624.006 32.066C624.009 41.105 624.468 50.143 625.025 52.152C626.274 56.646 632.498 62.475 637.688 64.01C640.265 64.772 651.409 65.034 672.076 64.819L702.651 64.5L706.704 61.816C713.906 57.047 715.004 53.215 714.978 32.934C714.959 17.963 714.687 14.908 713.053 11.309C710.866 6.492 707.25 3.011 702.682 1.326C698.927 -0.0589998 642.169 -0.329 637.685 1.017ZM0 9.5V18H19H38V41.5V65H46H54V41.5V18H72.5H91V9.5V1H45.5H0V9.5ZM291 25.843C291 49.91 291.073 50.823 293.323 55.079C295.072 58.386 296.979 60.168 301.035 62.287L306.423 65.102L338.037 64.801L369.651 64.5L373.904 61.684C381.427 56.702 381.953 54.364 381.978 25.75L382 1H373.5H365V23.3C365 39.311 364.662 45.938 363.8 46.8C362.091 48.509 310.909 48.509 309.2 46.8C308.338 45.938 308 39.311 308 23.3V1H299.5H291V25.843ZM390 25.435C390 51.338 390.326 53.572 394.814 58.376C400.633 64.606 402.655 64.954 433.25 64.978L461 65V56.5V48H435.2C416.467 48 409.071 47.671 408.2 46.8C407.338 45.938 407 39.311 407 23.3V1H398.5H390V25.435ZM526 9.5V18H545H564V41.5V65H572H580V41.5V18H598.5H617V9.5V1H571.5H526V9.5ZM723 33V65H731.5H740V53V41H768.396H796.792L798.082 53L799.372 65H808.004H816.637L814.945 51.618C813.906 43.405 812.58 37.098 811.512 35.289C809.897 32.555 809.887 32.118 811.386 29.221C813.469 25.192 813.559 12.272 811.536 7.432C808.9 1.124 807.966 1 763.032 1H723V33ZM263.8 18.2C264.46 18.86 265 20.435 265 21.7V24H236H207V20.5V17H234.8C255.089 17 262.924 17.324 263.8 18.2ZM696.8 18.2C697.611 19.011 698 23.644 698 32.5C698 41.356 697.611 45.989 696.8 46.8C695.091 48.509 643.909 48.509 642.2 46.8C640.475 45.075 640.521 18.36 642.25 17.662C642.938 17.385 655.223 17.122 669.55 17.079C688.569 17.021 695.924 17.324 696.8 18.2ZM796.381 19.75C795.103 25.101 795.673 25 766.878 25H740V21V17H768.519H797.038L796.381 19.75ZM122 26.5L130.456 35H121.728H113V26.5C113 21.825 113.122 18 113.272 18C113.422 18 117.349 21.825 122 26.5ZM492 26.5L500.456 35H491.728H483V26.5C483 21.825 483.122 18 483.272 18C483.422 18 487.349 21.825 492 26.5ZM265 43.3C265 47.879 264.22 48 234.8 48H207V44.5V41H236H265V43.3Z",fill:"black"})}),(0,r.jsx)("h1",{className:"visually-hidden",children:"Tabulator"})]})},nC=function(n){var t=n.when,e=n.children;return t?e:null},np=e(9150),nh=e.n(np),nv=function(){return(0,r.jsx)("div",{style:{display:"none"},children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"icon--redo",children:(0,r.jsx)("path",{d:"M36.598 15.9875H31.8284C30.15 15.9875 28.7941 17.3357 28.7941 19.0043C28.7941 20.673 30.15 22.0212 31.8284 22.0212H43.9657C45.644 22.0212 47 20.673 47 19.0043V6.93712C47 5.26845 45.644 3.92032 43.9657 3.92032C42.2873 3.92032 40.9314 5.26845 40.9314 6.93712V11.764L39.2625 10.1048C30.9655 1.85569 17.5197 1.85569 9.22272 10.1048C0.925757 18.3539 0.925757 31.7221 9.22272 39.9712C17.5197 48.2202 30.9655 48.2202 39.2625 39.9712C40.4478 38.7927 40.4478 36.8789 39.2625 35.7005C38.0772 34.522 36.1523 34.522 34.967 35.7005C29.0406 41.5927 19.4351 41.5927 13.5087 35.7005C7.58229 29.8083 7.58229 20.2582 13.5087 14.366C19.4351 8.47381 29.0406 8.47381 34.967 14.366L36.598 15.9875Z",fill:"black"})}),(0,r.jsx)("g",{id:"icon--checkbox",children:(0,r.jsx)("path",{fill:"black",d:"M20.8018 36.2683C19.7312 37.3389 17.983 37.3389 16.9125 36.2683L10.6268 29.9826C9.5533 28.9121 9.5533 27.1639 10.6268 26.0933C11.6973 25.0228 13.4455 25.0228 14.5161 26.0933L18.8571 30.4344L29.4839 19.8076C30.5545 18.7371 32.3027 18.7371 33.3732 19.8076C34.4437 20.8781 34.4437 22.6264 33.3732 23.6969L20.8018 36.2683ZM0 12.3237C0 8.8518 2.81384 6.03796 6.28571 6.03796H37.7143C41.1812 6.03796 44 8.8518 44 12.3237V43.7522C44 47.2192 41.1812 50.038 37.7143 50.038H6.28571C2.81384 50.038 0 47.2192 0 43.7522V12.3237ZM4.71429 12.3237V43.7522C4.71429 44.6165 5.4175 45.3237 6.28571 45.3237H37.7143C38.5786 45.3237 39.2857 44.6165 39.2857 43.7522V12.3237C39.2857 11.4555 38.5786 10.7522 37.7143 10.7522H6.28571C5.4175 10.7522 4.71429 11.4555 4.71429 12.3237Z"})}),(0,r.jsx)("g",{id:"icon--edit",children:(0,r.jsx)("path",{d:"M36.717 2.11112C39.4824 -0.655895 43.9699 -0.655895 46.7352 2.11112L47.926 3.30386C50.6913 6.07116 50.6913 10.5577 47.926 13.323L28.5194 32.7395C27.6632 33.5858 26.6102 34.2058 25.449 34.5404L15.6079 37.3549C14.7813 37.5911 13.8956 37.3549 13.2854 36.6661C12.6851 36.1445 12.4489 35.2588 12.6851 34.4321L15.4997 24.5911C15.8343 23.4298 16.4543 22.3768 17.3006 21.5207L36.717 2.11112ZM43.3105 5.45118C42.474 4.52907 40.9782 4.52907 40.0531 5.45118L37.1894 8.31394L41.7261 12.8507L44.5899 9.89835C45.5149 9.06186 45.5149 7.56602 44.5899 6.64391L43.3105 5.45118ZM20.0463 25.8901L18.393 31.6471L24.15 29.9938C24.5436 29.8856 24.8881 29.6789 25.1734 29.3935L38.39 16.1868L33.8533 11.6501L20.6466 24.8666C20.3612 25.152 20.1545 25.4964 20.0463 25.8901ZM19.6821 5.95209C20.991 5.95209 22.044 7.01 22.044 8.31394C22.044 9.6228 20.991 10.6758 19.6821 10.6758H8.66014C6.48625 10.6758 4.72371 12.4373 4.72371 14.6122V41.3799C4.72371 43.5548 6.48625 45.3164 8.66014 45.3164H35.4278C37.6027 45.3164 39.3643 43.5548 39.3643 41.3799V30.3579C39.3643 29.0491 40.4173 27.9961 41.7261 27.9961C43.035 27.9961 44.088 29.0491 44.088 30.3579V41.3799C44.088 46.1627 40.2106 50.0401 35.4278 50.0401H8.66014C3.87738 50.0401 0 46.1627 0 41.3799V14.6122C0 9.82947 3.87738 5.95209 8.66014 5.95209H19.6821Z",fill:"black"})}),(0,r.jsxs)("g",{id:"icon--copy",children:[(0,r.jsx)("path",{d:"M19.0394 7.4277C20.3055 7.4277 21.3241 8.45106 21.3241 9.71242C21.3241 10.9785 20.3055 11.9971 19.0394 11.9971H8.37733C6.27443 11.9971 4.56945 13.7012 4.56945 15.805V41.6986C4.56945 43.8024 6.27443 45.5065 8.37733 45.5065H34.2709C36.3747 45.5065 38.0788 43.8024 38.0788 41.6986V31.0365C38.0788 29.7704 39.0974 28.7518 40.3635 28.7518C41.6296 28.7518 42.6482 29.7704 42.6482 31.0365V41.6986C42.6482 46.3252 38.8975 50.0759 34.2709 50.0759H8.37733C3.75076 50.0759 0 46.3252 0 41.6986V15.805C0 11.1785 3.75076 7.4277 8.37733 7.4277H19.0394Z",fill:"black"}),(0,r.jsx)("path",{d:"M24.5001 2.5H47.0001C48.3808 2.5 49.5001 3.61929 49.5001 5V27.5C49.5001 28.8807 48.3808 30 47.0001 30C45.6194 30 44.5001 28.8807 44.5001 27.5V11.0355L44.0613 11.4744C43.9372 11.5984 43.8033 11.7067 43.6621 11.7993C43.5696 11.9405 43.4613 12.0744 43.3372 12.1984L42.6131 12.9225C42.489 13.0466 42.3551 13.1549 42.214 13.2475C42.1214 13.3887 42.0131 13.5225 41.889 13.6466L41.1649 14.3707C41.0408 14.4948 40.907 14.6031 40.7658 14.6956C40.6732 14.8368 40.5649 14.9707 40.4408 15.0948L39.7167 15.8189C39.5927 15.943 39.4588 16.0513 39.3176 16.1438C39.225 16.285 39.1167 16.4189 38.9927 16.543L38.2686 17.2671C38.1445 17.3912 38.0106 17.4995 37.8694 17.592C37.7769 17.7332 37.6686 17.8671 37.5445 17.9912L36.8204 18.7152C36.6963 18.8393 36.5624 18.9476 36.4212 19.0402C36.3287 19.1814 36.2204 19.3153 36.0963 19.4393L35.3722 20.1634C35.2481 20.2875 35.1142 20.3958 34.9731 20.4884C34.8805 20.6296 34.7722 20.7634 34.6481 20.8875L33.924 21.6116C33.7999 21.7357 33.6661 21.844 33.5249 21.9365C33.4323 22.0777 33.324 22.2116 33.1999 22.3357L32.4758 23.0598C32.3518 23.1839 32.2179 23.2922 32.0767 23.3847C31.9842 23.5259 31.8758 23.6598 31.7518 23.7839L31.0277 24.508C30.9036 24.632 30.7697 24.7404 30.6285 24.8329C30.536 24.9741 30.4277 25.108 30.3036 25.2321L29.5795 25.9561C29.4554 26.0802 29.3215 26.1885 29.1803 26.2811C29.0878 26.4223 28.9795 26.5561 28.8554 26.6802L28.1313 27.4043C28.0072 27.5284 27.8733 27.6367 27.7322 27.7293C27.6396 27.8704 27.5313 28.0043 27.4072 28.1284L26.6831 28.8525C26.559 28.9766 26.4252 29.0849 26.284 29.1774C26.1914 29.3186 26.0831 29.4525 25.959 29.5766L25.2349 30.3007C25.1109 30.4248 24.977 30.5331 24.8358 30.6256C24.8358 30.728 24.2919 31.0215 23.7759 31.0139C23.1476 31.0046 22.2662 30.8675 21.6994 30.3007C21.1326 29.7339 20.9938 28.7402 20.9862 28.2242C20.9786 27.7082 21.1544 27.5 21.3745 27.1643C21.467 27.0231 21.5753 26.8892 21.6994 26.7651L22.4235 26.0411C22.5476 25.917 22.6815 25.8087 22.8227 25.7161C22.9152 25.5749 23.0235 25.4411 23.1476 25.317L23.8717 24.5929C23.9958 24.4688 24.1296 24.3605 24.2708 24.2679C24.3634 24.1268 24.4717 23.9929 24.5958 23.8688L25.3199 23.1447C25.4439 23.0206 25.5778 22.9123 25.719 22.8198C25.8116 22.6786 25.9199 22.5447 26.044 22.4206L26.768 21.6965C26.8921 21.5724 27.026 21.4641 27.1672 21.3716C27.2597 21.2304 27.368 21.0965 27.4921 20.9724L28.2162 20.2483C28.3403 20.1243 28.4742 20.0159 28.6154 19.9234C28.7079 19.7822 28.8162 19.6483 28.9403 19.5243L29.6644 18.8002C29.7885 18.6761 29.9224 18.5678 30.0636 18.4752C30.1561 18.334 30.2644 18.2002 30.3885 18.0761L31.1126 17.352C31.2367 17.2279 31.3705 17.1196 31.5117 17.027C31.6043 16.8859 31.7126 16.752 31.8367 16.6279L32.5608 15.9038C32.6848 15.7797 32.8187 15.6714 32.9599 15.5789C33.0525 15.4377 33.1608 15.3038 33.2849 15.1797L34.0089 14.4556C34.133 14.3315 34.2669 14.2232 34.4081 14.1307C34.5006 13.9895 34.6089 13.8556 34.733 13.7315L35.4571 13.0074C35.5812 12.8834 35.7151 12.775 35.8563 12.6825C35.9488 12.5413 36.0571 12.4074 36.1812 12.2834L36.9053 11.5593C37.0294 11.4352 37.1633 11.3269 37.3045 11.2343C37.397 11.0931 37.5053 10.9593 37.6294 10.8352L38.3535 10.1111C38.4776 9.987 38.6114 9.87869 38.7526 9.78615C38.8452 9.64496 38.9535 9.51108 39.0776 9.38699L39.8017 8.66291C39.9257 8.53882 40.0596 8.43051 40.2008 8.33797C40.2934 8.19678 40.4017 8.0629 40.5257 7.93882L40.9646 7.5H24.5001C23.1194 7.5 22.0001 6.38071 22.0001 5C22.0001 3.61929 23.1194 2.5 24.5001 2.5Z",fill:"black"})]}),(0,r.jsx)("g",{id:"icon--plus",children:(0,r.jsx)("path",{d:"M26 4.03796C26 1.82546 24.2125 0.0379639 22 0.0379639C19.7875 0.0379639 18 1.82546 18 4.03796V18.038H4C1.7875 18.038 0 19.8255 0 22.038C0 24.2505 1.7875 26.038 4 26.038H18V40.038C18 42.2505 19.7875 44.038 22 44.038C24.2125 44.038 26 42.2505 26 40.038V26.038H40C42.2125 26.038 44 24.2505 44 22.038C44 19.8255 42.2125 18.038 40 18.038H26V4.03796Z",fill:"black"})}),(0,r.jsx)("g",{id:"icon--minus",children:(0,r.jsx)("path",{d:"M7 21.038C4.7875 21.038 3 22.8255 3 25.038C3 27.2505 4.7875 29.038 7 29.038C27.5158 29.038 20.0581 29.038 43 29.038C45.2125 29.038 47 27.2505 47 25.038C47 22.8255 45.2125 21.038 43 21.038C22.4951 21.038 29.8703 21.038 7 21.038Z",fill:"black"})}),(0,r.jsx)("g",{id:"icon--undo",children:(0,r.jsx)("path",{d:"M13.402 15.9875H18.1716C19.85 15.9875 21.2059 17.3357 21.2059 19.0043C21.2059 20.673 19.85 22.0212 18.1716 22.0212H6.03432C4.35596 22.0212 3 20.673 3 19.0043V6.93712C3 5.26845 4.35596 3.92032 6.03432 3.92032C7.71268 3.92032 9.06864 5.26845 9.06864 6.93712V11.764L10.7375 10.1048C19.0345 1.85569 32.4803 1.85569 40.7773 10.1048C49.0742 18.3539 49.0742 31.7221 40.7773 39.9712C32.4803 48.2202 19.0345 48.2202 10.7375 39.9712C9.55223 38.7927 9.55223 36.8789 10.7375 35.7005C11.9228 34.522 13.8477 34.522 15.033 35.7005C20.9594 41.5927 30.5649 41.5927 36.4913 35.7005C42.4177 29.8083 42.4177 20.2582 36.4913 14.366C30.5649 8.47381 20.9594 8.47381 15.033 14.366L13.402 15.9875Z",fill:"black"})})]})})},ny=function(n){var t=n.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{style:{width:"2.5rem"},viewBox:"0 0 50 50",children:(0,r.jsx)("use",{xlinkHref:"#".concat(t)})})})},nb=function(n){var t=n.isEdit,e=n.setIsEdit;return(0,r.jsx)("button",{onClick:function(){return e(!t)},children:t?(0,r.jsx)(ny,{id:"icon--checkbox"}):(0,r.jsx)(ny,{id:"icon--edit"})})},nm=function(n){var t=n.isEdit,e=n.setIsEdit,i=n.pasteValue,o=n.setPasteValue;return(0,r.jsxs)("section",{className:nh().editControls,children:[(0,r.jsx)(nC,{when:t,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:nh().editHistory,children:[(0,r.jsx)("button",{onClick:function(){return window.history.back()},children:(0,r.jsx)(ny,{id:"icon--undo"})}),(0,r.jsx)("button",{onClick:function(){return window.history.forward()},children:(0,r.jsx)(ny,{id:"icon--redo"})})]}),(0,r.jsxs)("div",{className:nh().editFret,children:[(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:function(){return i>0&&o(i-1)},children:(0,r.jsx)(ny,{id:"icon--minus"})})}),(0,r.jsxs)("div",{className:nh().fretInput,children:[(0,r.jsx)("label",{htmlFor:"fret-number",children:"FRET"}),(0,r.jsx)("input",{id:"fret-number",type:"number",min:"0",max:"25",value:i,onChange:function(n){return o(parseInt(n.target.value,10))}})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:function(){return o(i+1)},children:(0,r.jsx)(ny,{id:"icon--plus"})})})]})]})}),(0,r.jsxs)("div",{className:nh().editGeneral,children:[(0,r.jsx)("button",{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),alert("Copied shareable link."))},children:(0,r.jsx)(ny,{id:"icon--copy"})}),(0,r.jsx)(nb,{isEdit:t,setIsEdit:e})]})]})},nj={strungs:Array(6).fill({}).map(function(n,t){return{notes:Array(12).fill({}).map(function(n,t){return{}})}})},nx=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return{strungs:Array(n.strungs.length).fill({}).map(function(e,r){return{notes:Array(t).fill({}).map(function(t,e){return n.strungs[r].notes[e]||{}})}})}},ng=function(n,t){var e=f(n).reverse().findIndex(t);return e>-1?n.length-e:-1},nH=function(n){var t,e=(t=Math).max.apply(t,f(n.strungs.map(function(n){return ng(n.notes,function(n){return void 0!==n.number})})));return{strungs:n.strungs.map(function(n){return{notes:n.notes.slice(0,e)}})}},nL=function(n){var t,e=n.note,i=n.setNote,o=void 0!==e.number,u=(t=[na().number,!o&&na().empty]).filter(Boolean).join(" ");return(0,r.jsx)("div",{className:na().fret,onClick:i,children:(0,r.jsx)("span",{className:u,children:e.number})})},nV=function(){var n=(0,l.useState)(nj),t=n[0],e=n[1],i=(0,l.useState)(!0),o=i[0],u=i[1],c=(0,l.useState)(0),s=c[0],f=c[1],d=(0,l.useState)(40),C=d[0],p=d[1],h=(0,no.useRouter)(),v=nx(t,C),y=o?v:nH(v),b=t.strungs.some(function(n){return n.notes.some(function(n){return void 0!==n.number})}),m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=new URLSearchParams(window.location.search).get("r");if(t){var r=nc(t);e(r),n()}},j=(0,l.useRef)(null),x=(0,l.useRef)(null);(0,l.useEffect)(function(){var n={root:j.current,rootMargin:"0px",threshold:1},t=function(n){var t=a(n,1)[0];o&&b&&t.isIntersecting&&p(C+40)},e=new IntersectionObserver(t,n);return e.observe(x.current),function(){return e.unobserve(x.current)}},[o,b,C]),(0,l.useEffect)(function(){m(function(){return u(!1)})},[]),(0,l.useEffect)(function(){return h.beforePopState(function(n){return n.as!==h.asPath&&m(),!0}),function(){h.beforePopState(function(){return!0})}},[h]);var g=function(n,t){if(!(!o||isNaN(s))){var r,i,u=ni(function(e){var r,i=null===(r=e.strungs[n])||void 0===r?void 0:r.notes[t];i&&(i.number=i.number===s?void 0:s)})(v),c=nH(u);h.push("?".concat(["r=".concat((i=c,i.strungs.map(function(n){return n.notes.map(function(n,t){return void 0===n.number||[t,n.number]}).filter(Array.isArray).reduce(function(n,t,e,r){var i=a(t,2),o=i[0],u=i[1];if(o>0){var c=e>0?o-r[e-1][0]-1:r[e][0];c>0&&(n+=c)}return n+nu[u]},"-")}).join(""))),].filter(Boolean).join("&")),void 0,{shallow:!0}),e(u)}};return(0,r.jsxs)("div",{className:na().container,children:[(0,r.jsx)(nd,{}),(0,r.jsx)("div",{ref:j,className:o?na().edit:"",children:(0,r.jsx)("div",{style:{overflowX:"scroll",overflowY:"clip"},children:(0,r.jsx)("div",{className:na().riff,children:null==y?void 0:y.strungs.map(function(n,t){return(0,r.jsxs)("div",{className:na().string,children:[n.notes.map(function(n,e){return(0,r.jsx)(nL,{note:n,setNote:function(){return g(t,e)}},e)}),(0,r.jsx)(nC,{when:0===t,children:(0,r.jsx)("span",{"data-id":"load-more",ref:x})})]},t)})})})}),(0,r.jsx)(nm,{isEdit:o,setIsEdit:u,pasteValue:s,setPasteValue:f})]})},nw=e(1673),n_=e.n(nw),nP=function(){return(0,r.jsxs)("div",{className:n_().container,children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Tabulator"}),(0,r.jsx)("meta",{name:"Tabulator",content:"Tabulator"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsx)(nV,{})}),(0,r.jsx)(nv,{})]})}},9150:function(n){n.exports={editControls:"controls_editControls__6XPBf",editHistory:"controls_editHistory__s7p0E",editFret:"controls_editFret__cEWZd",editGeneral:"controls_editGeneral__z8igz",fretInput:"controls_fretInput__p_xty"}},4032:function(n){n.exports={header:"header_header__GSKJx"}},1521:function(n){n.exports={container:"riff_container__6uQRg",riff:"riff_riff__y8IT_",string:"riff_string__GjvYw",fret:"riff_fret__9jC4r",number:"riff_number__NxtoK",empty:"riff_empty__CGMOw",edit:"riff_edit__qycbV"}},1673:function(){},9008:function(n,t,e){n.exports=e(5443)},1163:function(n,t,e){n.exports=e(387)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);