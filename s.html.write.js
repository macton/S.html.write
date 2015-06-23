var S = require('s');

var element = S.curry( function( name, attributes, body ) {
  var out = '<'+name;
  if (attributes) {
    var keys = Object.keys( attributes );
    out += ' ';
    keys.forEach( function(key) {
      out += key + '="' + attributes[key] + '" ';
    });
  }
  if (body == null) {
    out += ' />';
  } else {
    out += '>' + body + '</'+name+'>';
  }
  return out;
});

var elementEmpty = S.curry( function( name, attributes ) {
  return element( name, attributes, null );
});

var html = {                                                                                                                                                                                                                          
  html:   element( 'html' ),
  head:   element( 'head' ),
  meta:   elementEmpty( 'meta' ),
  link:   elementEmpty( 'link' ),
  script: element( 'script' ),
  body:   element( 'body' ),
  table:  element( 'table' ),
  tr:     element( 'tr' ),
  td:     element( 'td' ),
  thead:  element( 'thead' ),
  tbody:  element( 'tbody' ),
  div:    element( 'div' ),
  a:      element( 'a' ),
  h1:     element( 'h1' ),
                                                                                                                                                                                                                                      
  includeCss:        function( href ) { return html.link( { rel: 'stylesheet', type: 'text/css', href: href } ); },
  includeJavascript: function( src )  { return html.script( { src: src }, '' ); },
};

exports = module.exports = html;
