document.getElementById('toggle').addEventListener('click', function () {
  if (document.body.classList.contains("no-images")) {
   document.body.classList.remove("no-images");
  } else {
	  document.body.classList.add("no-images");
  }
});

document.getElementById('toggle-animation').addEventListener('click', function () {
  if (document.body.classList.contains("no-animation")) {
   document.body.classList.remove("no-animation");
  } else {
	  document.body.classList.add("no-animation");
  }
});