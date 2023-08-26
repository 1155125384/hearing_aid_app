function searchImages() {
  var apiKey = "AIzaSyCkE7kZVX_oX1qrhRY8AzqlpOOJxs5gduE";
  var cx = "e47ff95a466f7419d";
  var query = document.getElementById("searchInput").value;
  var imageContainer = document.getElementById("imageContainer");

  // Clear previous images
  imageContainer.innerHTML = "";

  // Fetch images from Google Custom Search API
  fetch(
    `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&searchType=image`
  )
    .then((response) => response.json())
    .then((data) => {
      var items = data.items;
      if (items && items.length > 0) {
        var imageURL = items[0].link;

        // Create and display the image
        var image = new Image();
        image.src = imageURL;
        imageContainer.appendChild(image);
      }
    })
    .catch((error) => {
      console.log("Error fetching images:", error);
    });
}
