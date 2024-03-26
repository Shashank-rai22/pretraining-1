document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value.trim();
        var comments = document.getElementById("comments").value.trim();
        var maleChecked = document.getElementById("male").checked;
        var femaleChecked = document.getElementById("female").checked;

        if (name === "") {
            alert("Name field is compulsory");
            document.getElementById("name").focus();
        } else if (comments === "") {
            alert("Comments field is compulsory");
            document.getElementById("comments").focus();
        } else if (!maleChecked && !femaleChecked) {
            alert("Please select a gender");
        } else {
            alert("Form submitted successfully!");
        }
    });
});