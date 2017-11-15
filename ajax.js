document.addEventListener("DOMContentLoaded", function() {

  var buttonOne = document.getElementById('buttonOne');

  buttonOne.addEventListener('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType:'text',
    });

  });

  var buttonTwo = document.getElementById('buttonTwo');

  buttonTwo.addEventListener('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // data: {},
      dataType:'text'
    }).done(function(responseData){
      console.log('Request ended well');
      document.getElementById('step3456').append(responseData);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Request failed');
      document.getElementById('step3456').append(jqXHR.responseText);
    }).always(function(){
      console.log('Hey, the request finished');
    });

  });

  var buttonThree = document.getElementById('buttonThree');

  buttonThree.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'TEXT',
      data: {
        amount: 5,
      }
    }).done(function(responseData){
      console.log('resquest to count worked well');
      document.getElementById('step7').append(responseData);
    });
  });

  var buttonFour = document.getElementById('buttonFour');

  buttonFour.addEventListener('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'text',
      data: {
        timezone: 'Asia/Kolkata',
      }
    }).done(function(response){
      console.log('You got response from /time');
      document.getElementById('step8').append(response);
    });
  });

  var buttonFive = document.getElementById('buttonFive');

  buttonFive.addEventListener('click', function(){
    var ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'car_ul');
    document.getElementById('step9').append(ulTag);

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'HTML'
    }).done(function(response){
      ulTag.innerHTML = response;
    });

  });

  var submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var userInput = document.getElementById('timezone')
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'text',
      data: {
        timezone: userInput.innerText,
      }
    }).done(function(response){
      console.log('You got response from /time');
      document.getElementById('step10').append(response);
    }).fail(function(jqXHR, textStatus, errorThrown){

      console.log('Request failed');
      document.getElementById('step10').append(jqXHR.responseText);
    });
  });
});
