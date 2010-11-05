# Comb'O jQuery plugin

## Introduction

[Comb'O][1] is a [jQuery][2] plugin that allows you to turn default browser selectboxes into much more attractive and usable comboboxes. The user can choose whether to select option from the dropdown list or just type it. This widget reaches its maximum efficiency when we have selectboxes with lots of options (e.g. countries or states), so it would be difficult for users to find option in the huge list. 

This plugin is a fork on *steroid* of [Sexy Combo][3] plugin (version 2.0.6) which is discontinued.  
The name of the plugin was changed to be more *corporate* friendly. 

The plugin is usable not only for end users, but also for developers. Comb'O has a lot of configuration options so you can modify its behaviour and appearance. The core CSS file is separated from the CSS that provides combo's appearance, so you are able to easily create new skins for the plugin. 

## Examples

Please view [demo page][4] to see the possibilities of *Comb'O*. 

## Installation

Please follow these instructions to install Comb'O: 
1.  [Download][5] the last version and unpack the archive.
2.  Include jQuery and plugin files to your web page:   
    `<pre>
    <script type="text/javascript" src="path_to_plugin/lib/jquery-1.4.3.js"></script>
    <script type="text/javascript" src="path_to_plugin/lib/jquery.eventdelay.js"></script>    
    <script type="text/javascript" src="path_to_plugin/lib/jquery.combo.js"></script>
    </pre>` 
3.  Include core and skin CSS files to your page:  
    `<pre>
        <link rel="stylesheet" type="text/css" href="path_to_plugin/lib/combo.css" />
        <link rel="stylesheet" type="text/css" href="path_to_plugin/skins/skin_name/skin_name.css" />
        </pre>` 
4.  Done! Now make your selectboxes look and behave sexy! `<pre>
    $("select").combo();
    </pre>` 

## Usage and configuration options

*Comb'O* has a number of configuration options that are passed to the plugin in the form of JavaScript object, e.g. `$("select").combo({triggerSelected: true});`. The full list of options is: 

*   `(string) skin` - name of the skin that will be applied to the combobox. Default is "default" 
*   `(string) suffix` - this option allows you to configure text input's name. The suffix will be appended to the name of the selectbox. Default is "__combo". 
*   `(string) hiddenSuffix` - the same as previous, but for the hidden input. Default is "__comboHidden". 
*   `(string) initialHiddenValue` - the initial value of the hidden input of the combo. Default is "" (empty string). 
*   `(string) emptyText` - if provided, will be shown when an empty text input has no focus. 
*   `(bool) autoFill` - if true, user's input will be autofilled with the value of the first item of the dropdown list. Default is false. 
*   `(bool) triggerSelected` - if true, the selected option of the selectbox will become the initial value of the combo. Default is false. 
*   `(function) filterFn` - a filter function that determines which options should be in the dropdown list. This function takes two parameters - current text input value and dropdown list item's value, and should return true if item should be in the dropdown list, otherwise false. Default is null. 
*   `(function) initCallback` - function that is called at the end of constrictor. Default is null. 
*   `(function) initEventsCallback` - function that is called at the end of initEvents method. Default is null. 
*   `(function) showListCallback` - function that is called when the dropdown list appears. Default is null. 
*   `(function) hideListCallback` - function that is called when the dropdown list disappears. Default is null. 
*   `(function) changeCallback` - function that is called when both text and hidden inputs values are changed. Default is null. 
*   `(function) textChangeCallback` - function that is called when text input's value is changed. Default is null. 

Note that all callback functions are called in the scope of `combo` instance, so you have access to all of its methods / properties. 

It is possible to create multiple comboboxes from which users can choose more than one option. All you need is to set "multiple" attribute of your selectbox to true, or set `multiple` config option to true if you create combo without selectbox. Currently this option does not work with `autoFill` config option. It will be fixed in one of the futute releases. 



You are also able to create combos without using existing selectboxes. If you want to do this, you should use static method of `jQuery.combo` object named `create`, for example:   
`<pre>
      $.combo.create({
          id : "id",
      name: "name",
      container: "#container",
      data: [
          {value: "1", text: "First option", selected: true},
          {value: "2", text: "Second option"},
          {value: "3", text: "Third option"}
      ]
      });
      </pre>` 

Below is the list of configuration options for static creating of comboboxes. You can pass them to the `create` method together with options we have discussed above. 

*   `(string) name` - the name of the selectbox that will be created. Optional. Default is "" (empty string).
*   `(string) id` - the id of the selectbox that will be created. Optional. Default is "" (empty string)
*   `(mixed) container` - jQuery selector, jQuery object or DOM element that will hold the widget. Optional. Default is `$(document)`.
*   `(array) data` - data that contains information about combo's options. This is an array of objects, which should have three properties - `value`(value of the option) and `text`(text that is displayed for this option) and (optionally) `selected` (if set to true, option's "selected" attribute will be set to true. Makes sence only with `triggerSelected` config option set to true). This option is required.
*   `(string) url` - the URL of JSON object that contains data for combo's options. Object's format is the same as for `data` option. If specified, `data` option will be ignored. 
*   `(object) ajaxData` - data that will be passed to AJAX request. 
*   `(bool) multiple` - if true, the combobox will be multiple. Default is false. 

## Appearance customization

The core CSS and presentational CSS are separated, so now it's possible to create new skins for *Comb'O*. The download package contains one example skin. Feel free to create your own based on it. 

## Browser compatibility

*Comb'O* has been tested and works on the following browsers: 

*   Internet Explorer 6 (PC)
*   Internet Explorer 7 (PC)
*   Firefox 2 (Linux)
*   Firefox 3 (PC)
*   Firefox 3.6 (PC)
*   Opera 9 (PC)
*   Safari 5 (PC)
*   Chrome 6 (PC)

## Support project

Every user of *Comb'O* adds some value to it, so you help us by just using it. However, if you want to help more, you can do the following: 

*   Tell the world about *Comb'O*. You can write an article or a blog post about it or just tell your friends/collegues about it. 
*   Test it on browsers that are not currently supported "officially". 
*   Report an issue. 

Please don't donate money, it's needless. 

## Resources

*   [Comb'O][1] on GitHub

 [1]: http://github.com/nowhereman/jquery.combo.js
 [2]: http://jquery.com
 [3]: http://code.google.com/p/sexy-combo
 [4]: examples/index.html
 [5]: https://github.com/nowhereman/jquery.combo.js/archives/master