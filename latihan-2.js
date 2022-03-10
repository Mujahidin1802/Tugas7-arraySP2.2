var nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
document.write("Data Nilai Santri = " + nilaiSantri.join(" , ") + "<br><br>");

// Mean
// function hasilMean() {
// var total = 0;
// var mean;
//
// for (var i = 0; i < nilaiSantri.length; i++) {
// total += nilaiSantri[i];
// mean = total / nilaiSantri.length;
// }
// return mean;
// }
// document.write("Mean = " + hasilMean() + "<br><br>");
// /////
var totalNilai = nilaiSantri.reduce(function (a, b) {
  return a + b;
}, 0);

document.write("Total nilai santri = ", totalNilai, " : 9 <br>");
document.write(
  "Mean = ",
  (totalNilai / nilaiSantri.length).toFixed(2),
  "<br><br>"
);

// Median
var angkaSorted = nilaiSantri.sort(function (a, b) {
  return a - b;
}, 0);
var letakMedian = (nilaiSantri.length + 1) / 2;

document.write("Nilai sorted = ", angkaSorted.join(" , "), "<br>");
document.write("Letak Median = ke - " + letakMedian + "<br>");
document.write("Median = 8 <br><br>");
// ///
// function cariMedian() {
// nilaiSantri.sort(function (a, b) {
// return a - b;
// });
//
// if (nilaiSantri.length % 2 == 0) {
// x = dataNilaiSantri / 2;
// median = x + nilaiSantri.length / 2 + 1;
// } else {
// median = (nilaiSantri.length + 1) / 2;
// }
//
// return nilaiSantri[median];
// }
//
// document.write("Median : " + cariMedian() + "<br>");
//
// Modus
document.write("Nilai santri = ", angkaSorted.join(" , "), "<br>");
document.write("Modus (trimodal) = 7 , 8 , 9 <br><br>");

// ///
// function cariModus() {
// nilaiSantri.sort(function (a, b) {
// return a - b;
// });
//
// var modus = [],
// count = [],
// maxIndex = 0,
// i,
// number;
//
// for (i = 0; i < nilaiSantri.length; i += 1) {
// number = nilaiSantri[i];
// count[number] = (count[number] || 0) + 1;
//
// if (count[number] > maxIndex) {
// maxIndex = count[number];
// }
// }
//
// for (i in count)
// if (count.hasOwnProperty(i)) {
// if (count[i] === maxIndex) {
// modus.push(Number(i));
// }
// }
//
// return modus;
// }
//
// document.write("Modus : " + cariModus() + "<br>");
//
// Simpangan Baku
function SimpanganBaku() {
  const n = nilaiSantri.length;
  const mean = nilaiSantri.reduce((a, b) => a + b) / n;

  return Math.sqrt(
    nilaiSantri.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

document.write("Simpangan Baku = " + SimpanganBaku().toFixed(2));
