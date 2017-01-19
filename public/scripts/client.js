$(function(){
  getPeople();

  getLikes();






});
function getPeople(){
  $.ajax({
    url:'/bios',
    type: 'GET',
    success:appendPerson
  });
}
function appendPerson(group){
  console.log("hello world!");
  console.log(group);
  // var likes=getLikes();
  // console.log(likes);
  group.forEach(function(person) {
    $('#container').append('<div id="'+ person.name +'">'+ person.name+ ' ' +
     person.bio + ' ' + '<img src="' + person.url + '"/> <button>Like</button></div>');

  });
}

function getLikes(){
  console.log('working');
  $.ajax({
    url:'/likes',
    type: 'GET',
    success:appendLikes

  });

};

function appendLikes(likeObject){

  $('.likes').remove();

  $('#Ahkillah').append('<div class="likes">' + likeObject.ahkillah + '</div>');
  $('#Jake').append('<div class="likes">' + likeObject.jake + '</div>');
  $('#Hue').append('<div class="likes">' + likeObject.hue + '</div>');
  $('#Erik').append('<div class="likes">' + likeObject.erik + '</div>');
}

$(document).on('click', 'button', function() {
  console.log('hello');
  var person = $(this).parent().attr('id');
  var count = {val:1};
  $.ajax({
    url: '/likes/' + person,
    type: 'POST',
    data: count, //This is going to be our req on the server side.
    success: getLikes
  })
})
