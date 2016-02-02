'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets lifted.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports.bootstrap = function (cb) {
  const userFixtures = require('../../api/user/config/fixtures/index');
  const platformFixtures = require('../../api/platform/config/fixtures/index');
  const languageFixtures = require('../../api/language/config/fixtures/index');

  var promise = Promise.all([
    userFixtures.role.create().then(function () {
      return userFixtures.route.create();
    }),
    platformFixtures.platform.create(),
    languageFixtures.language.create()
  ]);
  promise.then(function () {
    cb();
  })
  .catch(function (err) {
    strapi.log.error(err);
    cb(err);
  });
};
