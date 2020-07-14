# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user=User.create!(username:'Colin', password: 'hello123')

@movie=Movie.create!(title:'Happy Potter and the Philosophers Stone', img_url:'https://media.harrypotterfanzone.com/philosophers-stone-teaser-poster.jpg'), (title:'Harry Potter and the Chamber of Secrets', img_url:'https://media.harrypotterfanzone.com/chamber-of-secrets-theatrical-poster.jpg'),(title:'Harry Potter and the Prisoner of Azkaban', img_url:'https://www.harrypotterfanzone.com/pictures/prisoner-of-azkaban-theatrical-poster-2/'),(title:'Harry Potter and the Goblet of Fire', img_url:'https://media.harrypotterfanzone.com/goblet-of-fire-theatrical-poster-2.jpg'), (title:'Harry Potter and the Order of the Phoenix', img_url:'https://media.harrypotterfanzone.com/order-of-the-phoenix-theatrical-poster-3.jpg'), (title: 'Harry Potter and the Half Blood Prince', img_url:'https://media.harrypotterfanzone.com/half-blood-prince-theatrical-poster.jpg'), (title:'Harry Potter and the Deathly Hallows Part 1', img_url:'https://media.harrypotterfanzone.com/deathly-hallows-part-1-theatrical-poster.jpg' ), (title:'Harry Potter and the Deathly Hallows Part 2', img_url:'https://cdn11.bigcommerce.com/s-twbzkv97cv/images/stencil/1280x1280/products/3983/6478/HarryPotterAndTheDeathlyHallowsPart2__55018.1578185960.jpg?c=2&imbypass=on&imbypass=on'),(title:'Fantastic Beasts and Where To Find Them', img_url:'https://media.harrypotterfanzone.com/fantastic-beasts-newt-poster.jpg'), (title:'Fantastic Beasts The Crimes of Grindelwald', img_url:'https://media.harrypotterfanzone.com/fantastic-beasts-poster-2.jpg')