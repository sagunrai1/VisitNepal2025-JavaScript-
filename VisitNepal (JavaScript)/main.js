document.addEventListener('DOMContentLoaded', function() {
    // Initialize Isotope for the filter gallery
    var elem = document.querySelector('.portfolio-item');
    var iso = new Isotope(elem, {
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    // Bind filter button click
    var filterMenuItems = document.querySelectorAll('.portfolio-menu li');
    filterMenuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            var filterValue = menuItem.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Remove active class from other buttons
            filterMenuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to clicked button
            menuItem.classList.add('active');
        });
    });

    // Optional: smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('input[name="search"]');
    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        alert("Searching for: " + query);
    });

    // Ensure images have the same size
    const images = document.querySelectorAll('.portfolio-item .item img');
    images.forEach(img => {
        img.style.width = '100%'; // Set a consistent width
        img.style.height = '200px'; // Set a fixed height for uniformity
        img.style.objectFit = 'cover'; // Ensure images cover the container without distortion
        img.style.padding = '10px'; // Add padding
        img.style.margin = '10px'; // Add margin
        img.style.boxSizing = 'border-box'; // Ensure padding and margin are included in total width/height
    });
});
