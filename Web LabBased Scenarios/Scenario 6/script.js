document.getElementById("uName").addEventListener("input", function () {
    ValidationName();
});

document.getElementById("uAge").addEventListener("input" , function(){
    ValidationAge();
});


function ValidationName() {
    const name = document.getElementById("uName");
    const nameError = document.getElementById("nameError");
    const WnameError= document.getElementById("WnameError");
    let nameValid = document.getElementById("nameValid");
    const display_Uname = document.getElementById("selected-uName");
    
    if(name.value.charAt(0)=="w"){
        if(name.value.length ==7){
            nameError.style.display ="none";
            WnameError.style.display ="none";
            nameValid.style.display="block";
            display_Uname.textContent = name.value;

        }
        else{
            nameError.style.display="block";
            display_Uname.textContent="[Your-Name]"
        }
    }
    else{
        WnameError.style.display = "block";
        
    }
    
    // if(name.value.length == 7 && name.value.charAt(0)=="w") {
    //     nameError.style.display = "none";
    //     display_Uname.textContent = name.value;
    //     WnameError.style.display ="block"
    //     return true;
    // } else {
    //     nameError.style.display = "block";
    //     nameValid.style.display = "none";
    //     display_Uname.textContent = "[Your Name]";
    //     return false;
    // }
}

function ValidationAge(){
    const age = document.getElementById("uAge");
    const ageError = document.getElementById("ageError");
    const display_Uage = document.getElementById("selected-uAge");

    if(age.value >=19 && age.value<=25){
        ageError.style.display = "none";
        display_Uage.textContent = age.value;
        return true;
    }
    else{
        ageError.style.display="block";
        display_Uage.textContent = "[Age]";
        return false;
    }
}

function changeImage(selectedRadio){
    document.getElementById("selected-img").src = selectedRadio.value;
}

function emptyValidation(){
    let EmName = document.getElementById("uName");
    let EmAge = document.getElementById("uAge");
    if(EmName.value=="" || EmAge.value==""){
        alert("Please fill in all required fields before submitting");
    }
}


function printed(){
    ValidationName();
    ValidationAge();
    emptyValidation();

}