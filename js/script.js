var full = document.querySelector('#full')
var haut = document.querySelector('#haut')
var bas = document.querySelector('#bas')
var text = document.querySelector('#text')
var name = document.querySelector('#name')
var loop;

setTimeout(function(){writeText("#name", "Caligula", 50, 0)},1000);

function writeText(target, message, delay, i) {
    
    if (i < message.length) {
        if (message[i]==='£'){
            $(target).html($(target).html()+'<br/>');
        }
        else{
            $(target).html($(target).html()+message[i]);
        }
        
        i++;
        loop=setTimeout(function(){writeText(target, message, delay, i)}, delay);
    }
}

function over() {
    writeText("#text", "Qu'ils me haïssent,£ pourvu qu'ils me craignent.", 30, 0);
}
function out() {    
    text.textContent = "";
    clearTimeout(loop); 
}