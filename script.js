const data = [
  {
    number: 107,
    ministry: `Ministry of<br>
               Consumer<br>
               Affairs, Food<br>
               &amp; Public<br>
               Distribution`,
    project: `AI-powered<br>
              Intelligent<br>
              Assistant for<br>
              Indian Standards<br>
              and BIS Services<br>
              for Industries and<br>
              Consumers`
  }
];

const tableBody = document.getElementById("tableBody");

data.forEach(item => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="number">${item.number}</td>
    <td class="ministry">${item.ministry}</td>
    <td class="project">${item.project}</td>
  `;

  tableBody.appendChild(row);
});
