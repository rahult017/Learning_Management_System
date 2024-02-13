num = [1,2,3,4,5,6,7,8]
for x in num:
    num.remove(x)
print(num)

def custom_rearrange(input_list):
    # Swap elements at specific indices
    input_list[1], input_list[7] = input_list[7], input_list[1]
    input_list[3], input_list[5] = input_list[5], input_list[3]
    
    return input_list

input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
output_list = custom_rearrange(input_list)
print(output_list)


from collections import deque

def custom_rearrange(input_list):
    # Convert to deque, rotate, and convert back to list
    d = deque(input_list)
    d.rotate(3)
    output_list = list(d)
    return output_list

input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
output_list = custom_rearrange(input_list)
print(output_list)
