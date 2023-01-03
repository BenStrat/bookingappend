if ($('#check-in-date,#check-out-date,#check-in,#check-out').length > 0) {
    var options = {
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true,
    };
    $('#check-in-date,#check-out-date,#check-in,#check-out').datepicker(options);
}
$("#check-in-date").change(function() {
    var arr = $(this).val().split("/");
    var newDate = new Date(arr[2], parseInt(arr[1]), parseInt(arr[0]) + 1);
    var newMonth = (parseInt(newDate.getMonth())) < 10 ? "0" + (parseInt(newDate.getMonth())) : (parseInt(newDate.getMonth()));
    var newDay = (parseInt(newDate.getDate())) < 10 ? "0" + (parseInt(newDate.getDate())) : newDate.getDate();
    $("#check-out-date").val(newDay + "/" + newMonth + "/" + newDate.getFullYear());
});
$("#check-in-date,#check-out-date").change(function() {
    var arrivalDate = $('#check-in-date').val().split('/');
    $('#checkInDate').val(arrivalDate[0]);
    $('#checkInMonthYear').val(String(Number(arrivalDate[1]) - 1) + String(arrivalDate[2]));
    var departureDate = $('#check-out-date').val().split('/');
    $('#checkOutDate').val(departureDate[0]);
    $('#checkOutMonthYear').val(String(Number(departureDate[1]) - 1) + String(departureDate[2]));
    if (arrivalDate[0] === "" || arrivalDate[1] === "" || arrivalDate[2] === "") {
        alert("Please enter valid dates in the format dd/mm/yyyy");
        return false;
    }
});
$("#check-in").change(function() {
    var arr = $(this).val().split("/");
    var newDate = newDate(arr[2], parseInt(arr[1]), parseInt(arr[0]) + 1);
    var newMonth = (parseInt(newDate.getMonth())) < 10 ? "0" + (parseInt(newDate.getMonth())) : (parseInt(newDate.getMonth()));
    var newDay = (parseInt(newDate.getDate())) < 10 ? "0" + (parseInt(newDate.getDate())) : newDate.getDate();
    $("#check-out").val(newDay + "/" + newMonth + "/" + newDate.getFullYear());
});
$("#check-in,#check-out").change(function() {
    var arrivalDate = $('#check-in').val().split('/');
    $('#cID').val(arrivalDate[0]);
    $('#cIMY').val(String(Number(arrivalDate[1])) + String(arrivalDate[2]));
    var departureDate = $('#check-out').val().split('/');
    $('#cOD').val(departureDate[0]);
    $('#cOMY').val(String(Number(departureDate[1])) + String(departureDate[2]));
    if (arrivalDate[0] === "" || arrivalDate[1] === "" || arrivalDate[2] === "") {
        alert("Please enter valid dates in the format dd/mm/yyyy");
        return false;
    }
});
