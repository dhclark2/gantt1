# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.create :text=>"Task 1", :start_date=>"2015-10-25",  :duration=>2;
Task.create :text=>"Task 2", :start_date=>"2015-10-27",  :duration=>3;
Link.create :source=>1, :target=>2, :link_type=>"0";
