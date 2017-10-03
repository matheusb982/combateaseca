class AddNameToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :name, :string
    add_column :cities, :date, :date
    add_column :cities, :description, :text
  end
end
