class User {
    constructor(fname, lname, age, gender, email, phone, password) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    login(phone, password){
        if (phone == this.phone && password == this.password){
            return true
        }else{
            return false
        }

    }
}

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let age = document.getElementById('age')
let gender = document.getElementById('gender')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

let info = document.querySelectorAll('.info')
function validation() {
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == "" || info[i].value == null) {
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        } else (info[i].nextElementSibling.innerHTML = "")
    }
}


// localStorage.getItem('Register', )
let arr = []

if (btn){
    btn.onclick = (e) => {
        e.preventDefault()
        let userData = new User(firstName.value, lastName.value, age.value, gender.value, email.value, phone.value, password.value)
        arr.push(userData)
        console.log(arr)
        localStorage.setItem('registration', JSON.stringify(arr));
        
        // console.table(userData)
        validation()
    }
}

// console.log(storedItem)

if(btn2){
    btn2.onclick = (e) => {

        // alert('working')
        e.preventDefault()
        let getItem = localStorage.getItem('registration')
        let storedItem = JSON.parse(getItem)
        if (storedItem == null){
            alert('empty local storage')
        }else{
            for (let i=0; i<storedItem.length; i++){
                if(storedItem[i].phone == phone.value && storedItem[i].password == password.value){
                    alert('Login Successful')
                }else {
                    alert('invalid phone number or password')
                }
            }
        }
        // let checkLogin = storedItem.find((user)=> user.login(phone.value, password.value)== true);
        // if(checkLogin != undefined){
        //     alert(' welcome Idan')
        // }else{
        //     alert('e nor work oo')
        // }
        
        // validation()

    }
}

