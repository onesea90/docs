// Navbar Enhancements for Mintlify

document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for Mintlify to render
  setTimeout(function() {
    // Find the navbar
    const navbar = document.querySelector('#navbar');
    if (!navbar) return;

    // Find the container with the links
    const linksContainer = navbar.querySelector('div > div:last-child');
    if (!linksContainer) return;

    // Create search bar
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = 'position: absolute; left: 50%; transform: translateX(-50%); top: 50%;';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search documentation...';
    searchInput.style.cssText = `
      width: 400px;
      padding: 8px 16px 8px 36px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #f9fafb;
      font-size: 14px;
      outline: none;
    `;
    
    // Add search icon
    const searchIcon = document.createElement('span');
    searchIcon.innerHTML = '🔍';
    searchIcon.style.cssText = 'position: absolute; left: 12px; top: 50%; transform: translateY(-50%);';
    
    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchInput);
    
    // Add search functionality
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
          // You can integrate with Mintlify's search or implement custom search
          console.log('Searching for:', query);
        }
      }
    });
    
    // Insert search bar
    navbar.appendChild(searchContainer);

    // Create theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
      margin-left: 16px;
      padding: 8px 12px;
      border-radius: 6px;
      background: #f3f4f6;
      border: none;
      cursor: pointer;
      font-size: 16px;
    `;
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      
      if (isDark) {
        html.classList.remove('dark');
        themeToggle.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        themeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // Set initial theme icon
    if (document.documentElement.classList.contains('dark')) {
      themeToggle.innerHTML = '☀️';
    }
    
    // Add theme toggle to navbar
    linksContainer.appendChild(themeToggle);

    // Update styles for dark mode
    const updateDarkModeStyles = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        searchInput.style.background = '#1a1a1a';
        searchInput.style.borderColor = '#333333';
        searchInput.style.color = '#ffffff';
        themeToggle.style.background = '#333333';
        themeToggle.style.color = '#ffffff';
      } else {
        searchInput.style.background = '#f9fafb';
        searchInput.style.borderColor = '#e5e7eb';
        searchInput.style.color = '#000000';
        themeToggle.style.background = '#f3f4f6';
        themeToggle.style.color = '#000000';
      }
    };

    // Watch for theme changes
    const observer = new MutationObserver(updateDarkModeStyles);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    // Initial dark mode check
    updateDarkModeStyles();

  }, 500);
});