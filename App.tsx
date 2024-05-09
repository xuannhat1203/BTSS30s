// App.tsx
import React, { useState } from "react";
import Jobs from "./components/Jobs";
import "./BT08.css";

export default function App() {
  const [valueInput, setValueInput] = useState("");
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs") || "[]"));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const handleAddJob = () => {
    const newJob = {
      name: valueInput,
      id: Math.random() * 10000,
      status: false,
    };
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    setValueInput("");
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <h3 id="listJob">Danh sách công việc</h3>
      <div id="inputButton">
        <input
          id="inputText"
          value={valueInput}
          placeholder="Nhập tên công việc"
          onChange={handleInput}
          type="text"
          className="input-field"
          style={{ color: "black" }}
        />
        <button id="addJob" onClick={handleAddJob}>
          Thêm
        </button>
      </div>
      <Jobs jobs={jobs} />
     </div>
  );
}
