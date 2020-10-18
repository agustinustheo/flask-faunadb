from entities.faunadb_entity import get, get_multiple, get_by_ref_id, create, update, delete

def get_all_todos():
    try:
        return get_multiple('all_todos')
    except Exception as ex:
        raise ex

def get_todo_by_ref_id(id):
    try:
        return get_by_ref_id('todo', id)
    except Exception as ex:
        raise ex

def create_todo(data):
    try:
        return create('todo', data)
    except Exception as ex:
        raise ex

def update_todo(id, data):
    try:
        return update('todo', id, data)
    except Exception as ex:
        raise ex

def delete_todo(id):
    try:
        return delete('todo', id)
    except Exception as ex:
        raise ex