$(document).ready(function() {
  
	$('#form-signup').submit(function(e) {
		    e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/users',
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function(data)
            {
                if (data.status == 200) {
                    window.location.replace('Crop.html');
                }
                else {
                    alert(data.message);
                    window.location.replace('signup.html');
                }
            }
        });

    });

});
