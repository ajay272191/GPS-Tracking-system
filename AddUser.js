function addDetail(){
	//alert("say database");
	var id=document.getElementById("id").value;
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var contact=document.getElementById("contact").value;
	
localStorage.setItem(id,id);
localStorage.setItem(name,name);
localStorage.setItem(email,email);
localStorage.setItem(contact,contact);
}