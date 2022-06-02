$('.add').on('click', add);
$('.remove').on('click', remove);

function add() {
var new_input_no = parseInt($('#total_input1').val()) + 1;
var new_input = "<input type='text' id='new_" + new_input_no + "'>";

var new_input_no1 = parseInt($('#total_input2').val()) + 1;
var new_input1 = "<input type='text' class='mx-1' id='new1_" + new_input_no1 + "'>";

$('#new_input').append("<br />" +new_input);

$('#total_input1').val(new_input_no);

$('#new_input').append(new_input1);

$('#total_input2').val(new_input_no1);
}

function remove() {
var last_input_no = $('#total_input1').val();
var last_input_no1 = $('#total_input2').val();

if (last_input_no > 1 && last_input_no1 > 1) {
$('#new_' + last_input_no).remove();
$('#total_input1').val(last_input_no - 1);
$('#new1_' + last_input_no1).remove();
$('#total_input2').val(last_input_no1 - 1);
}
}