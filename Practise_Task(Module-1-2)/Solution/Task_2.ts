type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };
type Employee = Person & JobDetails;

const emp: Employee = {
    name: "Parvez",
    age: 21,
    role: "Web Developer",
    salary: 20000,
};

function getProfile(emp:Employee) :string{
return `Name : ${emp.name} , Role : ${emp.role}`;
}

console.log(getProfile(emp));
