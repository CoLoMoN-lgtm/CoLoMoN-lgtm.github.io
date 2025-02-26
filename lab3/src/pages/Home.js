import React, { useState } from "react";
import InitiativeCard from "../components/InitiativeCard";
import "../App.css";

const initiativesData = [
  { id: 1, name: "Допомога бездомним", date: "2025-03-15", place: "Київ", category: "Соціальна підтримка", volunteersNeeded: 10, description: "Надаємо харчування та одяг нужденним." },
  { id: 2, name: "Прибирання парку", date: "2025-03-20", place: "Львів", category: "Екологія", volunteersNeeded: 15, description: "Організовуємо прибирання території та посадку дерев." },
  { id: 3, name: "Збір допомоги для дитячих будинків", date: "2025-03-25", place: "Одеса", category: "Соціальна підтримка", volunteersNeeded: 20, description: "Збираємо речі першої необхідності, іграшки та книжки для дітей." },
  { id: 4, name: "Екологічна акція 'Чисте місто'", date: "2025-03-30", place: "Харків", category: "Екологія", volunteersNeeded: 30, description: "Прибираємо сміття та сортуємо відходи у паркових зонах." }
];

function Home({ joinedInitiatives, setJoinedInitiatives }) {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const availableInitiatives = initiativesData
    .filter(initiative => !joinedInitiatives.some(joined => joined.id === initiative.id))
    .filter(initiative => (filter ? initiative.category === filter : true))
    .sort((a, b) => {
      if (sortBy === "date") return new Date(a.date) - new Date(b.date);
      if (sortBy === "place") return a.place.localeCompare(b.place);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <section>
      <h2>Доступні ініціативи</h2>

      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Всі категорії</option>
          <option value="Екологія">Екологія</option>
          <option value="Соціальна підтримка">Соціальна підтримка</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Сортувати за датою</option>
          <option value="place">Сортувати за місцем</option>
          <option value="category">Сортувати за категорією</option>
        </select>
      </div>

      <div className="grid-container">
        {availableInitiatives.length > 0 ? (
          availableInitiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} setJoinedInitiatives={setJoinedInitiatives} />
          ))
        ) : (
          <p className="empty-message">Немає доступних ініціатив.</p>
        )}
      </div>
    </section>
  );
}

export default Home;
