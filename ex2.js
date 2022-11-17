let Name = "Jewelle"; //
let Classes = ["ST", "AC2", "CF", "QBA", "GVT", "JLB"]; //
let String = "My name is " + Name + " and I am taking ";
for(let Index in Classes) {
if (Index < Classes.length - 1) {
String += Classes[Index] + ", ";
} else {
String += "and " + Classes[Index] + ".";
}
}
console.log(String);