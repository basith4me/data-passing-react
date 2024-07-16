import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import ConfirmPage from "./ConfirmPage";

function App() {
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleForm1Submit = (data) => {
    setFormData1(data);
  };
  const handleForm2Save = (data) => {
    setFormData2(data);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormOne onNext={handleForm1Submit} />} />
          <Route path="/form2" element={<FormTwo onSave={handleForm2Save} />} />
          <Route
            path="/confirm"
            element={
              <ConfirmPage formData1={formData1} formData2={formData2} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
