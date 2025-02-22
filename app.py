from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy database for users
users = {}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and users[username] == password:
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"success": False, "message": "Invalid username or password."})

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify({"success": False, "message": "Username already exists."})
    else:
        users[username] = password
        return jsonify({"success": True, "message": "Account created successfully!"})

if __name__ == '__main__':
    app.run(debug=True)