/*
 * LiquidWord, version: 0.1 (2010-11-08)
 *
 * A mimetic poly-alloy of Quicksilver's scoring algorithm, essentially
 * LiquidWord.
 *
 * Dependency: LiquidMetal (http://github.com/rmm5t/liquidmetal)
 *
 * For usage and examples, visit:
 * http://github.com/nowhereman/jquery.combo.js
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2010, Nowhere Man
 */
var LiquidWord = (function() {
    var SCORE_MATCH = 1.0;
    var SCORE_FUZZY_WORD = 0.9;
    var SCORE_TRAILING = 0.8;
    var SCORE_NO_MATCH = 0.0;

    return {
        score: function(string, term) {
            // Short circuits
            if (term.length === 0 || term.length > string.length) return SCORE_NO_MATCH;

            var scores = this.buildScoreArray(string, term);

            // miss, score is 0
            if ( scores === false || scores.length === 0)  return 0;

            // hit, average scores:
            for (var i=0, sum=0, length=scores.length; i < length; i++) {
                sum += scores[i];
            }
            return sum / length;
        },

        buildScoreArray: function(string, term) {
            var words = string.split(/\s/);
            var termWords = term.split(/\s/);
            var word, termWord;
            var scores = [];
            var lastIndex = 0;

            for (var i=0, length=words.length; i<length; i++) {
                word = words[i];
                for (var j=0, termLength=termWords.length; j<termLength; j++) {
                    termWord = termWords[j];
                    if (word == termWord) {
                        scores[i] = SCORE_MATCH;
                    } else {
                        scores[i] = LiquidMetal.score(word, termWord) * SCORE_FUZZY_WORD;//SCORE_NO_MATCH;
                    }
                }
            }
            scores[i++]=LiquidMetal.score(string, term);
            return scores;
        }
    };

})();