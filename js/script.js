var titleText = "QUERYSORCERY";
var i = 0;
var speed = 150;
var id = null;
var bgmon = false;
var gillup = false;
var gilldead = false;
var cooldown = true;
var suncoast = "HELLO THERE. I AM SUNCOAST, THE GUIDE OF THE ASTRALNET. WELCOME TO CYBEROCCULTISM. I DO HOPE YOU ENJOY YOUR STAY. YOU ARE ALREADY LOOKING BENEATH THE SURFACE OF THE THINGS WITHIN YOUR WORLD, I SEE... THAT IS A TRAIT THAT WILL TAKE YOU FAR.";
var pinkCheck = false;
var bartonce = false;
var sfxon = false;
var bgon = true;
var currentbg;
var currentbgtype;
var optionstoggle = false;
var scanlineson = false;
var lumon = true;
var eastereggon = false;
const input = document.querySelector('input');
var loadedall = false;
input.addEventListener('input', updateValue);

console.log(suncoast);

//adding new spirit quick reference guide so i don't fuck up a step when i'm tripping balls:
//add spirit to typeWriter() function
//then to summonAll() and summonAll2()
//then to pink() and unPink()


function start(){
 document.title = "A NEW REALITY IS LOADING..."; 
  //The intro sequence upon page load
document.body.style.backgroundImage = "url('images/cybertrip.gif')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "repeat";
 document.getElementById("reality").style.display="block";
  setTimeout(function () {
   document.getElementById("reality").style.display="none";
   document.body.style.backgroundImage = "url('images/super2.gif')";
   document.body.style.backgroundSize = "cover";
   reload();
  }, 5450);
 }

function reload() {
 document.title = "WELCOME TO CYBEROCCULTISM"; 
  //renders the splash page where the user selects their audio options
  setTimeout(function () {
 document.body.style.backgroundColor = "black";
 document.body.style.backgroundImage = "none";
 setTimeout(function () {
 document.getElementById("cybercastle").style.display = "block";
 document.getElementById("castleDIV").style.display = "block";
 document.getElementById("cyberwizard").style.display = "block";
 document.getElementById("cyberwizard2").style.display = "block";
 document.getElementById("welcomeskull").style.display="block";
 document.getElementById("welcome1").style.display = "block";
 document.getElementById("welcome2").style.display= "block";
 document.getElementById("welcome3").style.display= "block";
 document.body.style.backgroundSize = "initial";
   }, 2000);
  }, 3930);
}

//starts main page process with bgm/sfx
function welcome1(){
 bgmon = true;
 sfxon = true;
 document.getElementById("gill").style.display = "block";
 bgm.load();
 sfx.load();
 document.getElementById("castleDIV").style.display = "none";
 document.getElementById("cybercastle").style.display = "none";
 document.getElementById("cyberwizard").style.display = "none";
 document.getElementById("cyberwizard2").style.display = "none";
 document.getElementById("welcomeskull").style.display="none";
 document.getElementById("welcome1").style.display = "none";
 document.getElementById("welcome2").style.display="none";
 document.getElementById("welcome3").style.display="none";
}

//starts main page process without bgm/sfx
function welcome2(){
 document.getElementById("gill").style.display = "block";
 document.getElementById("cybercastle").style.display = "none";
 document.getElementById("cyberwizard").style.display = "none";
 document.getElementById("cyberwizard2").style.display = "none";
 document.getElementById("welcomeskull").style.display="none";
 document.getElementById("welcome1").style.display = "none";
 document.getElementById("welcome2").style.display="none";
 document.getElementById("welcome3").style.display="none";
}

function cyberoccultism(){
  //used to cue main site process upon hovering mouse on gill (has sfx and bgm if enabled)
 if (gillup == false){
  gillup = true;
  document.getElementById("gill").src = "images/rgsgsddfs.png";
  if (bgmon){
  sfx.play();
  setTimeout(function() {
  document.getElementById("gill").src = "images/rgsgsddfs.png";
  document.getElementById("gill").style.top = "83.1%";
  gilldead = true;
      backgroundLoop();
    document.getElementById("welcome1").style.display = "none";
    document.getElementById("welcome2").style.display="none";
    document.getElementById("welcome3").style.display="none";
    document.getElementById("welcomeskull").style.display="none";
    document.getElementById("prompt").style.display = "none";
    document.getElementById("unprompt").style.display = "inline-block";
    document.getElementById("promptsfx").style.display = "none";
    document.getElementById("unpromptsfx").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("input").style.display = "inline-block";
    document.getElementById("bgtoggle").style.display = "inline-block";
    document.getElementById("fakeui").style.display = "inline-block";
   document.getElementById('sfx').src = "/audio/cyberoccultism.mp3";
   sfx.load();
   sfx.play();
    typeWriter();
    clippyTime();
    setInterval(magic, 100000);
    bgm.play();
    cooldown = false;
  }, 2630);
} else {
  setTimeout(function() {
  document.getElementById("gill").src = "images/rgsgsddfs.png";
  document.getElementById("gill").style.top = "83.1%";
  gilldead = true;
      backgroundLoop();
    document.getElementById("welcome1").style.display = "none";
    document.getElementById("welcome2").style.display="none";
    document.getElementById("welcome3").style.display="none";
    document.getElementById("welcomeskull").style.display="none";
    document.getElementById("prompt").style.display = "inline-block";
    document.getElementById("unprompt").style.display = "none";
    document.getElementById("promptsfx").style.display = "inline-block";
    document.getElementById("unpromptsfx").style.display = "none";
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("input").style.display = "inline-block";
    document.getElementById("bgtoggle").style.display = "inline-block";
    document.getElementById("fakeui").style.display = "inline-block";
    typeWriter();
    clippyTime();
    setInterval(magic, 100000);
    cooldown = false;
  }, 2630);
 }
 }
}

function killgill(){
//easter egg when clicking gill after main page process begins
 if (gilldead == true && cooldown == false) {
   cooldown = true;
   document.getElementById("gill").style.top = "78%";
   document.getElementById("gill").src = "images/gill.gif";
   gilldead = false;
   setTimeout(function() {
    cooldown = false;
  }, 2600);
   if(sfxon == true){
   document.getElementById('sfx').src = "audio/oof.wav";
   sfx.load();
   sfx.play();
  }
 }
 else if (gilldead == false && cooldown == false){
   cooldown = true;
   document.getElementById("gill").src = "images/gill2.gif";
   document.getElementById("gill").style.top = "78%";
  if (sfxon){
  document.getElementById("sfx").src = "audio/resurrection.wav";
  sfx.load();
  sfx.play();
  gilldead = true;
  setTimeout(function() {
  cooldown = false;
  }, 2645);
  setTimeout(function() {
  document.getElementById("gill").style.top = "83.1%";
  document.getElementById("gill").src = "images/rgsgsddfs.png";
  }, 2645);
} else {
  setTimeout(function() {
  document.getElementById("gill").style.top = "83.1%";
  document.getElementById("gill").src = "images/rgsgsddfs.png";
  gilldead = true;
  }, 2645);
     setTimeout(function() {
    cooldown = false;
  }, 2645);
 }
 }
}

