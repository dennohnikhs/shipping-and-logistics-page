angular.module("myApp", []).controller("TabController", function () {
  this.activeTab = "overview";

  this.setTab = function (tabName) {
    this.activeTab = tabName;
  };

  this.isTabActive = function (tabName) {
    return this.activeTab === tabName;
  };
});
