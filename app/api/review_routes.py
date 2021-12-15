from flask import Blueprint, jsonify, session
from app.models import Review, db


review_routes = Blueprint('review', __name__)


@review_routes.route('/')
def all_review():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/<int:id>')
def get_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({'message': f'Review Id {id} Cannot Be Found'}), 404
    return review.to_dict()



@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return jsonify({'message': f'Review {id} has been deleted'}), 200