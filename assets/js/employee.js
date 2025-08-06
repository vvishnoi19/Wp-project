
  
        // Tab switching functionality
        function initTabSwitching() {
            const tabItems = document.querySelectorAll('.tab-item');
            const tabContents = document.querySelectorAll('.tab-content');

            tabItems.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    tabItems.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));

                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Show corresponding tab content
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        }
           function initRequestsSubTabSwitching() {
            const subTabs = document.querySelectorAll('.sub-tab[data-request-tab]');
            const subTabContents = document.querySelectorAll('.sub-tab-content');

            subTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all sub-tabs and contents
                    subTabs.forEach(t => t.classList.remove('active'));
                    subTabContents.forEach(c => c.classList.remove('active'));

                    // Add active class to clicked sub-tab
                    tab.classList.add('active');

                    // Show corresponding sub-tab content
                    const tabId = tab.getAttribute('data-request-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        }

    

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initTabSwitching();
             initRequestsSubTabSwitching();
        });
   



        // Tab switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            const requestsTabs = document.querySelectorAll('.requests-tab');
            const requestsTabContents = document.querySelectorAll('.requests-tab-content');

            requestsTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');

                    // Remove active class from all tabs
                    requestsTabs.forEach(t => {
                        t.classList.remove('active');
                        t.classList.add('inactive');
                    });

                    // Add active class to clicked tab
                    this.classList.add('active');
                    this.classList.remove('inactive');

                    // Hide all tab contents
                    requestsTabContents.forEach(content => {
                        content.classList.remove('active');
                    });

                    // Show target tab content
                    document.getElementById(targetTab).classList.add('active');
                });
            });
        });







        // create employee modal



        let currentStep = 1;
        const totalSteps = 3;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updateStepDisplay();
            
            // Add entrance animation
            const modal = document.querySelector('.modal-container');
            modal.style.transform = 'scale(0.95)';
            modal.style.opacity = '0';
            
            setTimeout(() => {
                modal.style.transition = 'all 0.3s ease-out';
                modal.style.transform = 'scale(1)';
                modal.style.opacity = '1';
            }, 10);
        });

        function updateStepDisplay() {
            // Update stepper
            document.querySelectorAll('.step').forEach((step, index) => {
                const stepNumber = index + 1;
                const stepShape = step.querySelector('.step-shape');
                const stepLabel = step.querySelector('.step-label');
                
                if (stepNumber <= currentStep) {
                    stepShape.classList.add('active');
                    stepLabel.classList.add('active');
                } else {
                    stepShape.classList.remove('active');
                    stepLabel.classList.remove('active');
                }
            });

            // Update content
            document.querySelectorAll('.step-content').forEach((content, index) => {
                const stepNumber = index + 1;
                if (stepNumber === currentStep) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Update button text
            const nextBtn = document.getElementById('nextBtn');
            const btnText = nextBtn.querySelector('.btn-text');
            
            if (currentStep === totalSteps) {
                btnText.textContent = 'Submit';
            } else {
                btnText.textContent = 'Next';
            }
        }

        function nextStep() {
            if (validateCurrentStep()) {
                if (currentStep === totalSteps) {
                    submitForm();
                } else {
                    currentStep++;
                    updateStepDisplay();
                    
                    // Smooth scroll to top
                    document.querySelector('.modal-content').scrollTop = 0;
                }
            }
        }

        function previousStep() {
            if (currentStep > 1) {
                currentStep--;
                updateStepDisplay();
            }
        }

        function goToStep(step) {
            if (step >= 1 && step <= totalSteps) {
                currentStep = step;
                updateStepDisplay();
            }
        }

        function validateCurrentStep() {
            const currentStepElement = document.getElementById(`step-${currentStep}`);
            const requiredFields = currentStepElement.querySelectorAll('input[required], select[required]');
            
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#DC2626';
                    isValid = false;
                } else {
                    field.style.borderColor = '#E2E8F0';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
            }
            
            return isValid;
        }

        function submitForm() {
            // Collect all form data
            const formData = {
                // Basic Info
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                mobile: document.getElementById('mobile').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value,
                education: document.getElementById('education').value,
                
                // Address Details
                street: document.getElementById('street').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value,
                country: document.getElementById('country').value,
                addressType: document.getElementById('addressType').value,
                
                // Employment Details
                employeeId: document.getElementById('employeeId').value,
                department: document.getElementById('department').value,
                jobTitle: document.getElementById('jobTitle').value,
                startDate: document.getElementById('startDate').value,
                employmentType: document.getElementById('employmentType').value,
                salary: document.getElementById('salary').value
            };
            
            console.log('Employee Data:', formData);
            alert('Employee added successfully!');
            closeModal();
        }

   
        // Allow clicking on stepper to navigate (optional)
        document.querySelectorAll('.step').forEach((step, index) => {
            step.addEventListener('click', () => {
                const stepNumber = index + 1;
                if (stepNumber < currentStep || stepNumber === currentStep) {
                    goToStep(stepNumber);
                }
            });
        });

      

        // Add keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey || event.metaKey) {
                switch(event.key) {
                    case 'ArrowLeft':
                        event.preventDefault();
                        previousStep();
                        break;
                    case 'ArrowRight':
                        event.preventDefault();
                        nextStep();
                        break;
                }
            }
        });

        // Form field validation on input
        document.querySelectorAll('.form-input, .form-select').forEach(field => {
            field.addEventListener('input', function() {
                if (this.style.borderColor === 'rgb(220, 38, 38)') {
                    this.style.borderColor = '#E2E8F0';
                }
            });
        });

        // Date picker functionality (basic)
        document.querySelectorAll('.date-input input').forEach(input => {
            input.addEventListener('click', function() {
                // In a real app, you would open a date picker here
                console.log('Date picker clicked for:', this.id);
            });
        });

    
        // Auto-format employee ID
        document.getElementById('employeeId').addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase();
            e.target.value = value;
        });

        // Responsive stepper behavior
        function handleResponsiveStepper() {
            const screenWidth = window.innerWidth;
            const stepper = document.querySelector('.stepper');
            
            if (screenWidth < 480) {
                stepper.style.flexDirection = 'column';
                stepper.style.alignItems = 'flex-start';
                
                document.querySelectorAll('.step').forEach(step => {
                    step.style.flexDirection = 'row';
                    step.style.width = '100%';
                    step.style.alignItems = 'center';
                });
            } else {
                stepper.style.flexDirection = 'row';
                stepper.style.alignItems = 'flex-start';
                
                document.querySelectorAll('.step').forEach(step => {
                    step.style.flexDirection = 'column';
                    step.style.width = 'auto';
                    step.style.alignItems = 'center';
                });
            }
        }

        // Handle window resize
        window.addEventListener('resize', handleResponsiveStepper);
        
        // Initialize responsive behavior
        handleResponsiveStepper();
   