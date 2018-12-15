var varib = require('./var.js');
module.exports.Gishatich = class Gishatich{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.en = 5;
        this.gorcakic = 0;
        this.bool = true;
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
    mahanal(){
        for(var i = 0;i<varib.gishatichner.length;i++)
        {
            if(varib.gishatichner[i].x == this.x && varib.gishatichner[i].y == this.y){
                if(this.bool == true)
                {
                    varib.matrix[this.y][this.x] = 0;
                }
                else{
                    varib.matrix[this.y][this.x] = 1;
                }
                varib.gishatichner.splice(i, 1);
                var obj = {
                    name        : 'gishatich',
                    time        : varib.time,
                    patjar  : 'sovic'
                }
                varib.arr_obj.push(obj);
            }
        }
    }
    bazmanal(){
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            varib.gishatichner.push(new Gishatich(arrcord[0],arrcord[1]));
            varib.matrix[arrcord[1]][arrcord[0]] = 3;
            this.gorcakic = 0;
        }
    }
    move(){
        if(random(this.cordTrue(2)))
        {
            var arrcord = random(this.cordTrue(2));
            varib.matrix[arrcord[1]][arrcord[0]] = 3;
            for(var i = 0;i<varib.xotakerner.length;i++)
            {
                if(varib.xotakerner[i].x == arrcord[0] && varib.xotakerner[i].y == arrcord[1]){
                    varib.xotakerner.splice(i, 1);
                    var obj = {
                    name        : 'xotaker',
                    time        : varib.time,
                    patjar  : 'gishatchi koxmic'
                }
                varib.arr_obj.push(obj);
                }
            }
            if(this.bool == true)
            {
                varib.matrix[this.y][this.x] = 0;
            }
            else{
                varib.matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en = 5;
            this.gorcakic++;
            this.bool = true;
        }
        else if(random(this.cordTrue(1))){
            var arrcord = random(this.cordTrue(1));
            varib.matrix[arrcord[1]][arrcord[0]] = 3;
            if(this.bool == true)
            {
                varib.matrix[this.y][this.x] = 0;
            }
            else{
                varib.matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
            this.bool = false;
        }
        else if(random(this.cordTrue(0))){
            var arrcord = random(this.cordTrue(0));
            varib.matrix[arrcord[1]][arrcord[0]] = 3;
            if(this.bool == true)
            {
                varib.matrix[this.y][this.x] = 0;
            }
            else{
                varib.matrix[this.y][this.x] = 1;
            }
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
            this.bool = true;
        }
        if(this.en <= 0){
            this.mahanal();
        }
        if(this.gorcakic >= 5){
            this.bazmanal();
        }
    }
}