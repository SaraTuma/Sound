export default function initPlayMusic(){
   let changeStatus = document.querySelector('.name p');

   function playButton(){
      let play = document.querySelector('.play');
      let playerAudio = document.querySelector('.player audio');

      play.addEventListener('click', function(){
         playerAudio.play();
         changeStatus.innerHTML="PLAYING NOW...";
      })
   }

   playButton();

   function pauseButton(){
      let pause = document.querySelector('.pause')
      let pauseAudio = document.querySelector('.player audio')

      pause.addEventListener('click', function(){
         pauseAudio.pause();         
         changeStatus.innerHTML="PAUSED";
      })
   }

   pauseButton();

}