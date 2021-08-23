let signup = () => {
    let email = document.getElementById('email')
    let country = document.getElementById('country')
    let name = document.getElementById('name')
    let city = document.getElementById('city')
    // let btn = document.getElementById('btnText')
    let loader = document.getElementById('loader')
    let text = document.getElementById('text')
    loader.style.display = "block"
    text.style.display = "none"
  
    let redAlert = document.getElementById('redAlert')
    let greenAlert = document.getElementById('greenAlert')
  
    // btn.innerText = loader
  
    let data = {
      username: name.value,
      email: email.value,
      country: country.value,
      city: city.value
    }
  
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // console.log(user)
  
  
        firebase.database().ref(`users/${user.uid}`).set(data)
        .then((res) => {
          loader.style.display = "none"
          text.style.display = "block"
          greenAlert.innerHTML = "Registered successfully"
          greenAlert.style.display = "block"
            
            
            name.value = ""
            email.value = ""
            country.value = ""
            city.value = ""
            
            
            setTimeout(() => {
              window.location = "customerLogin.html"
            }, 1000)
  
           
          })
  
  
      })
      .catch((error) => {
  
        var errorMessage = error.message;
        // console.log(errorMessage)
        loader.style.display = "none"
        text.style.display = "block"
  redAlert.innerHTML = errorMessage
        redAlert.style.display = "block"
      })
      
  
  
  }
  
  
  
  window.onkeydown = function(event){
    if(event.keyCode === 13){
      
      signup()
    }
    
    }