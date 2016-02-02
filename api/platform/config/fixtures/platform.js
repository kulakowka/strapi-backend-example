'use strict';

/**
 * Creates default Platforms
 */
const data = [
  {slug: 'go', name: 'Go'},
  {slug: 'npm', name: 'npm'},
  {slug: 'maven', name: 'Maven'},
  {slug: 'rubygems', name: 'Rubygems'},
  {slug: 'packagist', name: 'Packagist'},
  {slug: 'pypi', name: 'Pypi'},
  {slug: 'nuget', name: 'NuGet'},
  {slug: 'bower', name: 'Bower'},
  {slug: 'wordpress', name: 'WordPress'},
  {slug: 'cpan', name: 'CPAN'},
  {slug: 'cocoapods', name: 'CocoaPods'},
  {slug: 'clojars', name: 'Clojars'},
  {slug: 'meteor', name: 'Meteor'},
  {slug: 'hackage', name: 'Hackage'},
  {slug: 'cran', name: 'CRAN'},
  {slug: 'atom', name: 'Atom'},
  {slug: 'cargo', name: 'Cargo'},
  {slug: 'emacs', name: 'Emacs'},
  {slug: 'pub', name: 'Pub'},
  {slug: 'sublime', name: 'Sublime'},
  {slug: 'biicode', name: 'biicode'},
  {slug: 'hex', name: 'Hex'},
  {slug: 'julia', name: 'Julia'},
  {slug: 'jam', name: 'Jam'},
  {slug: 'dub', name: 'Dub'},
  {slug: 'alcatraz', name: 'Alcatraz'},
  {slug: 'nimble', name: 'Nimble'},
  {slug: 'platformio', name: 'PlatformIO'},
  {slug: 'elm', name: 'Elm'}
]
exports.create = function () {
  return Promise.all([
    strapi.orm.collections.platform.findOrCreate(data, data)
  ]);
};
