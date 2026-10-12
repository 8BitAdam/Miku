$(function () {
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        const firstName = $('#first-name').val();
        const lastName = $('#last-name').val();
        const email = $('#user-email').val();
        const note = $('#additional-info').val();

        alert(
            'Thank you for your fan letter, ' + firstName + ' ' + lastName + '!\n\n' +
            'Email: ' + email + '\n\n' +
            'Your note:\n' + note
        );
    });
});
