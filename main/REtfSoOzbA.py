import os
import json
import random
import string

class Utility:
    @staticmethod
    def generate_random_string(length):
        return ''.join(random.choices(string.ascii_letters + string.digits, k=length))
    
    @staticmethod
    def save_to_file(filename, data):
        with open(filename, 'w') as f:
            json.dump(data, f)
    
    @staticmethod
    def load_from_file(filename):
        with open(filename, 'r') as f:
            return json.load(f)
    
    @staticmethod
    def list_files_in_directory(directory):
        return os.listdir(directory)
    
    @staticmethod
    def delete_file(filename):
        if os.path.exists(filename):
            os.remove(filename)
    
    @staticmethod
    def get_file_extension(filename):
        return os.path.splitext(filename)[1]
    
    @staticmethod
    def create_directory(directory):
        if not os.path.exists(directory):
            os.makedirs(directory)
    
    @staticmethod
    def read_file(filename):
        with open(filename, 'r') as f:
            return f.read()
    
    @staticmethod
    def write_to_file(filename, content):
        with open(filename, 'w') as f:
            f.write(content)
    
    @staticmethod
    def append_to_file(filename, content):
        with open(filename, 'a') as f:
            f.write(content)
    
    @staticmethod
    def clear_file(filename):
        open(filename, 'w').close()
    
    @staticmethod
    def get_current_directory():
        return os.getcwd()
    
    @staticmethod
    def change_directory(directory):
        os.chdir(directory)
