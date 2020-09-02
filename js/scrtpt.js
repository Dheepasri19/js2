console.log("working")
var students = [
    {
        Name:"A",
        RegNo : 01,  
        Courses:["HTML","BS","JSS"]
    },
    {
        Name:"B",
        RegNo : 02,
        Courses:["CSS","HTML","BS"]
    },
    {
        Name:"C",
        RegNo : 03,
        Courses:["HTML","JS","CSS"]
    }
]

var stuElem=document.getElementsByClassName("stulist")
for(i=0;i<students.length;i++){
    var elemOne=document.createElement("h3")
    var elemTwo=document.createElement("h3")
    var elemThree=document.createElement("h3")
    var nameElem=document.createElement("h5")
    var rnElem=document.createElement("h5")
    elemOne.textContent="Name:"
    elemTwo.textContent="RegNo:"
    nameElem.textContent=students[i].Name
    rnElem.textContent=students[i].RegNo
    stuElem[0].appendChild(elemOne)
    stuElem[0].appendChild(nameElem)
    stuElem[0].appendChild(elemTwo)
    stuElem[0].appendChild(rnElem)
    stuElem[0].appendChild(elemThree)
    for(j=0;j<students[0].Courses.length;j++){
        var cElem=document.createElement("h5")
        elemThree.textContent="Courses:"
        cElem.textContent=students[i].Courses[j]
        stuElem[0].appendChild(cElem)
    }
}

