from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError


class UpdateReviewForm(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])