function preload() {
vid = createVideo('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/video - converted with Clipchamp.mp4');

A1 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/lyd.mp3');
A2 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/swears.mp3');
A3 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/religion.mp3');
A4 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/trump.mp3');
A5 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/immigration.mp3');
A6 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/race.mp3');
A7 = createAudio('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/black.mp3');

vid.play();
A1.play();
A2.play();
A3.play();
A4.play();
A5.play();
A6.play();
A7.play();
}

function setup() {
createCanvas(windowWidth, windowHeight);
vid.position(350, 70);
vid.size(900, 450);

A1.volume([1]);
A2.volume([0]);
A3.volume([0]);
A4.volume([0]);
A5.volume([0]);
A6.volume([0]);
A7.volume([0]);


txt = createDiv('What do you want to BLOCK?');
	txt.position(0, 0);
	txt.style("background-color: #4E0000;");
	txt.style("padding: 7px 54px;");
	txt.style("height: 587px;");
	txt.style("color: #ffffff;");
	txt.style("font-family: Ariel, Arial, sans serif;"); 
	

button = createButton('Swear Words');
	button.position(0, 30);
	button.style("background-color: #fdacac;");
	
	button.mousePressed(noswears);

button1 = createButton('Religious Beliefs');
	button1.position(0, 125);
	button1.style("background-color: #f87573;");
	
	button1.mousePressed(noreligion);

button2 = createButton('Politicians');
	button2.position(0, 220);
	button2.style("background-color: #fc4b40;");
	
	button2.mousePressed(notrump);

button3 = createButton('Talk of Immigration');
	button3.position(0, 315);
	button3.style("background-color: #f2181a;");
	
	button3.mousePressed(noimmigration);

button4 = createButton('Talk of Race');
	button4.position(0, 410);
	button4.style("background-color: #cd1014;");
	
	button4.mousePressed(norace);


/*
button5 = createButton('Ethnicities');
	button5.position(0, 475);
	button5.style("background-color: #a10d10;;");
*/

sel = createSelect();
	sel.position(0, 505);
	sel.option('Ethnicities');
	sel.option('Hispanic');
	sel.option('Black');
	sel.option('White');
	
	sel.mouseMoved(change1);
	sel.mouseOut(change2);
	sel.changed(noblacks);

		sel.style("background-color: #a10d10;;");
		sel.style("width: 320px");
		sel.style("height: 95px");
		sel.style("border: none;");
		sel.style("font-size: 25px");
		sel.style("font-family: Ariel, Arial, sans serif;");
		sel.style("color: #ffffff;");
		sel.style("-webkit-transition-duration: 0.4s;");

}

function change1() {
sel.style("color: #000000;");
}

function change2() {
sel.style("color: #ffffff;");
} 


function noswears() {
A1.volume([0]);
A2.volume([1]);
A3.volume([0]);
A4.volume([0]);
A5.volume([0]);
A6.volume([0]);
A7.volume([0]);
}

function noreligion() {
A1.volume([0]);
A2.volume([0]);
A3.volume([1]);
A4.volume([0]);
A5.volume([0]);
A6.volume([0]);
A7.volume([0]);
}

function notrump() {
A1.volume([0]);
A2.volume([0]);
A3.volume([0]);
A4.volume([1]);
A5.volume([0]);
A6.volume([0]);
A7.volume([0]);
}

function noimmigration() {
A1.volume([0]);
A2.volume([0]);
A3.volume([0]);
A4.volume([0]);
A5.volume([1]);
A6.volume([0]);
A7.volume([0]);
}

function norace() {
A1.volume([0]);
A2.volume([0]);
A3.volume([0]);
A4.volume([0]);
A5.volume([0]);
A6.volume([1]);
A7.volume([0]);
}


function noblacks() {
A1.volume([0]);
A2.volume([0]);
A3.volume([0]);
A4.volume([0]);
A5.volume([0]);
A6.volume([0]);
A7.volume([1]);
}