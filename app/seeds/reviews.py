from app.models import db, Review
from datetime import datetime



def seed_reviews():
    review1 = Review(user_id=1, hike_id=1, description='Beautiful hike. No one is on it this late in the year.', rating=5, trip_date=datetime.now())
    review2 = Review(user_id=2, hike_id=1, description='I lost the trail a couple of times because there were not enough signs. It was beautiful but I spent a lot of time trying to get myself oriented.', rating=4, trip_date=datetime.now())
    review3 = Review(user_id=3, hike_id=1, description='I went there for an overnight trip and the parking lot was confusing. I could not tell if I needed a parking permit, was going to get towed, etc. I loved the trip but I spent the sunset wondering if my car would be there when I returned.', rating=4, trip_date=datetime.now())
    review4 = Review(user_id=1, hike_id=2, description='This place took a lot of off-trail travel to get to and was tough to find, but worth the confusion. There were waterfalls and wildflowers all over the place.', rating=5, trip_date=datetime.now())
    review5 = Review(user_id=3, hike_id=3, description='Definitely bring a gps if there is any snow. Trail markers will be covered', rating=5, trip_date=datetime.now())
    review6 = Review(user_id=3, hike_id=3, description='Brought my dog and had a great time. No one else was out there.', rating=5, trip_date=datetime.now())
    review7 = Review(user_id=3, hike_id=3, description='Pretty cool trail, I would do it again.', rating=4, trip_date=datetime.now())
    review8 = Review(user_id=3, hike_id=4, description='This hike was harder than how it is classified.', rating=3, trip_date=datetime.now())
    review9 = Review(user_id=3, hike_id=4, description='Wow, what a view at the end.', rating=5, trip_date=datetime.now())
    review10 = Review(user_id=3, hike_id=4, description='Great trail. Awesome.', rating=5, trip_date=datetime.now())
    review11 = Review(user_id=3, hike_id=4, description='The trip takes longer than it says on the site.', rating=2, trip_date=datetime.now())
    review12 = Review(user_id=3, hike_id=5, description='Went on a Saturday, way too many people.', rating=2, trip_date=datetime.now())
    review13 = Review(user_id=3, hike_id=5, description='What a hike, we had a great tiem.', rating=4, trip_date=datetime.now())
    review14 = Review(user_id=3, hike_id=6, description='Cool hike, definitely bring poles.', rating=5, trip_date=datetime.now())
    review15 = Review(user_id=3, hike_id=6, description='Lot of fun, would do again.', rating=5, trip_date=datetime.now())
    review16 = Review(user_id=3, hike_id=6, description='This trail was too hard.', rating=3, trip_date=datetime.now())
    review18 = Review(user_id=3, hike_id=6, description='This trail was kind of crowded, I ended up doing some off trail hiking.', rating=4, trip_date=datetime.now())
    review19 = Review(user_id=3, hike_id=7, description='The trail is really well maintained and the markers are extremely clear.', rating=5, trip_date=datetime.now())
    review20 = Review(user_id=3, hike_id=7, description='I did this hike in Novemeber, maybe too late in the year if you do not have snow shoes.', rating=5, trip_date=datetime.now())
    review21 = Review(user_id=3, hike_id=8, description='The weather turned quickly and I spent hours freezing. This was in June. Bring a shell no matter what.', rating=1, trip_date=datetime.now())
    review22 = Review(user_id=3, hike_id=8, description='I love this trail, I hike it almost weekly.', rating=5, trip_date=datetime.now())
    review23 = Review(user_id=3, hike_id=8, description='Great trail, had a lot of fun.', rating=4, trip_date=datetime.now())
    review24 = Review(user_id=3, hike_id=8, description='Did an overnight with a few friends. It was freezing at night. I would have brought extra socks.', rating=5, trip_date=datetime.now())
    review25 = Review(user_id=3, hike_id=8, description='One of the more boring trails in Desolation, imo. Some people bring vehicles to the lake. Ugh.', rating=3, trip_date=datetime.now())
    review26 = Review(user_id=3, hike_id=9, description='What a great trip.', rating=4, trip_date=datetime.now())
    review27 = Review(user_id=3, hike_id=9, description='Great trail but the rangers need to clarify the parking rules, so confusing.', rating=4, trip_date=datetime.now())
    review28 = Review(user_id=3, hike_id=9, description='Did a sunrise hike, would recommend.', rating=5, trip_date=datetime.now())
    review29 = Review(user_id=3, hike_id=9, description='The inclines are pretty aggressive close to the summit and lots of loose rocks. Bring poles.', rating=4, trip_date=datetime.now())
    review30 = Review(user_id=3, hike_id=10, description='Easier than I thought it would be.', rating=5, trip_date=datetime.now())
    review31 = Review(user_id=3, hike_id=10, description='Relaxing hike, there were a lot of birds at the lake.', rating=5, trip_date=datetime.now())
    review32 = Review(user_id=3, hike_id=10, description='Great views at teh end', rating=4, trip_date=datetime.now())
    review33 = Review(user_id=3, hike_id=10, description='There were too many people, go somewhere more off the map.', rating=3, trip_date=datetime.now())
    review34 = Review(user_id=3, hike_id=10, description='I went in the winter, snowshoe in and bring a gps.', rating=5, trip_date=datetime.now())
    review35 = Review(user_id=3, hike_id=10, description='What a beautiful lake. Just gorgeous.', rating=5, trip_date=datetime.now())



    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()