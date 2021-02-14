export default function initTradeIcon(){
   let favorite = document.querySelector('.favorite');
   let favoriteIcon = document.querySelector('.favorite i');

   favorite.addEventListener('click', function(){

   if(!favorite.classList.contains('iconFavorited')){
      favorite.classList.add('iconFavorited');
      favoriteIcon.setAttribute('class', 'fas fa-star');
   } else {
      favorite.classList.remove('iconFavorited');
      favoriteIcon.setAttribute('class', 'far fa-star');
   }
});
}