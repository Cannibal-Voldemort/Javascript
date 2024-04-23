function getcheese(callback){
    setTimeout(() =>{
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 3000);
    }
    function makeDough(cheese, callback){
        setTimeout(() => {
            const dough = cheese + '🧇';
            console.log('here is the dough', dough);
            callback(dough);
        }, 3000);
    }
    function bakepizza(dough, callback){
        setTimeout(() =>{
            const pizza = dough +'🍕';
            console.log('here is the pizza', pizza);
            callback()
        },2000);
    }
    getcheese((cheese) => {
      makeDough(cheese, (dough) =>{
        bakepizza(dough, (pizza) =>{
            console.log("got my pizza", pizza);
        });
      });
    });


   /* const calculate = (a,b, operation) =>{
        return operation(a,b);
    }


     const result = calculate(3,4, function(num1,num2 ){
     return num1+num2;
    });
    console.log(addition)*/