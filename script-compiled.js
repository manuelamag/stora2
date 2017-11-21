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
    });
    var writeHTML = (function() {
      var allData;
      var main = document.querySelector("main");
      var row;
    })

<<<<<<< HEAD
//# sourceMappingURL=script-compiled.js.map
=======
    function lastPlayed(date) {
      var now = Date.now();
      var lastPlayed = now-date;
      var totalSeconds = lastPlayed / 1000;

      var hours = Math.floor(totalSeconds / 3600);
      var days = Math.floor(totalSeconds / (60 * 60 * 24));
      var weeks = Math.floor(totalSeconds /(60 * 60 * 24 * 7));
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
