const container = document.querySelector('#contain');

let p = document.getElementById("pick"),
    res = document.getElementById("result"),
    stopRandomColor = 0;

res.innerHTML = p.value;

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
    res.innerHTML =  p.value;
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
    stopRandomColor = 1;

})

// enable randomizing button
 randomButton = document.querySelector("#randomButton");
 randomButton.addEventListener('click', () => {
     stopRandomColor = 0;
 })

// random hex every hover event
boxCount = () => {
    boxItems = document.querySelectorAll(".item");
    boxItems.forEach( item => {
            item.addEventListener('mouseenter', () => {
                if (stopRandomColor == 1){
                    item.style.backgroundColor=colorPick.value;
                    item.style.border = colorPick.value;
                } else {
                randomColor = (Math.random()*0xFFFFFF<<0).toString(16);
                item.style.backgroundColor = "#"+randomColor;
                item.style.border = colorPick.value;
                }

            })
        }
    )
}

// random hex code every N seconds
let colorRand = () => {
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

// reset size and bg-color STOPPED HERE!!!!!!!!
resetButton=document.querySelector("#resetButton");
resetButton.addEventListener('click', () => {
    erase();
    p.value=25;
    iterationCount = p.value;
    res.innerHTML = p.value;
    boxItems = document.querySelectorAll(".item");
    boxItems.forEach( item => {
        item.style.backgroundColor=colorPick.value;
        item.style.border = colorPick.value;
    });
    colorPick.value="#0075ff";
    populate();
    newGrid();
    boxCount();
})










