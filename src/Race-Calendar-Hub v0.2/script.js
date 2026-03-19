document.addEventListener("DOMContentLoaded", () => {
  if (typeof races !== "undefined") {
    updateNextRace(races);
    renderCalendar(races);
  }

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const sections = {
        F1:     document.getElementById("section-f1"),
        MotoGP: document.getElementById("section-motogp"),
        WSBK:   document.getElementById("section-wsbk"),
        IOMTT:  document.getElementById("section-iomtt"),
        BSB:    document.getElementById("section-bsb"),
      };

      Object.entries(sections).forEach(([key, el]) => {
        el.style.display = (filter === "all" || filter === key) ? "" : "none";
      });

      const filteredRaces = filter === "all" ? races : races.filter(r => r.series === filter);
      updateNextRace(filteredRaces);
    });
  });
});

function localMidnight(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysDiff(dateStr) {
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const raceMidnight = localMidnight(dateStr);
  return Math.round((raceMidnight - todayMidnight) / (1000 * 60 * 60 * 24));
}

function updateNextRace(raceData) {
  const contentDiv = document.getElementById("next-race-content");
  const panel = document.getElementById("next-race-panel");

  panel.classList.remove("F1", "MotoGP", "WSBK", "IOMTT", "BSB", "multi-series");

  let minDiff = Infinity;

  raceData.forEach(race => {
    const diff = daysDiff(race.date);
    if (diff >= 0 && diff < minDiff) {
      minDiff = diff;
    }
  });

  const nextRaces = raceData.filter(race => daysDiff(race.date) === minDiff);

  if (nextRaces.length > 0) {
    const raceDate = localMidnight(nextRaces[0].date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const dateStr = raceDate.toLocaleDateString("en-US", options);
    let daysText;
    if (minDiff === 0) daysText = "Race Day!";
    else if (minDiff === 1) daysText = "Tomorrow";
    else if (minDiff <= 30) daysText = `In ${minDiff} days`;
    else daysText = `In ${Math.round(minDiff / 30.44)} months`;

    const racesHtml = nextRaces.map(race => `
      <div class="next-race-entry">
        <div class="next-race-series ${race.series}-text">${race.flag} ${race.series}</div>
      </div>
    `).join(nextRaces.length > 1 ? '<div class="next-race-divider"></div>' : "");

    const circuitsHtml = nextRaces.map(race =>
      `<div class="next-race-name">${race.circuit}</div>`
    ).join('');

    contentDiv.innerHTML = `
      <div class="next-race-entries">${racesHtml}</div>
      ${circuitsHtml}
      <div class="next-race-date">${dateStr}</div>
      <div class="next-race-countdown ${minDiff === 0 ? 'countdown-today' : minDiff <= 7 ? 'countdown-soon' : 'countdown-future'}">🏁 ${daysText}</div>
    `;

    if (nextRaces.length === 1) {
      panel.classList.add(nextRaces[0].series);
    } else {
      panel.classList.add("multi-series");
    }
  } else {
    contentDiv.innerHTML = `
      <div class="next-race-name">Season Completed</div>
    `;
  }
}

function getCountdown(dateStr) {
  const diff = daysDiff(dateStr);
  if (diff < 0)   return { text: "Done",              className: "countdown-past" };
  if (diff === 0) return { text: "TODAY",             className: "countdown-today" };
  if (diff === 1) return { text: "Tomorrow",          className: "countdown-soon" };
  if (diff <= 7)  return { text: `${diff} days`,      className: "countdown-soon" };
  if (diff <= 30) return { text: `${diff}d`,          className: "countdown-future" };
  const months = Math.round(diff / 30.44);
  return             { text: `${months}mo`,           className: "countdown-future" };
}

function formatDate(dateStr) {
  const d = localMidnight(dateStr);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}`;
}

function renderCalendar(raceData) {
  const f1Grid     = document.getElementById("grid-f1");
  const motogpGrid = document.getElementById("grid-motogp");
  const wsbkGrid   = document.getElementById("grid-wsbk");
  const iomttGrid  = document.getElementById("grid-iomtt");
  const bsbGrid    = document.getElementById("grid-bsb");

  f1Grid.innerHTML = motogpGrid.innerHTML = wsbkGrid.innerHTML = iomttGrid.innerHTML = bsbGrid.innerHTML = "";

  raceData.forEach(race => {
    const dateStr   = formatDate(race.date);
    const countdown = getCountdown(race.date);

    const rowHtml = `
      <div class="race-row">
        <span class="race-flag">${race.flag}</span>
        <span class="race-date">${dateStr}</span>
        <span class="race-circuit">${race.series === "IOMTT" ? race.race : race.circuit}</span>
        <span class="race-countdown ${countdown.className}">${countdown.text}</span>
      </div>
    `;

    if (race.series === "F1")          f1Grid.innerHTML     += rowHtml;
    else if (race.series === "MotoGP") motogpGrid.innerHTML += rowHtml;
    else if (race.series === "WSBK")   wsbkGrid.innerHTML   += rowHtml;
    else if (race.series === "IOMTT")  iomttGrid.innerHTML  += rowHtml;
    else if (race.series === "BSB")    bsbGrid.innerHTML    += rowHtml;
  });
}
