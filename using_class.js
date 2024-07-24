document.addEventListener("DOMContentLoaded", function () {
  class Jukebox {
    songs = [
      {
        id: 1,
        name: "Gaga",
        autors: ["J Balvin", "SAIKO"],
      },
      {
        id: 2,
        name: "Dákiti",
        autors: ["Bad Bunny", "Jhay Cortez"],
      },
      {
        id: 3,
        name: "Hawái",
        autors: ["Maluma"],
      },
      {
        id: 4,
        name: "Vida de rico",
        autors: ["Camilo"],
      },
      {
        id: 5,
        name: "Bichota",
        autors: ["Karol G"],
      },
      {
        id: 6,
        name: "Dynamite",
        autors: ["BTS"],
      },
      {
        id: 7,
        name: "Blinding Lights",
        autors: ["The Weeknd"],
      },
      {
        id: 8,
        name: "Dance Monkey",
        autors: ["Tones and I"],
      },
      {
        id: 9,
        name: "Roses",
        autors: ["SAINt JHN"],
      },
      {
        id: 10,
        name: "Watermelon Sugar",
        autors: ["Harry Styles"],
      },
    ];

    queue = [];

    play() {
      if (this.queue.length >= 4) {
        let firstSongPlayed = this.queue.shift();
        this.songs.push(firstSongPlayed);
      }

      let indiceRandom = Math.floor(Math.random() * this.songs.length);
      console.log(indiceRandom);
      let song = this.songs.splice(indiceRandom, 1)[0];
      this.queue.push(song);
      return song;
    }
  }

  const jukebox = new Jukebox();

  const songsList = [...jukebox.songs];

  const $ = (arg) => document.querySelector(arg);

  const musicListElement = $("#music-list");
  const musicPlayingElement = $("#music-playing");
  const btnElement = $("#button");

  songsList.map((item) => {
    const musicItem = document.createElement("li");
    musicItem.textContent = `${item.name} - ${item.autors.join(", ")}`;
    musicItem.setAttribute("id", `song-${item.id}`);
    musicItem.setAttribute("class", "");
    musicListElement.appendChild(musicItem);
  });

  btnElement.addEventListener("click", () => {
    let currentMusic = jukebox.play();
    let queue = jukebox.queue;

    musicPlayingElement.textContent = `${
      currentMusic.name
    } - ${currentMusic.autors.join(", ")}`;

    let lastMusic = queue.length > 1 ? queue[queue.length - 2] : 0;

    if (lastMusic !== 0) {
      $(`#song-${lastMusic.id}`).classList.remove("selectedMusic");
    }

    $(`#song-${currentMusic.id}`).classList.add("selectedMusic");
  });
});
