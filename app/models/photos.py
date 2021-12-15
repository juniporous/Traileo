from .db import db


class Photo(db.Model):
    __tablename__ = 'photos'

    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hike_id = db.Column(db.Integer, db.ForeignKey('hikes.id'), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)

    users = db.relationship('User', back_populates='photos')

    hikes = db.relationship('Hike', back_populates='photos')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'hike_id': self.hike_id,
            'img_url': self.img_url,
    }