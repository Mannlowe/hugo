const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

document.body.className = mode;

toggle.addEventListener("click", ()=>{
  localStorage.setItem("mode", mode === "light" ? "" : "light")
  body.classList.toggle("light")
 })
// const { exec } = require('child_process');
window.onload = function (){
  const { exec } = require('child_process');
 
// Example command: list files in the current directory
const command = 'ls';
 
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the command: ${error}`);
    return;
  }
  console.log(`Command output:\n${stdout}`);
});
} 
