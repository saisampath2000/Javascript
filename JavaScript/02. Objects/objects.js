console.log("hello world")
const person = {
  firstName: "John",
  lastName: "Doe",
  id : 1234,
  fullName : function(){
      return this.firstName + " " + this.lastName;
  }
};
document.getElementById('methods').innerHTML = person.fullName();
