from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError


class ReviewForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    hike_id = IntegerField('hike_id', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])