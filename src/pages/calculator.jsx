import React from "react";
import "../css/calculator.css";

function Calculator() {
  const [result, setresult] = React.useState("");

  const clearfn = () => {
    let resultarray = (result).split("");
   // let resultarray = String(result).split("");
    if (resultarray.length > 0) {
      resultarray.pop();
    }
    setresult(resultarray.join(""));
  };
  return (
    <div className="Alpha">
      <h1 className="h2">Calculator</h1>
      <div className="textbox">
        <input type="text" id="text" value={result} maxlenght="10" />
      </div>
      <div className="beta">
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "1")}
        >
          1
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "2")}
        >
          2
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "3")}
        >
          3
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "+")}
        >
          +
        </button>
      </div>
      <div className="Beta">
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "4")}
        >
          4
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "5")}
        >
          5
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "6")}
        >
          6
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "-")}
        >
          -
        </button>
      </div>
      <div className="Beta">
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "7")}
        >
          7
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "8")}
        >
          8
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "9")}
        >
          9
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + "*")}
        >
          X
        </button>
      </div>
      <div className="Beta">
        <button className="gamma" type="button" onClick={() => setresult("")}>
          AC
        </button>
        <button className="gamma" type="button" onClick={() => clearfn()}>
          Clr
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(String(eval(result)))}
        >
          =
        </button>
        <button
          className="gamma"
          type="button"
          onClick={() => setresult(result + ".")}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
