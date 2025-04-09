
let selectedDis = " ";
let selectedSub = "";
let selectedProf = "";
let verified = false;
let ageErr = document.getElementById("ageError");
let getage = document.getElementById("uAge");
let getSubscription = document.getElementById("subscription");
let setAge = document.getElementById("selected-uAge");
let getDiscount = document.getElementById("discounted");
let getnotDiscount = document.getElementById("notDiscounted");
let FinalDiscount = document.getElementById("selected-uSub");
let getName = document.getElementById("uName");
let setName = document.getElementById("selected-uName");




function validationAge(uAge){
   
    if(uAge<18){
        ageErr.textContent = "*you are not eligible for discount";
        ageErr.style.color ="red";

        return false;
    }
    else if(uAge >= 18){
        ageErr.textContent = " \u2714 Valid Nickname";
        ageErr.style.color = "green";
        return true;
    }
}

document.getElementById("uAge").addEventListener("input" , function(){
     let uAge = this.value;
     validationAge(uAge);

});

function subscription(){
    FinalDiscount.innerHTML = selectedSub + selectedDis;
}

document.getElementById("submit").addEventListener("click", function(){
    let uAge = parseInt(document.getElementById("uAge").value);
    
    if(!uAge){
        ageErr.textContent ="please fill this field";
        ageErr.style.color ="red";
    }
    
    else if(uAge<18){
        ageErr.textContent = "*you are not eligible for discount";
        ageErr.style.color ="red";
        return false;
    }

    else if(!verified){
        alert("*You aren't verified")
    }
    else{
        ageErr.textContent = " \u2714 Valid Nickname";
        ageErr.style.color = "green";
        subscription();
        setName.innerHTML = getName.value;
        setAge.innerHTML = getage.value;
        return true;
    }
   
    
    
});

getDiscount.addEventListener("input" , function(){
    selectedDis = getDiscount.value;
});

getnotDiscount.addEventListener("input" , function(){
    
    selectedDis = getnotDiscount.value;
});


getSubscription.addEventListener("input" , function(){
    selectedSub = getSubscription.value;
});

function removeProfile(){
    let person = document.getElementsByClassName("class");
    for(let i=0; i<person.length; i++){
        person[i].classList.remove("selected");
    }
}

document.getElementById("char1").addEventListener("click" , function(){
    
    removeProfile();
    let getChar1 = document.getElementById("char1");
    getChar1.classList.add("selected");
    selectedProf = getChar1.src;
    document.getElementById("selected-img").src = selectedProf;

});

document.getElementById("char2").addEventListener("click" , function(){
    removeProfile();
    let getChar2 = document.getElementById("char2");
    getChar2.classList.add("selected");
    selectedProf = getChar2.src;
    document.getElementById("selected-img").src = selectedProf;

});

document.getElementById("char3").addEventListener("click" , function(){
    removeProfile();
    let getChar3 = document.getElementById("char3");
    getChar3.classList.add("selected");
    selectedProf = getChar3.src;
    document.getElementById("selected-img").src = selectedProf;

});


// Verification 

function Verify(){
    let getRandom1 = Math.floor(Math.random() * 9);
    let getRandom2 = Math.floor(Math.random() * 9);
    const total = getRandom1 + getRandom2;
    const answer = prompt("What's the " + getRandom1 + " + " + getRandom2);
    if(answer == total){
        alert("✔ Succesfully Verified");
    }
    else{
        alert("*Invalid answer try again");
    }

}

document.getElementById("VerifyBtn").addEventListener("click" , function(){
    Verify();
    verified=true;
    
});

function Removecustomization(){
    let custom = document.getElementsByClassName("pattern");
    for(let a=0; a<custom.length; a++){
        custom[a].classList.remove("col");
    }
}

document.getElementById("col1").addEventListener("click", function(){
    Removecustomization();
    let col1 = document.getElementById("col1");
    col1.classList.add("col");
    document.getElementById("wrapper").style.backgroundColor = col1.value;
});

document.getElementById("col2").addEventListener("click", function(){
    Removecustomization();
    let col1 = document.getElementById("col2");
    col1.classList.add("col");
    document.getElementById("wrapper").style.backgroundColor = col2.value;
});

document.getElementById("col3").addEventListener("click", function(){
    Removecustomization();
    let col1 = document.getElementById("col3");
    col1.classList.add("col");
    document.getElementById("wrapper").style.backgroundColor = col3.value;
});

