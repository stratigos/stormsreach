webpackJsonp([0],{103:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){Object.defineProperty(C,e,{value:t,enumerable:!1,configurable:!0})}function u(e){return void 0===I||void 0===I[e]?c(e):I[e]}function c(e){switch(e){case"BrowserRouter":return b.BrowserRouter;case"Header":return v.default;case"Switch":return b.Switch;case"Route":return b.Route;case"Home":return g.default;case"Housing":return E.default;case"Crafting":return O.default;case"Community":return S.default;case"About":return x.default;case"Donate":return A.default;case"React":return m.default;case"App":return C}}function l(e,t){return I[e]=t}function f(e){delete I[e]}function s(e){function t(){n.forEach(function(e){I[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=I[t],I[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=n(3),m=r(y),b=n(22),h=n(109),v=r(h),w=n(116),g=r(w),R=n(117),E=r(R),j=n(114),O=r(j),D=n(113),S=r(D),P=n(108),x=r(P),k=n(115),A=r(k),C=function(e){function t(){return o(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){var e=u("BrowserRouter"),t=u("Header"),n=u("Switch"),r=u("Route"),o=u("Route"),_=u("Route"),i=u("Route"),a=u("Route"),c=u("Route"),l=u("Route"),f=u("Route");return m.default.createElement(e,null,m.default.createElement("div",{className:"app-container"},m.default.createElement(t,null),m.default.createElement(n,null,m.default.createElement(r,{exact:!0,path:"/",component:u("Home"),placeholderProp:"Hello!"}),m.default.createElement(o,{path:"/housing",component:u("Housing")}),m.default.createElement(_,{path:"/crafting",component:u("Crafting")}),m.default.createElement(i,{path:"/community",component:u("Community")}),m.default.createElement(a,{path:"/community",component:u("Community")}),m.default.createElement(c,{path:"/about",component:u("About")}),m.default.createElement(l,{path:"/donate",component:u("Donate")}),m.default.createElement(f,{render:function(){return m.default.createElement("p",null,"Page Not Found!")}}))))}}]),t}(u("React").Component);t.default=u("App");var N=void 0===C?"undefined":d(C);"object"!==N&&"function"!==N||!Object.isExtensible(C)||(a("__get__",u),a("__GetDependency__",u),a("__Rewire__",l),a("__set__",l),a("__reset__",f),a("__ResetDependency__",f),a("__with__",s),a("__RewireAPI__",G));var I={},G={};!function(){function e(e,t){Object.defineProperty(G,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",u),e("__GetDependency__",u),e("__Rewire__",l),e("__set__",l),e("__reset__",f),e("__ResetDependency__",f),e("__with__",s)}(),t.__get__=u,t.__GetDependency__=u,t.__Rewire__=l,t.__set__=l,t.__ResetDependency__=f,t.__RewireAPI__=G},106:function(e,t,n){var r=n(119);"string"==typeof r&&(r=[[e.i,r,""]]);n(257)(r,{});r.locals&&(e.exports=r.locals)},108:function(e,t,n){"use strict";function r(e,t){Object.defineProperty(s,e,{value:t,enumerable:!1,configurable:!0})}function o(e){return void 0===p||void 0===p[e]?_(e):p[e]}function _(e){switch(e){case"About":return s}}function i(e,t){return p[e]=t}function a(e){delete p[e]}function u(e){function t(){n.forEach(function(e){p[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=p[t],p[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(3),f=function(e){return e&&e.__esModule?e:{default:e}}(l),s=function(){return f.default.createElement("p",null,"About this site...")};t.default=o("About");var d=void 0===s?"undefined":c(s);"object"!==d&&"function"!==d||!Object.isExtensible(s)||(r("__get__",o),r("__GetDependency__",o),r("__Rewire__",i),r("__set__",i),r("__reset__",a),r("__ResetDependency__",a),r("__with__",u),r("__RewireAPI__",y));var p={},y={};!function(){function e(e,t){Object.defineProperty(y,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",o),e("__GetDependency__",o),e("__Rewire__",i),e("__set__",i),e("__reset__",a),e("__ResetDependency__",a),e("__with__",u)}(),t.__get__=o,t.__GetDependency__=o,t.__Rewire__=i,t.__set__=i,t.__ResetDependency__=a,t.__RewireAPI__=y},109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}function _(e){return void 0===g||void 0===g[e]?i(e):g[e]}function i(e){switch(e){case"Link":return d.Link;case"Branding":return h;case"Nav":return y.default;case"NavProfile":return b.default;case"Header":return v}}function a(e,t){return g[e]=t}function u(e){delete g[e]}function c(e){function t(){n.forEach(function(e){g[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=g[t],g[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(3),s=r(f),d=n(22),p=n(110),y=r(p),m=n(111),b=r(m),h=function(){var e=_("Link");return s.default.createElement(e,{className:"button",to:"/"},s.default.createElement("h4",null,"SR"))},v=function(){var e=_("Branding"),t=_("Nav"),n=_("NavProfile");return s.default.createElement("div",{className:"header-container"},s.default.createElement("div",{className:"branding-container"},s.default.createElement(e,null)),s.default.createElement("div",{className:"nav-container"},s.default.createElement(t,null)),s.default.createElement("div",{className:"user-container"},s.default.createElement(n,null)))};t.default=_("Header");var w=void 0===v?"undefined":l(v);"object"!==w&&"function"!==w||!Object.isExtensible(v)||(o("__get__",_),o("__GetDependency__",_),o("__Rewire__",a),o("__set__",a),o("__reset__",u),o("__ResetDependency__",u),o("__with__",c),o("__RewireAPI__",R));var g={},R={};!function(){function e(e,t){Object.defineProperty(R,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",_),e("__GetDependency__",_),e("__Rewire__",a),e("__set__",a),e("__reset__",u),e("__ResetDependency__",u),e("__with__",c)}(),t.__get__=_,t.__GetDependency__=_,t.__Rewire__=a,t.__set__=a,t.__ResetDependency__=u,t.__RewireAPI__=R},110:function(e,t,n){"use strict";function r(e,t){Object.defineProperty(d,e,{value:t,enumerable:!1,configurable:!0})}function o(e){return void 0===y||void 0===y[e]?_(e):y[e]}function _(e){switch(e){case"NavLink":return s.NavLink;case"Nav":return d}}function i(e,t){return y[e]=t}function a(e){delete y[e]}function u(e){function t(){n.forEach(function(e){y[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=y[t],y[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(3),f=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(22),d=function(){var e=o("NavLink"),t=o("NavLink"),n=o("NavLink"),r=o("NavLink"),_=o("NavLink"),i=o("NavLink");return f.default.createElement("ul",{className:"nav"},f.default.createElement("li",null,f.default.createElement(e,{exact:!0,activeClassName:"active",to:"/"},"Home")),f.default.createElement("li",null,f.default.createElement(t,{activeClassName:"active",to:"/housing"},"Housing")),f.default.createElement("li",null,f.default.createElement(n,{activeClassName:"active",to:"/crafting"},"Crafting")),f.default.createElement("li",null,f.default.createElement(r,{activeClassName:"active",to:"/community"},"Community")),f.default.createElement("li",null,f.default.createElement(_,{activeClassName:"active",to:"/about"},"About")),f.default.createElement("li",null,f.default.createElement(i,{activeClassName:"active",to:"/donate"},"Support")))};t.default=o("Nav");var p=void 0===d?"undefined":c(d);"object"!==p&&"function"!==p||!Object.isExtensible(d)||(r("__get__",o),r("__GetDependency__",o),r("__Rewire__",i),r("__set__",i),r("__reset__",a),r("__ResetDependency__",a),r("__with__",u),r("__RewireAPI__",m));var y={},m={};!function(){function e(e,t){Object.defineProperty(m,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",o),e("__GetDependency__",o),e("__Rewire__",i),e("__set__",i),e("__reset__",a),e("__ResetDependency__",a),e("__with__",u)}(),t.__get__=o,t.__GetDependency__=o,t.__Rewire__=i,t.__set__=i,t.__ResetDependency__=a,t.__RewireAPI__=m},111:function(e,t,n){"use strict";function r(e,t){Object.defineProperty(d,e,{value:t,enumerable:!1,configurable:!0})}function o(e){return void 0===y||void 0===y[e]?_(e):y[e]}function _(e){switch(e){case"Link":return s.Link;case"NavProfile":return d}}function i(e,t){return y[e]=t}function a(e){delete y[e]}function u(e){function t(){n.forEach(function(e){y[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=y[t],y[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(3),f=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(22),d=function(){var e=o("Link");return f.default.createElement(e,{className:"nav-profile",to:"/profile"},f.default.createElement("span",null,"Welcome, User!"))};t.default=o("NavProfile");var p=void 0===d?"undefined":c(d);"object"!==p&&"function"!==p||!Object.isExtensible(d)||(r("__get__",o),r("__GetDependency__",o),r("__Rewire__",i),r("__set__",i),r("__reset__",a),r("__ResetDependency__",a),r("__with__",u),r("__RewireAPI__",m));var y={},m={};!function(){function e(e,t){Object.defineProperty(m,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",o),e("__GetDependency__",o),e("__Rewire__",i),e("__set__",i),e("__reset__",a),e("__ResetDependency__",a),e("__with__",u)}(),t.__get__=o,t.__GetDependency__=o,t.__Rewire__=i,t.__set__=i,t.__ResetDependency__=a,t.__RewireAPI__=m},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BITCOIN_ADDRESS="1AMErH8vdDZEbSvW9MyBbE8dVCKHQk2Jo3"},113:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){Object.defineProperty(m,e,{value:t,enumerable:!1,configurable:!0})}function a(e){return void 0===h||void 0===h[e]?u(e):h[e]}function u(e){switch(e){case"React":return y.default;case"Community":return m}}function c(e,t){return h[e]=t}function l(e){delete h[e]}function f(e){function t(){n.forEach(function(e){h[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=h[t],h[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=t.Community=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(3),y=function(e){return e&&e.__esModule?e:{default:e}}(p),m=t.Community=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,e),d(t,[{key:"render",value:function(){return y.default.createElement("div",null,"Community page - devoted to events, profiles of personalities around town, and development ambitions for the greater area. ",y.default.createElement("i",null,"Coming Soon!"))}}]),t}(a("React").Component);t.default=a("Community");var b=void 0===m?"undefined":s(m);"object"!==b&&"function"!==b||!Object.isExtensible(m)||(i("__get__",a),i("__GetDependency__",a),i("__Rewire__",c),i("__set__",c),i("__reset__",l),i("__ResetDependency__",l),i("__with__",f),i("__RewireAPI__",v));var h={},v={};!function(){function e(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",a),e("__GetDependency__",a),e("__Rewire__",c),e("__set__",c),e("__reset__",l),e("__ResetDependency__",l),e("__with__",f)}(),t.__get__=a,t.__GetDependency__=a,t.__Rewire__=c,t.__set__=c,t.__ResetDependency__=l,t.__RewireAPI__=v},114:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){Object.defineProperty(m,e,{value:t,enumerable:!1,configurable:!0})}function a(e){return void 0===h||void 0===h[e]?u(e):h[e]}function u(e){switch(e){case"React":return y.default;case"Crafting":return m}}function c(e,t){return h[e]=t}function l(e){delete h[e]}function f(e){function t(){n.forEach(function(e){h[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=h[t],h[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=t.Crafting=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(3),y=function(e){return e&&e.__esModule?e:{default:e}}(p),m=t.Crafting=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,e),d(t,[{key:"render",value:function(){return y.default.createElement("div",null,"Coming soon: page devoted to the gatherers, refiners, and crafters in the area. Find out what goods and raw materials are available, and let the market know what youre looking for.")}}]),t}(a("React").Component);t.default=a("Crafting");var b=void 0===m?"undefined":s(m);"object"!==b&&"function"!==b||!Object.isExtensible(m)||(i("__get__",a),i("__GetDependency__",a),i("__Rewire__",c),i("__set__",c),i("__reset__",l),i("__ResetDependency__",l),i("__with__",f),i("__RewireAPI__",v));var h={},v={};!function(){function e(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",a),e("__GetDependency__",a),e("__Rewire__",c),e("__set__",c),e("__reset__",l),e("__ResetDependency__",l),e("__with__",f)}(),t.__get__=a,t.__GetDependency__=a,t.__Rewire__=c,t.__set__=c,t.__ResetDependency__=l,t.__RewireAPI__=v},115:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}function a(e){return void 0===g||void 0===g[e]?u(e):g[e]}function u(e){switch(e){case"BITCOIN_ADDRESS":return m.BITCOIN_ADDRESS;case"BitcoinQRAddress":return h;case"PayPalButton":return b;case"React":return y.default;case"Donate":return v}}function c(e,t){return g[e]=t}function l(e){delete g[e]}function f(e){function t(){n.forEach(function(e){g[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=g[t],g[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=t.Donate=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(3),y=function(e){return e&&e.__esModule?e:{default:e}}(p),m=n(112),b=function(){return y.default.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},y.default.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),y.default.createElement("input",{type:"hidden",name:"hosted_button_id",value:"XZGMVB3PVU5YU"}),y.default.createElement("table",null,y.default.createElement("tr",null,y.default.createElement("td",null,y.default.createElement("input",{type:"hidden",name:"on0",value:"Donation Suggestions"}),"Donation Suggestions")),y.default.createElement("tr",null,y.default.createElement("td",null,y.default.createElement("select",{name:"os0"},y.default.createElement("option",{value:"You Rock!"},"You Rock! $25.00 USD"),y.default.createElement("option",{value:"Large"},"Large $10.00 USD"),y.default.createElement("option",{value:"Medium"},"Medium $5.00 USD"),y.default.createElement("option",{value:"Small"},"Small $1.00 USD"))))),y.default.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),y.default.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}),y.default.createElement("img",{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))},h=function(){return y.default.createElement("div",{className:"bitcoin-qr-address"},y.default.createElement("p",null,y.default.createElement("img",{src:"http://res.cloudinary.com/stormsreach/image/upload/c_scale,w_385/v1494097644/bitcoinQR_tb3pmj.jpg",title:"Bitcoin QR Code Image",alt:a("BITCOIN_ADDRESS")})),y.default.createElement("div",{className:"donate-wallet-info"},y.default.createElement("span",null,"Alternatively, send Bitcoin to the following ",y.default.createElement("a",{href:"https://mycelium.com/",target:"_blank"},"Mycelium")," wallet:"),y.default.createElement("span",null,y.default.createElement("strong",null,a("BITCOIN_ADDRESS")))))},v=t.Donate=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,e),d(t,[{key:"render",value:function(){var e=a("BitcoinQRAddress"),t=a("PayPalButton");return y.default.createElement("div",{className:"donate-container"},y.default.createElement("div",{className:"donate-header"},y.default.createElement("h2",null,"Support Storms Reach!"),y.default.createElement("p",null,"Donations help fund hosting, feature development, bug fixing, and data entry for stormsreach.com.")),y.default.createElement("div",{className:"donate-types"},y.default.createElement("div",{className:"donate-type-bitcoin"},y.default.createElement("h3",null,"Bitcoin"),y.default.createElement("p",null,"Use the following QR code to donate Bitcoin:"),y.default.createElement(e,null)),y.default.createElement("div",{className:"donate-type-paypal"},y.default.createElement("h3",null,"Paypal"),y.default.createElement("p",null,y.default.createElement(t,null)))))}}]),t}(a("React").Component);t.default=a("Donate");var w=void 0===v?"undefined":s(v);"object"!==w&&"function"!==w||!Object.isExtensible(v)||(i("__get__",a),i("__GetDependency__",a),i("__Rewire__",c),i("__set__",c),i("__reset__",l),i("__ResetDependency__",l),i("__with__",f),i("__RewireAPI__",R));var g={},R={};!function(){function e(e,t){Object.defineProperty(R,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",a),e("__GetDependency__",a),e("__Rewire__",c),e("__set__",c),e("__reset__",l),e("__ResetDependency__",l),e("__with__",f)}(),t.__get__=a,t.__GetDependency__=a,t.__Rewire__=c,t.__set__=c,t.__ResetDependency__=l,t.__RewireAPI__=R},116:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}function u(e){return void 0===g||void 0===g[e]?c(e):g[e]}function c(e){switch(e){case"React":return m.default;case"Home":return v;case"PropTypes":return h.default}}function l(e,t){return g[e]=t}function f(e){delete g[e]}function s(e){function t(){n.forEach(function(e){g[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=g[t],g[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=t.Home=void 0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=n(3),m=r(y),b=n(6),h=r(b),v=t.Home=function(e){function t(e){o(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={placeholderProp:e.placeholderProp},n}return i(t,e),p(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"homepage-container"},m.default.createElement("div",{className:"homepage-header"},m.default.createElement("h1",null,m.default.createElement("span",null,"Storm's Reach"),m.default.createElement("small",null,"The online resource for the Bay of Storms community."))),m.default.createElement("div",{className:"homepage-image"},m.default.createElement("img",{src:"http://res.cloudinary.com/stormsreach/image/upload/c_scale,e_saturation:100,w_465/v1494083455/stormsreach_sotamap_z5_u5xhji.png",alt:"Storm's Reach on sotamap.com",title:"Storm's Reach"})),m.default.createElement("div",{className:"homepage-content"},m.default.createElement("p",null,this.state.placeholderProp," Welcome to stormsreach.com! The online resource for the greater Bay of Storms and Elysium isles area."),m.default.createElement("p",null,"You smell like a human do they understand me foe of my foe until later then. Greater Heal Bard i will go first until next we meet. The best Drow is a dead Drow do they understand me lightning i have an idea no idea. Night Sight i yield Oh! him, his. Hold person hold onto this for me do you promise Lovely ones."),m.default.createElement("p",null,"Southwall memorize your spells here cone of cold Sunrise elf. Sunrise elf sleep my lord non familiar My friend. Invisibility Silent ones are you finished unlock. Cowardly dogs Friday greater heal sleep well. Who's leading Dark ones My friend Summer Solstace."),m.default.createElement("p",null,"Good night long journey Wise ones my heart sings to see thee. Excessive ones i have an idea no idea mass dispel East. Teleport cloudkill Winter Solstice Silver elf. I love you paralyze field minor globe ice storm. Give it to me summon air elemental West The Harpers HG.")))}}]),t}(u("React").Component);u("Home").propTypes={placeholderProp:u("PropTypes").string.isRequired},u("Home").defaultProps={placeholderProp:"Howdy!"},t.default=u("Home");var w=void 0===v?"undefined":d(v);"object"!==w&&"function"!==w||!Object.isExtensible(v)||(a("__get__",u),a("__GetDependency__",u),a("__Rewire__",l),a("__set__",l),a("__reset__",f),a("__ResetDependency__",f),a("__with__",s),a("__RewireAPI__",R));var g={},R={};!function(){function e(e,t){Object.defineProperty(R,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",u),e("__GetDependency__",u),e("__Rewire__",l),e("__set__",l),e("__reset__",f),e("__ResetDependency__",f),e("__with__",s)}(),t.__get__=u,t.__GetDependency__=u,t.__Rewire__=l,t.__set__=l,t.__ResetDependency__=f,t.__RewireAPI__=R},117:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){Object.defineProperty(m,e,{value:t,enumerable:!1,configurable:!0})}function a(e){return void 0===h||void 0===h[e]?u(e):h[e]}function u(e){switch(e){case"React":return y.default;case"Housing":return m}}function c(e,t){return h[e]=t}function l(e){delete h[e]}function f(e){function t(){n.forEach(function(e){h[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=h[t],h[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=t.Housing=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(3),y=function(e){return e&&e.__esModule?e:{default:e}}(p),m=t.Housing=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,e),d(t,[{key:"render",value:function(){return y.default.createElement("div",null,"Coming Soon - a page about available real estate, and rentals! Landlord profiles, and farm plot rentals!")}}]),t}(a("React").Component);t.default=a("Housing");var b=void 0===m?"undefined":s(m);"object"!==b&&"function"!==b||!Object.isExtensible(m)||(i("__get__",a),i("__GetDependency__",a),i("__Rewire__",c),i("__set__",c),i("__reset__",l),i("__ResetDependency__",l),i("__with__",f),i("__RewireAPI__",v));var h={},v={};!function(){function e(e,t){Object.defineProperty(v,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",a),e("__GetDependency__",a),e("__Rewire__",c),e("__set__",c),e("__reset__",l),e("__ResetDependency__",l),e("__with__",f)}(),t.__get__=a,t.__GetDependency__=a,t.__Rewire__=c,t.__set__=c,t.__ResetDependency__=l,t.__RewireAPI__=v},118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return void 0===m||void 0===m[e]?_(e):m[e]}function _(e){switch(e){case"ReactDOM":return s.default;case"App":return p.default}}function i(e,t){return m[e]=t}function a(e){delete m[e]}function u(e){function t(){n.forEach(function(e){m[e]=r[e]})}var n=Object.keys(e),r={};return function(o){n.forEach(function(t){r[t]=m[t],m[t]=e[t]});var _=o();return _&&"function"==typeof _.then?_.then(t).catch(t):t(),_}}Object.defineProperty(t,"__esModule",{value:!0}),t.__RewireAPI__=t.__ResetDependency__=t.__set__=t.__Rewire__=t.__GetDependency__=t.__get__=void 0;var c=n(3),l=r(c),f=n(35),s=r(f),d=n(103),p=r(d);n(106);var y=o("App");o("ReactDOM").render(l.default.createElement(y,null),document.getElementById("app"));var m={},b={};!function(){function e(e,t){Object.defineProperty(b,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",o),e("__GetDependency__",o),e("__Rewire__",i),e("__set__",i),e("__reset__",a),e("__ResetDependency__",a),e("__with__",u)}(),t.__get__=o,t.__GetDependency__=o,t.__Rewire__=i,t.__set__=i,t.__ResetDependency__=a,t.__RewireAPI__=b,t.default=b},119:function(e,t,n){t=e.exports=n(120)(void 0),t.push([e.i,"body{background:#252525;color:#0096c8;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif}ul{padding:0}li{list-style-type:none}a{text-decoration:none;color:#56c5b8}a:hover{text-decoration:underline;color:#acf5a8}a:visited{color:#1d9e75}.app-container{max-width:1200px;margin:0 auto;padding:10px;background:#151515}.header-container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.branding-container{-ms-flex:1 0 0;flex:1 0 0}.nav-container{-ms-flex:2 0 0;flex:2 0 0}.user-container{-ms-flex:1 0 0;flex:1 0 0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.nav{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.nav li{margin-right:15px;font-size:1.2em}.active{font-weight:700}.homepage-container,.homepage-header>h1{-ms-flex-align:center;align-items:center}.donate-container,.donate-header,.homepage-container,.homepage-header>h1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.donate-header{-ms-flex-align:center;align-items:center}.donate-types{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap}.donate-wallet-info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:5px}.donate-wallet-info>span{margin:5px}",""])},120:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var _=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([_]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var _=this[o][0];"number"==typeof _&&(r[_]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},257:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var _=0;_<o.parts.length;_++)o.parts[_](r.parts[_]);for(;_<r.parts.length;_++)o.parts.push(l(r.parts[_],t))}else{for(var i=[],_=0;_<r.parts.length;_++)i.push(l(r.parts[_],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],_=o[0],i=o[1],a=o[2],u=o[3],c={css:i,media:a,sourceMap:u};n[_]?n[_].parts.push(c):t.push(n[_]={id:_,parts:[c]})}return t}function _(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),_(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),_(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o;if(t.singleton){var _=h++;n=b||(b=a(t)),r=f.bind(null,n,_,!1),o=f.bind(null,n,_,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=s.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var _=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(_,i[t]):e.appendChild(_)}}function s(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,_=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||_)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},y=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,h=0,v=[],w=n(258);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},void 0===t.singleton&&(t.singleton=y()),void 0===t.insertInto&&(t.insertInto="head"),void 0===t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var _=[],i=0;i<n.length;i++){var a=n[i],u=p[a.id];u.refs--,_.push(u)}if(e){r(o(e),t)}for(var i=0;i<_.length;i++){var u=_[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},258:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var _;return _=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(_)+")"})}}},[118]);