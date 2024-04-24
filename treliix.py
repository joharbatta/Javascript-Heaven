
----------- Round 2 (Trellix)

Input: [1, [2, [3 ,4], 5, 6], 7, [8]]
Output:[1, 2, 3, 4, 5, 6, 7, 8]


# flatten the given list


list1 = [1,[2, [3 ,4]  , 5, 6], 7, [8]]

# list1=[[[1]]]

output = []
def flatten(input):
    for z in input:
        if isinstance(z, list):
            flatten(z)
        else:
          output.append(z) 
        
flatten(list1)
print(output)

# Sum of Last ‘N’ Nodes of Linked listInput:List:  
# 2->4>20->1->5->10
# N: 3
# Output:16


# head = None

# def createLL(headN,data):
#     global head
#     newNode=ListNode(0)
#     newNode.data=data
#     newNode.next=headN
    
#     headN=newNode
#     head=headN
    
# createLL(head,2)
# createLL(head,4)


class ListNode: 
    def __init__(self, x):
        self.data = x
        self.next = None

# 2->4>20->1->5->10
# N: 3
# Output:16

N=0
sum=0;

head = ListNode(2)
head.next = ListNode(4)
head.next.next = ListNode(20)
head.next.next.next = ListNode(1)
head.next.next.next.next = ListNode(5)
head.next.next.next.next.next = ListNode(10)

def sumNLastNodes(head):
    global sum 
    global N
    if(head==None):
        return
    print(head.data,head);
    sumNLastNodes(head.next)
    
    if(N>0):
        sum = sum + head.data
        N=N-1
        
sumNLastNodes(head)
print(sum)  



# Maximum width of Binary treeThe width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
    
root = TreeNode(1)
root.left = TreeNode(3)
root.right = TreeNode(2)
root.left.left = TreeNode(5)
root.left.right = TreeNode(3)
root.right.right = TreeNode(9)
# root.right.right.right = TreeNode(9)
#     1 
# 3.     2

# 5  3.  9 


max=0;

def height(root):
    if root is None:
        return 0
    else:
        leftHeight=height(root.left)
        rightHeight=height(root.right)
    
    return leftHeight+1 if(leftHeight>rightHeight) else rightHeight+1
   
        
    
def widthMax(root):
    
    h = height(root)
    
        
    print(h)


widthMax(root)








Round 3
---------------------------------------- rakesh mishra senior trellix


what is zookeeper its usage
kafka consumer consumer group 
sql vs no sql
what is self in python
what is args and *args, **kwargs
what is iterator
generator
MRO (Method Resolution Order).
decorator
iterator vs loop
order of calling class methods (morb)

elastic search



\
// generator func

def generator():
		yield 1
    yield 2

print(generator())






def decorator(func):
		
    def wrapper(*args):
    	
      print('starting execting ',args)
    #   if(a>10)
      if(args[0]>10):
        print('arg[0]','ededed')
          
      output = func(*args)
      return output
    return wrapper
  
@decorator
def api(a,b):
	print('calling',a,b)

print(api(50,10))


class A:
    pass
 
 
class B:
    pass
 
 
class C(A, B):
    pass
 

class D(B, A):
    pass
 

class E(C,D):
    pass
    
E D A B C 

E C A B D


grep filename "12.33" | "400" > txt


lsof -i







Q1. There is a string which contains alphanumeric chars WAP to get all numbers from string and get the sum

Example:

String “a10Abcd30 BSADCD20GHI9”
Output: 10+30+20 = 60

a1 0 A bcd30 BSADCD20GHI


class String:

	def func(str):
  
  	x = string.split('')
    
    list=[]
    tempStr = ''
    
    for i in x:
      if(i.isDigit()):
        tempStr+=i
      else:
      	if tempStr:
          list.push(tempStr)
          tempStr=''
      	
     if(tempStr):
     	list.push(tempStr)
      	
    

y = String()
y.func('10Abcd30 BSADCD20GHI')





54. Spiral Matrix


Given an m x n matrix, return all elements of the matrix in spiral order.
1    2    3
4    5    6
7    8    9


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

m = 3
n = 3

0,0 1  
0,1 2
0,2 3

1,2 6
2,2 9

2,1 8
2,0 7

1,0 4
1,1 5


[1,2,3]
[4,5,6]
[7,8,9]

i j
0 1


i=0;
j=0;
output=[]

for i in range(m*n):
	output.append(mat[i][j])
  
  
  
  
  

























