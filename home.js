var name1 = localStorage.getItem("name");
window.onload = function(){
    var welcomeP = document.getElementById("welcomeParagraph");
    welcomeP.innerHTML="Welcome <strong style='color:#3a11b8;'>"+ name1 + "</strong> to our health habits website!";
}
