#!/usr/bin/env python
"""
Create sample job posts for Ostim Jobs functionality
"""

import os
import sys
import django

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'career_ai_backend.settings')
django.setup()

from jobs.models import JobPost
from django.contrib.auth.models import User
from users.models import UserProfile
from datetime import datetime, timedelta

def create_sample_jobs():
    """Create sample job posts for testing"""
    
    # Create a sample job provider if not exists
    try:
        provider_user = User.objects.get(username='ostim_provider')
        print("Job provider already exists")
    except User.DoesNotExist:
        provider_user = User.objects.create_user(
            username='ostim_provider',
            email='provider@ostim.edu',
            password='provider123',
            first_name='Ostim',
            last_name='Career Center'
        )
        try:
            provider_profile = provider_user.userprofile
        except UserProfile.DoesNotExist:
            provider_profile = UserProfile.objects.create(
                user=provider_user, 
                role='job_provider',
                auth_method='email'  # Add required auth_method field
            )
        provider_profile.role = 'job_provider'
        provider_profile.save()
        print("Created job provider user")

    # Create sample job posts
    sample_jobs = [
        {
            'title': 'Software Development Intern',
            'description': 'Join our software development team for a hands-on internship experience. You will work on real projects, learn modern development practices, and collaborate with experienced developers.',
            'required_skills': ['Python', 'JavaScript', 'Git', 'HTML/CSS', 'Problem Solving'],
            'number_of_students_needed': 3,
            'department': 'Computer Engineering',
            'location': 'Ostim Technical University - Campus A',
            'deadline': (datetime.now() + timedelta(days=30)).date(),
            'institution': 'Ostim Technical University',
            'job_provider': provider_user
        },
        {
            'title': 'Web Development Assistant',
            'description': 'Assist in maintaining and improving the university website. Learn modern web technologies and gain practical experience in a professional environment.',
            'required_skills': ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX Design'],
            'number_of_students_needed': 2,
            'department': 'Information Technology',
            'location': 'Ostim Technical University - Campus B',
            'deadline': (datetime.now() + timedelta(days=21)).date(),
            'institution': 'Ostim Technical University',
            'job_provider': provider_user
        },
        {
            'title': 'Data Analysis Research Assistant',
            'description': 'Work with our research team to analyze data and help with ongoing research projects. Great opportunity for students interested in data science.',
            'required_skills': ['Python', 'Data Analysis', 'Statistics', 'Excel', 'Research Methods'],
            'number_of_students_needed': 1,
            'department': 'Data Science',
            'location': 'Ostim Technical University - Research Lab',
            'deadline': (datetime.now() + timedelta(days=45)).date(),
            'institution': 'Ostim Technical University',
            'job_provider': provider_user
        },
        {
            'title': 'Mobile App Development Intern',
            'description': 'Help develop mobile applications for university services. Learn React Native and mobile development best practices.',
            'required_skills': ['React', 'JavaScript', 'Mobile Development', 'UI Design', 'Testing'],
            'number_of_students_needed': 2,
            'department': 'Computer Engineering',
            'location': 'Ostim Technical University - Innovation Lab',
            'deadline': (datetime.now() + timedelta(days=25)).date(),
            'institution': 'Ostim Technical University',
            'job_provider': provider_user
        },
        {
            'title': 'Cybersecurity Assistant',
            'description': 'Assist the IT security team with monitoring and improving university network security. Learn about cybersecurity tools and practices.',
            'required_skills': ['Network Security', 'Python', 'Linux', 'Firewall Management', 'Risk Assessment'],
            'number_of_students_needed': 1,
            'department': 'Cybersecurity',
            'location': 'Ostim Technical University - IT Department',
            'deadline': (datetime.now() + timedelta(days=35)).date(),
            'institution': 'Ostim Technical University',
            'job_provider': provider_user
        }
    ]

    # Clear existing job posts
    JobPost.objects.all().delete()
    print("Cleared existing job posts")

    # Create job posts
    created_count = 0
    for job_data in sample_jobs:
        job_post = JobPost.objects.create(**job_data)
        created_count += 1
        print(f"Created job: {job_post.title}")

    print(f"Successfully created {created_count} sample job posts")
    print(f"Total active job posts: {JobPost.objects.filter(status='active').count()}")

if __name__ == '__main__':
    create_sample_jobs()
