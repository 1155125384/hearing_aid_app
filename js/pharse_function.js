function showFullScreenOverlay(sentence) {
    document.getElementById("overlaySentence").textContent = sentence;
    document.getElementById("overlay_function").style.display = "flex";
}

function showFullScreenOverlay_medical(sentence) {
    document.getElementById("overlaySentence").textContent = sentence;
    document.getElementById("overlay_function").style.display = "flex";

    // Set the initial slider value to 1
    var slider = document.getElementById("severitySlider");
    slider.value = 1;

    // Update the result of the slider
    var sliderResult = document.getElementById("sliderResult");
    let label = "很輕微";
    
    sliderResult.textContent = "我感到" + label;
    slider.oninput = function() {
        if (slider.value == 1){
            label = "很輕微";
        }
        else if (slider.value == 2){
            label = "不舒服";
        }
        else if (slider.value == 3){
            label = "還能忍受";
        }
        else if (slider.value == 4){
            label = "痛苦";
        }
        else if (slider.value == 5){
            label = "很痛苦";
        }
        else if (slider.value == 6){
            label = "劇痛";
        }
        else if (slider.value == 7){
            label = "强烈劇痛";
        }
        else if (slider.value == 8){
            label = "無法忍受";
        }
        else if (slider.value == 9){
            label = "痛到説不出話";
        }
        sliderResult.textContent = "我感覺" + label;
    };
}


function hideFullScreenOverlay() {
    document.getElementById("overlay_function").style.display = "none";
}

function goBack() {
    window.location.href = 'pharse_index.html';
}