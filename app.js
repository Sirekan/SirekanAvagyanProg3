var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

server.listen(app.get('port'), function () {
    console.log("Start");
});
io.on('connection', function (socket) {
});

var varib = require('./var.js');
var Xotik = require('./xot.js').Xotik;
var Xotakerik = require('./xotaker.js').Xotakerik;
var Gishatich = require('./gishatich.js').Gishatich;
var Kaycak = require('./kaycak.js').Kaycak;
var Hakakaycak = require('./hakakaycak.js').Hakakaycak;
var exanak_multiply = 0;
function main() {
    var file = "obj.json";
    for (var i in varib.arr_obj) {
        fs.appendFileSync(file, JSON.stringify(varib.arr_obj[i]) + '\n');
    }
}
console.log(Xotakerik);
//for matrix
for(var y = 0;y<varib.Y;y++)
{
    varib.matrix.push([]);
    for(var x = 0;x<varib.X;x++)
    {
        var k = Math.floor(Math.random() * 6);
        if(k != 4){
            varib.matrix[y].push(k);
        }
        else{
            varib.matrix[y].push(Math.floor(Math.random() * 4));
        }
    }
}
varib.matrix[varib.matrix.length-1][varib.matrix[0].length-1] = 4;
varib.matrix[0][0] = 4;
varib.matrix[varib.matrix.length-1][0] = 4;
varib.matrix[0][varib.matrix[0].length-1] = 4;

// matrix = [matrix[.............]]
// grancel
for(var y = 0;y<varib.matrix.length;y++)
    {
        for(var x = 0;x<varib.matrix[y].length;x++)
        {
            if(varib.matrix[y][x] == 1){
                varib.xoter.push(new Xotik(x,y));
            }
            else if(varib.matrix[y][x] == 2){
                varib.xotakerner.push(new Xotakerik(x,y));
            }
            else if(varib.matrix[y][x] == 3){
                varib.gishatichner.push(new Gishatich(x,y));
            }
            // else if(varib.matrix[y][x] == 4){
            //     varib.kaycakner.push(new Kaycak(x,y));
            // }
            else if(varib.matrix[y][x] == 5){
                varib.hakakaycakner.push(new Hakakaycak(x,y));
            }
        }
    }
//nkarel
setInterval(function(){
    varib.statica++;
    varib.time+=100;
    varib.mltXoter++;
    varib.mltXotaker++;
    varib.mltGishatich++;
    varib.mltKaycakner++;
    varib.mlthakakaycak++;
    if(varib.mltXoter >= 2){
        for(var i = 0;i<varib.xoter.length;i++){
            varib.xoter[i].move();
        }
        varib.mltXoter = 0;
    }
    if(varib.mltXotaker >= 3){
        for(var i = 0;i<varib.xotakerner.length;i++){
            varib.xotakerner[i].move();
        }
        varib.mltXotaker = 0;
    }
    if(varib.mltGishatich >= 4){
        for(var i = 0;i<varib.gishatichner.length;i++){
            varib.gishatichner[i].move();
        }
        varib.mltGishatich = 0;
    }
    if(varib.mltKaycakner >= 6){
        for(var i = 0;i<varib.kaycakner.length;i++){
            varib.kaycakner[i].move();
            varib.kaycakner[i].fire();
        }
        varib.mltKaycakner = 0;
    }
    if(varib.mlthakakaycak >= 7){
        for(var i = 0;i<varib.hakakaycakner.length;i++){
            varib.hakakaycakner[i].move();
        }
        varib.mlthakakaycak = 0;
    }
    console.log(varib.matrix);
    io.sockets.emit('matrix', varib.matrix);
    ////////////////////////////////
    exanak_multiply++;
    if (exanak_multiply >= 40) {
        exanak_multiply = 0;
        varib.exanak++;
        if (varib.exanak >= 4) {
            varib.exanak = 0;
        }
    }
    if (varib.exanak == 0) {
        io.sockets.emit('number', 0);
    }
    else if (varib.exanak == 1) {
        io.sockets.emit('number', 1);
    }
    else if (varib.exanak == 2) {
        io.sockets.emit('number', 2);
    }
    else if (varib.exanak == 3) {
        io.sockets.emit('number', 3);
    }
    ///////////////////////////////////
    if (varib.statica >= 6) {
        main();
        varib.arr_obj = [];
        varib.statica = 0;
    }
},100);