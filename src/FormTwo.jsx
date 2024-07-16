import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form2({ onSave }) {
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    onSave({ phoneNo, address, email });
  };
  return (
    <div>
      <h1>Form two</h1>
      <input
        type="text"
        value={phoneNo}
        placeholder="Phone Number"
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <input
        type="text"
        value={address}
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Phone Number"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link to={"/confirm"}>
        <button onClick={handleSave}>Save</button>
      </Link>
    </div>
  );
}
