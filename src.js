

document.getElementById('first').addEventListener("submit", function(e){

    e.preventDefault();
    numFormat = new Intl.NumberFormat('en-US')
    var birthDate = new Date(this.elements.birth.value);
    var numberOfYears = parseInt(this.elements.years.value);
    var today = new Date();
    //var daysLeft = that.birth.value + that.years.value - today;
    var deathDate = new Date(birthDate.getTime());
    //deathDate = Object.assign(birthDate);
    deathDate.setFullYear(birthDate.getFullYear()+numberOfYears);
    var hoursLeft = Math.floor(Math.abs(deathDate - today) / 36e5);
    var hoursDone = Math.floor(Math.abs(today - birthDate) / 36e5);
    var yearsLeft = deathDate.getFullYear() - today.getFullYear();
    var yearsDone = today.getFullYear() - birthDate.getFullYear();

    var HTML = "You have spent <b>"+numFormat.format(hoursDone)+"</b> hours. You have <b>"+numFormat.format(hoursLeft)+"</b> hours left.<br>";
    HTML+= "You have spent <b>"+numFormat.format(monthDiff(birthDate,today))+"</b> months. You have <b>"+numFormat.format(monthDiff(today,deathDate))+"</b> months left.<br>";
    HTML+= "You have spent <b>"+numFormat.format(yearsDone)+"</b> years. You have <b>"+numFormat.format(yearsLeft)+"</b> years left.<br><b>";
    HTML+= Math.floor(hoursDone/(hoursDone+hoursLeft)*100)+"%</b> of your life is over.<br><br>";
    HTML+= "As we go through life, we forget that we have limited time on our beautiful planet. The above statistics are not meant to affect you negatively but to remind you to pursue things that interest you and live your life to the fullest potential.";

    document.getElementById('message').style.visibility = "visible";
    document.getElementById('message').innerHTML=HTML;

    
});

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}