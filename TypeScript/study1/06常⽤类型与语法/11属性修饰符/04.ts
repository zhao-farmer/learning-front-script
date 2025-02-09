class Car {
    constructor(
        public readonly vin: string, //⻋辆识别码，为只读属性
        public readonly year: number, //出⼚年份，为只读属性
        public color: string,
        public sound: string
    ) {}
    // 打印⻋辆信息
    displayInfo() {
        console.log(`
            识别码：${this.vin},
            出⼚年份：${this.year},
            颜⾊：${this.color},
            ⾳响： ${this.sound}
        `);
    }
}

const car = new Car("1HGCM82633A123456", 2018, "⿊⾊", "Bose⾳响");
car.displayInfo();
// 以下代码均错误：不能修改readonly 属性
// car.vin = '897WYE87HA8SGDD8SDGHF';
// car.year = 2020;

export {}