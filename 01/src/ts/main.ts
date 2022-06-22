import {Game} from "./game";
import {View} from "./view";
import {View2} from "./view2";



const game = new Game();
console.log(game)
// const view = new View(game);

const  view2 = new View2(game.addGuess);


// const input =  document.getElementById("input-guess") as HTMLInputElement;
//
// const btnOK = document.getElementById("button-ok") as HTMLButtonElement;
//
// // this.btnOK.addEventListener('click', this.guess.bind(this, this.inputGuess.value));
// // this.btnOK.addEventListener('click', this.onBtnClickedCb.bind(this, this.inputGuess.value))
// btnOK.addEventListener('click', () => {
// 	if(!game.isGameOver()) {
// 		game.addGuess(input.value)
// 		if(game.hasPlayerWon()) {
// 			console.log("Player Won")
// 		}
// 	} else {
//
// 		console.log("Game Over")
// 	}
// 	console.log(game)
// });






