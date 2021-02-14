export default function initSelectMusic(){
   const list = document.querySelectorAll('.music-list li');  
   let musicName = document.querySelector('.music-name h1');   
   let musicDescription = document.querySelector('.music-name p');
   let changeStatus = document.querySelector('.name p');
   let favorite = document.querySelector('.favorite');
   let favoriteIcon = document.querySelector('.favorite i');
   

   // ESCOLHA DAS MUSICAS
   list.forEach((item) => {
      item.addEventListener('click', function(){

         // ATIVA OS ESTILOS NA LISTA DE MUSICAS
         let listActived = document.querySelector('.music-list .ativo');

         if(listActived.classList.contains('ativo')){
            listActived.classList.remove('ativo');
         }         
         item.classList.add('ativo');

         // INSERE O NOME DA MÚSICA NA PAGINA INICIAL
         let name = item.querySelector('.music p');
         let description = item.querySelector('.music span');         
         
         musicName.innerHTML=name.innerText;
         musicDescription.innerHTML=description.innerText;
         changeStatus.innerHTML="PLAYING NOW...";

         favorite.classList.remove('iconFavorited');
         favoriteIcon.setAttribute('class', 'far fa-star');
         
         // LISTA DE MUSICAS         
         let player = document.querySelector('.player audio');
         
         switch (item.value) {
            case 1: 
             player.setAttribute('src', 'musicas/musica1.mp3');
            break;

            case 2: 
               player.setAttribute('src', 'musicas/musica2.mp3');
            break;

            case 3: 
               player.setAttribute('src', 'musicas/musica3.mp3');
            break;

            case 4: 
               player.setAttribute('src', 'musicas/musica4.mp3');
            break;

            case 5: 
               player.setAttribute('src', 'musicas/musica5.mp3');
            break;

            case 6: 
               player.setAttribute('src', 'musicas/musica6.mp3');
            break;

            case 7: 
               player.setAttribute('src', 'musicas/musica7.mp3');
            break;
         
            default:
               break;
         }

      });
   });
}