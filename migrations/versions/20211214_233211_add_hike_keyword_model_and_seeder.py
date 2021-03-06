"""add_hike_keyword_model_and_seeder

Revision ID: fb08a13643ba
Revises: f62cb4029d87
Create Date: 2021-12-14 23:32:11.761782

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb08a13643ba'
down_revision = 'f62cb4029d87'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('hike_keywords',
    sa.Column('hike_id', sa.Integer(), nullable=False),
    sa.Column('keyword_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hike_id'], ['hikes.id'], ),
    sa.ForeignKeyConstraint(['keyword_id'], ['keywords.id'], ),
    sa.PrimaryKeyConstraint('hike_id', 'keyword_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('hike_keywords')
    # ### end Alembic commands ###
