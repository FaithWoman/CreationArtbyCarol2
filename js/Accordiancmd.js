<script>
        $(document).ready(function () {
            //jQuery event handler for clicking any term div. 
            $('.accordion .term').click(function () {
                         //If the item they just clicked is hidden...
                if ($(this).next('p').is(':hidden')) {
                    //...hide all dropdown panels.
                    $('.accordion p').slideUp('fast');
                }
                //Toggle the paragraph below the term that was clicked.
                $(this).next('p').slideToggle('fast');
            });
        });
    </script>