function print() {
	console.log(pieceName);
	console.log(movement);
}

let pieceName = 'knIGht';
let movement;

pieceName = pieceName.toUpperCase();

switch (pieceName) {
	case 'TOWER':
		movement = 'strait line horizontally or vertically';
		print();
		break;
	case 'KNIGHT':
		movement = 'L-shaped move(2 in one direction then 1 to one side)';
		print();
		break;
	case 'BISHOP':
		movement = 'strait line diagonally';
		print();
		break;
	case 'KING':
		movement = '1 space in one direction';
		print();
		break;
	case 'QUEEN':
		movement = 'stait line horizontally, vertically or diagonally';
		print();
		break;
	case 'PAWN':
		movement = 'move 1 space forward, capture 1 space diagonally forward';
		print();
		break;
	default:
		console.log(`erro, ${pieceName} is not a chess piece`);
}
