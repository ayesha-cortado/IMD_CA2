document.getElementById('contact-button').addEventListener('click', function() {
    var contactDetails = document.getElementById('contact-details');
    if (contactDetails.classList.contains('d-none')) {
      contactDetails.classList.remove('d-none');
    } else {
      contactDetails.classList.add('d-none');
    }
  });
  