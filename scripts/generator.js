// OTHER HELPFUL FUNCTIONS
function dec_to_rom(num) {
	// credit:
	// https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function gcd(a, b) {
	if (b == 0) {
		return a;
	}
	return gcd(b, a % b);
}



// PROBLEMS 1 - 20
function quickmaf() {
	let randInt = Math.floor(Math.random() * 4);
	if (randInt == 0) {
		/* e.g.
		randInt = Math.floor(Math.random() * 40 + 1);
		eq = `\\( ${randInt}^{2} \\)`;
		ans = (Math.pow(randInt, 2)).toString();
		*/
		let a = Math.floor(Math.random() * 9989 + 11);
		let b = Math.floor(Math.random() * 9989 + 11);
		eq = `\\( ${a} + ${b} \\)`;
		ans = (a + b).toString();
	} else if (randInt == 1) {
		let a = Math.floor(Math.random() * 989 + 11);
		let b = Math.floor(Math.random() * 989 + 11);
		eq = `\\( ${a} - ${b} \\)`;
		ans = (a - b).toString();
	} else if (randInt == 2) {
		// FOIL
		let a = Math.floor(Math.random() * 78 + 12);
		let b = Math.floor(Math.random() * 78 + 12);
		eq = `\\( ${a} \\times ${b} \\)`;
		ans = (a * b).toString();
	} else {
		let b = Math.floor(Math.random() * 7 + 3);
		let a = -1;
		while (a % b != 0) {
			a = Math.floor(Math.random() * 900 + 100);
		}
		eq = `\\( ${a} \\div ${b} \\)`;
		ans = (a / b).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function times11() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 11 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 11).toString();
	problist.push(eq);
}

function times101() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 101 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 101).toString();
	problist.push(eq);
}

function times111() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 111 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 111).toString();
	problist.push(eq);
}

