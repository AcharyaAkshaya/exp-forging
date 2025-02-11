var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [],
    initialImages: ["wp0", "m0", "off0", "p0", "h0", "g0"],
    hideImages: ["p1", "hp1", "h1", "wp1"],
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "wp1",
        className: "wp1",
      },
    ],
    initialImages: ["p1", "h1"],
    hideImages: ["m2", "off2", "p2", "wp2"],
  },
  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "wp2",
        className: "wp2",
      },
    ],
    initialImages: ["m2", "off2", "p2"],
    hideImages: [
      "m3",
      "wp3",
      "fp3",
      "mp3",
      "on3",
      "off3",
      "left3",
      "right3",
      "p3",
    ],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "left3",
        className: "left3",
      },
      {
        id: "right3",
        className: "right3",
      },
      {
        id: "p3",
        className: "p3",
      },
    ],
    initialImages: ["m3", "wp3", "mp3", "off3"],
    hideImages: ["p4", "m4", "off4", "fp4", "wp4"],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "wp4",
        className: "wp4",
      },
    ],
    initialImages: ["p4", "m4", "off4"],
    hideImages: ["gr5", "wp5", "fp5"],
  },
  {
    simsubscreennum: 5,
    animImages: [
      {
        id: "gr5",
        className: "gr5",
      },
    ],
    initialImages: ["wp5"],
    hideImages: [],
  },
];

document.querySelector("#prevButton").addEventListener("click", navBack);
document.querySelector("#nextButton").addEventListener("click", navNext);
function animatearrow() {
  if (document.getElementById("arrow1").classList.contains("hide"))
    addToCanvas("arrow1");
  else removeFromCanvas("arrow1");
}

//animate arrow at position
function animateArrowATPosition(left, top, degg) {
  document.getElementById("arrow1").style =
    "position:absolute; left:" +
    left +
    "%; top: " +
    top +
    "%; width:5%;height: 5%; z-index: 10;";
  document.getElementById("arrow1").style.WebkitTransform =
    "rotate(" + degg + "deg)";
  // Code for IE9
  document.getElementById("arrow1").style.msTransform =
    "rotate(" + degg + "deg)";
  // Standard syntax
  document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
  addToCanvas("arrow1");
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  removeFromCanvas("arrow1");
}

