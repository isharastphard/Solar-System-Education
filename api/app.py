from flask import Flask, json, send_from_directory, request, jsonify
from flask.templating import render_template
from flask_restful import Api, Resource, reqparse
from bson.json_util import dumps
import json 
from bson import json_util
from flask_cors import CORS #comment this on deployment
from  pymongo import MongoClient

app = Flask(__name__)

CORS(app) #comment this on deployment
api = Api(app)

#Database connection
client = MongoClient("mongodb+srv://Ishara:Heater287@capstone.tbgw0.mongodb.net/Capstone?retryWrites=true&w=majority")
db = client["Capstone"]
planet_blurb = db["planet_descriptions"]
quiz_questions = db["quiz_questions"]
planet_stats = db["planet_info"]


#routes
@app.route("/Planets", methods = ['GET'])
def getplanetinfo():
    planets = planet_stats.find()
    response = []
    for doc in planets:
        doc['_id'] = str(doc['_id'])
        response.append(doc)
    return json.dumps(response)
  

@app.route("/Quiz", methods = ["GET"])
def getquizquestions():
    quizzes = quiz_questions.find()
    response = []
    for doc in quizzes:
        doc['_id'] = str(doc['_id'])
        response.append(doc)
    return json.dumps(response)


@app.route("/PlanetsDescriptions", methods = ["GET"])
def getplanet_descriptions():
    descriptions = planet_blurb.find()
    response = []
    for doc in descriptions:
        doc['_id'] = str(doc['_id'])
        response.append(doc)
    return json.dumps(response)


if __name__ == "__main__":
    app.run(debug=True)