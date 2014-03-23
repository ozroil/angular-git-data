'use strict';

/* jasmine specs for controllers */
describe('GitData controllers', function() {

  describe('GitDataController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('gitdataApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/repos/dojo/dojo/pulls').
          respond([{title: 'Title1'}, {title: 'Title2'}]);

      scope = $rootScope.$new();
      ctrl = $controller('GitDataController', {$scope: scope});
    }));


    it('should create "gitdata" model with 2 titles fetched from xhr', function() {
      expect(scope.gitdata).toBeUndefined();
      $httpBackend.flush();

      expect(scope.gitdata).toEqual([{title: 'Title1'},
                                   {title: 'Title2'}]);
    });

  });
});


