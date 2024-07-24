document.addEventListener("DOMContentLoaded", function () {
  const $ = (arg) => document.querySelector(arg);

  const musicListElement = $("#music-list");
  const musicPlayingElement = $("#music-playing");
  const btnElement = $("#button");

  const musicList = [
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

  const lastFourIds = [];

  let currentMusic = null;

  musicList.map((item) => {
    const musicItem = document.createElement("li");
    musicItem.textContent = `${item.name} - ${item.autors.join(", ")}`;
    musicItem.setAttribute("id", `song-${item.id}`);
    musicItem.setAttribute("class", "");
    musicListElement.appendChild(musicItem);
  });

  btnElement.addEventListener("click", () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * musicList.length + 1);
      currentMusic = musicList.find((item) => item.id === randomIndex);
    } while (lastFourIds.includes(currentMusic.id));

    if (lastFourIds.length === 4) {
      lastFourIds.shift();
    }

    lastFourIds.push(currentMusic.id);

    musicPlayingElement.textContent = `${
      currentMusic.name
    } - ${currentMusic.autors.join(", ")}`;

    let lastMusic =
      lastFourIds.length > 1 ? lastFourIds[lastFourIds.length - 2] : 0;

    if (lastMusic !== 0) {
      $(`#song-${lastMusic}`).classList.remove("selectedMusic");
    }

    $(`#song-${currentMusic.id}`).classList.add("selectedMusic");
  });
});
