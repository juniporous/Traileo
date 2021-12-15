from flask import Blueprint, jsonify, session
from app.models import Hike, db


hike_routes = Blueprint('hike', __name__)


@hike_routes.route('/')
def all_hikes():
    hikes = Hike.query.all()
    return {'hikes': [hike.to_dict() for hike in hikes]}

@hike_routes.route('/<int:id>')
def get_hike(id):
    hike = Hike.query.get(id)
    if not hike:
        return jsonify({'message': f'Hike Id {id} Cannot Be Found'}), 404
    return hike.to_dict()