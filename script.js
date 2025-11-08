// Device-specific redirect logic
(function() {
    // Only run on root path
    if (window.location.pathname === '/') {
      
      // Check if mobile (width <= 767px)
      if (window.innerWidth <= 767) {
        // Mobile: redirect to Introduction
        window.location.replace('/Introduction');
      } else {
        // Desktop: redirect to home
        window.location.replace('/home');
      }
    }
  })();
  
  console.log('Device-specific redirect script initialized');
  // Handle window resize to re-check device type
  window.addEventListener('resize', function() {
    console.log('Window resized, checking device type...');
    if (window.location.pathname === '/') {
        console.log('Current path is root, checking device type...');
      if (window.innerWidth <= 767) {
        window.location.replace('/Introduction');
        console.log('Redirected to Introduction for mobile device');
      } else {
        window.location.replace('/home');
        console.log('Redirected to home for desktop device');
      }
    }
  });

console.log('Device-specific redirect script loaded');

// Interactive Demo Category Filter
(function() {
  console.log('Interactive Demo Filter: Script loaded');
  
  function initializeCategoryFilter() {
    console.log('Interactive Demo Filter: Initializing...');
    
    // Get all category buttons and cards
    const categoryButtons = document.querySelectorAll('button[data-category]');
    const demoCards = document.querySelectorAll('div[data-card-category]');
    
    console.log('Found buttons:', categoryButtons.length);
    console.log('Found cards:', demoCards.length);
    
    if (categoryButtons.length === 0 || demoCards.length === 0) {
      console.log('Interactive Demo Filter: Elements not found, exiting');
      return; // Exit if elements not found
    }
    
    // Function to filter cards
    function filterCards(category) {
      console.log('Filtering by category:', category);
      
      demoCards.forEach(card => {
        const cardCategory = card.getAttribute('data-card-category');
        console.log('Card category:', cardCategory);
        
        if (category === 'featured' || category === 'all') {
          // Show all cards for 'featured' category
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          // Show/hide based on category match
          if (cardCategory === category) {
            card.style.display = '';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
          }
        }
      });
    }
    
    // Function to update button styles
    function updateButtonStyles(activeButton) {
      categoryButtons.forEach(btn => {
        if (btn === activeButton) {
          // Active button style
          btn.className = 'bg-black text-white dark:bg-white dark:text-black px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium border-0 cursor-pointer transition-colors';
        } else {
          // Inactive button style
          btn.className = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium border-0 cursor-pointer transition-colors hover:bg-gray-200 dark:hover:bg-gray-700';
        }
      });
    }
    
    // Add click handlers to buttons
    categoryButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Button clicked:', this.getAttribute('data-category'));
        const category = this.getAttribute('data-category');
        filterCards(category);
        updateButtonStyles(this);
      });
    });
    
    // Initialize with 'featured' selected
    const featuredButton = document.querySelector('button[data-category="featured"]');
    if (featuredButton) {
      filterCards('featured');
      updateButtonStyles(featuredButton);
    }
  }
  
  // Run on page load
  document.addEventListener('DOMContentLoaded', initializeCategoryFilter);
  
  // Track if already initialized
  let isInitialized = false;
  
  // Run initialization
  function tryInitialize() {
    if (!isInitialized && document.querySelector('button[data-category]')) {
      initializeCategoryFilter();
      isInitialized = true;
    }
  }
  
  // Run on dynamic content changes (for SPA navigation)
  const observer = new MutationObserver(() => {
    // Reset if buttons are gone (page changed)
    if (!document.querySelector('button[data-category]')) {
      isInitialized = false;
    } else {
      tryInitialize();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Also run immediately if DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(tryInitialize, 100);
  }
})();