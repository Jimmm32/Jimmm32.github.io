// script.js

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const eyeIcon = document.getElementById("eye-icon");

    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Toggle the eye icon
        if (type === "text") {
            eyeIcon.setAttribute("d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4.5c-2.5 0-4.5-2-4.5-4.5S5.5 3.5 8 3.5 12.5 5.5 12.5 8 10.5 12.5 8 12.5zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z");
        } else {
            eyeIcon.setAttribute("d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM8 13.5c2.485 0 4.5-2.015 4.5-4.5S10.485 4.5 8 4.5 3.5 6.515 3.5 9s2.015 4.5 4.5 4.5zM8 5.75A3.25 3.25 0 1 1 4.75 9 3.253 3.253 0 0 1 8 5.75z");
        }
    });
});
