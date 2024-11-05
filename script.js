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
    students.forEach((student, index) => {
        const studentContainer = document.createElement("div");
        studentContainer.classList.add("student-item");

        studentContainer.innerHTML = `
            <label><strong>Nome:</strong> ${student.name}</label><br>
            <label><strong>Matrícula:</strong> ${student.registration}</label><br>
            <label><strong>Email:</strong> ${student.email}</label><br>
            <label><strong>Telefone:</strong> ${student.phone}</label><br>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
            <hr>
        `;

        studentList.appendChild(studentContainer);
    });
}

function editStudent(index) {
    const student = students[index];
    studentInfo.name.value = student.name;
    studentInfo.registration.value = student.registration;
    studentInfo.email.value = student.email;
    studentInfo.phone.value = student.phone;
    addButton.textContent = "Save";

    addButton.onclick = () => {
        saveEdit(index);
    };
}

function saveEdit(index) {
    students[index] = new Student(
        studentInfo.name.value,
        studentInfo.registration.value,
        studentInfo.email.value,
        studentInfo.phone.value
    );
    addButton.textContent = "Register";
    addButton.onclick = addStudent;
    displayStudents();
    clearForm();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearForm() {
    Object.values(studentInfo).forEach(input => input.value = "");
}

addButton.addEventListener("click", addStudent);
