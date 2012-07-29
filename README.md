jquery-selectable-grid
======================

jQuery plugin to create a grid layout which has selectable elements.

usage
=====

1. Include both the javacsript and css file into your project

2. Create the HTML structure of the grid itself. 

Define a grid with the `selectable-grid` class
Define a row with the `selectable-grid-row` class
Define a column with the `selectable-grid-column` class

For example:

    <div id="tech-stack" class="selectable-grid">
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

3. If you would like to grab the selected items from the grid, you can do the following to grab all the elements.

    $('#my-grid').selectableGrid().selected();

