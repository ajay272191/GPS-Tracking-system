
//alert("hello")

const admin={
	
	id:'mjk',
	password:"abc123",
	
}
const userr={
	
	id:'csb150',
	pass:'csb15000',
	firstNamame:'fdfd',
	lastName:'bty',
	contact:'1233123443',
	email:'mjk@mail.com',
	address:'tezpurUnisersity'
}
const nameString=JSON.stringify(userr);
console.log(typeof nameString);
localStorage.setItem('csb15033',nameString);


function varifyAdmin(){
	
	let user=document.getElementById("username").value;
	let pass=document.getElementById("password").value;
	console.log("in varify Admin");
	if(user===admin.id && pass===admin.password){
		
		document.getElementById("loginStatus").innerHTML ="login successful";
		console.log("login  as Admin successfull");
		window.open("Home.html");
		
	}
	else{
		alert("wrong userName or password");
		console.log("login fail");
		var state=document.getElementById("loginStatus");
		setTimeout(()=>{
			state.textContent='Login fail';
		},5 )
	}
	
}
function varifyUser(){
	
	let us=document.getElementById("username").value;
	let pa=document.getElementById("password").value;
	
	console.log(us);
	console.log(userr.id)
	console.log(pa);
	console.log(userr.pass);
	if(pa.length>6 && us===userr.id && pa===userr.pass){
		console.log("logged in as user");
		window.open("user.html");
	}
	else{
		alert("wrong userName or password");
		console.log("login fail");
		var state=document.getElementById("loginStatus");
		setTimeout(()=>{
			state.textContent='Login fail';
		},5 )
	}
	
}