function times25() {
	let randInt = 2 * Math.floor(Math.random() * 95 + 6);
	eq = `\\( ${randInt} \\times 25 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 25).toString();
	problist.push(eq);
}

function sqcube() {
	let randInt = Math.floor(Math.random() * 2);
	if (randInt == 0) {
		randInt = Math.floor(Math.random() * 40 + 1);
		eq = `\\( ${randInt}^{2} \\)`;
		ans = (Math.pow(randInt, 2)).toString();
	} else {
		randInt = Math.floor(Math.random() * 20 + 1);
		eq = `\\( ${randInt}^{3} \\)`;
		ans = (Math.pow(randInt, 3)).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function roman() {
	// keep it between like 5 and 999
	let randInt = Math.floor(Math.random() * 995 + 5);
	ans = randInt.toString();
	eq = `\\( \\mathrm{${dec_to_rom(randInt)}} \\)`;
	prob.innerHTML = eq;
	problist.push(eq);
}

function gcdlcm() {
	// make the GCD an easy to calculate number, aka like 2-9
	// technically because of how this is implemented there's a good chance it can be not
	// but that's a later problem
	let gcd = Math.floor(Math.random() * 8 + 2);
	let a = -1, b = -1;
	while (a % gcd != 0) {
		a = Math.floor(Math.random() * 90 + 10);
	}
	while (b % gcd != 0) {
		b = Math.floor(Math.random() * 90 + 10);
	}

	if (Math.floor(Math.random() * 2) == 0) {
		eq = `\\( \\gcd(${a}, ${b}) \\)`;
		ans = gcd.toString();
	} else {
		eq = `\\( \\operatorname{lcm}(${a}, ${b}) \\)`;
		ans = (a * b / gcd).toString();
	}

	prob.innerHTML = eq;
	problist.push(eq);
}

function sum() {
	// sum of consecutive odd/even/natural numbers
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		let last = Math.floor(Math.random() * 21 + 5);
		eq = `\\( 1 + 2 + 3 + \\ldots + ${last} \\)`;
		ans = (last * (last+1) / 2).toString();
	} else if (randInt == 1) {
		let last = 1 + 2 * Math.floor(Math.random() * 36 + 4);
		eq = `\\( 1 + 3 + 5 + \\ldots + ${last} \\)`;
		ans = (Math.pow((last + 1) / 2, 2)).toString();
	} else {
		let last = 2 * Math.floor(Math.random() * 15 + 6);
		eq = `\\( 2 + 4 + 6 + \\ldots + ${last} \\)`;
		ans = (last * (last+2) / 4).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function remainder() {
	// any number 3 - 11, except for 7 and 10
	let randInt = -1;
	do {
		randInt = Math.floor(Math.random() * 9 + 3);
	} while (randInt == 7 || randInt == 10);
	let big = Math.floor(Math.random() * 8999 + 1001);
	eq = `\\( ${big} \\div ${randInt} \\) has a remainder of:`;
	ans = (big % randInt).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function div() {
	// make the number easy by putting it in the form 2^w * 3^x * 5^y * 7^z
	// w is [0, 4]
	// x is [0, 2]
	// y is [0, 2]
	// z is [0, 1]
	let W = Math.floor(Math.random() * 5);
	let X = Math.floor(Math.random() * 3);
	let Y = Math.floor(Math.random() * 3);
	let Z = Math.floor(Math.random() * 2);
	let prod = Math.pow(2, W) * Math.pow(3, X) * Math.pow(5, Y) * Math.pow(7, Z);
	eq = `\\( ${prod} \\) has how many divisors?`;
	ans = ((W+1)*(X+1)*(Y+1)*(Z+1)).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}



// PROBLEMS 21 - 40
function abs() {
	// |val * mult + add| = res
	let randInt = Math.floor(Math.random() * 2);
	let val = Math.floor(Math.random() * 19 - 9);
	ans = val.toString();
	let mult = Math.floor(Math.random() * 4 + 2);
	if (randInt == 0) {
		// find smaller solution
		// aka make val * mult + add < 0
		let add = Math.floor(Math.random() * 199 - 99);
		while (val * mult + add > 0) {
			add = Math.floor(Math.random() * 199 - 99);
		}
		let res = Math.abs(val * mult + add);
		let add_upd = (add > 0 ? "+" : "") + add.toString();
		eq = `Find the smallest \\( x \\) such that \\( |${mult}x ${add}| = ${res} \\)`;
	} else {
		// find bigger solution
		// aka make val * mult + add > 0
		let add = Math.floor(Math.random() * 199 - 99);
		while (val * mult + add < 0) {
			add = Math.floor(Math.random() * 199 - 99);
		}
		let res = Math.abs(val * mult + add);
		let add_upd = (add > 0 ? "+" : "") + add.toString();
		eq = `Find the largest \\( x \\) such that \\( |${mult}x ${add_upd}| = ${res} \\)`;
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function base() {
	let randInt = Math.floor(Math.random() * 2);
	if (randInt == 0) {
		// base 10 to base B
		let B = Math.floor(Math.random() * 5 + 4); // [4, 8]
		let val = Math.floor(Math.random() * (B*B*B-B-1) + (B+1)); // [B + 1, B^3 - 1]
		eq = `Convert \\( ${val}_{10} \\) to base ${B}`
		let res = "", place = 2;
		while (val != 0) {
			if (!(val < Math.pow(B, place) && res.length == 0)) {
				res += Math.floor(val / Math.pow(B, place)).toString();
				val %= Math.pow(B, place);
			}
			--place;
		}
		ans = res;
	} else {
		// base B to base 10
		let B = Math.floor(Math.random() * 7 + 6); // [6, 12]
		let fst = Math.floor(Math.random() * 3 + 1);
		let sec = Math.floor(Math.random() * B);
		let tri = Math.floor(Math.random() * B);
		eq = `Convert \\( ${fst}${sec}${tri}_{${B}} \\) to base \\( 10 \\)`;
		ans = (fst * B * B + sec * B + tri).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function one_eq() {
	// literally just gonna be in the form ax + b = c
	let C = Math.floor(Math.random() * 199 - 99);
	let B = Math.floor(Math.random() * 199 - 99);
	B = (B > 0 ? "+" : "") + B.toString();
	let A = Math.floor(Math.random() * 9 + 2);
	eq = `Solve for \\( x \\) such that \\( ${A}x ${B} = ${C} \\) <br>[Don't use mixed numbers!]`;
	let top = C - B, bottom = A;
	if (top % bottom == 0) ans = (top / bottom).toString();
	else {
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function repeating() {
	let randInt = Math.floor(Math.random() * 5);
	if (randInt == 0) {
		// 0.abababab..., over 99
		let rep = Math.floor(Math.random() * 98 + 1);
		while (rep % 11 == 0) {
			rep = Math.floor(Math.random() * 98 + 1);
		}
		let top = rep, bottom = 99;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		rep = (rep < 10 ? "0" : "") + rep.toString();
		eq = `Convert to a fraction: \\( 0.${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else if (randInt == 1) {
		// 0.abbbb..., over 90
		let rep = Math.floor(Math.random() * 89 + 1);
		while (rep % 9 == 0 || rep % 10 == 0) {
			rep = Math.floor(Math.random() * 89 + 1);
		}
		let top = rep - Math.floor(rep / 10), bottom = 90;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 10);
		rep %= 10;
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else if (randInt == 2) {
		// 0.abcabcabc..., over 999
		let rep = Math.floor(Math.random() * 998 + 1);
		while (rep % 111 == 0) {
			rep = Math.floor(Math.random() * 998 + 1);
		}
		let top = rep, bottom = 999;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		rep = rep.toString();
		while(rep.length != 3) {
			rep = "0" + rep;
		}
		eq = `Convert to a fraction: \\( 0.${rep}${rep}${rep}\\ldots \\)`;

	} else if (randInt == 3) {
		// 0.abcbcbcbc..., over 990
		let rep = Math.floor(Math.random() * 989 + 1);
		while (rep % 9 == 0 || rep % 10 == 0 || rep % 11 == 0) {
			rep = Math.floor(Math.random() * 989 + 1);
		}
		let top = rep - Math.floor(rep / 100), bottom = 990;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 100);
		rep = (rep % 100).toString();
		while(rep.length != 2) {
			rep = "0" + rep;
		}
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else {
		// 0.abcccc..., over 900
		let rep = Math.floor(Math.random() * 899 + 1);
		while (rep % 9 == 0 || rep % 10 == 0) {
			rep = Math.floor(Math.random() * 899 + 1);
		}
		let top = rep - Math.floor(rep / 10), bottom = 900;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 10);
		rep = (rep % 10).toString();
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;

	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function quadcub() {
	// ask for expansion of (ax + b)^2 or (ax + b)^3
	// sum/product of roots of quadratic/cubic
	// discriminant of quadratic
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		// a + b + c or a + b + c + d
		// or a - b + c or a - b + c - d
		let A = Math.floor(Math.random() * 4 + 2);
		let B = Math.floor(Math.random() * 4 + 2);
		let pw = Math.floor(Math.random() * 2 + 2);
		if (Math.floor(Math.random() * 2) == 0) {
			if (pw == 2) {
				eq = `\\( (${A}x + ${B})^2 = ax^2 + bx + c, a + b + c = \\)`;
				ans = Math.pow(A+B, 2).toString();
			} else {
				eq = `\\( (${A}x + ${B})^3 = ax^3 + bx^2 + cx + d, a + b + c + d = \\)`;
				ans = Math.pow(A+B, 3).toString();
			}
		} else {
			if (pw == 2) {
				eq = `\\( (${A}x + ${B})^2 = ax^2 + bx + c, a - b + c = \\)`;
				ans = Math.pow(A-B, 2).toString();
			} else {
				eq = `\\( (${A}x + ${B})^3 = ax^3 + bx^2 + cx + d, a - b + c - d = \\)`;
				ans = Math.pow(A-B, 3).toString();
			}
		}
	} else if (randInt == 1) {
		let A = Math.floor(Math.random() * 9 + 1);
		let B = Math.floor(Math.random() * 9 + 1);
		B = (Math.random() < 0.5 ? "-" : "+") + B.toString();
		let C = Math.floor(Math.random() * 9 + 1);
		C = (Math.random() < 0.5 ? "-" : "+") + C.toString();
		let D = Math.floor(Math.random() * 9 + 1);
		D = (Math.random() < 0.5 ? "-" : "+") + D.toString();
		let pw = Math.floor(Math.random() * 2 + 2);
		if (Math.floor(Math.random() * 2) == 0) {
			// sum of roots
			if (pw == 2) {
				eq = `What is the sum of the roots of \\( ${A}x^2 ${B}x ${C} \\)`;
				let top = -B, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			} else {
				eq = `What is the sum of the roots of \\( ${A}x^3 ${B}x^2 ${C}x ${D} \\)`;
				let top = -B, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			}
		} else {
			// product of roots
			if (pw == 2) {
				eq = `What is the product of the roots of \\( ${A}x^2 ${B}x ${C} \\)`;
				let top = C, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			} else {
				eq = `What is the product of the roots of \\( ${A}x^3 ${B}x^2 ${C}x ${D} \\)`;
				let top = -D, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			}
		}
	} else {
		// discriminant of quadratic 
		let A = Math.floor(Math.random() * 9 + 1);
		let B = Math.floor(Math.random() * 9 + 1);
		B = (Math.random() < 0.5 ? "-" : "+") + B.toString();
		let C = Math.floor(Math.random() * 9 + 1);
		C = (Math.random() < 0.5 ? "-" : "+") + C.toString();
		eq = `What is the discriminant of \\( ${A}x^2 ${B}x ${C} \\)`;
		ans = (B*B-4*A*C).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}



// PROBLEMS 41-60
