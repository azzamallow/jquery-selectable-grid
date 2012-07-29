(function($) {
    $(document).ready(function () {
        $('.selectable-grid').each(function (index, element) {
            var $el = $(element);

            // Can multiple items in the grid can be selected?
            var multiple = $el.attr('data-multiple') === 'true';

            // Read only the first row to determine how many columns per row
            var columnsPerRow = $el.find('.selectable-grid-row:first-child .selectable-grid-column').length;

            $el.find('.selectable-grid-column').each(function (index, element) {
                var column = $(element);

                // Add the selector to show when hovering and clicking
                column.prepend('<div class="selector"></div>');

                column.click(function (event) {
                    // Clear all selected options only a single item can be selected
                    if (!multiple && !column.hasClass('selected')) {
                        $el.find('.selectable-grid-column').removeClass('selected');    
                    }
                    
                    column.toggleClass('selected');
                });
            });
        });
    });

    $.fn.selectableGrid = function () {
        var $el = this;

        // Provide method to find all selected items in the grid
        return {
            selected: function () {
                return $el.find('.selectable-grid-column.selected');
            }
        };
    };
})(jQuery);