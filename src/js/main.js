document.addEventListener('DOMContentLoaded', (event) => {
  // implement smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // modal windows for images
  // Add event listeners to all artwork images
  const artworkImages = document.querySelectorAll('.artwork-img');

  artworkImages.forEach(img => {
    img.addEventListener('click', () => {
      // Create modal window
      const modal = document.createElement('div');
      modal.classList.add('modal');

      // Create modal content
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      // Create image element and add to modal content
      const modalImg = document.createElement('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalContent.appendChild(modalImg);

      // Create close button and add to modal content
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      modalContent.appendChild(closeButton);

      // Add modal content to modal window
      modal.appendChild(modalContent);

      // Add modal window to page
      document.body.appendChild(modal);

      // Show modal window
      modal.style.display = 'block';
    });
  });

  // Close modal window when user clicks outside of modal content
  window.addEventListener('click', (event) => {
    const modal = event.target.closest('.modal');
    if (modal && event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
