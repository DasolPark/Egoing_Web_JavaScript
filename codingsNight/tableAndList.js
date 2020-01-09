const jsFormTitle = document.querySelector('#jsFormTitle');
const jsTitleInput = document.querySelector('#jsTitleInput');
const jsFormContent = document.querySelector('#jsFormContent');
const jsContentInput = document.querySelector('#jsContentInput');

jsFormTitle.addEventListener('submit', e => {
  e.preventDefault();
  const val = jsTitleInput.value;
  jsTitleInput.value = '';
  jsTitleInput.focus();
  console.log(val);
});

jsFormContent.addEventListener('submit', e => {
  e.preventDefault();
  const val = jsContentInput.value;
  jsContentInput.value = '';
  jsTitleInput.focus();
  console.log(val);
});
