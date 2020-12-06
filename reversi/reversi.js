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