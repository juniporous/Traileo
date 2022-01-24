from flask_wtf import FlaskForm
from wtforms import validators
from wtforms import FileField
from wtforms.validators import DataRequired, ValidationError


class UpdatePhotoForm(FlaskForm):
    img_url = FileField('img_url', validators=[DataRequired()])