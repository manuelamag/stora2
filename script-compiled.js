
class Player {
  constructor(){
    this.playerContainer = document.querySelector('.player__container');
  }
  loadVideo(id, videos) {
    const video = videos.find(v => v.id === id);

    if (!video) {
      this.error('Videó er ekki til');
    } else {
      this.empty(this.playerContainer);
      
      this.setHeader(video.title);
      this.createVideo(video);
    }
  }

  request.onerror = () => {
    showHeading();
    const error = document.createElement('div');
    error.setAttribute('class', 'error');
    document.querySelector('main').appendChild(error);

    const errorP = document.createElement('p');
    const errorText = document.createTextNode('Get ekki hlaðið gögnunum');
    errorP.setAttribute('class', 'error');
    errorP.appendChild(errorText);
    error.appendChild(errorP);
  };
  request.send();

  play(e) {
    e.stopPropagation();

    const ifPaused = this.video.paused;
  }
  if (videosContainer) {
    videos.load();
  } else {
    player.load();
    player.controls();
  }
();
var writeHTML = (function() {
  var allData;
  var main = document.querySelector("main");
  var row;
})

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
  imageElement.appendChild(imgElement)

  const durationElement = el('div', 'video__duration', text(duration));
  imageElement.appendChild(imgElement);
  aElement.appendChild(imageElement);
//vantar hugsanlega eitthvað hingað
}

function lastPlayed(date) {
  var now = Date.now();
  var lastPlayed = now-date;
  var totalSeconds = lastPlayed / 1000;

  var hours = Math.floor(totalSeconds / 3600);
  var days = Math.floor(totalSeconds / (60 * 60 * 24));
  var weeks = Math.floor(totalSeconds / (60 * 60 * 24 * 7));
  var months = Math.floor(totalSeconds / (60 * 60 * 24 * 30));
  var years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
  if (years === 1) {
    return ("Fyrir" + years + "ári síðan");
  } else if (years > 1) {
    return ("Fyrir" + years +"árum síðan");
  } else if (monts === 1){
    return ("Fyrir" + months + "mánuði síðan");
  } else if (months > 1) {
    return ("Fyrir" + months +"mánuðum síðan");
  } else if (weeks === 1) {
    return ("Fyrir" + weeks + "viku síðan");
  } else if (weeks > 1) {
    return ("Fyrir" + weeks + "vikum síðan");
  } else if (days === 1) {
    return ("Fyrir" + "degi síðan");
  } else if (days > 1) {
    return ("Fyrir" + "dögum síðan");
  } else if (hours === 1 || hours > 1) {
    return ("Fyrir" + "klst. síðan");
  } else {
    return ("Engin dagsetning gefin");
  }
}

function showLoading(){
  var loading = document.createElement('div');
  var div = document.createElement('div');

  var img = document.createElement('img');
  img.setAttribute('src', 'loading.gif');
  div.appendChild(img);
  results.appendChild(div);
}

function stopLoading() {
  var loading = document.querySelector(".loading");
}

controls() {
  const controls = document.querySelector('.controls');

  const back = controls.querySelector('.controls__button--back');
  back.addEventListener('click', this.back.bind(this));

  const play = controls.querySelector('.controls__button--play');
  play.addEventListener('click', this.play.bind(this));
  this.playButton = play;

  const mute = controls.querySelector('.controls__button--mute');
  mute.addEventListener('click', this.mute.bind(this));
  this.muteButton = mute;

  const fullscreen = controls.querySelector('.controls__button--fullscreen');
  fullscreen.addEventListener('click', this.fullscreen.bind(this));

  const forward = controls.querySelector('.controls__button--forward');
  forward.addEventListener('click', this.forward.bind(this));
}
}

class Videos {
  constructor () {
    this.videoContainer = document.querySelector(.constructor);
  }

  LoadCategories(allVideos, categories) {
    this.empty(this.videosContainer);
    categories.foreEach((category) => {
      const viedos = allVideos.filter(video => categories)
      this.createCategory(category.title, videos);
    });
  }
  addOverlay(){
    const overlay = document.createElement('div');
    overlay.classList.add('player__overlay');
    this.playerContainer.appendChild(overlay);
    overlay.addEventListener('click', this.play.bind(this));
  }
  load (){
    const request = new XMLHttpRequest();
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
  }

  function pause(){
    const isPaused = //veit ekki hvað þá
    (isPaused){
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

  function forward(){
    if (this.video.paused){
      return;
    }

    const current = this.video.currentTime;
    const target = Math.max(current + 3, 0);
    this.video.currentTime=target;
  }

  function mute(){
    this.video.muted = !this.video.muted;
    this.muteButton.classList.toggle('controls__button--mute');
    this.muteButton.classList.toggle('controls__button--unmute');
  }

  function unmute(){
    this.video.unmuted = !this.video.unmuted;
    this.unmuteButton.classList.toggle('controls__button--unmute');
    this.unmuteButton.classList.toggle('controls__button--mute');
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
