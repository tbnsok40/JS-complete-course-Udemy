class Tree(object):
    def __init__(self, x, left=None, right=None):
        self.x = x
        self.left = left
        self.right = right


T = Tree(4, Tree(5, Tree(4, Tree(5))), Tree(6, Tree(1), Tree(6)))


def solution(T):
    distinct = {1: set([])}
    stack = [(T, set([T.x]))]
    i = 1
    while stack:
        node, value = stack.pop()
        if (node.left == None) and (node.right == None):

            distinct[i] = value
            i += 1
        else:
            if node.right != None:
                stack.append((node.right, value | set([node.right.x])))
            if node.left != None:
                stack.append((node.left, value | set([node.left.x])))
    answer = 1
    for i in distinct.keys():
        temp = len(distinct[i])
        if answer < temp:
            answer = temp
    print(distinct)
    return answer


print(solution(T))
