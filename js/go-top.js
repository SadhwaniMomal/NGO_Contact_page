window.onscroll = function() {
    let goTop = document.querySelector('.go-top');
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      if (!goTop.classList.contains('active')) {
        goTop.classList.add('active');
      }
    } else {
      if (goTop.classList.contains('active')) {
        goTop.classList.remove('active');
      }
    }
  };
  
  // Slow scroll to the top
  function slowScrollToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollInterval = setInterval(function() {
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll);
        currentScroll -= 50; // Adjust this value for speed (higher = slower scroll)
      } else {
        clearInterval(scrollInterval); // Stop when we reach the top
      }
    }, 10); // Adjust this value for delay between scroll steps (lower = smoother)
  }
  
  // When the user clicks the button, scroll to the top slowly
  document.querySelector('.go-top').addEventListener('click', function() {
    slowScrollToTop();
  });
  