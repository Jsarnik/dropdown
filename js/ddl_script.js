
$(document).ready(function(){

        $('#ddl_container').on('click', '.ddl_selector', function() {
            $('#ddlDemo').toggle();
        });

        $('#ddl_container').on('click', '#ddlDemo li', function() {
            $('#selected_item').html($(this).find('div').html());
            $('#ddlDemo').hide();
        });
		
		});