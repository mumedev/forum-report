var _FORUM = new Forum();
function login() {
    var username = $('#login-form input:text#username').val();
    var password = $('#login-form input:password#password').val();
    _FORUM.authentication.startsession(null, username, password,
		function(key) {
			var obj = {
				username : username,
				key      : key
			};
			localStorage.setObject('forum_user', obj);
			window.location.href = '../';
		});
};

/**
 * Creates a new user account.
 * @returns {undefined}
 */
function register() {
    var username = $('#register-form input#username').val();
    var password = $('#register-form input#password').val();
    var email    = $('#register-form input#emailaddress').val();
    var homepage = $('#register-form input#homepage').val();
    
    _FORUM.user.register(username, password, email, homepage,
        function() {
            _FORUM.authentication.startsession(null, username, password,
                function(key) {
                    var obj = {
                        username : username,
                        key      : key
                    };
                    localStorage.setObject('forum_user', obj);
                    window.location.href = '../';
                }
            );
        }
    );
};