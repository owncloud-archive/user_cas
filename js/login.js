(function() {
    
	var cas = document.createElement('script');
	cas.type = 'text/javascript';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(cas);
})();

$(document).ready(function(){

    var loginCas = $('<div id="login-cas"></div>');

    var preCas = $('<p id=pre-cas>' + t('user_cas', 'or') + '<br><br></p>');

    var buttonLoginCas = $('<button>' + t('user_cas', 'Access using CAS authentication') + '</button>');

    var user = $('#user');
    var password = $('#password');
    var rememberLogin = $('#remember_login');
    var rememberLoginAndLabel = $('#remember_login+label');
    var submit = $('#submit');

    loginCas.appendTo('form');

    preCas.appendTo(loginCas);

    preCas.css(
        {
            'text-align': 'center',
            'font-weight': 'bolder',
            'font-size' : '110%',
            'color' : '#fff',
        }
    );
    buttonLoginCas.css(
        {
            'margin-right': '7px',
            'cursor' : 'pointer',
            'border' : '1px solid #777',
            'padding': '10px',
        }
    );

    if (user.val() == "") {
        password.parent().hide();
        rememberLogin.hide();
        rememberLoginAndLabel.hide();
        submit.hide();
    }

    user.on("change paste keyup", function() {
        if ($(this).val() !== "") {
            password.parent().show();
            rememberLogin.show();
            rememberLoginAndLabel.show();
            submit.show();
        }
        else {
            password.parent().hide();
            rememberLogin.hide();
            rememberLoginAndLabel.hide();
            submit.hide();
        }
    });

    buttonLoginCas.appendTo(loginCas);

    buttonLoginCas.click(function(event){
	event.preventDefault();
        window.location="?app=user_cas";
    });


});
