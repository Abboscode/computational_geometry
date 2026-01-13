

 export class Point{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }




}
export class Nail{
    constructor(x,y){
        this.x=x;
        this.y=y;

    }
}

export class Line{

    constructor( p1,p2){
        this.p1=p1;
        this.p2=p2;
    }



}

export class vector2Doperations{


    static subtract(p1,p2){
        return new Point(p1.x - p2.x, p1.y - p2.y);


    }

    static crossProduct(v1,v2){
        return v1.x * v2.y - v1.y * v2.x;

    }
    
}