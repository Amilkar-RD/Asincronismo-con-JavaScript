const somethingWillHappen = () =>{
    return new Promise ((resolve, reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Whooops!');
        }
    });
};


somethingWillHappen()
.then(response=>console.log(response))
.catch(err=>console.error(err));  

const somethingWillhappen2 = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            },2000)
        }else{
            const error = new Error('Whoops');
            reject(error);
        }
    });
}

somethingWillhappen2()
.then(response=>console.log(response))
.catch(err =>console.err(err));


Promise.all([somethingWillHappen(), somethingWillhappen2()])
.then(response=>{
    console.log('Array of results', response);
})
.catch (err=>{
    console.error(err);
})
