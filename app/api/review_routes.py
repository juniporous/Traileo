from flask import Blueprint, jsonify, session
from app.models import Review, db


review_routes = Blueprint('review', __name__)


@review_routes.route('/')
def all_review():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}