document.querySelector('body').classList.remove('no-js');
var modal = document.querySelector('.modal');
var button = document.querySelector('.hotel-search-button');
var form=document.querySelector('.search-form');
var searchCheckin=form.querySelector("[name=search-checkin]");
var searchCheckout=form.querySelector("[name=search-checkout]");
var searchAdult=form.querySelector("[name=search-adult]");
var searchChild=form.querySelector("[name=search-child]");

var searchAdultStorage = localStorage.getItem("searchAdult");
var searchChildStorage = localStorage.getItem("searchChild");


button.addEventListener('click', function (e) {
  e.preventDefault();
  if (modal.classList.contains('modal-show'))
    modal.classList.remove('modal-show');
  else{
    modal.classList.add('modal-show');
    searchCheckin.focus();
    if (searchAdultStorage){
      searchAdult.value=searchAdultStorage;
    }
    if (searchChildStorage){
      searchChild.value=searchChildStorage;
    }
  }
});

form.addEventListener("submit", function (evt) {
  if(!searchCheckin.value || !searchCheckout.value ){
    evt.preventDefault();
    console.log("Нужно ввести даты поездки");
  }
  else if((!searchAdult.value || searchAdult.value=='0') && (!searchChild.value || searchChild.value=='0')){
    evt.preventDefault();
    console.log("Нужно ввести количество проживающих");
  }
  else{
    localStorage.setItem("searchAdult", searchAdult.value);
    localStorage.setItem("searchChild", searchChild.value);
  }
});