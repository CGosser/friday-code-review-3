function ranger(input) {
  var range = [];
  i = parseInt(input);
  while (i >= 0){
    range.unshift(String(i));
    i--
  }
  // console.log(range + " is the range");
  return range
}


function charSearcher(string, target) {
  var i = -1
  function hunter() {
    i++
  if(string[i] !== target && i <= string.length) {
      hunter();
    }
   if(i == string.length+1){
      return false;
    } else{
      return true;
    }
  } return hunter()
}




var marker1 = []
var marker2 = []
var marker3 = []
function cataloger(targetArray) {
  var array1 = targetArray.slice(0);
  // console.log(array1 + "this is array1");
  var search = "";
  for (var i = 0; i <= targetArray.length -1; i++){
    // console.log("cataloger loop has run " + i + " times");
  search = array1.shift();
  // console.log(search + " is the value of search and it has the type " + typeof search);
    if (charSearcher(search, "0")){
    marker1.push(i);
  } else if (charSearcher(search, "1")) {
    marker2.push(i);
  }
    else if (parseInt(search) % 3 == 0) {
    marker3.push(i);
    }
  }
  }
function editor(input) {
  var output = ranger(input)
  cataloger(output)
  for (var i = 0; i <= marker1.length; i++){
    output.splice(marker1[i], 1, "BEEP!")
  }
  for (var i = 0; i <= marker2.length; i++){
    output.splice(marker2[i], 1, "BOOP!")
  }
  for (var i = 0; i <= marker3.length; i++){
    output.splice(marker3[i], 1, "I'm sorry dave, I'm afraid I can't do that")
  }
  return output
}

$(document).ready(function() {
$("#inputs").submit(function(){
var otto = ranger($("#hal").val());
// console.log("otto is "+ otto + " and otto contains " + typeof otto[0]);
console.log($("#hal").val());
console.log("input is a " + typeof ($("#hal").val()));
console.log(editor($("#hal").val()));
// console.log(range);
// console.log(marker1);
// console.log(marker2);
// console.log(marker3);
});
});
