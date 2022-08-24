// javascript
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const convertBtn = document.getElementById("convert");
const inputEle = document.getElementById("input-id");

convertBtn.addEventListener("click", function () {
  const value = Number(inputEle.value);
  const length = document.getElementById("length");
  const volume = document.getElementById("volume");
  const mass = document.getElementById("mass");

  length.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;

  volume.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;

  mass.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
});
