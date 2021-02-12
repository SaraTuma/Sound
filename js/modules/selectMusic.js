export default function selectMusic(){
   const list = document.querySelectorAll('.music-list li');
   const avancar = document.querySelector('.proxima i');

   function nextMusic(){
      list.forEach((item,index) => {

         console.log(index);
            

        
              
      });      
   };

   avancar.addEventListener('click', nextMusic);
}