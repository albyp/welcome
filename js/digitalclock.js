/* 
To use this script, create a div id="digitalclock"
<script type="text/javascript" src="js/digitalclock.js"></script>
place the script above the </body> tag. 
*/

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "am";
    
    if(h == 0){
        h = 12;
    }
    
    //if(h > 12){
    //    h = h - 12;
    //    session = "pm";
    //}
    
    h = (h < 10) ? "" + h : h; // display as h if hh < 10
    m = (m < 10) ? "0" + m : m; // add zero if m < 10
    s = (s < 10) ? "0" + s : s; // add zero if s < 10
    
    var time = h + ":" + m;// + " " + session; // edit: add [":" + s +] for seconds
    document.getElementById("digitalclock").innerText = time;
    document.getElementById("digitalclock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
