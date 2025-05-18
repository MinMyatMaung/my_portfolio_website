document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        toggleButton.textContent = "🌞" // Light mode icon
    } else {
        toggleButton.textContent = "🌙"; // Dark mode icon
    }

    toggleButton.addEventListener("click", () => {

        const isDark = document.body.classList.toggle("dark-theme");

        toggleButton.textContent = isDark ? "🌞" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});