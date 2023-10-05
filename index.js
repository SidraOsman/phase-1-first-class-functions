function receivesAFunction(callback){
    callback();
}

function returnsAnAnonymousFunction(){
   return function  namedfn() {
    return('this is named');
   }
}

function returnsANamedFunction(){
    return()=>
    {return ('this is anonymous');}
    
}