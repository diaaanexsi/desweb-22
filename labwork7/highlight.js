function highlight(){
	var input=document.getElementById("input");
	var inner=input.inner;
	var index=inner.indexOf();
	if (index >= 0) {
		inner=inner.substring(0,index)+ "<span class='highlight'>"+ inner.substring(index,index+text.length)+"</span>"+inner.substring(index+text.length)
		input.inner=inner;
	}
}
.highlight{
	background-color:yellow;
	text-color:red;
}