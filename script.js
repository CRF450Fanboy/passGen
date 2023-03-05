const gen = document.getElementById('gen');

var tabCheck = false;

document.getElementById('home').addEventListener("click", function() {
  // console.log("ciao");
  // document.getElementById('gen').value = "bertoldo";
  checkGenerator();
});

document.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    // console.log("ciao");
    // document.getElementById('gen').value = "bertoldo";
    checkGenerator();
  }
});

var checkLower = 0;
var checkUpper = 0;
var checkNumber = 0;
var checkSpecial = 0;

function checkGenerator() {
  if (checkLower == 0 && checkUpper == 0 && checkNumber == 0 && checkSpecial == 0) {
    let result = "Nessun parametro scelto";
    console.log("result: " + result);
    gen.value = result;
  }
  else {
    generator();
  }

}
var greenBG = "background-color: #2cb67d; border: 3px solid #2cb67d; border-radius: 10px;"
var purpleBG = "border: 3px solid #7f5af0;border-radius: 30px;background-color: #7f5af0;"
document.getElementById('lowerCase').addEventListener('click', function() {
  if (checkLower == 0) {
    checkLower = 1;
    document.getElementById('lowerCase').style = greenBG;
  }
  else {
    checkLower = 0;
    document.getElementById('lowerCase').style = purpleBG;
  }
});

document.getElementById('upperCase').addEventListener('click', function() {
  if (checkUpper == 0) {
    checkUpper = 1;
    document.getElementById('upperCase').style = greenBG;
  }
  else {
    checkUpper = 0;
    document.getElementById('upperCase').style = purpleBG;
  }
});

document.getElementById('number').addEventListener('click', function() {
  if (checkNumber == 0) {
    checkNumber = 1;
    document.getElementById('number').style = greenBG;
  }
  else {
    checkNumber = 0;
    document.getElementById('number').style = purpleBG;
  }
});

document.getElementById('special').addEventListener('click', function() {
  if (checkSpecial == 0) {
    checkSpecial = 1;
    document.getElementById('special').style = greenBG;
  }
  else {
    checkSpecial = 0;
    document.getElementById('special').style = purpleBG;
  }
});

function generator() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '0123456789'
  var special = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  var result = '';
  var char = 0;
  console.log("length: " + document.getElementById('length').value);

  if (document.getElementById('length').value <= 16 && document.getElementById('length').value != 0) {
    for (var i = 0; i < document.getElementById('length').value; i++) {
      char = Math.floor(Math.random() * 4) + 1;
      // console.log(char);
      if (char == 1 && checkLower == 1) {
        result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      else if (char == 2 && checkUpper == 1) {
        result += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      }
      else if (char == 3 && checkNumber == 1) {
        result += number.charAt(Math.floor(Math.random() * number.length));
      }
      else if (char == 4 && checkSpecial == 1) {
        result += special.charAt(Math.floor(Math.random() * special.length));
      }
      else {
        i--;
      }
    }
    tabCheck = true;
  }
  else {
    result = "Lunghezza massima superata";
  }

  if (document.getElementById('length').value == "") {
    result = "Lunghezza non inserita";
  }
  else if(document.getElementById('length').value == "0")
  {
    result = "La lunghezza non può essere 0";
  }
  console.log("result: " + result);
  gen.value += "\n" + result;
  console.log("tabCheck: " + tabCheck);
  if(tabCheck == true)
  {
    document.getElementById('tabTitle').innerHTML = "🔐 | " + result;
  }
  tabCheck = false;
}