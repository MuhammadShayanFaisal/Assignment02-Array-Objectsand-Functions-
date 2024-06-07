function SeniorsAssignment(arr:Object){
    for(let i=0;i<5;i++){
        if(arr[i].assignmentsdone==true&& arr[i].seniorstatus==true)
            console.log(`Congratulation ${arr[i].name} , Faculty have decided you to look at your assignment to might upgrade you to TA`);
    }}
function RemovesStudents(arr:Object){
    for(let i=0;i<5;i++){
        if(arr[i].assignmentsdone==false&& arr[i].seniorstatus==true)
            console.log(`Sorry ${arr[i].name}, We have decided to remove you from the post of senior, as you are not currently attempting the assignment`);
    }}
interface Student{
    name:string,
    seniorstatus:boolean,
    assignmentsdone:boolean}
let Shayan:Student={
    name:"Shayan",
    seniorstatus:true,
    assignmentsdone:true}
let Sufyan:Student={
    name:"Sufyan",
    seniorstatus:false,
    assignmentsdone:true}
let Hamza:Student={
    name:"Hamza",
    seniorstatus:true,
    assignmentsdone:false}
let Ahmed:Student={
    name:"Ahmed",
    seniorstatus:true,
    assignmentsdone:true}
let Usman:Student={
    name:"Usman",
    seniorstatus:false,
    assignmentsdone:false}
let students=[Shayan,Sufyan,Hamza,Ahmed,Usman];
SeniorsAssignment(students);//it is important to recognize the seniors for TA
RemovesStudents(students);//For deserving students, it is important to remove those seniors having this position without thier assignment done.