
function function1(a, b, c, d) {
    if (a == "s") {
        return (c*d)+b;
      }
    if (b == "s") {
        return a-(c*d);
      }
    if (c == "s") {
        return (a-b)/d;
      }
    if (d == "s") {
        return (a-b)/c;
      }  
};

function function2(a, b, d, e, f) {
    if (a == "s") {
        return (2*(e-f)/d)-b;
      }
    if (b == "s") {
        return (2*(e-f)/d)-a;
      }
    if (d == "s") {
        return (2*(e-f))/(a+b);
      }
    if (e == "s") {
        return (0.5*(a+b)*d)+f;
      }  
    if (f == "s") {
        return (-1)*((0.5*(a+b)*d)-e);
      } 
};

function function3(b, c, d, e, f) {
    if (b == "s") {
        return ((e-f)-(0.5*c*(d**2)))/d;
      }
    if (c == "s") {
        return (2*((e-f)-(b*d)))/(d**2);
      }
    if (d == "s") {
        let ans1 = (((-1)*(b))+Math.sqrt((b**2)+(2*c*(e-f))))/c;
        let ans2 = (((-1)*(b))-Math.sqrt((b**2)+(2*c*(e-f))))/c;
        if (ans1 < 0) {
            return ans2;
        }
        else{
            return ans1;
        }
      }
    if (e == "s") {
        return ((b*d)+(0.5*c*(d**2)))+f;
      }  
    if (f == "s") {
        return (-1)*(((b*d)+(0.5*c*(d**2)))-e);
      } 
};

function function4(a, b, c, e, f) {
    if (a == "s") {
        return Math.sqrt(Math.abs((b**2)+(2*c*(e-f))));
      }
    if (b == "s") {
        return Math.sqrt(Math.abs((-1)*(2*c*(e-f)-(a**2))));
      }
    if (c == "s") {
        return ((a**2)-(b**2))/(2*((e-f)));
      }
    if (e == "s") {
        return (((a**2)-(b**2))/(2*c))+f;
      }  
    if (f == "s") {
        return (-1)*((((a**2)-(b**2))/(2*c))-e);
      } 
};




function run(a, b, c, d, e, f){
    if (e == "n") {
        return function1(a, b, c, d);
    }
    if (f == "n") {
        return function1(a, b, c, d);
    }
    if (c == "n") {
        return function2(a, b, d, e, f)
    }
    if (a == "n"){
        return function3(b, c, d, e, f)
    }
    if (d == "n"){
        return function4(a, b, c, e, f)
    }
};


function onSumbit(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;

    let answer = run(a, b, c, d, e, f);

    console.log(answer);

    document.getElementById("answer").innerHTML = answer.toString();
}; 

function onLoad(){
    console.log("Why are you looking at the console? Get out of here and use the website like a normal person.");
};
