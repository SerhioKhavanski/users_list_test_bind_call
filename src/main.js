import {users} from "./data.js"
import {editUser} from "./data.js"
import {deleteUserInArr} from "./data.js"
import {rerender} from "./ui.js"

const usersContainer = document.createElement('div')
usersContainer.classList.add('users-wrapper')

function deleteUser(id){
    deleteUserInArr(id)
    rerender(usersContainer,users,deleteUser)
}

document.body.append(usersContainer)
rerender(usersContainer,users,deleteUser)