export default function initSelectMusic(){
   const list = document.querySelectorAll('.music-list li');  

   // FUNÇÃO DO BOTÃO DE PASSAR A MUSICA
   list.forEach((item) => {
      item.addEventListener('click', function(){

         let listActived = document.querySelector('.music-list .ativo');

         if(listActived.classList.contains('ativo')){
            listActived.classList.remove('ativo');
         }

         item.classList.add('ativo');

      });
   });
}