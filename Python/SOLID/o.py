# O -> Open / Closed Principle (Open for extension closed for modification)

# BAD Example (Violating OCP):

class PaymentProcessor:
    def process_payment(self, payment_type, amount):
        if payment_type == "credit_card":
            # Process credit card payment
            print(f"Processing credit card payment of ${amount}")
        elif payment_type == "paypal":
            # Process PayPal payment
            print(f"Processing PayPal payment of ${amount}")
        elif payment_type == "bitcoin":
            # Process Bitcoin payment
            print(f"Processing Bitcoin payment of ${amount}")
        # If we want to add a new payment method, we need to modify this class
        # by adding another elif statement, violating OCP
        
# GOOD Example (Following OCP):

from abc import ABC, abstractmethod

# The abc module allows you to define abstract base classes, which serve as interfaces.

class PaymentProcessor(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass
    # @abstractmethod
    # def process_payment1(self, amount):
    #     pass

class CreditCardProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing credit card payment of ${amount}")

class PayPalProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing PayPal payment of ${amount}")

class BitcoinProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing Bitcoin payment of ${amount}")

# To add a new payment method, we can create a new class without modifying existing code
class ApplePayProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing Apple Pay payment of ${amount}")

# Usage
def process_payment(processor: PaymentProcessor, amount: float):
    processor.process_payment(amount)
    
# In the BAD example:

# The PaymentProcessor class needs to be modified every time we want to add a new payment method
# This violates OCP because the class is not closed for modification
# It's harder to maintain and more prone to bugs when modifying existing code
# In the GOOD example:

# We use an abstract base class and inheritance
# New payment methods can be added by creating new classes without modifying existing code
# The code is closed for modification but open for extension
# Each payment method is encapsulated in its own class
# It's easier to maintain and test
# Follows the dependency inversion principle as well
# To use different payment methods:

# Using different payment processors
credit_card = CreditCardProcessor()
paypal = PayPalProcessor()
bitcoin = BitcoinProcessor()
apple_pay = ApplePayProcessor()

process_payment(credit_card, 100)
process_payment(paypal, 50)
process_payment(bitcoin, 75)
process_payment(apple_pay, 200)

# This design is more flexible and maintainable, as new payment methods can be added without changing existing code, 
# truly following the Open-Closed Principle.