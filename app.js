function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


// Wait for 4 seconds and then remove the spinner
setTimeout(function() {
    var spinnerContainer = document.querySelector('.spinner-container');
    spinnerContainer.style.display = 'none';
  }, 4000);
