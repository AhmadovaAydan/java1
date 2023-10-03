var q1 = prompt("İlk proqramlaşdırma dili hansıdır?");
if (q1 == "Assembler") {
  console.log("Siz 10 xal qazandız");
  alert("Siz 10 xal qazandız");

  var q2 = confirm("Növbəti suala keçmək istəyirisz?");
  if (q2 == true) {
    var q3 = prompt("İlk proqramçı qadın kimdir?");

    if (q3 == "Ada Lavleys") {
      console.log("Siz 20 xal qazandız");
      alert("Siz 20 xal qazandız");
    } else {
      console.log("Siz 10 xal qazandız");
      alert("Siz 10 xal qazandız");
    }
  } else {
    console.log("Siz oyunu dayandırıdz");
    alert("Siz oyunu dayandırıdz");
  }
} else {
  console.log("Yanlış cavab verdiz!");
  alert("Yanlış cavab verdiz!");
}
