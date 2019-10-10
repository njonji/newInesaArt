import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import * as THREE from 'three';
import hoverEffect from 'hover-effect';

new hoverEffect({
    parent:document.querySelector(".distortion"),
    intensity:0.2,
    image1:"./assets/img/home/inesaProfil.jpg",
    image2:"./assets/img/home/inesa1.jpg",
    displacementImage:"./assets/img/home/heightMap.png",
    
})