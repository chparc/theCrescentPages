import { processSteps } from "../data/processData.js";

export function renderProcess() {
    const processContainer = document.querySelector(".process-list");

    if (!processContainer) return;

    processContainer.innerHTML = processSteps
        .map(
            (step, index) => `
                <li>
                    <div class="item-heading">
                        <span class="item-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h5>${step.title}</h5>
                    </div>

                    <p>${step.description}</p>
                </li>
            `
        )
        .join("");
}

renderProcess();