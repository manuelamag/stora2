

function load (){
  this.Controls();
  this.id = window.location.search.substring(4);
  this.playVideo();
}

function play(){
  this.buttons.play.setAttribute('class', 'button__hidden');
  this.buttons.pause.setAttribute('class', 'button');
  this.video__container.querySelector().setAttribute('class', 'video');
  this.video.play();
}

function pause(){
  this.buttons.play.setAttribute('class', 'button');
  this.buttons.pause.setAttribute('class', 'button__hidden');
  this.video__container.querySelector().setAttribute('class', 'video' );
  this.video.pause();
}

function rewind(){
  this.video.currentTime -= 2;
}

function forward(){
  this.video.currentTime += 2;
}

function mute(){
  this.buttons.mute.setAttribute('class', 'button__hidden');
  this.buttons.unmute.setAttribute('class', 'button');
  this.video.muted = true;
}

function unmute(){
  this.buttons.mute.setAttribute('class', 'button__hidden');
  this.buttons.unmute.setAttribute('class', 'button');
  this.video.muted = false;

}

function fullscreen(){
  this.launchFullScreen(this.video);
  //launchFullScreen(document.documentElement); // the whole page
  //launchFullScreen(document.getElementById("videoElement")); // any individual element

}

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

playVideo(){
  this.video = this.video.querySelector('video');
  this.src = 'video/bunny.mp4';
  this.video.setAttribute('src', this.videosrc);
}

Controls(){

}
