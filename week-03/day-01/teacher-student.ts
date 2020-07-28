class Student {
    public learn() {
        console.log(`The student is learning something new`);
    }
    public question(Teacher) {
        Teacher.answer()
    }
}

class Teacher {
    public teach(Student) {
        Student.learn()
    }
    public answer() {
        console.log(`The teacher is answering a question`);
    }
}

let student01 = new Student();
let teacher01 = new Teacher();

student01.question(teacher01);
teacher01.teach(student01);



/*Create Student and Teacher classes
Student
learn() -> prints the student is learning something new
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method
*/