function typeWriter() {
//types out main title, "loads in" (visually) the menu items, then systematically spawns easter eggs
  if (i < titleText.length) {
    document.getElementById("title").innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i >= titleText.length) {
    document.getElementById("online").style.display = "inline-block";
      setTimeout(function() {
      document.getElementById("web420").style.display = "inline-block";
      }, 420);
      setTimeout(function() {
      document.getElementById("menu").style.display = "inline-block";
      }, 777);      setTimeout(function() {
      document.getElementById("blog").style.display = "block";
      }, 888);
      setTimeout(function() {
      document.getElementById("links").style.display = "block";
      }, 963);
      setTimeout(function() {
      document.getElementById("links2").style.display = "block";
      }, 966);
        setTimeout(function() {
      document.getElementById("glossary").style.display = "block";
      }, 969);
        setTimeout(function() {
      document.getElementById("hitcount").style.display = "inline-block";
      document.getElementById("hits").style.display = "inline-block";
      }, 989);
        setTimeout(function() {
      document.getElementById("oddity1").style.display = "inline-block";
      }, 999);
        setTimeout(function() {
      document.getElementById("oddity2").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("oddity3").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("oddity4").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article1").style.display = "inline-block";
      }, 1110);
        setTimeout(function() {
      document.getElementById("article2").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article3").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("special").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article4").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article5").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article6").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article7").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article8").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("article9").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("special3").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("comingsoon").style.display = "inline-block";
      }, 1110);
          setTimeout(function() {
      document.getElementById("credits").style.display = "inline-block";
      }, 1212);
          setTimeout(function() {
      document.getElementById("updates").style.display = "inline-block";
      }, 2118);
          setTimeout(function() {
      document.getElementById("minutia").style.display = "inline-block";
      }, 2339);
          setTimeout(function() {
      document.getElementById("profile").style.display = "block";
      }, 100000);
          setTimeout(function() {
      document.getElementById("firefox").style.display = "block";
      }, 37000);
          setTimeout(function() {
      document.getElementById("monitor").style.display = "block";
      }, 38000);
          setTimeout(function() {
      document.getElementById("cwa").style.display = "block";
      }, 50000);
                      setTimeout(function() {
      document.getElementById("homunculus").style.display = "block";
      }, 60000);
                      setTimeout(function() {
      document.getElementById("aol").style.display = "block";
      }, 70000);
                      setTimeout(function() {
      document.getElementById("aurelia").style.display = "block";
      }, 80000);
                      setTimeout(function() {
      document.getElementById("clz5").style.display = "block";
      }, 90000);
                      setTimeout(function() {
      document.getElementById("dance").style.display = "block";
      }, 100000);
                      setTimeout(function() {
      document.getElementById("weed").style.display = "block";
      }, 110000);
                      setTimeout(function() {
      document.getElementById("bongboy").style.display = "block";
      }, 120000);
                      setTimeout(function() {
      document.getElementById("suncoast").style.display = "block";
      }, 130000);
                      setTimeout(function() {
      document.getElementById("electabuzz").style.display = "block";
      }, 140000);
                      setTimeout(function() {
      document.getElementById("cyberaol").style.display = "block";
      }, 150000);
                      setTimeout(function() {
      document.getElementById("weedyang").style.display = "block";
      }, 160000);
                      setTimeout(function() {
      document.getElementById("chaoslair").style.display = "block";
      }, 170000);
                setTimeout(function() {
      document.getElementById("eastereggs").style.display = "block";
      }, 180000);
                setTimeout(function() {
      document.getElementById("hentai").style.display = "block";
      }, 190000);
                setTimeout(function() {
      document.getElementById("ghosts").style.display = "block";
      }, 200000);
                setTimeout(function() {
      document.getElementById("colorchangedoor").style.display = "block";
      }, 210000);
                setTimeout(function() {
      document.getElementById("flyingheart").style.display = "block";
      }, 220000);
          setTimeout(function() {
      document.getElementById("party").style.display = "block";
      }, 230000);
          setTimeout(function() {
      document.getElementById("error").style.display = "block";
      }, 240000);
          setTimeout(function() {
      document.getElementById("keroro").style.display = "block";
      }, 250000);
          setTimeout(function() {
      document.getElementById("aliendance").style.display = "block";
      }, 260000);
          setTimeout(function() {
      document.getElementById("miia").style.display = "block";
      }, 270000);
          setTimeout(function() {
      document.getElementById("dio").style.display = "block";
      }, 280000);
          setTimeout(function() {
      document.getElementById("jotaro").style.display = "block";
      }, 290000);
          setTimeout(function() {
      document.getElementById("wallpapers").style.display = "block";
      }, 300000);
          setTimeout(function() {
      document.getElementById("weedcat").style.display = "block";
      }, 310000);
          setTimeout(function() {
      document.getElementById("ouija").style.display = "block";
      }, 320000);
          setTimeout(function() {
      document.getElementById("shadowdio").style.display = "block";
      }, 330000);
          setTimeout(function() {
        if (loadedall == false){
          wizardTime();
          loadedall = true;
        }
      }, 340000);
  }
}

function backgroundLoop(){
//changes background once its trigger is reached in typewriter(). loops at end checks for color change variable to render either green or pink versions
                        setTimeout(function() {
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url('images/stars.gif')";
} else if (pinkCheck == true && bgon == true) {
  document.body.style.backgroundSize = "initial";
    document.body.style.backgroundImage = "url('images/starsp.gif')";
  } else{
  //do nothing (placeholder for possible alternative functionality later)
}
      }, 0);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/matrix.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/matrixp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 60000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/movingstars.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/movingstarsp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 120000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/hearts.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/heartsp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 180000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/bubbles.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/bubblesp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 240000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/ghosts.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/ghostsp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 300000);
                      setTimeout(function() {
    document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url('images/planets.gif')";
      }, 320000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/wowweed.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/wowweedp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 360000);
                      setTimeout(function() {
    document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url('images/final.gif')";
      }, 480000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/cybersnow.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/cybersnowp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 540000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/cyberballs.gif')";
    } else if (pinkCheck == true && bgon == true){
    document.body.style.backgroundImage = "url('images/cyberballsp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 600000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/eyes.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/eyesp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 660000);
                        setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/ocean.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/oceanp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 720000);
                        setTimeout(function() {
      document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/spiritorbs.gif')";
    } else if (pinkCheck == true && bgon == true) {
    document.body.style.backgroundImage = "url('images/spiritorbsp.gif')";
  } else {
    //do nothing (placeholder for possible alternative functionality later)
  }
      }, 780000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/fullconsciousness.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/fullconsciousnessp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 840000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/dream.gif')";
    } else if (pinkCheck == true && bgon == true) {
         document.body.style.backgroundImage = "url('images/dreamp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 900000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/dragon.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/dragonp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 960000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/3dspace.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/3dspacep.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1020000);
                         setTimeout(function() {
        if (bgon == true){
         document.body.style.backgroundSize = "cover";
         document.body.style.backgroundImage = "url('images/cybertrip.gif')";
       } else {
         //do nothing (placeholder for possible alternative functionality later)
       }
    }, 1080000);
                         setTimeout(function() {
        if (bgon == true){
         document.body.style.backgroundSize = "cover";
         document.body.style.backgroundImage = "url('images/sh.gif')";
       } else {
         //do nothing (placeholder for possible alternative functionality later)
       }
    }, 1120000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/geocities.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/geocitiesp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1180000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/akira.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/akirap.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1240000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "initial";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/water.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/waterp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1300000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/dazil.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/dazilp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1360000);
                         setTimeout(function() {
    document.body.style.backgroundSize = "cover";
    if (pinkCheck == false && bgon == true){
         document.body.style.backgroundImage = "url('images/static.gif')";
    } else if (pinkCheck == true && bgon == true){
         document.body.style.backgroundImage = "url('images/staticp.gif')";
    } else {
      //do nothing (placeholder for possible alternative functionality later)
    }
      }, 1420000);
                      setTimeout(function() {
  document.body.style.backgroundSize = "initial";
  backgroundLoop();
      }, 1480000);
  }

