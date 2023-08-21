document.getElementById("page2Button").addEventListener("click", function() {
    document.body.classList.add("hidden");
    setTimeout(function() {
      window.location.href = "index.html";
    }, 500);
  })