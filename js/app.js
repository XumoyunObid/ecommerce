document.addEventListener("DOMContentLoaded", async () => {
    let formLogin = document.querySelector("#form-login");
    axios.defaults.baseURL = "http://localhost:5050/api/v1/";

    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();

        let number = formLogin[0].value;
        let password = formLogin[1].value;

        let { data } = await axios.post("/auth", {
            phoneNumber: number,
            password: password,
        });

        localStorage.setItem("token", data.token)
        console.log(data);
    });
});

