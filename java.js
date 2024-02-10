let frames = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4")
];

let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");

let currentcIndex = 0;

frames.forEach((frame, index) => {
    console.log(index);
});

function updatePicture() {
    frames.forEach((frame, index) => {
    frame.classList.remove("frameLeft", "frameVisible", "frameRight");

        let updatedIndex = currentcIndex + index;

        if (updatedIndex === 0 || updatedIndex < 0) {
            frame.classList.add("frameLeft");
            console.log("Processing frame 0");
        } else if (updatedIndex === 1) {
            frame.classList.add("frameVisible");
            console.log("Processing frame 1");
        } else if (updatedIndex === 2) {
            frame.classList.add("frameRight");
            console.log("Processing frame 2");
        } else if (updatedIndex === 3 || updatedIndex > 3) {
            frame.classList.add("frameRight");
            console.log("Processing frame 3");
        } else {
            console.log("Invalid frame index");
        }
    });
}

updatePicture();

function rightBtnFun() {
    currentcIndex++;
    updatePicture();
}

rightBtn.addEventListener("click", () => {
    rightBtnFun();
});


function leftBtnFun() {
    currentcIndex--;
    updatePicture();
}

leftBtn.addEventListener("click", () => {
    leftBtnFun()
})

/// smisli kako ovo napravit