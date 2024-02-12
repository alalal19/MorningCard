const text = document.querySelectorAll(".letter");
const container = document.getElementById("container");
const messages = ["      Hallo Cantik ku Caca        ", "     Good Morning Sunshine     ", "  Gimana Tidurnya nyenyak gak? ", "     Have a Nice Day Sayang    ", "  Semangat Menjalani Hari ini  ", "       Love You Sayang         ", "   Jangan Lupa Senyum Selalu   "];
const colors = ['#eb4034', '#ab6865', '#d96f32', '#d4b22c', '#afc92c', '#71cc2b', '#27cc8a', '#26c9c4', '#277fcc', '#3d27cc', '#3d27cc', '#c4258d', '#b32036'];
var outputMessages = [];
var clickCount = 0;
var letters = [];

for(let i = 0; i < messages.length; i++){
	outputMessages.push(messages[i].split(''));
}

function breakDownMessage(message){
	let input = message.split('');
	let letters = [];
	
	for(let i = 0; i < text.length; i++){
		letters.push(document.getElementById(`${i}`));
	}
	
	letters.forEach((letter, i) => {
		setTimeout(()=>{
			animateLetters(letters[i]);	
			letter.innerHTML = input[i];
		}, 50);
		
	});
};

function animateLetters(letter){
		anime({
				targets: letter,
				textShadow: ["15px 25px 2px #383434", `35px ${clickCount*20}px 6px #383434`],
				scale: [
					{ value: 0.2, easing: "easeOutSine", duration: 300 },
					{ value: clickCount+1, easing: "easeOutSine", duration: 300 }
				],
				color: colors,
				easing: "easeOutInQuad",
				direction: "alternate",
				duration: 1000,
			  delay: 100,
				loop: 1
		});
};

breakDownMessage(messages[0]);

container.addEventListener("click", function () {
	clickCount++;
	console.log(clickCount);
	if(clickCount < messages.length){
	breakDownMessage(messages[clickCount]);
	} else {	
		clickCount = 0;
		breakDownMessage(messages[0])
	}
});