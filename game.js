function getRandomColor() {
    var min = Math.floor
    var random = Math.random
    var total = 255;
    return 'rgb(' + min(random()*total) + ', ' + min(random()*total) + ', ' + min(random()*total) + ')';
}
var colorsList = []
function getSquaresColor(squares){
	for(var i = 0; i < squares; i++){
		colorsList.push(getRandomColor())
	}
	return colorsList
}

reset = document.querySelector('a')
var header = document.querySelector('h1')
var colorHeader = document.querySelector('#colorDisplay')
var colorsList = getSquaresColor(6)
var colorPicked = colorsList[Math.floor(Math.random() * 6)]
console.log(colorPicked)
var square = document.querySelectorAll(".square")
tryAgain = document.querySelector('#tryAgain')


colorHeader.textContent = colorPicked

function resetColors(){
	for(var i = 0; i < colorsList.length; i++){
		square[i].style.background = colorsList[i];
	}

}

resetColors()

square.forEach(function(box){
	box.addEventListener('click', function(){
		if(box.style.background == colorPicked){
			for(var i = 0; i < colorsList.length; i++){
				square[i].style.background = colorPicked;
			}
		header.style.background = colorPicked;
		tryAgain.textContent = 'You Won!!';
		} else {
			box.style.background = '#232323'
			tryAgain.textContent = "Try Again"

		}
	})
}) 

reset.addEventListener('click', function(){
	resetColors()
	header.style.background = 'steelblue';
	tryAgain.textContent = ''

}) 



