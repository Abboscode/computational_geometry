class Point{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }




}

class Line{

    constructor( p1,p2){
        this.p1=p1;
        this.p2=p2;
    }



}

class vector2Doperations{


    static subtract(p1,p2){
        return new Point(p1.x - p2.x, p1.y - p2.y);


    }

    static crossProduct(p1,p2){
        return p1.x * p2.y - p1.y * p2.x;

    }
    
}