from flask import request, jsonify
from helpers import todo_helper

def get_all_todos():
    try:
        print(todo_helper.get_all_todos())
        return jsonify(todo_helper.get_all_todos())
    except Exception as ex:
        raise ex

def get_todo_by_ref_id(id):
    try:
        return jsonify(todo_helper.get_todo_by_ref_id(id))
    except Exception as ex:
        raise ex

def create_todo():
    try:
        req_data = request.get_json()
        return jsonify(todo_helper.create_todo(req_data))
    except Exception as ex:
        raise ex

def update_todo(id):
    try:
        req_data = request.get_json()
        return jsonify(todo_helper.update_todo(id, req_data["data"]))
    except Exception as ex:
        raise ex

def delete_todo(id):
    try:
        return jsonify(todo_helper.delete_todo(id))
    except Exception as ex:
        raise ex