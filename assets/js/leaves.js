 
        // Main tab switching
        document.querySelectorAll('.main-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all main tabs
                document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Show selected tab content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Sub tab switching for My Leave section
        document.querySelectorAll('.sub-tab[data-subtab]').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all sub tabs
                document.querySelectorAll('.sub-tab[data-subtab]').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all sub content
                document.querySelectorAll('.sub-content').forEach(content => content.classList.remove('active'));
                
                // Show selected sub content
                const tabId = tab.getAttribute('data-subtab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Team tab switching
        document.querySelectorAll('.sub-tab[data-teamtab]').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all team tabs
                document.querySelectorAll('.sub-tab[data-teamtab]').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all team sub content
                document.querySelectorAll('#team-leave .sub-content').forEach(content => content.classList.remove('active'));
                
                // Show selected team sub content
                const tabId = tab.getAttribute('data-teamtab');
                document.getElementById(tabId).classList.add('active');
            });
        });
  