// videoLibrary is an object consisting of position-complexity option pairs (e.g., closed guard (bottom) - fundamental, closed guard (bottom) - intermediate, etc.) as properties. Each pair corresponds to a set of videos which can be added to in order to grow the library.

var videoLibrary = {
  closedGuardBottomFundamental: ["https://www.youtube.com/embed/mVkKOPNGvjA", "https://www.youtube.com/embed/YKVpwu823Ss", "https://www.youtube.com/embed/EDnr6NYImck", "https://www.youtube.com/embed/ghJHzjgu-HA"],
  closedGuardBottomIntermediate: ["https://www.youtube.com/embed/UDk_sVb7InI", "https://www.youtube.com/embed/SZmnh7yZlOw"],
  closedGuardBottomAdvanced: ["https://www.youtube.com/embed/MLY349ioy9o"],
  halfGuardBottomFundamental: ["https://www.youtube.com/embed/l12Rm-4yvOA", "https://www.youtube.com/embed/pOrAwh9iL34", "https://www.youtube.com/embed/f2x1oi2NW5U"],
  halfGuardBottomIntermediate: ["https://www.youtube.com/embed/ZPrmnK1cWjI", "https://www.youtube.com/embed/ilcj0_HcArU"],
  halfGuardBottomAdvanced: ["https://www.youtube.com/embed/5dhNsXV90pk"],
  sideControlBottomFundamental: ["https://www.youtube.com/embed/yXlXqgU2eVg"],
  sideControlBottomIntermediate: ["https://www.youtube.com/embed/V7vmzcc3ldA"],
  sideControlBottomAdvanced: ["https://www.youtube.com/embed/ArPNO31bHyA"],
  kneeOnBellyBottomFundamental: ["https://www.youtube.com/embed/o8P1auuxnsE"],
  kneeOnBellyBottomIntermediate: ["https://www.youtube.com/embed/uwtS5GipbRA", "https://www.youtube.com/embed/At5h90jKiu8"],
  kneeOnBellyBottomAdvanced: ["https://www.youtube.com/embed/kejmua3ITiE"],
  mountBottomFundamental: ["https://www.youtube.com/embed/H5AIPuPiib4", "https://www.youtube.com/embed/q2OAJF__P2w"],
  mountBottomIntermediate: ["https://www.youtube.com/embed/pw_9ZZLkkNI", "https://www.youtube.com/embed/_wTIBBK8qJo"],
  mountBottomAdvanced: ["https://www.youtube.com/embed/mePuZ6nlKHw"],
  backMountYourBackTakenFundamental: ["https://www.youtube.com/embed/UtkxKvdxiNY"],
  backMountYourBackTakenIntermediate: ["https://www.youtube.com/embed/x91GF7MY5F4", "https://www.youtube.com/embed/rHr_Xge5eIw"],
  backMountYourBackTakenAdvanced: ["https://www.youtube.com/embed/NF78gz5jCr4"],
  closedGuardTopFundamental: ["https://www.youtube.com/embed/Ny9qIpLvtnc"],
  closedGuardTopIntermediate: ["https://www.youtube.com/embed/6tJxhTF1-_w", "https://www.youtube.com/embed/5oNksMkPJoU"],
  closedGuardTopAdvanced: ["https://www.youtube.com/embed/XzCcw9J4aLc"],
  halfGuardTopFundamental: ["https://www.youtube.com/embed/SjN6ehT3qEs"],
  halfGuardTopIntermediate: ["https://www.youtube.com/embed/mJdyMFAuDuk"],
  halfGuardTopAdvanced: ["https://www.youtube.com/embed/V4g7-iBbdaM"],
  sideControlTopFundamental: ["https://www.youtube.com/embed/iZAs-ZrjsdQ", "https://www.youtube.com/embed/5dRzDEnFTqY"],
  sideControlTopIntermediate: ["https://www.youtube.com/embed/D9TghApIj0M", "https://www.youtube.com/embed/a1tbiqxaYAo"],
  sideControlTopAdvanced: ["https://www.youtube.com/embed/u5uiW1ln-2A"],
  kneeOnBellyTopFundamental: ["https://www.youtube.com/embed/iJsixj9zNbY"],
  kneeOnBellyTopIntermediate: ["https://www.youtube.com/embed/3p-6MUsIy90", "https://www.youtube.com/embed/04Km6hyIP44"],
  kneeOnBellyTopAdvanced: ["https://www.youtube.com/embed/a9-VNMVN9kg"],
  mountTopFundamental: ["https://www.youtube.com/embed/ShEow7GsUbU"],
  mountTopIntermediate: ["https://www.youtube.com/embed/hgmFq49JvsE"],
  mountTopAdvanced: ["https://www.youtube.com/embed/gc5YRdv-wSw"],
  backMountOpponentsBackTakenFundamental: ["https://www.youtube.com/embed/EaTbdkXabaY"],
  backMountOpponentsBackTakenIntermediate: ["https://www.youtube.com/embed/_sH9ZYN84cc", "https://www.youtube.com/embed/pLxI_FQtYP4", "https://www.youtube.com/embed/aGbIknf1Di8", "https://www.youtube.com/embed/hA8gVsyu_FU"],
  backMountOpponentsBackTakenAdvanced: ["https://www.youtube.com/embed/B3eRddYiHH4", "https://www.youtube.com/embed/ifx3fKFAWRY"]
}

