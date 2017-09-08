var body;
var title;

function onload() {
    
    title = document.getElementById("title");
    body = document.getElementById("body");
    }
                
function add(){
    var li=document.createElement("li");
    var titleValue=title.value;
    var bodyValue=body.value;
    console.log(titleValue+bodyValue);
	document.getElementById("test").innerHTML = titleValue+"<br />"+bodyValue;
}
function clear(){
	document.getElementById("test").innerHTML = "fill the fields above to create a task";
}
