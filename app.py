from flask import Flask, render_template, send_file, Response, request
import mysql.connector
import json
import datetime
import pytz

db_data = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "iledodniaslonia"
}

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
    return render_template('index.html')


@app.route('/visit_counter')
def get_visits():
    db = mysql.connector.connect(**db_data)

    cursor = db.cursor()

    cursor.execute("SELECT * FROM visits")

    result = cursor.fetchall()

    db.close()

    return str(result[0][0])


@app.route('/visit_counter', methods=["POST"])
def add_visit():
    db = mysql.connector.connect(**db_data)

    cursor = db.cursor()

    sql = "UPDATE visits SET visits = visits + 1"

    cursor.execute(sql)

    db.commit()

    db.close()

    return 'ok'


@app.route('/api/get_left_time')
def get_left_time():
    left = None
    left_sumary = None
    elephant_day = datetime.datetime.now()

    try:
        timezone_name = request.args.get('tz')
        if timezone_name:
            tz = pytz.timezone(timezone_name)
        else:
            tz = pytz.timezone('UTC')

        now = datetime.datetime.now(tz=tz)

        if now.month == 8 and now.day == 12:
            left = {'days': 0,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0}
            left_sumary = left
        else:
            if now.month < 8 or (now.month == 8 and now.day < 12):
                elephant_day = datetime.datetime(
                    year=now.year, month=8, day=12)
            else:
                elephant_day = datetime.datetime(
                    year=now.year+1, month=8, day=12)
            elephant_day = tz.localize(elephant_day)

            left_timedelta = elephant_day - now

            left = {'days': left_timedelta.days,
                    'hours': left_timedelta.seconds // 3600,
                    'minutes': left_timedelta.seconds % 3600 // 60,
                    'seconds': left_timedelta.seconds % 60 % 60}
            seconds = left_timedelta.seconds + left_timedelta.days * 86400
            left_sumary = {'days': seconds / 86400,
                           'hours': seconds / 3600,
                           'minutes': seconds / 60,
                           'seconds': seconds}

        offset = datetime.datetime.now(tz).utcoffset().seconds
    except pytz.exceptions.UnknownTimeZoneError:
        response_dict = {
            'status': 'error',
            'error': 'Bad timezone name.'
        }

        response = Response(response=json.dumps(response_dict),
                            status=400,
                            mimetype='application/json')
    else:
        response_dict = {
            'status': 'success',
            'timezone': {
                'name': str(tz),
                'seconds_offset': offset,
                'hours_offset': offset / 3600
            },
            'today': now.isoformat(),
            'elephant_day': elephant_day.date().isoformat(),
            'left': left,
            'left_sumary': left_sumary
        }

        response = Response(response=json.dumps(response_dict),
                            status=200,
                            mimetype='application/json')

    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
