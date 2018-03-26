# group_6_Project2

## **PLAY DAY EVENTS**
"This app" is an easy to use tool to help parents, families, and caregivers find age approprite events in the DMV area.
The applicable age ranges for this app are from 0-12 year. "App name" will allow you to choose from events at Libraries, Museums & Zoo, and
Park & Recreational Facilities. Each subject will show a variety of events per age group chosen in the DMV area.

## **Deployment**
  "heroku"

## **Installation on command line**  

`npm install`
`mysql.server start`
`node server.js`

### *Visit*
**https://play-day-events.herokuapp.com/**

## **Built With**
 -  [Bootstrap](https://getbootstrap.com/) and Custom CSS
 -  [jQuery](https://jquery.com/)
 -  mySQL Database
 -  [Google Maps](https://maps.google.com/) API
 -  API
 -  [Slick](http://kenwheeler.github.io/slick/)

## **Code Example**

`// LOGIN MODAL
$(document).ready(function(){
});
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    });
    $('.error').removeClass('alert alert-danger').html('');
}`

## **Credits**
 **This application was built by**
 *Athina (github.com/Coolaide)*
 *Dennis (github.com/aksoyludeniz)*
 *Amber (github.com/arunge33)*
 *Karon (github.com/Kwii856)*
 *Andrew (github.com/mugendiz)*
