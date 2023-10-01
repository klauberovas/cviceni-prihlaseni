const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'vimzenicnevim',
  name: 'Bartoloměj',
};
const formElm = document.querySelector('form');
const buttonElm = document.querySelector('button');
const nameElm = document.getElementById('name');
const passwordElm = document.getElementById('password');
let emailElm = document.getElementById('email');
const messageElm = document.querySelector('.message');

buttonElm.addEventListener('click', (e) => {
  e.preventDefault();

  if (user.password === passwordElm.value && user.name === nameElm.value) {
    return (formElm.innerHTML = `<h2>Přihlášený uživatel ${nameElm.value}</h2>`);
  } else if (
    user.email !== emailElm.value &&
    user.password !== passwordElm.value
  ) {
    return (messageElm.innerHTML = '<h2>Neplatné přihlašovací údaje</h>');
  }
});
