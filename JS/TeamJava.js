window.onload = function () {
    let hoverElement2 = document.getElementById('Team');

    if (hoverElement2) {
        function onMouseEnter(element) {
            element.style.opacity = '0.5';
        }
        function onMouseLeave(element) {
            element.style.opacity = '1';
        }

        hoverElement2.addEventListener('mouseenter', () => onMouseEnter(hoverElement2));
        hoverElement2.addEventListener('mouseleave', () => onMouseLeave(hoverElement2));
    }

    function showSection(sectionId) {
        let sectionsToHide = document.querySelectorAll(".dynamic-section"); 
        sectionsToHide.forEach(section => {
            section.style.display = "none";
        });

        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    }

    window.showSection = showSection;
};