function party(){
  //easter egg for clicking the "Hits" spirit gif. Changes background/bgm
 document.body.style.backgroundSize = "initial";
 if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/10000.gif')";
    } else if (pinkCheck == true && bgon == true){
    document.body.style.backgroundImage = "url('images/10000p.gif')";
    } else {
    //do nothing (placeholder for possible alternative functionality later)
    }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/lmfao.mp3";
  bgm.load();
  bgm.play();
 }
}



function monitor() {
  //toggles scanlines when the monitor spirit gif is clicked
  if (scanlineson){
    document.getElementById("scanlines").style.display = "none";
    scanlineson = false;
  } else {
      document.getElementById("scanlines").style.display = "block";
      scanlineson = true;
  }
}

function summonAll(){
  //calls all easter eggs. debug/cheat code feature. includes the full version of the wizard office assistant webmaster speech.

    document.getElementById("profile").style.display = "block";
    document.getElementById("eastereggs").style.display = "block";
    document.getElementById("cwa").style.display = "block";
    document.getElementById("homunculus").style.display = "block";
    document.getElementById("aol").style.display = "block";
    document.getElementById("aurelia").style.display = "block";
    document.getElementById("clz5").style.display = "block";
    document.getElementById("dance").style.display = "block";
    document.getElementById("weed").style.display = "block";
    document.getElementById("bongboy").style.display = "block";
    document.getElementById("suncoast").style.display = "block";
    document.getElementById("electabuzz").style.display = "block";
    document.getElementById("cyberaol").style.display = "block";
    document.getElementById("weedyang").style.display = "block";
    document.getElementById("chaoslair").style.display = "block";
    document.getElementById("hentai").style.display = "block";
    document.getElementById("ghosts").style.display = "block";
    document.getElementById("colorchangedoor").style.display = "block";
    document.getElementById("firefox").style.display = "block";
    document.getElementById("party").style.display = "block";
    document.getElementById("error").style.display = "block";
    document.getElementById("keroro").style.display = "block";
    document.getElementById("aliendance").style.display = "block";
    document.getElementById("miia").style.display = "block";
    document.getElementById("monitor").style.display = "block";
    document.getElementById("flyingheart").style.display = "block";
    document.getElementById("dio").style.display = "block";
    document.getElementById("jotaro").style.display = "block";
    document.getElementById("blog").style.display = "block";
    document.getElementById("wallpapers").style.display = "block";
    document.getElementById("weedcat").style.display = "block";
    document.getElementById("ouija").style.display = "block";
    document.getElementById("shadowdio").style.display = "block";
    wizardTime2();
}

function summonAll2(){
  //alternative version of the previous function that skips the wizard speech. Used for fast debugging or for returning visitors by cheat code
    document.getElementById("profile").style.display = "block";
    document.getElementById("eastereggs").style.display = "block";
    document.getElementById("cwa").style.display = "block";
    document.getElementById("homunculus").style.display = "block";
    document.getElementById("aol").style.display = "block";
    document.getElementById("aurelia").style.display = "block";
    document.getElementById("clz5").style.display = "block";
    document.getElementById("dance").style.display = "block";
    document.getElementById("weed").style.display = "block";
    document.getElementById("bongboy").style.display = "block";
    document.getElementById("suncoast").style.display = "block";
    document.getElementById("electabuzz").style.display = "block";
    document.getElementById("cyberaol").style.display = "block";
    document.getElementById("weedyang").style.display = "block";
    document.getElementById("chaoslair").style.display = "block";
    document.getElementById("hentai").style.display = "block";
    document.getElementById("ghosts").style.display = "block";
    document.getElementById("colorchangedoor").style.display = "block";
    document.getElementById("firefox").style.display = "block";
    document.getElementById("party").style.display = "block";
    document.getElementById("error").style.display = "block";
    document.getElementById("keroro").style.display = "block";
    document.getElementById("aliendance").style.display = "block";
    document.getElementById("miia").style.display = "block";
    document.getElementById("monitor").style.display = "block";
    document.getElementById("flyingheart").style.display = "block";
    document.getElementById("dio").style.display = "block";
    document.getElementById("jotaro").style.display = "block";
    document.getElementById("blog").style.display = "block";
    document.getElementById("wallpapers").style.display = "block";
    document.getElementById("weedcat").style.display = "block";
    document.getElementById("ouija").style.display = "block";
    document.getElementById("shadowdio").style.display = "block";
    wizardTime3();
}

function aureliasong(){
  //opens aurelia saga special page with proper bgm/voice
 window.open('aurelia.html', 'aurelia');
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/aureliasaga.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/twilight.mp3";
  bgm.load();
  bgm.play();
 }
}

function homunculussong(){
  //opens homunculus oddity page with proper bgm/voice
 window.open('homunculus.html', 'homunculus');
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/homunculus.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/lavender.mp3";
  bgm.load();
  bgm.play();
 }
}

function homunculus2(){
  //opens other homunculus oddity page with proper bgm/voice
 window.open('homunculus2.html', 'homunculus2');
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/homunculus2.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/twilightzone.mp3";
  bgm.load();
  bgm.play();
 }
}

function aolsong(){
  //easter egg upon clicking AOL spirit, changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/xfiles.mp3";
  bgm.load();
  bgm.play();
 }
}

function sweetdreams(){
  //opens about page with proper bgm/voice
 window.open('about.html', 'about');
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/about.mp3";
  sfx.load();
  sfx.play();
  }
 window.bgmChange = function () {
  //allows the about.html page to pass back that the user clicked the webmaster portrait gif to play a new song
  if(bgmon == true){
   document.getElementById('bgm').src = "audio/rasputin.mp3";
   bgm.load();
   bgm.play();
  }
 }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/sweetdreams.mp3";
  bgm.load();
  bgm.play();
  }
}

function arlongclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/Jaws.mp3";
  bgm.load();
  bgm.play();
 }
}

function luffyclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/OnePiece.mp3";
  bgm.load();
  bgm.play();
 }
}

function crocodileclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/PokerFace.mp3";
  bgm.load();
  bgm.play();
 }
}

function zoroclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/blade.mp3";
  bgm.load();
  bgm.play();
 }
}

function shanksclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/wearmyhat.mp3";
  bgm.load();
  bgm.play();
 }
}

function namiclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/money.mp3";
  bgm.load();
  bgm.play();
 }
}

function sanjiclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/chef.mp3";
  bgm.load();
  bgm.play();
 }
}

function karoo2click(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/duck.mp3";
  bgm.load();
  bgm.play();
 }
}

function smokerclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/SmokeOnTheWater.mp3";
  bgm.load();
  bgm.play();
 }
}

function usoppclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/LittleLies.mp3";
  bgm.load();
  bgm.play();
 }
}

function kayaclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/SaveMe.mp3";
  bgm.load();
  bgm.play();
 }
}

function viviclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/TakeOnMe.mp3";
  bgm.load();
  bgm.play();
 }
}

function tashigiclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/Smooth.mp3";
  bgm.load();
  bgm.play();
 }
}

function choppermonsterclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/HealTheWorld.mp3";
  bgm.load();
  bgm.play();
 }
}

function kuroclick(){
  //runs when clicking on a One Piece character spawned from the Karoo easter egg. Changes bgm.
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/MANIAC.mp3";
  bgm.load();
  bgm.play();
 }
}

function stonerPlaylist(){
//pauses BGM functionality for stoner playlist page convenience
 window.open('stonerplaylist.html', 'stonerplaylist');
 bgm.pause();
 document.getElementById("unprompt").style.display = "none";
 document.getElementById("prompt").style.display = "inline-block";
 window.bgmChange2 = function () {
   bgm.play();
 document.getElementById("unprompt").style.display = "inline-block";
 document.getElementById("prompt").style.display = "none";
  }
}

function chaosLair(){
//opens chaoslair page and changes BGM accordingly.
 window.open('chaoslair.html', 'chaoslair');
  if(bgmon == true){
  document.getElementById('bgm').src = "audio/muse.mp3";
  bgm.load();
  bgm.play();
 }
}

function incenseClick(){
 bgm.pause();
 window.open('incense.html','incense');
}

function bgmChain(){
//used as part of sequence to pass bgm change between windows
if(bgmon == true){
  document.getElementById('bgm').src = "audio/museum.mp3";
  bgm.load();
  bgm.play();
 }
}

function astralsong(){
  //trigges when astral vs astral article page is opened--plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/astralvsastral.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/astral.mp3";
  bgm.load();
  bgm.play();
  }
}

function friendly(){
  //triggers when friendly liminal creatures article page is opened--plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/friendly.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/spirits.mp3";
  bgm.load();
  bgm.play();
  }
}

function cyberfurby(){
  //easter egg when clicking furby, changes BGM
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/stillinmyheart.mp3";
  bgm.load();
  bgm.play();
  }
}

function invasionsong(){
  //triggers when lucid dream or dream invasion article page is opened--plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/lucid.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/invasion.mp3";
  bgm.load();
  bgm.play();
  }
}

function entitysong(){
  ///triggers when local spirits/entity oddities page is opened--plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/entity.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/twinpeaks.mp3";
  bgm.load();
  bgm.play();
  }
}

function artifactsong(){
//triggers when artifacts/charging article page is opened--plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/artifacts.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/magic.mp3";
  bgm.load();
  bgm.play();
  }
}

function cwasong(){
  //opens astral spam oddity page with proper bgm/voice
   window.open('cwa.html', 'astralspam');
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/astralspam.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/witchy.mp3";
  bgm.load();
  bgm.play();
  }
}

function spacesong(){
  //easter egg when clicking on clz5 gif. changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/space.mp3";
  bgm.load();
  bgm.play();
  }
}

function dancesong(){
  //easter egg when dance gif is clicked. changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/dance.mp3";
  bgm.load();
  bgm.play();
  }
}

function ghostsong(){
//triggers when ghost archives special page is opened--plays proper bgm/voice  
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/ghostarchivesspeech.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/hotel.mp3";
  bgm.load();
  bgm.play();
  }
}

function ghosts(){
  //opens ghost archives page with proper bgm/voice
 window.open('ghosts.html', 'ghosts');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/hotel.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/ghostarchivesspeech.mp3";
  sfx.load();
  sfx.play();
  }
}

function soonerorlater(){
  //easter egg when clicking the [...] placeholder text in the main menu. changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/soonerorlater.mp3";
  bgm.load();
  bgm.play();
  }
}

function weedsong(){
  //opens the weed smoking furby easter egg page and changes bgm
 window.open('weed.html', 'weed');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/weed.mp3";
  bgm.load();
  bgm.play();
  }
}

function introsong(){
  //easter egg when alien on bong gif is clicked. opens rpg page and changes bgm
 window.open('digitalartifact.html', 'rpg');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/intro.mp3";
  bgm.load();
  bgm.play();
  }
}

function obsession(){
  //easter egg when last updated text is clicked. changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/obsession.mp3";
  bgm.load();
  bgm.play();
  }
}

function changelog(){
 window.open('changes.html', 'changes');
  //easter egg when last updated text is clicked. changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/obsession.mp3";
  bgm.load();
  bgm.play();
  }
   if(sfxon == true){
  document.getElementById('sfx').src = "audio/changelog.mp3";
  sfx.load();
  sfx.play();
  }
}

function clockssong(){
  //opens liminal spaces 1 page and plays proper bgm
 window.open('liminalspaces.html', 'suncoast');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/clocks.mp3";
  bgm.load();
  bgm.play();
  }
}

function electabuzz(){
  //opens electabuzz easter egg page with proper bgm
 window.open('electabuzz.html', 'electabuzz');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/starlight.mp3";
  bgm.load();
  bgm.play();
  }
}

function starlight(){
  //opens credits page and plays proper bgm/voice
window.open('credits.html', 'credits');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/TronLegacyEndTitle.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/credits.mp3";
  sfx.load();
  sfx.play();
  }
}

function web420(){
  //easter egg. plays rick roll audio when the web 4.20 gif text is clicked. filename isn't an intentional fakeout--it was used on the electabuzz page before bgm was swapped.
if(bgmon == true){
  document.getElementById('bgm').src = "audio/electabuzz.mp3";
  bgm.load();
  bgm.play();
  }
}

function cyberaol(){
  //opens liminal spaces 2 page and plays proper bgm
 window.open('liminalspaces2.html', 'aol');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/moonlight.mp3";
  bgm.load();
  bgm.play();
  }
}

function smsinvasion(){
    //opens sms invasion oddity page and plays proper bgm/voice
 window.open('smsinvasion.html', 'smsinvasion');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/FeelGoodInc.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/smsinvasion.mp3";
  sfx.load();
  sfx.play();
  }
}

function blog(){
    //opens blog page and plays proper bgm/voice
 window.open('blog.html', 'blog');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/VeteranofthepsychicWars.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/blog.mp3";
  sfx.load();
  sfx.play();
  }
}

