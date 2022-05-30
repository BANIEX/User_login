let elRegister = document.getElementById("register");
if (elRegister){
    console.log(elRegister)


    let array = [];
    document.getElementById("register").addEventListener("click", function(){
        alert("1")
        let name = document.getElementById("name").value.trim().toUpperCase();
        let email = document.getElementById('email').value.trim().toUpperCase();
        let password = document.getElementById('password').value;

        let user = {
            name,
            email,
            password
        }
        
        alert("2")

        var currentArray =  JSON.parse(localStorage.getItem("details"));
        alert('3')
        function findUser(user){
            return user.email == email;
        }
        alert("4")
        let loginUserObject 
        // if(loginUserObject){
            // alert("You have registered, proceed to Login")

        // }
        alert("5")
            
         if(name.length != 0 && email.length != 0 && password.length != 0){
            alert("successfully registered")
            // let user = {
            //     name,
            //     email,
            //     password
            // }
                // alert(user);
            let detailsContent = localStorage.getItem("details");
            // console.log(detailsContent);
            if (detailsContent == null){
                alert("there is no 'details' in local storage");
                // We create the storage
                array.push(user)
                let arrayString = JSON.stringify(array);
                localStorage.setItem("details", arrayString);


                //2nd part
                currentArray =  JSON.parse(localStorage.getItem("details"));
                function findUser(user){
                    return user.email == email;
                }
                loginUserObject = currentArray.find(user => findUser(user));



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
                // alert(getter)
                let a = JSON.parse(getter);
                // alert(a);
                a.push(user);
                // alert(a)

                const updatedArray = JSON.stringify(a)
                localStorage.setItem("details", updatedArray);
            
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
        var currentArrayLength = JSON.parse(localStorage.getItem("details")).length
        // alert("o de be")
        console.log(currentArrayLength)
        function findUser(user){
            return user.email == login_email;
        }
        let loginUserObject = currentArray.find(user => findUser(user));
        // alert(loginUserObject)
        console.log(loginUserObject)
        if (loginUserObject){
            function checkPassword(user){
                return user.password == login_password;
            }
            let correctPasswordUserObject = currentArray.find(user => checkPassword(user));
            if (correctPasswordUserObject){
                // alert("correct password bro, welcome");
                window.location.replace("user_home.html");
                // alert("replace");
                // document.getElementById("user_name").innerText = user.name
                // alert('whats going on here');
                let user_display_space = document.getElementById("user_name")
                if(user_display_space){
                    user_display_space.innerHTML = user.name
                // alert('whats FIG on here');
                }
                else{
                    // alert("cant find")
                }
                document.getElementsByClassName("container")[0].addEventListener("DOMContentLoaded", function(){
                    document.getElementById("user_name") = 'DDDDD'
                    // alert("whats wron")
                })


            }
            else{
                alert("incorrect password bro, ");
            }

        }
        else{
            alert("you havent registered bro, try register");
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
