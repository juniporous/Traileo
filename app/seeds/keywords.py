from app.models import db, Keyword



def seed_keywords():
    word1 = Keyword(name='Scramble')
    word2 = Keyword(name='Hiking')
    word3 = Keyword(name='Views')
    word4 = Keyword(name='Waterfalls')
    word5 = Keyword(name='Rocky')
    word6 = Keyword(name='Steep')
    word7 = Keyword(name='River')
    word8 = Keyword(name='Snowshoeing')
    word9 = Keyword(name='Forest')
    word10 = Keyword(name='Swimming')
    word12 = Keyword(name='Stargazing')
    word13 = Keyword(name='Wildflowers')
    word14 = Keyword(name='Wildlife')
    word15 = Keyword(name='Horseback riding')
    word16 = Keyword(name='Difficult')
    word17 = Keyword(name='Biking')
    word18 = Keyword(name='Skiing')
    word19 = Keyword(name='Fishing')


    db.session.add(word1)
    db.session.add(word2)
    db.session.add(word3)
    db.session.add(word4)
    db.session.add(word5)
    db.session.add(word6)
    db.session.add(word7)
    db.session.add(word8)
    db.session.add(word9)
    db.session.add(word10)
    db.session.add(word12)
    db.session.add(word13)
    db.session.add(word14)
    db.session.add(word15)
    db.session.add(word16)
    db.session.add(word17)
    db.session.add(word18)
    db.session.add(word19)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_parks():
    db.session.execute('TRUNCATE keywords RESTART IDENTITY CASCADE;')
    db.session.commit()