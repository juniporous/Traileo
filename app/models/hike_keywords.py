from .db import db

hike_keywords = db.Table(
    'hike_keywords',
    db.Column('hike_id', db.Integer, db.ForeignKey('hikes.id'), primary_key=True),
    db.Column('keyword_id', db.Integer, db.ForeignKey('keywords.id'), primary_key=True)
)