// const request = require('request')


// const news = (country,callback)=>{

//     const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=23bb25a72d3c4669ae3db41b8d35a832'
//       request({url,json:true},(error,response)=>{
//         if(error){
//           callback('unable to connect to weather service',undefined)
//         }
       
//        else if(response.body.articles.length === 0){
//            callback('unable to find what do you want',undefined)          
          
//                 }
               
//         else{
//             callback(undefined,{
//                 title:response.body.articles[0].title,
//                 description:response.body.articles[0].description,
//                 img:response.body.articles[0].urlToImage

//         })
//     }
//         })
//  }

   
//    module.exports= news