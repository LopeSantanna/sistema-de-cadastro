const studentInfo = {
    name: document.getElementById("nameUser"),
    registration: document.getElementById("idUser"),
    email: document.getElementById("emailUser"),
    phone: document.getElementById("contactUser")
};

const addButton = document.getElementById("addButton");
const studentList = document.getElementById("studentList");

class Student {
    constructor(name, registration, email, phone) {
        this.name = name;
        this.registration = registration;
        this.email = email;
        this.phone = phone;
    }
}

let students = [];

function addStudent() {
    if (!validateInputs()) {
        alert("Todos os campos devem ser obrigatoriamente preenchidos!");
        return;
    }

    const student = new Student(
        studentInfo.name.value,
        studentInfo.registration.value,
        studentInfo.email.value,
        studentInfo.phone.value
    );

    students.push(student);
    displayStudents();
    clearForm();
    alert("Aluno cadastrado com sucesso!");
}

function validateInputs() {
    let allFilled = true;

    Object.values(studentInfo).forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    return allFilled;
}

function displayStudents() {
    studentList.innerHTML = "";  
    students.forEach(student => {
        const studentContainer = document.createElement("div");
        studentContainer.classList.add("student-item");

        studentContainer.innerHTML = `
            <label><strong>Nome:</strong> ${student.name}</label><br>
            <label><strong>Matrícula:</strong> ${student.registration}</label><br>
            <label><strong>Email:</strong> ${student.email}</label><br>
            <label><strong>Telefone:</strong> ${student.phone}</label><br>
            <hr> `;

        studentList.appendChild(studentContainer);
    });
}

function clearForm() {
    Object.values(studentInfo).forEach(input => input.value = "");
}

addButton.addEventListener("click", addStudent);