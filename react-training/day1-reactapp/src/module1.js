// Define a class Point with 2 data members - x,y
// defualt export
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        console.log("X -> " + this.x);
        console.log("Y -> " + this.y);
    }
}
export default Point;

// Create a class Point3D by inheriting the base class Point with member variable -> x,y,z
// Named export
export class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    display() {
        super.display();
        console.log("Z -> " + this.z);
    }
}