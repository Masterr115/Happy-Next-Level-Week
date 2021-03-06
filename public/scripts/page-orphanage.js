const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lat]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


L.marker([lat, lng], { icon })
    .addTo(map)

// Image Galery

function selectImage(event) {

    const button = event.currentTarget

    // Get all Buttons

    const buttons = document.querySelectorAll(".images button")

    // Remove 'Active' class for all buttons

    buttons.forEach(button => {
        button.classList.remove("active")
    })

    // Add 'Active' class to especific button

    button.classList.add("active")

    // Select actual image

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // Refresh new image

    imageContainer.src = image.src

}