 
        const employeeData = [
            { name: "Ayush Kumar", avatar: "AK", color: "#fecaca" },
            { name: "Chirag Arora", avatar: "CA", color: "#bae6fd" },
            { name: "Dipanshu Singh", avatar: "DS", color: "#a7f3d0" },
            { name: "Prachi Mehta", avatar: "PM", color: "#bef264" }
        ];

        const teamRequestsData = [
            { employee: "Ayush Kumar", description: "Request for Attendance: I would like to formally request attendance for the upcoming client site visit scheduled for next week...", date: "12/09/2025", checkIn: "09:28 AM", checkOut: "07:00 PM", hours: "09:02 Hrs", status: "requested" },
            { employee: "Priya Sharma", description: "Request for Attendance: Need approval for attending the team building workshop next Friday...", date: "13/09/2025", checkIn: "09:15 AM", checkOut: "06:30 PM", hours: "08:45 Hrs", status: "approved" },
            { employee: "Rahul Gupta", description: "Request for Attendance: Requesting permission to attend the quarterly business review meeting...", date: "14/09/2025", checkIn: "08:45 AM", checkOut: "07:15 PM", hours: "09:30 Hrs", status: "requested" },
            { employee: "Sneha Patel", description: "Request for Attendance: Need to attend training session on new project management tools...", date: "15/09/2025", checkIn: "09:00 AM", checkOut: "06:45 PM", hours: "09:00 Hrs", status: "approved" },
            { employee: "Vikram Singh", description: "Request for Attendance: Requesting approval for client presentation and project demo...", date: "16/09/2025", checkIn: "08:30 AM", checkOut: "07:30 PM", hours: "10:00 Hrs", status: "approved" }
        ];

        const myRequestsData = [
            { description: "Request for Attendance: I would like to formally request attendance for the upcoming client site visit scheduled for next week...", date: "12/09/2025", checkIn: "09:28 AM", checkOut: "07:00 PM", hours: "09:02 Hrs", status: "requested" },
            { description: "Request for Attendance: Need approval for attending the team building workshop next Friday...", date: "13/09/2025", checkIn: "09:15 AM", checkOut: "06:30 PM", hours: "08:45 Hrs", status: "requested" },
            { description: "Request for Attendance: Requesting permission to attend the quarterly business review meeting...", date: "14/09/2025", checkIn: "08:45 AM", checkOut: "07:15 PM", hours: "09:30 Hrs", status: "approved" },
            { description: "Request for Attendance: Need to attend training session on new project management tools...", date: "15/09/2025", checkIn: "09:00 AM", checkOut: "06:45 PM", hours: "09:00 Hrs", status: "approved" },
            { description: "Request for Attendance: Requesting approval for client presentation and project demo...", date: "16/09/2025", checkIn: "08:30 AM", checkOut: "07:30 PM", hours: "10:00 Hrs", status: "approved" }
        ];

        // Status icons and colors
        const statusIcons = {
            present: { color: '#34B53A', icon: '✓' },
            holiday: { color: '#6C5FFC', icon: '★' },
            dayoff: { color: '#1ABC9C', icon: '☐' },
            late: { color: '#FFB200', icon: '⚠' },
            absent: { color: '#FF3A29', icon: '✗' },
            leave: { color: '#9747FF', icon: '🏠' }
        };

        // Generate random attendance pattern
        function generateAttendancePattern() {
            const patterns = ['present', 'present', 'present', 'present', 'present', 'present', 'present', 'holiday', 'present', 'present', 'dayoff', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'leave', 'present', 'present', 'holiday', 'present', 'present', 'present', 'present'];
            return patterns;
        }

        // Populate calendar rows
        function populateCalendarRows() {
            const calendarRows = document.getElementById('calendar-rows');
            calendarRows.innerHTML = '';

            employeeData.forEach(employee => {
                const row = document.createElement('div');
                row.className = 'calendar-row';
                
                const pattern = generateAttendancePattern();
                
                let rowHTML = `
                    <div class="calendar-cell employee-cell">
                        <div class="employee-profile">
                            <div class="profile-avatar" style="background-color: ${employee.color}">
                                ${employee.avatar}
                            </div>
                            ${employee.name}
                        </div>
                    </div>
                `;

                for (let day = 0; day < 31; day++) {
                    const status = pattern[day];
                    const statusData = statusIcons[status];
                    rowHTML += `
                        <div class="calendar-cell">
                            <div class="status-icon" style="color: ${statusData.color};">
                                ${statusData.icon}
                            </div>
                        </div>
                    `;
                }

                row.innerHTML = rowHTML;
                calendarRows.appendChild(row);
            });
        }

        // Populate team requests table
        function populateTeamRequests() {
            const tbody = document.getElementById('team-requests-body');
            tbody.innerHTML = '';

            teamRequestsData.forEach(request => {
                const row = document.createElement('tr');
                row.className = 'table-row';
                row.innerHTML = `
                    <td class="table-cell">${request.employee}</td>
                    <td class="table-cell description-cell" title="${request.description}">
                        ${request.description}
                    </td>
                    <td class="table-cell">${request.date}</td>
                    <td class="table-cell">${request.checkIn}</td>
                    <td class="table-cell">${request.checkOut}</td>
                    <td class="table-cell">${request.hours}</td>
                    <td class="table-cell">
                        <span class="status-tag status-${request.status}">
                            ${request.status === 'requested' ? 'Requested' : 'Approved'}
                        </span>
                    </td>
                    <td class="table-cell">
                                    <div class="action-wrapper" style="position: relative;">
        <button class="action-btn" id="action"   aria-haspopup="true" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
            </svg>
        </button>

        <div class="dropdown-container" role="menu" aria-label="Actions menu" style="display: none;">
            <div class="dropdown-section">
         
                  <div class="dropdown-item" role="menuitem" tabindex="0" >
                    <div class="dropdown-item-content" data-open-modal="AR-modal-01">
                        <div class="dropdown-item-text poppins">View Attendance Request</div>
                        <div class="dropdown-item-icon">
                            <!-- Eye icon -->
                        </div>  
                    </div>
                </div>
                  <div class="dropdown-item" role="menuitem" tabindex="0" >
                    <div class="dropdown-item-content">
                        <div class="dropdown-item-text poppins">Approve</div>
                        <div class="dropdown-item-icon">
                            <!-- Eye icon -->
                        </div>
                    </div>
                </div>
                  <div class="dropdown-item" role="menuitem" tabindex="0">
                    <div class="dropdown-item-content">
                        <div class="dropdown-item-text poppins">Reject</div>
                        <div class="dropdown-item-icon">
                            <!-- Eye icon -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        // Populate my requests table
        function populateMyRequests() {
            const tbody = document.getElementById('my-requests-body');
            tbody.innerHTML = '';

            myRequestsData.forEach(request => {
                const row = document.createElement('tr');
                row.className = 'table-row';
                row.innerHTML = `
                    <td class="table-cell description-cell" title="${request.description}">
                        ${request.description}
                    </td>
                    <td class="table-cell">${request.date}</td>
                    <td class="table-cell">${request.checkIn}</td>
                    <td class="table-cell">${request.checkOut}</td>
                    <td class="table-cell">${request.hours}</td>
                    <td class="table-cell">
                        <span class="status-tag status-${request.status}">
                            ${request.status === 'requested' ? 'Requested' : 'Approved'}
                        </span>
                    </td>
                    <td class="table-cell">
                           <div class="action-wrapper" style="position: relative;">
        <button class="action-btn" id="action"   aria-haspopup="true" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
            </svg>
        </button>

        <div class="dropdown-container" role="menu" aria-label="Actions menu" style="display: none;">
            <div class="dropdown-section">
         
                  <div class="dropdown-item" role="menuitem" tabindex="0" >
                    <div class="dropdown-item-content">
                        <div class="dropdown-item-text poppins">View Details</div>
                        <div class="dropdown-item-icon">
                            <!-- Eye icon -->
                        </div>  
                    </div>
                </div>
                  <div class="dropdown-item" role="menuitem" tabindex="0" >
                    <div class="dropdown-item-content">
                        <div class="dropdown-item-text poppins">Cancel</div>
                        <div class="dropdown-item-icon">
                            <!-- Eye icon -->
                        </div>
                    </div>
                </div>
                  
            </div>
        </div>
    </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        // Tab configurations
        const tabConfigs = {
            overview: {
                tabs: [
                    { id: 'my-team', label: 'My Team', target: 'overview-my-team' },
                    { id: 'only-me', label: 'Only Me', target: 'overview-only-me' },
                    { id: 'all-employee', label: 'All Employee', target: 'overview-all-employee' }
                ]
            },
            requests: {
                tabs: [
                    { id: 'team-requests', label: "My Team's Request", target: 'requests-team' },
                    { id: 'my-requests', label: 'My Requests', target: 'requests-my' }
                ]
            }
        };

        // Update sub-tabs based on main tab
        function updateSubTabs(mainTab) {
            const subTabsContainer = document.getElementById('sub-tabs');
            const config = tabConfigs[mainTab];
            
            subTabsContainer.innerHTML = '';
            
            config.tabs.forEach((tab, index) => {
                const tabElement = document.createElement('button');
                tabElement.className = `tab ${index === 0 ? 'active' : ''}`;
                tabElement.textContent = tab.label;
                tabElement.setAttribute('data-sub-tab', tab.target);
                subTabsContainer.appendChild(tabElement);
            });
        }

        // Show/hide content based on tabs
        function showContent(contentId) {
            // Hide all main content
            document.querySelectorAll('#overview-content, #requests-content').forEach(content => {
                content.classList.remove('active');
            });

            // Hide all sub content
            document.querySelectorAll('[id^="overview-"], [id^="requests-"]').forEach(content => {
                content.classList.remove('active');
            });

            // Show main content
            const mainContentId = contentId.includes('overview') ? 'overview-content' : 'requests-content';
            document.getElementById(mainContentId).classList.add('active');

            // Show specific sub content
            document.getElementById(contentId).classList.add('active');
        }

        // Initialize event listeners
        function initEventListeners() {
            // Main tab navigation
            document.querySelectorAll('[data-main-tab]').forEach(tab => {
                tab.addEventListener('click', () => {
                    const mainTab = tab.getAttribute('data-main-tab');
                    
                    // Update main tab active state
                    document.querySelectorAll('[data-main-tab]').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Update sub-tabs
                    updateSubTabs(mainTab);
                    
                    // Show first sub-tab content
                    const firstSubTab = tabConfigs[mainTab].tabs[0].target;
                    showContent(firstSubTab);
                    
                    // Re-attach sub-tab listeners
                    attachSubTabListeners();
                });
            });

            // Initial sub-tab setup
            updateSubTabs('overview');
            attachSubTabListeners();
        }

        // Attach sub-tab event listeners
        function attachSubTabListeners() {
            document.querySelectorAll('[data-sub-tab]').forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = tab.getAttribute('data-sub-tab');
                    
                    // Update sub-tab active state
                    document.querySelectorAll('[data-sub-tab]').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Show content
                    showContent(target);
                });
            });
        }

        // Initialize the application
        function init() {
            populateCalendarRows();
            populateTeamRequests();
            populateMyRequests();
            initEventListeners();
        }

        // Run initialization when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
 