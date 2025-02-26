import React from "react";
import MyInitiativesList from "../components/MyInitiativesList";

function MyInitiatives({ joinedInitiatives }) {
  return (
    <section>
      <h2>Мої ініціативи</h2>
      {joinedInitiatives.length === 0 ? (
        <p className="empty-message">Ви ще не долучились до жодної ініціативи.</p>
      ) : (
        <div className="grid-container">
          {joinedInitiatives.map((initiative) => (
            <MyInitiativesList key={initiative.id} initiative={initiative} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MyInitiatives;
