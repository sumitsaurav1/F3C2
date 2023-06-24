let signUp = document.getElementById("sign-up");
let verifyText = document.getElementById("verify-text");

let name1= document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let conpassword = document.getElementById("confirm-password");

function specialChacterVerify(mySet){
    let flag1 = false;
    let flag2= false;
    for(let i=33;i<=47;i++){
        if(mySet.has(String.fromCharCode(i))){
            flag1=true;
        }
    }
    for(let i=58;i<=64;i++){
        if(mySet.has(String.fromCharCode(i))){
            flag2=true;
        }
    }
    if(flag1 || flag2){
        return true;
    }
    else{
        return false;
    }
}

function digitVerify(mySet){
    let flag = false;
    for(let i=48;i<=57;i++){
        if(mySet.has(String.fromCharCode(i))){
            flag=true;
        }
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}
function veryfyPassword(password){
    let mySet = new Set(password)
    //console.log(mySet)
   if(specialChacterVerify(mySet) && digitVerify(mySet)){
    return true;
   }
   else{
    return false;
   }
}

signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(name1.value && email.value &&  password.value && conpassword.value){
       if(password.value===conpassword.value){
            if(password.value.length>=8){
                if(veryfyPassword(password.value)){
                    verifyText.innerText="Successfully Singned up";
                    verifyText.style.color="green"
                    setTimeout(()=>{
                        loadData()
                    },1000)
                    console.log(name1.value)
                }
                else{
                    verifyText.innerText="Error: Password should contains one special chachcter,one digit"
                    verifyText.style.color="red";
                }
           }
           else{
                verifyText.innerText="Error: Password length shold be greater than or equal to 8"
                verifyText.style.color="red";
           }
       }
       else{
        verifyText.innerText="Error: Password and confirm should be same"
        verifyText.style.color="red";
       }
    }
    else{
        
        verifyText.innerText="Error: All the fields are mandatory"
        verifyText.style.color="red";
    }

})

function getAccessToken(){
    let string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for(let i=0;i<16;i++){
        let index = Math.floor(Math.random()*string.length);
        result +=string[index];
    }
    return result;
}

function loadData(){
    let obj ={
        name1:name1.value,
        email:email.value,
        password: password.value,
        conpassword:conpassword.value,
        accesToken:getAccessToken()
    }
    console.log(obj)
    localStorage.setItem("userDetaiils",JSON.stringify(obj))
    window.location.href="index2.html";
}

// localStorage.removeItem('userDetails')