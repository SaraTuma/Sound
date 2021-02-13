export default function initPlayMusic(){
   function playButton(){
      let play = document.querySelector('.play')
      let playerAudio = document.querySelector('.player audio')

      play.addEventListener('click', function(){
         playerAudio.play();
      })
   }

   playButton();

   function pauseButton(){
      let pause = document.querySelector('.pause')
      let pauseAudio = document.querySelector('.player audio')

      pause.addEventListener('click', function(){
         pauseAudio.pause();
      })
   }

   pauseButton();

}