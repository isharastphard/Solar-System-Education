from datetime import datetime 
from flask import Flask, request, render_template
from HelloFlask import app

@app.route('/')
@app.route('/home')
def home():
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")

    return render_template(
        "index.html",
        title = "Solar System Education",
        message = "We Love Space!",
        content = " on " + formatted_now)

@app.route('/api/data')
def get_data():
  return app.send_static_file('data.json')

@app.route('/about')
def about():
    return render_template(
        "about.html",
        title = "About The Team",
        content = "The best Capstone Group in Existence. Jethro, Wilfredo, Boubacar, and Ishara.")