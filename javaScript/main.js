document.getElementById("nav-btn").addEventListener("click", function () {
    const linkSection = document.querySelector(".links"); // Select the element with the class 'links'

    if (
        linkSection.style.display === "none" ||
        linkSection.style.display === ""
    ) {
        linkSection.style.display = "block"; // Make it visible
    } else {
        linkSection.style.display = "none"; // Hide it again if it's visible
    }
});

document.getElementById("ins-link-btn").addEventListener("click", function () {
    const btn2navSection = document.querySelector(".links");
    if (
        btn2navSection.style.display === "none" ||
        btn2navSection.style.display === ""
    ) {
        btn2navSection.style.display = "block"; // Make it visible
    } else {
        btn2navSection.style.display = "none"; // Hide it again if it's visible
    }
});
