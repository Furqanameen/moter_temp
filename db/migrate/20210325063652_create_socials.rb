class CreateSocials < ActiveRecord::Migration[6.1]
  def change
    create_table :socials do |t|
      t.text :facebook_links
      t.text :twitter_links
      t.text :google_links
      t.text :pinterest_links
      t.text :dribbble_links	

      t.timestamps
    end
  end
end
