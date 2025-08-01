
        // Main tab switching functionality
        function switchMainTab(tabName) {
            // Hide all main tab contents
            document.getElementById('paylist-content').classList.remove('active');
            document.getElementById('reimbursements-content').classList.remove('active');
            
            // Remove active class from all main tabs
            document.querySelectorAll('.main-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName + '-content').classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Sub tab switching functionality  
        function switchSubTab(tabName) {
            // Hide all sub tab contents
            document.getElementById('reimbursements-table').classList.remove('active');
            document.getElementById('bonus-table').classList.remove('active');
            
            // Remove active class from all sub tabs
            document.querySelectorAll('.sub-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected sub tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked sub tab
            event.target.classList.add('active');
        }

       
  



        function openCreateModal(){
            const modalName=document.querySelector('.modal-overlay')
            modalName.style.display="block"
            document.querySelector('.modal-overlay').style.display = 'flex';
        }
        function handleClose(){
            const modalName=document.querySelector('.modal-overlay')
            modalName.style.display="none"
        }
        

     

function openDropDown() {
    const dropdown = document.querySelector('.dropdown-container');
    dropdown.style.display = 'block';

    // Close on outside click
    function handleOutsideClick(event) {
        const button = document.querySelector('.action-btn');
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.style.display = 'none';
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    // Delay listener so the current click doesn't immediately close it
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
    }, 0);
}