function wallpapers(){
  //opens wallpapers page and plays proper bgm/voice

 window.open('wallpapers.html', 'wallpapers');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/popcorn-4.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/wallpapers.mp3";
  sfx.load();
  sfx.play();
  }
}

function gravity(){
    //opens gravity article page and plays proper bgm/voice
 window.open('gravity.html', 'gravity');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/GatesOfBabylon.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/gravity.mp3";
  sfx.load();
  sfx.play();
  }
}

function ouija(){
    //opens ouija vira page and plays proper bgm
 window.open('vira.html', 'vera');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/vera.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/ouijavoice.mp3";
  sfx.load();
  sfx.play();
  }
}

function glossary(){
    //opens glossary page and plays proper bgm/voice
 window.open('glossary.html', 'glossary');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/horror-land.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/glossary.mp3";
  sfx.load();
  sfx.play();
  }
}

function links2click(){
    //opens links page
 window.open('links.html', 'links');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/grid.mp3";
  bgm.load();
  bgm.play();
  }
}

function linksclick(){
    //opens email
 window.open('mailto:admin@cyberoccultism.online', 'emailme');
}

function draining(){
    //opens draining/vampirism article page and plays proper bgm/voice
 window.open('draining.html', 'draining');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/totaleclipse.mp3";
  bgm.load();
  bgm.play();
  }
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/vampire.mp3";
  sfx.load();
  sfx.play();
  }
}

function blackhole(){
    //opens hexed bag oddity page and plays proper bgm/voice
 if(sfxon == true){
  document.getElementById('sfx').src = "audio/hexedbag.mp3";
  sfx.load();
  sfx.play();
  }
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/blackhole.mp3";
  bgm.load();
  bgm.play();
  }
}

function firefox(){
  //easter egg when clicking firefox spirit gif--changes bgm
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/mii.mp3";
  bgm.load();
  bgm.play();
  }
}

function hentai(){
  //opens hentai page and changes bgm
   window.open('beauty.html', 'hentai');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/run.mp3";
  bgm.load();
  bgm.play();
  }
}

function flyingHeart(){
    //opens mentor memorial page and plays proper bgm/voice
   window.open('r.html', 'r');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/fate.mp3";
  bgm.load();
  bgm.play();
  }
}

function error(){
    //manually opens 404 page from clicking on the proper spirit gif, changes bgm
   window.open('not_found.html', 'error404');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/muse-city_of_delusion.mp3";
  bgm.load();
  bgm.play();
  }
}

function aliendance(){
  //easter egg gif click event, changes music
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/tragedy.mp3";
  bgm.load();
  bgm.play();
  }
}

function ufosclick(){
  //changes bgm if elusive ufo magic event is clicked on (any of the 3)
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/styx.mp3";
  bgm.load();
  bgm.play();
  }
}

function profile(){
  //opens neocities profile and changes music accordingly
   window.open('https://neocities.org/site/cyberoccultism', 'profile');
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/2am.mp3";
  bgm.load();
  bgm.play();
  }
}

function bartclick(){
//changes bgm if bart magic event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/skaterboy.mp3";
  bgm.load();
  bgm.play();
  }
}

function spiderclick(){
//changes bgm if skull spider magic event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/monstermash.mp3";
  bgm.load();
  bgm.play();
  }
}

function athenaclick(){
  //changes bgm and plays voice clip if athena magic event is clicked
 if(bgmon == true){
  document.getElementById("sfx").src = "audio/psychosoldier.wav";
  sfx.load();
  sfx.play();
  document.getElementById('bgm').src = "audio/psychosoldier.mp3";
  bgm.load();
  bgm.play();
  }
}

function pikachuclick(){
  //changes bgm if pikachu magic event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/mezase.mp3";
  bgm.load();
  bgm.play();
  }
}


function godzillaclick(){

  //changes bgm if godzilla magic event is clicked
 document.getElementById("incense").style.display = "block";

 if(bgmon == true){
  document.getElementById('bgm').src = "audio/godzilla.mp3";
  bgm.load();
  bgm.play();
  }
}

function cdclick(){
  //changes bgm if cd magic event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/cd.mp3";
  bgm.load();
  bgm.play();
  }
}

function miia(){
  //changes bgm and cursor if miia spirit easter egg is clicked
document.body.classList.add("miia");
if(bgmon == true){
  document.getElementById('bgm').src = "audio/crush.mp3";
  bgm.load();
  bgm.play();
  }
}


function playerstart(){
  //enable bgm
  bgmon = true;
  document.getElementById("prompt").style.display = "none";
  document.getElementById("unprompt").style.display = "inline-block";

  bgm.load();
  bgm.play();
}

function playerstop(){
  //disable bgm
  bgmon = false;
  document.getElementById("prompt").style.display = "inline-block";
  document.getElementById("unprompt").style.display = "none";
  document.getElementById('bgm').src = "audio/bgm.mp3";
  bgm.pause();
}

function sfxstart(){
  //enable sfx
  sfxon = true;
  document.getElementById("promptsfx").style.display = "none";
  document.getElementById("unpromptsfx").style.display = "inline-block";
}

function sfxstop(){
  //disable sfx
  sfxon = false;
  document.getElementById("promptsfx").style.display = "inline-block";
  document.getElementById("unpromptsfx").style.display = "none";
}

function pink(){
  //makes shit pink
  document.getElementById("title").setAttribute("class", "glow2");
  document.getElementById("prompt").setAttribute("class", "glow2");
  document.getElementById("unprompt").setAttribute("class", "glow2");
  document.getElementById("promptsfx").setAttribute("class", "glow2");
  document.getElementById("unpromptsfx").setAttribute("class", "glow2");
  document.getElementById("menu").setAttribute("class", "glow2");
  document.getElementById("oddity1").setAttribute("class", "glow2 selectme");
  document.getElementById("oddity2").setAttribute("class", "glow2 selectme");
  document.getElementById("oddity3").setAttribute("class", "glow2 selectme");
  document.getElementById("oddity4").setAttribute("class", "glow2 selectme");
  document.getElementById("article1").setAttribute("class", "glow2 selectme");
  document.getElementById("article2").setAttribute("class", "glow2 selectme");
  document.getElementById("article3").setAttribute("class", "glow2 selectme");
  document.getElementById("special").setAttribute("class", "glow2 selectme");
  document.getElementById("article4").setAttribute("class", "glow2 selectme");
  document.getElementById("article5").setAttribute("class", "glow2 selectme");
  document.getElementById("article6").setAttribute("class", "glow2 selectme");
  document.getElementById("article7").setAttribute("class", "glow2 selectme");
  document.getElementById("article8").setAttribute("class", "glow2 selectme");
  document.getElementById("article9").setAttribute("class", "glow2 selectme");
  document.getElementById("special3").setAttribute("class", "glow2 selectme");
  document.getElementById("hits").setAttribute("class", "glow2 selectme");
  document.getElementById("comingsoon").setAttribute("class", "glow2 selectme");
  document.getElementById("minutia").setAttribute("class", "glow2");
  document.getElementById("reset").setAttribute("class", "glow2");
  document.getElementById("input").style.color = "#ff33ff";
  document.getElementById("input").setAttribute("class", "glow2");
  document.getElementById("online").setAttribute("class", "glow2");
  document.getElementById("bgtoggle").setAttribute("class", "glow2");
  document.getElementById("bgtoggle2").setAttribute("class", "glow2");
  document.getElementById("faketoolbar").style.borderColor = "#ff33ff";
  document.getElementById("faketoolbar").style.color = "#ff33ff";
  document.getElementById("fakewindow").style.borderColor = "#ff33ff";

for (let i = 0; i < document.images.length; i++){
  if (document.images[i].src != "https://cyberoccultism.online.org/images/gill.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2.gif" && document.images[i].src != "https://cyberoccultism.online/images/rgsgsddfs.png" && document.images[i].src != "https://cyberoccultism.online/images/gillp.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2p.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill-stancep.gif"){
  let dot = document.images[i].src.lastIndexOf(".");
  let firstHalf = document.images[i].src.substring(0, dot);
  let lastHalf = document.images[i].src.substring(dot);
  document.images[i].src = firstHalf + "p" + lastHalf;
  }
 }
}

