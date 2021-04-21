const spanInput = document.getElementById('span-input');
const spanOuter = document.getElementById('span-outer');
const spanInner = document.getElementById('span-inner');
const button = document.getElementById('button');
const outerInput = document.getElementById('input');

// where the magic happens
const outerFunction = outerInputValue => {
  const innerFunction = val => {
    //spanOuter.textContent = outerInputValue;

    // extract object value from key user
    spanOuter.textContent = outerInputValue.value;

    spanInner.textContent = val;
    return outerInputValue + ' ' + val;
  };
  return innerFunction;
};

// how we call a clouser
const callback1 = user => {
  let innerFunction = outerFunction(user);

  user = 'New User';

  setTimeout(() => {
    const returnedVal = innerFunction('is');
    console.log(returnedVal);
  }, 2000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('explaining');
    console.log(returnedVal);
  }, 3000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('JavaScript');
    console.log(returnedVal);
  }, 4000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('clousers');
    console.log(returnedVal);
  }, 5000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('with');
    console.log(returnedVal);
  }, 6000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('a');
    console.log(returnedVal);
  }, 7000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('live');
    console.log(returnedVal);
  }, 8000);

  spanOuter.textContent = '';
  spanInner.textContent = '';

  setTimeout(() => {
    const returnedVal = innerFunction('example');
    console.log(returnedVal);
  }, 9000);

  spanOuter.textContent = '';
  spanInner.textContent = '';
};

// call it with an object
const callback2 = user => {
  let innerFunction = outerFunction(user);
  user.value = 'New User';

  setTimeout(() => {
    innerFunction('is');
  }, 2000);

  setTimeout(() => {
    innerFunction('explaining');
  }, 3000);

  setTimeout(() => {
    innerFunction('JavaScript');
  }, 4000);

  setTimeout(() => {
    innerFunction('clousers');
  }, 5000);

  setTimeout(() => {
    innerFunction('with');
  }, 6000);

  setTimeout(() => {
    innerFunction('a');
  }, 7000);

  setTimeout(() => {
    innerFunction('live');
  }, 8000);

  setTimeout(() => {
    innerFunction('example');
  }, 9000);
};

button.addEventListener('click', () => {
  const value = spanInput.textContent;

  // call the clouser
  //callback1(value);

  // call the clouser with an object
  const user = { value };
  callback2(user);

  outerInput.value = '';
  spanInput.innerHTML = '';
});
