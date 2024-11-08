export class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}

    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
} 

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());


// Sample Output 1:
// 6 (assuming current year is 2024)