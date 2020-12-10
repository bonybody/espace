function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./scss/block', true, /\.scss$/));
importAll(require.context('./scss/mixin', true, /\.scss$/));
importAll(require.context('./js/', true, /\.js$/))
importAll(require.context('./img/', true, /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/));