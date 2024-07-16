import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormOne({ onNext }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");

  const handleNext = () => {
    onNext({ name, age, job });
  };
  return (
    <div>
      <h1 style={{ color: "blue" }}></h1>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={job}
        placeholder="Job"
        onChange={(e) => setJob(e.target.value)}
      />
      <Link to={"/form2"}>
        <button onClick={handleNext}>Next</button>
      </Link>
    </div>
  );
}
