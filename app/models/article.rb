class Article < ApplicationRecord
    belongs_to :users
    has_many :movies
end
