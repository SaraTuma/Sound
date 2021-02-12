export default function initMenu(){
   const search = document.querySelector('.search');
   let iconToClose = document.querySelector('.menuIcon i');   

   // FUNÇÃO PRA ABRIR O MEU
   function openMenu(){
      const menuIcon = document.querySelector('.menuIcon');     

      menuIcon.addEventListener('click', function(){
         search.classList.toggle('ativo');
         changeIcon();
        
      });
   }

   openMenu();

   // FUNÇÃO QUE MUDA O ICONE PARA X
   function changeIcon(){
      iconToClose.setAttribute('class', 'fas fa-times');

      if(!search.classList.contains('ativo')){
         iconToClose.setAttribute('class', 'fas fa-bars');
      }
   }   

   // FUNÇÃO DE FECHAR O MENU AO CLICAR NO ICONE OU NA LISTA DE ITENS.
   function closeMenu(){
      let musicList = document.querySelectorAll('.music-list li');

      function exitMenu(){
         search.classList.remove('ativo');
         changeIcon();
      }

      musicList.forEach((item) => {
         item.addEventListener('click', exitMenu);
      });
   }

   closeMenu();
}