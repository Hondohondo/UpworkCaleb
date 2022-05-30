//Get the name input value and put it in a variable
const name = document.getElementById("name");
const nameValue = name.value;
console.log(nameValue);


//Insert into HTML
const namePara = document.getElementById("name-para");
console.log(namePara.innerText);
// namePara.innerText = "Moses Nandi";
namePara.innerText = nameValue;

//document.getElementById("_1234").checked = true; (check a radio button)
const role = document.querySelector('input[name="role"]:checked').value;
console.log(role);
/*const role = document.querySelector('input[name="role"]:checked');
const roleValue = role.value;
console.log(roleValue);*/

const rolePara = document.getElementById("role-para");
console.log(rolePara.innerText);
rolePara.innerText = role;




//Get preferred Game
const game = document.getElementById("preferred-game-system");
const gameValue = game.value;
console.log(gameValue);

const gamePara = document.getElementById("game-para");
console.log(gamePara.innerText);
gamePara.innerText = gameValue;


//Role Play - Serious
const rolePlay = document.querySelector('input[name="roleplay-serious"]:checked');
const rolePlayValue = rolePlay.value;
console.log(rolePlayValue);

if (rolePlayValue == "ambivalent") {
document.getElementById("ambivalent1b").checked = true;
}
if (rolePlayValue == "love-both") {
document.getElementById("love-both1b").checked = true;
}

//Get Slider input
const meter1 = document.getElementById("meter-1");
const meter1Value = meter1.value;
console.log(meter1Value);

const meter1b = document.getElementById("meter-1b");
const meter1bValue = meter1Value;
console.log(meter1bValue);
meter1b.value = meter1Value;
// meter1bValue = meter1Value;


//Serious - Shenanigans
const serious = document.querySelector('input[name="serious-shenanigans"]:checked');
const seriousValue = serious.value;
console.log(seriousValue);

if (seriousValue == "ambivalent") {
    document.getElementById("ambivalent2b").checked = true;
}
if (seriousValue == "love-both") {
    document.getElementById("love-both2b").checked = true;
}

//Get Slider 2 input
const meter2 = document.getElementById("meter-2");
const meter2Value = meter2.value;
console.log(meter2Value);

const meter2b = document.getElementById("meter-2b");
meter2b.value = meter2Value;

//Get Slider 3 input
const meter3 = document.getElementById("meter-3");
const meter3Value = meter3.value;

const meter3b = document.getElementById("meter-3b");
meter3b.value = meter3Value;

//Get Slider 4 input
const meter4Value = document.getElementById("meter-4").value;

const meter4b = document.getElementById("meter-4b");
meter4b.value = meter4Value;

//Get Slider 5 input
const meter5Value = document.getElementById("meter-5").value;

const meter5b = document.getElementById("meter-5b");
meter5b.value = meter5Value;

//Get Slider 6 input
const meter6Value = document.getElementById("meter-6").value;

const meter6b = document.getElementById("meter-6b");
meter6b.value = meter6Value;

//Get Slider 7 input
const meter7Value = document.getElementById("meter-7").value;

const meter7b = document.getElementById("meter-7b");
meter7b.value = meter7Value;

//Get Slider 8 input
const meter8Value = document.getElementById("meter-8").value;

const meter8b = document.getElementById("meter-8b");
meter8b.value = meter8Value;


//Story Based episodic
const storyBased = document.querySelector('input[name="storybased-episodic"]:checked');
const storyBasedValue = storyBased.value;
// console.log(seriousValue);

if (storyBasedValue == "ambivalent") {
    document.getElementById("ambivalent3b").checked = true;
}
if (storyBasedValue == "love-both") {
    document.getElementById("love-both3b").checked = true;
}


//Character Murder
const character = document.querySelector('input[name="character-murder"]:checked');
const characterValue = character.value;
// console.log(seriousValue);

if (characterValue == "ambivalent") {
    document.getElementById("ambivalent4b").checked = true;
}
if (characterValue == "love-both") {
    document.getElementById("love-both4b").checked = true;
}

//Inperson Online
const inperson = document.querySelector('input[name="inperson-online"]:checked');
const inpersonValue = inperson.value;
// console.log(seriousValue);

if (inpersonValue == "ambivalent") {
    document.getElementById("ambivalent5b").checked = true;
}
if (inpersonValue == "love-both") {
    document.getElementById("love-both5b").checked = true;
}

//Good Evil
const good = document.querySelector('input[name="good-evil"]:checked');
const goodValue = good.value;

if (goodValue == "ambivalent") {
    document.getElementById("ambivalent6b").checked = true;
}
if (goodValue == "love-both") {
    document.getElementById("love-both6b").checked = true;
}

//Good Evil
const homebrew = document.querySelector('input[name="homebrew-published"]:checked');
const homebrewValue = homebrew.value;

if (homebrewValue == "ambivalent") {
    document.getElementById("ambivalent7b").checked = true;
}
if (homebrewValue == "love-both") {
    document.getElementById("love-both7b").checked = true;
}
//Good Evil
const rule = document.querySelector('input[name="rule"]:checked');
const ruleValue = rule.value;

if (ruleValue == "ambivalent") {
    document.getElementById("ambivalent8b").checked = true;
}
if (ruleValue == "love-both") {
    document.getElementById("love-both8b").checked = true;
}



