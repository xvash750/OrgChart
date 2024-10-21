window.onload = function() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "index.html"; // Redirect to login if not logged in
    }
};
