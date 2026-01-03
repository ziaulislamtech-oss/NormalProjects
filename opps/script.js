// function CreateBiscuits(name,price,quantity,company,category){
//     this.name = name;
//     this.price = price;
//     this.qty = quantity;
//     this.company = company;
//     this.category = category

// }
// let biscuits1 =  new CreateBiscuits('Rio','50',10,'intellescnce','large')
// function CreatPencile(name,price,color,compnay){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = compnay;
// }
// CreatPencile.prototype.write = (function(text){
//         let h1 = document.createElement('h1')
//         h1.textContent = text;
//         h1.style.color = this.color
//         document.body.appendChild(h1)
//     })
// let pencil1 = new CreatPencile('dollar',50,'red','pakistani') 
// let pencil2 = new CreatPencile('dollar',50,'blue','pakistani') 
// let pencil3 = new CreatPencile('dollar',50,'green','pakistani') 
// pencil1.write("hello")
// pencil2.write('kaise hoo')
// pencil3.write('we are good thank you')

//  CLASSES IN JAVASCRIPT

// class CreatePencil{
//     constructor(name,company,price,color){
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color = color;
//     }
//     write(text){
//         let h1 = document.createElement('h1')
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1)
//     }
//     erase(){
//         document.body.querySelectorAll('h1').forEach((ele)=>{
//             if(ele.style.color === this.color){
//                 ele.remove()
//             }
//         })
//     }
// }
// let p1 = new CreatePencil('dollar','sheryians',550,'red')
// let p2 = new CreatePencil('tezdar','Apna college',230,'blue')

//  EXTEND KEYWORD 

class User {
    constructor(name,address,username,email,role){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = role;
    }
    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name} : ${text} `
        document.body.appendChild(h1)
    }
}
let user1 = new  User('zia ul islam','kpk pakistan','ziakhan123','kzia1170@gmail.com','developer')
user1.write('hey guyz how are you all')
class Admin extends User{
    constructor(name,){
        super(name,this.address,this.username,this.email.role)
    }
}