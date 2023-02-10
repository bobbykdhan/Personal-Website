import flask
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return flask.send_file("Bobby_Dhanoolal_Resume.pdf")


if __name__ == '__main__':
    app.run()
