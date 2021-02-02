


function bubbleSort(nums){
    var isSorted = false 


    while(!isSorted){
        isSorted = true
        for(let i = 0; i < nums.length; i++){
            if(nums[i+1] < nums[i]){
                let temp = nums[i+1]
                nums[i+1] = nums[i]
                nums[i] = temp
                isSorted = false 
            }
        }
    }

    return nums;
}





function twoSum(nums, target){

    let myMap = new Map()

    for(let i = 0; i < nums.length; i++){
        myMap.set(nums[i], i)
    }

    for(let i = 0 ; i < nums.length; i++){
        let complement = target - nums[i];
        if(myMap.has(complement)){
            var index = myMap.get(complement)
            var arr = [i, index]
            return arr; 
        }
    }
}

var nums = [7,15,11, 2]

console.log(twoSum(nums, 9))