function getcheese(callback){
    setTimeout(() =>{
        const cheese = "🧀";
        console.log("here is the cheese", cheese);
        callback(cheese);
    }, 3000);
    }
    function makeDough(cheese, callback){
        setTimeout(() => {
            const dough = cheese + '🧇';
            console.log('here is the dough', dough);
            callback(dough)
        }, 3000);
    }
    function bakepizza(dough, callback){
        setTimeout(() =>{
            const pizza = dough +'🍕'
            console.log('here is the pizza', pizza)
            callback(pizza)
        },2000);
    }
    getcheese((cheese) => {
      makeDough(cheese, (dough) =>{
        bakepizza(dough, (pizza) =>{
            console.log("got my pizza", pizza);
        });
      });
    });
    