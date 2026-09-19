import { paymentItems } from "../data/paymentData.js";

export function renderPayment() {
    const paymentContainer = document.querySelector(".payment-list");

    if(!paymentContainer) return;
    paymentContainer.innerHTML = paymentItems
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

renderPayment();