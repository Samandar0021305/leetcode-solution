// var divideArray = function(nums) {
// let sorted = nums.sort((a,b)=>{
//     return a - b
// })

// let a =0
// let arr = []
// for(let i=0;i<sorted.length;i+=2){
//   if(sorted[i] === sorted[i+1]){
//     a++
//   }else{
//     arr.push(false)
//   }
// }


// if(a ===0 || sorted.length % a !== 0 || arr.includes(false)) return false
// return true

// };
// console.log(divideArray([15,13,5,20,18,2,20,8,20,17,10,19]))


// var findDifference = function(nums1, nums2) {
//     let arr = []
//     let arr1 = []
//     let n = nums1.length >= nums2.length ? nums1.length : nums2.length
//     for(let i=0;i < n ;i++ ){
//         if(!nums2.includes(nums1[i]) && nums1[i] !=undefined){
//             arr.push(nums1[i])
//         } 
//         if(!nums1.includes(nums2[i]) && nums2[i] !=undefined){
//             arr1.push(nums2[i])
//         }
//     }
 
//     arr = new Set(arr)
//     arr1 = new Set(arr1)

//     return [Array.from(arr),Array.from(arr1)]
    
// };

// console.log(findDifference([-73],[-66,9,-54,-32,94,11]))


// var findClosestNumber = function(nums) {
//     if(nums.includes(0)) return 0
//     if(nums.length === 1) return nums[0] 
//     let minus = []
//     let pilus = []
//    for(let item of nums){
//     if(item < 0) minus.push(item)
//     if(item > 0) pilus.push(item)
//    }

//    if(minus != [] && pilus !=[]){
//        pilus = Math.min(...pilus);
//        minus = Math.max(...minus);
//        if(Math.abs(minus) === pilus) return pilus
//        if(Math.abs(minus)>pilus) return pilus
//        if(Math.abs(minus)<pilus) return minus
//    }
//    if(pilus == [] && minus !=[]){
//     minus = Math.max(...minus)
//     return minus
//    }
//    if(minus == [] && pilus !=[]){
//      pilus = Math.max(...pilus)
//      return pilus
//    }

// };

// console.log(findClosestNumber([-4,-2,1,4,8]))


// var intersection = function(nums) {
//     let a = [];

//     for (let i = 0; i < nums[0].length; i++) {
//       if (nums.every((x) => x.includes(nums[0][i]))) {
//         a.push(nums[0][i]);
//       }
//     }
  
//     return a.sort((a, b) => a - b);
// };

// console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))


// var removeDigit = function(number, digit) {
//   number = number.split("")  
//   let arr = []
//   for(let item =0;item<number.length;item++){
//     if(number[item] == digit){
//         digit = undefined
//  continue
// } 
// if(number[item] != digit){
//     arr.push(number[item])
// }
//   }
//   return arr.join("")
// };

// console.log(removeDigit())


// var percentageLetter = function(s, letter) {
//   let a = 0;
//   for(let i=0;i<s.length;i++){
//     if(s[i] == letter){
//         a = a + 1
//     }
//   }

//   return Math.round(a / s.length * 100)

// };

// console.log(percentageLetter("foobar","o"))

// var divide = function(dividend, divisor) {
//     let a = 0
//     let start = Math.abs(dividend)
//     let end = Math.abs(divisor)
//    while(start >= end){
//     start -= end
//     a= a + 1
//    }

//    return a
// };

// console.log(divide(-2147483648,-1))

// var greatestLetter = function(s) {
//     let strArr =[]
//     for(let i=0;i<s.length;i++){
//         for(let j=0;j<s.length;j++){
//             if(s[i] == s[j].toUpperCase() && s[i].toLowerCase() == s[j] && i!=j){
//                 strArr.push(s[i])
//             }
//         }
//     }

//     if(strArr.length ===0) return ""
//     let sorted = strArr.sort()
//     return sorted[sorted.length-1]
    
// };
// console.log(greatestLetter("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))



// var digitCount = function(num) {
//     function str(cr,i){
//        let a = 0;
//        for(let j=0;j<cr.length;j++){
//         if(cr[j] == i) {
//             a = a+1
//         }
//        }
//        return a
//     }
//     let arr = num.split("")
//     let r = []
//     for(let i=0;i<arr.length;i++){
//         if(str(arr,i) == arr[i]){
//           r.push(true)
//         }else{
//             r.push(false)
//         }
//     }

//     if(r.includes(false)) return false
//     return true
// };

// console.log(digitCount("030"))

// var countAsterisks = function(s) {
//     let green=true, count=0;
//       for(let i=0; i<s.length; i++){
//           if(green && s[i]=="*"){count++};
//           if(s[i]=="|"){green=!green};
//       }
//       return count;  
//   };


// var canBeTypedWords = function(text, brokenLetters) {
//     text = text.split(" ")
//     brokenLetters = brokenLetters.split("")
//     let a = 0
//     function Current(arr,item){
//         let n = arr.length >= item.length ? arr.length : item.length
//       for(let i=0;i< n;i++){
//         if(arr.includes(item[i]) ) return false
//       }

//       return true
//     }
//     for(let item of text){
//         if(Current(item,brokenLetters) == true){
//            a++
//         }
//     }
//     return a
    
// };

// console.log(canBeTypedWords("leet code","e"))


// var getLucky = function(s, k) {
//     let res = s.split('').reduce((acc, el) => acc + (el.charCodeAt(0) - 96), '')
// 	for (let i = 0; i < k; i++) {
// 		res = res.toString().split('').reduce((acc, el) => acc + Number(el), 0)
// 	}
// 	return res;
// };
// console.log(getLucky("leetcode",2))

// var isPrefixString = function(s, words) {
//     let sum = "";
//     let isValid = false
//     for(let item of words){
//         sum +=item
//         if(s == sum){
//             isValid = !isValid
//         }
//     }

//     return isValid
// };

// console.log(isPrefixString("a",["aa","aaaa","banana"]))


// var numOfStrings = function(patterns, word) {
//     let count =0;
//     for(let item of patterns){
//         if(word.includes(item)){
//             count = count + 1
//         }
//     }
//     return count
// };

// console.log(numOfStrings(["a","b","c"],"aaaaabbbbb"))

// var findGCD = function(nums) {
//     let maxNum = Math.max(...nums)
//     let minNum = Math.min(...nums)
//     if(maxNum % minNum === 0) return minNum

//     let value =[]
//     for(let i=1;i<maxNum;i++){
//         if(maxNum % i ==0 && minNum % i=== 0){
//           value = i
//         }
//     }
//     return value
// };

// console.log(findGCD([9,10]));

// var finalValueAfterOperations = function(operations) {
    
//     let a = 0;
//     for(let item of operations){
//         if(item === "++X" || item === "X++") a = a + 1
//         if(item === "--X" || item === "X--") a = a - 1
//     }
//     return a
// };

// console.log(finalValueAfterOperations(["++X","++X","X++"]))

// var countKDifference = function(nums, k) {
//     let a =0;
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//             if(Math.abs(nums[i] - nums[j]) === k){
//                 a++
//             }
//         }
//     }
//     return a/2
// };

// console.log(countKDifference([1,3],3))