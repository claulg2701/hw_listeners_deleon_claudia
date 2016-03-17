function modifyHTML() {
  var paragraph = document.createElement( 'p' );
  var node = document.createTextNode( 'This is click number ' + ( x++ ) );
  paragraph.appendChild( node );

  var body = document.getElementsByTagName( 'body' )[ 0 ];
  body.appendChild( paragraph );
}

var x = 1;
var heading = document.getElementsByTagName( 'h1' )[ 0 ];
heading.addEventListener( 'click', modifyHTML );
