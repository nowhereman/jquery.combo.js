(function($) {
// Authors:  Andreas Bjarlestam and Nowhere Man
// Sources: http://stackoverflow.com/questions/119441/highlight-a-word-with-jquery#2676556
// jQuery UI Autocomplete
  $.fn.highlight = function(term, className) {
      var regex = new RegExp(term, "gi");
      if (!className)
          className = "";
      return this.each(function() {
          var $this = $(this);
          $this.html($this.html().replace(regex, function(matched) {return "<strong class=\"" + className + "\">" + matched + "</strong>";}));
      });
  };

  $.fn.highlightEach = function(term, className) {
      var self = this;
      if (!className)
          className = "";

      $.each(term.split(new RegExp(" ")),function(i,v){
          var regex = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + v.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi");
          return self.each(function() {
              var $this = $(this);
              if (i == 0) {
                  $this.html($this.text());
              }
              $this.html($this.html().replace(regex, "<strong class=\"" + className + "\">$1</strong>"));
          });
      });
    return this;
  };
})(jQuery);
