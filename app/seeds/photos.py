from app.models import db, Photo



def seed_photos():
    photo1 = Photo(user_id=1, hike_id=1, img_url='https://res.cloudinary.com/dfy0z2yzj/image/upload/v1639529104/Traileo/aloha1_lzoyej.png')
    photo2 = Photo(user_id=1, hike_id=1, img_url='https://res.cloudinary.com/dfy0z2yzj/image/upload/v1639529141/Traileo/aloha2_zrozkr.png')
    photo3 = Photo(user_id=1, hike_id=2, img_url='https://res.cloudinary.com/dfy0z2yzj/image/upload/v1639529160/Traileo/echo1_sgy0vj.png')
    photo4 = Photo(user_id=2, hike_id=2, img_url='https://res.cloudinary.com/dfy0z2yzj/image/upload/v1639529175/Traileo/aloha3_b95zud.png')

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()