  
        // Main tab switching functionality
        document.querySelectorAll('.main-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.dataset.tab;
                
                // Remove active class from all main tabs
                document.querySelectorAll('.main-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content-custom').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show target tab content
                document.getElementById(targetTab + '-content').classList.add('active');
            });
        });

        // Sub-tab switching functionality
        document.querySelectorAll('.sub-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const targetSubTab = this.dataset.subtab;
                
                // Remove active class from all sub tabs
                document.querySelectorAll('.sub-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked sub tab
                this.classList.add('active');
                
                // Hide all sub tab contents
                document.querySelectorAll('.sub-tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show target sub tab content
                document.getElementById(targetSubTab + '-content').classList.add('active');
            });
        });

        // Initialize tooltips and hover effects
        



        // leaves
            function switchLeaveTab(tabName) {
            // Update tab buttons
            document.querySelectorAll('.leave-overview-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === tabName) {
                    tab.classList.add('active');
                }
            });
            
            // Update table container class for column visibility
            const tableContainer = document.getElementById('leaveTableContainer');
            tableContainer.className = `leave-table-container tab-${tabName}`;
            
            // Hide all table rows
            document.querySelectorAll('.tab-data').forEach(row => {
                row.style.display = 'none';
            });
            
            // Show rows for selected tab
            document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(row => {
                if (row.classList.contains('tab-data')) {
                    row.style.display = 'table-row';
                }
            });
        }

  





         function switchLeaveTab(tabName) {
            // Update tab buttons
            document.querySelectorAll('.leave-overview-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === tabName) {
                    tab.classList.add('active');
                }
            });
            
            // Update table container class for column visibility
            const tableContainer = document.getElementById('leaveTableContainer');
            tableContainer.className = `leave-table-container tab-${tabName}`;
            
            // Hide all table rows
            document.querySelectorAll('.tab-data').forEach(row => {
                row.style.display = 'none';
            });
            
            // Show rows for selected tab
            document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(row => {
                if (row.classList.contains('tab-data')) {
                    row.style.display = 'table-row';
                }
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Set up tab click handlers
            document.querySelectorAll('.leave-overview-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    switchLeaveTab(this.dataset.tab);
                });
            });
            
        
       
        });

 

        