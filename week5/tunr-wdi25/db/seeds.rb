
Song.destroy_all
s1 = Song.create title: 'Achy Breaky Heart'
s2 = Song.create title: 'Have A Safe Trip, Dear'
s3 = Song.create title: 'Burn the Witch'
s4 = Song.create title: 'Identikit'
s5 = Song.create title: 'Rollerblade Success Story'
s6 = Song.create title: 'No One Gives A Hoot About Faux-Ass Nonsense'
s7 = Song.create title: 'Sail To The Moon'


puts "Created #{ Song.all.length } songs."

Album.destroy_all
a1 = Album.create title: 'Some Gave All', image: 'https://images-na.ssl-images-amazon.com/images/I/51si0FNckdL.jpg', year: '1992'
puts "Created #{ Album.all.length } albums."
a2 = Album.create title: 'Engine Takes to the Water', year: '1998', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/EngineTakesToTheWater.jpg/220px-EngineTakesToTheWater.jpg'
a3 = Album.create title: 'A Moon-Shaped Pool', year: '2015', image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/A_Moon_Shaped_Pool.jpg'
a4 = Album.create title: 'II', year: '1992', image: 'https://images-na.ssl-images-amazon.com/images/I/61TCQscCLUL._SY355_.jpg'
a5 = Album.create title: 'Hail to the Thief', year: '1999', image: 'https://upload.wikimedia.org/wikipedia/en/6/63/Radiohead_-_Hail_to_the_Thief_-_album_cover.jpg'

Artist.destroy_all
r1 = Artist.create name: 'Billy Ray Cyrus', image: 'https://pics.me.me/billy-ray-cyrus-bil-ray-billyraycyrus-cyrus-much-to-think-2304197.png'
r2 = Artist.create name: 'June of 44', image: 'https://i.ytimg.com/vi/RqOibn256dw/hqdefault.jpg'
r3 = Artist.create name: 'Radiohead', image: 'http://img.wennermedia.com/social/rs-radiohead-c5f64a04-c159-4d2c-a743-64b8862bff6a.jpg'
r4 = Artist.create name: 'Don Caballero', image: 'https://cdn2.thelineofbestfit.com/images/remote/http_cdn2.thelineofbestfit.com/media/2013/caballero_poster.jpg'
puts "Created #{ Artist.all.length } artists."


Genre.destroy_all
g1 = Genre.create name:'Nautical Rock'
g2 = Genre.create name:'Math Rock'
g3 = Genre.create name:'Paranoid Art-Rock'
g4 = Genre.create name:'Instrumental'
g5 = Genre.create name:'IDM'
g6 = Genre.create name:'Country'
puts "Created #{ Genre.all.length } genres."

Mixtape.destroy_all
m1 = Mixtape.create name: 'Driving Songs', image: 'http://fillmurray.com/300/200'
m2 = Mixtape.create name: 'Makeout Music', image: 'http://fillmurray.com/400/300'
m3 = Mixtape.create name: 'Code Jams', image: 'http://fillmurray.com/500/300'
puts "Created #{ Mixtape.all.length } mixtapes."

User.destroy_all
u1 = User.create email: 'milo@ga.co', name: 'Mi Lo', password: 'chicken'
u2 = User.create email: 'luke@ga.co', name: 'Lu Ke', password: 'chicken'
u3 = User.create email: 'joel@ga.co', name: 'Jo El', password: 'chicken'
puts "Created #{ User.all.length } users."

# s1.update artist: r1

r1.songs << s1
r2.songs << s2
r3.songs << s3 << s4 << s7
r4.songs << s5 << s6

a1.songs << s1
a2.songs << s2
a3.songs << s3 << s4
a4.songs << s5 << s6
a5.songs << s7

s1.genres << g6
# ... is the same as...
# g6.songs << s1

s2.genres << g2 << g3
s3.genres << g4 << g5
s4.genres << g4 << g5
s5.genres << g6 << g1
s6.genres << g1 << g2 << g3 << g4
s7.genres << g3 << g5

m1.songs << s1 << s2 << s3 << s4 << s5 << s6 << s7
m2.songs << s2 << s4 << s6
m3.songs << s7 << s1 << s2

u1.mixtapes << m1 << m2
u2.mixtapes << m3
