/*
 * LiquidMetal, version: 0.1 (2009-02-05)
 *
 * A mimetic poly-alloy of Quicksilver's scoring algorithm, essentially
 * LiquidMetal.
 *
 * For usage and examples, visit:
 * http://github.com/rmm5t/liquidmetal
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
var LiquidMetal = (function() {
  var SCORE_NO_MATCH = 0.0;
  var SCORE_MATCH = 1.0;
  var SCORE_TRAILING = 0.8;
  var SCORE_TRAILING_BUT_STARTED = 0.9;
  var SCORE_BUFFER = 0.85;
  
  return {
    score: function(string, abbreviation) {
      // Short circuits
      if (abbreviation.length === 0) return SCORE_TRAILING;
      if (abbreviation.length > string.length) return SCORE_NO_MATCH;

      var scores = this.buildScoreArray(string, abbreviation);

      // miss, score is 0
      if ( scores === false )  return 0;

      // hit, average scores:
      for (var i=0, sum=0, length=scores.length; i < length; i++)
        sum += scores[i];
      return sum / length;
    },

    buildScoreArray: function(string, abbreviation) {
      var scores = new Array(string.length);
      var lower = string.toLowerCase();
      var chars = abbreviation.toLowerCase().split("");

      var lastIndex = -1;
      var started = false;
      
      var c, index, trailingScore;
      
      for (var i=0, length=chars.length; i<length; i++) { 
        c = chars[i];
        index = lower.indexOf(c, lastIndex+1);
        
        if (index === -1)  return false; // return no match
        
        if (index === 0) started = true;
        
        // is new word:
        if ( /\s/.test( string.charAt(index-1) ) ) {
          scores[index-1] = 1;
          fillArray(scores, SCORE_BUFFER, lastIndex+1, index-1);
        }
        // is upper:
        else if ( /[A-Z]/.test( string.charAt(index) ) )
          fillArray(scores, SCORE_BUFFER, lastIndex+1, index);

        else
          fillArray(scores, SCORE_NO_MATCH, lastIndex+1, index);

        scores[index] = SCORE_MATCH;
        lastIndex = index;
      }

      trailingScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING;
      fillArray(scores, trailingScore, lastIndex+1, scores.length);
      return scores;
    }
  };
  
  function fillArray(array, value, from, to) {
    for (var i = from; i < to; i++) { array[i] = value; }
    return array;
  }
})();
