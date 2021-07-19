from planet_info_function import *

url = "https://api.le-systeme-solaire.net/rest.php/bodies/"
response = requests.get(url)



quiz_dict = [{"id" : "Sun Questions", "Question 1" : "What type of star is the Sun?", "Wrong Answer1" : "Red Giant", "Wrong Answer2" : "Red Dwarf", "Wrong Answer3" : "White Dwarfs", 
            "Right Answer" :"Yelllow Dwarf"},
            {"id" : "Sun Questions", "Question 2" :"How old is our Sun (in billions of years)?", "Right Answer" : "4.5", "Wrong Answer1" : "6", "Wrong Answer2" : "2", 
            "Wrong Answer3" :"3"},
            {"id" : "Sun Questions", "Question 3" : "Helium is what percent of the makeup of the Sun?", "Wrong Answer1" : "92.2", "Right Answer" : "7.8", 
            "Wrong Answer2" : "13.5", "Wrong Answer3" :"86.5"},
            {"id" : "Sun Questions", "Question 4" : "What percent of our Solar System's mass does the Sun make up?", "Wrong Answer1" : "48.7", 
            "Wrong Answer2" : "88", "Right Answer" : "99.8", "Wrong Answer3" :"50"},
            {"id" : "Sun Questions", "Question 5 " : "How hot is the Sun's core (in millions of degrees)?", "Wrong Answer1" : "100", "Wrong Answer2" : "12", "Wrong Answer3" : "44", 
            "Right Answer" :"27"},
            {"id" : "Mercury_Questions", "Question 1" : "How many Earth days is one Mercury day?", "Wrong Answer1" : "3", "Wrong Answer2" : "Half", "Wrong Answer3" : "12",
            "Right Answer" : "59"},
            {"id" : "Mercury_Questions", "Question 2" : "THow long does it take light to reach Mercury's surface (in minutes)?", "Right Answer" : "2.7", "Wrong Answer2" : "1.5", 
            "Wrong Answer3" : "5", "Wrong Answer3" : "8"},
            {"id" : "Mercury_Questions", "Question 3" : "What's Mercury's highest recorded temperature (in Fahrenheit)?", "Wrong Answer1" : "2000", "Wrong Answer2" : "1200", "Right Answer" : "800",
            "Wrong Answer3" : "1550"},
            {"id" : "Mercury_Questions", "Question 4" : "What's Mercury's lowest recorded temperature (in Fahrenheit)?", "Wrong Answer1" : "-40", "Right Answer" : "-290",
             "Wrong Answer2" : "32",  "Wrong Answer3" : "-400"},
            {"id" : "Mercury_Questions", "Question 5" : "How many moons does Mercury have?", "Wrong Answer1" : "1", "Wrong Answer2" : "2", "Wrong Answer3" : "3",
            "Right Answer" : "0"},
            {"id" : "Venus Questions", "Question 1" : "Surface temperature on Venus (in Fahrenheit)?", "Right Answer" : "900", "Wrong Answer1" : "80", "Wrong Answer2" : "850",
            "Wrong Answer3" : "400"},
            {"id" : "Venus Questions", "Question 2" : "Venus is commonly referred to as which inner planet's twin?", "Wrong Answer1" : "Mercury", "Right Answer" : "Earth",
             "Wrong Answer2" : "Jupiter", "Wrong Answer3" : "Mars"},
            {"id" : "Venus Questions", "Question 3" : "How long is a Venus day, in Earth days?", "Wrong Answer1" : "300", "Wrong Answer2" : "90", "Right Answer" : "243",
            "Wrong Answer3" : "265"},
            {"id" : "Venus Questions", "Question 4" : "How long is a Venus year, in Earth days?", "Right Answer" : "225", "Wrong Answer1" : "365", "Wrong Answer2" : "448",
            "Wrong Answer3" : "400"},
            {"id" : "Venus Questions", "Question 5" : "What do Venus' clouds smell like?", "Wrong Answer1" : "Cheese", "Wrong Answer1" : "Rainbows and Sunshine", 
            "Wrong Answer3" : "Iron", "Right Answer" : "Rotten Eggs"},
            { "id" : "Earth Questions", "Question 1" : "What is Earth's acceleration due to gravity?", "Wrong Answer1" : "0.0", "Right Answer" : "9.8", "Wrong Answer2" : "5.44", 
            "Wrong Answer3" :"16.4"},
            {"id" : "Earth Questions", "Question 2" :"Earth is how many planets from the Sun?", "Right Answer" :"Earth is 3rd", "Wrong Answer1" : "Earth is 1st", "Wrong Answer2" : "Earth is 5th", 
            "Wrong Answer3" :"Earth is 4th"},
            {"id" : "Earth Questions", "Question 3" : "How many moons does Earth have?", "Wrong Answer1" :"6", "Wrong Answer2" : "4", "Right Answer" : "1", "Wrong Answer3" :"12"},
            {"id" : "Earth Questions", "Question 4" : "How long is a day on Earth?", "Right Answer" :"24 hours", "Wrong Answer1" : "23 hours", "Wrong Answer2" : "15 hours", 
            "Wrong Answer3" :"33 hours"},
            {"id" : "Earth Questions","Question 4" : "How long is a revolution on Earth?", "Wrong Answer1" : "455 days", "Wrong Answer2" : "360 days", "Wrong Answer3" : "228 days", 
            "Right Answer" : "365 days"},
            {"id" : "Earth Questions","Question 5" : "What percent of Earth's atmosphere is Nitrogen?", "Right Answer" : "78 Percent", "Wrong Answer1" : "21 Percent", "Wrong Answer2" : "1 Percent",
            "Wrong Answer3" : "44 Percent"},
            {"id" : "Earth Questions", "Question 6" : "Approximately how long does it take light to reach Earth?", "Right Answer" : "8.5 Minutes", "Wrong Answer1" : "15 Minutes",
            "Wrong Answer2" : "2 Minutes", "Wrong Answer 3" : "12 Minutes"},
            {"id" : "Earth Questions", "Question 7" : "What is Earth's distance from the sun (in million miles)?", "Wrong Answer1" : "22", "Wrong Answer2" : "400", "Wrong Answer3" : "57", 
            "Right Answer" : "94" },
            {"id" : "Mars Questions", "Question 1" :"How many moons does Mars have?", "Wrong Answer1" : "1", "Wrong Answer2" : "3", "Wrong Answer3" : "4", 
            "Right Answer" : "2" },
            {"id" : "Mars Questions", "Question 2" :"What is Mars' nickname?", "Right Answer" : "Red Planet", "Wrong Answer1" : "Rusty Planet", "Wrong Answer2" : "Rocky Planet", 
            "Wrong Answer3" : "Rose Planet" },
            {"id" : "Mars Questions", "Question 3" :"Mars is named after which Roman god?", "Wrong Answer1" : "Hephaestus", "Right Answer" : "Ares", "Wrong Answer3" : "Poseidon", 
            "Wrong Answer3" : "Dionysus" },
            {"id" : "Mars Questions", "Question 4" :"Mars is home to the largest volcano in the Solar System. What is it's name?", "Wrong Answer1" : "Tharsis Rise", "Wrong Answer2" : "Enceladus", 
            "Right Answer" : "Olympus Mons", "Wrong Answer3" : "Krakatoa" },
            {"id" : "Mars Questions", "Question 5" :"What is a day on Mars called?", "Wrong Answer1" : "Day", "Right Answer" : "Sol", "Wrong Answer2" : "Solari", 
            "Wrong Answer3" : "Daysus" },
            {"id" : "Jupiter Questions", "Question 1" : "How many miles away from the sun is the Gas Giant(in million miles)?", "Wrong Answer1" : "1000", "Right Answer" : "468", "Wrong Answer2" : "300", 
            "Wrong Answer3" : "94" },
            {"id" : "Jupiter Questions", "Question 2" : "How many moons does Jupiter have?", "Right Answer" : "75+", "Wrong Answer1" : "0", "Wrong Answer2" : "1-44", 
            "Wrong Answer3" : "45-75" },
            {"id" : "Jupiter Questions", "Question 3" : "Jupiter is how many planets from the Sun?", "Wrong Answer1" : "6", "Right Answer" : "5", "Wrong Answer2" : "8", 
            "Wrong Answer3" : "2" },
            {"id" : "Jupiter Questions", "Question 4" : "How many spacecraft have traveled to Jupiter?", "Wrong Answer1" : "4", "Wrong  Answer2" : "7", "Wrong Answer3" : "3", 
            "Right Answer" : "9" },
            {"id" : "Jupiter Questions", "Question 5" : "Jupiter is how many times more massive than all the other planets combined?", "Wrong Answer1" : "5", "Wrong Answer2" : "20", "Right Answer" : "2", 
            "Wrong Answer3" : "7.5" },
            {"id" : "Saturn Questions", "Question 1" : "How many rings does Saturn have?", "Wrong Answer1" : "12", "Wrong Answer2" : "4", "Right Answer" : "7",
            "Wrong Answer3" : "9"},
            {"id" : "Saturn Questions", "Question 2" : "How many times did the Cassini spacecraft orbit Saturn, before getting vaporized?", "Wrong Answer1" : "133", "Wrong Answer2" : "2", 
            "Wrong Answer3" : "47", "Right Answer" : "294"},
            {"id" : "Saturn Questions", "Question 3" : "How many moons does Saturn have?", "Wrong Answer1" : "0-23", "Wrong Answer2" : "24-52", "Right Answer" : "53-82",
            "Wrong Answer3" : "83+"},
            {"id" : "Saturn Questions", "Question 4" : "How many long is a day on Saturn(in hours)?", "Right Answer" : "10.7", "Wrong Answer2" : "188",
             "Wrong Answer" : "47", "Wrong Answer3" : "24"},
            {"id" : "Saturn Questions", "Question 5" : "Winds in Saturn's upper atmosphere reach which speed(in meters per second)?", "Wrong Answer1" : "880", 
            "Wrong Answer2" : "275", "Right Answer" : "500", "Wrong Answer3" : "1600"},
            {"id" : "Uranus Questions","Question 1" : "WHat is Uranus' nickname?", "Right Answer" : "Sideways Planet", "Wrong Answer1" : "The Blue Planet", "Wrong Answer2" : "Hell's Planet",
            "Wrong Answer3" : "Bode's Planet"},
            {"id" : "Uranus Questions","Question 2" : "WHat type of planet is Uranus?", "Wrong Answer1" : "Terrestrial", "Wrong Answer2" : "Gas Giant", 
            "Wrong Answer2" : "Oceanic", "Right Answer" : "Ice Giant"},
            {"id" : "Uranus Questions","Question 3" : "How many rings does Uranus have?", "Wrong Answer1" : "11", "Right Answer" : "13",
             "Wrong Answer2" : "5", "Wrong Answer3" : "7"},
            {"id" : "Uranus Questions","Question 4" : "How many years of nighttime does Uranus experience in the winter?", "Right Answer" : "21", "Wrong Answer1" : "10", "Wrong Answer2" : "42",
            "Wrong Answer3" : "15"},
            {"id" : "Uranus Questions","Question 5" : "Which Greek God is Uranus named after?", "Wrong Answer1" : "Humanus", "Right Answer:" : "Uranus",
             "Wrong Answer2" : "Demeter", "Wrong Answer3" : "Hestia"},
            {"id" : "Neptune Questions","Question 1" : "How long is Neptune's revolution period?", "Right Answer" : "165 years", "Wrong Answer1" : "230 years", "Wrong Answer2" : "100 years",
            "Wrong Answer3" : "144 years"},
            {"id" : "Neptune Questions","Question 2" : "How fast are the winds on Neptune(in mph)?", "Wrong Answer1" : "400", "Wrong Answer2" : "3500", "Right Answer" : "1200",
            "Wrong Answer3" : "2000"},
            {"id" : "Neptune Questions","Question 3" : "How many rings does Neptune have?", "Wrong Answer1" : "2", "Right Answer" : "6", "Wrong Answer2" : "13",
            "Wrong Answer3" : "9"},
            {"id" : "Neptune Questions","Question 4" : "What year did Neptune complete it's first revolution, after being discovered?", "Wrong Answer1" : "2000", 
            "Wrong Answer2" : "2005", "Wrong Answer3" : "2021", "Right Answer" : "2011"},
            {"id" : "Neptune Questions","Question 5" : "Which of Neptune's moons orbits in the opposite direction?", "Right Answer" : "Triton", 
            "Wrong Answer1" : "Laomedela", "Wrong Answer2" : "Despina", "Wrong Answer3" : "Galatea"},
            {"id" : "General Questions", "Question 1" : "How many planets are in our Solar System?", "Wrong Answer1" : "9", "Right Answer" : "8", "Wrong Answer2" : "10", 
            "Wrong Answer3" : "7"},
            {"id" : "General Questions", "Question 2" : "How many planets in our Solar System have rings?", "Wrong Answer1" : "2", "Wrong Answer2" : "8", "Wrong Answer3" : "5", 
            "Right Answer" : "4"},
            {"id" : "General Questions", "Question 3" : "What is the name of the spacecraft that has left our Solar System?", "Right Answer" : "Voyager1", 
            "Wrong Answer1" : "Glory", "Wrong Answer2" : "Kepler", "Wrong Answer3" : "Perseverance"},
            {"id" : "General Questions", "Question 4" : "The Milky Way is what kind of galaxy?", "Wrong Answer1" : "Elliptical", "Wrong Answer2" : "Irregular", "Right Answer" : "Spiral", 
            "Wrong Answer3" : "Semi-Circle"},
            {"id" : "General Questions", "Question 5" : "How fast is the Milky Way Galaxy flying through space (in miles)?", "Right Answer" : "515,000", "Wrong Answer1" : "800,000", 
            "Wrong Answer2" : "434,000", "Wrong Answer3" : "227,000"},
            {"id" : "General Questions", "Question 6" : "Hottest planet in the Solar System?", "Right Answer" : "Venus", "Wrong Answer1" : "Mercury", 
            "Wrong Answer2" : "Jupiter", "Wrong Answer3" : "Saturn"},
            {"id" : "General Questions", "Question 7" : "Which was the first planet discovered by telescope?", "Wrong Answer1" : "Saturn", "Wrong Answer2" : "Mars",
            "Right Answer" : "Uranus", "Wrong Answer3" : "Neptune"},]

Earth_Questions = []
Quiz_Questions = []

def get_quiz_questions():
    quiz_info = quiz_dict
    for quiz_access in quiz_info:
        Quiz_Questions.append(quiz_access)

get_quiz_questions()
#rint(Quiz_Questions)
with open("Quiz_Questions.json", "w") as outfile:
   json.dump(Quiz_Questions, outfile)