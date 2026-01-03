let form = document.querySelector('form')
let userName = document.querySelector('#name')
let userRole = document.querySelector('#role')
let userBio = document.querySelector('#bio')
let photo = document.querySelector('#photo')
const userManagers = {
    user:[],
    init: function(){
        form.addEventListener('submit',this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault()
        this.addUser()
        
    },
    addUser: function(){
        this.user.push({
            Name : userName.value,
            role:userRole.value,
            bio:userBio.value,
            photo:photo.value
        })
        console.log(this)
        form.reset()
        this.renderUi()
    },
    renderUi : function(){
        document.querySelector('.users').innerHTML = ''
      this.user.forEach(function(user){
       let div =  document.createElement('div')
       div.classList.add('card')
       let userName = document.createElement('h2')
       userName.textContent = user.Name;
       div.appendChild(userName)
       let userBio = document.createElement('p')
       userBio.textContent = user.bio
       div.appendChild(userBio)
       let userRole = document.createElement('h3')
       userRole.textContent  =user.role;
       div.appendChild(userRole)
       let userPhoto = document.createElement('img')
       userPhoto.src = user.photo;
       div.appendChild(userPhoto)
       document.querySelector('.users').appendChild(div)
      })
        


    },
    removeUser:function(){},

}
userManagers.init()