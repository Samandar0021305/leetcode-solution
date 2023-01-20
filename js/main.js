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



var convertTime = function(current, correct) {
    
};

console.log(convertTime("02:30","04:35"))