var x = 50
var y = 37

var result = x + y
console.log(x);
console.log("x");
console.log(y);
console.log(result);
console.log(x+y);

function addition(x, y){
  return x + y
}

console.log(addition(x,y));




var cars = ["Infiniti", "Jeep", "Lexus", "Mercedes"]
var colors = ["red", "black", "white", "silver"]
var carType = ["coupe", "suv", "sedan"]

console.log(cars[1]+colors[3]+carType[2])




var number = 125

if(number<100){
  alert ("your variable is less than 100")
} else{
  alert("your number,"+ number + ",is greater than or equal to 100 :)");
}



function doorGame(door) {
  console.log(typeof door);

  if (door === 1 ){
    return ("you win the grand prize");
} else if (door === 2)
  { return  ("you win a new car");
} else if (door === 3)
  { return ("no luck here");
} else{
  return ("win a free lunch");
}

}

var prize = doorGame(2)
  alert(prize);

var prize = doorGame(1);
  alert(prize);

var prize = doorGame(3);
alert(prize);

var prize = doorGame("lol");
alert(prize);
