
/* Run the code after the HTML document has loaded. */
document.addEventListener("DOMContentLoaded", function () {
    // Select the mobile menu button, navigation list, and menu icon.
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuIcon = menuToggle.querySelector("i");

    // Toggle the mobile navigation when the button is clicked.
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        // Update the button's accessibility attributes.
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the icon depending on whether the menu is open.
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
    });

    // Close the mobile menu after a navigation link is selected.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            // Reset the menu button and icon to their default states.
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        });
    });

    // Automatically display the current year in the footer.
    document.getElementById("current-year").textContent =
        new Date().getFullYear();
});
