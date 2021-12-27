from flask import Blueprint, jsonify
from app.config import Config

map_routes = Blueprint("maps", __name__)

@map_routes.route('/')
def getKey():
    return {"key":Config.REACT_APP_MAPS_API}