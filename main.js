function display(e) {
  var string = document.getElementById("display").innerHTML;
  
  if (e == "CLS") {
    document.getElementById("display").innerHTML = "0";
  }
  
  else if (e == "EQUALS") {
    document.getElementById("display").innerHTML = eval(string);
    return;
  }
  
  else if (string == "0" && (e == "/" || e == "*" || e == "-" || e == "+")) {
    return;
  }
  
  else if ((string.substr(-1) == "/" || string.substr(-1) == "*" || string.substr(-1) == "-" || string.substr(-1) == "+") && (e == "/" || e == "*" || e == "-" || e == "+")) {    
    if (e == "/" || e == "*" || e == "+" || e == "-") {
      if (string.substr(-1) == "/" || string.substr(-1) == "*" || string.substr(-1) == "-" || string.substr(-1) == "+") {
        string = string.replace(string.substr(-1), e);
        document.getElementById("display").innerHTML = string;
      }
      else {
        document.getElementById("display").innerHTML = e;
      }
    }
    
    return;
  }
  
  else if (string == "0") {
    if (e == ".") {
      return;
    }
    
    document.getElementById("display").innerHTML = e;
    return;
  }
  
  else if (e == ".") {
    if (string.substr(-1) == ".") {
      return;
    }
    
    var list = string.split(".");
    document.getElementById("XXX").innerHTML = list;
    /*alert(list + " " + list.length);*/
    
    if (list.length > 1 && list[list.length - 1].length < 3) {
      return;
    }
    
    document.getElementById("display").innerHTML = string + e;
    return;
  }
  
    else if (e == '.' && (string.substr(-1) == "." || string == 0)) {
    return;
  }
  
  else {
    document.getElementById("display").innerHTML = string + e;
    return;
  }
}

function Calculator() {
  return (
  <div id="wrapper">
      <div id="display">0</div>
      
      <button id="clear" onClick={() => this.display("CLS")}>AC</button>
      <button id="divide" onClick={() => this.display("/")}>/</button>
      <button id="multiply" onClick={() => this.display("*")}>X</button>
      
      <button id="one" onClick={() => this.display(1)}>1</button>
      <button id="two" onClick={() => this.display(2)}>2</button>
      <button id="three" onClick={() => this.display(3)}>3</button>
      <button id="subtract" onClick={() => this.display("-")}>-</button>
      
      <button id="four" onClick={() => this.display(4)}>4</button>
      <button id="five" onClick={() => this.display(5)}>5</button>
      <button id="six" onClick={() => this.display(6)}>6</button>
      <button id="add" onClick={() => this.display("+")}>+</button>
      
      <button id="seven" onClick={() => this.display(7)}>7</button>
      <button id="eight" onClick={() => this.display(8)}>8</button>
      <button id="nine" onClick={() => this.display(9)}>9</button>
      
      <button id="zero" onClick={() => this.display(0)}>0</button>
      <button id="decimal" onClick={() => this.display(".")}>.</button>
      <button id="equals" onClick={() => this.display("EQUALS")}>=</button>   
  </div>
    
  );
}

ReactDOM.render(<Calculator />, document.getElementById('App'));
