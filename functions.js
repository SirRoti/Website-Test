window.onload = function () { discord_copy_text_out(); }

function discord_copy_profile() {
    navigator.clipboard.writeText('SirRoti#8706');
    var help_text = document.getElementById("copy_help_text")
    help_text.style.color = "#319911";
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