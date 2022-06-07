$('#fromDate').change(function(){
    var fromDate = $('#fromDate').val();
    $('#toDate').prop("disabled", false);
    $("#toDate").attr("min", fromDate);
 });

$(".prev_workouts").hide();
async function newFormHandler(event) {
    event.preventDefault();
    const from_date = document.querySelector('input[name="from_date"]').value;
    const to_date = document.querySelector('input[name="to_date"]').value;
    var fromDate = moment(from_date).format('YYYY-MM-DD');
    var toDate = moment(to_date).format('YYYY-MM-DD');
    //console.log(fromDate, toDate)
    const response = await fetch(`/api/workouts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
        .then(function (data) {

            if (data.length > 0) {

                var filtered_data = data.filter(item => {
                    const date = moment(item.date).utc().format('YYYY-MM-DD');
                    console.log(date);
                    return (date >= fromDate && date <= toDate);
                });
                
                // display filtered data if exists
                if (filtered_data.length > 0) {
                    $(".prev_workouts").show();
                    $('#workout_data').html('');
                    generate_table(filtered_data);
                }

            }
        });


}


function generate_table(data) {

    var markup = ``;
    for (var i = 0; i < data.length; i++) {
        markup += `
        <tr>
        <th class="bg-secondary text-white align-middle">${moment(data[i].date).utc().format('YYYY-MM-DD')}</th>
        <td><h5>${data[i].name}</h5></td>
        <td><h5>${data[i].goal}</h5></td>
        <td><h5>${data[i].sequence}</h5></td>
        <td><h5>${data[i].muscleGroup}</h5></td>  
        </tr>
        `
    }

    $('#workout_data').html(markup);

}


document.querySelector('.searchPrev').addEventListener('submit', newFormHandler);

$(document).ready(function () {

    $('#example').DataTable({
        lengthChange: false,
        "bPaginate": false,
        "bFilter": false,
        "bInfo": false,
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });

});