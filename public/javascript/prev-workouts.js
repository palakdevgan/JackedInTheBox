$(".prev_workouts").hide();
async function newFormHandler(event) {
    event.preventDefault();
    const from_date = document.querySelector('input[name="from_date"]').value;
    const to_date = document.querySelector('input[name="to_date"]').value;
    var fromDate = moment(from_date).format('YYYY-MM-DD');
    var toDate = moment(to_date).format('YYYY-MM-DD');
    console.log(fromDate, toDate)
    const response = await fetch(`/api/previousworkouts`, {
            method: 'POST',
            body: JSON.stringify({
                fromDate,
                toDate,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then(function(data) {

            if (data.length > 0) {
                $(".prev_workouts").show();
                generate_table(data);

            }
        });


}


function generate_table(data) {

    var markup = ``;
    for (var i = 0; i < data.length; i++) {
        markup += `
        <tr>
        <td>${data[i].date}</td>
        <td>${data[i].name}</td>
        <td>${data[i].goal}</td>
        <td>${data[i].sequence}</td>
        <td>${data[i].muscleGroup}</td>  
        </tr>
        `
    }

    $('#workout_data').html(markup);

}


document.querySelector('.searchPrev').addEventListener('submit', newFormHandler);

$(document).ready(function() {
    $('#example').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

});