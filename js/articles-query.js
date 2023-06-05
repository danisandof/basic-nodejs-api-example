fetch("/articles").then(function (response) {
  response.json().then(function (articulos) {
    for (articulo of articulos) {
      const article = document.createElement("li");
      article.innerHTML = "<a href=\"#\" class=\"uk-link-muted\"><h5>"+articulo.title+ "</h5><small>"+articulo.extract+"</small><br><small>"+articulo.date+" - "+articulo.author+"</small></a>";
      document.getElementById("list-articles").appendChild(article);
    }
  });
}).catch(function (err) {
  console.log(err);
});
