for (var key in document.getElementById("article-container").getElementsByTagName('img')){
    if (isNaN(key)){
      break;
    }
      document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(/.*\//,document.URL.replace(document.domain, "cdn.jsdelivr.net/gh/GamerNoTitle/Picture-repo-v1/"))
  }