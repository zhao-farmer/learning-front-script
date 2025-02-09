/* 
  参数说明：
    ○ target: 对于静态属性来说值是类，对于实例属性来说值是类的原型对象。
    ○ propertyKey: 属性名。
*/

function Demo(target: object, propertyKey: string) {
    console.log(target, propertyKey);
}

class Person {
    @Demo name: string;
    @Demo age: number;
    @Demo static school: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("张三", 18);

export {}