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

        let randomizate = function() { return Math.floor(Math.random() * 10)};


        for(let decker = 1; decker <= 4; decker++) {
            let counter = 0;
            while (counter < 4 - decker + 1) {
                let xpoint = randomizate();
                let ypoint = randomizate();

                let direction = this._isAbleSeveralDeckerPoint(map, xpoint, ypoint, decker);
                switch (direction) {
                    case "left" :
                        for (let i = xpoint; i > xpoint - decker; --i) {
                            map[i][ypoint] = decker;
                        }
                        counter++;
                        break;
                    case "right" :
                        for (let i = xpoint; i < xpoint + decker; ++i) {
                            map[i][ypoint] = decker;
                        }
                        counter++;
                        break;
                    case "top" :
                        for (let j = ypoint; j < ypoint + decker; ++j) {
                            map[xpoint][j] = decker;
                        }
                        counter++;
                        break;
                    case "down" :
                        for (let j = ypoint; j > ypoint - decker; --j) {
                            map[xpoint][j] = decker;
                        }
                        counter++;
                        break;
                }
            }
        }
        return map;
    };

    _isAbleSeveralDeckerPoint(map, xpoint, ypoint, deckerSize){
        /* left, right, down, top borders */
        let leftGroup = [((xpoint - deckerSize) === -1) ? 0 : (xpoint - deckerSize),
            ((xpoint + 1) === 10) ? 9 : (xpoint + 1),
            ((ypoint - 1) === -1) ? 0 : (ypoint - 1),
            ((ypoint + 1) === 10) ? 9 : (ypoint + 1)];
        let rightGroup = [((xpoint - 1) === -1) ? 0 : (xpoint - 1),
            ((xpoint + deckerSize) === 10) ? 9 : (xpoint + deckerSize),
            ((ypoint - 1) === -1) ? 0 : (ypoint - 1),
            ((ypoint + 1) === 10) ? 9 : (ypoint + 1)];
        let downGroup = [((xpoint - 1) === -1) ? 0 : (xpoint - 1),
            ((xpoint + 1) === 10) ? 9 : (xpoint + 1),
            ((ypoint - deckerSize) === -1) ? 0 : (ypoint - deckerSize),
            ((ypoint + 1) === 10) ? 9 : (ypoint + 1)];
        let upGroup = [((xpoint - 1) === -1) ? 0 : (xpoint - 1),
            ((xpoint + 1) === 10) ? 9 : (xpoint + 1),
            ((ypoint - 1) === -1) ? 0 : (ypoint - 1),
            ((ypoint + deckerSize) === 10) ? 9 : (ypoint + deckerSize)];

        let groups = {"left" : leftGroup, "right" : rightGroup, "down" : downGroup, "up" : upGroup};
        //groups.sort(function(){return Math.floor(Math.random())});
        let trueGroups = [];
        for (let group in groups){
            if (this._isAbleConcreteDecker(map, groups[group])){
                trueGroups.push(group);
            }
        }
        return trueGroups.length > 0 ? trueGroups[Math.floor(Math.random() * 10) % trueGroups.length] : 'none';
    }

    _isAbleConcreteDecker(map, group){
        for (let i = group[0]; i <= group[1]; ++i) {
            for (let j = group[2]; j <= group[3]; ++j) {
                if (i < 0 || i > 9 || j < 0 || j > 9 || map[i][j] !== 0) {
                    return false;
                }
            }
        }
        return true;
    }
}

const single_logic = new SingleLogic();
single_logic.getMap();
//alert(single_logic.opponnent_map);


