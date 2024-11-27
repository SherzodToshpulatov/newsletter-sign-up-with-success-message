const check  = document.querySelector('#form__button');
const dismiss = document.querySelector('#dismiss__button');
cta = document.querySelector('.cta');
success = document.querySelector('.success');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const validEmail = document.getElementById("user_mail");

form.addEventListener('submit', (event) => {
event.preventDefault();

    if (emailInput.checkValidity()) {
        cta.style.display = 'none';
        success.style.display = 'flex';
        validEmail.textContent = emailInput.value;
    } 
    else {
      alert("Invalid email address. Please enter a correct email.");
    }
  });


function closeSuccess(){
    success.style.display = 'none';
    cta.style.display = 'grid';
    
}


dismiss.addEventListener('click', closeSuccess )