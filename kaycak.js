var varib = require('./var.js');
module.exports.Kaycak = class Kaycak{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    cord(){
        this.cords = [
            [this.x - 1,this.y - 1],
            [this.x    ,this.y - 1],
            [this.x + 1,this.y - 1],
            [this.x - 1,this.y    ],
            [this.x + 1,this.y    ],
            [this.x - 1,this.y + 1],
            [this.x    ,this.y + 1],
            [this.x + 1,this.y + 1]
        ];
        return this.cords;
    }
    cordTrue(t){
        var ret = this.cord();
        var trueCord = [];
        for(var i = 0;i<ret.length;i++)
        {
            if(ret[i][0] <= (varib.matrix[0].length - 1) && ret[i][0] >= 0 && ret[i][1] <= (varib.matrix.length - 1) && ret[i][1] >= 0)
            {
                if(varib.matrix[ret[i][1]][ret[i][0]] == t)
                {
                    trueCord.push(ret[i]);
                }
            }
        }
        return trueCord;
    }
    move(){
        if(random(this.cordTrue(0))){
            var arrcord = random(this.cordTrue(0));
            varib.matrix[arrcord[1]][arrcord[0]] = 4;
            varib.matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
        }
    }
    fireArray(){
        var cordFire = [];
        var verjArr = [];
        for(var i = 0;i<varib.matrix.length;i++)
        {
            cordFire.push([this.x - (i+1),this.y - (i+1)]);
            cordFire.push([this.x + (i+1),this.y - (i+1)]);
            cordFire.push([this.x - (i+1),this.y + (i+1)]);
            cordFire.push([this.x + (i+1),this.y + (i+1)]);
        }
        for(var i = 0;i<cordFire.length;i++)
        {
            if(cordFire[i][0] >= 0 && cordFire[i][1] >= 0 && cordFire[i][1] <= (varib.matrix.length-1) && cordFire[i][0] <= (varib.matrix[0].length-1))
            {
                verjArr.push(cordFire[i]);
            }
        }
        return verjArr;
    }
    fire(){
        var arr = this.fireArray();
        for(var i = 0;i<arr.length;i++){
            var x_ = arr[i][0];
            var y_ = arr[i][1];
            if(varib.matrix[y_][x_] != 4){
                if(varib.matrix[y_][x_] == 1)
                {
                    varib.matrix[y_][x_] = 0;
                    for(var j = 0;j<varib.xoter.length;j++)
                    {
                        if(varib.xoter[j].x == x_ && varib.xoter[j].y == y_){
                            varib.xoter.splice(j, 1);
                        }
                    }
                }
                else if(varib.matrix[y_][x_] == 2)
                {
                    varib.matrix[y_][x_] = 0;
                    for(var j = 0;j<varib.xotakerner.length;j++)
                    {
                        if(varib.xotakerner[j].x == x_ && varib.xotakerner[j].y == y_){
                            varib.xotakerner.splice(j, 1);
                            var obj = {
                    name        : 'xotaker',
                    time        : varib.time,
                    patjar  : 'kaycakic'
                }
                varib.arr_obj.push(obj);
                        }
                    }
                }
                else if(varib.matrix[y_][x_] == 3)
                {
                    varib.matrix[y_][x_] = 0;
                    for(var j = 0;j<varib.gishatichner.length;j++)
                    {
                        if(varib.gishatichner[j].x == x_ && varib.gishatichner[j].y == y_){
                            varib.gishatichner.splice(j, 1);
                            var obj = {
                    name        : 'gishatich',
                    time        : varib.time,
                    patjar  : 'kaycakic'
                }
                varib.arr_obj.push(obj);
                        }
                    }
                }
                else if(varib.matrix[y_][x_] == 5)
                {
                    varib.matrix[y_][x_] = 0;
                    for(var j = 0;j<varib.hakakaycakner.length;j++)
                    {
                        if(varib.hakakaycakner[j].x == x_ && varib.hakakaycakner[j].y == y_){
                            varib.hakakaycakner.splice(j, 1);
                            var obj = {
                    name        : 'hakakaycak',
                    time        : varib.time,
                    patjar  : 'kaycakic'
                }
                varib.arr_obj.push(obj);
                        }
                    }
                }
            }
        }
    }
}