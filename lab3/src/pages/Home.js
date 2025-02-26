import React from "react";
import InitiativeCard from "../components/InitiativeCard";
import "../App.css";

const initiativesData = [
  { id: 1, name: "Допомога бездомним", date: "2025-03-15", place: "Київ, вул. Хрещатик, 20", volunteersNeeded: 10, description: "Надаємо харчування та одяг нужденним." },
  { id: 2, name: "Прибирання парку", date: "2025-03-20", place: "Львів, парк 'Знесіння'", volunteersNeeded: 15, description: "Організовуємо прибирання території та посадку дерев." },
  { id: 3, name: "Збір допомоги для дитячих будинків", date: "2025-03-25", place: "Одеса, вул. Дерибасівська, 10", volunteersNeeded: 20, description: "Збираємо речі першої необхідності, іграшки та книжки для дітей." },
  { id: 4, name: "Екологічна акція 'Чисте місто'", date: "2025-03-30", place: "Харків, парк ім. Шевченка", volunteersNeeded: 30, description: "Прибираємо сміття та сортуємо відходи у паркових зонах." }
];

function Home({ joinedInitiatives, setJoinedInitiatives }) {
  const availableInitiatives = initiativesData.filter(
    (initiative) => !joinedInitiatives.some((joined) => joined.id === initiative.id)
  );

  return (
    <section>
      <h2>Доступні ініціативи</h2>
      <div className="grid-container">
        {availableInitiatives.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} setJoinedInitiatives={setJoinedInitiatives} />
        ))}
      </div>
    </section>
  );
}

export default Home;
