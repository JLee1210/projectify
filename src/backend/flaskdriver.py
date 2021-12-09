import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from backEnd import add, viewTable


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/table/<table>", methods=["GET", "POST"])
@cross_origin()
def tables(table):
    conn = sqlite3.connect('test.db')
    if request.method == "POST":
        args = request.get_json()
        newData = [value for key, value in args.items()]
        add(conn, newData, table)
        conn.commit()
        returnJsonData = jsonify({'data': viewTable(conn, table),
                                    'status': 'SUCCESS'})
        conn.close()
        return returnJsonData

    if request.method == "GET":
        conn.commit()
        returnJsonData = jsonify({'data': viewTable(conn, table),
                                  'status': 'SUCCESS'})
        conn.close()
        return returnJsonData

    return jsonify({'data': NULL, 'status': 'FAIL'})
