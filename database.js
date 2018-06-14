alert("say database")
const userr={
	
	id:'csb15033',
	firstNamame:'mjk',
	lastName:'bty',
	contact:'1233123443',
	email:'mjk@mail.com',
	address:'tezpurUnisersity'
}
const nameString=JSON.stringify(userr);
console.log(typeof nameString);
localStorage.setItem('csb15033',nameString);

const nameObj=JSON.parse(nameString);
console.log(typeof nameObj);
console.log(nameObj.firstName);

