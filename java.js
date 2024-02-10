let frames = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4")
];

let images = [
    "Images/2.jpg",
    "Images/3.jpg",
    "Images/4.jpg",
    "Images/5.jpg"
]



frames.forEach((frame, index) => {
let image = new Image()
image.src = images[index];

frame.appendChild(image)

})



let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");

let currentcIndex = 0;

function updatePicture() {
    frames.forEach((frame, index) => {
        frame.classList.remove("frameLeft", "frameVisible", "frameRight", );

        let updatedIndex = (currentcIndex + index) % frames.length;

        if (updatedIndex === 0) {
            frame.classList.add("frameLeft");
            console.log("Processing frame 0");
        } else if (updatedIndex === 1) {
            frame.classList.add("frameVisible");
            console.log("Processing frame 1");
        } else if (updatedIndex === 2) {
            frame.classList.add("frameRight");
            console.log("Processing frame 2");
        } else if (updatedIndex === 3) {
            frame.classList.add("frameRight");
            console.log("Processing frame 3");
        } else {
            console.log("Invalid frame index");
        } })
    }


updatePicture();

function rightBtnFun() {
    currentcIndex = (currentcIndex + 1) % frames.length;
    updatePicture();
}

setInterval(rightBtnFun, 5000)
rightBtn.addEventListener("click", rightBtnFun);

function leftBtnFun() {
   
    currentcIndex = (currentcIndex - 1 + frames.length) % frames.length;
    updatePicture();
}

leftBtn.addEventListener("click", leftBtnFun )
