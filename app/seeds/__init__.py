from flask.cli import AppGroup
from .users import seed_users, undo_users
from .parks import seed_parks, undo_parks
from .hikes import seed_hikes, undo_hikes
from .photos import seed_photos, undo_photos
from .reviews import seed_reviews, undo_reviews
from .keywords import seed_keywords, undo_keywords
from .hike_keywords import seed_hike_keywords, undo_hike_keywords

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_parks()
    seed_hikes()
    seed_photos()
    seed_reviews()
    seed_keywords()
    seed_hike_keywords()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_parks()
    undo_hikes()
    undo_photos()
    undo_reviews()
    undo_keywords()
    undo_hike_keywords()
    # Add other undo functions here
