from views.index import home
from services.todo_service import get_all_todos, get_todo_by_ref_id, create_todo, update_todo, delete_todo
from flask import Flask

app = Flask(__name__)
app.add_url_rule('/', methods=['GET'], view_func=home)
app.add_url_rule('/api/todos', methods=['GET'], view_func=get_all_todos)
app.add_url_rule('/api/todos', methods=['POST'], view_func=create_todo)
app.add_url_rule('/api/todos/<string:id>', methods=['GET'], view_func=get_todo_by_ref_id)
app.add_url_rule('/api/todos/<string:id>', methods=['PUT'], view_func=update_todo)
app.add_url_rule('/api/todos/<string:id>', methods=['DELETE'], view_func=delete_todo)

if __name__ == "__main__":
    app.run(host='0.0.0.0')