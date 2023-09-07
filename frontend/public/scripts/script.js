function hidecode() {
    var x = document.getElementById("mainCode");
    const changeText = document.querySelector("#hideButton");
    const changeMapSize = document.getElementById("mainPart");
    if (x.style.display === "none") {
      x.style.display = "block";
      changeText.textContent = "hide";
      changeMapSize.style.width = "65%";
    } else {
      x.style.display = "none";
      changeText.textContent = "show";
      changeMapSize.style.width = "100%";
    }
}
