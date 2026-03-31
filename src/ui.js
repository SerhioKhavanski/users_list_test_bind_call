import {users} from "./data"
import {getAge} from "./user"
import {editUser} from "./user"
import {deleteUser} from "./user"

function getUserCard (user){

    const card = document.createElement('li')
    card.classList.add('usersList__card')

    const cardImg = document.createElement('img')
    cardImg.setAttribute('src', user.src)
    cardImg.setAttribute('alt', user.name)

    const cardH3 = document.createElement('h3')
    cardH3.textContent = user.name 

    const cardp = document.createElement('p')
    cardp.textContent = `Age: ${getAge.call(user)}` 

    const cardBtnBox = document.createElement('div')
    cardBtnBox.classList.add('usersList__buttons')

    const editBtn = document.createElement('button')
    editBtn.classList.add('usersList__editBtn')
    editBtn.addEventListener('click', editUser.bind(user))
    editBtn.textContent = "Edit";

    const delitBtn = document.createElement('button')
    delitBtn.classList.add('usersList__deleteBtn')
    delitBtn.addEventListener('click', deleteUser.bind(user))
    delitBtn.textContent = "Delete";

    cardBtnBox.append(editBtn,delitBtn)
    card.append(cardImg, cardH3, cardp, cardBtnBox)
    return card
}