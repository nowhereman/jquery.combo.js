describe("Ensure that a select box become a combo box.", function() {

  describe("A basic combo box", function() {
      var basicSelect;
      var basicCombo;
      var input;
      var listWrapper;
      var list;
      var listItems;

      beforeEach(function() {

          basicSelect = setFixtures($("<select id='basic-combo'><option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option></select>"));

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

});

