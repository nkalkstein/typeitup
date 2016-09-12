import Song from './song';

class GameView {
  constructor(song) {
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.song = song;
  }

  startSong () {
    const body = document.querySelector("body");
    const audio = document.createElement('audio');
    audio.src = `${this.song.songPath}`;
    audio.controls = true;
    audio.autoplay = true;
    body.appendChild(audio);

    window.setInterval( () => {
      this.hAdjust += 1;
    }, this.hAdjustInterval);
  }

  draw() {
    const baseImage = new Image();
    baseImage.onload = () => {
      this.ctx.drawImage(baseImage, 0, 0);
      this.song.drawText();
    };
    baseImage.src = 'assets/background.jpg';
  }
}

export default GameView;