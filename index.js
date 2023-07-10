
window.addEventListener("keydown", function(e){
    let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    let set = document.querySelector(`.set[data-key = "${e.keyCode}"]`);
    if(audio){
        audio.play();
        audio.currentTime = 0;
        set.classList.add("pressed");
    }
    return
  })



