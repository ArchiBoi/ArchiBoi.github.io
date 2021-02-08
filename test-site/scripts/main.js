let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/how-to-cook-corn-on-the-cob-8-1200.jpg') {
      myImage.setAttribute('src','images/pumpkin.jpeg');
    } else {
      myImage.setAttribute('src','images/how-to-cook-corn-on-the-cob-8-1200.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `corn is cool, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'corn is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
