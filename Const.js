const skillBars = document.querySelectorAll('.skill-progress');

skillBars.forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0%'; // Set initial width to 0
  setTimeout(() => {
    bar.style.width = width;
  }, 100);
});
