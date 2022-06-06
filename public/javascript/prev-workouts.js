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

                // Filter Dates between start and end dates
                let start = new Date(fromDate);
                let end = new Date(toDate);
                var filtered_data = data.filter(item => {
                    let date = new Date(item.date);
                    return date >= start && date <= end;
                });

                // display filtered data if exists
                if (filtered_data.length > 0) {
                    $(".prev_workouts").show();
                    setDataToTable(filtered_data)
                }

            }
        });


}

function setDataToTable(jsonData) {

    $('#example').DataTable({
        pagination: "bootstrap",
        filter: false,
        data: jsonData,
        "columns": [{
                "data": "date",
                type: 'date',
                render: $.fn.dataTable.render.moment('YYYY-MM-DDTHH:mm:ss.SSSSSSZ', 'YYYY/MM/DD')
            },
            { "data": "name" },
            { "data": "goal" },
            { "data": "sequence" },
            { "data": "muscleGroup" }

        ],
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
}

document.querySelector('.searchPrev').addEventListener('submit', newFormHandler);