let adding=[];




export const sending =class sending{
  
    constructor(){
    console.log("constructor")
    } 


    static add(index,item){
        
        adding[index]=item;
        console.log(adding);
    }

    static final( ){
        return adding
    }
}