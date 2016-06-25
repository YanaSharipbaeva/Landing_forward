'use strict'

document.addEventListener ("DOMContentLoaded", function() {
    var registrationButton;

    //scroll to top
    $('.up-button').click(function () {
        var curPos=$(document).scrollTop();
        var scrollTime=curPos/1.73;
        $("body,html").animate({"scrollTop":0},scrollTime);
    });


    

    //validation 

    registrationButton = document.getElementById('registration');
    registrationButton.addEventListener('click', isValid);

    function isValid (e) {
        var numRegExp,
        emailRegExp,
        errorMessage,
        phone,
        email,
        span,
        data = [],

        //regular expression for phone input
        numRegExp = /^[0-9]{4,10}$/i;
        //regular expression for email input
        emailRegExp = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/i;

        phone = document.getElementById('phone');
        email = document.getElementById('email');
        data = document.getElementsByClassName('form-input');

        event.preventDefault();
        data = [].slice.call(data);

        data.forEach(function (item) {
                if (item.value.length === 0 || item.value.length > 10) {
                    errorMessage = 'field must not be empty';
                    createHint();
                    item.parentNode.insertBefore(span, item);
                }

                if (item.id === 'phone') {
                    if (!phone.value.match(numRegExp)) {
                        errorMessage = 'field must be numeric and not empty';
                        createHint();
                        item.parentNode.insertBefore(span, item);
                    }
                }

                if (item.id === 'email') {
                    if (!email.value.match(emailRegExp)) {
                        errorMessage = "field is not correct and not empty";
                        createHint();
                        item.parentNode.insertBefore(span, item);
                    };
                }
                
                else {
                    //send data
                    $("#form").submit(function(){
                        $.ajax({
                          type: "POST",
                          url: "mail.php",
                          data:$(this).serialize()
                        });

                        return false;   
                    });
                }
      
        });

        function createHint () {
            span = document.createElement('span');
            span.classList.add("hint");
            span.innerHTML = errorMessage;
            
        }

        removeHints();

        //remove hints after 4 seconds
        function removeHints () {
            setTimeout( function () {
                $('.hint').remove();
            }, 4000);    
        }
    }
});