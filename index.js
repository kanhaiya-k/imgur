let div = document.getElementById("main-div-imageData");
getproduct();
let url =
  "https://pixabay.com/api/?key=19039698-70d84fc349952a4a57cf2d93d&safesearch=true&per_page=200&page=3";
async function getproduct() {
  const response = await fetch(url);
  const data = await response.json();
  showproduct(data.hits);
}

function showProduct(data) {
  data.forEach(function (item) {
    let divison = document.createElement("div");

    let img = document.createElement("img");
    img.src = item.largeImageURL;
    img.style.width = "200px";
    img.style.height = "200px";
    divison.appendChild(img);
    div.appendChild(divison);
  });
}

// Language: javascript
// Path: index.js
let div = document.getElementById("main-div-imageData");
getproduct();
let url =
  "https://pixabay.com/api/?key=19039698-70d84fc349952a4a57cf2d93d&safesearch=true&per_page=200&page=3";
async function getproduct() {
  const response = await fetch(url);
  const data = await response.json();
  showproduct(data.hits);
}

function showProduct(data) {
  data.forEach(function (item) {
    let divison = document.createElement("div");

    let img = document.createElement("img");
    img.src = item.largeImageURL;
    img.style.width = "200px";
    img.style.height = "200px";
    divison.appendChild(img);
    div.appendChild(divison);
  });
}

// data.forEach(function (product) {
//   let div = document.createElement("div");
//   let name = document.createElement("p");
//   let tag = document.createElement("p");
//   let img = document.createElement("img");
//   let tags = document.createElement("p");
//   let likes = document.createElement("p");
//   let views = document.createElement("p");
//   let downloads = document.createElement("p");
//   let comments = document.createElement("p");
//   let user = document.createElement("p");
//   let user_id = document.createElement("p");
//   img.style.width = "20%";
//   img.style.height = "25%";
//   img.style.borderRadius = "10px";
//   img.style.border = "1px solid black";
//   img.style.margin = "10px";
//   img.style.padding = "10px";
//   img.style.display = "float";
//   img.style.float = "left";
//   img.style.floatDirection = "row";
//   img.style.marginTop = "15%";
//   img.style.display = "cover";
//   img.src = product.largeImageURL;
//   tag.innerHTML = product.tags;
//   views.innerHTML = product.views;
//   likes.innerHTML = product.likes;
//   user_id.innerHTML = product.user_id;
//   downloads.innerHTML = product.downloads;
//   comments.innerHTML = product.comments;
//   user.innerHTML = product.user;
//   user_id.innerHTML = product.user_id;
//   name.innerText = product.user;
//   div.append(img, name, likes, views, downloads, comments, user, user_id);
//   images.append(div);
// });
// }

// getproduct();
