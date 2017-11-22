window.onload = function() {
    var video = document.getElementById('video');
    // þegar klikkað þá binda
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var rewind = document.getElementById('rewind');
    var forward = document.getElementById('forward');
    var mute = document.getElementById('mute');
    var unmute = document.getElementById('unmute');
    var fullscreen = document.getElementById('fullscreen');
}

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

// get ég notað þetta fall
function showData(data){
  var results = document.querySelector('.results');
  clear(results);
  var color = document.createElement('p');
  color.appendChild(document.createTextNode('Litur: '+data.color));
  results.appendChild(color);
  var type = document.createElement('p');
  type.appendChild(document.createTextNode('Gerð: '+data.type));
  results.appendChild(type);
  var nextCheck = document.createElement('p');
  nextCheck.appendChild(document.createTextNode('Næsta skoðun: '+data.nextCheck));
  results.appendChild(nextCheck);
  var status = document.createElement('p');
  status.appendChild(document.createTextNode('Staða: '+data.status));
  results.appendChild(status);
}

document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos(); //index síðan
  const player = new Player(); //videos síðan

  if(document.querySelector('.videos')){
    videos.load();
  } else {
    player.load();
  }
  });
