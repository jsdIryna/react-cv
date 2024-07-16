// import { useEffect } from "react";
// import { Wrapper } from "components/wrapper/wrapper";

// import Calc from "assets/main-icons/calculator.png";

// import "containers/projects/calculator/calculator.scss";

// const Calculator = () => {
//   let a = "";
//   let b = "";
//   let sign = "";
//   let finish = false;

//   const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
//   const action = ["-", "+", "X", "/", "%", "+/-"];

//   useEffect(() => {
//     const out = document.getElementById("screen");
//     const clearAll = () => {
//       a = "";
//       b = "";
//       sign = "";
//       finish = false;
//       out.textContent = 0;
//     };

//     document.getElementById("ac").onclick = clearAll;

//     document.querySelector(".buttons").onclick = (event) => {
//       if (!event.target.classList.contains("btn")) return;
//       if (event.target.classList.contains("ac")) return;

//       const key = event.target.textContent;

//       if (digit.includes(key)) {
//         if (b === "" && sign === "") {
//           if (a.length === 6) return;
//           a += key;
//           out.textContent = a;
//         } else if (a !== "" && sign !== "" && finish) {
//           b = key;
//           finish = false;
//           out.textContent = b;
//         } else {
//           if (b.length === 6) return;
//           b += key;
//           out.textContent = b;
//         }
//         return;
//       }

//       if (action.includes(key)) {
//         sign = key;
//         out.textContent = sign;
//         if (key === "%") {
//           if (b === "") {
//             a = a / 100;
//             out.textContent = a;
//           } else {
//             b = (a * b) / 100;
//             out.textContent = b;
//           }
//         }
//         if (key === "+/-") {
//           if (b === "") {
//             a = parseFloat(a) * -1;
//             out.textContent = a;
//           } else if (b !== "") {
//             b = parseFloat(b) * -1;
//             out.textContent = b;
//           }
//         }
//         return;
//       }

//       if (key === "=") {
//         if (b === "") b = a;
//         switch (sign) {
//           case "+":
//             a = +a + +b;
//             break;
//           case "-":
//             a = a - b;
//             break;
//           case "X":
//             a = a * b;
//             break;
//           case "/":
//             if (b === "0") {
//               out.textContent = "Error";
//               a = "";
//               b = "";
//               sign = "";
//               return;
//             }
//             a = a / b;
//             break;
//         }
//         finish = true;
//         out.textContent = a;
//       }
//     };
//   }, []);

//   return (
//     <Wrapper>
//       <div className="wrapper">
//         <main>
//           <div className="calc">
//             <div className="container calc">
//               <div className="calc_row">
//                 <div className="calc__content">
//                   <div className="phone_with_calc">
//                     <img src={Calc} alt="Calculator" />
//                     <div className="absolute_block">
//                       <div className="calc_screen">
//                         <p id="screen">0</p>
//                       </div>
//                       <div className="buttons">
//                         <button id="ac" className="btn ac bg-grey">
//                           ac
//                         </button>
//                         <button className="btn plus-minus bg-grey">+/-</button>
//                         <button className="btn percent bg-grey">%</button>
//                         <button className="btn division bg-orange">/</button>

//                         <button className="btn seven">7</button>
//                         <button className="btn eigth">8</button>
//                         <button className="btn nine">9</button>
//                         <button className="btn myltiply bg-orange">X</button>

//                         <button className="btn four">4</button>
//                         <button className="btn five">5</button>
//                         <button className="btn six">6</button>
//                         <button className="btn minus bg-orange">-</button>

//                         <button className="btn one">1</button>
//                         <button className="btn two">2</button>
//                         <button className="btn three">3</button>
//                         <button className="btn plus bg-orange">+</button>

//                         <button className="btn zero">0</button>
//                         <button className="btn dot">.</button>
//                         <button className="btn equal bg-orange">=</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="calc_descr">
//                     <div className="descr_text">
//                       <div className="go_count">Let's count?</div>
//                       <div className="calc_for_you">
//                         Calculator at your service :)
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         <hr className="horizontal_line"></hr>
//       </div>
//     </Wrapper>
//   );
// };

// export default Calculator;

import { useEffect, useState } from "react";
import { Wrapper } from "components/wrapper/wrapper";
import Calc from "assets/main-icons/calculator.png";
import "containers/projects/calculator/calculator.scss";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState(""); //текущее вводиммое число
  const [previousNumber, setPreviousNumber] = useState(null); //предыдущее число для вычислений
  const [operator, setOperator] = useState(null); // текщий оператор для вычислений
  const [output, setOutput] = useState("0"); // текущее значение для отображения на экран

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const action = ["-", "+", "X", "/", "%", "+/-"];

  const clearAll = () => {
    setCurrentNumber("");
    setPreviousNumber(null);
    setOperator(null);
    setOutput("0");
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

  const handleButtonClick = (key) => {
    if (digit.includes(key)) {
      setCurrentNumber(currentNumber + key);
      setOutput(currentNumber + key);
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
        } else {
          setPreviousNumber(parseFloat(currentNumber));
        }
        setCurrentNumber("");
        setOperator(key);
      }
      if (key === "%") {
        const number = parseFloat(currentNumber) || 0;
        setOutput(number / 100);
        setCurrentNumber((number / 100).toString());
      } else if (key === "+/-") {
        const number = parseFloat(currentNumber) || 0;
        setOutput(number * -1);
        setCurrentNumber((number * -1).toString());
      }
    } else if (key === "=") {
      if (currentNumber && operator && previousNumber !== null) {
        const result = calculate(
          parseFloat(previousNumber),
          parseFloat(currentNumber),
          operator
        );
        setOutput(result);
        setCurrentNumber(result.toString());
        setPreviousNumber(null);
        setOperator(null);
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
