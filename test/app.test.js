const { assert } = require('chai');
const { type } = require('mocha/lib/utils');

const Cube = require('../src/app').Cube;
const expect = require('chai').expect;
const Triangle = require('../src/app').Triangle;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);

        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});
describe('Test des fonctions du triangle',function(){

    it('1.Le triangle est isocele',function(done){
        let t1 = new Triangle(100,100,40);
        
        expect(t1.isIsocele()).to.equal(true);
        done();

    })
    it('2.Le triangle est equilateral', function(done) {
        let t2 = new Triangle(10,10,10,10);

        expect(t2.getLongeurTriangleA()).to.equal(10);
        expect(t2.getLongeurTriangleB()).to.equal(10);
        expect(t2.getLongeurTriangleC()).to.equal(10);
        done();
    });
    it('3. Le triangle est isocele',function(done){
        let t3 = new Triangle(344,43,6);
        expect(t3.isIsocele()).to.equal(false);
        done();
    })
    it('4. Le triangle est-il rectangle',function(done){
        let t4 = new Triangle(40,50,90);
        expect(t4.isRectangle()).to.equal(false);
        done();
    })
    it('5. Perimetre du triangle',function(done){
        let t5 = new Triangle(40,50,90);
        expect(t5.getPerimetre()).to.equal(180);
        done();
    })
    it('5. Valeur du triangle négative',function(done){
        let t5 = new Triangle(-40,-50,-90);
        expect(t5.valeurIsNegative()).to.equal(true);
        done();
    })
});
