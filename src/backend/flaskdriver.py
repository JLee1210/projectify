from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from backEnd import add, viewStudent


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/<table>", methods=["GET", "POST"])
@cross_origin()
def tables(table):

    if table == 'student':
        if request.method == "POST":
            conn = sqlite3.connect('test.db')
            args = request.get_json()
            print(args)
            add(conn, args, table)
            return "SUCCESS"

    if request.method == "GET":

        return jsonify({
            'data': [
                {
                    'studentId': 123,
                    'name': 'Bob Mars',
                    'age': 21,
                    'major': 'Computer Science',
                    'email': 'bmars1@purdue.edu',
                },
                {
                    'studentId': 124,
                    'name': 'Bob Mars',
                    'age': 20,
                    'major': 'Computer Science',
                    'email': 'bmars2@purdue.edu',
                },
                {
                    'studentId': 321,
                    'name': 'James Bond',
                    'age': 44,
                    'major': 'Math',
                    'email': 'jbond@purdue.edu',
                },
            ]
        })

    return "FAIL"
