from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import PyPDF2
import re
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Configure upload folder
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'doc', 'docx'}
# Update the UPLOAD_FOLDER configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')

# Create upload folder with proper permissions
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER, mode=0o777)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
print("Upload folder path:", UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
@app.route('/api/upload', methods=['POST'])
def upload_file():
    # Add debug prints
    print("Upload request received")
    print("Files in request:", request.files)
    
    if 'file' not in request.files:
        print("No file in request")
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    print("Filename:", file.filename)
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        # Get absolute path for upload folder
        upload_path = os.path.abspath(app.config['UPLOAD_FOLDER'])
        file_path = os.path.join(upload_path, filename)
        
        print("Saving file to:", file_path)
        try:
            file.save(file_path)
            print("File saved successfully")
            return jsonify({
                'message': 'File uploaded successfully',
                'filename': filename,
                'path': file_path
            }), 200
        except Exception as e:
            print("Error saving file:", str(e))
            return jsonify({'error': f'Failed to save file: {str(e)}'}), 500
    
    return jsonify({'error': 'File type not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)