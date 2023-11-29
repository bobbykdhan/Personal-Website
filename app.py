#!/usr/bin/python
import flask
from flask import Flask

import uvicorn

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return flask.send_file("Bobby_Dhanoolal_Resume.pdf")

@app.route('/test')
def hello_world2():  # put application's code here
    return "Thanks!", 200

if __name__ == '__main__':
    # uvicorn.run(app, host="0.0.0.0", port=8080)
    app.run()