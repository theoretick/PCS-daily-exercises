var hey = function(statement) {
    var lastLetter = statement.substring(statement.length-1, statement.length);
    if (lastLetter === '?') {
      console.log( "Sure.")
    } else if (statement === '') {
      console.log( "Fine. Be that way!")
    } else if (statement.toUpperCase() === statement) {
      console.log( "Woah, chill out!")
    } else {
      console.log( "Whatever.")
    }
};

hey('Tom-ay-to, tom-aaaah-to.')
hey('WATCH OUT!')
hey('Does this cryogenic chamber make me look fat?')
