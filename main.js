function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    // const dropdownBtns = document.
    if (dropdownContent.style.display === "flex") {
        dropdownContent.classList.toggle('animate');
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "flex";
        dropdownContent.classList.toggle('animate');
       
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