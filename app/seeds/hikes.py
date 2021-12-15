from app.models import db, Hike



def seed_hikes():
    aloha = Hike(hike_name='Lake Aloha', park_id=1, lat=38.868754, long=-120.139981, description='Lake Aloha Trail is a 12 mile heavily trafficked out and back trail located near Echo Lake, California that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, camping, fishing, horses, and backpacking and is best used from June until October. Dogs are also able to use this trail but must be kept on leash.', length=12, eta=3, difficulty='Moderate')
    waterfall = Hike(hike_name='Waterfall Camp', park_id=1, lat=38.866150, long=-120.160167, description='Backpack to this secluded destination that is hidden from most of the traffic in Desolation Wilderness. At waterfall camp, you will have the opportunity to explore over 50 waterfalls. If you choose not to take the water taxi, add 5 miles to the overall trip. Although this hike can be done as a day hike, it is an awesome place to camp. There is a lot to explore and you will want to spend as much there time as you can. The easiest way to start this hike is to start at the Echo Lakes.', length=6, eta=6, difficulty='Hard')
    tallac = Hike(hike_name='Mount Tallac', park_id=1, lat=38.905065, long=-120.098954, description='Mount Tallac Trail is a 10 mile heavily trafficked out and back trail located near South Lake Tahoe, California that features a lake and is rated as difficult. The trail is primarily used for hiking and snowshoeing and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.', length=10, eta=5, difficulty='Hard')
    fontanillis = Hike(hike_name='Lake Fontanillis', park_id=1, lat=38.921093, long=-120.153199, description='Eagles Lake to Fontanillis Lake Loop is a 10 mile moderately trafficked out and back trail located near South Lake Tahoe, California that features a lake and is rated as difficult. The trail offers a number of activity options. Dogs are also able to use this trail.', length=10, eta=6, difficulty='Hard')
    clyde = Hike(hike_name='Clyde Lake', park_id=1, lat=38.875498, long=-120.168092, description='Clyde Lake is a 14 mile lightly trafficked out and back trail located near South Lake Tahoe, California that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from June until September.', length=14, eta=8, difficulty='Moderate')
    pyramid = Hike(hike_name='Pyramid Peak', park_id=1, lat=38.848649, long=-120.156875, description='Pyramid Peak Trail is a 8 mile heavily trafficked out and back trail located near Twin Bridges, California that features a river and is only recommended for very experienced adventurers. The trail is primarily used for hiking and snowshoeing and is best used from June until October. Dogs are also able to use this trail but must be kept on leash.', length=8, eta=10, difficulty='Hard')
    echo = Hike(hike_name='Echo Lake', park_id=1, lat=38.844929, long=-120.066314, description='Echo Lakes Trail is a 5 mile heavily trafficked out and back trail located near Echo Lake, California that features a lake and is rated as moderate. The trail is primarily used for hiking, running, bird watching, and snowshoeing and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.', length=5, eta=3, difficulty='Moderate')
    lawrence = Hike(hike_name='Lawrence Lake', park_id=1, lat=38.908886, long=-120.226084, description='Lawrence Lake is a 23 mile moderately trafficked out and back trail located near Kyburz, California that features a river and is rated as moderate. The trail offers a number of activity options and is best used from May until September. Dogs and horses are also able to use this trail.', length=23, eta=30, difficulty='Moderate')
    granite = Hike(hike_name='Granite Lake', park_id=1, lat=38.937897, long=-120.110247, description='Granite Lake is a 4. mile heavily trafficked out and back trail located near South Lake Tahoe, California that features a lake and is rated as difficult. The trail offers a number of activity options. Dogs are also able to use this trail but must be kept on leash.', length=4, eta=2, difficulty='Easy')
    loon = Hike(hike_name='Loon Lake', park_id=1, lat=38.993333, long=-120.299981, description='Loon Lake Trail is a 9 mile moderately trafficked out and back trail located near Pollock Pines, California that features a lake and is rated as moderate. The trail is primarily used for hiking, walking, bird watching, and fishing and is best used from February until November. Dogs are also able to use this trail.', length=9, eta=6, difficulty='Moderate')



    db.session.add(aloha)
    db.session.add(waterfall)
    db.session.add(tallac)
    db.session.add(fontanillis)
    db.session.add(clyde)
    db.session.add(pyramid)
    db.session.add(echo)
    db.session.add(lawrence)
    db.session.add(granite)
    db.session.add(loon)


    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_hikes():
    db.session.execute('TRUNCATE hikes RESTART IDENTITY CASCADE;')
    db.session.commit()