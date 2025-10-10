const form = document.getElementById('reservationForm');
const button = document.querySelector('.btn-reserve');
const alertBox = document.getElementById('customAlert');
const closeAlert = document.getElementById('closeAlert');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Change text to Booking... and disable button
  button.textContent = 'Booking...';
  button.disabled = true;
  button.style.color = '#fff';

  setTimeout(() => {
    // Show custom alert instead of normal alert
    alertBox.style.display = 'flex';
    button.textContent = 'Book A Table';
    button.disabled = false;
    form.reset();
  }, 2000);
});

// Close custom alert
closeAlert.addEventListener('click', () => {
  alertBox.style.display = 'none';
});
