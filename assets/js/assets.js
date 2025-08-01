 // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            initializeMainTabs();
            initializeSubTabs();
            initializePagination();
            initializeHoverEffects();
        });

        // Main tab switching functionality
        function initializeMainTabs() {
            const mainTabs = document.querySelectorAll('.asset-mgmt-main-tab');
            
            mainTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabData = this.getAttribute('data-main-tab');
                    
                    // Remove active class from all main tabs
                    mainTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    console.log(`Switched to main tab: ${tabData}`);
                });
            });
        }

        // Sub tab switching functionality
        function initializeSubTabs() {
            const subTabs = document.querySelectorAll('.asset-mgmt-sub-tab');
            
            subTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabData = this.getAttribute('data-sub-tab');
                    
                    // Remove active class from all sub tabs
                    subTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked sub tab
                    this.classList.add('active');
                    
                    // Hide all tab contents
                    const tabContents = document.querySelectorAll('.asset-mgmt-tab-content');
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Show selected tab content
                    const selectedContent = document.getElementById(tabData + '-content');
                    if (selectedContent) {
                        selectedContent.classList.add('active');
                    }
                    
                    console.log(`Switched to sub tab: ${tabData}`);
                });
            });
        }

        // Pagination functionality
        function initializePagination() {
            const rowsSelect = document.querySelector('.asset-mgmt-rows-select');
            const paginationBtns = document.querySelectorAll('.asset-mgmt-pagination-btn:not(.disabled)');
            
            if (rowsSelect) {
                rowsSelect.addEventListener('change', function() {
                    console.log(`Rows per page changed to: ${this.value}`);
                });
            }

            paginationBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    console.log('Pagination button clicked');
                });
            });
        }


        // Hover effects
        function initializeHoverEffects() {
            // Tab hover effects
            const allTabs = document.querySelectorAll('.asset-mgmt-main-tab, .asset-mgmt-sub-tab');
            allTabs.forEach(tab => {
                tab.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('active')) {
                        this.style.opacity = '0.7';
                    }
                });

                tab.addEventListener('mouseleave', function() {
                    this.style.opacity = '1';
                });
            });

            // Action button hover effects
            const actionButtons = document.querySelectorAll('.asset-mgmt-action-button');
            actionButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                    this.style.transition = 'transform 0.2s';
                });

                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });

            // Filter button hover effects
            const filterButtons = document.querySelectorAll('.asset-mgmt-filter-button');
            filterButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f8fafc';
                    this.style.transition = 'background-color 0.2s';
                });

                button.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'var(--asset-mgmt-white)';
                });
            });
        }

function showTab(tabId) {
  // Hide all tab contents
  var contents = document.querySelectorAll('.tab-content');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Show the selected tab
  var activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'block';
  }
}




document.addEventListener("click", function (e) {
    // Close all dropdowns first
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
            menu.style.display = "none";
        }
    });
});

function showActions(button,status,event) {
    const parentTd = button.closest('td');
    if(!parentTd) return
    const returnReqDropdown = parentTd.querySelector('.return-request-dropdown');
    const editDropdown = parentTd.querySelector('.edit-profile-dropdown');

        document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
    });


    // First hide both dropdowns in current row
    // if(returnReqDropdown)returnReqDropdown.style.display = "none";
    // if(editDropdown)editDropdown.style.display = "none";

    // Decide which one to toggle
    if (status === 'requested') {
        editDropdown.style.display = "block";
        returnReqDropdown.style.display = "none";
    } else if (status ==='assigned') {
        returnReqDropdown.style.display = "block";
         editDropdown.style.display = "none";
    }

    // Stop event from bubbling to document click listener (which would immediately close it)
    event.stopPropagation();
}



// Close all requested dropdowns if clicked outside
document.addEventListener("click", function (e) {
    document.querySelectorAll(".requested-dropdown").forEach(menu => {
        if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
            menu.style.display = "none";
        }
    });
});


// Close any open dropdown when clicking outside
document.addEventListener("click", function (e) {
    document.querySelectorAll(".requested-dropdown").forEach(dropdown => {
        const parent = dropdown.closest(".asset-mgmt-action-cell");
        const button = parent.querySelector(".asset-mgmt-action-button");

        if (!dropdown.contains(e.target) && !button.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});

function toggleRequestedDropDown(button, event) {
    const parent = button.closest(".asset-mgmt-action-cell");
    const dropdown = parent.querySelector(".requested-dropdown");

    // Close all other dropdowns
    document.querySelectorAll(".requested-dropdown").forEach(d => {
        if (d !== dropdown) d.style.display = "none";
    });

    // Toggle current dropdown
    if (dropdown) {
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    }

    event.stopPropagation(); // Prevent closing immediately after open
}

