import { mockDashboardData } from "./data.js";

/* TABLE */
const tableBody = document.getElementById("table-body");

function renderTable(data) {
  tableBody.innerHTML = "";

  const rows = data.map(user => `
    <tr>
      <td>${user.id.slice(0,6)}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(user.revenue)}</td>
      <td class="status-${user.status.toLowerCase()}">
        ${user.status}
      </td>
    </tr>
  `).join("");

  tableBody.innerHTML = rows;
}

/* CHART */
const ctx = document.getElementById("revenueChart");

const labels = mockDashboardData.slice(0,10).map(u => u.name);
const values = mockDashboardData.slice(0,10).map(u => u.revenue);

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Revenue",
      data: values,
      backgroundColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--brand-accent')
    }]
  },
  options: {
    maintainAspectRatio: false
  }
});

/* FILTER */
document.getElementById("status-filter")
  .addEventListener("change", (e) => {
    const val = e.target.value;

    if (val === "all") {
      renderTable(mockDashboardData);
      return;
    }

    const filtered = mockDashboardData.filter(user =>
      user.status.toLowerCase() === val
    );

    renderTable(filtered);
  });

/* DARK MODE */
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  const isDark = document.documentElement
    .getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  chart.update();
});

/* INIT THEME */
(function () {
  const saved = localStorage.getItem("theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

/* INITIAL LOAD */
renderTable(mockDashboardData);
