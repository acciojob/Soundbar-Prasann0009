//your JS code here. If required.
function playmusic(filename)
{
  const audio = document.getElementById("audio");
  audio.src = `sounds/${filename}.mp3`;
  audio.play();
}

function stopSound()
{
  const audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
}