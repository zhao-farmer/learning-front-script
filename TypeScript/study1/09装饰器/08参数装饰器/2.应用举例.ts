function NotNumber(target: any, propertyKey: string, parameterIndex: number) {
    // 初始化或获取当前方法的参数索引列表
    let notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || [];
    // 将当前参数索引添加到列表中
    notNumberArr.push(parameterIndex);
    // 将列表存储回目标对象
    target[`__notNumber_${propertyKey}`] = notNumberArr;
}

// 方法装饰器定义
function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        // 获取被标记为不能为空的参数索引列表
        const notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || [];
        // 检查参数是否为 null 或 undefined
        for (const index of notNumberArr) {
            if (typeof args[index] === "number") {
                throw new Error(`方法 ${propertyKey} 中索引为 ${index} 的参数不能是数字！`);
            }
        }
        // 调用原始方法
        return method.apply(this, args);
    };
    return descriptor;
}

// 类定义
class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @Validate
    speak(@NotNumber message1: any, mesage2: any) {
        console.log(`${this.name}想对说：${message1}，${mesage2}`);
    }
}
// 使用
const s1 = new Student("张三");
s1.speak(100, 200);
