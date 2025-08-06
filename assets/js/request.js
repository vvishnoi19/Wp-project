
        // Current active states
        let currentMainTab = 'team';
        let currentSubTabs = {
            team: 'leave',
            personal: 'leave'
        };

        // Switch main tabs
        function switchMainTab(tabName) {
            // Update active main tab
            document.querySelectorAll('.main-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');

            // Hide all main tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show selected main tab content
            document.getElementById(tabName + '-content').classList.add('active');

            currentMainTab = tabName;
        }

        // Switch sub tabs
        function switchSubTab(mainTab, subTab) {
            // Update active sub tab for this main tab
            document.querySelectorAll(`#${mainTab}-content .sub-tab`).forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');

            // Hide all sub tab content for this main tab
            document.querySelectorAll(`#${mainTab}-content .sub-tab-content`).forEach(content => {
                content.classList.remove('active');
            });

            // Show selected sub tab content
            document.getElementById(`${mainTab}-${subTab}`).classList.add('active');

            currentSubTabs[mainTab] = subTab;
        }

        // Show action menu
        function showActionMenu() {
            alert('Action menu clicked! This would show options like Edit, Delete, etc.');
        }

        // Initialize pagination interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to navigation buttons
            document.querySelectorAll('.nav-btn:not(:disabled)').forEach(btn => {
                btn.addEventListener('click', function() {
                    console.log('Navigation button clicked');
                });
            });

            // Add functionality to rows per page selectors
            document.querySelectorAll('.rows-select').forEach(select => {
                select.addEventListener('change', function() {
                    console.log('Rows per page changed to:', this.value);
                });
            });

            // Add hover effects to table rows
            document.querySelectorAll('.table tbody tr').forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f8fafc';
                });
                row.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '';
                });
            });
        });
   