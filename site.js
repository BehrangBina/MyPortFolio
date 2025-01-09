document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var isValid = true;

    // Validate each input
    form.querySelectorAll('.form-control').forEach(function(input) {
        if (!input.value) {
            isValid = false;
            input.nextElementSibling.style.display = 'block';
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (isValid) {
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        document.getElementById('submitErrorMessage').classList.add('d-none');
        var message= '';
        message += 'Name: ' + form.querySelector('#name').value + '\n';
        message+= 'Form submission successful!\n\n';
        message += 'will contact you on Email: ' + form.querySelector('#email').value + '\n';
        alert(message);
        document.getElementById('contactForm').reset();
        
    } else {
        document.getElementById('submitSuccessMessage').classList.add('d-none');
        document.getElementById('submitErrorMessage').classList.remove('d-none');
    }
});