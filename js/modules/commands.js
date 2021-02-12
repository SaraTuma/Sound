export default function initCommands(){
   const commandIcon = document.querySelectorAll('.commands div');

   commandIcon.forEach((item) => {
      item.addEventListener('click', function(){

         const iconActived = document.querySelector('.ativo');

         if(iconActived.classList.contains('ativo')){
            iconActived.classList.remove('ativo');
         }

         item.classList.add('ativo');      

      });
   })
}