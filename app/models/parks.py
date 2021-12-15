from .db import db


class Park(db.Model):
    __tablename__ = 'parks'

    id= db.Column(db.Integer, primary_key=True)
    park_name = db.Column(db.String(50), nullable=False)
    lat = db.Column(db.Float(precision=32, asdecimal=True, decimal_return_scale=None), nullable=False)
    long = db.Column(db.Float(precision=32, asdecimal=True, decimal_return_scale=None), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    

    def to_dict(self):
        return {
            'id': self.id,
            'park_name': self.park_name,
            'lat': self.lat,
            'long': self.long,
            'description': self.description,
            'country': self.country,
            'state': self.state
    }

    hikes = db.relationship('Hike', back_populates='parks', cascade='all, delete-orphan')
