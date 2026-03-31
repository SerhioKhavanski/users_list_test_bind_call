import {getAge} from "./user.js"
import {editUser} from "./user.js"
import {deleteUser} from "./user.js"

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

    const deletBtn = document.createElement('button')
    deletBtn.classList.add('usersList__deleteBtn')
    deletBtn.addEventListener('click', deleteUser.bind(user))
    deletBtn.textContent = "Delete";

    cardBtnBox.append(editBtn,deletBtn)
    card.append(cardImg, cardH3, cardp, cardBtnBox)

    return card
}

export function renderUserList(users){
    const usersList = document.createElement('ul')
    usersList.classList.add('usersList')

    for (let i = 0; i < users.length; i++) {
        usersList.append(getUserCard(users[i]))
    }
    return usersList
}

