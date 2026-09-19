import { pricingItems } from "../data/pricingData.js";

const pricingTable = document.querySelector(".pricing-table");

function renderPricingTable() {
    pricingTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th class="eyebrow">Size</th>
                    <th class="eyebrow">Monochrome</th>
                    <th class="eyebrow">Colour</th>
                </tr>
            </thead>

            <tbody>
                ${pricingItems.map(item => `
                    <tr>
                        <td>${item.size}</td>
                        <td>${item.monochrome}</td>
                        <td>${item.colour}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

renderPricingTable();