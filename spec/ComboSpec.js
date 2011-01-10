describe("Ensure that a select box become a combo box.", function() {
    var input;
    var comboName;
    var comboValues;
    var listWrapper;
    var list;
    var listItems;

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
            input=$('#basic-combo').combo().input;

            expect(input).toBe("div.combo input[type=text]");

        });

        it("should have an hidden container", function() {
            listWrapper=$('#basic-combo').combo().listWrapper;

            expect(listWrapper).toHaveClass("invisible list-wrapper");
            expect(listWrapper).not.toBeVisible();
            expect(listWrapper).toBe("div.combo div.list-wrapper:first");

        });

        it("should have an hidden unordered list inside the container", function() {
            expect(listWrapper).toContain("ul");
            list=$('#basic-combo').combo().list;

            expect(list).toBe("div.combo div.list-wrapper:first ul:first");
            expect(list).not.toBeVisible();
        });

        it("should have hidden list items inside the unordered list", function() {
            expect(list).toContain("li");
            listItems=$('#basic-combo').combo().listItems;

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

        it("should have an empty text like 'Choose an option...' when 'emptyText' option is set", function() {
            var inputValue = "Choose an option...";
            comboWithOptions = $("#combo-with-options").combo({
                emptyText: inputValue
            });
            input=$('#combo-with-options').combo().input;
            iconButton = $('#combo-with-options').combo().icon;

            //                expect(input).toBe("div.combo input[type=text]");
            expect(input).toHaveValue(inputValue);
            expect(input).not.toHaveValue(inputValue + "invalid value");
            expect(input.val()).not.toBeEmpty();

            runs(function () {
                iconButton.trigger("click");
                expect(input).haveFocus();
                expect(input).not.toHaveValue();
            });

            runs(function () {
                $(document).trigger("mouseup");
            });


            expect(input).toHaveValue(inputValue);
            expect(input).not.toHaveValue(inputValue + "invalid value");
            expect(input.val()).not.toBeEmpty();

        });


    });



});

