var index = 0;

function changeColors() {
    var colors = [
        "rgba(227, 5, 5, 0.575)",
        "rgba(33,33,33)",
        "orange",
        "rgba(33,33,33)",
        "green",
        "pourple"
        
    ];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
       index = 0;
}