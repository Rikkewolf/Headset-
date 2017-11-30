var checkbox;

function preload() {
swears = loadSound ('https://rikkewolf.github.io/Mini_exercises/mini_ex6/assets/relax.mp3');
trump = loadSound ();
democrate = loadSound ();
you = loadSound ();
them = loadSound ();
}

function setup() {
createCanvas(windowWidth, windowHeight); 
swears.play();
trump.play ();
democrate.play ();
you.play ();
them.play ();

checkbox = createCheckbox('No Swearwords', false);
checkbox.changed(NoSwears);
}  

function NoSwears() {
if (this.checked()) {
