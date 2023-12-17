let sum = 0
let count = 0
let isalive = true
let won = false
let cardImages = [
    1,2,3,4,5,6,7,8,9,10,11,12,13
  ];

function play(){
    count+=1
    const random = Math.random() * 12
    const cardnum = Math.floor(random) + 1
    const imageIdx = cardnum - 1
    sum += cardnum
   
    if(count <= 3 && isalive === true && won === false){
        let imageSrc = cardImages[imageIdx]
        imageSrc = imageSrc+".png"
        document.getElementById("image").src = imageSrc
        if(count === 1){
            document.getElementById("firstcard").textContent = "first card drawn"
            if(sum <= 20){
                document.getElementById("message").textContent = "Want to draw another card?"
                
            }else if(sum === 21){
                document.getElementById("message").textContent = "You won the game"
                won = true
            }else{
                document.getElementById("message").textContent = "You lose!"
                isalive = false
            }
        }else if(count === 2){
            document.getElementById("secondcard").textContent = "second card drawn"
            if(sum <= 20){
                document.getElementById("message").textContent = "Want to draw another card?"
            }else if(sum === 21){
                document.getElementById("message").textContent = "You won the game"
                won = true
            }else{
                document.getElementById("message").textContent = "You lose!"
                isalive = false
            }
        }else if(count === 3){
            if(sum <= 20){
                document.getElementById("message").textContent = "You are safe!!"
            }else if(sum === 21){
                document.getElementById("message").textContent = "You won the game"
                won = true
            }else{
                document.getElementById("message").textContent = "You lose!"
                isalive = false
            }
            document.getElementById("thirdcard").textContent = "third card drawn"
        }else{
            if(sum <21){
                document.getElementById("message").textContent = "You are safe!!"
            }else{
                document.getElementById("message").textContent = "You lose!"
                isalive = false
            }
        }
       
    
       
    }
  
}