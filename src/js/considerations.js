import { considerationsItems } from "../data/considerationsData.js";

export function renderConsiderations() {
    const considerationsContainer = 
        document.querySelector(".considerations-list");
    if (!considerationsContainer) return;

    considerationsContainer.innerHTML = considerationsItems
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

renderConsiderations();