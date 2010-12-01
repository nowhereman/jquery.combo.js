beforeEach(function() {
  this.addMatchers({

    toBeVisible: function() {
      // Fix the toBeVisible matcher
      var elementDisplay = jQuery(this.actual).get(0).style.display;
      return elementDisplay != 'none' && elementDisplay.length > 0;
    },

    toBeHidden: function() {
      // Fix the toBeHidden matcher
      //return expect(this.actual).not.toBeVisible(); // doesn't work
      var elementDisplay = jQuery(this.actual).get(0).style.display;
      return elementDisplay == 'none' || elementDisplay.length == 0;
    }
  })
});

