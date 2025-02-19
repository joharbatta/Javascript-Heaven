# Write Python 3 code in this online editor and run it.
# Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
# array sorted 
# at most 2
arr=[0,0,1,1,1,1,2,2,3,3]
ouput = [0,0,1,1,2,2,3,3]

def remove_duplicates(nums):
    if not nums:
        return 0

    # Index for placing allowed elements
    insert_position = 0

    for num in nums:
        # If we can insert the number (either because it's the first or second occurrence)
        if insert_position < 2 or nums[insert_position - 2] != num:
            nums[insert_position] = num
            insert_position += 1

    return nums[:insert_position]