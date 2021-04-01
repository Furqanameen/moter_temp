class CreateSliders < ActiveRecord::Migration[6.1]
  def change
    create_table :sliders do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
