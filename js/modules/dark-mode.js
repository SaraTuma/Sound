export default function initDarkMode(){   
  let color = document.querySelector(':root');
  let activeDark = document.querySelector('.dark-theme');
  let activeDarkIcon = document.querySelector('.dark-theme i');

  activeDark.addEventListener('click', function(){
      activeDark.classList.toggle('ativaDarkTheme');

      if(activeDark.classList.contains('ativaDarkTheme')){
         color.style="--gradient-colors: #3a3a3a, #111111fd; --cor-fundo: #250bee00; --cor-fundo-app: rgba(31, 31, 31, 0.945); --cor-sombra-1: #464646; --cor-sombra-2: #111111; --cor-sombra-3: #222222; --cor-sombra-4: #000000; --cor-primary: #ffffff; --cor-secondary: #ff4800; --cor-terciary: #ff7300;";

         activeDarkIcon.className="fas fa-sun";

      } else {
         color.style="--gradient-colors: #f0f2f5, #eaedf1; --cor-fundo: #ffffff; --cor-fundo-app: #e9eff7ea; --cor-sombra-1: #ffffff; --cor-sombra-2: rgb(203, 212, 228); --cor-sombra-3: #1e3a55; --cor-sombra-4: #0e2349; --cor-primary: #f8f8f8; --cor-secondary: #5e728d; --cor-terciary: #4f8cff;";

         activeDarkIcon.className="fas fa-moon";
      }

  });
}
