
        function switchTab(tabName) {
            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.ta-tab');
            tabs.forEach(tab => tab.classList.remove('ta-active'));
            
            // Remove active class from all tab contents
            const tabContents = document.querySelectorAll('.ta-tab-content');
            tabContents.forEach(content => content.classList.remove('ta-active'));
            
            // Add active class to clicked tab
            event.target.classList.add('ta-active');
            
            // Show corresponding tab content
            if (tabName === 'team') {
                document.getElementById('team-tab').classList.add('ta-active');
            } else if (tabName === 'project') {
                document.getElementById('project-tab').classList.add('ta-active');
            }
        }


