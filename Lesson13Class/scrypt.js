class Rectangle{
    constructor(height, width){
        this.height=height;
        this.width=width;
    }

    calcArea(){
        return this.height*this.width;
    }

}

class ColorRectengleWithText extends Rectangle{
    constructor(height,width,text,bgColor){
        super(height,width);
        this.text=text;
        this.bgColor=bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }

}


const newSquare=new ColorRectengleWithText(20,30,`i an a newSquar`,`red`);
console.log(newSquare.calcArea());
newSquare.showMyProps();



// const square = new Rectangle(10,10);
// const long = new Rectangle(100,9);

// console.log(square.calcArea());
// console.log(long.calcArea());

