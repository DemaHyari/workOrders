const fs = require('fs');
//console.log(fs.readFileSync('usersData.json').toString());
let data = fs.readFileSync('usersData.json').toString();
for (let i = data.length - 1 ; i <= data.length; i--){
        var tableBody = document.getElementById("user");
        var row = tableBody.insertRow(0);
        var thId = row.insertCell(0);
        thId.setAttribute("scope", "row");
        thId.innerHTML = data[i].Id;

        var tdUN = row.insertCell(1);
        tdUN.innerHTML = data[i].Username;

        var tdPW = row.insertCell(2);
        tdPW.innerHTML = data[i].Password;

        var tdNo = row.insertCell(3);
        tdNo.innerHTML = data[i].PhoneNumber;

        var tdFN = row.insertCell(4);
        tdFN.innerHTML = data[i].FullName;

        var dot = row.insertCell(5);
        dot.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
}