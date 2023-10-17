document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".nav-link");

    function setActiveTab() {
        const currentRoute = window.location.hash;

        tabs.forEach(function (tab) {
            if (tab.getAttribute('href') === currentRoute) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

    setActiveTab();

    window.addEventListener('hashchange', setActiveTab);
});
