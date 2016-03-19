
/* These events can be accomplished with CSS using the psudo class hover */
function hoverOverMe() {
    var img = document.getElementById( 'f1' );
    if ( img.className === 'hover' ) {
            img.className = '';
    }else {
        img.className = 'hover';
    }
}

var imageOne = document.getElementById( 'f1' );
imageOne.addEventListener( 'mouseenter', hoverOverMe );
imageOne.addEventListener( 'mouseleave', hoverOverMe );

/* Toogle grayscale for image by clicking on it */
function clickMe() {
    var img = document.getElementById( 'f2' );
    if ( img.className === 'grayscale' ) {
            img.className = '';
    }else {
        img.className = 'grayscale';
    }
}

var imageTwo = document.getElementById( 'f2' );
imageTwo.addEventListener( 'click', clickMe );

/* Double click will update the url for this image */
function doubleClickMe() {
    var img = document.getElementById( 'f3' );
    if ( img.src === '../img/img4.jpg' ) {
        img.src = '../img/img3.jpg';
    }else {
        img.src = '../img/img4.jpg';
    }
}

var imageThree = document.getElementById( 'f3' );
imageThree.addEventListener( 'dblclick', doubleClickMe );
