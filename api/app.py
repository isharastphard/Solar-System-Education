from flask import Flask, json, send_from_directory, request, jsonify
from flask.templating import render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from  pymongo import MongoClient

app = Flask(__name__, static_url_path='', static_folder='Solar-System-Education\client\build')
CORS(app) #comment this on deployment
api = Api(app)

#Database
client = MongoClient("mongodb+srv://Ishara:Heater287@capstone.tbgw0.mongodb.net/Capstone?retryWrites=true&w=majority")
db = client.Capstone
planet_blurb = db.planet_descriptions
quiz_questions = db.quizzes
planet_stats = db.planets_info

#routes
@app.route("/Planets", methods = ['GET'])
def getplanetinfo():
    planets = (planet_stats.find())
    return jsonify(planets)

@app.route("/Quiz", methods = ["GET"])
def getquizquestions():
    quizzes = (quiz_questions.find())
    return jsonify(quizzes)

@app.route("/Planets/Descriptions", methods = ["GET"])
def getplanet_descriptions():
    descriptions = (planet_blurb.find())
    return jsonify(descriptions)



@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

