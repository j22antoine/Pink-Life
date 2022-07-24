// calculate time difference
function diff(){
    var a = moment('2021-04-21 13:31:12');
    var b = moment();
    diff = moment.preciseDiff(a, b, true);

    diff_years = diff['years'];
    diff_months = diff['months'];
    diff_days = diff['days'];
    diff_hours = diff['hours'];
    diff_minutes = diff['minutes'];
    diff_seconds = diff['seconds'];

    document.getElementById("output").innerHTML = diff_years + " years " + diff_months + " months " + diff_days + " days " + diff_hours + " hours " 
    + diff_minutes + " minutes " + diff_seconds + " seconds "; 
}

// Set interval
setInterval(diff, 1000);

