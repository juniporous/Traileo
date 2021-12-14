from .db import db


class Hike(db.Model):
    __tablename__ = 'hikes'

    id= db.Column(db.Integer, primary_key=True)
    hike_name = db.Column(db.String(50), nullable=False)
    park_id = db.Column(db.Integer, db.ForeignKey('parks.id'), nullable=False)
    lat = db.Column(db.Float(precision=32, asdecimal=True, decimal_return_scale=None), nullable=False)
    long = db.Column(db.Float(precision=32, asdecimal=True, decimal_return_scale=None), nullable=False)
    description = db.Column(db.Text, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    eta = db.Column(db.Integer, nullable=False)
    difficulty = db.Column(db.String(15), nullable=False)

    parks = db.relationship('Park', back_populates='hikes')

    

    def to_dict(self):
        return {
            'id': self.id,
            'park_name': self.park_name,
            'lat': self.lat,
            'long': self.long,
            'description': self.description,
            'length': self.length,
            'eta': self.eta,
            'difficulty': self.difficulty
    }