function unPink(){
//makes shit green again
  document.getElementById("title").setAttribute("class", "glow");
  document.getElementById("prompt").setAttribute("class", "glow");
  document.getElementById("unprompt").setAttribute("class", "glow");
  document.getElementById("promptsfx").setAttribute("class", "glow");
  document.getElementById("unpromptsfx").setAttribute("class", "glow");
  document.getElementById("menu").setAttribute("class", "glow");
  document.getElementById("oddity1").setAttribute("class", "glow selectme");
  document.getElementById("oddity2").setAttribute("class", "glow selectme");
  document.getElementById("oddity3").setAttribute("class", "glow selectme");
  document.getElementById("oddity4").setAttribute("class", "glow selectme");
  document.getElementById("article1").setAttribute("class", "glow selectme");
  document.getElementById("article2").setAttribute("class", "glow selectme");
  document.getElementById("article3").setAttribute("class", "glow selectme");
  document.getElementById("special").setAttribute("class", "glow selectme");
  document.getElementById("article4").setAttribute("class", "glow selectme");
  document.getElementById("article5").setAttribute("class", "glow selectme");
  document.getElementById("article6").setAttribute("class", "glow selectme");
  document.getElementById("article7").setAttribute("class", "glow selectme");
  document.getElementById("article8").setAttribute("class", "glow selectme");
  document.getElementById("article9").setAttribute("class", "glow selectme");
  document.getElementById("special3").setAttribute("class", "glow selectme");
  document.getElementById("hits").setAttribute("class", "glow selectme");
  document.getElementById("comingsoon").setAttribute("class", "glow selectme");
  document.getElementById("minutia").setAttribute("class", "glow");
  document.getElementById("reset").setAttribute("class", "glow");
  document.getElementById("input").style.color = "#33ff33";
  document.getElementById("input").setAttribute("class", "glow");
  document.getElementById("online").setAttribute("class", "glow");
  document.getElementById("bgtoggle").setAttribute("class", "glow");
  document.getElementById("bgtoggle2").setAttribute("class", "glow");
  document.getElementById("faketoolbar").style.borderColor = "#33ff33";
  document.getElementById("faketoolbar").style.color = "#33ff33";
  document.getElementById("fakewindow").style.borderColor = "#33ff33";

  for (let i = 0; i < document.images.length; i++){
  if (document.images[i].src != "https://cyberoccultism.online/images/gill.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2.gif" && document.images[i].src != "https://cyberoccultism.online/images/rgsgsddfs.png" && document.images[i].src != "https://cyberoccultism.online/images/gillp.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2p.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill-stancep.gif"){
  let p = document.images[i].src.indexOf("p.");
  let newsrc = document.images[i].src.slice(0, p) + document.images[i].src.slice(p + 1);
  document.images[i].src = newsrc;
  }
 }
}

function pinkDoor() {
//toggles between pink and green modes using previous two functions
 if (pinkCheck == false){
 pink();
 pinkCheck = true;
 } else {
  unPink();
  pinkCheck = false;
 }
}

function magic() {
//summons magic events
var d = Math.random();
if (d < 0.1) {
spookySpider();
  } else if (d < 0.2) {
  ufos();
  } else  if (d < 0.3){
   skater();
  } else  if (d < 0.4){
  godzilla();
  } else if (d < 0.5){
  cd();
  } else if (d < 0.6){
  pikachu();
  } else if (d < 0.7){
   athena();
  } else if (d < 0.8){
   karoo();
  } else if (d < 0.9){
   vroom();
  }
}

function spookySpider() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/spider.wav";
  sfx.load();
  sfx.play();
    }
setTimeout(function () {
   document.getElementById("creepy").classList.add("creepy");
  document.getElementById("creepy").style.display = "block";
setTimeout(function() {
   document.getElementById("creepy").classList.remove("creepy");
    document.getElementById("creepy").style.display = "none";
      }, 7000);
}, 1000);
}


function ufos() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/UFOS.mp3";
  sfx.load();
  sfx.play();
    }
setTimeout(function () {
  document.getElementById("ship1").classList.add("ship1");
  document.getElementById("ship1").style.display = "block";
  document.getElementById("ship2").classList.add("ship2");
  document.getElementById("ship2").style.display = "block";
  document.getElementById("ship3").classList.add("ship3");
  document.getElementById("ship3").style.display = "block";
setTimeout(function() {
  document.getElementById("ship1").classList.remove("ship1");
  document.getElementById("ship1").style.display = "none";
      }, 10000);
setTimeout(function() {
  document.getElementById("ship2").classList.remove("ship2");
  document.getElementById("ship2").style.display = "none";
      }, 8000);
setTimeout(function() {
  document.getElementById("ship3").classList.remove("ship3");
  document.getElementById("ship3").style.display = "none";
      }, 12000);
}, 1000);
}

function skater() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon && bartonce == false){
  document.getElementById("sfx").src = "audio/bart.wav";
  sfx.load();
  sfx.play();
    } else if (sfxon && bartonce == true){
  document.getElementById("sfx").src = "audio/yeah.wav";
  sfx.load();
  sfx.play();
    } else {
     //do nothing (placeholder for possible alternative functionality later)
    }
setTimeout(function () {
  document.getElementById("bart").classList.add("bart");
  document.getElementById("bart").style.display = "block";
  setTimeout(function() {
    document.getElementById("bart").classList.remove("bart");
    document.getElementById("bart").style.display = "none";
    bartonce = true;
      }, 12000);
}, 1000);
}


function godzilla() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/godzillasound.mp3";
  sfx.load();
  sfx.play();
    }
  setTimeout(function () {
   document.getElementById("godzilla").classList.add("godzilla");
  document.getElementById("godzilla").style.display = "block";
setTimeout(function() {
   document.getElementById("godzilla").classList.remove("godzilla");
    document.getElementById("godzilla").style.display = "none";
      }, 15000);
}, 1000);
}

