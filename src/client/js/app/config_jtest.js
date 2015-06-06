'use strict';

describe('js/app/config', function() {
  beforeEach(function(done) {
    var that = this;
    require(['js/app/config'], function(config) {
      that.config = config;
      done();
    });
  });

  describe('app', function() {
    it('app.logged_in_cookie_name should be logged_in', function() {
      expect(this.config.app.logged_in_cookie_name).toEqual('logged_in');
    });
  });

  describe('apps/user', function() {
    it('apps.user.local_password_max_length should be 256', function() {
      expect(this.config.apps.user.local_password_max_length).toEqual(256);
    });
    it(
      'apps.user.facebook_request_url should be https://localhost:27974/api/user/access/facebook/auth',
      function() {
        expect(this.config.apps.user.facebook_request_url)
          .toEqual('https://localhost:27974/api/user/access/facebook/auth');
      }
    );
    it(
      'apps.user.facebook_redirect_url should be https://localhost:27974/api/user/access/facebook/callback',
      function() {
        expect(this.config.apps.user.facebook_redirect_url)
          .toEqual('https://localhost:27974/api/user/access/facebook/callback');
      }
    );
    it(
      'apps.user.twitter_redirect_url should be https://localhost:27974/api/user/access/twitter/callback',
      function() {
        expect(this.config.apps.user.twitter_redirect_url)
          .toEqual('https://127.0.0.1:27974/api/user/access/twitter/callback');
      }
    );
  });
});
