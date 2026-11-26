class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const kita = new Set()
        for(const num of nums){
           if(kita.has(num)) return true
           kita.add(num)

        }
        return false
    }
}
