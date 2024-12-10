document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const logoutButton = document.getElementById("logout");
    const themeButton = document.getElementById("toggleTheme");

    // Password visibility toggle
    togglePassword.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });

    // Logout functionality
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            alert("Logged out successfully!");
            window.location.href = "index.html";
        });
    }

    // Theme toggle
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }
});
