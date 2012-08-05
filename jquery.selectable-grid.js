(function($) {
    $(document).ready(function () {
        $('.selectable-grid').each(function (index, element) {
            var $el = $(element);

            // Can multiple items in the grid can be selected?
            var multiple = $el.attr('data-multiple') === 'true';

            $el.find('.selectable-grid-column').each(function (index, element) {
                var column = $(element);

                // Add the selector to show when hovering and clicking
                column.prepend('<div class="selector"></div>');

                column.click(function (event) {
                    // Ignore if the item is disabled
                    if (column.hasClass('disabled')) {
                        return;
                    }

                    // Clear all selected options belonging to the current group
                    if (column.data().group !== undefined) {
                        $el.find('[data-group="' + column.data().group + '"]').removeClass('selected');    
                    }

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