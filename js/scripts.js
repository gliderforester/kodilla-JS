function rysujChoinke(lev) {
  for (var n = 1; n <= lev; n++) {
    var star = '';
    var spac = '';

    for (var l = 1; l <= n * 2 - 1; l++) {
      star += '*';
    }
    for (var s = 0; s < lev-n; s++) {
      spac += ' '
    }
  console.log(spac + star);
  }



}
