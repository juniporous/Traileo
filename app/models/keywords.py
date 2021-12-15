from .db import db


class Keyword(db.Model):
    __tablename__ = 'keywords'

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    
    

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
    }

    