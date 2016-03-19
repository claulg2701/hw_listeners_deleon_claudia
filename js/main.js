function clickMe() {}

function doubleClickMe() {}

function hoverOverMe() {}

var imageOne = document.getElementById( 'f1' );
imageOne.addEventListener( 'mouseenter', hoverOverMe );
imageOne.addEventListener( 'mouseleave', hoverOverMe );

var imageTwo = document.getElementById( 'f2' );
imageOne.addEventListener( 'dblclick', doubleClickMe );

var imageThree = document.getElementById( 'f3' );
imageOne.addEventListener( 'click', clickMe );
