var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://metallizer.dk/')
  .wait(3000)
  .wait(3000)
  .evaluate(function (result, done) {
    let artistAlbum = document.querySelector('h3')
    return artistAlbum.innerText
  })
  .end()
  .then(res => console.log(res))
  .catch(function (error) {
    console.error('scraper failed:', error);
  });