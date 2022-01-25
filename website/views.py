from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/officeChatbot')
def officeChatbot():
    return render_template("officeChatbot.html")

@views.route('/articles')
def articles():
    return render_template("articles.html")

@views.route('/articles/officeChatbot')
def articleOfficeChatbot():
    return render_template("articleOfficeChatbot.html")

@views.route('/about')
def about():
    return render_template("about.html")