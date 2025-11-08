// Use case filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for Mintlify to render the page
  setTimeout(function() {
    // Find all category buttons
    const categoryButtons = document.querySelectorAll('[data-category]');
    const useCaseCards = document.querySelectorAll('[data-card-category]');
    
    if (categoryButtons.length === 0 || useCaseCards.length === 0) {
      return; // Elements not found, exit
    }
    
    // Add click handlers to category buttons
    categoryButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedCategory = this.getAttribute('data-category');
        
        // Update button styles
        categoryButtons.forEach(btn => {
          if (btn === this) {
            // Active button styling
            btn.className = 'bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-medium border-0 cursor-pointer';
          } else {
            // Inactive button styling
            btn.className = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-6 py-2 rounded-full font-medium border-0 cursor-pointer transition-colors hover:bg-gray-200 dark:hover:bg-gray-700';
          }
        });
        
        // Filter cards
        useCaseCards.forEach(card => {
          const cardCategory = card.getAttribute('data-card-category');
          if (selectedCategory === 'featured' || cardCategory === selectedCategory) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    // Initial state is already set in HTML with Featured button having active styles
  }, 500); // Wait 500ms for page to render
});