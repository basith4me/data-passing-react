import React from "react";

export default function ConfirmPage({ formData1, formData2 }) {
  return (
    <div>
      <h2>Details</h2>
      <p>Name: {formData1.name}</p>
      <p>Age: {formData1.age}</p>
      <p>Job: {formData1.job}</p>
      <p>Phone Number: {formData2.phoneNo}</p>
      <p>Address: {formData2.address}</p>
      <p>Email: {formData1.email}</p>
    </div>
  );
}
