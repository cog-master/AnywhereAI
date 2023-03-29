function input() {
  for (let i = 0; i < document.querySelectorAll("input").length; i++) {
    document.querySelectorAll("input")[i].addEventListener("click", () => {
      var string = "";
      //Get the DOM element of whatever input user clicks on
      document.addEventListener("keypress", (key) => {
        // console.log(key);
        string = string + key.key;
      });
      console.log(string);
    });
  }
}
input();

// function inputs() {
//   for (let i = 0; i < document.querySelectorAll("input").length; i++) {
//     document.querySelectorAll("input")[i].addEventListener("click", () => {
//       //Get the DOM element of whatever input user clicks on
//       var currentInput = document.querySelectorAll("input")[i];
//       console.log(currentInput);

//       //Just for example purposes
//       if(currentInput.textContent){
//         console.log(currentInput.textContent)
//       }
//     });
//   }
// }
// inputs();
