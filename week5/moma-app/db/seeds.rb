#  id         :integer          not null, primary key
#  title      :text
#  year       :text
#  medium     :text
#  style      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null


Artist.destroy_all

a1 = Artist.create name: 'Frantisêk Kupka', nationality: 'Czech', dob: '1930/2/23', period: '20th Century', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg', roundness: 'varied'

a2 = Artist.create name: 'Lee Krasner', nationality: 'USA', dob: '1929/10/23', period: '20th Century', image: 'https://upload.wikimedia.org/wikipedia/en/3/38/Lee_Krasner.jpg', roundness: 'medium'

a3 = Artist.create name: 'Max Ernst', nationality: 'German', dob: '1910/01/11', period: '20th Century', image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg', roundness: 'puzzling'


puts "Created #{ Artist.all.length } artists: \n  #{ Artist.pluck(:name).join "\n  " }"


Work.destroy_all

Work.create title: 'Movement', year: '1946', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tresbohemes.com/wp-content/uploads/2016/04/Kupka-Movement.jpg', artist: a1

Work.create title: 'Gothic Landscape', year: '1961', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tate.org.uk/art/images/work/T/T03/T03291_10.jpg', artist: a2

Work.create title: 'Working Model', year: '1957', medium: 'bronze sculpture', style: 'modernism', image: 'http://www.tate.org.uk/art/images/work/T/T00/T00390_10.jpg', artist: a2

Work.create title: 'City with Animals', year: '1930', medium: 'oil on wood', style: 'surrealism/cubism', image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870', artist: a3

Work.create title: 'Die Versuchung des heiligen Antonius', year: '1945', medium: 'oil on canvas', style: 'surrealism', image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg', artist: a3

puts "Created #{ Work.all.length } works: \n  #{ Work.pluck(:title).join "\n  " }"
