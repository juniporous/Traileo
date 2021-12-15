from app.models import db, Review
from datetime import date, datetime



def seed_reviews():
    review1 = Review(user_id=1, hike_id=1, description='Beautiful hike. No one is on it this late in the year.', rating=5, trip_date=datetime.now())
    review2 = Review(user_id=2, hike_id=1, description='I lost the trail a couple of times because there were not enough signs. It was beautiful but I spent a lot of time trying to get myself oriented.', rating=4, trip_date=datetime.now())
    review3 = Review(user_id=3, hike_id=1, description='I went there for an overnight trip and the parking lot was confusing. I could not tell if I needed a parking permit, was going to get towed, etc. I loved the trip but I spent the sunset wondering if my car would be there when I returned.', rating=4, trip_date=datetime.now())
    review4 = Review(user_id=1, hike_id=2, description='This place took a lot of off-trail travel to get to and was tough to find, but worth the confusion. There were waterfalls and wildflowers all over the place.', rating=5, trip_date=datetime.now())

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()