function karoo() {
  //used by magic() function to call a specific magic event and play its sound effect
setTimeout(function () {
   document.getElementById("karoo").classList.add("karoo");
  document.getElementById("karoo").style.display = "block";
    if (sfxon){
  document.getElementById("sfx").src = "audio/duck.wav";
  sfx.load();
  sfx.play();
    }
setTimeout(function() {
   document.getElementById("karoo").classList.remove("karoo");
    document.getElementById("karoo").style.display = "none";
      }, 20000);
 }, 1000);
};

function vroom() {
  //used by magic() function to call a specific magic event and play its sound effect
setTimeout(function () {
   document.getElementById("evo").classList.add("drift");
  document.getElementById("evo").style.display = "block";
    if (sfxon){
  document.getElementById("sfx").src = "audio/rev.mp3";
  sfx.load();
  sfx.play();
    }
setTimeout(function() {
   document.getElementById("evo").classList.remove("drift");
    document.getElementById("evo").style.display = "none";
      }, 20000);
 }, 1000);
};

function pikachu() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/25.wav";
  sfx.load();
  sfx.play();
    }
setTimeout(function () {
   document.getElementById("pikachu").classList.add("pikachu");
  document.getElementById("pikachu").style.display = "block";
setTimeout(function() {
   document.getElementById("pikachu").classList.remove("pikachu");
    document.getElementById("pikachu").style.display = "none";
      }, 15000);
 }, 1000);
}

function athena() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/athena.wav";
  sfx.load();
  sfx.play();
    }
setTimeout(function () {
   document.getElementById("athena").classList.add("athena");
  document.getElementById("athena").style.display = "block";
setTimeout(function() {
   document.getElementById("athena").classList.remove("athena");
    document.getElementById("athena").style.display = "none";
      }, 15000);
 }, 1000);
}

function cd() {
  //used by magic() function to call a specific magic event and play its sound effect
    if (sfxon){
  document.getElementById("sfx").src = "audio/cd.wav";
  sfx.load();
  sfx.play();
    }
setTimeout(function () {
   document.getElementById("cd").classList.add("cd");
  document.getElementById("cd").style.display = "block";
setTimeout(function() {
   document.getElementById("cd").classList.remove("cd");
    document.getElementById("cd").style.display = "none";
      }, 20000);
 }, 1000);
}

function keroro() {
  //activated by clicking keroro easter egg spirit gif, changes background gif and plays new bgm
    if (bgmon){
  document.getElementById("bgm").src = "audio/keroro.mp3";
  bgm.load();
  bgm.play();
    }
  document.body.style.backgroundSize = "initial";
if (pinkCheck == false && bgon == true){
  document.body.style.backgroundImage = "url('images/keroro_dance.gif')";
    } else if (pinkCheck == true && bgon == true){
    document.body.style.backgroundImage = "url('images/keroro_dancep.gif')";
    } else {
     //do nothing (placeholder)
    }
}

function dioclick(){
  //changes bgm when dio gif is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/dio.mp3";
  bgm.load();
  bgm.play();
  }
}

function catchphraseclick(){
  //changes bgm when slogan gif easter egg is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/rider.mp3";
  bgm.load();
  bgm.play();
  }
}

function weedcatclick(){
  //spawns slogan gif easter egg when weed cat easter egg is clicked
    document.getElementById("catchphrase").style.display = "block";
}

function jotaroclick(){
  //changes bgm when jotaro gif is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/WalkLikeAnEgyptian.mp3";
  bgm.load();
  bgm.play();
  }
}

function vroomclick(){
  //changes bgm and summons 4 drift cars when the car magic event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/vroom.mp3";
  bgm.load();
  bgm.play();
  }
  document.getElementById("drift").style.display = "block";
  document.getElementById("drift2").style.display = "block";
  document.getElementById("drift3").style.display = "block";
  document.getElementById("drift4").style.display = "block";
}

function driftclick(){
  //changes bgm when a drift car summoned by the vroomclick() event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/drift.mp3";
  bgm.load();
  bgm.play();
  }
}

function drift2click(){
  //changes bgm when a drift car summoned by the vroomclick() event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/drift2.mp3";
  bgm.load();
  bgm.play();
  }
}

function drift3click(){
  //changes bgm when a drift car summoned by the vroomclick() event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/drift3.mp3";
  bgm.load();
  bgm.play();
  }
}

function drift4click(){
  //changes bgm when a drift car summoned by the vroomclick() event is clicked
 if(bgmon == true){
  document.getElementById('bgm').src = "audio/drift4.mp3";
  bgm.load();
  bgm.play();
  }
}

function karooclick() {
  //summons various one piece character spirit easter eggs when karoo magic event is clicked
    document.getElementById("luffy").style.display = "block";
    document.getElementById("zoro").style.display = "block";
    document.getElementById("arlong").style.display = "block";
    document.getElementById("kaya").style.display = "block";
    document.getElementById("usopp").style.display = "block";
    document.getElementById("shanks").style.display = "block";
    document.getElementById("tashigi").style.display = "block";
    document.getElementById("smoker").style.display = "block";
    document.getElementById("choppermonster").style.display = "block";
    document.getElementById("kuro").style.display = "block";
    document.getElementById("sanji").style.display = "block";
    document.getElementById("nami").style.display = "block";
    document.getElementById("vivi").style.display = "block";
    document.getElementById("karoo2").style.display = "block";
    document.getElementById("crocodile").style.display = "block";
}

function clippyTime() {
  //loads Clippy easter egg spirit using clippy.js and triggers proper speech/animations
    clippy.load('Clippy', function(agent) {
        agent.show();
        agent.play('Greeting');
        agent.play('GetAttention');
        agent.speak('Hi, it\'s me, Clippy! Welcome to CYBEROCCULTISM! . . . . .');
        agent.speak('Did you miss me? I never really left, I have just been hanging in the astral plane! . . . . . . .');
        agent.play('GetArtsy');
        agent.speak('The main articles and features about CYBEROCCULTISM are numbered in the menu in the center of the page. . . . . . . .');
        agent.speak('There\'s a glossary accessible above the menu explaining CYBEROCCULTISM terminology, and serving as a psuedo-directory according to different occult concepts. . . . . . . .');
        agent.speak('You can also click the title in the center of the page to read more about this site. . . . . . . .');
        agent.speak('This site is also haunted, and more and more spirits and easter eggs will appear as time elapses. . . . . . . .');
        agent.play('GestureUp');
        agent.speak('To drag a spirit (image), click on it and move your mouse. To activate its features, double click it! . . . . . . .');
        agent.speak('The options window at the top-center can be toggled by clicking the icon in its corner, and dragged like anything else. Various settings about the site can be changed there. . . . . . . .');
        agent.speak('Also, keep an eye out for special events that randomly spawn! Try to click them if you can! These elusive ANOMALY spirits only require one click to activate, and cannot be dragged . . . . . . .');
        agent.speak('You can also double click me any time for a random animation. Just like you did when you were procrastinating in Microsoft Word in Middle School! . . . . . . .');
        agent.speak('Remember... as above, so below. Let us reprogram reality together, motherfucker! Enjoy your time at CYBEROCCULTISM! . . . . . . .');
        agent.play('SendMail');
      });
}

