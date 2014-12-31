'use strict';

describe('Service: UserData', function () {

  // load the service's module
  beforeEach(module('noorApp'));

  // instantiate service
  var UserData;
  beforeEach(inject(function (_UserData_) {
    UserData = _UserData_;
  }));

  it('should do something', function () {
    expect(!!UserData).toBe(true);
  });

});
