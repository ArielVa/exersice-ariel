import {Game} from "./game";

export class View {
	private inputGuess: HTMLInputElement
	private inputGuessCells: HTMLInputElement[] = [];
	private btnOK: HTMLButtonElement;

	constructor(private game: Game) {
		this.inputGuess =  document.getElementById("input-guess") as HTMLInputElement;

		for(let i=1; i<7; i++) {
			for(let j=1; j<6; j++) {
				this.inputGuessCells.push(document.getElementById("input_" + i + "_" + j) as HTMLInputElement);
			}
		}

		this.btnOK = document.getElementById("button-ok") as HTMLButtonElement;

		// this.btnOK.addEventListener('click', this.guess.bind(this, this.inputGuess.value));
		// this.btnOK.addEventListener('click', this.onBtnClickedCb.bind(this, this.inputGuess.value))
		this.btnOK.addEventListener('click', () => {
			this.game.addGuess(this.inputGuess.value);
			console.log(this.game)
			this.renderGame(game)
		});
	}



	private renderGame(game: Game): void {

		const start = (game.NumOfFilledRows - 1) * game.WordLength;
		const end = start + game.WordLength;
		console.log(start, end)
		for (let i=start; i<end; i++) {
			const cellStatus = game.Cells[i].CellContent;
			this.inputGuessCells[i].value = game.Cells[i].CellContent;
			switch (cellStatus) {

			}

		}
		// if(!game.isGameOver()) {
// 	game.addGuess(input.value)
// 	if(game.hasPlayerWon()) {
// 		console.log("Player Won")
// 	}
// } else {
//
// 	console.log("Game Over")
// }
// console.log(game)
	}

}