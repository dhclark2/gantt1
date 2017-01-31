class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :text
      t.datetime :start_date
      t.integer :duration
      t.float :progress
      t.integer :sortorder
      t.integer :parent

      t.timestamps
    end
  end
end
