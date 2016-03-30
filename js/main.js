
/* These events can be accomplished with CSS using the psudo class hover */
function hoverOverMe() {
    if ( imageOne.className === 'hover' ) {
            imageOne.className = '';
    }else {
        imageOne.className = 'hover';
    }
}

var imageOne = document.getElementById( 'f1' );
imageOne.addEventListener( 'mouseenter', hoverOverMe );
imageOne.addEventListener( 'mouseleave', hoverOverMe );

/* Toogle grayscale for image by clicking on it */
function clickMe() {
    if ( imageTwo.className === 'grayscale' ) {
            imageTwo.className = '';
    }else {
        imageTwo.className = 'grayscale';
    }
}

var imageTwo = document.getElementById( 'f2' );
imageTwo.addEventListener( 'click', clickMe );

/* Double click will update the url for this image */
function doubleClickMe() {
    imageThree.src = '../img/img4.jpg';
}

var imageThree = document.getElementById( 'f3' );
imageThree.addEventListener( 'dblclick', doubleClickMe );
