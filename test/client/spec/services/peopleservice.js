'use strict';

describe('Service: Peopleservice', function () {

  // load the service's module
  beforeEach(module('angularDemoApp'));

  // instantiate service
  var Peopleservice;
  beforeEach(inject(function (_Peopleservice_) {
    Peopleservice = _Peopleservice_;
  }));

  it('should do something', function () {
    expect(!!Peopleservice).toBe(true);
  });

});
