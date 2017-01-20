$(function(){
  getPeople();

  getLikes();






});

//code runs on doc load, ajax gets array to 'appendperson' with
function getPeople(){
  $.ajax({
    url:'/bios',
    type: 'GET',
    success:appendPerson
  });
}

//called in getPEople, appends DOM with divs containing each person's information
function appendPerson(group){

  console.log(group);

  group.forEach(function(person) {
    $('#container').append('<div id="'+ person.name +'"><h3>'+ person.name+ '</h3><img src="'
     + person.url + '"/><p>' +
     person.bio + '</p>' + ' <button>Like</button></div>');

  });
}

//runs on like button click, ajax call gets likes object from likes.js
function getLikes(){
  console.log('working');
  $.ajax({
    url:'/likes',
    type: 'GET',
    success:appendLikes

  });

};

//appends likeobject to dom
function appendLikes(likeObject){

  $('.likes').remove();

  $('#Ahkillah').append('<div class="likes">Likes: ' + likeObject.ahkillah + '</div>');
  $('#Jake').append('<div class="likes">Likes: ' + likeObject.jake + '</div>');
  $('#Hue').append('<div class="likes">Likes: ' + likeObject.hue + '</div>');
  $('#Erik').append('<div class="likes">Likes: ' + likeObject.erik + '</div>');
}

//onlick event listener with new ajaxx to send a +1 to the server for a certain person
$(document).on('click', 'button', function() {
  console.log('hello');
  var person = $(this).parent().attr('id');
  var count = {val:1};
  $.ajax({
    url: '/likes/' + person,
    type: 'POST',
    data: count, //This is going to be our req on the server side. req.body.val
    success: getLikes
  })
})
