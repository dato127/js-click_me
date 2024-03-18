var index = 0;

function changeColors() {
    var colors = [
        "red",
        "rgba(33,33,33)",
        "orange",
        "yellow",
        "green",
        "pourple"
        
    ];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
       index = 0;
}