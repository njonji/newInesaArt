!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var o=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){var e=void 0,t=void 0,n=void 0,c=void 0,i=void 0,a=void 0,s=void 0,u=void 0,l=void 0,d=void 0,f=void 0,v=void 0;function y(e){return e.getBoundingClientRect().top+t}function m(n){l||(l=n),f=i(d=n-l,t,s,u),window.scrollTo(0,f),d<u?window.requestAnimationFrame(m):(window.scrollTo(0,t+s),e&&a&&(e.setAttribute("tabindex","-1"),e.focus()),"function"==typeof v&&v(),l=!1)}return function(l){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(u=d.duration||1e3,c=d.offset||0,v=d.callback,i=d.easing||o,a=d.a11y||!1,t=window.scrollY||window.pageYOffset,void 0===l?"undefined":r(l)){case"number":e=void 0,a=!1,n=t+l;break;case"object":n=y(e=l);break;case"string":e=document.querySelector(l),n=y(e)}switch(s=n-t+c,r(d.duration)){case"number":u=d.duration;break;case"function":u=d.duration(s)}window.requestAnimationFrame(m)}}();t.a=c},function(e,t){var n=document.querySelector("#navbar"),o=document.querySelector("#whitenavbar"),r=document.querySelector(".navigation__button"),c=document.querySelector(".secondbar1"),i=document.querySelector(".secondbar2"),a=document.querySelector(".secondbar3"),s=document.querySelector(".navigation"),u=document.querySelector(".navigation__background"),l=document.querySelector(".navigation__nav");window.onscroll=function(){window.scrollY>=150?(n.classList.add("nodisplay"),o.classList.remove("nodisplay"),o.classList.add("fromTop")):(n.classList.remove("nodisplay"),o.classList.remove("fromTop"),o.classList.add("nodisplay"))},r.addEventListener("click",function(e){c.classList.toggle("change1"),i.classList.toggle("change2"),a.classList.toggle("change3"),u.classList.toggle("navigation__background--onClick"),l.classList.toggle("navigation__nav--onClick")}),window.addEventListener("click",function(e){"NAV"!==e.target.tagName&&"A"!==e.target.tagName||(u.classList.remove("navigation__background--onClick"),l.classList.remove("navigation__nav--onClick"),c.classList.remove("change1"),i.classList.remove("change2"),a.classList.remove("change3"))}),window.addEventListener("scroll",function(){window.scrollY>=150?(s.classList.add("showSecondNav"),n.classList.add("nodisplayXS")):(s.classList.remove("showSecondNav"),n.classList.remove("nodisplayXS"))})},function(e,t){var n=document.querySelector(".wrapper"),o=(document.querySelector(".wrapper__contactForm"),document.querySelector(".wrapper__contactForm--close"));function r(){n.style.display="block"}document.querySelectorAll(".activateModal").forEach(function(e){return e.addEventListener("click",r)}),o.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")})},function(e,t,n){"use strict";n.r(t);n(4),n(1),n(2);var o=n(0),r=document.querySelector("#current"),c=document.querySelectorAll(".images__image"),i=.6;function a(e){c.forEach(function(e){return e.style.opacity=1}),r.src=e.target.src,r.classList.add("fade-in"),setTimeout(function(){return r.classList.remove("fade-in")},500),e.target.style.opacity=i}c.forEach(function(e){return e.addEventListener("click",a)}),c[0].style.opacity=i;var s=document.querySelector(".smoothBtn"),u=document.querySelector(".home__arrow-down");s.addEventListener("click",function(){Object(o.a)("#storyone")}),u.addEventListener("click",function(){Object(o.a)("#storyone")})},function(e,t,n){}]);