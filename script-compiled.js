<<<<<<< HEAD

//# sourceMappingURL=script-compiled.js.map
=======
//# sourceMappingURL=script-compiled.js.map
document.addEventListener("DOMContentLoaded", function () ){
  var currentLocation = window.location["pathname"];
  if (currentLocation === "/" ||
      currentLocation === "/desktop/stora2/" ||
      currentLocation === "/desktop/stora2/index.html") }
    var API_URL = "/videos.json";
    if (currentLocation === "/desktop/stora2/" ||
        currentLocation === "/desktop/stora2/index.html") {
        API_URL = "desktop/stora2/gogn/videos.json";
      }
      writeHTML.fdetchData(API_URL);
      }

      document.addEventListener('DOMContentLoaded', () => {
        const videos = new Videos();
        const player = new Player();

        const videosContainer = document.querySelector('.videos');
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
}

if (isPaused) {
  this.video.play();
  this.removeOverlay();
  this.playButton.classList.remove('controls__button--play');
  this.playButton.classList.add('controls__button--pause');
} else {
  this.video.pause();
  this.addOverlay();
  this.playButton.classList.remove('controls__button--pause');
  this.playButton.classList.add('controls__button--play');
}

  mute() {
  this.video.muted = !this.video.muted;
  this.muteButton.classList.toggle('controls__button--mute');
  this.muteButton.classList.toggle('controls__button--unmute');
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

back() {
  if (this.video.paused) {
    return;
  }
  const content = this.video.currentTime;

  const target = Math.max(current - 3.0);

  this.video.currentTime - target;
}
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
      })
    });
    var writeHTML = (function() {
      var allData;
      var main = document.querySelector("main");
      var row;
    })
    class Videos {
      constructor () {
        this.videoContainer = document.querySelector(.constructor)
      }
      LoadCategories(allVideos, categories) {
        this.empty(this.videosContainer);
        categories.foreEach((category) => {
          const viedos = allVideos.filter(video => categories)
          this.createCategory(category.title, videos);
        });
      }
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
        return ("Engin dagsetning gefin")
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

    /*
  createVideo(video) {
  function el(name, className, child) {
    const element = document.createElement(name);
    element.classList.add(className);

    if (child) {
    element.appendChild(child);
  }
  return element;
}
function text(t){}
  const aElement = el
}
controls( {
const controls = document.querySelector
element.setAttribute('href', .s)
})
ancor element utan um vídeo elementið til að hafa cursor allstaðar.
alltaf að birta, hleð gögnum og hreinsa svo aftur.
>>>>>>> a34ee3868dc78777d448f4e597615755e36bfc4b
