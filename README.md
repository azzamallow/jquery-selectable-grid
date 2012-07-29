# jquery-selectable-grid

jQuery plugin to create a grid layout which has selectable elements.

## support

This plugin has only been tested in Google Chrome at this point.

## usage

1. Include both the javacsript and css file into your project

2. Create the HTML structure of the grid itself. 

* Define a grid with the `selectable-grid` class
* Define a row with the `selectable-grid-row` class
* Define a column with the `selectable-grid-column` class

For example:

    <div id="my-grid" class="selectable-grid">
        <div class="selectable-grid-row">
            <div class="selectable-grid-column">
                First grid item
            </div>
            <div class="selectable-grid-column">
                Second grid item
            </div>
            <div class="selectable-grid-column">
                ...
            </div>
        </div>
        <div class="selectable-grid-row">
            ...
        </div>
    </div>

By default the grid will only have a single item that can be selected. If you would like multiple items in the grid to be selected, provide a `data-multiple="true"` when creating the markup.

    <div class="selectable-grid" data-multiple="true">
        ...
    </div>

3. If you would like to grab the selected items from the grid, you can do the following to grab all the elements.

    `$('#my-grid').selectableGrid().selected();`

