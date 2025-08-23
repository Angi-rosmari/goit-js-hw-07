const listItems = categories.querySelectorAll('.item');
console.log(`Numbers of categories: ${listItems.length}`);

listItems.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
