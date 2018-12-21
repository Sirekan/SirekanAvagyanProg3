var socket = io.connect('http://localhost:3000/');
function setup(){
	createCanvas(40 * 15,20 * 15);
	background('#acacac');
}
var xoteri_guyn = '';
socket.on('matrix',function(data){
	for(var i in data)
	{
		for(var j in data[i])
		{
			if(data[i][j] == 0)
			{
				fill('#acacac');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 1)
			{
				fill(xoteri_guyn);
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 2)
			{
				fill('yellow');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 3)
			{
				fill('red');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 4)
			{
				fill('orange');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 5)
			{
				fill('black');
				rect(j * 15,i * 15,15,15);
			}
		}
	}
});
socket.on('number',function(data){
	if(data == 0)
	{
		xoteri_guyn = 'green';
		$(document).ready(function(){
			$(".h1_text").text('Գարուն');
		});
	}
	else if(data == 1)
	{
		xoteri_guyn = 'lightgreen';
		$(document).ready(function(){
			$(".h1_text").text('Ամառ');
		});
	}
	else if(data == 2)
	{
		xoteri_guyn = 'lightyellow';
		$(document).ready(function(){
			$(".h1_text").text('Աշուն');
		});
	}
	else if(data == 3)
	{
		xoteri_guyn = 'lightblue';
		$(document).ready(function(){
			$(".h1_text").text('Ձմեռ');
		});
	}
});
$(document).ready(function(){
        $('<div></div>').attr({
            'id':'statica',
        }).appendTo('body').css({
            'width':'500px',
            'height':'500px',
            'position':'absolute',
            'left':'650px',
            'top':'0px',
            'border':'solid black',
            'overflow':'scroll'
        });
        socket.on('obj',function(data){
            $('#statica').empty();
            if(data != [])
            {
                for(var i = 0;i<data.length;++i){
                    var anun = data[i].name;
                    var patjar = data[i].patjar;
                    $('<p></p>').attr({
                        'class':'text',
                    }).appendTo('#statica').text(anun + ' --was killed--  ' + patjar);
                }
            }
        });
    });