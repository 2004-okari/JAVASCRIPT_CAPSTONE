import itemsCounter from './itemsCounter.js';

describe('Items counter function', () => {
  test('Elements count is 0', () => {
    document.body.innerHTML = `
        <section>
            
        </section>
        `;
    const items = document.querySelectorAll('.items');
    expect(itemsCounter(items)).toBe(0);
  });
});

describe('Items counter function', () => {
  test('Elements count is 6', () => {
    document.body.innerHTML = `
        <section>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
        </section>
        `;
    const items = document.querySelectorAll('.items');
    expect(itemsCounter(items)).toBe(6);
  });
});

describe('Items counter function', () => {
  test('Elements count is 20', () => {
    document.body.innerHTML = `
        <section>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
        </section>
        `;
    const items = document.querySelectorAll('.items');
    expect(itemsCounter(items)).toBe(20);
  });
});