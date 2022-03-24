function open_home() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("uses").style.display = "none";
}

function open_about() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "flex";
    document.getElementById("projects").style.display = "none";
    document.getElementById("uses").style.display = "none";
}

function open_projects() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "flex";
    document.getElementById("uses").style.display = "none";
}

function open_uses() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("uses").style.display = "flex";
}
