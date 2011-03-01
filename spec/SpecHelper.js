beforeEach(function() {

    // Helpers

        // Provides selection of an element value
        // Borrowed from jCarousel
        var selection = function(element, start, end) {
            element.focus();
            var field = element.get(0);
            if(field.createTextRange) {
                var selRange = field.createTextRange();
                selRange.collapse(true);
                selRange.moveStart("character", start);
                selRange.moveEnd("character", end);
                selRange.select();
            } else if(field.setSelectionRange) {
                field.setSelectionRange(start, end);
            } else {
                if(field.selectionStart) {
                    field.selectionStart = start;
                    field.selectionEnd = end;
                }
            }
        };

        // Confirm the text selection of the given element, move the cursor to the end of the value
        var confirmSelection = function(element) {
            selection(element, element.val().length, element.val().length);
        };
    
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
        },

        // Check if the current element have the expected selected text
        toHaveSelectedText: function(text) {
            var selectedText = '';
            if(!text || text.length == 0) {
                text = selectedText;
            }
            if(this.actual) {
                var el = this.actual.get(0);
                if (document.selection) {
                    el.focus();
                    var sel = document.selection.createRange();
                    selectedText = sel.text;
                } else if (el.selectionStart || el.selectionStart == '0') {
                    var startPos = el.selectionStart;
                    var endPos = el.selectionEnd;
                    selectedText = this.actual.val().substring(startPos, endPos);
                }
            } else {
                if (window.getSelection) {
                    selectedText = window.getSelection();
                } else if (document.getSelection) {
                    selectedText = document.getSelection();
                } else if (document.selection) {
                    selectedText = document.selection.createRange().text;
                }
            }

            return selectedText == text;
        },

        // Unselect the selected text if any. Then, simulate typing inside the current element, char by char.
        toTypeText: function(expectedValue, eventType) {
            if(!eventType)
                eventType = 'keyup'; // Possible values : keypress, keydown and keyup.
            confirmSelection(this.actual);
            // Simulate typing inside the element, char by char
            for(var i = 0; i < expectedValue.length; i++) {
                this.actual.val(this.actual.val() + expectedValue.charAt(i));
                e = jQuery.Event(eventType);
                e.keyCode =  expectedValue.charCodeAt(i);
                this.actual.trigger(e);
            }

            return this.actual.val() === expectedValue;
        },

        // Unselect the selected text if any. Then, erasing the value of the element, char by char.
        toDeleteText: function(which, eventType) {
            if(!which)
                which = 8; // BackSpace keyCode
            if(!eventType)
                eventType = 'keypress'; // Possible values : keypress, keydown and keyup.
            confirmSelection(this.actual);
            // Erasing the value of the element, char by char
            for(var i = this.actual.val().length-1; i >= 0; i--) {
                this.actual.val(this.actual.val().slice(0,-1));
                e = jQuery.Event(eventType);
                e.keyCode =  which;

                this.actual.trigger(e);
            }

            return this.actual.val().length === 0;
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
