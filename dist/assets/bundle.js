!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(0)},function(e,n,t){},function(e,n){var t=document.querySelector("#navbar"),o=document.querySelector("#whitenavbar"),r=document.querySelector(".navigation__button"),a=document.querySelector(".secondbar1"),c=document.querySelector(".secondbar2"),i=document.querySelector(".secondbar3"),s=document.querySelector(".navigation"),l=document.querySelector(".navigation__background"),u=document.querySelector(".navigation__nav");window.onscroll=function(){window.scrollY>=150?(t.classList.add("nodisplay"),o.classList.remove("nodisplay"),o.classList.add("fromTop")):(t.classList.remove("nodisplay"),o.classList.remove("fromTop"),o.classList.add("nodisplay"))},r.addEventListener("click",function(e){a.classList.toggle("change1"),c.classList.toggle("change2"),i.classList.toggle("change3"),l.classList.toggle("navigation__background--onClick"),u.classList.toggle("navigation__nav--onClick")}),window.addEventListener("click",function(e){"NAV"!==e.target.tagName&&"A"!==e.target.tagName||(l.classList.remove("navigation__background--onClick"),u.classList.remove("navigation__nav--onClick"),a.classList.remove("change1"),c.classList.remove("change2"),i.classList.remove("change3"))}),window.addEventListener("scroll",function(){window.scrollY>=150?(s.classList.add("showSecondNav"),t.classList.add("nodisplayXS")):(s.classList.remove("showSecondNav"),t.classList.remove("nodisplayXS"))})},function(e,n){}]);