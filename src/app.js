class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle{
    constructor(lengthA,lengthB,lengthC)
    {
      this.lengthA = lengthA;
      this.lengthB= lengthB;
      this.lengthC = lengthC;
    }
    getPerimetre(){
        return (this.lengthA + this.lengthB + this.lengthC);
    }
    getLongeurTriangleA(){
        return  this.lengthA;
    }

    getLongeurTriangleB(){
        return  this.lengthB;
    }
    getLongeurTriangleC(){
        return  this.lengthC;
    }
    isIsocele(){
        if(this.lengthA == this.lengthB && this.lengthA != this.lengthC && this.lengthB != this.lengthC)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    valeurIsNegative(){
        if(this.lengthA || this.lengthB || this.lengthC < 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    isRectangle(){
        const sinABC = this.lengthB / this.lengthC; // 0.55
        const sinBCA = this.lengthA / this.lengthB; // 0.8
        const TotalTriangle = (Math.asin(sinABC) * 180/Math.PI) + (Math.asin(sinBCA) * 180/Math.PI);
        if((TotalTriangle-180)<90)
        {
            return false;
        }
        else{
            return true;
        }
    }
}


class Cercle
{   
    constructor(x,y,rayon,perimetre) {
        this.x=x;
        this.y=y;
        this.rayon=rayon;
        this.perimetre = perimetre
    }

    getDiametre(){
        return 2*this.rayon
    }
    getCirconference(){

        return (Math.round(this.getDiametre()*Math.PI));
    }
    getAire(){
        return (Math.round(Math.PI*Math.pow(this.rayon,2)));
    }
    



}

module.exports = {
    Triangle:Triangle,
    Cube:Cube,
    Cercle:Cercle
}