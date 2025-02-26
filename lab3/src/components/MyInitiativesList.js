import React from "react";

function MyInitiativesList({ initiative }) {
  return (
    <div className="initiative">
      <h3>{initiative.name}</h3>
      <p><strong>Дата:</strong> {initiative.date}</p>
      <p><strong>Місце:</strong> {initiative.place}</p>
      <p><strong>Категорія:</strong> {initiative.category}</p>
    </div>
  );
}

export default MyInitiativesList;
