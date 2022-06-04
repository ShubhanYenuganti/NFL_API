from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')

# Init db
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Player Class/Model


class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), unique=True)
    team = db.Column(db.String(225))
    conf = db.Column(db.String(45))
    division = db.Column(db.String(45))
    jersey = db.Column(db.Integer)
    pos = db.Column(db.String(10))
    dob = db.Column(db.String(20))  # dd/mm/yyyy
    height = db.Column(db.String(10))  # [ft_val]ft[inches_val]

    def __init__(self, name, team, conf, division, jersey, pos, dob, height):
        self.name = name
        self.team = team
        self.conf = conf
        self.division = division
        self.jersey = jersey
        self.pos = pos
        self.dob = dob
        self.height = height

# Player Schema


class PlayerSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'team', 'conf', 'division',
                  'jersey', 'pos', 'dob', 'height')


# Init Schema
player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)

# Get Player (Works)


@app.route('/player/<id>', methods=['GET'])
def get_player(id):
    player = Player.query.get(id)

    return player_schema.jsonify(player)

# Fetch All Players (Works)


@app.route('/player', methods=['GET'])
def get_players():
    all_players = Player.query.all()
    result = players_schema.dump(all_players)

    return jsonify(result)


# Create A Player (Works)
@app.route('/player', methods=['POST'])
def add_player():
    name = request.json['name']
    team = request.json['team']
    conf = request.json['conf']
    division = request.json['division']
    jersey = request.json['jersey']
    pos = request.json['pos']
    dob = request.json['dob']
    height = request.json['height']

    new_player = Player(name, team, conf, division,
                        jersey, pos, dob, height)

    db.session.add(new_player)

    db.session.commit()

    return player_schema.jsonify(new_player)

# Update Player (Works)


@app.route('/player/<id>', methods=['PUT'])
def update_player(id):
    player = Player.query.get(id)

    name = request.json['name']
    team = request.json['team']
    conf = request.json['conf']
    division = request.json['division']
    jersey = request.json['jersey']
    pos = request.json['pos']
    dob = request.json['dob']
    height = request.json['height']

    player.name = name
    player.team = team
    player.conf = conf
    player.division = division
    player.jersey = jersey
    player.pos = pos
    player.dob = dob
    player.height = height

    db.session.commit()

    return player_schema.jsonify(player)

# Delete Player (Works)


@app.route('/player/<id>', methods=['DELETE'])
def delete_player(id):
    player = Player.query.get(id)

    db.session.delete(player)
    db.session.commit()

    return player_schema.jsonify(player)


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
