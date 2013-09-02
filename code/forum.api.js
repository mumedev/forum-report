Forum = function () {
    var _API = 'http://localhost/forum-server-restapi/index.php/api/';
    this.authentication = {
        startsession : function (id, username, password, callback) {
           var data = {};
           if (id)       data['id']       = id;
           if (username) data['username'] = username;
           if (password) data['password'] = password;
           $.ajax({
               url      : _API + 'authentication_startsession/',
               dataType : 'json',
               type     : 'get',
               data     : data
           }).done(callback);
        },

        endsession : function (id, username, session, callback) {
           var data = {};
           if (id)       data['id']       = id;
           if (username) data['username'] = username;
           if (session)  data['session']  = session;
           $.ajax({
               url      : _API + 'authentication_endsession/',
               dataType : 'json',
               type     : 'get',
               data     : data
           }).done(callback);
        }
    };
    
    /**
     * The question resource.
     */
    this.question = {
        /**
         * Get the answers for a given question.
         * @param {type} id
         * @param {type} callback
         * @returns {undefined}
         */
        getanswers : function (id, callback) {
            var data = {};
            if (id) data['id'] = id;
            $.ajax({
                url      : _API + 'question_getanswers/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * Get the profile information for a given user.
         * @param {String}   id
         * @param {function} callback
         * @returns {undefined}
         */
        getinfo : function (id, callback) {
            var data = {};
            if (id) data['id'] = id;
            $.ajax({
                url      : _API + 'question_getinfo/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * Get the skillset for a given question.
         * @param {type} id
         * @param {type} callback
         * @returns {undefined}
         */
        getskills : function (id, callback) {
            var data = {};
            if (id) data['id'] = id;
            $.ajax({
                url      : _API + 'question_getskills/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        }
    };

    /**
     * The user resource.
     */
    this.user = {
        /**
         * Get the answers for a given user.
         * @param {type} id
         * @param {type} username
         * @param {type} callback
         * @returns {undefined}
         */
        getanswers : function (id, username, callback) {
            var data = {};
            if (id)       data['id']       = id;
            if (username) data['username'] = username;
            $.ajax({
                url      : _API + 'user_getanswers/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * Get the profile information for a given user.
         * @param {type} id
         * @param {type} username
         * @param {type} callback
         * @returns {undefined}
         */
        getinfo : function (id, username, callback) {
            var data = {};
            if (id)       data['id']       = id;
            if (username) data['username'] = username;
            $.ajax({
                url      : _API + 'user_getinfo/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * Get the questions posed by a given user.
         * @param {type} id
         * @param {type} username
         * @param {type} callback
         * @returns {undefined}
         */
        getquestions : function (id, username, callback) {
            var data = {};
            if (id)       data['id']       = id;
            if (username) data['username'] = username;
            $.ajax({
                url      : _API + 'user_getquestions/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * Get the skillset for a given user.
         * @param {type} id
         * @param {type} username
         * @param {type} callback
         * @returns {undefined}
         */
        getskills : function (id, username, callback) {
            var data = {};
            if (id)       data['id']       = id;
            if (username) data['username'] = username;
            $.ajax({
                url      : _API + 'user_getskills/',
                dataType : 'json',
                type     : 'get',
                data     : data
            }).done(callback);
        },
        /**
         * 
         * @param {type} username
         * @param {type} password
         * @param {type} emailaddress
         * @param {type} homepage
         * @param {type} callback
         * @returns {undefined}
         */
        register : function (username, password, emailaddress, homepage, callback) {
            var data = {};
            if (username)     data['username']      = username;
            if (password)     data['password']      = password;
            if (emailaddress) data['emailaddress']  = emailaddress;
            if (homepage)     data['homepage']      = homepage;
            $.ajax({
                url      : _API + 'user_register/',
                dataType : 'json',
                type     : 'post',
                data     : data
            }).done(callback);
        },
        search : function () {
            
        },
        unregister : function () {
            
        },
        updateinfo : function () {
            
        }
    };
};

