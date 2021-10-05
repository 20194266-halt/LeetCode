function find(arr, x, low, high)
{   if (high >= low) {
    let  mid = low + (high - low) / 2; 
    if (arr[mid]<= x&&arr[mid+1]>x)
      return mid;
    if (arr[mid]> x)
      return find(arr, x, low, mid - 1);
    return find(arr, x, mid + 1, high);
  }
  return -1;
}
var findMedianSortedArrays = function(nums1, nums2) {
    let num3;
    
};