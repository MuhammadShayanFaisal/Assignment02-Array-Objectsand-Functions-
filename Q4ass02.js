function SeniorsAssignment(arr) {
    for (var i = 0; i < 5; i++) {
        if (arr[i].assignmentsdone == true && arr[i].seniorstatus == true)
            console.log("Congratulation ".concat(arr[i].name, " , Faculty have decided you to look at your assignment to might upgrade you to TA"));
    }
}
function RemovesStudents(arr) {
    for (var i = 0; i < 5; i++) {
        if (arr[i].assignmentsdone == false && arr[i].seniorstatus == true)
            console.log("Sorry ".concat(arr[i].name, ", We have decided to remove you from the post of senior, as you are not currently attempting the assignment"));
    }
}
var Shayan = {
    name: "Shayan",
    seniorstatus: true,
    assignmentsdone: true
};
var Sufyan = {
    name: "Sufyan",
    seniorstatus: false,
    assignmentsdone: true
};
var Hamza = {
    name: "Hamza",
    seniorstatus: true,
    assignmentsdone: false
};
var Ahmed = {
    name: "Ahmed",
    seniorstatus: true,
    assignmentsdone: true
};
var Usman = {
    name: "Usman",
    seniorstatus: false,
    assignmentsdone: false
};
var students = [Shayan, Sufyan, Hamza, Ahmed, Usman];
SeniorsAssignment(students); //it is important to recognize the seniors for TA
RemovesStudents(students); //For deserving students, it is important to remove those seniors having this position without thier assignment done.
