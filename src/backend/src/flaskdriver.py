import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from db import add, delete, edit, table_to_json, student_projects_report, major_gpa_report, count_projects_report, department_workload_report


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False


@app.route("/tables/<table>", methods=["GET", "POST", "PUT", "DELETE"])
@cross_origin()
def tables(table):
    conn = sqlite3.connect('./test.db')

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
        old_data = [value for key, value in args['oldData'].items()]
        new_data = [value for key, value in args['newData'].items()]
        edit(conn, old_data, new_data, table)
        conn.commit()
        return_json_data = jsonify({'data': table_to_json(conn, table),
                                    'status': 'SUCCESS'})
        conn.close()
        return return_json_data

    if request.method == "DELETE":
        args = request.get_json()
        data_to_delete = [value for key, value in args.items()]
        delete(conn, data_to_delete, table)
        conn.commit()
        return_json_data = jsonify({'data': table_to_json(conn, table),
                                    'status': 'SUCCESS'})
        conn.close()
        return return_json_data

    return jsonify({'data': NULL, 'status': 'FAIL'})


@app.route("/reports/<report>", methods=["GET", "POST"])
@cross_origin()
def reports(report):
    conn = sqlite3.connect('./test.db')

    if request.method == "GET":
        if report == "numProjectsByStudent":
            results = count_projects_report(conn)
            conn.commit()
            return_json_data = jsonify({'data': results,
                                       'status': 'SUCCESS'})
            conn.close()
            return return_json_data

        elif report == "numProjectsByDepartment":
            results = department_workload_report(conn)
            conn.commit()
            return_json_data = jsonify({'data': results,
                                       'status': 'SUCCESS'})
            conn.close()
            return return_json_data

    
    if request.method == "POST":
        if report == "studentProjects":
            args = request.get_json()
            data_to_get = [value for key, value in args.items()]
            results = student_projects_report(conn, data_to_get)
            conn.commit()
            return_json_data = jsonify({'data': results,
                                        'status': 'SUCCESS'})
            conn.close()
            return return_json_data

        elif report == "avgGpaMajor":
            args = request.get_json()
            data_to_get = [value for key, value in args.items()]
            results = major_gpa_report(conn, data_to_get)
            conn.commit()
            return_json_data = jsonify({'data': results,
                                        'status': 'SUCCESS'})
            conn.close()
            return return_json_data

    

    return jsonify({'data': NULL, 'status': 'FAIL'})
