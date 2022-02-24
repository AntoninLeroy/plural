from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'Heyyy'

    from .views import views
    from .requests import requests

    app.register_blueprint(views, url_prefix = '/')
    app.register_blueprint(requests, url_prefix = '/')

    return app