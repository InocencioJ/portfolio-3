/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    $('.joshi').css('background-color', 'yellow');
    
    $('p:last').css('color', 'red');
    
});

$('document').ready(function(){
    
    $('#oneButton').bind('click', alertButtonClick);
    
    $('#textBox1').bind('blur', onBlurEvent)
                  .bind('focus', onFocusEvent)
                  .bind('onmousedown', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bind('change', onChangeEvent);
          
          $(window).resize(resizedWindow);
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