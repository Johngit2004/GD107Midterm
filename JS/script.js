window.onload = function () {
    let hoverElement1 = document.getElementById('Group');
    let hoverElement2 = document.getElementById('Solo');

    if (hoverElement1 && hoverElement2) {
        function onMouseEnter(element) {
            element.style.opacity = '0.5';
        }
        function onMouseLeave(element) {
            element.style.opacity = '1';
        }

        hoverElement1.addEventListener('mouseenter', () => onMouseEnter(hoverElement1));
        hoverElement1.addEventListener('mouseleave', () => onMouseLeave(hoverElement1));

        hoverElement2.addEventListener('mouseenter', () => onMouseEnter(hoverElement2));
        hoverElement2.addEventListener('mouseleave', () => onMouseLeave(hoverElement2));
    }

    // Show/hide specific sections
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