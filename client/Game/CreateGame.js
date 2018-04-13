"use strict";

import Widget from "../Modules/Blocks/Widget.js";
import {AddMouseEvent, TurnShips} from "./ArrangementShip.js";
import getMatrixShips from "./MatrixShips.js";
import gameLogic from "./GameLogic.js";


// Кнопки [перезагрузки поля], чтобы поле и кнопки не бегали вверх/вниз, фон за полем
// убрать _
// Добавить кнопку назад в меню [прекратить игру]

function createFirstGameScene() {
    let all_game = new Widget(document.body,"div", "all_game");

    let text = new Widget(document.body, "h1");
    text.text = "Разместите на поле ваши корабли";
    all_game.appendChildWidget(text);

    let turnButton = new Widget(document.body, "button", "turnButton");
    turnButton.text = "Turn ships";
    all_game.appendChildWidget(turnButton);
    turnButton.element.addEventListener('click', TurnShips);


    // Добавляем корабли
    let ship = 1;
    for (let i = 4; i > 0; i -= 1) {
        let space = new Widget();
        all_game.appendChildWidget(space);
        for (let j = i; j > 0; j -= 1){
            let inline_block = new Widget(document.body, "div", "inline_block");
            all_game.appendChildWidget(inline_block);
            let table_ship = new Widget(document.body, "table", "draggable");
            inline_block.appendChildWidget(table_ship);
            let td_ship = new Widget(document.body, "td", "shipX"+ship);
            td_ship.text = ship;
            table_ship.appendChildWidget(td_ship);
        }
        ship += 1;
    }

    // Добавляем фон за полем
    //let img_field = new Widget(document.body, "img", "img_field");
    //all_game.appendChildWidget(img_field);

    // Добавляем поле для расстановки
    let table_field = new Widget(document.body, "table", "table_field");
    all_game.appendChildWidget(table_field);
    let arr_letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 0; i <= 10; i += 1) {
        let tr_field = new Widget(document.body, "tr");
        table_field.appendChildWidget(tr_field);
        for (let j = 0; j <= 10; j += 1) {
            if (i === 0) {
                let td_field = new Widget(document.body, "td");
                td_field.text = arr_letters[j];
                tr_field.appendChildWidget(td_field);
            }
            else {
                if (j === 0){
                    let td_field = new Widget(document.body, "td");
                    td_field.text = i;
                    tr_field.appendChildWidget(td_field);
                }
                else {
                    let td_field = new Widget(document.body, "td", "droppable field");
                    tr_field.appendChildWidget(td_field);
                }
            }
        }
    }
    let space = new Widget();
    all_game.appendChildWidget(space);

    let next_button = new Widget(document.body, "button", "next_button");
    next_button.text = "Next";
    all_game.appendChildWidget(next_button);
    next_button.element.addEventListener('click', getMatrixShips);

    AddMouseEvent();

    // Перезагрузка поля
    // document.body.removeChild(all_game.element);
    // createFirstGameScreen();


}

function createSecoundGameScene(matrix_ships) {
    let all_game = new Widget(document.body,"div", "all_game");

    let text = new Widget(document.body, "h1", "inline_block h1_my");
    text.text = "Pro_gamer";
    all_game.appendChildWidget(text);
    text = new Widget(document.body, "h1", "inline_block h1_enemy");
    text.text = "Just_bot";
    all_game.appendChildWidget(text);

    createField(all_game, matrix_ships);
    createField(all_game, matrix_ships, 1);
}

function createField(all_game, matrix_ships, flag = 0) {
    let table_class = "enemy_field";
    if (flag) {
        table_class = "my_field";
    }
    let table_field = new Widget(document.body, "table", table_class);
    all_game.appendChildWidget(table_field);
    let arr_letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 0; i < 11; i += 1) {
        let tr_field = new Widget(document.body, "tr");
        table_field.appendChildWidget(tr_field);
        for (let j = 0; j < 11; j += 1) {
            if (i === 0) {
                let td_field = new Widget(document.body, "td");
                td_field.text = arr_letters[j];
                tr_field.appendChildWidget(td_field);
            }
            else {
                if (j === 0){
                    let td_field = new Widget(document.body, "td");
                    td_field.text = i;
                    tr_field.appendChildWidget(td_field);
                }
                else {
                    let td_field = new Widget(document.body, "td", "field_ship");
                    if (matrix_ships[10*(i-1)+(j-1)] && flag) {
                        td_field.element.classList.add("shipOK");
                    }
                    tr_field.appendChildWidget(td_field);
                    if (flag) {
                        td_field.element.id = (i-1) + "+" + (j-1);
                    }
                    else {
                        td_field.addEventHandler("click", () => {gameLogic(td_field.element, matrix_ships);});
                        td_field.element.id = (i-1) + "-" + (j-1);
                    }
                }
            }
        }
    }
};


export {createFirstGameScene, createSecoundGameScene};
