import { photoGuideItems } from "../data/photoguideData.js";

export function renderPhotoGuide() {
    const photoGuideContainer = document.querySelector(".photo-guide-list");
    if (!photoGuideContainer) return;
    photoGuideContainer.innerHTML = photoGuideItems
        .map(
            (item,index) => `
                <li>
                    <div class="item-heading">
                        <h5>${item.title}</h5>
                    </div>

                    <p>${item.description}</p>

                    <div class="photo-guide-examples">
                        <figure>
                            <img
                                src="${item.goodImage}"
                                alt="${item.goodCaption}"
                            >
                            <figcaption>${item.goodCaption}</figcaption>
                        </figure>
                        <figure>
                            <img
                                src="${item.badImage}"
                                alt="${item.badCaption}"
                            >
                            <figcaption>${item.badCaption}</figcaption>
                        </figure>
                    </div>
                </li>
            `
    )
    .join("");
}

renderPhotoGuide();