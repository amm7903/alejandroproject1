# puts "Deleting seed data"
# Team.destroy_all
# Team.reset_pk_sequence
# Player.destroy_all
# Player.reset_pk_sequence
# puts "seeding player"


# Player.create(name: "cristiano", goals: 3, assists: 4, clubs: "man u", details: "best player", team_id: 1)
# Player.create(name: "messi", goals: 3, assists: 4, clubs: "barcelona", details: "cool player", team_id: 1)
# Player.create(name: "kante", goals: 4, assists: 6, clubs: "chelsea", details: "nice", team_id: 1)
# Player.create(name: "kimmich", goals: 1, assists: 1, clubs: "bayern", details: "awesome", team_id: 2)
# Player.create(name: "muller", goals: 6, assists: 4, clubs: "dortmund", details: "cooool", team_id: 2)


# Team.create(name: "Ajax")
# Team.create(name: "Chelsea")

puts "seeding users"
User.create(username: "KephernF", password:"Keph1122", email:"kephernjoga@gmail.com", boss: true)
puts "done seeding user"