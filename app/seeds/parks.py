from app.models import db, Park



def seed_parks():
    tahoe = Park(park_name='Desolation Wilderness', lat=38.934614, long=-120.134402, description='Welcome to Desolation Wilderness, 63,960 acres of subalpine and alpine forest, granitic peaks, and glacially-formed valleys and lakes. It is located west of Lake Tahoe and north of Highway 50 in El Dorado County.', country='United States', state='CA')


    db.session.add(tahoe)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_parks():
    db.session.execute('TRUNCATE parks RESTART IDENTITY CASCADE;')
    db.session.commit()
