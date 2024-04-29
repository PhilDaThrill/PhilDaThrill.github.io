
// Fisher-Yates Shuffle Function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('panels');
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('randompanel'));

  // Shuffle array using Fisher-Yates
  shuffleArray(elementsArray);

  // Clear the container and re-append shuffled elements
  container.innerHTML = '';
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
});
