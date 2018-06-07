

var myObj, i, j, x = "";
x= '<tr class="header"> <th style="width:150%;"><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Mr" title="Type in a name"></th </tr>'
    myObj = {
"committee": [
{"no":"tel:919426179878","name":" Shri Jayen Gandhi","details":["President "]},
{"no":"tel:919879866195","name":"Smt Kavita Shah","details":["Hon. secretary "]},
{"no":"tel:919825057939","name":"Shri Pankaj Mehta ","details":["IFP Shri ","(chairman, JSG Bharuch Welfare Trust)"]},
{"no":"tel:919998014360","name":"Shri Jagdish Mehta ","details":["vice president","Hon. joint secretary "]},
{"no":"tel:919227612502","name":"Smt Kataki Mehta","details":["Treasurer","chairperson women empower JSGIF "]},
{"no":"tel:919898046441","name":"Shri Dhirendra Shah","details":["NFP","( former chairman Gujarat region )"]},
{"no":"tel:919824469669","name":"Shree Jitendra  Vora","details":["NFP","(Hon. joint secretary JSG Bharuch Welfare Trust)"]},
{"no":"tel:919925024639","name":"Shri Bharat Shah","details":["NFP","( Hon. Jt.l secretary Gujarat region "]},
{"no":"tel:919898766888","name":"Shri Kamlesh Udani","details":["Founder president "]},
{"no":"tel:919824152192","name":"Shri  Shantibhai  Shroff","details":["Member-Advisory board ","former treasurer JSGIF"]},
{"no":"tel:919429072443","name":"Shri Arvind Doshi","details":["Member-Advisory board "]},
{"no":"tel:919898268513","name":"Shri Atul Mehta","details":["Committee  Member"]},
{"no":"tel:919974706205","name":"Smt Divya Shah","details":["Committee  Member"]},
{"no":"tel:919974706205","name":"Smt Julie Shah","details":["Committee  Member"]},
{"no":"tel:919898062694","name":"Shri Kalpesh Shah ","details":["Committee  Member"]},
{"no":"tel:919725027947","name":"Shri Paresh Dalal ","details":["Committee  Member"]},
{"no":"tel:919974703813","name":"Shri Pallavi Gandhi","details":["Committee  Member"]},
{"no":"tel:918238003500","name":"Shri Sameer Master ","details":["Committee  Member"]},
{"no":"tel:919825891401","name":"Smt Snehalata Shah","details":["Committee  Member"]},
{"no":"tel:919879579622","name":"Shri Sunil Shah","details":["Committee  Member"]},
{"no":"tel:919974708161","name":"Shri Yatin Jain","details":["Committee  Member"]},
{"no":"tel:917228888421","name":"Shri Yugesh Shah","details":["Committee  Member"]}
    ]
}
for (i in myObj.committee) {
    x += "<tr><td><a href="+ myObj.committee[i].no + ">";
    x +=  myObj.committee[i].name + "</a>";
		 for (j in myObj.committee[i].details) {
        x += "<p>"+myObj.committee[i].details[j] + "</p>";
    }
	x +="</td></tr>"
}
document.getElementById("mytable").innerHTML = x;