function wizardTime() {
  //loads wizard easter egg spirit using clippy.js and triggers proper speech/animations--version when user spends a lot of time on site
    clippy.load('Merlin', function(agent) {
        agent.show();
        agent.play('Surprised');
        agent.moveTo(50,200);
        agent.play('Wave');
        agent.speak('Hello there--it\'s me, the webmaster! . . . . .');
        agent.speak('You sure have spent a lot of time on CYBEROCCULTISM... I\'m truly honored to have had the opportunity to entertain you for this long! Thank you so much for your time! . . . . . . .');
        agent.play('Greet');
        agent.speak('As a token of my appreciation, I would like to give you an exclusive cheat code for this site. This code will let you immediately summon all of the easter eggs (but not anomalies)! . . . . . . .');
        agent.speak('To do this, just type "summonall" (without quotes) in the cheat code box in the bottom right... this way you can immediately get back to all your favorite options!. . . . . . . .');
        agent.play('Pleased');
        agent.speak('Every time new spirits are added, they are added to the spawn list of the summonall command, so you will also be able to immediately test new features this way upon updates! . . . . . .');
        agent.speak('Remember... as above, so below. Let\'s reprogram reality together, motherfucker! Double click me for random animations, and enjoy your continued time at CYBEROCCULTISM! . . . . . . .');
        agent.play('DoMagic');
      });
}

function wizardTime2() {
  //loads wizard easter egg spirit using clippy.js and triggers proper speech/animations--version when user uses cheat code
    clippy.load('Merlin', function(agent) {
        agent.show();
        agent.play('Surprised');
        agent.moveTo(50,200);
        agent.speak('Oh wow--you really did come back and use the spell! Eh, cheat code, spell... same thing, here. . . . . . . .');
        agent.speak('Well, since you went to all that trouble, I\'ll give you one other really great cheat code. . . . . . .');
        agent.speak('To summon the uncommon Karoo anomaly (that lets you spawn 15 other characters and background MIDIS!) without having to wait for it to spawn by chance, type "karoofuckingrules" without quotes in the same cheat code bar where you typed summon!all. . . . . . . .');
        agent.play('Greet');
        agent.speak('That was "karoofuckingrules". Also, if you want to use summonall again without having to hear me blab on about this other cheat, just use "summonall" without quotes. Thank you for returning to CYBEROCCULTISM! I hope to see you again soon--keep checking back, I add new things all the time! . . . . . . .');
        agent.play('Pleased');
        agent.speak('Remember... as above, so below. Let\'s reprogram reality together, motherfucker! Double click me for random animations, and enjoy your continued time at CYBEROCCULTISM! . . . . . . .');
        agent.play('DoMagic');
      });
}

function wizardTime3() {
  //loads wizard easter egg but without either speech. used when user uses cheat code to load full site including wizard to spare them the spiel.
    clippy.load('Merlin', function(agent) {
        agent.show();
        agent.play('Surprised');
        agent.moveTo(50,200);
        agent.play('Wave');
      });
}

function reset() {
  //resets position of all spirits
  for (let i = 0; i < document.images.length; i++){
  if (document.images[i].src != "https://cyberoccultism.online/images/gill.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2.gif" && document.images[i].src != "https://cyberoccultism.online/images/rgsgsddfs.png" && document.images[i].src != "https://cyberoccultism.online/images/gillp.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill2p.gif" && document.images[i].src != "https://cyberoccultism.online/images/gill-stancep.gif"){
  document.images[i].style.transform = "none";
  document.images[i].removeAttribute('data-x');
  document.images[i].removeAttribute('data-y');
  }
 }
}

function updateValue(e) {
  //processes cheat codes and activates the proper responses to them
  if (document.getElementById("input").value == "summonall" && loadedall == false){
      document.getElementById("input").value = "CODE ACCEPTED!!!";
    if (sfxon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      }
    summonAll();
    loadedall = true;
    }
  else if (document.getElementById("input").value == "summon!all" && loadedall == false){
    document.getElementById("input").value = "CODE ACCEPTED!!!";
    if (sfxon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      }
    summonAll2();
    loadedall = true;
    }
  else if (document.getElementById("input").value == "aurelia"){
alert("Press the A key on your keyboard on any page!");
      document.getElementById("input").value = "PRESS 'A' ON ANY PAGE TO TOGGLE!";
      document.getElementById("apparition").style.display = "block";
      eastereggon = true;
    if (bgmon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      document.getElementById('bgm').src = "audio/transmission.mp3";
      bgm.load();
      bgm.play();
      }
    }
  else if (document.getElementById("input").value == "karoofuckingrules"){
      document.getElementById("input").value = "CODE ACCEPTED!!!";
    if (sfxon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      }
    karoo();
  }
  else if (document.getElementById("input").value == "vroom"){
      document.getElementById("input").value = "CODE ACCEPTED!!!";
    if (sfxon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      }
    vroom();
  }
   else if (document.getElementById("input").value == "gojira"){
      document.getElementById("input").value = "CODE ACCEPTED!!!";
    if (sfxon){
      document.getElementById('sfx').src = "audio/secret.mp3";
      sfx.load();
      sfx.play();
      }
    godzilla();
  }
}


document.onkeydown = function (a) {
  if (lumon && eastereggon){
    document.getElementById("apparition").style.display = "none";
    lumon= false;
  } else if (!lumon && eastereggon) {
      document.getElementById("apparition").style.display = "block";
      lumon= true;
  }
}

function bgtoggle() {
  //background gif toggle from options menu
  if (bgon == true){
    bgon = false;
    currentbg = document.body.style.backgroundImage;
    currentbgtype = document.body.style.backgroundSize;
    document.body.style.backgroundSize = "initial";
    document.body.style.backgroundImage = "none";
    document.getElementById("bgtoggle").style.display = "none";
    document.getElementById("bgtoggle2").style.display = "inline-block";
  } else {
    bgon = true;
    document.body.style.backgroundImage = currentbg;
    document.body.style.backgroundSize = currentbgtype;
    document.getElementById("bgtoggle2").style.display = "none";
    document.getElementById("bgtoggle").style.display = "inline-block";
  }
}

function optionsToggle() {
  //minimize/maximize toggle for the options window
  if (optionstoggle){
    document.getElementById("fakewindow").style.display = "none";
    if (pinkCheck){
    document.getElementById("fakeminimize").src = "images/maximizep.png";
    } else {
    document.getElementById("fakeminimize").src = "images/maximize.png";
      }
    optionstoggle = false;
  } else {
    document.getElementById("fakewindow").style.display = "block";
        if (pinkCheck){
    document.getElementById("fakeminimize").src = "images/minimizep.png";
    } else {
    document.getElementById("fakeminimize").src = "images/minimize.png";
      }
    optionstoggle = true;
  }
}
