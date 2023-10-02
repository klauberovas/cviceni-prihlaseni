const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'vimzenicnevim',
  name: 'Bartoloměj',
};
const formElm = document.querySelector('form');
const buttonElm = document.querySelector('button');
let nameElm = document.getElementById('name');
let passwordElm = document.getElementById('password');
let emailElm = document.getElementById('email');
const messageElm = document.querySelector('.message');

const checkInput = (event) => {
  if (nameElm.value === '' || !emailElm.value.includes('@')) {
    return event.target.classList.add('input--red');
  }
  return event.target.classList.remove('input--red');
};

nameElm.addEventListener('input', checkInput);
emailElm.addEventListener('input', checkInput);

buttonElm.addEventListener('click', (e) => {
  e.preventDefault();

  if (user.password === passwordElm.value && user.name === nameElm.value) {
    return (formElm.innerHTML = `<h2>Přihlášený uživatel ${nameElm.value}</h2>`);
  } else if (
    user.email !== emailElm.value &&
    user.password !== passwordElm.value
  ) {
    return (
      (messageElm.innerHTML = '<h2>Neplatné přihlašovací údaje</h>'),
      (nameElm.value = ''),
      (passwordElm.value = '')
    );
  }
});
