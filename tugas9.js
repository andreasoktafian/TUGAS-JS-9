function object() {
  var gitar = {
    merk: "schecter",
    body: "mahogany",
    harga: 15000000,
  };
  gitar.body = "basswood";
  console.log(gitar);

  console.log("");

  for (let x in gitar) {
    console.log(gitar[x]);
  }
}

object();
