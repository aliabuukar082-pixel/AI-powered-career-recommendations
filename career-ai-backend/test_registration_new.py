#!/usr/bin/env python
"""
Test user registration with new username
"""

import os
import sys
import django

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'career_ai_backend.settings')
django.setup()

from users.serializers import UserRegistrationSerializer

def test_new_user():
    """Test the registration serializer with a new username"""
    
    import random
    random_num = random.randint(1000, 9999)
    
    registration_data = {
        "username": f"testuser{random_num}",
        "email": f"test{random_num}@example.com",
        "password": "password123",
        "password_confirm": "password123",
        "first_name": "Test",
        "last_name": "User"
    }
    
    try:
        serializer = UserRegistrationSerializer(data=registration_data)
        print(f"Is valid: {serializer.is_valid()}")
        
        if not serializer.is_valid():
            print("Validation errors:")
            for field, errors in serializer.errors.items():
                print(f"  {field}: {errors}")
        else:
            print("Validation successful!")
            user = serializer.save()
            print(f"User created: {user.username}")
            print(f"User ID: {user.id}")
            print(f"Email: {user.email}")
            
            # Check if UserProfile was created
            from users.models import UserProfile
            try:
                profile = UserProfile.objects.get(user=user)
                print(f"UserProfile created: {profile}")
                print(f"Role: {profile.role}")
            except UserProfile.DoesNotExist:
                print("UserProfile was not created!")
            
    except Exception as e:
        print(f"Exception: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    test_new_user()
