from flask import Blueprint, jsonify, session
from app.models import Park, db


park_routes = Blueprint('park', __name__)


@park_routes.route('/')
def all_parks():
    parks = Park.query.all()
    return {'parks': [park.to_dict() for park in parks]}