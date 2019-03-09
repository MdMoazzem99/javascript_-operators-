// Operator start
// Arithmetic Operator start
// Addition Operator start
var x, y, z;
x = 6;
y = 5;
z = x + y;
function a_o(){
	document.getElementById("a_o").innerHTML = z;
}
// Addition Operator end
// Subtraction Operator start
var r, t, u;
r = 5;
t = 4;
u = r - t;
function s_o(){
	document.getElementById("s_o").innerHTML = u;
}
// Subtraction Operator end
// Multiplication Operator start
var q, w, e;
q = 5;
w = 6;
e = q * w;
function m_o(){
	document.getElementById("m_o").innerHTML = e;
}
// Multiplication Operator end
// Division Operator start
var i, o, p;
i = 6;
o = 2;
p = i / o;
function d_o(){
	document.getElementById("d_o").innerHTML = p;
}
// Division Operator end
// Modulus Operator start
var a, s, d;
a = 7;
s = 8;
d = a % s;
function mo_o(){
	document.getElementById("mo_o").innerHTML = d;
}
// Modulus Operator end
// Increment Operator start
var f, g;
f = 6;
f++;
g = f;
function i_o(){
	document.getElementById("i_o").innerHTML = g;
}
// Increment Operator end
// Decrement Operator start
var h, j;
h = 8;
h--;
j = h;
function de_o(){
	document.getElementById("de_o").innerHTML = j;
}
// Decrement Operator end
// Exponentiation Operator start
// part_1 start
var k, l;
k = 5;
l = k ** 3;
function e_o(){
	document.getElementById("e_o").innerHTML = l;
}
// part_1 end
// part_2 start
var c, v;
c = 4;
v = Math.pow(c,2);
function e_o_2(){
	document.getElementById("e_o_2").innerHTML = v;
}
// part_2 end
// Exponentiation Operator end
// Arithmetic Operator end
// Assignment Operator start
// assigns start
var b;
b = 6;
function ass(){
	document.getElementById("ass").innerHTML = b;
}
// assigns end
// adds start
var n, m;
n = 10;
m = 5;
n += m;
function adds(){
	document.getElementById("adds").innerHTML = n;
}
// adds end
// Subtracts start
var qw, wq;
qw = 10;
wq = 5;
qw -= wq;
function sub(){
	document.getElementById("sub").innerHTML = qw;
}
// Subtracts end
// Multiplies start
var we, ew;
we = 10;
ew = 5;
we *= ew;
function mul(){
	document.getElementById("mul").innerHTML = we;
}
// Multiplies end
// Divides start
var er, re;
er = 10;
re = 5;
er /= re;
function divides(){
	document.getElementById("divides").innerHTML = er;
}
// Divides end
// Modulus (Remainder) start
var rt, tr;
rt = 10;
tr = 5;
rt %= tr;
function mod(){
	document.getElementById("mod").innerHTML = rt;
}
// Modulus (Remainder) end
// Exponentiation start
var ty, yt;
ty = 10;
yt = 5;
ty **= yt;
function exp(){
	document.getElementById("exp").innerHTML = ty;
}
// Exponentiation end
// Assignment Operator end
// Comparison Operators start
// Equel To start
// part_1 start
var yu;
yu = 5;
function eq_1(){
	document.getElementById("eq_1").innerHTML = (yu == 8);
}
// part_1 end
// part_2 start
var ui;
ui = 5;
function eq_2(){
	document.getElementById("eq_2").innerHTML = (ui == "8");
}
// part_2 end
// part_3 start
var uy;
uy = 5;
function eq_3(){
	document.getElementById("eq_3").innerHTML = (uy == 5);
}
// part_3 end
// part_4 start
var iu;
iu = 5;
function eq_4(){
	document.getElementById("eq_4").innerHTML = (iu == "5");
}
// part_4 end
// Equel To end
// equal value and equal type start
// part_1 start
var io;
io = 5;
function v_t_1(){
	document.getElementById("v_t_1").innerHTML = (io === 5);
}
// part_1 end
// part_2 start
var oi;
oi = 5;
function v_t_2(){
	document.getElementById("v_t_2").innerHTML = (oi === "8");
}
// part_2 end
// equal value and equal type end
// Not equal start
// part_1 start
var op;
op = 5;
function n_e_1(){
	document.getElementById("n_e_1").innerHTML = (op != 5);
}
// part_1 end
// part_2 start
var po;
po = 5;
function n_e_2(){
	document.getElementById("n_e_2").innerHTML = (po != "8");
}
// part_2 end
// Not equal end
// not equal value or not equal type start
// part_1 start
var pa;
pa = 5;
function nev_net_1(){
	document.getElementById("nev_net_1").innerHTML = (pa !== 5);
}
// part_1 end
// part_2 start
var ap;
ap = 5;
function nev_net_2(){
	document.getElementById("nev_net_2").innerHTML = (ap !== "8");
}
// part_2 end
// not equal value or not equal type end
// greater than start
// part_1 start
var as;
as = 5;
function g_t_1(){
	document.getElementById("g_t_1").innerHTML = (as > 4);
}
// part_1 end
// part_2 start
var sa;
sa = 5;
function g_t_2(){
	document.getElementById("g_t_2").innerHTML = (as > "6");
}
// part_2 end
// greater than end
// less than start
// part_1 start
var sd;
sd = 5;
function l_t_1(){
	document.getElementById("l_t_1").innerHTML = (sd < 4);
}
// part_1 end
// part_2 start
var ds;
ds = 5;
function l_t_2(){
	document.getElementById("l_t_2").innerHTML = (ds < "6");
}
// part_2 end
// less than end
// greater than or equal to start
// part_1 start
var df;
df = 5;
function gt_e_1(){
	document.getElementById("gt_e_1").innerHTML = (df >= 4);
}
// part_1 end
// part_2 start
var fd;
fd = 5;
function gt_e_2(){
	document.getElementById("gt_e_2").innerHTML = (fd >= "6");
}
// part_2 end
// greater than or equal to end
// less than or equal to start
// part_1 start
var fg;
fg = 5;
function lt_e_1(){
	document.getElementById("lt_e_1").innerHTML = (fg <= 4);
}
// part_1 end
// part_2 start
var gf;
gf = 5;
function lt_e_2(){
	document.getElementById("lt_e_2").innerHTML = (gf <= "6");
}
// part_2 end
// less than or equal to end
// Conditional (Ternary) Operator start
function myFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo").innerHTML = voteable + " to vote.";
}
// Conditional (Ternary) Operator end
// Comparison Operators end
// Logical Operators start
// and start
var gh, hg;
gh = 5;
hg = 6;
function and(){
	document.getElementById("and").innerHTML = (gh < 10 && hg > 6) + "<br>" + (gh < 10  && hg > 5);
}
// and end
// or start
var hj, jh;
hj = 6;
jh = 7;
function or(){
	document.getElementById("or").innerHTML = (hj < 10 || jh > 7) + "<br>" + (hj < 10 || jh > 6);
}
// or end]
// not start
var jk, kj;
jk = 6;
kj = 7;
function not(){
	document.getElementById("not").innerHTML = !(jk === kj) + "<br>" + !(jk < kj);
}
// not end
// Logical Operators end
// Operator end