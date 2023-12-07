document.addEventListener("DOMContentLoaded", async() => {
    axios.defaults.baseURL = "http://localhost:5050/api/v1/";


    let token = localStorage.getItem("token");
    let tbody = document.querySelector("tbody");


    let getCategories = await axios.get("/categories", {
        headers: { authorization: `Bearer ${token}`},
    });

    console.log(getCategories.data);

    getCategories.data.forEach((category) => {
        let tr = document.createElement("tr");

        let uzName = document.createElement("td");
        uzName.innerText = "uz: " + category.uz;
        uzName.setAttribute("scope", "col")
        tr.appendChild(uzName);

        let ruName = document.createElement("td");
        ruName.innerText = "ru: " + category.ru;
        tr.appendChild(ruName);

        tbody.append(tr)
    });
})