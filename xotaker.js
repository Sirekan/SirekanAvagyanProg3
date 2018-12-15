var varib = require('./var.js');
module.exports.Xotakerik = class Xotakerik{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.en = 8;
        this.gorcakic = 0;
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
        for(var i = 0;i<varib.xotakerner.length;i++)
        {
            if(varib.xotakerner[i].x == this.x && varib.xotakerner[i].y == this.y){
                varib.matrix[this.y][this.x] = 0;
                varib.xotakerner.splice(i, 1);
                var obj = {
                    name        : 'xotaker',
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
            varib.xotakerner.push(new Xotakerik(arrcord[0],arrcord[1]));
            varib.matrix[arrcord[1]][arrcord[0]] = 2;
            this.gorcakic = 0;
        }
    }
    move(){
        if(random(this.cordTrue(1)))
        {
            var arrcord = random(this.cordTrue(1));
            varib.matrix[arrcord[1]][arrcord[0]] = 2;
            for(var i = 0;i<varib.xoter.length;i++)
            {
                if(varib.xoter[i].x == arrcord[0] && varib.xoter[i].y == arrcord[1]){
                    varib.xoter.splice(i, 1);
                }
            }
            varib.matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en = 8;
            this.gorcakic++;
        }
        else if(random(this.cordTrue(0))){
            var arrcord = random(this.cordTrue(0));
            varib.matrix[arrcord[1]][arrcord[0]] = 2;
            varib.matrix[this.y][this.x] = 0;
            this.x = arrcord[0];
            this.y = arrcord[1];
            this.en--;
        }
        if(this.en <= 0){
            this.mahanal();
        }
        if(this.gorcakic >= 2){
            this.bazmanal();
        }
    }
}