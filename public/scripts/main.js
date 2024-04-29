
function adjustNavbarJustifyContent() {
    const navbar = document.querySelector('.navbar');
    
    function setJustifyContent() {
      if (window.innerWidth >= 768) {
        navbar.classList.add('justify-content-center');
      } else {
        navbar.classList.remove('justify-content-center');
      }
    }
  
    // Initial adjustment on page load
    setJustifyContent();
  
    // Adjust on window resize
    window.addEventListener('resize', setJustifyContent);
  }
  
  // Call the function to enable the adjustment
  adjustNavbarJustifyContent();