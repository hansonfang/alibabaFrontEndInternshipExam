# 阿里巴巴2018前端实习生考试部分试题
### 请分析如下代码，选择关于`var person1 = new Person("Bob")`和`var person2 = Person("Alice")`的说法正确的目：
```
function Person(name) {
  this.name = name;
  return { name: name };
}
```

`Person.prototype.name = "Alice";`

选项：
	
A.`person1`和`person2`都是`Person`的实例。


B.`person1.__proto__`指向`Person.prototype`。


C.`person2.__proto__`指向`Person.prototype`。


D.`person1.name`的值是`Bob`。


E.`person2.name`的值是`Alice`。


F.`person2.__proto__`为`undefined`。

对于一个javascript函数,可以是构造函数也可以是普通函数，
当函数返回引用类型的值时，它就是一个普通函数，返回非引用类型
时，可以当作构造函数使用
#### 没有返回值，new 返回实例化对象
```javascript
function Person(){

    this.name="monster1935";
    this.age='24';
    this.sex="male";

}
console.log(Person());  //undefined
console.log(new Person());//Person {name: "monster1935", age: "24", sex: "male"}
```

#### 有非引用类型返回值，new 返回实例化对象
```javascript
function Person(){

    this.name="monster1935";
    this.age='24';
    this.sex="male";

    return "monster1935";

}
console.log(Person());  //monster1935
console.log(new Person());//Person {name: "monster1935", age: "24", sex: "male"}
```

#### 有引用类型返回值，new 返回该引用类型
```javascript
function Person(){

    this.name="monster1935";
    this.age='24';
    this.sex="male";

    return {
        name:'Object',
        age:'12',
        sex:'female'
    }

}
console.log(Person());  //Object {name: "Object", age: "12", sex: "female"}
console.log(new Person());//Object {name: "Object", age: "12", sex: "female"}
```

所以ABC被排除,`Person()`的实例化对象实际存的是返回的`{ name: name }`，DE正确,F相当于通过对象字面量
创建的，其`__proto__`指向`Object.prototype`，所以不是
`undefined`

