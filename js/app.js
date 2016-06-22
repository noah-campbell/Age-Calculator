// todays date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var age;

if (dd < 10) {
    dd = '0' + dd;
} 

if (mm < 10) {
    mm = '0' + mm;
} 

today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

// get date of birth
function birth() {
    var m = document.getElementById('m').value;
    var d = document.getElementById('d').value;
    var y = document.getElementById('y').value;
    
        var age = yyyy - y;
        console.log(age);

    if (mm > m && dd > d) {
        age -= 1;
    }
    
    var final = '<div class="resultActual"> You are ' + age.toString() + ' years old </div>';
    
     $(".result").empty();
     $(".result").append(final);
}

// calculate
$(document).submit(function () {
    birth();
    return false;
});