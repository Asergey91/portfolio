$(document).ready(function(){
  home();
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(1)').click(function(){
    home();
  });
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(2)').click(function(){
    work();
  });
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(3)').click(function(){
    contact();
  });
});
function hideAll(){
  $('#HOME').hide();
  $('#WORK').hide();
  $('#CONTACT').hide();
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li').attr('class', '');
}
function home(){
  hideAll();
  $('#HOME').show('fast');
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(1)').attr('class', 'active');
}
function work(){
  hideAll();
  $('#WORK').show('fast');
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(2)').attr('class', 'active');
}
function contact(){
  hideAll();
  $('#CONTACT').show('fast');
  $('body > nav.navbar.navbar-inverse.navbar-fixed-top > div > ul:nth-child(2) > li:nth-child(3)').attr('class', 'active');
}
