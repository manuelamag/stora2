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

class Player {
  constructor(){
    this.playerContainer = document.querySelector('.video__container')
  }

  loadVideo(id, videos){
    const video = video.find(v.id===id);

    if (!video){
    this.error('Video er ekki til');
  } else {
    this.empty(this.playerContainer);
    this.setHeader(video.title);
    this.createVideo(video);
  }
}
addOverlay(){
  const overlay = document.createElement('div');
  overlay.classList.add('player__overlay');
  this.playerContainer.appendChild(overlay);
  overlay.addEventListener('click', this.play.bind(this));

  /// vantar mögulega hér inn
}


load (){
  const request = newXMLHttpRequest();
  const qs = new URLSearchParams(window.location.search);
  const id = parseInt(qs.get('id'), 10);
  request.open('GET', URL, true);
  request.onload = () =>{
    if (request.status >= 200 && request.status < 400){
      const data = JSON.parse(request.response);
      this.loadVideo(id, data.videos);
    }
      else{
        this.error ('Gat ekki hlaðið vídeoi')
      }
    };

    request.onerror = () => {
    //hér vantar eitthvað
  }
  //this.Controls();
  //this.id = window.location.search.substring(4);
  //this.playVideo();
}
function play(){
  this.buttons.play.setAttribute('class', 'button__hidden');
  this.buttons.pause.setAttribute('class', 'button');
  this.video__container.querySelector().setAttribute('class', 'video');
  this.video.play();
}

function pause(){
  //this.buttons.play.setAttribute('class', 'button');
  //this.buttons.pause.setAttribute('class', 'button__hidden');
  //this.video__container.querySelector().setAttribute('class', 'video' );
  //this.video.pause();
  const (isPaused){
    this.video.play();
    this.removeOverlay();
    this.playButton.classList.remove('controls__button--play');
    this.playButton.classList.add('controls__button--pause');
  } else {
    this.video.pause();
    this.addOverlay();
    this.playButton.classList.remove('.controls__button--pause');
    this.playButton.classList.remove('.controls__button--play');
  }
}

  rewind(){
    if (this.video.paused){
      return;
    }
    const current = this.video.currentTime;
    const target = Math.max(current - 3, 0);
    this.video.currentTime=target;
  }

  forward(){
    this.video.currentTime += 3;
  }

createVideo(video){
const url = "/video.html?id=$(video.id)";
const duration = this.formatDuration(video.duration);
const title = this.formatTitle(video.title);
const age = this.formatAge(video.created);



function el (name, className, child){
  const element = document.createElement (name);
  element.classList.add(className);

  if (child){
    element.appendChild(child);
  }
  return element;
}

function text(t){
  return document.createTextNode(t);
}

const element = el('div', 'videos__cal');

const aElement = el('a', 'video');
aElement.setAttribute('href', url);

const imageElement = el('div', 'video__image');
const imgElement = el('img', 'video__img');
imgElement.setAttribute('src', video.poster);
imageElement.appendChild(imgElement);

const durationElement = el('div', 'video__duration', text(duration));
imageElement.appendChild(imgElement);
aElement.appendChild(imageElement);

//vantar hugsanlega eitthvað hingað
}
// veit ekki hvað þetta fall ætti að heita

const play = controls.querySelector('.controls__button--play');
play.addEventListener('click', this.play.bind(this));

const pause = controls.querySelector('.controls__button--pause');
pause.addEventListener('click', this.pause.bind(this));


const forward = controls.querySelector('.controls__button--forward');
forward.addEventListener('click', this.forward.bind(this));

const rewind = controls.querySelector('.controls__button--rewind');
forward.addEventListener('click', this.rewind.bind(this));
//this.rewindButton = rewind;

const mute = controls.querySelector('.controls__button--mute');
forward.addEventListener('click', this.mute.bind(this));
this.muteButton = mute;

const fullscreen = controls.querySelector('.controls__button--fullscreen');
forward.addEventListener('click', this.fullscreen.bind(this));

const forward = controls.querySelector('.controls__button--forward');
forward.addEventListener('click', this.forward.bind(this));

function mute(){
  this.video.muted = !this.video.muted;
  this.muteButton.classList.toggle('controls__button--mute');
  this.muteButton.classList.toggle('controls__button--unmute')

  //this.mute.setAttribute('class', 'button__hidden');
  //this.buttons.unmute.setAttribute('class', 'button');
  //this.video.muted = true;
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


document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos(); //index síðan
  const player = new Player(); //videos síðan

  if(document.querySelector('.videos')){
    videos.load();
  } else {
    player.load();
  }
  });
