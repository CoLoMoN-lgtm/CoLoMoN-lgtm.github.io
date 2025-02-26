document.addEventListener("DOMContentLoaded", function () {
    let initiatives = [
        { name: "Допомога бездомним", date: "2025-03-15", place: "Київ, вул. Хрещатик, 20", volunteersNeeded: 10, description: "Надаємо харчування та одяг нужденним." },
        { name: "Прибирання парку", date: "2025-03-20", place: "Львів, парк 'Знесіння'", volunteersNeeded: 15, description: "Організовуємо прибирання території та посадку дерев." },
        { name: "Збір допомоги для дитячих будинків", date: "2025-03-25", place: "Одеса, вул. Дерибасівська, 10", volunteersNeeded: 20, description: "Збираємо речі першої необхідності, іграшки та книжки для дітей." },
        { name: "Екологічна акція 'Чисте місто'", date: "2025-03-30", place: "Харків, парк ім. Шевченка", volunteersNeeded: 30, description: "Прибираємо сміття та сортуємо відходи у паркових зонах." }
    ];

    let today = new Date();
    let initiativesContainer = document.getElementById("initiatives-list");
    let myInitiativesContainer = document.getElementById("my-initiatives-list");

    let i = 0;
    while (i < initiatives.length) {
        let initiativeDate = new Date(initiatives[i].date);
        if (initiativeDate >= today) { 
            let initiativeDiv = document.createElement("div");
            initiativeDiv.classList.add("initiative");
            initiativeDiv.innerHTML = `
                <h3>${initiatives[i].name}</h3>
                <p><strong>Дата:</strong> ${initiatives[i].date}</p>
                <p><strong>Місце:</strong> ${initiatives[i].place}</p>
                <p><strong>Потрібно волонтерів:</strong> <span class="volunteer-count">${initiatives[i].volunteersNeeded}</span></p>
                <p>${initiatives[i].description}</p>
                <button class="join-btn">Приєднатися</button>
            `;
            initiativesContainer.appendChild(initiativeDiv);
        }
        i++;
    }

    document.querySelectorAll(".join-btn").forEach(button => {
        button.addEventListener("click", function () {
            let parent = this.parentElement;
            let name = parent.querySelector("h3").textContent;
            let date = parent.querySelector("p:nth-child(2)").textContent.replace("Дата: ", "");
            let place = parent.querySelector("p:nth-child(3)").textContent.replace("Місце: ", "");
            let description = parent.querySelector("p:nth-child(5)").textContent;
            let volunteerCountSpan = parent.querySelector(".volunteer-count");
            let volunteersLeft = parseInt(volunteerCountSpan.textContent);

            if (volunteersLeft > 0) {
                volunteersLeft--;
                volunteerCountSpan.textContent = volunteersLeft;

                let newInitiative = document.createElement("div");
                newInitiative.classList.add("initiative");
                newInitiative.innerHTML = `
                    <h3>${name}</h3>
                    <p><strong>Дата:</strong> ${date}</p>
                    <p><strong>Місце:</strong> ${place}</p>
                    <p>${description}</p>
                `;
                myInitiativesContainer.appendChild(newInitiative);

                this.textContent = "Ви приєдналися";
                this.disabled = true;
            }
        });
    });

    // Функція для перемикання сторінок
    function showSection(sectionId) {
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    showSection("initiatives"); // Відображаємо розділ "Доступні ініціативи" при завантаженні сторінки
});
