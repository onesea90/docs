// Interactive Demo Filter - Data Swap Approach
(function() {
    'use strict';
    
    // All demo data organized by category
    const demoData = {
        featured: [
            {
                icon: '✈️',
                title: "Stay Ahead of Every Vessel's Survey",
                description: 'A real-time dashboard that tracks class surveys across the fleet—highlighting overdue items, upcoming due surveys, and a timeline view for proactive compliance.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_yue6oa4jau8'
            },
            {
                icon: '📊',
                title: 'Scrubber Compliance, Simplified',
                description: 'Monitors scrubber performance and regulatory compliance across the fleet with automated, detailed compliance reports.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_l505zvz2di'
            },
            {
                icon: '🎓',
                title: 'Policies, Reviewed & ISO-Ready',
                description: 'Company policies can be reviewed and rewritten into ISO-aligned structured formats with the LOVOY method—clear, compliant, and standardized.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_78wlcehnjct'
            },
            {
                icon: '📚',
                title: 'Vessel Inspections, Simplified',
                description: 'Turn 100s of photos into structured inspection reports, tracking findings and follow-ups with clarity.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_ifc1s7piekn'
            },
            {
                icon: '📊',
                title: 'Custom Dashboards, On the Go',
                description: 'Build and deploy dashboards by simply chatting—turning complex company data into actionable insights.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_a45pk0slnnc'
            },
            {
                icon: '📊',
                title: 'Operative Statements, Automated',
                description: 'Generate structured voyage statements covering costs, revenues, and allocations—saving hours of manual work.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_d1txupsuzlt'
            },
          
            
        ],
        others: [
            {
                icon: '🤝',
                title: 'Smarter Incident Investigations',
                description: 'Reconstruct complex failures with full context, linking reports and data into root cause and corrective action reports.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_0fafutoa4dyk'
            },
            {
                icon: '📊',
                title: 'Passage Plans, Perfected',
                description: 'Review and validate ECDIS screenshots like a master mariner—instantly spotting deviations for safer voyages.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_gmdi69lncng'
            },
            {
                icon: '🎓',
                title: 'Decarbonization, Made Practical',
                description: 'Deliver realistic sustainability strategies for 350+ vessels with insights on technologies, retrofits, and compliance.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_2slrbac97tm'
            },
            {
                icon: '🎓',
                title: 'Every Vessel, Every Move, Always in Sight',
                description: 'An interactive live dashboard showing ETA, ETB, ETD, and destination with a dynamic map view—delivering complete situational awareness at your fingertips.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_qnei8hb5i1o'
            },
            {
                icon: '📊',
                title: 'From Requisition to PO—Seamlessly Tracked',
                description: 'A centralized tracker that visualizes purchase requests, order statuses, requisition history, and pending approvals—ensuring no purchase slips through the cracks.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_31e1xsapcwd'
            },
            {
                icon: '✈️',
                title: 'Your Fleet’s Finances, Crystal Clear',
                description: 'A smart financial dashboard that monitors vessel-wise budgets, YTD expenses, committed costs, and variances—helping you steer costs with precision.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_3h4p8uar3el'
            },
            {
                icon: '🤝',
                title: 'No More Missing Reports',
                description: 'An automated tracker that monitors technical form submissions from every vessel—instantly flagging missing, submitted, and error entries for hassle-free month-end closure.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_0s0m5fnin1f'
            },
            {
                icon: '🎓',
                title: 'Right Crew, Right Time, Right Vessel',
                description: 'An intelligent crew management dashboard that shortlists officers based on rank, validity, nationality, and vessel history—streamlining assignments in seconds.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_91ti6dz7xa'
            },
            {
                icon: '📊',
                title: 'Plan, Compare, Optimize maintenance—Effortlessly',
                description: 'An advanced maintenance dashboard that structures engine upkeep schedules, compares options, and provides clear recommendations for cost-effective planning.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_ftvln0b3ru'
            },
            {
                icon: '📊',
                title: 'Personalized Diabetes Care',
                description: 'Explains glucose spikes and builds a tailored Indian diet plan with portion sizes, nutrition breakdowns, and a weekly meal chart.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_nalb0cgyhs9'
            },
            {
                icon: '⚡',
                title: 'Titan Stock, Decoded',
                description: 'Delivers a deep multi-year analysis of Titan—covering financials, brand performance, projections, and analyst views with rich visual reports',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_mua5ln59qc'
            },
            {
                icon: '🎓',
                title: 'Drydock Specs in Minutes',
                description: 'Generates professional, editable drydock specifications from minimal input—turning a lengthy, manual task into a fast, standardized workflow.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_4uop5vwlrd7'
            },
            {
                icon: '📊',
                title: 'Weekly Reports, Automated',
                description: 'Automatically creates precise, color-coded vessel status reports ready to send to owners—saving hours every week.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_0prfdfcrj3bn'
            },
            {
                icon: '🤝',
                title: 'Workdone Reviews, Reinvented',
                description: 'Analyzes engine work reports with photos, matches findings to casefiles, and drafts professional replies—like a digital technical superintendent.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_eanf5xjdv97'
            },
            {
                icon: '✈️',
                title: 'Your Weekly Job Planner',
                description: 'Reads vessel emails and casefiles to create a clear, structured weekly action plan—ensuring no vessel or issue is overlooked.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_mrtl22q0qsp'
            },
            {
                icon: '✈️',
                title: 'TMSA Audit, Simplified',
                description: 'An interactive dashboard with key audit topics, probable auditor questions, and precise answers—turning audit prep into a confident, efficient process.',
                link: 'https://app.siya.com/usecases/index.html?sessionId=session_s7dq6yq7yc8'
            },
           
            
        ]
    };
    
    function initializeFilter() {
        // Find all filter buttons
        const filterButtons = document.querySelectorAll('[data-category]');
        
        if (filterButtons.length === 0) {
            setTimeout(initializeFilter, 1000);
            return;
        }
        
        // Initialize button styles
        function initializeButtons(activeCategory) {
            const buttons = document.querySelectorAll('[data-category]');
            buttons.forEach(button => {
                const buttonCategory = button.getAttribute('data-category');
                if (buttonCategory === activeCategory) {
                    button.classList.remove('bg-gray-100', 'text-gray-700', 'dark:bg-gray-800', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-700');
                    button.classList.add('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
                } else {
                    button.classList.remove('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
                    button.classList.add('bg-gray-100', 'text-gray-700', 'dark:bg-gray-800', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-700');
                }
                button.classList.add('px-4', 'md:px-6', 'py-2', 'rounded-full', 'text-sm', 'md:text-base', 'font-medium', 'border-0', 'cursor-pointer', 'transition-colors');
            });
        }
        
        // Update cards with data
        function updateCards(category) {
            
            // Get the data for this category
            const categoryData = demoData[category] || demoData.featured;
            
            // Find all card containers
            const cards = document.querySelectorAll('[data-card-category]');
            
            // Update each card with new data
            cards.forEach((card, index) => {
                if (index < categoryData.length) {
                    const data = categoryData[index];
                    
                    // Update icon
                    const iconElement = card.querySelector('.text-xl');
                    if (iconElement) iconElement.textContent = data.icon;
                    
                    // Update title
                    const titleElement = card.querySelector('h3');
                    if (titleElement) titleElement.textContent = data.title;
                    
                    // Update description
                    const descElement = card.querySelector('p');
                    if (descElement) descElement.textContent = data.description;
                    
                    // Set click handler
                    card.onclick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(data.link, '_blank');
                    };
                    
                    // Show card
                    card.style.display = '';
                } else {
                    // Hide extra cards if we have fewer items
                    card.style.display = 'none';
                }
            });
            
            // Update button styles
            initializeButtons(category);
        }
        
        // Add click listeners to buttons with event delegation
        document.addEventListener('click', function(e) {
            // Check if clicked element is a filter button
            const button = e.target.closest('[data-category]');
            if (button) {
                e.preventDefault();
                e.stopPropagation();
                const category = button.getAttribute('data-category');
                updateCards(category);
            }
        }, true);
        
        // Initialize buttons and cards with featured
        setTimeout(() => {
            initializeButtons('featured');
            updateCards('featured');
        }, 100);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFilter);
    } else {
        initializeFilter();
    }
    
    // Also try after a delay
    setTimeout(initializeFilter, 2000);
    
})();
