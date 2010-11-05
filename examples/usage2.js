$(function() {
    var logEvent = function(msg) {
        var $eventLogger = $("#event-logger");
        $eventLogger.html($eventLogger.html() + msg + "<br />");
    };
    $("#liquid-combo").combo({
        accentsSensitive: false,
        triggerSelected: true,
        highlightTerm: true,
        liquidFilter: true,
        liquidSorting: false
       });

    $("#liquid-combo-no-selection").combo({
        accentsSensitive: false,
        triggerSelected: false,
        highlightTerm: false,
        liquidFilter: false,
        showAllMode: true
   });

   $("#liquid-combo-optgroup").combo({
    accentsSensitive: false,
    triggerSelected: false,
    highlightTerm: true,
    liquidFilter: true
   });

    $("#multiple-combo").combo();

    $("#multiple-combo-optgroup").combo({
         highlightTerm: true
    });

    //    $("#autofill-combo").combo({autoFill: true});
    //
    //    $("#selected-combo").combo({triggerSelected: true});
    //
    //    $("#up-combo").combo({dropUp: true});
    //
    //    $("#filter-combo").combo({filterFn: function() {
    //
    //        var results = [];
    //      $.each(this.cache, function() {
    //        this.score = LiquidMetal.score(this.name, abbreviation);
    //        if (this.score > 0.0) results.push(this);
    //      });
    //    }, dropUp: true});
    //
    //    $("#mixed-combo").combo({emptyText: "Choose a state", autoFill: true, dropUp: true});
    //
    //    var data = [];
    //    $("#selectbox").children().each(function() {
    //        var $this = $(this);
    //        data.push({value: $this.attr("value"), text: $this.text()});
    //    });
    //
    //    $.combo.create({name: "static-combo", id: "static-combo", container: "#static-container", data: data, dropUp: true});
    //
    //    data[0].selected = true;
    //    $.combo.create({name: "static-selected-combo", id: "static-selected-combo", container: "#static-selected", data: data, dropUp: true, triggerSelected: true});
    //
    //    $.combo.create({name: "ajax-combo", id: "ajax-combo", container: "#ajax-container", url: "example.json", dropUp: true});
    //
    //    $("#multiple-combo").combo({dropUp: true});
    //


    $("#event-combo").combo({
        dropUp: true,

        showListCallback: function() {
            logEvent("Dropdown list appeared.");
        },

        hideListCallback: function() {
            logEvent("Dropdown list disappeared.");
        },

        initCallback: function() {
            logEvent("Initialization...");
        },

        initEventsCallback: function() {
            logEvent("Events initialized.");
        },

        changeCallback: function() {
            logEvent("Combo value is changed. Text input value is " + this.getTextValue() + ". Hidden input value is " + this.getHiddenValue());
        },

        textChangeCallback: function() {
            logEvent("Text input's value is changed. Current value is " + this.getTextValue());
        }
    });


});