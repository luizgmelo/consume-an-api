// XMLHttpRequest object used to interact with servers
const xhr = new XMLHttpRequest();
// Create a server request using method GET
xhr.open("GET", "https://reqres.in/api/users?page=2");
// Send request to server
xhr.send()

// Informe type of response
xhr.responseType = "json";


// onload response
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const root = document.getElementById("root");

    const data = xhr.response;
    console.log(data["data"])

    const users = data["data"]

    for (let user in users) {
      // DOM Manipulation
      console.log(users[user].email)
      root.innerHTML += `
      <div class="card card-${users[user].first_name}">
        <h3>${users[user].first_name}</h3>
        <p>${users[user].email}</p>
        <img src="${users[user].avatar}">
      </div>
      `
    }

  } else {
    document.body.textContent = `Error: ${xhr.status}`
    console.log(`Error: ${xhr.status}`);
  }
};
