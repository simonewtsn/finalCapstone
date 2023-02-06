function toggleLike(){

    let likeBtn = document.querySelectorAll(".like")
    likeBtn.forEach(function (btn) {
        btn.addEventListener("click", function(){
//if the button says 'like' when clicked it will change to liked
            if(btn.textContent === "Like"){
                btn.textContent = "Liked"
            }
// otherwise if the button says 'liked' when clicked it will change to like
            else{
                btn.textContent = "Like"
            }
        })
    })
}
toggleLike()

function saveForLater(){
// this stores the result of the selecting all elements with a class of 'save'    
    let saveButton = document.querySelectorAll(".save")
//the loop iterates over each element in the array and add a event listener that reacts to the click
    saveButton.forEach(function (button){
        button.addEventListener("click", function (){
//the statement checks if the text button says save for later
            if (button.textContent === "Save for Later"){
                let savedItems = []
//the variable stores the value of the parent's parent element of the click button to get the whole item             
            let content = button.parentElement.parentElement.innerHTML
//the variable stores the innerHTML of the parent element              
                if(sessionStorage.getItem("savedItems") === null){
                    savedItems = []
                }
                else{
//if it is not equal to null the savedItems is set to the parsed value of the sessionStorage item
                    savedItems = JSON.parse(sessionStorage.getItem("savedItems"))
                }
//the content variable is pushed to the array
                savedItems.push(content)
                sessionStorage.setItem("savedItems",JSON.stringify(savedItems))
//an alert is triggered with the length of the array              
                alert(`${savedItems.length} item(s) in your saved basket`)
            }
        })
    })
}
saveForLater()


//this function adds an event listener that waits for the submit button to 
//be clicked, when pressed it will trigger an alert
function contactUs(){
    let contactForm = document.getElementById("contact-us")
    contactForm.addEventListener("submit", function() {
        alert(`Thank you for entering your details, we will be in touch`)
    })
}
contactUs()