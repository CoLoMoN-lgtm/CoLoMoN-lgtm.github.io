import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

function InitiativeCard({ initiative, setJoinedInitiatives }) {
  const [showForm, setShowForm] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = (userData) => {
    setJoined(true);
    setJoinedInitiatives((prev) => [...prev, { ...initiative, userData }]);
  };

  return (
    <div className="initiative">
      <h3>{initiative.name}</h3>
      <p><strong>Дата:</strong> {initiative.date}</p>
      <p><strong>Місце:</strong> {initiative.place}</p>
      <p><strong>Потрібно волонтерів:</strong> {initiative.volunteersNeeded}</p>
      <p>{initiative.description}</p>
      <button onClick={() => setShowForm(true)} disabled={joined}>
        {joined ? "Ви приєдналися" : "Приєднатися"}
      </button>
      {showForm && !joined && <RegisterForm onSubmit={handleJoin} />}
    </div>
  );
}

export default InitiativeCard;
