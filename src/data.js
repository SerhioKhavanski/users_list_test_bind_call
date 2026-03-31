export let users = [
  {id:1, name: "Alex", birthYear: 2000, src: "./src/assets/img/filip-rankovic-grobgaard-tmwHp7-5LP4-unsplash.jpg" },
  {id:2, name: "Bob", birthYear: 1995, src: "./src/assets/img/filip-rankovic-grobgaard-WZXvaEjjqRw-unsplash.jpg" },
  {id:3, name: "John", birthYear: 1990, src: "./src/assets/img/tony-luginsland-bbOOTiq-EPA-unsplash.jpg" }
  
]

export function editUser(){

}
export function deleteUser(){
  const id = this.id 
  users = users.filter(user => user.id !== id)
  console.log("rg");
}