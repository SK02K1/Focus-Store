const filterHeader = document.querySelector('.filter-mobile .filter-header');
const filterBody = document.querySelector('.filter-body');
const iconExpand = document.querySelector('.icon-expand');
filterHeader.addEventListener('click', () => {
  iconExpand.classList.toggle('toggle-expand');
  filterBody.classList.toggle('reveal-filter-tray');
});
