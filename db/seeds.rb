class Seed
attr_reader :seed
def initialize
  @seed
end

def run
  generate_data

  generate_city
end

def generate_data
  10.times do
    item = Item.new
    item.name = "Item"
    item.description = "I am a description."
    item.save!
    puts "Generated item  # #{item.id}"
  end
end

def generate_city
  10.times do
    city = City.new
    city.name = "Item"
    city.description = "I am a description."
    city.save!
    puts "Generated city  # #{city.id}"
  end
end

end

seed = Seed.new
seed.run