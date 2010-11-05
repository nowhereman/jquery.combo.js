$(function() {
    $("#basic-combo").combo();

    $("#empty-combo").combo({emptyText: "Choose a state..."});

    $("#autofill-combo").combo({autoFill: true});

    $("#selected-combo").combo({triggerSelected: true});

    $("#filter-combo").combo({filterFn: function() {
        return true;
    }});

    $("#mixed-combo").combo({emptyText: "Choose a state", autoFill: true});

    var data = [];
    $("#selectbox").children().each(function() {
        var $this = $(this);
        data.push({value: $this.attr("value"), text: $this.text()});
    });

    $.combo.create({name: "static-combo", id: "static-combo", container: "#static-container", data: data});

    data[0].selected = true;
    $.combo.create({name: "static-selected-combo", id: "static-selected-combo", container: "#static-selected", data: data, triggerSelected: true});

    $.combo.create({name: "ajax-combo", id: "ajax-combo", container: "#ajax-container", url: "example.json"});

    $("#multiple-combo").combo();

    var logEvent = function(msg) {
        var $eventLogger = $("#event-logger");
    $eventLogger.html($eventLogger.html() + msg + "<br />");
    };

    $("#event-combo").combo({
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