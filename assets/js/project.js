    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

        // Tab switching functionality
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show selected tab content
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Filter dropdown functionality
        document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
            dropdown.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Filter dropdown clicked:', this.textContent.trim());
                // Add dropdown logic here
            });
        });

        // Search functionality
        document.querySelector('.search-input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            
            // Filter project cards based on search term
            document.querySelectorAll('.project-card').forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const matches = title.includes(searchTerm);
                card.style.display = matches ? 'block' : 'none';
            });
        });

        // Project title click functionality
        document.querySelectorAll('.project-info h3').forEach(title => {
            title.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Project clicked:', this.textContent);
                // Add project navigation logic here
            });
        });

        // Date picker functionality
        document.querySelector('.date-picker').addEventListener('click', function() {
            console.log('Date picker clicked');
            // Add date picker modal logic here
        });

        // Card hover effects
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add any additional hover effects here if needed
            });
            
            card.addEventListener('mouseleave', function() {
                // Add any additional hover effects here if needed
            });
        });

        // Initialize tooltips if using Bootstrap
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Responsive grid adjustments
        function handleResponsiveGrid() {
            const screenWidth = window.innerWidth;
            const projectsContainer = document.querySelector('.projects-container');
            
            if (screenWidth < 768) {
                // Mobile: adjust padding
                if (projectsContainer) {
                    projectsContainer.style.padding = '16px';
                }
            } else {
                // Desktop: default padding
                if (projectsContainer) {
                    projectsContainer.style.padding = '24px';
                }
            }
        }

        // Handle window resize
        window.addEventListener('resize', handleResponsiveGrid);
        
        // Initialize on page load
        handleResponsiveGrid();
    