
# S -> Single Responsibilty principle ( A class should have only one reason to change)

# -> BAD 
class User:
    def __init__(self, name, password):
        self.name = name
        self.password = password
        
    def get_user(self):
        return self.name, self.password
    
    def authenticate(self,user):
        pass
    
    def save_to_DB(self, user):
        pass
    

# -> GOOD
# User class is only responsible for holding user data
# UserAuthenticator class is only responsible for authentication
# UserRepository class is only responsible for database operations

class User:
    def __init__(self, name, password):
        self.name = name
        self.password = password
    
    def get_user(self):
        return self.name, self.password

class UserAuthenticator:
    def authenticate(self, user, provided_password):
        return user.password == provided_password

class UserRepository:
    def save_to_DB(self, user):
        # Database saving logic here
        pass
    

# Create instances
user = User("John", "password123")
authenticator = UserAuthenticator()
repository = UserRepository()

# Use the classes
user_data = user.get_user()
print(user_data)
is_authenticated = authenticator.authenticate(user, "password123")
repository.save_to_DB(user)