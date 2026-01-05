let currentView = "month";

function setView(view) {
    currentView = view;
    render();
}

function render() {
    const cal = document.getElementById("calendar");
    cal.innerHTML = "";

    const today = new Date();

    if (currentView === "month") {
        for (let i = 1; i <= 30; i++) {
            const d = document.createElement("div");
            d.className = "day";
            d.innerText = "Day " + i;
            d.onclick = () => openDay(i);
            cal.appendChild(d);
        }
    }

    if (currentView === "day") {
        openDay(today.getDate());
    }
}

function openDay(day) {
    window.location.href = `pages/day.html?day=${day}`;
}

render();
