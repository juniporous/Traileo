from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, ValidationError


class UpdatePhotoForm(FlaskForm):
    img_url = StringField('description', validators=[DataRequired()])