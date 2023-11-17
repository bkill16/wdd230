document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.directory-grid');
  
    if (!display.classList.contains('grid') && !display.classList.contains('list')) {
      display.classList.add('grid');
    }
  });
  
  const gridBtn = document.querySelector('#grid-btn');
  const listBtn = document.querySelector('#list-btn');
  const display = document.querySelector('.directory-grid');
  
  gridBtn.addEventListener('click', showGrid);
  listBtn.addEventListener('click', showList);
  
  function showGrid() {
    display.classList.add('grid');
    display.classList.remove('list');
  }
  
  function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
  }