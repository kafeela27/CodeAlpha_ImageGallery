let images = [
    "images/img1.jpeg","images/img2.jpeg","images/img3.jpeg",
    "images/img4.jpeg","images/img5.jpeg","images/img6.jpeg",
    "images/img7.jpeg","images/img8.jpeg","images/img9.jpeg",
    "images/img10.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    updateLightbox();
    loadThumbnails();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    updateLightbox();
}

function updateLightbox() {
    document.getElementById("lightboxImg").src = images[currentIndex];
    document.getElementById("counter").innerText = (currentIndex+1) + " / " + images.length;
}

function loadThumbnails() {
    let container = document.getElementById("thumbnails");
    container.innerHTML = "";
    images.forEach((img, i) => {
        let el = document.createElement("img");
        el.src = img;
        el.onclick = () => openLightbox(i);
        container.appendChild(el);
    });
}

/* FILTER */
function filterImages(category, btn) {
    let cards = document.querySelectorAll(".card");

    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}