  
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab items
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab content
    const selectedContent = document.getElementById(tabName + '-content');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked tab
    const clickedTab = event.target.closest('.tab-item');
    if (clickedTab) {
        clickedTab.classList.add('active');
    }

    // Toggle right panel content
    const paymentHistoryPanel = document.getElementById('payment-history');
    const paymentSummaryPanel = document.getElementById('payment-summary');

    if (tabName === 'payment-history') {
        if (paymentHistoryPanel) paymentHistoryPanel.style.display = 'block';
        if (paymentSummaryPanel) paymentSummaryPanel.style.display = 'none';
    } else {
        if (paymentSummaryPanel) paymentSummaryPanel.style.display = 'block';
        if (paymentHistoryPanel) paymentHistoryPanel.style.display = 'none';
    }

    // ✅ Toggle title sections
    const historyTitle = document.getElementById('payment-history-title');
    const summaryTitle = document.getElementById('payment-summary-title');

    if (tabName === 'payment-history') {
        if (historyTitle) historyTitle.style.display = 'block';
        if (summaryTitle) summaryTitle.style.display = 'none';
    } else {
        if (summaryTitle) summaryTitle.style.display = 'block';
        if (historyTitle) historyTitle.style.display = 'none';
    }
}


        // Toggle team member expansion
        document.addEventListener('click', function(event) {
            if (event.target.closest('.expand-icon')) {
                const icon = event.target.closest('.expand-icon');
                const isRotated = icon.style.transform.includes('rotate(-90deg)');
                
                if (isRotated) {
                    icon.style.transform = '';
                } else {
                    icon.style.transform = 'rotate(-90deg)';
                }
            }
        });

        // Toggle contribution tabs
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('contribution-tab')) {
                const contributionTabs = document.querySelectorAll('.contribution-tab');
                contributionTabs.forEach(tab => tab.classList.remove('active'));
                event.target.classList.add('active');
            }
        });

        // Initialize default state
        document.addEventListener('DOMContentLoaded', function() {
            // Set Overview as default active tab
            const overviewTab = document.querySelector('.tab-item[onclick="switchTab(\'overview\')"]');
            if (overviewTab) {
                overviewTab.classList.add('active');
            }
        });




