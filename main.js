function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "flex";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns =
            document.getElementsByClassName
                ("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
}