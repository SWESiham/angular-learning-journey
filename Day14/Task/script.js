// Heart Counter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart-counter i');
    
    heartIcons.forEach(icon => {
      let clicked = false;
      const counterElement = icon.nextElementSibling;
      let count = parseInt(counterElement.textContent);
      
      icon.addEventListener('click', function() {
        if (!clicked) {
          // Like action
          this.classList.remove('fa-regular');
          this.classList.add('fa-solid');
          count++;
          counterElement.textContent = count;
          clicked = true;
          
          // Add animation
          this.style.transform = 'scale(1.5)';
          setTimeout(() => {
            this.style.transform = 'scale(1)';
          }, 300);
        } else {
          // Unlike action
          this.classList.remove('fa-solid');
          this.classList.add('fa-regular');
          count--;
          counterElement.textContent = count;
          clicked = false;
        }
        
        // Update counter with animation
        counterElement.style.transform = 'scale(1.2)';
        counterElement.style.color = '#e74c3c';
        setTimeout(() => {
          counterElement.style.transform = 'scale(1)';
          counterElement.style.color = '#777';
        }, 300);
      });
    });
  });