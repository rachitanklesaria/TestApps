import './App.css'
import { useState } from 'react'

function App() {
  var [display, changeDisplay] = useState(false);
  var [stateData, updateStateData] = useState([""]);
  var data: string[] = [];
  var size = 6;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  function ranNum(max: number) {
    return Math.floor(Math.random() * (max));
  }

  var createData = function (num: number) {
    for (let i = 0; i < num; i++) {
      let str = "";
      for (let j = 0; j < size; j++) {
        str += chars.charAt(ranNum(chars.length));
      }
      data[i] = str;
    }
    localStorage.setItem("data", JSON.stringify(data));
    data = [];
  }

  function clearData() {
    changeDisplay(false);
    updateStateData([""]);
    localStorage.removeItem("data");
  }

  function updateData(num: number) {
    var str_data = localStorage.getItem("data");
    if (str_data !== null) {
      data = JSON.parse(str_data);
      if (num > data.length) {
        num = data.length;
      }
      for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = 0; j < size; j++) {
          str += chars.charAt(ranNum(chars.length));
        }
        data[i] = str;
      }
      localStorage.setItem("data", JSON.stringify(data));
      data = [];
    }
  }

  function displayData() {
    changeDisplay(true);
    var str_data = localStorage.getItem("data");
    if (str_data) {
      updateStateData(JSON.parse(str_data));
    }
  }


  return (<>
    <header>
      <h1>React Test Application</h1>
    </header>
    <nav>
      <span className="nav">Test Cases: </span>
      <button onClick={() => { createData(1000) }}>Create 1000</button>
      <button onClick={() => { createData(5000) }}>Create 5000</button>
      <button onClick={() => { createData(10000) }}>Create 10000</button>
      <button onClick={() => { createData(50000) }}>Create 50000</button>
      <button onClick={() => { updateData(1000) }}>Update 1000</button>
      <button onClick={() => { updateData(5000) }}>Update 5000</button>
      <button onClick={() => { updateData(10000) }}>Update 10000</button>
      <button onClick={() => { updateData(50000) }}>Update 50000</button>
      <button onClick={() => { displayData() }}>Display Records</button>
      <button onClick={() => { clearData() }}>Delete Records</button>
    </nav>
    <div className="op">
      {display && stateData.map((item: string, index: number) => <span key={index}>{item}</span>)}
    </div>
  </>
  )
}

export default App
