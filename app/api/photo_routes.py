from flask import Blueprint, jsonify, session, request
from app.models import Photo, db
from app.forms import CreatePhotoForm, UpdatePhotoForm
from app.aws import upload_file_to_s3, get_unique_filename, allowed_file


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



@photo_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    photo = Photo.query.get(id)
    db.session.delete(photo)
    db.session.commit()
    return jsonify({'message': f'Review {id} has been deleted'}), 200


@photo_routes.route('/', methods=['POST'])
def create_review():
    form = CreatePhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # insert here
    if "img_url" not in form.data:
        return {"errors": "image required"}, 400

    image = form.data["img_url"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]


    if form.validate_on_submit():
        photo = Photo(
            hike_id=form.data['hike_id'],
            user_id=form.data['user_id'],
            img_url=url,
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