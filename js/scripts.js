$(document).ready(function(){
  $('#like').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageTwo').addClass('blur');
    $('#imageThree').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('.wrapper').removeClass('blur');
    $(".column").removeClass('blur');
    $('#imageTwo').removeClass('blur');
    $('#imageThree').removeClass('blur');
    $('#galleryOne').removeClass('blur');
    $('.galleryTwo').removeClass('blur');
    $('.galleryThree').removeClass('blur');
    $('footer').removeClass('blur');
  });
  $('#likeTwo').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageOne').addClass('blur');
    $('#imageThree').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageOne').removeClass('blur');
  });
  $('#likeThree').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageOne').addClass('blur');
    $('#imageTwo').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageTwo').removeClass('blur');
  });
  $('#likeFour').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageFive').addClass('blur');
    $('#imageSix').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageFive').removeClass('blur');
    $('#imageSix').removeClass('blur');
    $('.galleryOne').removeClass('blur');
  });
  $('#likeFive').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageFour').addClass('blur');
    $('#imageSix').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageFour').removeClass('blur');
  });
  $('#likeSix').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageFour').addClass('blur');
    $('#imageFive').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryThree').addClass('blur');
    $('footer').addClass('blur');
  });
  $('#likeSeven').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageEight').addClass('blur');
    $('#imageNine').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageEight').removeClass('blur');
    $('#imageNine').removeClass('blur');
  });
  $('#likeEight').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageSeven').addClass('blur');
    $('#imageNine').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('footer').addClass('blur');
  });
  $('.close').click(function(){
    $('#imageSeven').removeClass('blur');
  });
  $('#likeNine').click(function(){
    $('.wrapper').addClass('blur');
    $(".column").addClass('blur');
    $('#imageSeven').addClass('blur');
    $('#imageEight').addClass('blur');
    $('.galleryOne').addClass('blur');
    $('.galleryTwo').addClass('blur');
    $('footer').addClass('blur');
  });
});
