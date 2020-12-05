function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./scss/', true, /\.scss$/));

importAll(require.context('./img/', true, /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/));

