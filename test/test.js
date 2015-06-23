var S = require('s');

S.html = { write: require('../s.html.write') };

console.log( S.html.write.html( null, null ) );
