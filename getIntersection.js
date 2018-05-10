// console.log(getIntersection([1, 4], [3, 5])); // return [ 3, 4 ]
// console.log(getIntersection([5, 2], [4, 9], [3, 6])); // return [ 4, 5 ]
// console.log(getIntersection([1, 7], [8, 9])); // return null
// console.log(getIntersection(['x', 7], [4, 9])); // return null
// console.log(getIntersection([1, 2])); // return [ 1, 2 ]
// console.log(getIntersection([1, 2], [2, 3])); // return [ 2, 2 ]


function getIntersection(...args) {
    const len = args.length;
    //只有一个数组时
    if(len===1) return args[0];

    //生成完整的序列数组
    for (let i = 0; i < len; i++) {
        const currentArray = args[i];
        if(isNaN(currentArray[0])||isNaN(currentArray[1])) return null;
        if (currentArray[0] > currentArray[1]) {
            swap(currentArray, 0, 1);
        }
        const firstNum = currentArray[0];
        const lastNum = currentArray[1];

        //k代表从第几位开始添加，每添加一个以后添加在k++位置
        for (let j = firstNum, k = 1; j < lastNum - 1, k < lastNum - firstNum; j++, k++) {
            currentArray.splice(k, 0, j + 1);
        }

        //写回原数组
        args[i]=currentArray
    }
    // console.log(args);

    //取交集，互相取交集运算取数组个数-1次，eg.4个数组取3次
    let prev_arr=args[0];
    for(let i=1;i<len;i++){
        const curr_arr=args[i];

        //此条件判断是否有交集
        if(prev_arr[prev_arr.length-1]>=curr_arr[0]&&prev_arr[0]<=curr_arr[curr_arr.length-1]){
            if(prev_arr[prev_arr.length-1]===curr_arr[0]){
                prev_arr=[prev_arr[prev_arr.length-1],curr_arr[0]]
            }
            prev_arr=prev_arr.filter(function (value,index) {
                return curr_arr.includes(value)
            })
        }else
            return null;
    }

    return prev_arr;
}

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}