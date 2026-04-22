#!/usr/bin/env python
"""
Test user registration after auth_method fix
"""

import os
import sys
import django

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'career_ai_backend.settings')
django.setup()

import requests
import json

def test_registration():
    """Test user registration endpoint"""
    
    registration_data = {
        "username": "testuser456",
        "email": "test456@example.com",
        "password": "password123",
        "password_confirm": "password123",
        "first_name": "Test",
        "last_name": "User"
    }
    
    try:
        response = requests.post(
            'http://localhost:8000/api/register/',
            json=registration_data,
            headers={'Content-Type': 'application/json'}
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            print("Registration successful!")
        else:
            print("Registration failed!")
            
    except requests.exceptions.ConnectionError:
        print("Connection error - backend server may not be running")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    test_registration()
