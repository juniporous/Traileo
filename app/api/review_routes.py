from flask import Blueprint, jsonify, session, request
from app.models import Review, db
from datetime import datetime
from app.forms import ReviewForm, UpdateReviewForm


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


@review_routes.route('/', methods=['POST'])
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data['user_id'],
            hike_id=form.data['hike_id'],
            description=form.data['description'],
            rating=form.data['rating'],
            trip_date=datetime.now()
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'message': 'unable to create review'}, 401


@review_routes.route('/<int:id>', methods=['PUT'])
def update_review(id):
    form = UpdateReviewForm()
    review = Review.query.get(id)
    if not review:
        return jsonify({'message': f'Review Id {id} Cannot Be Found'}), 404

    review.description = form.data['description']
    review.rating = form.data['rating']
    db.session.commit()
    return review.to_dict()