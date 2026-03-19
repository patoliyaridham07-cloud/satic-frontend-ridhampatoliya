import {mockDashboardData} from"./data.js"
const tableBody = document.getElementById("table-body");

// Example data
const users = [
  { id: 1, name: "John", email: "john@mail.com", revenue: "$200", status: "active" },
  { id: 2, name: "Sara", email: "sara@mail.com", revenue: "$150", status: "pending" },
  { id: 3, name: "Mike", email: "mike@mail.com", revenue: "$300", status: "churned" }
];

function loadTable() {
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.style.opacity = "0";
    row.style.transform = "translateY(20px)";

    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.revenue}</td>
      <td>${user.status}</td>
    `;

    tableBody.appendChild(row);

    // animation delay
    setTimeout(() => {
      row.style.transition = "all 0.4s ease";
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }, index * 100);
  });
}

loadTable();
