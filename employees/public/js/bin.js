// Get the current date from the browser API
function getCurrentDate() {

    var now = new Date();

    var curr_day = now.getDate();
    var curr_month = now.getMonth() + 1;
    var curr_year = now.getFullYear();
    // Build a final row
    var finalRow = curr_day + "/" + curr_month + "/" + curr_year + "<br/>";
    finalRow = finalRow + "ПАО «БИНБАНК», " + "Российская Федерация, 115172, г. Москва, ул. "
    + "Котельническая набережная, д. 33, стр.1, 3-6 этажи";

    document.getElementById("sign").innerHTML = finalRow;

}

// Press on the Ok button
function pressCreateButton() {

//    var xhttp = new XMLHttpRequest();
//
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//             response += ;
//             document.getElementById("data-table").innerHTML = this.responseText;
//        }
//    };
//
//    xhttp.open("GET", "/create", true);
//    xhttp.send();


}