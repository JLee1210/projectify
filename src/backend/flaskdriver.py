import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from db import add, edit, table_to_json


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False


@app.route("/table/<table>", methods=["GET", "POST", "PUT", "DELETE"])
@cross_origin()
def tables(table):
    conn = sqlite3.connect('test.db')

    if request.method == "GET":
        conn.commit()
        return_json_data = jsonify({'data': table_to_json(conn, table),
                                    'status': 'SUCCESS'})
        conn.close()
        return return_json_data

    if request.method == "POST":
        args = request.get_json()
        new_data = [value for key, value in args.items()]
        add(conn, new_data, table)
        conn.commit()
        return_json_data = jsonify({'data': table_to_json(conn, table),
                                    'status': 'SUCCESS'})
        conn.close()
        return return_json_data

    if request.method == "PUT":
        args = request.get_json()
        print(args)
        old_data = [value for key, value in args['oldData'].items()]
        new_data = [value for key, value in args['newData'].items()]
        edit(conn, old_data, new_data, table)
        print(old_data)
        print(new_data)
        conn.commit()
        return_json_data = jsonify({'data': table_to_json(conn, table),
                                    'status': 'SUCCESS'})
        print(return_json_data)
        conn.close()
        return return_json_data
    return jsonify({'data': NULL, 'status': 'FAIL'})
