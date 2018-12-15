var varib = require('./var.js');
module.exports.Hakakaycak = class Hakakaycak{
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
            if(random(this.cordTrue(4))){
                var arrcord = random(this.cordTrue(4));
                var x_ = arrcord[0];
                var y_ = arrcord[1];
                varib.matrix[arrcord[1]][arrcord[0]] = 5;
                for(var j = 0;j<varib.kaycakner.length;j++)
                {
                    if(varib.kaycakner[j].x == x_ && varib.kaycakner[j].y == y_){
                        varib.kaycakner.splice(j, 1);
                        var obj = {
                    name        : 'kaycak',
                    time        : varib.time,
                    patjar  : 'Hakakaycaki koxmic'
                }
                varib.arr_obj.push(obj);
                    }
                }
                varib.matrix[this.y][this.x] = 0;
                this.x = arrcord[0];
                this.y = arrcord[1];
            }
            else if(random(this.cordTrue(0)))
            {
                var arrcord = random(this.cordTrue(0));
                varib.matrix[arrcord[1]][arrcord[0]] = 5;
                varib.matrix[this.y][this.x] = 0;
                this.x = arrcord[0];
                this.y = arrcord[1];
            }
        }
    }
}