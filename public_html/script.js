/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*$('document').ready(function(){
    $('.joshi').css('background-color', 'yellow');
    
    $('p:last').css('color', 'red');    
});*/


$('document').ready(function(){
    
    $('#oneButton').bind('click', alertButtonClick);
    
    $('#textBox1').bind('blur', onBlurEvent)
                  .bind('focus', onFocusEvent)
                  .bind('onmousedown', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bind('change', onChangeEvent);
          
          $(window).resize(resizedWindow);
          
          $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

          $('#twoButton').bind('dblClickedMe');
});

function alertButtonClick(){
    alert("there was a button clicked");
}

function onBlurEvent()
{
    $("#second").html("you left the box");
}

function onFocusEvent()
{
    $("#second").html("you entered the box");
}

function onMDownEvent()
{
    $("#second").html("you left the box");
} 

function onMUpEvent()
{
    $("#second").html("you entered the box");
}

function onChangeEvent()
{
    $("#second").html("you changed the box");
} 

function resizedWindow()
{
    $("#second").html("Window was resized W: " + $(window).width() + "H:" + $(window).height());
} 

function mouseOverMe()
{
    $("#second").html("you put your cursor on my logo");
} 

function mouseOutMe()
{
    $("#second").html("you stopped touching my logo");
}

function dbClickedMe()
{
    $("#second").html("you double click my button");
}


$('#show').css('visibility', 'hidden');

$('#hide').bind('click', hideThePage);

$('#show').bind('click', showThePage);

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

$("document").ready(function(){
    
$('#replaceWHtml').bind('click', replaceWHtml);
$('#replaceWText').bind('click', replaceWText);

});

function replaceWHtml(){
    $('#h3Tag').html('<h6>Now I\'m an h6<\h6>');

}

function replaceWText(){
    $('#h3Tag').text('<h6>Now I\'m an h6<\h6>');

}