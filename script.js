const infosAluno = {
    nome: document.getElementById("nameUser"),
    matricula: document.getElementById("idUser"),
    email: document.getElementById("emailUser"),
    telefone: document.getElementById("contactUser")
}

const button = document.getElementById("addButton");
const studentList = document.getElementById("studentList");
const showButton = document.getElementById("showButton");
const outputSection = document.getElementById("saida");

class Aluno {
    constructor(nameUser, idUser, emailUser, contactUser) {
        this.nameUser = nameUser;
        this.idUser = idUser;
        this.emailUser = emailUser;
        this.contactUser = contactUser;
    }
}

let alunos = [];

function addAluno() {
    const aluno = new Aluno(
        infosAluno.nome.value,
        infosAluno.matricula.value,
        infosAluno.email.value,
        infosAluno.telefone.value
    );

    alunos.push(aluno);
    exibirAlunos();
    limparForms();

    alert("Aluno(a) cadastrado com sucesso!");
}

function mudarLista() {
    if (outputSection.style.display === "none") {
        outputSection.style.display = "block";
        exibirAlunos();
        showButton.textContent = "Ocultar Alunos";
    } else {
        outputSection.style.display = "none";
        showButton.textContent = "Alunos Cadastrados";
    }
}

function exibirAlunos() {
    studentList.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const alunoContainer = document.createElement("div");
        alunoContainer.classList.add("aluno-item");

        alunoContainer.innerHTML = `
            <label><strong>Nome:</strong> ${aluno.nameUser}</label><br>
            <label><strong>Matrícula:</strong> ${aluno.idUser}</label><br>
            <label><strong>E-mail:</strong> ${aluno.emailUser}</label><br>
            <label><strong>Telefone:</strong> ${aluno.contactUser}</label><br>
            <button onclick="editAluno(${index})">Editar</button>
            <button onclick="deleteAluno(${index})">Deletar</button>
            <hr>
        `;

        studentList.appendChild(alunoContainer);
    });
}

function editAluno(index) {
    const aluno = alunos[index];
    infosAluno.nome.value = aluno.nameUser;
    infosAluno.matricula.value = aluno.idUser;
    infosAluno.email.value = aluno.emailUser;
    infosAluno.telefone.value = aluno.contactUser;
    button.textContent = "Salvar";

    button.onclick = () => {
        saveEdit(index);
    };
}

function saveEdit(index) {
    alunos[index] = new Aluno(
        infosAluno.nome.value,
        infosAluno.matricula.value,
        infosAluno.email.value,
        infosAluno.telefone.value
    );
    button.textContent = "Cadastrar";
    button.onclick = addAluno;
    exibirAlunos();
    limparForms();
}

function deleteAluno(index) {
    alunos.splice(index, 1);
    exibirAlunos();
}

function limparForms() {
    infosAluno.nome.value = "";
    infosAluno.matricula.value = "";
    infosAluno.email.value = "";
    infosAluno.telefone.value = "";
}

button.addEventListener("click", addAluno);
showButton.addEventListener("click", mudarLista);
