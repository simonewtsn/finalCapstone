function savedItems(){
//make a variable that sets the output of parsing the savedItems key in sessionStorage
    let savedItems = JSON.parse(sessionStorage.getItem("savedItems"))
    if (savedItems !== null){
        for (let i = 0; i < savedItems.length; i++){
            console.log(savedItems[i])
//logs each item in the array to the console
            let savedItem = document.createElement("div")
//created a div element set its innerHTML to current item in the array and append to the body of the page
            savedItem.innerHTML = savedItems[i]
            document.body.appendChild(savedItem)
        }
    }
    else{
        alert(`There are no saved items`)
//alert message to state when array is empty
    }
}
savedItems()
