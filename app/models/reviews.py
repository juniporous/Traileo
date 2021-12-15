from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hike_id = db.Column(db.Integer, db.ForeignKey('hikes.id'), nullable=False)
    description = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    trip_date = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    hike = db.relationship('Hike', back_populates='reviews')



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'hike_id': self.hike_id,
            'description': self.description,
            'rating': self.rating,
            'trip_date': self.trip_date
    }