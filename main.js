
let output = document.querySelector('.output')
let newElement = document.createElement('h1')



document.addEventListener('click', function(event){
    let newEntry = document.createTextNode(event.target.innerHTML)
    newElement.appendChild(newEntry)
    output.appendChild(newElement)
  })

  document.querySelector('#equals').addEventListener('click', function (event) {
    // output = ""
    console.log(eval(output.innerText))
    let equals = document.createTextNode(eval(output.innerText))
    newElement.appendChild(equals)
    output.appendChild(newElement)
  })