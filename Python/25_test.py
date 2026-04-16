class Square :
    def __init__(self, width, heigh):
        self.width = width
        self.heigh = heigh

    def area(self):
        return self.width * self.heigh
    
    def double(self):
        self.width *=2 
        self.heigh *=2

# print(Square.area(3,5))
result = Square(3,5)
print(result.area())

result.double()
print(result.width, result.heigh)
