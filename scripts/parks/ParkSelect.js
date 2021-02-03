import { getParks, useParks } from "./ParkProvider.js";

let allParks = []

export const parkSelect = () => {
    getParks()
    .then(() => {
        allParks = useParks()
        render(allParks) //build out the select element HTML
    })
}

const render = parksCollection => {
    const contentTarget = document.querySelector(".selections__parks") // Get a reference to the DOM element where the <select> will be rendered
    contentTarget.innerHTML += `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObject => { //build out each option element inside the select box
                    return `<option value="${parkObject.id}">${parkObject.fullName}</option>`
                }).join("") //take out the commas in the HTML
            }
        </select>
    `
}