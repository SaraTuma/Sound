export default function initSelectMusic(){
   const list = document.querySelectorAll('.music-list li');
   let contador = 0;

   // FUNÇÃO DO BOTÃO DE PASSAR A MUSICA
   function proxima(){      
      const avancar = document.querySelector('.proxima i');  

      function proxMusic(){
         let listActivated = document.querySelector('.ativo');

         if(contador === list.length){

            // NAO FAÇA NADA
            
         } else {
            for(let i = 0; i < 1; i++){
               list[contador++].classList.add('ativo');
            }
            listActivated.classList.remove('ativo');  
         }         
      };

      avancar.addEventListener('click', proxMusic);
   }

   proxima();

   // FUNÇÃO DO BOTÃO DE VOLTAR A MUSICA
   function anterior(){    
      const voltar = document.querySelector('.anterior i');

      function musicAnterior(){
        

         
        


      };

      voltar.addEventListener('click', musicAnterior);
   }

   anterior();
}