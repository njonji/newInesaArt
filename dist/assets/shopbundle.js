!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({1:function(e,t){var n=document.querySelector("#navbar"),o=document.querySelector("#whitenavbar"),r=document.querySelector(".navigation__button"),c=document.querySelector(".secondbar1"),a=document.querySelector(".secondbar2"),i=document.querySelector(".secondbar3"),s=document.querySelector(".navigation"),l=document.querySelector(".navigation__background"),u=document.querySelector(".navigation__nav");window.onscroll=function(){window.scrollY>=150?(n.classList.add("nodisplay"),o.classList.remove("nodisplay"),o.classList.add("fromTop")):(n.classList.remove("nodisplay"),o.classList.remove("fromTop"),o.classList.add("nodisplay"))},r.addEventListener("click",function(e){c.classList.toggle("change1"),a.classList.toggle("change2"),i.classList.toggle("change3"),l.classList.toggle("navigation__background--onClick"),u.classList.toggle("navigation__nav--onClick")}),window.addEventListener("click",function(e){"NAV"!==e.target.tagName&&"A"!==e.target.tagName||(l.classList.remove("navigation__background--onClick"),u.classList.remove("navigation__nav--onClick"),c.classList.remove("change1"),a.classList.remove("change2"),i.classList.remove("change3"))}),window.addEventListener("scroll",function(){window.scrollY>=150?(s.classList.add("showSecondNav"),n.classList.add("nodisplayXS")):(s.classList.remove("showSecondNav"),n.classList.remove("nodisplayXS"))})},2:function(e,t){var n=document.querySelector(".wrapper"),o=(document.querySelector(".wrapper__contactForm"),document.querySelector(".wrapper__contactForm--close"));function r(){n.style.display="block"}document.querySelectorAll(".activateModal").forEach(function(e){return e.addEventListener("click",r)}),o.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")})},8:function(e,t,n){"use strict";n.r(t);n(1),n(2)}});