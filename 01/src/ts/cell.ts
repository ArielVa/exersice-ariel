export enum CellStatus {
	EMPTY,
	WRONG,
	EXISTS,
	EXACT
}

export class Cell {

	constructor(private content: string = '', private cellStatus: CellStatus = CellStatus.EMPTY) {
	}

	get CellStatus(): CellStatus {
		return this.cellStatus;
	}

	set CellStatus(status: CellStatus) {
		this.cellStatus = status;
	}

	get CellContent(): string {
		return this.content;
	}
}