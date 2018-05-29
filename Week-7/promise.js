// var promise = new Promise((resolve, reject) =>{
//     var time = new Date();
//     resolve(time);
// })

// promise.then(function(time){
//     console.log(time);
//     return time.toDateString()
    
// }).then((t)=>{
//     console.log(t);
    
// })

//********************* 2nd exercise *************************** */

for (var i = 0; i <= 100; i++) {

    var promise = new Promise((resolve,reject) => {
    
        var id = i;
        var random = Math.random() * 500;
        

        setTimeout(() => {

            resolve(id)
        }, random)


    }).then((t) => {

        console.log(t);       

    })
}