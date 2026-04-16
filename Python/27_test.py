class Vehicle:
    def __init__(self, speed):
        self.speed = speed

class Car(Vehicle):
    def __init__(self, speed, wheels, seats):
        Vehicle.__init__(self, speed)
        self.wheels = wheels
        self.seats = seats
    def info(self):
        print(self.speed,self.wheels,self.seats)

class Truck(Car):
    def __init__(self, speed, wheels, seats,loadage):
        Car.__init__(self,speed, wheels, seats)
        self.loadage = loadage

    def load(self):
        print('load')

    def unload(self):
        print('unload')
    
    def info(self):
        print(self.speed, self.wheels, self.seats, self.loadage)
