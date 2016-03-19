function clickMe() {

}

function doubleClickMe() {}

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

var imageTwo = document.getElementById( 'f2' );
imageOne.addEventListener( 'dblclick', doubleClickMe );

var imageThree = document.getElementById( 'f3' );
imageOne.addEventListener( 'click', clickMe );
