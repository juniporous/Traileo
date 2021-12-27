from flask import Blueprint, jsonify
from app.config import Config

key_routes = Blueprint("key", __name__)

@key_routes.route('/')
def getKey():
    return {"key": Config.REACT_APP_MAPS_API}
