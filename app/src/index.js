function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./scss/', true, /\.scss$/));