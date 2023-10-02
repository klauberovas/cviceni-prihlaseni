const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'vimzenicnevim',
  name: 'Bartoloměj',
};
const formElm = document.querySelector('form');
const buttonElm = document.querySelector('button');
let nameInputElm = document.getElementById('name');
let passwordInputElm = document.getElementById('password');
let emailInputElm = document.getElementById('email');
const messageElm = document.querySelector('.message');

const checkInput = (event, condition) => {
  if (condition) {
    event.target.classList.add('input--red');
  } else {
    event.target.classList.remove('input--red');
  }
};

nameInputElm.addEventListener('input', (event) => {
  checkInput(event, nameInputElm.value === '');
});

emailInputElm.addEventListener('input', (event) => {
  checkInput(event, !emailInputElm.value.includes('@'));
});

buttonElm.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    user.password === passwordInputElm.value &&
    user.name === nameInputElm.value
  ) {
    return (formElm.innerHTML = `<h2>Přihlášený uživatel ${nameInputElm.value}</h2>`);
  } else if (
    user.email !== emailInputElm.value &&
    user.password !== passwordInputElm.value
  ) {
    return (
      (messageElm.innerHTML = '<h2>Neplatné přihlašovací údaje</h>'),
      (nameInputElm.value = ''),
      (passwordInputElm.value = '')
    );
  }
});
