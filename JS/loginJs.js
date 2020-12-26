function checkUser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let JsonData = this.responseText,
                data = JSON.parse(this.responseText),
                username = document.login.username.value,
                password = document.login.password.value;
            for (i = 0; i <= data.length; i++){
                if (data[i].Username == username && data[i].Password == password) {
                    window.location.replace("../usersPage.html" , true);
                    break;
                }
            }
        }

    }; 
    xmlhttp.open("GET", "../usersData.json", true);
    xmlhttp.send(); 
}