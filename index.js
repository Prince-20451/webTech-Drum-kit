// Detecting button press
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
}

// Add event listener for drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Detecting key press
document.addEventListener("keypress", function(event) {
  playSound(event.key);
});

// Function to play sound
function playSound(key) {
  let soundFile;
  switch (key) {
    // Drum sounds
    case "w":
      soundFile = 'drum_sounds/tom-1.mp3';
      break;
    case "a":
      soundFile = 'drum_sounds/tom-2.mp3';
      break;
    case "s":
      soundFile = 'drum_sounds/tom-3.mp3';
      break;
    case "d":
      soundFile = 'drum_sounds/tom-4.mp3';
      break;
    case "j":
      soundFile = 'drum_sounds/tom5.mp3';
      break;
    case "k":
      soundFile = 'drum_sounds/tom6.mp3';
      break;
    case "l":
      soundFile = 'drum_sounds/tom7.mp3';
      break;

    // Piano sounds
    case "z":
      soundFile = 'piano_sounds/sound1.mp3'; // Replace with actual sound file path
      break;
    case "x":
      soundFile = 'piano_sounds/sound2.mp3'; // Replace with actual sound file path
      break;
    case "c":
      soundFile = 'piano_sounds/sound3.mp3'; // Replace with actual sound file path
      break;
    case "v":
      soundFile = 'piano_sounds/sound4.mp3'; // Replace with actual sound file path
      break;
    case "b":
      soundFile = 'piano_sounds/sound5.mp3'; // Replace with actual sound file path
      break;
    // case "n":
    //   soundFile = 'piano_sounds/sound6.mp3'; // Replace with actual sound file path
    //   break;
    // case "m":
    //   soundFile = 'piano_sounds/sound7.mp3'; // Replace with actual sound file path
    //   break;

    default:
      return; // Exit if no valid key is pressed
  }

  // Play sound if a valid sound file is defined
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
    animateKey(key); // Call animation function
  }
}

// Function to handle the animation effect
function animateKey(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }
}

// Event listener for piano key clicks
const pianoKeys = document.querySelectorAll(".key");
pianoKeys.forEach((key) => {
  key.addEventListener("click", function() {
    playSound(this.classList[0]); // Use the class name (z, x, etc.) to play sound
  });
});

// Event listener for keyboard presses
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();
  animateKey(key); // Animate corresponding piano key on keyboard press
});



