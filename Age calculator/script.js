const btn = document.getElementById("btn");
const bday = document.getElementById("bday");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = bday.value;
  if (birthdayValue == "") {
    alert("Please enter your Birthday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "Years" : "Year"}`
  }
}

function getAge(birthdayValue) { 
  const currentDate = new Date();
  const birthDate = new Date (birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  
  if (month < 0  || (month === 0 && currentDate.getDate()< birthDate.getDate()))
  {
    age--;
  }
  return age ;
}
btn.addEventListener("click",calculateAge);
