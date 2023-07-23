function showFullScreenOverlay(sentence) {
    document.getElementById("overlaySentence").textContent = sentence;
    document.getElementById("overlay_function").style.display = "flex";
}

function hideFullScreenOverlay() {
    document.getElementById("overlay_function").style.display = "none";
}

function goBack() {
    window.location.href = 'pharse_index.html';
}