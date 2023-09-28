axios.get("http://localhost:3000/api/tasks").then((response) => {
  let data = "";
  response.data.map((res) => {
    data += `
   
    <tr>
   <td><div> Username:${res.email}</div></td> <td><div>Password:${res.password}</div></td>
 <td> <div><button id=${res.id} class="button" onclick="deleteFun(this)" id="button"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
    <path d="M1 6.75085H27.8333" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M24.0566 6.75078H4.7675L4.58491 9.70336C4.3502 13.4989 4.54926 17.3089 5.17824 21.0594L5.41921 22.4962C5.66158 23.9414 6.91252 25 8.37789 25H20.4462C21.9116 25 23.1626 23.9414 23.4049 22.4962L23.6459 21.0594C24.2749 17.3089 24.4739 13.4989 24.2392 9.70336L24.0566 6.75078Z" fill="#C4DCD3"/>
    <path d="M24.0566 6.75078H4.7675L4.58491 9.70336C4.3502 13.4989 4.54926 17.3089 5.17824 21.0594L5.41921 22.4962C5.66158 23.9414 6.91252 25 8.37789 25H20.4462C21.9116 25 23.1626 23.9414 23.4049 22.4962L23.6459 21.0594C24.2749 17.3089 24.4739 13.4989 24.2392 9.70336L24.0566 6.75078Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.05396 6.7508V5.79233C9.05396 4.52133 9.61847 3.30238 10.6233 2.40364C11.6281 1.5049 12.991 1 14.412 1C15.8331 1 17.196 1.5049 18.2008 2.40364C19.2056 3.30238 19.7701 4.52133 19.7701 5.79233V6.7508" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.1973 11.8839V19.8286" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.627 11.8839V19.8286" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg></button></div></td>  
   <td> <button class="button" id=${res.id} 
    onclick="starred(this)" ><svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5739 1.92523C13.9121 1.0948 15.0879 1.09481 15.4261 1.92522L17.6725 7.44085C18.1028 8.49754 19.0953 9.21863 20.2333 9.30139L26.1731 9.73337C27.0674 9.79841 27.4308 10.9167 26.7455 11.495L22.194 15.3358C21.322 16.0716 20.9429 17.2384 21.2159 18.3462L22.6405 24.1288C22.855 24.9995 21.9037 25.6906 21.142 25.2176L16.0827 22.0757C15.1134 21.4738 13.8866 21.4738 12.9173 22.0757L7.85799 25.2176C7.09627 25.6906 6.14497 24.9995 6.35947 24.1288L7.78414 18.3462C8.05708 17.2384 7.67798 16.0716 6.806 15.3358L2.25448 11.495C1.56922 10.9167 1.93258 9.79841 2.82687 9.73337L8.76671 9.30139C9.90466 9.21863 10.8972 8.49754 11.3275 7.44086L13.5739 1.92523Z" fill="#C4DCD3" stroke="#34574A" stroke-width="2"/>
    </svg>
    </button></td>
   
   
    </tr>
   `;
  });

  document.getElementById("data-container").innerHTML = data;
});
document.getElementById("submit").onclick = function (event) {
  event.preventDefault();

  const formdata = new FormData(document.querySelector("form"));
  axios
    .post("http://localhost:3000/api/tasks", {
      email: formdata.get("email"),
      password: formdata.get("password"),
    })
    .then(processResults);
};
let sum = [];
function deleteFun(myinput) {
  let id = myinput.id;

  axios.get("http://localhost:3000/api/tasks/" + id).then((res) => {
    sum.push(res.data);
    // console.log(sum);
    localStorage.setItem("data", JSON.stringify(sum));
  });

  axios
    .delete("http://localhost:3000/api/tasks/" + id)
    .then(() => {})
    .catch(() => {
      console.log("error");
    });
}
function processResults({ data }) {
  document.querySelector("form").reset();
}
let ids = [];
function starred(myinput) {
  let id = myinput.id;
  ids.push(id);
  localStorage.setItem("dataarr", JSON.stringify(ids));
}
let count = 0;
document.getElementById("form-div").style.display = "none";

function openWindow() {
  if (count % 2 == 0) {
    document.getElementById("form-div").style.display = "block";
  } else {
    document.getElementById("form-div").style.display = "none";
  }
  count++;
}
