function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
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
    `;

    // Initial hidden state
    row.style.opacity = "0";
    row.style.transform = "translateY(20px)";

    tableBody.appendChild(row);

    // Stagger animation
    setTimeout(() => {
      row.style.transition = "all 0.4s ease";
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }, index * 100);
  });
}
document.getElementById("status-filter")
  .addEventListener("change", (e) => {
    const val = e.target.value;

    tableBody.style.opacity = "0";

    setTimeout(() => {
      let data = mockDashboardData;

      if (val !== "all") {
        data = mockDashboardData.filter(user =>
          user.status.toLowerCase() === val
        );
      }

      renderTable(data);

      tableBody.style.opacity = "1";
      tableBody.style.transition = "opacity 0.3s ease";
    }, 200);
  });
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
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color')
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color')
        }
      },
      y: {
        ticks: {
          color: getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color')
        }
      }
    }
  }
});
document.documentElement.style.transition = "all 0.4s ease";
btn.addEventListener("click", () => {
  document.documentElement.style.transition = "all 0.4s ease";

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
