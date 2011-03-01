beforeEach(function() {
    this.addMatchers({

        // Source : http://blogs.developpeur.org/fremycompany/archive/2008/02/14/savoir-quel-input-le-focus-document-activeelement-sous-firefox-et-co.aspx
        toHaveFocus: function() {
            // FIXME Doesn't work with Safari < 4
            if (jQuery.browser.safari && jQuery.browser.version < "528.16")
                return true;

            var el = this.actual.get(0);
            try { // Internet Explorer
                var result = !!(el.hasFocus||el==document.activeElement);
                if (result) {
                    return result;
                }
            } catch (ex) {}
            try { // Firefox, Safari
                var sel = false;
                sel=this.window.getSelection().getRangeAt(0);
                if (!sel.collapsed) {
                    return false;
                }
                var sel2 = document.createRange();
                sel2.setStartBefore(el);
                sel2.setEndBefore(el);
                var result = true; //sel.compareBoundaryPoints(Range.START_TO_START, sel2)==0;
                //result = result && sel.compareBoundaryPoints(Range.END_TO_END, sel2)==0;
                result = result && sel.startOffset == sel2.startOffset
                result = result && sel.endOffset == sel2.endOffset
                return result;
            } catch (ex) {}
            try { // Opera
                return !!(el.selectionStart||el.selectionEnd);
            } catch (ex) {}
            return false;
        }
    /*
    toBeVisible: function() {
      // Fix the toBeVisible matcher
      var elementDisplay = jQuery(this.actual).get(0).style.display;
      return elementDisplay != 'none' && elementDisplay.length > 0;
    },

    toBeHidden: function() {
      // Fix the toBeHidden matcher
      var elementDisplay = jQuery(this.actual).get(0).style.display;
      return elementDisplay == 'none' || elementDisplay.length == 0;
    }
    */

    });

});
