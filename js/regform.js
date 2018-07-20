$(function () {
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }
    showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
        autoOpen: false,
        height: 600,
        width: 600,
        modal:true
        
    });
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
        
     /*DATEPICKER*/
    $("#dob").datepicker({
        changeYear: true,
        changeMonth: true,
        maxDate: "0d"
    });
    
    
    /*VALIDATION OF REG FORM*/
    $(".submit").click(function () {
        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },

                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true

                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                courses: {
                    required: true
                },
                percentage: {
                    required: true,
                    min: 50,
                    max: 100

                },
                dob: {
                    required: true
                }
            },

            messages: {
                usn: {
                    required: "USN can't be empty",
                    minlength: "USN can't be less than 10 character",
                    maxlength: "USN exeeds 10 character"
                },

                name: {
                    required: "Name can't be empty"
                },

                email: {
                    required: "email can't be empty",
                    email: "Please enter a valid email Ex:sarha@gmail.com"

                },
                mobile: {
                    required: "Please enter your mobile number",
                    minlength: "Mobile number can't be less than 10 numbers",
                    maxlength: "Mobile number have exceeded 10 numbers"
                },
                courses: {
                    required: "Please enter the Course required"
                },
                percentage: {
                    required: "Enter the percentage",
                    min: "Not eligible for Placements",
                    max: "Max marks should be <= 100"
                },
                dob: {
                    required: "DOB can't be empty"
                }

            }

        }).form();

        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var courses = $("#courses").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();

            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "courses": courses,
                "percentage": percentage,
                "dob": dob
            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }

    });
    /*end of registered form validation*/
    function showRegisteredStudents() {
        var students = getDataFromLocalStorage();
        var data = "";
        if (students.length == 0) {
            data = "<h3>No students registered yet....</h3>"
        } else {
          data += "<table id='regstudents'><thead><tr>"
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>Email</th>";
            data += "<th>Mobile</th>";
            data += "<th>DOB</th>";
            data += "<th>Courses</th>";
            data += "<th>Percentage</th>";
            data += "</tr></thead>";

            for (var i = 0; i < students.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + students[i].usn + "</td>";
                data += "<td>" + students[i].name + "</td>";
                data += "<td>" + students[i].email + "</td>";
                data += "<td>" + students[i].mobile + "</td>";
                data += "<td>" + students[i].dob + "</td>";
                data += "<td>" + students[i].courses + "</td>";
                data += "<td>" + students[i].percentage + "</td>";
                data += "</tr>";
            }
            data += "</table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength": 2
        });
    }

    function getDataFromLocalStorage() {
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }

    function updateLocalStorageData(updatedStudentsArr) {
        localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
    }

});
