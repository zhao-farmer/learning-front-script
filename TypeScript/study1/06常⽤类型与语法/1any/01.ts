//明确的表示a的类型是any   一   【显式的any】
let a: any
//以下对a的赋值，均无警告
a = 100
a = '你好'
a = false

//没有明确的表示b的类型是any,但TS主动推断出来b是any  一  隐式的any
let b
//以下对b的赋值，均无警告
b = 100
b = '你好'
b = false

export {}