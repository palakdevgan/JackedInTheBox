$(".prev_workouts").hide();

$('#fromDate').change(function(){
    var fromDate = $('#fromDate').val();
    $('#toDate').prop("disabled", false);
    $("#toDate").attr("min", fromDate);
 });

// hide prev workouts table on first page load
async function newFormHandler(event) {
    $(".prev_workouts").hide();
    event.preventDefault();
    // get from and to dates and format them
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

                // filter out data between from and to dates
                var filtered_data = data.filter(item => {
                    const date = moment(item.date).utc().format('YYYY-MM-DD');
                    //console.log(date);
                    return (date >= fromDate && date <= toDate);
                });
                
                // display filtered data if exists
                if (filtered_data.length > 0) {
                    // show table 
                    $(".prev_workouts").show();
                    // send filtered data to dataable
                    setDataToTable(filtered_data);
                }

            }
        });


}

function setDataToTable(jsonData) {

    $('#example').DataTable({
        pagination: "bootstrap",
        destroy: true,
        filter: false,
        // json data of previous workouts
        data: jsonData,
        // datatable columns
        "columns": [{
                "data": "date",
                 type: 'date',
                // render: $.fn.dataTable.render.moment('YYYY-MM-DDTHH:mm:ss.SSSSSSZ', 'YYYY-MM-DD')
                //   render: $.fn.dataTable.render.moment().utc().format('YYYY-MM-DD')
                render: function (jsonData, type, row, meta) {
                    return moment.utc(jsonData).format('YYYY-MM-DD');
                }
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
        // export data buttons
        buttons: [
            //{ extend: 'copyHtml5', className: 'previousbtn' ,text:'Copy'},
            { extend: 'excelHtml5', className: 'previousbtn' ,text:'Download Excel'},
            { extend: 'csvHtml5', className: 'previousbtn' ,text:'Download CSV'},
            { extend: 'pdfHtml5', className: 'previousbtn' ,text:'Download PDF'}
        ]
        
    });
   
}
document.querySelector('.searchPrev').addEventListener('submit', newFormHandler);