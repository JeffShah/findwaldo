var arr = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {
  arr.forEach(function(person, i){
    if (person === "Waldo") {
      found(person, i);

    }

  });

}

function actionWhenFound(person, i) {
  console.log("Found Waldo at index" + i + "!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);