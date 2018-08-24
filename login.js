$(document).ready(function() {

	$('#form-login').submit(function(e) {
		    e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/login',
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function(data)
            {
                if (data.status == 200) {
                    window.location.replace('stats.html');
                }
                else {
                    alert(data.message);
                    window.location.replace('Crop.html');
                }
            }
        });

    });

});
