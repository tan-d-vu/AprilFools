function searchMarketplace() {
  var term = document.getElementById("search-text").value;
  if (term !== "") {
    window.open("https://market.goadventurelist.com/?q=" + term);
  }
}
