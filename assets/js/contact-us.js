const form = document.getElementById('reservationForm');
const button = document.querySelector('.btn-reserve');

form.addEventListener('submit', function(e) {
  // Prevent default so we can show custom message
  e.preventDefault();

  button.textContent = 'Submitting..';
  button.disabled = true;
  button.style.color = '#fff';  // show text in white while booking

  // Let form submit after short delay (simulate)
  setTimeout(() => {
    this.submit(); // actually submit to FormSubmit
  }, 1000);
});
const alertBox = document.getElementById('customAlert');
const closeAlert = document.getElementById('closeAlert');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Change text to Booking... and disable button
  button.textContent = 'Submitting...';
  button.disabled = true;
  button.style.color = '#fff';

  setTimeout(() => {
    // Show custom alert instead of normal alert
    alertBox.style.display = 'flex';
    button.textContent = 'Submit';
    button.disabled = false;
    form.reset();
  }, 2000);
});

// Close custom alert
closeAlert.addEventListener('click', () => {
  alertBox.style.display = 'none';
});
