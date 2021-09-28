const container = document.querySelector('#contain');

let p = document.getElementById("price"),
    res = document.getElementById("result");

window.addEventListener('load', function(){
    iterationCount = 25;
    populate();
    newGrid();
    boxCount();
})

erase = () => {
    deleteChild = document.querySelectorAll('.item');
    deleteChild.forEach(element => {
        element.remove()
    });
}

populate = () => {
    for (i=0; i<(iterationCount**2); i++){
        childGrid = document.createElement("div")
        childGrid.className = "item"
        document.getElementById("contain").appendChild(childGrid);
    }
}

newGrid = () => {
    container.style.gridTemplateColumns = `repeat(${iterationCount}, 1fr)`;
    container.style.gridTemplateRows = `repeat( ${iterationCount}, 1fr)`;
    // console.log(container.style.gridTemplateColumns);

}

p.addEventListener("input", function() {
    res.innerHTML = p.value;
    iterationCount = p.value;
    erase();
    
    populate();
    newGrid();
    boxCount();
}, false);

// color picking code
colorPick = document.querySelector('#colorPick');

colorPick.addEventListener('input', () => {
    console.log(colorPick.value);
})

// random hex every hover event

boxCount = () => {

    boxItems = document.querySelectorAll(".item");
    boxItems.forEach( item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = "#fff";
            })
        }

    )

}


// random hex code every N seconds

let colorRand = () => {

    // randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = (Math.random()*0xFFFFFF<<0).toString(16);
    zeroes=""
    // randomColor = "989a1"
    if (randomColor.length != 6){
        console.log(randomColor.length);
        for (i=0; i < (6-randomColor.length); i++){
            zeroes=zeroes+"0";
        }
        randomColor=randomColor+zeroes;
    }
    console.log(randomColor, " ", randomColor.length)
}
// colorRand();
// setInterval(colorRand, 500);








