'use strict';

const execa = require('execa');
const chai = require('chai');
const expect = require('chai').expect;

describe('Test if cowboy is available', function () {
  let res;

  before(function (done) {
    execa.shell('node src/index.js cowboy')
      .then(result => {
        res = result.stdout;
        done();
      })
      .catch(error => {
        console.log(error);
        done();
      });
  });

  it('should be unavailable', function () {
    expect(res).to.eql('cowboy is unavailable');
  });
});

describe('Test if abcd736cjkdldid74b_fds8s7sbe is available', function () {
  let res;

  before(function (done) {
    execa.shell('node src/index.js abcd736cjkdldid74b_fds8s7sbe')
      .then(result => {
        res = result.stdout;
        done();
      })
      .catch(error => {
        console.log(error);
        done();
      });
  });

  it('should be available', function () {
    expect(res).to.eql('abcd736cjkdldid74b_fds8s7sbe is available');
  });
});

describe('Test without passing a package name', function () {
  let res;

  before(function (done) {
    execa.shell('node src/index.js')
      .then(result => {
        res = result.stdout;
        done();
      })
      .catch(error => {
        console.log(error);
        done();
      });
  });

  it('should return error', function () {
    expect(res).to.eql('No package name given. Please try: hex-name cowboy');
  });
});