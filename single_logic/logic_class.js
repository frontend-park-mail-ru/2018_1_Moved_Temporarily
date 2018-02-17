'use strict'
/*
state:
 0 - empty
 1 - one-decker
 2 - two-decker
 3 - three-decker
 4 - four-decker
 */
class SingleLogic {

    constructor() {
        //this.my_map = [];
        this.opponnent_map = this._generateOpponnentMap();
        this.col = 0;
    };

    getMap(){
        for (let i = 0; i < 10; ++i) {
            console.log('' + this.opponnent_map[i][0] +
                ' ' + this.opponnent_map[i][1] +
                ' ' + this.opponnent_map[i][2] +
                ' ' + this.opponnent_map[i][3] +
                ' ' + this.opponnent_map[i][4] +
                ' ' + this.opponnent_map[i][5] +
                ' ' + this.opponnent_map[i][6] +
                ' ' + this.opponnent_map[i][7] +
                ' ' + this.opponnent_map[i][8] +
                ' ' + this.opponnent_map[i][9]);
        }
        //console.log(Math.floor(Math.random() * 10));
    }

    _generateOpponnentMap() {
       let map = [];
        for (let i = 0; i < 10; ++i){
            let row = [];
            for (let j = 0; j < 10; ++j){
                row.push(0);
            }
        map.push(row);
        };
        /*let randomizate = function() { return Math.floor(Math.random() * 10)};
        for (let i = 0; i < 3; ++i){
            map[randomizate()][randomizate()] = 1;
        }*/

        return map;
    };

}


const single_logic = new SingleLogic();
single_logic.getMap();
//alert(single_logic.opponnent_map);


