(function($){

//  jQuery getText Plugin

//  Get the text of a string, form elements or other HTML elements like div, ul, li ,span ...

//  Copyright 2010, Nowhere Man

//  Dual licensed under the MIT or GPL Version 2 licenses.

  $.getText = $.fn.getText = function (element, method) {
    if (!element || element == null) {
        if (typeof(this)!='function')
            element = $(this);
        else
            return '';
    } else if (typeof(element) == 'function') {
        element = $.fn.call(element);
    }

    if (typeof(element) != 'function') {
        try {
          var text = '';
          if (!method && ( typeof(element) == 'string' || typeof(element) == 'number') ) {
            text = element;
          } else if(method == 'text') {
            text = element.text();
          } else if (method == 'val') {
            text = element.val();
          } else {
            return this.getText(element, 'text');
          }
          return text;
        } catch(err) {
          // console.error(err.toString());
          if (!method) {
            return this.getText(element, 'text');
          } else if (method == 'text') {
            return this.getText(element, 'val');
          } else {
            return ''
          }
        }
    } else {
        return '';
    }
  };

})(jQuery);

