var inputHabilitar=document.getElementById("inputHabilitar")
var checkbox=document.getElementById("checkboxHabilitar")
checkbox.addEventListener("click",function(){
	if(checkbox.checked){
		inputHabilitar.removeAttribute("disabled")
		
		
	}else{
		inputHabilitar.setAttribute("disabled", "")
	}	
})


