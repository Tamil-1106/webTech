let students = [];
let marks = [];

function addSubjects() {
    const subjects = parseInt(document.getElementById("subjects").value);
    const marksSection = document.getElementById("marksSection");
    marksSection.innerHTML = "";

    if (isNaN(subjects) || subjects <= 0) {
        alert("Please enter a valid number of subjects!");
        return;
    }

    for (let i = 0; i < subjects; i++) {
        marksSection.innerHTML += `
            <input type="number" id="mark${i}" placeholder="Marks for Subject ${i + 1}" />
        `;
    }

    document.getElementById("saveBtn").style.display = "block";
}

function saveStudent() {
    const roll = parseInt(document.getElementById("rollNo").value);
    const name = document.getElementById("name").value;
    const subjects = parseInt(document.getElementById("subjects").value);

    marks = [];
    for (let i = 0; i < subjects; i++) {
        let m = parseInt(document.getElementById(`mark${i}`).value);
        if (isNaN(m)) m = 0;
        marks.push(m);
    }

    const total = marks.reduce((a, b) => a + b, 0);
    const avg = total / marks.length;
    let grade;

    if (avg >= 90) grade = 'A';
    else if (avg >= 75) grade = 'B';
    else if (avg >= 60) grade = 'C';
    else if (avg >= 40) grade = 'D';
    else grade = 'F';

    const student = { roll, name, marks, total, avg, grade };
    students.push(student);

    alert("✅ Student added successfully!");
    document.getElementById("marksSection").innerHTML = "";
    document.getElementById("saveBtn").style.display = "none";
}

function viewStudents() {
    const listDiv = document.getElementById("studentList");
    listDiv.innerHTML = "";

    if (students.length === 0) {
        listDiv.innerHTML = "<p>No students found!</p>";
        return;
    }

    students.forEach(stu => {
        listDiv.innerHTML += `
            <div class="student-card">
                <p><b>Roll No:</b> ${stu.roll}</p>
                <p><b>Name:</b> ${stu.name}</p>
                <p><b>Total:</b> ${stu.total}</p>
                <p><b>Average:</b> ${stu.avg.toFixed(2)}</p>
                <p><b>Grade:</b> ${stu.grade}</p>
            </div>
        `;
    });
}

function searchStudent() {
    const roll = parseInt(document.getElementById("searchRoll").value);
    const resultDiv = document.getElementById("searchResult");
    resultDiv.innerHTML = "";

    const found = students.find(stu => stu.roll === roll);
    if (!found) {
        resultDiv.innerHTML = "<p>❌ No student found!</p>";
        return;
    }

    resultDiv.innerHTML = `
        <div class="student-card">
            <p><b>Roll No:</b> ${found.roll}</p>
            <p><b>Name:</b> ${found.name}</p>
            <p><b>Total:</b> ${found.total}</p>
            <p><b>Average:</b> ${found.avg.toFixed(2)}</p>
            <p><b>Grade:</b> ${found.grade}</p>
        </div>
    `;
}
