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
];
function treeMap(tree,callback){
    if(!(callback instanceof Function)) return tree;
    const results=[];
    if(tree!==null){
        const len=tree.length;
        for(let i=0;i<len;i++){
            if(tree[i].children){
                treeMap(tree[i].children,callback)
            }
            tree[i]=callback(tree[i]);
            results.push(tree[i])
        }
    }else
        return null;
    return tree;
}

// 测试用例：

// 1. 生成一颗新树，将所有节点的id，加1
console.log(treeMap(tree, node => {
    let newNode = { ...node }
    newNode.id = node.id + 1
    return newNode
}))
// 打印的新树，应该与tree的结构一致，只是每个id自增1，老的tree，应该没有任何改动

// 2. 打印每个节点的id
// treeMap(tree, node => {
//     console.log(node.id)
//     return node
// });
// 应打印顺序应该是： 5，2，1，6

// 3. 对于非法输入，应直接返回第一个入参
// console.log(treeMap(null)) // 输出null
// console.log(treeMap(tree, true/*不是函数*/)) //输出tree