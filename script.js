/* Run the code after the HTML document has loaded. */
document.addEventListener("DOMContentLoaded", function () {

    // Select the theme button and the page root element.
    const themeToggle = document.getElementById("theme-toggle");
    const pageRoot = document.documentElement;

    // Load the saved theme. Use dark mode by default.
    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    } catch (error) {
        // Keep dark mode as the default if storage is unavailable.
    }

    // Apply the selected theme and update the button icon.
        function applyTheme(theme) {
            const isLight = theme === "light";
        
            pageRoot.setAttribute(
                "data-theme",
                isLight ? "light" : "dark"
            );
        
            // Use text symbols so the icons work even if Font Awesome fails.
            themeToggle.textContent = isLight ? "🌙" : "☀️";
        
            themeToggle.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
        
            themeToggle.setAttribute("aria-pressed", String(isLight));
            themeToggle.setAttribute(
                "title",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
        }

    // Apply the saved theme when the website loads.
    applyTheme(savedTheme);

    // Switch themes whenever the button is clicked.
    themeToggle.addEventListener("click", function () {
        const currentTheme = pageRoot.getAttribute("data-theme");

        const nextTheme =
            currentTheme === "light" ? "dark" : "light";

        // Save the selected theme for the next visit.
        try {
            localStorage.setItem("portfolio-theme", nextTheme);
        } catch (error) {
            // Theme switching still works for the current visit.
        }

        applyTheme(nextTheme);
    });

    // Select the menu button, navigation links, and menu icon.
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuIcon = menuToggle.querySelector("i");

    // Open or close the mobile menu when clicked.
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        // Update the button's accessibility attributes.
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the icon depending on the menu state.
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
    });

    // Close the mobile menu after selecting a navigation link.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            // Reset the menu button and icon.
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        });
    });

    // Display the current year automatically.
    document.getElementById("current-year").textContent =
        new Date().getFullYear();

});
