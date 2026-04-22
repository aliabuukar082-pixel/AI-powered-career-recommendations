#!/usr/bin/env python
"""
Simple test of user registration serializer
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

def test_serializer():
    """Test the registration serializer directly"""
    
    registration_data = {
        "username": "testuser789",
        "email": "test789@example.com",
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
            
    except Exception as e:
        print(f"Exception: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    test_serializer()
