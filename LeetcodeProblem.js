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
    let nums3, l = (nums1.length()+nums2.length())%2,a = nums1[nums1.length()-1], b = nums2[nums2.length()-1];
    const num3 = (nums1.length()+nums2.length())/2+1;
    while(num3!=0)
        {   if(nums1.isEmpty()&&nums2.isEmpty())
                { if(num3>0)
                    {
                        let first1 = 0, med1 = nums1.length()/2, last1 = nums1.length()-1;
                        let first2 = 0, med2 = nums2.length()/2, last2 = nums2.length()-1;
                        if(nums1[med1]>nums2[med2])
                            {
                                let k = find(nums1, nums2[med2], first1, med1);
                                num3 = num3 - (med2+1)-(k+1);
                                nums1 = nums1.slice(k+1, last1);nums2 = nums2.slice(med2+1, last2);
                            }
                        else
                            {
                                let k = find(nums2, nums1[med1], first2, med2);
                                num3 = num3 - (med1+1)-(k+1);
                                nums1 = nums1.slice(med1+1, last1); nums2 = nums2.slice(k+1, last2);
                            }
                    }
                else
                    {
                        nums1 = nums1.slice(0, nums1.length()/2);
                        nums2 = nums2.slice(0, nums2.length()/2);
                    }
                } 
            if(nums1.isEmpty())
                {
                    if(num3==1)
                        {
                            if(l)                                   
                                {return nums2[num3-1];}
                            else
                                {return (a+nums2[num3-1])}
                        }
                    else
                        {return (nums2[num3-1]+nums2[num3-1-!l])/2;}
                }
            if(nums2.isEmpty())
                {
                    if(num3==1)
                        {
                            if(l)
                                {return nums1[num3-1];}
                            else
                                {return (b+nums1[num3-1])}
                        }
                    else
                        {return (nums1[num3-1]+nums1[num3-1-!l])/2;}
                }
                    
        }
    
    nums3 = [nums1[med1], nums1[med1-1], nums2[med2], nums2[med2-1]].sort;
    return (nums3[0]+nums3[0+!l])/2;
        
}
