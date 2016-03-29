
function logFormToConsole ( event ) {
    event.preventDefault();
    console.log( 'The firstName is: ' + document.getElementById( 'firstName' ).value );
    console.log( 'The lastName is: ' + document.getElementById( 'lastName' ).value );
    console.log( 'The email is: ' + document.getElementById( 'email' ).value );
    console.log( 'The message is: ' + document.getElementById( 'message' ).value );
}

var myForm = document.getElementById( 'info' );
myForm.addEventListener( 'click', logFormToConsole, false );
