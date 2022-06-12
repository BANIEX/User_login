let elRegister = document.getElementById("register");
if (elRegister){
    console.log(elRegister)


    let array = [];
    document.getElementById("register").addEventListener("click", function(){
        let name = document.getElementById("name").value.trim().toUpperCase();
        let email = document.getElementById('email').value.trim().toUpperCase();
        let password = document.getElementById('password').value;

        let user = {
            name,
            email,
            password
        }
        var currentArray =  JSON.parse(localStorage.getItem("details"));
        function findUser(user){
            return user.email == email;
        }
        let loginUserObject 
         if(name.length != 0 && email.length != 0 && password.length != 0){
            let detailsContent = localStorage.getItem("details");
            if (detailsContent == null){
                array.push(user)
                let arrayString = JSON.stringify(array);
                localStorage.setItem("details", arrayString);
                


                //2nd part
                currentArray =  JSON.parse(localStorage.getItem("details"));
                function findUser(user){
                    return user.email == email;
                }
                loginUserObject = currentArray.find(user => findUser(user));
                alert("successfully registered");



            }
            //2nd part
                currentArray =  JSON.parse(localStorage.getItem("details"));
                function findUser(user){
                    return user.email == email;
                }
                loginUserObject = currentArray.find(user => findUser(user));


            if (loginUserObject){
                alert("You have registered previously, proceed to login")


            }

            else{
                let getter = localStorage.getItem("details");
                let a = JSON.parse(getter);
                a.push(user);

                const updatedArray = JSON.stringify(a)
                localStorage.setItem("details", updatedArray);
                alert("successfully registered");
            
            }

        }
        else{
            alert("Incomplete registration details.")
        }
    })
}

let elLogin = document.getElementById("login_login");
if (elLogin){


        elLogin.addEventListener("click", function(){
        let login_email = document.getElementById("login_email").value.trim().toUpperCase();
        let login_password = document.getElementById("login_password").value;
        var currentArray =  JSON.parse(localStorage.getItem("details"));
        var currentArrayLength = JSON.parse(localStorage.getItem("details")).length;

        console.log(currentArrayLength)  
        function findUser(user){
            return user.email == login_email;
        }
        let loginUserObject = currentArray.find(user => findUser(user));
        console.log(loginUserObject)
        if (loginUserObject){
            function checkPassword(user){
                return user.password == login_password;
            }
            let correctPasswordUserObject = currentArray.find(user => checkPassword(user));
            if (correctPasswordUserObject){
                  localStorage.setItem("currentUser", JSON.stringify(correctPasswordUserObject))
                  location.href = "user_home.html";
            }
            else{
                alert("Incorrect password");
            }

        }
        else{
            alert("User not found. Kindly sign up");
        }
  

        
})

}






let elUserHomePage = document.getElementById("use");
if (elUserHomePage){
    var currentUserObject =  JSON.parse(localStorage.getItem("currentUser"));
    window.addEventListener('load', function(){
        if(currentUserObject){
            elUserHomePage.innerText = currentUserObject.name

        }
        else{
            this.location.href = "index.html";
        }

    })
    

    

}




    
let elAdmin = document.getElementById("myTable");
if (elAdmin){
    var currentArray =  JSON.parse(localStorage.getItem("details"));
    let table = document.getElementById("myTable");
    let currentArrayLength = currentArray.length;
        for (let index = 0; index < currentArrayLength; index++){

            let row = table.insertRow();
            let cell0 = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            let cell3 = row.insertCell(3);

            cell0.innerHTML = (index + 1).toString();
            cell1.innerHTML = currentArray[index].name;
            cell2.innerHTML = currentArray[index].email;
            cell3.innerHTML = currentArray[index].password;
        }
        
}
