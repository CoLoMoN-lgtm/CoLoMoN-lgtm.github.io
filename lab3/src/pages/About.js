import React from "react";
import "../App.css";

function About() {
  return (
    <section className="about-container">
      <h2>Про нас</h2>
      <p>
        Ми — платформа волонтерських ініціатив, яка об’єднує людей, готових змінювати світ
        на краще. Наша місія — допомогти знайти ініціативи, де кожен може зробити внесок у
        суспільство, покращити екологію та підтримати тих, хто цього потребує.
      </p>

      <div className="image-gallery">
        <div className="image-card">
          <img src="/images/cleaning_park.jpg" alt="Прибирання парку" />
          <p>Прибираємо парки та громадські місця</p>
        </div>
        <div className="image-card">
          <img src="/images/tree_planting.jpg" alt="Посадка дерев" />
          <p>Саджаємо дерева для кращого майбутнього</p>
        </div>
        <div className="image-card">
          <img src="/images/helping_people.jpg" alt="Допомога людям" />
          <p>Підтримуємо малозабезпечених і нужденних</p>
        </div>
      </div>

      <p>
        Ми віримо, що спільними зусиллями можемо зробити цей світ кращим! Приєднуйтесь до нас,
        знаходьте цікаві ініціативи та робіть добрі справи разом.
      </p>
    </section>
  );
}

export default About;
