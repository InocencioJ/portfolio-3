/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//this code changes the last p code text in the html page to red
$('document').ready(function() {
    $('p:last').css('color', 'red');

//this code makes css hide objects on the page
    $('#show').css('visibility', 'hidden');
//this tells the code if the object is clicked then hide the page
    $('#hide').bind('click', hideThePage);
//this code tells the code if the 
    $('#show').bind('click', showThePage);
//the accordion code adds an organizer for a slected class
    $('#superHumans').accordion({header: "h3"});
//
    $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});
//this code shows the page after being hidden
function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
//this code hides the html page
function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}



$("document").ready(function() {

    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);

});

function replaceWHtml() {
    $('#h3Tag').html('<h6>Now I\'m an h6<\h6>');

}

function replaceWText() {
    $('#h3Tag').text('<h6>Now I\'m an h6<\h6>');

}

function mouseOverMe() {
    $("#second").html("hello");

}

function mouseOutMe() {
    $("#second").html("bye");

}
