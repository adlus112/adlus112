from flask import Flask, render_template, redirect, send_file
app = Flask(__name__,template_folder='templates',static_folder='static')


#old pages
@app.route('/' or 'index.html')
def index():
    return render_template('index.html')
@app.route('/club_index1.html',methods=['GET','POST'])
def index1_page():
    return render_template('club_index1.html')

@app.route('/club_index2.html',methods=['GET','POST'])
def index2_page():
    return render_template('club_index2.html')

