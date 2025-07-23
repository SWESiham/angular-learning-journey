var itemList = []
function display(){
    var main=document.querySelector('main')
    main.innerHTML=""
    itemList.forEach((item)=>{
        var card=document.createElement('div');
        var h2=document.createElement('h2');
        var p=document.createElement('p');
        var img =document.createElement('img');
        card.append(h2,p,img);
        card.classList.add('card')
        img.classList.add('card-img')
        h2.innerText=item.author;
        p.innerText=item.title;
        img.src=item.urlToImage;
        main.append(card)
    })

}

function getNews(category) {
    const request = new XMLHttpRequest();
    request.open('GET', ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=06f4ff2f17e042f199c8ed634347b6b4`);
    request.send();
    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4) {
            itemList = JSON.parse(request.response).articles;
            console.log(category);
            display()
        }
    })
} 


document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      const category = link.getAttribute('href').slice(1);
      getNews(category);
    });
  });
  
  getNews('general');