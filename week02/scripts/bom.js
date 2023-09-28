const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const feedback = document.querySelector('#feedback');

button.addEventListener('click', () => {
  if (input.value) {
    feedback.textContent = '';
  } else {
    input.focus();
    feedback.textContent = 'Please enter a book and chapter.';
  }

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = input.value;
  deleteButton.textContent = '❌';
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();

    input.focus();
    input.value = '';
  });
});
