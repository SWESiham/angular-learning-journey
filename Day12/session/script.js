//Ajax=>mlhttprequest
var itemList=[]
var YOUR_API_KEY;
//function getNews(category){
//     const request=new XMLHttpRequest();
// request.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=YOUR_API_KEY`);
// request.send();
// request.addEventListener("readystatechange",function(){
//     if(request.readyState==4){
//         itemList =JSON.parse(request.response).articles;
//       console.log(category);
//        display()
//     }

  
// })
//}
// function getHealth(){
// return new Promise((resolve,reject)=>{
//             const request=new XMLHttpRequest();
// request.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=YOUR_API_KEY`);
// request.send();
// request.addEventListener("readystatechange",function(){
//     if(request.readyState==4){
//         if(request.status==200){
//             itemList =JSON.parse(request.response).articles;
//       console.log('health');
//        display();
//        resolve();
//         }
//         else{
//             reject('error to get health news')
//         }
       
//     }

  
// })
// })
// }

// function getBusiness(){
// return new Promise((resolve,reject)=>{
//             const request=new XMLHttpRequest();
// request.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_API_KEY`);
// request.send();
// request.addEventListener("readystatechange",function(){
//     if(request.readyState==4){
//       if(request.status==200){
//           itemList =JSON.parse(request.response).articles;
//       console.log('business');
//        display();
//        resolve()
//       }
//       else{
//         reject('error to get business news')
//       }
       
//     }

  
// })
// })
// }
 

async function getSports(){
   try{
     const request = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=YOUR_API_KEY`,{
        method:'GET'
    })
    const response=await request.json();
    itemList=response.articles;
    console.log('sports');
    display();
   }
   catch(error){
    console.error(error)
   }
}

/*readyState*/
//0=>request don't established
// 1=>request is established
// 2=>request is received
// 3=>request is processing
// 4=>request is completed   */

function display(){
    var main=document.querySelector('main')
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
//syncrouns vs asyncrouns
//js=>don't block of code 
// console.log("hello");//syncrouns
// getNews();//asyncrouns
// console.log("world");//syncrouns

// getNews("business");
// getNews("sports");
// getNews('health');



// function one(callback){
//     console.log('one')
//     callback()
// }
// function two(){
//     console.log('two')
// }
// one(two);
//caback hell
// getBusiness(function(){
//     getHealth(function(){
//         getSports()
//     })
// })

//promis
// getBusiness().then(()=>getHealth()).then(()=>getSports()).catch((error)=>console.error(error))
//async/await
/**
 * used insife function
 *async function
 *function return promis
 */

//  async function getAll(){
//     await getBusiness();
//     await getHealth();
//     await getSports()
//  }

//  getAll()
// (async function(){
    // await getBusiness();
    // await getHealth();
     getSports()
// })()
//fetch
