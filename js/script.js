document.querySelector('body').classList.remove('no-js');
var modal = document.querySelector('.modal');
var button = document.querySelector('.hotel-search-button');
button.addEventListener('click', function (e) {
  e.preventDefault();
  if (modal.classList.contains('modal-show'))
    modal.classList.remove('modal-show');
  else
    modal.classList.add('modal-show');
});
