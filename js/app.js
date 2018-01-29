// number 10.1,  10
var n = 10

//boolean
var isHappy = true

//no chars
var name = 'str' + "str" + `Hi!`


//arrays (are dynamic lists):
var music = ['Pink floyd', 'Led Zeppelin', 'Deep Purple']


//functions are first class citizens:
var f = function () {
    console.log('Woot?!')
}


//Objects: json
var person = {
    firstName: 'Nash',
    lastName: 'Horn'
}


var l = person['lastName'] //syntax does the same as below:
var f = person.firstName // syntax does the same as above:


person['job'] = 'Taxi driver'

console.log(person.job)



var car = {
    model: 'Fiat',
    color: 'white',
    honk: function () {
        console.log('Honk-Honk')
    }
}

car.honk()

function myFunc() {
    var e = document.getElementById('out')
    e.innerHTML = "Honk Honk"

}

// globals are nasty
var erlich = 'erlich is global'


function drawCard() {
    z = 'me' //Variable scope //global!
    for (var i = 0; i < 10; i++) {
        
    }
}