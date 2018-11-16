/*
To use this script, create a div id="date"
<script type="text/javascript" src="js/date.js"></script>
place the script above the </body> tag. 
*/

/*
Comments

*/

function showDate() {
	var date = new Date();
	var d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // day display
	var dn = date.getDate();
	var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]; // month display
	var y = date.getFullYear();
	//var date = (d[ date.getDay() ]) + " " + ("0" + date.getDate()).slice(-2) + " " + (months[ date.getMonth() }) + " " + date.getFullYear()
	y = y.toString().substr(-2); // displays year as YY
	
	function nth(dn) {
      if(dn>3 && dn<21) return 'th'; // thanks kennebec
      switch (dn % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    } 
	
	//m = (m + 1); // month showing previous month for unknown reason, +1 to date		+magically fixed
	var date = (d[ date.getDay()]) + " " + dn+nth(dn) + "," + " " + (m[ date.getMonth()]) + " " + "'" + y; // determines what will be displayed
	//var date = d + "," + " " + m + " " + y;
	document.getElementById("date").innerText = date;
	document.getElementById("date").textContent = date;
}
showDate();
