import { shippingItems } from "../data/shippingData.js";

export function renderShipping() {
    const shippingContainer = document.querySelector(".shipping-list");

    if(!shippingContainer) return;
    shippingContainer.innerHTML = shippingItems
        .map(
            (item, index) => `
                <li>
                    <div class="item-heading">
                        <h5>${item.title}</h5>
                    </div>
                    <p>${item.description}</p>
                </li>
            `
        )
        .join("");
}

renderShipping();