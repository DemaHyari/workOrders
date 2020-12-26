$('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
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
  }
};
xmlhttp.open("GET", "../usersData.json", true);
xmlhttp.send();

let popUpWindow = document.getElementById("windowCreate"),
    addUser = document.getElementById("addUser"),

    close = document.getElementsByClassName("close")[0],
    cancel = document.getElementsByClassName("cancel")[0];

addUser.onclick = function() {
  popUpWindow.style.display = "block";
}
close.onclick = function() {
  popUpWindow.style.display = "none";
}
cancel.onclick = function() {
  popUpWindow.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == popUpWindow) {
    popUpWindow.style.display = "none";
  }
} 
var fr=new FileReader();
