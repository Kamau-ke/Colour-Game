const squares=document.querySelectorAll('.square');
const answerDisplay=document.querySelector('.correct')
const colorDisplay=document.querySelector('.color-display')
const button=document.querySelector('button')

let colors=[];

GenerateColors()
assign_colors()
checkColor()
function GenerateColors(){
    for(let i=0; i<squares.length;i++){
        colors.push(`rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`)
    }
}

function assign_colors(){
colors.forEach((color, index)=>{
    squares[index].style.background=color;
    squares[index].setAttribute('data-color', color)
})
}

function getRandomColor(){
    let randomColor=colors[Math.floor(Math.random() *colors.length)]
    colorDisplay.textContent=randomColor;
    return randomColor;
}

function checkColor(){
    squares.forEach((square)=>{
        square.addEventListener('click', (e)=>{
            if(e.target.dataset.color===pickedColor){
                answerDisplay.textContent='Correct'
            }
            else{
                answerDisplay.textContent='Wrong'
                e.target.classList.add('fade')
            }
        })
    })
}


let pickedColor=getRandomColor()

function reset(){
    colors=[]
    GenerateColors()
    assign_colors()
    checkColor()
    squares.forEach((square) =>square.classList.remove('fade'))
    pickedColor=getRandomColor()
}

button.addEventListener('click', reset)
