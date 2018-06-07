

var myObj, i, j, x = "";
x= '<tr class="header"> <th style="width:150%;"><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Mr" title="Type in a name"></th </tr>'
    myObj = {
"committee": [
{"no":"tel:919426179878","name":" Shri Jayen Gandhi","details":["President "],"link":"https://sgsforjsg.github.io/fem/p1.html","img":"p1.jpg"},
{"no":"tel:919879866195","name":"Smt Kavita Shah","details":["Hon. secretary "],"link":"https://sgsforjsg.github.io/fem/p2.html","img":"p2.jpg"},
{"no":"tel:919825057939","name":"Shri Pankaj Mehta ","details":["IFP Shri ","(chairman, JSG Bharuch Welfare Trust)"],"link":"https://sgsforjsg.github.io/fem/p3.html","img":"p3.jpg"},
{"no":"tel:919998014360","name":"Shri Jagdish Mehta ","details":["vice president","Hon. joint secretary "],"link":"https://sgsforjsg.github.io/fem/p4.html","img":"p4.jpg"},
{"no":"tel:919227612502","name":"Smt Kataki Mehta","details":["Treasurer","chairperson women empower JSGIF "],"link":"https://sgsforjsg.github.io/fem/p5.html","img":"p5.jpg"},
{"no":"tel:919898046441","name":"Shri Dhirendra Shah","details":["NFP","( former chairman Gujarat region )"],"link":"https://sgsforjsg.github.io/fem/p6.html","img":"p6.jpg"},
{"no":"tel:919824469669","name":"Shree Jitendra  Vora","details":["NFP","(Hon. joint secretary JSG Bharuch Welfare Trust)"],"link":"https://sgsforjsg.github.io/fem/p7.html","img":"p7.jpg"},
{"no":"tel:919925024639","name":"Shri Bharat Shah","details":["NFP","( Hon. Jt.l secretary Gujarat region "],"link":"https://sgsforjsg.github.io/fem/p8.html","img":"p8.jpg"},
{"no":"tel:919898766888","name":"Shri Kamlesh Udani","details":["Founder president "],"link":"https://sgsforjsg.github.io/fem/p9.html","img":"p9.jpg"},
{"no":"tel:919824152192","name":"Shri  Shantibhai  Shroff","details":["Member-Advisory board ","former treasurer JSGIF"],"link":"https://sgsforjsg.github.io/fem/p10.html","img":"p10.jpg"},
{"no":"tel:919429072443","name":"Shri Arvind Doshi","details":["Member-Advisory board "],"link":"https://sgsforjsg.github.io/fem/p11.html","img":"p11.jpg"},
{"no":"tel:919898268513","name":"Shri Atul Mehta","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p12.html","img":"p12.jpg"},
{"no":"tel:919974706205","name":"Smt Divya Shah","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p13.html","img":"p13.jpg"},
{"no":"tel:919974706205","name":"Smt Julie Shah","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p14.html","img":"p14.jpg"},
{"no":"tel:919898062694","name":"Shri Kalpesh Shah ","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p15.html","img":"p15.jpg"},
{"no":"tel:919725027947","name":"Shri Paresh Dalal ","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p16.html","img":"p16.jpg"},
{"no":"tel:919974703813","name":"Shri Pallavi Gandhi","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p17.html","img":"p17.jpg"},
{"no":"tel:918238003500","name":"Shri Sameer Master ","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p18.html","img":"p18.jpg"},
{"no":"tel:919825891401","name":"Smt Snehalata Shah","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p19.html","img":"p19.jpg"},
{"no":"tel:919879579622","name":"Shri Sunil Shah","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p20.html","img":"p20.jpg"},
{"no":"tel:919974708161","name":"Shri Yatin Jain","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p21.html","img":"p21.jpg"},
{"no":"tel:917228888421","name":"Shri Yugesh Shah","details":["Committee  Member"],"link":"https://sgsforjsg.github.io/fem/p22.html","img":"p22.jpg"},

    ]
}
for (i in myObj.committee) {
    x += "<tr><td><a href="+ myObj.committee[i].no + ">";
    x +=  myObj.committee[i].name + "</a>";
		 for (j in myObj.committee[i].details) {
        x += "<p>"+myObj.committee[i].details[j] + "</p>";
    }
	x +="</td><td><a href="+ myObj.committee[i].link+"><img src="+ myObj.committee[i].img+"></a></td></tr>"
}
document.getElementById("mytable").innerHTML = x;

