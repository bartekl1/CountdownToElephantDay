from flask import Flask, render_template, send_file, Response, request
import mysql.connector
import json

with open("configs.json") as file:
    configs = json.load(file)

with open("version.json") as file:
    version = json.load(file)


app = Flask(__name__)


@app.route('/favicon.ico')
def favicon():
    return send_file('static/img/icons/elephant.ico')


@app.route('/manifest.json')
def manifest():
    return send_file('static/manifest.json')


@app.route('/manifest.en.json')
def manifest_en():
    return send_file('static/manifest.en.json')


@app.route('/sw.js')
def sw():
    return send_file('static/js/sw.js')


@app.route('/')
def index():
    return render_template('index.html', version=version)


@app.route('/visit_counter')
def get_visits():
    db = mysql.connector.connect(**configs['mysql'])

    cursor = db.cursor()

    cursor.execute("SELECT * FROM visits")

    result = cursor.fetchall()

    db.close()

    return str(result[0][0])


@app.route('/visit_counter', methods=["POST"])
def add_visit():
    db = mysql.connector.connect(**configs['mysql'])

    cursor = db.cursor()

    sql = "UPDATE visits SET visits = visits + 1"

    cursor.execute(sql)

    db.commit()

    db.close()

    return 'ok'


if __name__ == '__main__':
    app.run(**configs['flask'])
