class Vehicle :
    def __init__(self, speed):
        self.speed = speed

    def speedUp(self):
        self.speed += 10

    def speedDown(self):
        self.speed -= 10
        
class Car(Vehicle):
    def __init__(self, speed, wheels, seats):
        Vehicle.__init__(speed)
        self.wheels = wheels
        self.seats = seats

    def info(self):
        print