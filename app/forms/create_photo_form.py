from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FileField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError


class CreatePhotoForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    hike_id = IntegerField('hike_id', validators=[DataRequired()])
    img_url = FileField('img_url', validators=[DataRequired()])