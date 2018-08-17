var range = [];
function ranger(input) {
  i = parseInt(input);
  while (i >= 0){
    range.unshift(i);
    i--
  }
}

$(document).ready(function() {
$("#inputs").submit(function(){
ranger($("#hal").val());
console.log(range);
});
});
