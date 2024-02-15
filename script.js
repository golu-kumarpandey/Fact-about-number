let search = document.getElementsByTagName("input")[0]
let spinner = document.getElementById("spinner")
let para = document.getElementsByTagName("p")[0]


function getandappend(text){
    para.textContent = ""
    spinner.classList.remove("spinner")
   
    let {fact} = text
    para.textContent = fact
    para.classList.add("para")
    

}


search.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        let searchvalue = search.value
        if (isNaN(searchvalue)){
            alert(searchvalue)
            alert("please enter a number")
        }else{
            let url = "https://apis.ccbp.in/numbers-fact?number="+searchvalue
            spinner.classList.add("spinner")
       
        fetch(url)
        .then(function(response){
            return response.json()

        })
        .then(function(text){
            getandappend(text)
        }) 

        }
        

    }
    
     
})
spinner.classList.remove("spinner")

