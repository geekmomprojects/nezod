var earthBox = document.getElementById('earth_val');
var nezodBox = document.getElementById('nezod_val');
var telemoBox = document.getElementById('telemo_val');

earthBox.onkeyup = function(){
  nezodBox.value = earthBox.value;
  telemoBox.value = earthBox.value;
}

nezodBox.onkeyup = function(){
  earthBox.value = nezodBox.value;
  telemoBox.value = nezodBox.value;
}

telemoBox.onkeyup = function(){
  earthBox.value = telemoBox.value;
  nezodBox.value = telemoBox.value;
}
