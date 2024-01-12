// header navbar section
        function footernavbar() {
          var navbar = document.getElementById("myNavbar");
          navbar.classList.toggle("responsive");
        }




// <!-- hero section  -->

  // items slide script

  let currentItem = 0;
    let touchStartX = 0;
  
    function autoSlide() {
      const items = document.querySelector('.items');
      const itemWidth = document.querySelector('.item').offsetWidth;
  
      currentItem = (currentItem + 1) % items.children.length;
  
      items.style.transform = `translateX(${-currentItem * itemWidth}px)`;
  
      updateDots();
    }
  
    // Auto slide every 3 seconds (adjust the interval as needed)
    setInterval(autoSlide, 3000);
  
    function updateDots() {
      const dotsContainer = document.getElementById('dotsContainer');
      const dots = Array.from(dotsContainer.children);
  
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentItem);
      });
    }
  
    const sliderContainer = document.getElementById('sliderContainer');
    const dotsContainer = document.getElementById('dotsContainer');
  
    sliderContainer.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
    });
  
    sliderContainer.addEventListener('touchmove', (event) => {
      const touchEndX = event.touches[0].clientX;
      const deltaX = touchStartX - touchEndX;
  
      if (deltaX > 50) {
        changeItem(event); // Swipe left
      } else if (deltaX < -50) {
        changeItem(event);  // Swipe right
      }
  
      // Reset touchStartX to prevent continuous scrolling
      touchStartX = touchEndX;
    });
  
    // Create dots dynamically based on the number of items
    const itemsContainer = document.querySelector('.items');
  
    for (let i = 0; i < itemsContainer.children.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentItem = i;
        autoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  
    // Set the initial active dot
    updateDots();