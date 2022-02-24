const axios = require('axios');

let test = document.createElement('h1')
test.innerHTML = 'Javascript works, and hopefully the css does too...'
document.body.appendChild(test)

function sendCritical(){
    axios.get(`/api/critical`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendWarning(){
    axios.get(`/api/warning`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendInfo(){
    axios.get(`/api/info`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendError(){
    axios.get(`/api/error`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}



let critical = document.getElementById('critical').addEventListener('click',sendCritical)
let warning = document.getElementById('warning').addEventListener('click',sendWarning)
let info = document.getElementById('info').addEventListener('click',sendInfo)
let error = document.getElementById('error').addEventListener('click',sendError)