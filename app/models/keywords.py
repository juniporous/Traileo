from .db import db
from .hike_keywords import hike_keywords


class Keyword(db.Model):
    __tablename__ = 'keywords'

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    
    hikes = db.relationship('Hike', back_populates='keywords', secondary=hike_keywords)    

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
    }

    