function navNext() {
  for (temp = 0; temp <= 5; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum += 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

function navBack() {
  for (temp = 0; temp <= 5; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum -= 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

//magic function for animation in each canvas
function magic() {
  if (simsubscreennum == 0) {
    addToCanvas("nextButton");
    removeFromCanvas("prevButton");
    removeFromCanvas("reButton");
  }

  if (simsubscreennum == 1) {
    removeFromCanvas("reButton");
    removeFromCanvas("wp0");
    removeFromCanvas("h0");
    removeFromCanvas("m0");
    removeFromCanvas("g0");
    removeFromCanvas("off0");
    removeFromCanvas("p0");
    navDisplay();
    //Write code for canvas 1 animations
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(8, 46, -90); //specify the left top and deg of arrow
    document.getElementById("wp1").onclick = function () {
      document.getElementById("wp1").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("wp1").style.animation =
        "movePattern 2.2s ease-out forwards ";
      setTimeout(function () {
        removeFromCanvas("wp1");
        addToCanvas("hp1");
        setTimeout(function () {
          navDisplay();
        }, 550);
      }, 2950);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("wp1");
    removeFromCanvas("p1");
    removeFromCanvas("h1");
    removeFromCanvas("hp1");
    navDisplay();

    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(5, 60, -90); //specify the left top and deg of arrow
    document.getElementById("wp2").onclick = function () {
      document.getElementById("wp2").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("wp2").style.animation =
        "movePattern2 2.2s ease-out forwards ";
      setTimeout(function () {
        navDisplay();
      }, 2350);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("p2");
    removeFromCanvas("m2");
    removeFromCanvas("wp2");
    removeFromCanvas("off2");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(69, 48, -70); //specify the left top and deg of arrow
    document.getElementById("off3").onclick = function () {
      document.getElementById("off3").onclick = " ";
      myStopFunction();
      navHide();
      removeFromCanvas("off3");
      addToCanvas("on3");
      setTimeout(function () {
        document.getElementById("p3").style.animation =
          "movepress3 4.2s ease-out forwards ";
        document.getElementById("left3").style.animation =
          "moveleft 4.2s ease-out forwards ";
        document.getElementById("right3").style.animation =
          "moveright 4.2s ease-out forwards ";
        setTimeout(function () {
          removeFromCanvas("wp3");
          addToCanvas("fp3");
          setTimeout(function () {
            navDisplay();
          }, 2100);
        }, 2200);
      }, 300);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("p3");
    removeFromCanvas("m3");
    removeFromCanvas("wp3");
    removeFromCanvas("off3");
    removeFromCanvas("on3");
    removeFromCanvas("fp3");
    removeFromCanvas("left3");
    removeFromCanvas("right3");
    removeFromCanvas("mp3");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(51.5, 52, -90); //specify the left top and deg of arrow
    document.getElementById("wp4").onclick = function () {
      document.getElementById("wp4").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("wp4").style.animation =
        "movePattern4 2.5s ease-out forwards ";
      setTimeout(function () {
        removeFromCanvas("wp4");
        addToCanvas("fp4");
        setTimeout(function () {
          navDisplay();
        }, 550);
      }, 3050);
    };
  } else if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("p4");
    removeFromCanvas("m4");
    removeFromCanvas("wp4");
    removeFromCanvas("off4");
    removeFromCanvas("fp4");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(62, 41, -90); //specify the left top and deg of arrow
    document.getElementById("gr5").onclick = function () {
      document.getElementById("gr5").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("gr5").style.animation =
        "movegr 4.8s ease-out forwards";

      setTimeout(function () {
        removeFromCanvas("wp5");
        addToCanvas("fp5");
        setTimeout(function () {
          navDisplay();
        }, 2250);
      }, 2450);
    };
  }
}

function refresh() {
  myStopFunction();
  clearInterval(myInt);
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");

  if (simsubscreennum == 0) {
    removeFromCanvas("prevButton");
    addToCanvas("nextButton");
    if (visibleImagesId[simsubscreennum].initialImages.length > 0) {
      visibleImagesId[simsubscreennum].initialImages.forEach(function (
        id,
        index
      ) {
        addToCanvas(id);
      });
    }
    if (visibleImagesId[simsubscreennum].hideImages.length > 0) {
      visibleImagesId[simsubscreennum].hideImages.forEach(function (id, index) {
        removeFromCanvas(id);
      });
    }
  } else {
    // if(visibleImagesId[simsubscreennum-1].initialImages.length>0) {
    visibleImagesId[simsubscreennum].animImages.forEach(function (img, index) {
      document.getElementById(img.id).style = " ";
      document.getElementById(img.id).classList.add(img.className);
      if (img.hidden) {
        removeFromCanvas(img.id);
      } else addToCanvas(img.id);
    });
    // }
    if (visibleImagesId[simsubscreennum].initialImages.length > 0) {
      visibleImagesId[simsubscreennum].initialImages.forEach(function (
        id,
        index
      ) {
        addToCanvas(id);
      });
    }
    if (visibleImagesId[simsubscreennum].hideImages.length > 0) {
      visibleImagesId[simsubscreennum].hideImages.forEach(function (id, index) {
        removeFromCanvas(id);
      });
    }
  }
}

function removeFromCanvas(id) {
  const canvasScreen = id.slice(0, 6);
  console.log(canvasScreen);
  if (canvasScreen == "canvas") {
    document.getElementById(id).classList.remove("display-flex");
  } else {
    document.getElementById(id).classList.remove("display-block");
  }
  document.getElementById(id).classList.add("hide");
}

function addToCanvas(id) {
  const canvasScreen = id.slice(0, 6);
  document.getElementById(id).classList.remove("hide");
  if (canvasScreen == "canvas") {
    document.getElementById(id).classList.add("display-flex");
  } else {
    document.getElementById(id).classList.add("display-block");
  }
}

function navDisplay() {
  addToCanvas("prevButton");
  if (simsubscreennum === 5) {
    addToCanvas("reButton");
  } else addToCanvas("nextButton");
}
function navHide() {
  removeFromCanvas("reButton");
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");
}
