let data = JSON.parse(localStorage.getItem("data"));
console.log(data);
data.map((data, index) => {
  document.getElementById("deleted").innerHTML += `
  <div class="saved-container">
  <div class="saved">
  <div class="savedContainerNo"><h5>${index + 1}</h5></div>
  <div><div><p><h6>username:</h6>  ${
    data.email
  }</p></div><div><p><h6>password:</h6>${data.password}</p></div></div>
  </div> </div>`;
});
