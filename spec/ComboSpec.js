describe("Ensure that a select box become a combo box.", function() {
    var input;
    var comboName;
    var comboValues;
    var listWrapper;
    var list;
    var listItems;
    var config;

    describe("A basic combo box", function() {
        var basicSelect;
        var basicCombo;

        beforeEach(function() {
            comboName = "basic-combo";
            comboValues = "<option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option>";
            basicSelect = setFixtures($("<select id='" + comboName + "'>" + comboValues + "</select>"));

            basicCombo = $("#basic-combo").combo();

        });

        it("should have an input text", function() {
            input = $('#basic-combo').combo().input;

            expect(input).toBe("div.combo input[type=text]");

        });

        it("should have an hidden container", function() {
            listWrapper = $('#basic-combo').combo().listWrapper;

            expect(listWrapper).toHaveClass("invisible list-wrapper");
            expect(listWrapper).not.toBeVisible();
            expect(listWrapper).toBe("div.combo div.list-wrapper:first");

        });

        it("should have an hidden unordered list inside the container", function() {
            expect(listWrapper).toContain("ul");
            list = $('#basic-combo').combo().list;

            expect(list).toBe("div.combo div.list-wrapper:first ul:first");
            expect(list).not.toBeVisible();
        });

        it("should have hidden list items inside the unordered list", function() {
            expect(list).toContain("li");
            listItems = $('#basic-combo').combo().listItems;

            expect(listItems).toBe("div.combo div.list-wrapper:first ul:first li");
            expect(listItems).not.toBeVisible();
        });

    });

    describe("A combo box with options", function() {
        var selectWithOptions;
        var comboWithOptions;
        var iconButton;

        beforeEach(function() {
            comboName = "combo-with-options";
            selectWithOptions = setFixtures($("<select id='" + comboName + "'>" + comboValues + "</select>"));

        });

        afterEach(function(){
            // Removing the combobox and the selectbox
            expect($("select#combo-with-options")).toExist();
            expect($("select#combo-with-options")).toHaveData("combo");
            $("select#combo-with-options").combo().remove();
//            $("select#combo-with-options").combo().destroy();
//            expect($("select#combo-with-options")).not.toHaveData("combo");
//            expect($("select#combo-with-options")).toExist();
            expect($("select#combo-with-options")).not.toExist();
        });

        it("should have an empty text like 'Choose an option...' when 'emptyText' option is set", function() {
            var inputValue = "Choose an option...";
            comboWithOptions = $("#combo-with-options").combo({
                emptyText: inputValue
            });
            input = $('#combo-with-options').combo().input;
            iconButton = $('#combo-with-options').combo().icon;

            //                expect(input).toBe("div.combo input[type=text]");
            expect(input).toHaveValue(inputValue);
            expect(input).not.toHaveValue(inputValue + "invalid value");
            expect(input.val()).not.toBeEmpty();

            runs(function () {
                iconButton.trigger("click");
                expect(input).toHaveFocus();
                expect(input).not.toHaveValue();
            });

            runs(function () {
                $(document).trigger("mouseup");
            });

            expect(input).toHaveValue(inputValue);
            expect(input).not.toHaveValue(inputValue + "invalid value");
            expect(input.val()).not.toBeEmpty();
        });
        
        it("should have autofilled text with the first item of the dropdown list when 'autoFill' option is set to true", function() {
            var inputValue = "Ala";
            var newValue = "Alabama";
            
            var regex = new RegExp(inputValue, "i");
            var filledValue = newValue.replace(regex,'');
            
            comboWithOptions = $("#combo-with-options").combo({
                autoFill: true
            });
            
            input = $('#combo-with-options').combo().input;
            listItems = $('#combo-with-options').combo().listItems;
            config = $('#combo-with-options').combo().config;
            iconButton = $('#combo-with-options').combo().icon;

            runs(function () {
                // Delete input value, char by char
                expect(input).toDeleteText();
                // Simulate typing in input value, char by char
                expect(input).toTypeText(inputValue);                
            });

            waits(config.keyPressDelay + 10);
            
            runs(function () {
                expect(input).toHaveValue(newValue);
                expect(input).not.toHaveValue(inputValue);
                expect(input.val()).not.toBeEmpty();
                expect(input).toHaveSelectedText(filledValue);
            });            
            
            runs(function () {
                // Select the first item of the combobox
//                listItems.filter("li.visible:first").trigger("mouseup"); // Similar to the Return key stuff

                // Press the Return key to select the first item of the combobox
                e = jQuery.Event ('keydown');
                e.keyCode = $cb.KEY.RETURN; // 'Return' keyCode
                input.trigger(e);

                expect(input).not.toHaveSelectedText(filledValue);
                expect(input).not.toHaveSelectedText(newValue);
                expect(input).toHaveSelectedText(); // Empty selected text
            });           
            
        });

    });

});
