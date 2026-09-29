const studentName = document.getElementById("studentName");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const course = document.getElementById("course");
const errorMessage = document.getElementById("errorMessage");
const addStudent = document.getElementById("addStudent");
const studentCount = document.getElementById("studentCount");
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.getElementById("studentsContainer");

let students = [];
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameValue = studentName.value;
    let ageValue = age.value;
    let gradeValue = grade.value;
    let courseValue = course.value;
    if (nameValue === '' || ageValue === '' || gradeValue === '' || courseValue === '') {

        errorMessage.innerHTML = `Please fill in all fields`;
    }
    else if (gradeValue < 0 || gradeValue > 100) {
        errorMessage.innerHTML = `Grade must be between 0 and 100`;

    }
    else if (ageValue < 0) {
        errorMessage.innerHTML = `Age cannot be negative`;

    }
    else {
        students.push({
            name: nameValue,
            age: ageValue,
            grade: gradeValue,
            course: courseValue,
            status: status(gradeValue)

        })
        drowCard();
    }
    function status(stat) {
        if (stat >= 50) {
            return "Passed";
        }
        else {
            return "Failed";

        }

    }



})

function drowCard() {

    const std = students.map((item) => {
        return `
        <div class="student-card">

    <h3>${item.name}</h3>

    <div class="student-info">

        <div class="info-item">
            <span>Age</span>
            <span>${item.age}</span>
        </div>

        <div class="info-item">
            <span>Course</span>
            <span>${item.course}</span>
        </div>

        <div class="info-item">
            <span>Grade</span>
            <span>${item.grade}</span>
        </div>

        <div class="info-item">
            <span>Status</span>
            <span class="status passed">${item.status}</span>
        </div>

    </div>

</div>
        
        `;
    })
    studentsContainer.innerHTML = std.join("");
    age.value = "";
    studentName.value = "";
    grade.value = "";
    course.value = "";
    errorMessage.textContent = "";
    studentCount.textContent=students.length;
}

