!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function E(e){return c=e,a=setTimeout(S,t),d?b(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function S(){var e=p();if(O(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function T(e){return a=void 0,m&&r?b(e):(r=i=void 0,f)}function h(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return E(l);if(s)return a=setTimeout(S,t),b(l)}return void 0===a&&(a=setTimeout(S,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},h.flush=function(){return void 0===a?f:T(p())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var E,O="feedback-form-state",S={},T={formEl:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};T.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(O)})),T.formEl.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(S))}),500)),(E=JSON.parse(localStorage.getItem(O)))&&(T.formEl.email.value=E.email,T.formEl.message.value=E.message)}();
//# sourceMappingURL=03-feedback.55fe1cf6.js.map
