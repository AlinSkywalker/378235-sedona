var modal = document.querySelector('.modal');
if(modal) modal.classList.add('hidden');
var button = document.querySelector('.hotel-search-button');
button.addEventListener('click', function(e) {
        e.preventDefault();
        var hiddenModal=document.querySelector('.modal.hidden');
        if(hiddenModal){
          
          modal.classList.add('modal-show');
          modal.classList.remove('hidden');
        }
        else{
          modal.classList.add('hidden');
          modal.classList.remove('modal-show');
        }
    });

       

