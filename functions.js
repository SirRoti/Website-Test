window.onload = function () {
    if (document.title.startsWith("Home")) {
        main_middle_programming_out();
        main_middle_minecraft_out();
    }
    else if (document.title.startsWith("Discord")) { discord_copy_text_out(); }
    else if (document.title.startsWith("Minecraft")) {
        document.getElementById("minecraft-button-kilux").style.backgroundColor = "#4f4d4d"
        globalThis.block = false
    }
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

function minecraft_buttons_kilux() {
    document.getElementById("minecraft-button-kilux").style.backgroundColor = "#4f4d4d"
    document.getElementById("miencraft-button-team_ente").style.backgroundColor = "dimgray"

    minecraft_change_element(["Kilux.net is an open Minecraft Server with different game modes.\nI work as a developer in the team and have done things like a ban or verify system.\nThis server has not been released yet but you can join by clicking on the Server Logo.", "img/kilux.png", "img/kilux_banner.png", "https://discord.gg/Yt9B7f3uUm"])
}
function minecraft_buttons_team_ente() {
    document.getElementById("minecraft-button-kilux").style.backgroundColor = "dimgray"
    document.getElementById("miencraft-button-team_ente").style.backgroundColor = "#4f4d4d"

    minecraft_change_element(["Team-Ente.de is an open Minecraft Server that i own with some friends.\nWe dont have a big main server, but host different minecraft events (in german).\nYou can join the event server by clicking on the Server Logo.", "img/team-ente.png", "img/team-ente_banner.png", "https://discord.gg/CaJ3BxnnBh"])
}
function minecraft_change_element (elements) {
    var opacity = 50
    if (!block) { block = true }
    else { return }
    timer_hide = setInterval(function () {
        if (opacity == 0) {
            clearInterval(timer_hide)
            document.getElementById("minecraft-middle-text").textContent = elements[0]
            document.getElementById("minecraft-middle-img").src = elements[1]
            document.getElementById("minecraft-middle").style.backgroundImage = "url('"+elements[2]+"')"
            document.getElementById("minecraft-middle-img-link").href = elements[3]
            timer_show = setInterval(function () {
                if (opacity == 50) {
                    clearInterval(timer_show)
                    block = false
                }
                opacity += 1
                document.getElementById("minecraft-middle").style.opacity = opacity / 50
            }, 10)
        }
        opacity -= 1
        document.getElementById("minecraft-middle").style.opacity = opacity / 50
    }, 10)
}