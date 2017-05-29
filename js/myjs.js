$(document).ready(function () {

        $('#form').on('submit', function (e) {
          e.preventDefault();
          var formData = $('#form').serialize();
          $.ajax({
            type: 'post',
            url: 'https://adgeek-slack-bot.herokuapp.com/email',
            data: formData,
            success: function () {
              $('#myModal').modal('hide');
              swal({
                title: "Great!",
                text: "Your project has been submitted",
                type: "success"
            });
            }
          });

        });

});