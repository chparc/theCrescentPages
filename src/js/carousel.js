import { artworkItems } from "../data/artworkData.js";
import Splide from "@splidejs/splide";

const carousel = document.querySelector("#artwork-carousel");
const carouselList = carousel?.querySelector(".splide__list");

if(carousel && carouselList) {
    artworkItems.forEach((artwork) => {
        const slide = document.createElement("li");
        slide.className = "splide__slide";
        slide.innerHTML = `
            <figure class="artwork-item">
                <img
                    src="${artwork.src}"
                    alt="${artwork.medium} portrait"
                >
                <figcaption>
                    ${artwork.medium}
                    <span>·</span>
                    ${artwork.size}
                </figcaption>
            </figure>
        `;
        carouselList.appendChild(slide);
    });

    new Splide(carousel, {
        type        : "loop",

        heightRatio : 0.40,
        gap         : "32px",

        perPage     : 3,
        breakpoints : {
            640:{
            perPage: 1,
            heightRatio: 1,
            },
        },


        arrows      : false,
        pagination  : true,

        autoplay    : true,
        interval    : 3500,
        pauseOnHover: true,
        pauseOnFocus: true,
        speed       : 1000,
    }).mount();
}