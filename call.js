function login (email,password,onSuccess,onError){
     if(email == 'xyz66@gmail.com' && password =='num'){
        onSuccess('83ujfiiefjeii');
     }else{
        onError('credential is wrong')
     }
    }

    login('harsh','kumok', (str)=>{console.log(str)},(err)=>{console.log(err)});