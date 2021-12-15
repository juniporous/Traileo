from flask import Blueprint, jsonify, session, request
from app.models import Photo, db
from app.forms import CreatePhotoForm, UpdatePhotoForm


photo_routes = Blueprint('photo', __name__)


@photo_routes.route('/')
def all_photo():
    photos = Photo.query.all()
    return {'photos': [photo.to_dict() for photo in photos]}


@photo_routes.route('/<int:id>')
def get_photo(id):
    photo = Photo.query.get(id)
    if not photo:
        return jsonify({'message': f'Photo Id {id} Cannot Be Found'}), 404
    return photo.to_dict()



# @review_routes.route('/<int:id>', methods=['DELETE'])
# def delete_review(id):
#     review = Review.query.get(id)
#     db.session.delete(review)
#     db.session.commit()
#     return jsonify({'message': f'Review {id} has been deleted'}), 200


@photo_routes.route('/', methods=['POST'])
def create_review():
    form = CreatePhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        photo = Photo(
            hike_id=form.data['hike_id'],
            user_id=form.data['user_id'],
            img_url=form.data['img_url'],
        )
        db.session.add(photo)
        db.session.commit()
        return photo.to_dict()
    return {'message': 'unable to create photo'}, 401


@photo_routes.route('/<int:id>', methods=['PUT'])
def update_photo(id):
    form = UpdatePhotoForm()
    photo = Photo.query.get(id)
    if not photo:
        return jsonify({'message': f'Photo Id {id} Cannot Be Found'}), 404

    photo.img_url = form.data['img_url']
    db.session.commit()
    return photo.to_dict()