// Select all elements with the class 'panel'
const panels = document.querySelectorAll('.panel');

// Add a click to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(); // Remove 'active' class from all panels
        panel.classList.add('active'); // Add 'active' class to the clicked panel
    });
});

// Function to remove the 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active'); // Remove 'active' class
    });
}
