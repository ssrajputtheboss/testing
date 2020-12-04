function download(filename ,  txt){
	var element = document.createElement('a');
	element.style.display = 'none';
	element.setAttribute('href', 'data:text/plain;charset=utf-8' , encodeURIComponent(txt));
	element.setAttribute('download',filename);
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
/*
document.getElementById("download-button").addEventListener("click", function(){
	alert('working')
	var txt = document.getElementById("output-text").value;
	//alert(txt)
	var filename = "temp.txt";
	download(filename , txt);
},false);*/

function f(){
	//alert('working')
	var txt = document.getElementById("output-text").value;
	var lang = document.getElementById("languages").value;
	var ext = ".txt";
	if(lang == "Python")
		ext = ".py"
	else if (lang == "Java")
		ext = ".java";
	else if (lang == "JavaScript")
		ext = ".js";
	else if(lang == "C")
		ext = ".c";
	else if(lang == "C++")
		ext = ".cpp";
	var blob = new Blob([txt] , {type:"text/plain;charset=utf-8"});
	saveAs(blob ,  "codecheet"+ext);
	//download("codecheet.txt" , txt);

}

function remove(){
	var txt = document.getElementById("input-text").value;
	var lang =  String(document.getElementById("languages").value);
	if(lang=="Python"){
		txt=txt.replace(new RegExp("#.*(\n|$)") , "" );
		txt=txt.replace( /'''[a-zA-Z0-9\W\n]*'''/i,"");
	}else{
		txt=txt.replace(new RegExp("//.*(\n|$)"),"");
		txt=txt.replace( /\/\*[a-zA-Z0-9\W\n]*\*\//i ,"");
	}
	document.getElementById("output-text").value = txt;
}

function replacement(){
	var before = document.getElementById("input-word").value;
	var after = document.getElementById("replacement-word").value;
	if (before == "" || after == ""){
		alert("please enter something to replace")
		return;
	}
	before = before.trim();
	after =  after.trim();
	var txt = document.getElementById("input-text").value;
	txt = txt.replace(new RegExp(before,"ig") ,  after);
	//txt = txt.replace( new RegExp("^\\W*"+before+"(\\W|$)","ig") ,  after+" ");
	//txt = txt.replace( new RegExp("\\W"+before+"(\\W|$)","ig") ,  " " +after+" ");
	document.getElementById("output-text").value = txt;
}

function copytext(){
	var txt = document.getElementById("output-text");
	txt.select();
	txt.setSelectionRange(0,99999);
	document.execCommand("copy");
	//alert('copied!')
}

/*document.getElementById("remove-comments").addEventListener("click" , function(){
	alert('test')
} ,false);*/
