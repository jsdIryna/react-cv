import { useEffect } from "react";
import "containers/projects/game/game.scss";

const Game = () => {
  useEffect(() => {
    const startButton = document.getElementById("start");
    const game = document.getElementById("game");
    const timeHeader = document.getElementById("time-header");
    const resultHeader = document.getElementById("result-header");
    const resultSpan = document.getElementById("result");
    const timeSpan = document.getElementById("time");
    const gameTimeInput = document.getElementById("game-time");

    function show(el) {
      el.classList.remove("hide");
    }

    function hide(el) {
      el.classList.add("hide");
    }

    let score = 0;
    let isGameStarted = false;

    startButton.addEventListener("click", startGame);
    game.addEventListener("click", handleBoxClick);
    gameTimeInput.addEventListener("input", setGameTime);

    function startGame() {
      score = 0;
      setGameTime();
      gameTimeInput.setAttribute("disabled", "true");
      isGameStarted = true;
      game.style.backgroundColor = "#fff";
      startButton.classList.add("hide");

      let interval = setInterval(function () {
        let time = parseFloat(timeSpan.textContent);

        if (time <= 0) {
          clearInterval(interval);
          endGame();
        } else {
          timeSpan.textContent = (time - 0.1).toFixed(1);
        }
      }, 100);

      renderBox();
    }

    function setGameScore() {
      resultSpan.textContent = score.toString();
    }

    function setGameTime() {
      let time = +gameTimeInput.value;
      timeSpan.textContent = time.toFixed(1);
      show(timeHeader);
      hide(resultHeader);
    }

    function endGame() {
      isGameStarted = false;
      setGameScore();
      gameTimeInput.removeAttribute("disabled");
      show(startButton);
      game.innerHTML = "";
      game.style.backgroundColor = "#ccc";
      hide(timeHeader);
      show(resultHeader);
    }

    function handleBoxClick(event) {
      if (!isGameStarted) {
        return;
      }
      if (event.target.dataset.box) {
        score++;
        renderBox();
      }
    }

    function getRandomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      return `rgb(${r},${g},${b})`;
    }

    function renderBox() {
      game.innerHTML = "";
      let box = document.createElement("div");
      let boxSize = getRandom(30, 100);
      let gameSize = game.getBoundingClientRect();
      let maxTop = gameSize.height - boxSize;
      let maxLeft = gameSize.width - boxSize;

      box.style.height = box.style.width = boxSize + "px";
      box.style.position = "absolute";
      box.style.backgroundColor = getRandomColor();
      box.style.top = getRandom(0, maxTop) + "px";
      box.style.left = getRandom(0, maxLeft) + "px";
      box.style.cursor = "pointer";
      box.setAttribute("data-box", "true");

      game.insertAdjacentElement("afterbegin", box);
    }

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }, []);

  return (
    <div className="app_wrapper">
      <div className="app">
        <div className="app__header">
          <h1 id="time-header">
            Game time: <span id="time">5.0</span>
          </h1>
          <h1 id="result-header" className="hide">
            Your result: <span id="result"></span>
          </h1>
        </div>
        <div className="app__content">
          <button className="btn" id="start">
            Start
          </button>
          <div className="game" id="game"></div>
        </div>
        <div className="app__footer">
          <div className="input">
            <label htmlFor="game-time">Game time, (sec)</label>
            <input
              type="number"
              id="game-time"
              min="5"
              step="1"
              defaultValue="5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Game;
