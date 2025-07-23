function showMessage() {
    document.getElementById("dynamicMessage").textContent = 
        "Sunt pasionat de tehnologie, programare și creativitate.Sunt o persoană organizată, serioasă și dornică de dezvoltare personală și profesională. Chiar dacă nu am încă experiență directă în domeniul în care doresc să lucrez, compensez prin responsabilitate, capacitate rapidă de învățare și o atitudine pozitivă față de provocări. Mă implic cu seriozitate în tot ceea ce fac, am răbdare, respect termenele și sunt atent la detalii. Consider că munca în echipă, comunicarea deschisă și adaptabilitatea sunt esențiale pentru succes și mă străduiesc constant să le aplic. Îmi doresc un mediu în care pot crește, învăța de la cei cu experiență și contribui activ la atingerea obiectivelor comune.";
}

function submitMessage() {
    const messageBox = document.getElementById("message");
    const confirmation = document.getElementById("confirmationMessage");
    if (messageBox.value.trim() === "") {
        confirmation.textContent = "Te rugăm să scrii un mesaj înainte de a trimite!";
        confirmation.style.color = "red";
    } else {
        confirmation.textContent = "Mesajul tău a fost trimis cu succes! Mulțumim.";
        confirmation.style.color = "green";
        messageBox.value = ""; // Golește textarea
    }
}
        // Efecte de apariție
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("visible");
        }, index * 300);
    });

    // Slider functionality
    const slider = document.querySelector(".imageslider");
    const slides = document.querySelectorAll(".imageslider img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!slider || !slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);

    // Auto-play
    setInterval(showNextSlide, 5000);
});