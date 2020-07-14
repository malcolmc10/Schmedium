class Movie < ApplicationRecord
    has_many :articles, dependent: :destroy
    has_many :users, through: :articles
end
