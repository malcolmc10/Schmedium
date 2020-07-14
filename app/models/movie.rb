class Movie < ApplicationRecord
    belongs_to :articles, dependent: :destroy
    has_many :users, through: :articles
end
