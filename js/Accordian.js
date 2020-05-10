<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.accordion .term').click(function () {
                if ($(this).next('p').is(':hidden')) {
            //Hide all dropdown panels.
            $('.accordion p').slideUp('fast');
}

   //Toggle the paragraph below the term that was clicked.
   $(this).next('p').slideToggle('fast');

            });
        });
    </script>