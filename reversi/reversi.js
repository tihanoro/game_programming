//=============================
// reversi.js
// リバーシができるプログラム
//=============================

// 定数
//====================================================
const SPACE = 0;  // 空白
const BLACK = 1;  // 黒石
const WHITE = -1; // 白石

const BOARD_PX_SIZE = 500;              // 盤面のサイズ
const CELL_PX_SIZE = BOARD_PX_SIZE / 8; // マスのサイズ
const CELL_PX_R = CELL_PX_SIZE * 0.9;   // マスの半径
//====================================================

// マスの座標を管理するクラス
class Position {
    constructor(y=0, x=0){
        this.y = y;
        this.x = x;
    }
}

// 盤面クラス
class Board {
    DIR = [[-1, -1],[-1, 0],[-1, 1],
           [ 0, -1],        [ 0, 1],
           [ 1, -1],[ 1, 0],[ 1, 1]];
    constructor (){
        this.board = [];
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                this.board[i][j] = SPACE;
            }
        }

        this.turn = BLACK;
        this.move_num = 1;
    }

    init_board(){
        var x,y;
        for(y=0;y<8;y++){
            for(x=0;x<8;x++){
                this.board[y][x] = SPACE;
            }
        }
        this.board[3][3] = WHITE;
        this.board[3][4] = BLACK;
        this.board[4][3] = BLACK;
        this.board[4][4] = WHITE;

        this.turn = BLACK;
        this.move_num = 1;
    }

    get_discs(){
        var black_discs = 0;
    }
}



//=========================================
// 雑に作ったUI
//=========================================
//盤面を描写する関数
function printBoard(){
    //背景の設定
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 800, 800);

    //マスの設定
    ctx.strokeRect(0, 0, 800, 800);
    for(i=0;i<800;i+=100){
        for(j=0;j<800;j+=100){
            ctx.strokeRect(i, j, 100, 100);
        }
    }
    
    writeBlackCell(3, 3);
    writeWhiteCell(4, 3);
    writeWhiteCell(3, 4);
    writeBlackCell(4, 4);
}

//canvasを消す関数
function remove(){
    ctx.clearRect(0, 0, cs.width, cs.height);
}

//セルを書く関数
function writeBlackCell(y, x){
    console.log("get:"+y+","+x);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.arc(y*100 + 50, x*100 + 50, 45, 0, Math.PI*2, true);
    ctx.fill();
    console.log("put black cell");
}

function writeWhiteCell(y, x){
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.beginPath();
    ctx.arc(y*100 + 50, x*100 + 50, 45, 0, Math.PI*2, true);
    ctx.fill();
    console.log("put white cell");
}

document.addEventListener("DOMContentLoaded", function(){
    //指定されたラジオボタンの値を取得
    function getRadioValue(name){
        var result = "";
        var elems = document.getElementsByName(name);

        //ラジオボタンを走査し、チェック状態にあるかを確認
        for(var i=0, len = elems.length; i < len; i++){
            var elem = elems.item(i);
            //チェックされている項目の値を配列に追加
            if(elem.checked){
                result = elem.value;
                break;
            }
        }
        return result;
    }
    
    document.getElementById("btn").addEventListener("click", function() {
        var dataY = document.getElementById("y");
        var dataX = document.getElementById("x");
        var color = getRadioValue("color");
        if(color == "black"){
            writeBlackCell(dataY.value, dataX.value);
        }else{
            writeWhiteCell(dataY.value, dataX.value);
        }
    }, false);
}, false);

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("canvas").addEventListener("click", function(e) {
        var dataY = e.clientX;
        var dataX = e.clientY;
        if(e.button === 0){
            writeBlackCell(dataY.value, dataX.value);
        }else if(e.button === 2){
            writeWhiteCell(dataY.value, dataX.value);
        }
    }, false);
}, false);

var mouseX;
var mouseY;
/*
cs.onclick = function(e) {
    var rect = e.target.getBoundingClientRect();
    mouseX = Math.floor(e.clientX - Math.floor(rect.left)/100);
    mouseY = Math.floor(e.clientX - Math.floor(rect.top)/100);
    if(e.button === 0){
        writeBlackCell(mouseX,mouseY);
    }else if(e.button === 2){
        writeWhiteCell(mouseX,mouseY);
    }
}
*/