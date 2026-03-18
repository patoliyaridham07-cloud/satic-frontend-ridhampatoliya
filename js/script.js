import { data } from './data.js';

const cards = document.querySelector('.cards');

cards.innerHTML = data.map(item => `
  <div class="card">
    <h3>${item.name}</h3>
    <p>${item.value}</p>
  </div>
`).join('');
