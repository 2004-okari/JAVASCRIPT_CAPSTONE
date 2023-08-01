/* eslint-disable no-unused-vars */

import './style.css';
import displayMenu from './modules/displayMenu.js';
import itemsCounter from './modules/itemsCounter';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const waiter = async () => {
  const itemSack = document.querySelectorAll('.sub-menu');
  const spanTag = document.querySelector('.span-1');
  spanTag.innerHTML = `${itemsCounter(itemSack)}`;
};

document.addEventListener('DOMContentLoaded', async () => {
  await displayMenu();
  await waiter();
});