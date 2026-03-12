document.addEventListener("change", function(e) {
  if (e.target.type === "radio") {
    console.log(e.target.value);
  }
});
