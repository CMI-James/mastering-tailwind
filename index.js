
  const themeToggle = document.getElementById('theme-toggle');
  const container = document.querySelector('.container');
  const loader = document.querySelector('.loader');

  themeToggle.addEventListener('click', () => {
    // Determine the new theme based on the current container's class
    const newTheme = container.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
    
    // Apply loader styles based on the new theme
    loader.classList.remove('hidden');
    if (newTheme === 'dark-theme') {
      loader.style.backgroundColor = 'black';
      loader.style.color = 'white';
    } else {
      loader.style.backgroundColor = 'white';
      loader.style.color = 'black';
    }
    

    // Add a short delay before toggling the theme class
    setTimeout(() => {
      container.classList.toggle('dark-theme');
      container.classList.toggle('light-theme');

      // Hide loader after theme transition
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 300); // Match the transition duration
    }, 300); // Match the transition duration
  });

