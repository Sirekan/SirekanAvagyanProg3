var varib = require('./var.js');
module.exports.Xotik = class Xotik{
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
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            varib.matrix[arrcord[1]][arrcord[0]] = 1;
            varib.xoter.push(new Xotik(arrcord[0],arrcord[1]));
        }
    }
}
console.log(module.exports);