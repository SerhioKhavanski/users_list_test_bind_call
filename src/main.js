import {users} from "./data.js"
import {renderUserList} from "./ui.js"

document.body.append(renderUserList(users))