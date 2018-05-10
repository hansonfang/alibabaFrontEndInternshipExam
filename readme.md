# 阿里巴巴2018前端实习生考试部分试题
### 1.请分析如下代码，选择关于`var person1 = new Person("Bob")`和`var person2 = Person("Alice")`的说法正确的目：
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

***

### 2.请使用 JavaScript 实现一个 getIntersection 函数，可获取多个区间的交集，规则如下：

区间用长度为 2 的数字数组表示，如 [2, 5] 表示区间 2 到 5（包括 2 和 5）；区间不限定方向，如 [5, 2] 等同于 [2, 5]；该方法可接收多个区间，并返回所有区间的交集（用区间表示），如空集用 null 表示。并能正确通过以下测试用例：
```javascript
function getIntersection(...args) {
  // your code here
}
getIntersection([1, 4], [3, 5]); // return [ 3, 4 ]
getIntersection([5, 2], [4, 9], [3, 6]); // return [ 4, 5 ]
getIntersection([1, 7], [8, 9]); // return null
getIntersection(['x', 7], [4, 9]); // return null
getIntersection([1, 2]); // return [ 1, 2 ]
getIntersection([1, 2], [2, 3]); // return [ 2, 2 ]
```
>[函数实现](https://github.com/hansonfang/alibabaFrontEndInternshipExam/getIntersection.js)


### 3.请使用 JavaScript 编写一个树的深度优先遍历函数（节点最深的最先访问到，依次类推），满足以下测试用例：


```javascript
// 假设树的结构如下
const tree = [
  {
    id: 1,
    name: '张三',
    children: [
    	{
    		id: 2,
    		name: '李四',
    		children: [
    			{
    				id: 5,
    				name: '张五'
    			}
    		]
    	}
    ]
  },
  {
    id: 6,
    name: '玛丽'
  }
]

// 测试用例：

// 1. 生成一颗新树，将所有节点的id，加1
console.log(treeMap(tree, node => {
	let newNode = { ...node }
	newNode.id = node.id + 1
	return newNode
}))
// 打印的新树，应该与tree的结构一致，只是每个id自增1，老的tree，应该没有任何改动

// 2. 打印每个节点的id
treeMap(tree, node => {
	console.log(node.id)
	return node
});
// 应打印顺序应该是： 5，2，1，6

// 3. 对于非法输入，应直接返回第一个入参
console.log(treeMap(null)) // 输出null
console.log(treeMap(tree, true/*不是函数*/)) //输出tree
```
