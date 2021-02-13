export default function initTradeIcon(){
   let favorite = document.querySelector('.favorite');
   let favoriteIcon = document.querySelector('.favorite i');

  favorite.addEventListener('click', function(){
      
      if(favorite.classList.contains('ativo')){
         favoriteIcon.setAttribute('class', 'fas fa-star');
      }

  });
}