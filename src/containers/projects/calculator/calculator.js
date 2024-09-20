import { useEffect, useState } from "react";
import { Wrapper } from "components/wrapper/wrapper";
import Calc from "assets/main-icons/calculator.png";
import "containers/projects/calculator/calculator.scss";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [output, setOutput] = useState("0");

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const action = ["-", "+", "X", "/", "%", "+/-"];

  const clearAll = () => {
    setCurrentNumber("");
    setPreviousNumber(null);
    setOperator(null);
    setOutput("0");
    updateFontSize("0");
  };

  const calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "X":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return a;
    }
  };

  const updateFontSize = (value) => {
    const screen = document.getElementById("screen");
    screen.classList.remove("small-font", "smaller-font");

    if (value.length > 6 && value.length <= 8) {
      screen.classList.add("small-font");
    } else if (value.length > 8) {
      screen.classList.add("smaller-font");
    }
  };

  const handleButtonClick = (key) => {
    if (digit.includes(key)) {
      if (currentNumber.length < 9) {
        const newNumber = currentNumber + key;
        setCurrentNumber(newNumber);
        setOutput(newNumber);
        updateFontSize(newNumber);
      }
    } else if (action.includes(key)) {
      if (currentNumber) {
        if (previousNumber !== null) {
          const result = calculate(
            parseFloat(previousNumber),
            parseFloat(currentNumber),
            operator
          );
          setPreviousNumber(result);
          setOutput(result);
          updateFontSize(result.toString());
        } else {
          setPreviousNumber(parseFloat(currentNumber));
        }
        setCurrentNumber("");
        setOperator(key);
      }
      if (key === "%") {
        const number = parseFloat(currentNumber) || 0;
        const result = number / 100;
        const limitedResult = result.toString().slice(0, 9);
        setOutput(limitedResult);
        setCurrentNumber(limitedResult);
        updateFontSize(limitedResult);
        setPreviousNumber(null);
        setOperator(null);
      } else if (key === "+/-") {
        const number = parseFloat(currentNumber) || 0;
        const result = number * -1;
        setOutput(result);
        setCurrentNumber(result.toString());
        updateFontSize(result.toString());
      }
    } else if (key === "=") {
      if (currentNumber && operator && previousNumber !== null) {
        const result = calculate(
          parseFloat(previousNumber),
          parseFloat(currentNumber),
          operator
        );
        setOutput(result.toString().slice(0, 9));
        setCurrentNumber(result.toString());
        setPreviousNumber(null);
        setOperator(null);
        updateFontSize(result.toString());
      }
    }
  };

  useEffect(() => {
    document.getElementById("ac").onclick = clearAll;
    document.querySelector(".buttons").onclick = (event) => {
      if (!event.target.classList.contains("btn")) return;
      if (event.target.classList.contains("ac")) return;
      const key = event.target.textContent;
      handleButtonClick(key);
    };
  }, [currentNumber, previousNumber, operator]);

  return (
    <Wrapper>
      <div className="wrapper">
        <main>
          <div className="calc">
            <div className="container calc">
              <div className="calc_row">
                <div className="calc__content">
                  <div className="phone_with_calc">
                    <img src={Calc} alt="Calculator" />
                    <div className="absolute_block">
                      <div className="calc_screen">
                        <p id="screen">{output}</p>
                      </div>
                      <div className="buttons">
                        <button id="ac" className="btn ac bg-grey">
                          ac
                        </button>
                        <button className="btn plus-minus bg-grey">+/-</button>
                        <button className="btn percent bg-grey">%</button>
                        <button className="btn division bg-orange">/</button>
                        <button className="btn seven">7</button>
                        <button className="btn eigth">8</button>
                        <button className="btn nine">9</button>
                        <button className="btn myltiply bg-orange">X</button>
                        <button className="btn four">4</button>
                        <button className="btn five">5</button>
                        <button className="btn six">6</button>
                        <button className="btn minus bg-orange">-</button>
                        <button className="btn one">1</button>
                        <button className="btn two">2</button>
                        <button className="btn three">3</button>
                        <button className="btn plus bg-orange">+</button>
                        <button className="btn zero">0</button>
                        <button className="btn dot">.</button>
                        <button className="btn equal bg-orange">=</button>
                      </div>
                    </div>
                  </div>
                  <div className="calc_descr">
                    <div className="descr_text">
                      <div className="go_count">Let's count?</div>
                      <div className="calc_for_you">
                        Calculator at your service :)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <hr className="horizontal_line"></hr>
      </div>
    </Wrapper>
  );
};

export default Calculator;
