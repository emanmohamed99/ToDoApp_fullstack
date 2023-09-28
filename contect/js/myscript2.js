let ids = JSON.parse(localStorage.getItem("dataarr"));
let dataarr = [];
let arr2 = [];
console.log(ids);
ids.map((id, index) => {
  async function starredGet() {
    await axios.get("http://localhost:3000/api/tasks/" + id).then((res) => {
      dataarr.push(res.data);

      if (res.data.email != undefined) {
        document.getElementById("saved").innerHTML += `

    <div class="saved-container">
<div class="saved">
<div class="savedContainerNo"><h5>${index + 1}</h5></div>
<div><div><p><h6>username:</h6>  ${
          res.data.email
        }</p></div><div><p><h6>password:</h6>${
          res.data.password
        }</p></div></div>
</div> </div>`;
      }
    });
  }
  starredGet();
});
