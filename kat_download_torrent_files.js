var node = document.getElementsByTagName('a') ;
var text = '' ;
for  (var i=0; i < node.length ; i++) {
  if (node[i].title === "Download torrent file") {
    window.open(node[i].href, '_blank')
  }
}

var node = document.getElementsByTagName('a') ;
var text = '' ;
for  (var i=0; i < node.length ; i++) {
  if (node[i].title === "Download torrent file") {
    text = text + node[i].href + '\n'
  }
}
document.write(text);

var count = 0
var links = [];
var url = 'http://kickass.to/usearch/javascript/'
for (var j = 1; j <= 10 ; j++) { 
  new_url = url + j.toString() + '/'
  console.log(new_url);

  var doc = document.implementation.createHTMLDocument("example");
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", new_url, false );
  xmlHttp.send( null );
  doc.documentElement.innerHTML = xmlHttp.responseText;
  console.log(doc);

  var node = doc.getElementsByTagName('a') ;
  var text = '' ;
  for  (var i=0; i < node.length ; i++) {
    if (node[i].title === "Download torrent file") {
      window.open(node[i].href, '_blank');
      text = text + node[i].href + '\n'
      count += 1;
      links = links + node[i].href;
      console.log(node[i].href);

    }
  }
}
console.log(count.toString());

/* 3 */

var url = window.location.href;

var numbers = document.getElementsByClassName('turnoverButton siteButton bigButton');
var last = numbers[numbers.length - 1];
var last_number_string = last.getElementsByTagName('span')[0].innerHTML;
var last_number = parseInt(last_number_string, 10);

var count = 0;
var links = [];
var text = '' ;

for (var j = 1; j <= last_number ; j++) { 
  new_url = url + j.toString() + '/'
  /* console.log(new_url); */

  var doc = document.implementation.createHTMLDocument("example");
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", new_url, false );
  xmlHttp.send( null );
  doc.documentElement.innerHTML = xmlHttp.responseText;
  /* console.log(doc); */

  var node = doc.getElementsByTagName('a') ;

  for  (var i=0; i < node.length ; i++) {
    if (node[i].title === "Download torrent file") {
      count += 1;
      links.push(node[i].href);
      text = text + node[i].href + "\n";
      /* console.log(node[i].href); */
    }
  }
}

for (var i=0; i <= links.length ; i++) {
  window.open(links[i], '_blank');
  console.log(links[i]);
}

console.log(text);
console.log(count.toString());
console.log(links.length);
document.write(text);
