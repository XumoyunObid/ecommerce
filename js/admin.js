document.addEventListener("DOMContentLoaded", async () => {
    axios.defaults.baseURL = "http://localhost:5050/api/v1/";

    let token = localStorage.getItem("token");
    let tbody = document.querySelector("tbody");

        let getUsersResponse = await axios.get("/users", {
            headers: { authorization: `Bearer ${token}` },
        });

        getUsersResponse.data.forEach((user) => {
            let tr = document.createElement("tr");

            // let userId = document.createElement("th");
            // userId.innerText = user._id;
            // userId.setAttribute("scope", "row");
            // tr.append(userId);

            let userName = document.createElement("td");
            userName.innerText = user.name;
            tr.append(userName);

            // let userPhone = document.createElement("td");
            // userPhone.innerText = user.phoneNumber;
            // tr.append(userPhone);

            // let userPassword = document.createElement("td");
            // userPassword.innerText = user.password;
            // tr.append(userPassword);

            tbody.append(tr);
        });
    });
