#!/usr/bin/python
import flask
from flask import Flask

import uvicorn

app = Flask(__name__)

@app.route('/fancy')
def present_resume():
    return flask.send_file("Bobby_Dhanoolal_Resume.pdf")

@app.route('/')
def present_resume_ats():
    return flask.send_file("Bobby_Dhanoolal_Resume_ATS.pdf")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
