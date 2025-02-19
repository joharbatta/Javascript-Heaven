# L Liskov Substitution Principle (LSP)
# If class B is subtype of class A, then we should be able to replace
# object of A with B without breaking the behavior of program.

# subclasses should extend the capability of parent not narrow it down 

# BAD Example (Violating LSP):
    
class Bird:
    def fly(self):
        print("I can fly!")

class Duck(Bird):
    def fly(self):
        print("Duck flying!")
    
    def swim(self):
        print("Duck swimming!")

class Penguin(Bird):
    def fly(self):
        # Penguins can't fly! This violates LSP because 
        # Penguin can't be substituted for Bird without breaking functionality
        raise NotImplementedError("Penguins can't fly!")
    
    def swim(self):
        print("Penguin swimming!")

# This function will break for Penguin objects
def make_bird_fly(bird: Bird):
    bird.fly()  # Will raise error for Penguin

# pingu = Penguin()
# make_bird_fly(pingu)

# GOOD Example (Following LSP):

from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name

class FlyingAnimal(Animal):
    @abstractmethod
    def fly(self):
        pass

class SwimmingAnimal(Animal):
    @abstractmethod
    def swim(self):
        pass

# A duck can both fly and swim
class Duck(FlyingAnimal, SwimmingAnimal):
    def fly(self):
        print(f"{self.name} is flying!")
    
    def swim(self):
        print(f"{self.name} is swimming!")

# A penguin can only swim
class Penguin(SwimmingAnimal):
    def swim(self):
        print(f"{self.name} is swimming!")

# An eagle can only fly
class Eagle(FlyingAnimal):
    def fly(self):
        print(f"{self.name} is flying!")

# Functions that work with the specific capabilities
def make_animal_fly(animal: FlyingAnimal):
    animal.fly()

def make_animal_swim(animal: SwimmingAnimal):
    animal.swim()

# Usage

donald = Duck("Donald")
pingu = Penguin("Pingu")
eddie = Eagle("Eddie")
# These will work fine
make_animal_fly(donald)    # Donald is flying!
make_animal_swim(donald)   # Donald is swimming!
make_animal_swim(pingu)    # Pingu is swimming!
make_animal_fly(eddie)     # Eddie is flying!

# This would cause a type error at compile time, which is good!
# make_animal_fly(pingu)   # Type error: Penguin is not a FlyingAnimal