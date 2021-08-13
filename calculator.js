class Calculator {
    constructor (para1,para2){
       this.para1 = para1;
       this.para2 = para2; 
    }
    add(){
        return this.para1 + this.para2;
    }

    product(){
        return this.para1 * this.para2;

    }
}

module.exports = Calculator;