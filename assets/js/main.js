// llamamos a board y snake
var border = document.getElementById("border");
var snake = document.getElementById("snake");

//Ponemos  variable globales  para guardar los  movimientos
var izqDer = 0;
var arribaAbajo = 0;

document.addEventListener("keyup", moverSnake);

function moverSnake(tecla){
    var teclaPresionada = tecla.keyCode;

    if (teclaPresionada == 39){
      izqDer += 20;
      snake.style.marginLeft = izqDer + "px";
        if (izqDer > 480){
          alert("Game Over");
          snake.style.marginLeft = "0px";
      }
    }else if (teclaPresionada == 37){
      izqDer -= 20;
      snake.style.marginLeft = izqDer + "px";
        if ( izqDer < 0){
          alert("Game Over");
          snake.style.marginLeft = "0px"
        }
    }else if( teclaPresionada == 40){
      arribaAbajo += 20;
      snake.style.marginTop = arribaAbajo +"px";
        if (arribaAbajo > 480){
          alert("Game Over");
          snake.style.marginTop ="0";
        }
    }else if (teclaPresionada == 38){
      arribaAbajo -= 20;
      snake.style.marginTop = arribaAbajo + "px";
      if (arribaAbajo < 0){
        alert("Game Over");
        snake.style.marginTop = "0px";
      }else {
        alert("Solo  con  Teclas");
      }
  }
}
