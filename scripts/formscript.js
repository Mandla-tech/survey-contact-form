/* Wait for the DOM content to be fully loaded before executing the JS code,
event listener runs the function when the HTML document has been completely loaded and parsed*/

document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.querySelector('form');

    // Select input fields and other elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const status = document.getElementById('status');
    const languageRadios = document.getElementsByName('language');
    const newsletter = document.getElementById('newsletter');
    const terms = document.getElementById('terms');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Check that the required fields are not empty
        if (firstName.value.trim() === '') {
            valid = false;
            alert('First name is required.');
        }

        if (lastName.value.trim() === '') {
            valid = false;
            alert('Last name is required.');
        }

        if (email.value.trim() === '') {
            valid = false;
            alert('Email is required.');
        }

        if (status.value === 'placeholder') {
            valid = false;
            alert('Status is required.');
        }

        // Check if at least one language is selected
        let languageSelected = false;
        for (const radio of languageRadios) {
            if (radio.checked) {
                languageSelected = true;
                break;
            }
        }
        if (!languageSelected) {
            valid = false;
            alert('Please select your favorite language.');
        }

        // Check if terms checkbox is checked
        if (!terms.checked) {
            valid = false;
            alert('You must agree to the terms and conditions.');
        }

        // Prevent form submission if validation checks fail
        if (!valid) {
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
});
