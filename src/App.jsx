import React, { useState } from "react";
import "./App.css";

const expansionJointData = {
  "1/2": { axial: "3/8\"", angle: "14°", compression: "–", extension: "–", misalignment: "–" },
  "3/4": { axial: "1/2\"", angle: "14°", compression: "190 lb/in", extension: "82 lb/in", misalignment: "96 lb/in" },
  "1": { axial: "1/2\"", angle: "14°", compression: "130 lb/in", extension: "130 lb/in", misalignment: "260 lb/in" },
  "1 1/2": { axial: "7/8\"", angle: "14°", compression: "84 lb/in", extension: "66 lb/in", misalignment: "108 lb/in" },
  "2": { axial: "1 3/32\"", angle: "14°", compression: "69 lb/in", extension: "76 lb/in", misalignment: "109 lb/in" },
  "3": { axial: "1 1/2\"", angle: "14°", compression: "124 lb/in", extension: "125 lb/in", misalignment: "194 lb/in" },
  "4": { axial: "2\"", angle: "14°", compression: "320 lb/in", extension: "210 lb/in", misalignment: "324 lb/in" }
};

function App() {
  const [section, setSection] = useState("");
  const [selectedSize, setSelectedSize] = useState("1");
  const selectedData = expansionJointData[selectedSize];

  return (
    <div className="App" dir="rtl">
      <h1>Combe Pipe Guide</h1>
      <div className="menu">
        <button onClick={() => setSection("installation")}>📐 התקנת אביזרים</button>
        <button onClick={() => setSection("testing")}>🧪 מערך טסטים</button>
      </div>

      {section === "installation" && (
        <div>
          <h2>התקנת אביזרים</h2>
          <ul>
            <li>כללי אצבע להתקנת צנרת</li>
            <li>
              התקנת Expansion Joint:
              <ul>
                <li>התקנה במצב נייטרלי – לא מכווץ ולא מתוח</li>
                <li>מרחב תנועה</li>
                <li>שימוש בתומכות</li>
                <li>הידוק לפי סדר כוכב</li>
              </ul>
              <div>
                <label>בחר קוטר:</label>
                <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                  {Object.keys(expansionJointData).map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <div>
                  <p><strong>תנועה אקסיאלית:</strong> {selectedData.axial}</p>
                  <p><strong>זווית:</strong> {selectedData.angle}</p>
                  <p><strong>כוח דחיסה:</strong> {selectedData.compression}</p>
                  <p><strong>כוח מתיחה:</strong> {selectedData.extension}</p>
                  <p><strong>כוח תזוזה צידית:</strong> {selectedData.misalignment}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
