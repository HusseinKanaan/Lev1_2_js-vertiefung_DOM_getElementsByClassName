let exampleA = document.getElementsByClassName('example');
console.log(exampleA)

function myFunction() {
    console.log('test')
    for (let i = 0; i < exampleA.length; i++) {
        exampleA[i].classList.toggle('green')

    }
}