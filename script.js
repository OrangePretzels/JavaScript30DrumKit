const buttons = document.querySelectorAll(".drumButton");
const audioPlayer = document.getElementById("audio-player");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const soundFile = button.getAttribute("data-sound");
    playSound(soundFile);
  });
});

function playSound(soundFile) {
  audioPlayer.src = soundFile;
  audioPlayer.play();
}
