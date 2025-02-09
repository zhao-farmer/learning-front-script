// 自定义类型Class
type Constructor = new (...args: any[]) => {};

// person中方法不存在 防止报错
interface Person {
    introduce(): void;
    getTime(): void;
}

// 使用装饰器重写toString方法 + 封闭其原型对象
function customToString(target: Function) {
    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype);
}

// 创建一个装饰器，为类添加日志功能和创建时间
function LogTime<T extends Constructor>(target: T) {
    return class extends target {
        createdTime: Date;
        constructor(...args: any[]) {
            super(...args);
            this.createdTime = new Date(); // 记录对象创建时间
        }
        getTime() {
            return `该对象创建时间为：${this.createdTime}`;
        }
    };
}

// 定义一个装饰器工厂 LogInfo，它接受一个参数 n，返回一个类装饰器
function LogInfo(n: number) {
    // 装饰器函数，target 是被装饰的类
    return function (target: Function) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`);
            }
        };
    };
}

@customToString
@LogInfo(3)
@LogTime
class Person {
    constructor(public name: string, public age: number) {}
    speak() {
        console.log("你好呀！");
    }
}

const p1 = new Person("张三", 18);
console.log(p1.toString());
p1.introduce();
console.log(p1.getTime());


export {}