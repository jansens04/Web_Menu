// Menu Toggle
const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.menu');
menuToggle.onclick = (e) => {
  menu.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('active');
  searching.classList.remove('show');

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;

    let id = sec.getAttribute('id');

    if ((top) => offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
      });
    }
  });
};

// Menu navbar otomatis terganti
let section = document.querySelector('section');
let navLinks = document.querySelector('.navbar a');

// * Search Toggle
const menuSearch = document.querySelector('.searching');
const searching = document.querySelector('#search-form');
menuSearch.onclick = () => {
  searching.classList.toggle('show');
};

// ! REMOVE INPUT TEXT
const searchInput = document.getElementById('formSearch');
const search = document.querySelector('#search');
searchInput.onclick = () => {
  // search.value = '';
  search = search.value == '' ? alert('Create Your Teks') : (search.value = '');
};
// ? Close Menu Search
const closeMenu = document.querySelector('.close');
closeMenu.onclick = () => {
  searching.classList.remove('show');
};
