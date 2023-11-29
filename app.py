#!/usr/bin/python

from flask import Flask

import uvicorn

app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    return flask.send_file("Bobby_Dhanoolal_Resume.pdf")

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8080)