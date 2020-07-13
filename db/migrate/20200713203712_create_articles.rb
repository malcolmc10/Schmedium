class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :user_id
      t.string :movie_id
      t.string :article

      t.timestamps
    end
  end
end
