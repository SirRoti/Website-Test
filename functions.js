window.onload = function () {
    if (document.title.startsWith("Home")) {
        main_middle_programming_out();
        main_middle_minecraft_out();
    }
    else if (document.title.startsWith("Discord")) { discord_copy_text_out(); }
}

function discord_copy_profile() {
    navigator.clipboard.writeText('SirRoti#8706');
    var help_text = document.getElementById("copy_help_text")
    help_text.style.color = "#3ec412";
    globalThis.timer = setTimeout(function () {
        var help_text = document.getElementById("copy_help_text")
        help_text.style.color = "#ffffff";
    }, 1000)
}
function discord_copy_text() {
    document.getElementById("copy_help_text").style.opacity = 1;
}
function discord_copy_text_out() {
    try {
        clearTimeout(timer);
        var help_text = document.getElementById("copy_help_text")
        help_text.style.color = "#ffffff";
    } catch {}
    document.getElementById("copy_help_text").style.opacity = 0;
}

function main_middle_programming() {
    document.getElementById("main-text-programing").style.opacity = 1;
    document.getElementById("main-img-programing").style.color = "bisque";
}
function main_middle_programming_out() {
    document.getElementById("main-text-programing").style.opacity = 0;
    document.getElementById("main-img-programing").style.color = "white";
}
function main_middle_minecraft() {
    document.getElementById("main-text-minecraft").style.opacity = 1;
    document.getElementById("main-img-minecraft").style.color = "bisque";
}
function main_middle_minecraft_out() {
    document.getElementById("main-text-minecraft").style.opacity = 0;
    document.getElementById("main-img-minecraft").style.color = "white";
}