// Grab both dropdown menus and set their default values to blank.
var positionDropdown = document.getElementById("positionDropdown");
positionDropdown.selectedIndex = -1;
var complexityDropdown = document.getElementById("complexityDropdown");
complexityDropdown.selectedIndex = -1;
                                             
// Return a random video based on user choice of position-complexity options.
function returnVideo() {
    var positionChoice = positionDropdown.value;
    var complexityChoice = complexityDropdown.value;
    
    if (positionChoice === "ClosedGuardBottom" && complexityChoice === "fundamental") {
      var Url = videoLibrary.closedGuardBottomFundamental[Math.floor(Math.random()*videoLibrary.closedGuardBottomFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "ClosedGuardBottom" && complexityChoice === "intermediate") {
      var Url = videoLibrary.closedGuardBottomIntermediate[Math.floor(Math.random()*videoLibrary.closedGuardBottomIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "ClosedGuardBottom" && complexityChoice === "advanced") {
      var Url = videoLibrary.closedGuardBottomAdvanced[Math.floor(Math.random()*videoLibrary.closedGuardBottomAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardBottom" && complexityChoice === "fundamental") {
      var Url = videoLibrary.halfGuardBottomFundamental[Math.floor(Math.random()*videoLibrary.halfGuardBottomFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardBottom" && complexityChoice === "intermediate") {
      var Url = videoLibrary.halfGuardBottomIntermediate[Math.floor(Math.random()*videoLibrary.halfGuardBottomIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardBottom" && complexityChoice === "advanced") {
      var Url = videoLibrary.halfGuardBottomAdvanced[Math.floor(Math.random()*videoLibrary.halfGuardBottomAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlBottom" && complexityChoice === "fundamental") {
      var Url = videoLibrary.sideControlBottomFundamental[Math.floor(Math.random()*videoLibrary.sideControlBottomFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlBottom" && complexityChoice === "intermediate") {
      var Url = videoLibrary.sideControlBottomIntermediate[Math.floor(Math.random()*videoLibrary.sideControlBottomIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlBottom" && complexityChoice === "advanced") {
      var Url = videoLibrary.sideControlBottomAdvanced[Math.floor(Math.random()*videoLibrary.sideControlBottomAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "KneeOnBellyBottom" && complexityChoice === "fundamental") {
      var Url = videoLibrary.kneeOnBellyBottomFundamental[Math.floor(Math.random()*videoLibrary.kneeOnBellyBottomFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "KneeOnBellyBottom" && complexityChoice === "intermediate") {
      var Url = videoLibrary.kneeOnBellyBottomIntermediate[Math.floor(Math.random()*videoLibrary.kneeOnBellyBottomIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";    
    } else if (positionChoice === "KneeOnBellyBottom" && complexityChoice === "advanced") {
      var Url = videoLibrary.kneeOnBellyBottomAdvanced[Math.floor(Math.random()*videoLibrary.kneeOnBellyBottomAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountBottom" && complexityChoice === "fundamental") {
      var Url = videoLibrary.mountBottomFundamental[Math.floor(Math.random()*videoLibrary.mountBottomFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountBottom" && complexityChoice === "intermediate") {
      var Url = videoLibrary.mountBottomIntermediate[Math.floor(Math.random()*videoLibrary.mountBottomIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountBottom" && complexityChoice === "advanced") {
      var Url = videoLibrary.mountBottomAdvanced[Math.floor(Math.random()*videoLibrary.mountBottomAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountYourBackTaken" && complexityChoice === "fundamental") {
      var Url = videoLibrary.backMountYourBackTakenFundamental[Math.floor(Math.random()*videoLibrary.backMountYourBackTakenFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountYourBackTaken" && complexityChoice === "intermediate") {
      var Url = videoLibrary.backMountYourBackTakenIntermediate[Math.floor(Math.random()*videoLibrary.backMountYourBackTakenIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountYourBackTaken" && complexityChoice === "advanced") {
      var Url = videoLibrary.backMountYourBackTakenAdvanced[Math.floor(Math.random()*videoLibrary.backMountYourBackTakenAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "ClosedGuardTop" && complexityChoice === "fundamental") {
      var Url = videoLibrary.closedGuardTopFundamental[Math.floor(Math.random()*videoLibrary.closedGuardTopFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";      
    } else if (positionChoice === "ClosedGuardTop" && complexityChoice === "intermediate") {
      var Url = videoLibrary.closedGuardTopIntermediate[Math.floor(Math.random()*videoLibrary.closedGuardTopIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "ClosedGuardTop" && complexityChoice === "advanced") {
      var Url = videoLibrary.closedGuardTopAdvanced[Math.floor(Math.random()*videoLibrary.closedGuardTopAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardTop" && complexityChoice === "fundamental") {
      var Url = videoLibrary.halfGuardTopFundamental[Math.floor(Math.random()*videoLibrary.halfGuardTopFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardTop" && complexityChoice === "intermediate") {
      var Url = videoLibrary.halfGuardTopIntermediate[Math.floor(Math.random()*videoLibrary.halfGuardTopIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "HalfGuardTop" && complexityChoice === "advanced") {
      var Url = videoLibrary.halfGuardTopAdvanced[Math.floor(Math.random()*videoLibrary.halfGuardTopAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlTop" && complexityChoice === "fundamental") {
      var Url = videoLibrary.sideControlTopFundamental[Math.floor(Math.random()*videoLibrary.sideControlTopFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlTop" && complexityChoice === "intermediate") {
      var Url = videoLibrary.sideControlTopIntermediate[Math.floor(Math.random()*videoLibrary.sideControlTopIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "SideControlTop" && complexityChoice === "advanced") {
      var Url = videoLibrary.sideControlTopAdvanced[Math.floor(Math.random()*videoLibrary.sideControlTopAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "KneeOnBellyTop" && complexityChoice === "fundamental") {
      var Url = videoLibrary.kneeOnBellyTopFundamental[Math.floor(Math.random()*videoLibrary.kneeOnBellyTopFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "KneeOnBellyTop" && complexityChoice === "intermediate") {
      var Url = videoLibrary.kneeOnBellyTopIntermediate[Math.floor(Math.random()*videoLibrary.kneeOnBellyTopIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "KneeOnBellyTop" && complexityChoice === "advanced") {
      var Url = videoLibrary.kneeOnBellyTopAdvanced[Math.floor(Math.random()*videoLibrary.kneeOnBellyTopAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountTop" && complexityChoice === "fundamental") {
      var Url = videoLibrary.mountTopFundamental[Math.floor(Math.random()*videoLibrary.mountTopFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountTop" && complexityChoice === "intermediate") {
      var Url = videoLibrary.mountTopIntermediate[Math.floor(Math.random()*videoLibrary.mountTopIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "MountTop" && complexityChoice === "advanced") {
      var Url = videoLibrary.mountTopAdvanced[Math.floor(Math.random()*videoLibrary.mountTopAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountOpponentsBackTaken" && complexityChoice === "fundamental") {
      var Url = videoLibrary.backMountOpponentsBackTakenFundamental[Math.floor(Math.random()*videoLibrary.backMountOpponentsBackTakenFundamental.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountOpponentsBackTaken" && complexityChoice === "intermediate") {
      var Url = videoLibrary.backMountOpponentsBackTakenIntermediate[Math.floor(Math.random()*videoLibrary.backMountOpponentsBackTakenIntermediate.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
    } else if (positionChoice === "BackMountOpponentsBackTaken" && complexityChoice === "advanced") {
      var Url = videoLibrary.backMountOpponentsBackTakenAdvanced[Math.floor(Math.random()*videoLibrary.backMountOpponentsBackTakenAdvanced.length)];
      document.getElementById("player").src = Url;
      document.getElementById("player").width = "640";
      document.getElementById("player").height ="360";
  }
}