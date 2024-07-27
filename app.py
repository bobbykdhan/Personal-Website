#!/usr/bin/python
import flask
from flask import Flask

import uvicorn

app = Flask(__name__)

@app.route('/')
def present_resume():  # put application's code here
    return flask.send_file("Bobby_Dhanoolal_Resume.pdf")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
