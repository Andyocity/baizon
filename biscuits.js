// Cookie Workspace - Andy Baizon 2016

//EU LAW BIT.
$(document).ready(function(){
  //alert('cookies');

  function setCookie(item){
    document.cookie = theme + "=" + item + ";";
    var x = document.cookie;
  };

  function showCookies(){
    alert(x);
  };

});
