# History of Comb'O jQuery plugin

## Legend
*    (-) = Todo
*    (~) = Work in progress
*    (x) = Done
*    (P1) = Priority 1 is the highest and priorities n+1 are lower

## New features

*    (x) Tab Navigation
*    (x) Search Term Highlighting
*    (x) Quicksilver style search via LiquidMetal library
*    (x) Optgroup support
*    (x) Accents Insensitive
*    (x) Selected Item
*    (x) Restore Active(s) or Selected Item(s) position
*    (x) Updating config options when plugin is already create e.g: `$("#my-combo").data("combo").setHighlightTerm(true);`

## Enhancements
*    (x) Better Item Highlighting with mouse
*    (x) Better Keyboard Navigation
*    (x) IE6 Support is back
*    (x) Multiple selectBox

## Bugs Fix
*    (x) (P1) In IE optgroup aren't well display when the list is filtering
*    (x) (P2) Optgroups aren't well sorting

## Tests
*    (x) Check if multiple selection works
*    (x) Check if Ajax query works well
*    (x) Check if option showAllMode works

## Improve performances
*    (~)(P3) Use a cache for restoreListItems() function (see flexselect plugin and jQuery methods `get/setData()`)
*    (-)(P4) For liquidFilter use a cache system base on the search term

## Todo
*    (x)(P1) Track every changes of the selectBox and mirroring them to the comboBox
*    (x)(P1) Backport from sexy-combo 2.0.7 : automatically determine whether options list should go down or up.
*    (-)(P1) When active selection is at the top or the bottom of the list:
       Two successive `<Up>` or `<Down>` key press go to bottom or top item of the list
*    (-)(P2) Lazy loading, create the UL list only when showList() method is call for the first time.
*    (-)(P2) ARIA support (see filament group and jARIA plugins)
*    (-)(P3) Add shortkeys `<CTRL>+<Origin>` and `<CTRL>+<End>` to go at the top or the end of the suggestion list
*    (-)(P4) `<CTRL>+<Up>` or `<CTRL>+<Down>` move active selection to selected item
*    (-)(P4) `<CTRL>+<Space>` when selectBox is in multiple mode, select or unselect current item
*    (-)(P4) `<Shift>+<Origin>` or `<Shift>+<End>` select multiple items, start the selection to the current selected item
*    (x)(P4) Allowing to update config options outside the plugin when is already create
*    (-)(P4) Add an option to show/hide drop down button
*    (-)(P4) Support tabindex (see: [Vladimir's blog post][1])

 [1]: http://vladimir-k.blogspot.com/2009/02/sexy-combo-jquery-plugin.html#c6153987793330399595
