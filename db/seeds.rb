User.destroy_all
User.reset_pk_sequence

Track.destroy_all
Track.reset_pk_sequence

Comment.destroy_all
Comment.reset_pk_sequence

Favorite.destroy_all
Favorite.reset_pk_sequence

artists = User.create!([
  {
    username: 'Heralds of Change',
    password: 'password',
    location: 'Scotland?',
    avatar: File.open('app/assets/images/herald.jpg')
  },
  {
    username: 'Flying Lotus',
    password: 'password',
    location: 'LA',
    avatar: File.open('app/assets/images/flyinglotus.jpg')
  },
  {
    username: 'Quasimoto',
    password: 'password',
    location: 'Oxnard, CA',
    avatar: File.open('app/assets/images/quasimoto.jpg')
  },
  {
    username: 'Madlib',
    password: 'password',
    location: 'The bombshelter',
    avatar: File.open('app/assets/images/madlib.jpg')
  },
  {
    username: 'guest',
    password: 'password',
    location: 'NYC',
    avatar: File.open('app/assets/images/dpwave.png')
  },
  {
    username: 'Nujabes',
    password: 'password',
    location: 'Shibuya, Tokyo',
    avatar: File.open('app/assets/images/nujabes.jpg')
  },
  {
    username: 'Onra',
    password: 'password',
    location: 'Paris',
    avatar: File.open('app/assets/images/onra.jpg')
  }])

tracks = Track.create([
  {
    title: 'Melt!',
    artist_id: artists[1].id,
    description: 'Melt! is from the Los Angeles LP',
    audio: File.open('app/assets/tracks/Melt!.mp3'),
    image: File.open('app/assets/images/la.jpg')
  },
  {
    title: 'colemans groove andreya 2',
    artist_id: artists[1].id,
    description: 'From Ideas, Drafts, Loops',
    audio: File.open('app/assets/tracks/colemans groove . andreya 2.mp3'),
    image: File.open('app/assets/images/flylofm.png')
  },
  {
    title: 'Massage Situation',
    artist_id: artists[1].id,
    description: 'Flylo Rulez',
    audio: File.open('app/assets/tracks/massagesituation.mp3'),
    image: File.open('app/assets/images/massagesituation.jpg')
  },
  {
    title: 'Real Eyes',
    artist_id: artists[2].id,
    description: 'Long Live Quasimoto',
    audio: File.open('app/assets/tracks/realeyes.mp3'),
    image: File.open('app/assets/images/unseen.jpg')
  },
  {
    title: 'Catchin\' The Vibe',
    artist_id: artists[2].id,
    description: 'Much Respect for Lord Quas',
    audio: File.open('app/assets/tracks/catchin.mp3'),
    image: File.open('app/assets/images/catchin.jpg')
  },
  {
    title: 'Conducted Rhythms',
    artist_id: artists[3].id,
    description: 'Chill to this!',
    audio: File.open('app/assets/tracks/conductedrhythms.mp3'),
    image: File.open('app/assets/images/beatkonducta.jpg')
  },
  {
    title: 'Secret Record Set 3',
    artist_id: artists[3].id,
    description: 'This is an unreleased Madlib track.',
    audio: File.open('app/assets/tracks/secretrecordset3.mp3'),
    image: File.open('app/assets/images/secret.jpg')
  },
  {
    title: 'Alone',
    artist_id: artists[0].id,
    description: 'Very pretty track off of Show You EP',
    audio: File.open('app/assets/tracks/alone.mp3'),
    image: File.open('app/assets/images/showyou.jpg')
  },
  {
    title: 'Sittin\' on the Side (Instrumental)',
    artist_id: artists[0].id,
    description: 'Heralds of Change!!!',
    audio: File.open('app/assets/tracks/sittin.mp3'),
    image: File.open('app/assets/images/sittin.jpg')
  },
  {
    title: 'Mind Touch',
    artist_id: artists[3].id,
    description: 'Another great beat by the Beat Conductor',
    audio: File.open('app/assets/tracks/mindtouch.mp3'),
    image: File.open('app/assets/images/mindtouch.jpg')
  },
  {
    title: 'Moon Strut',
    artist_id: artists[5].id,
    description: 'Nujabes!! REST IN PEACE',
    audio: File.open('app/assets/tracks/moonstrut.mp3'),
    image: File.open('app/assets/images/moonstrut.jpg')
  },
  {
    title: 'I WANNA GO BACK',
    artist_id: artists[6].id,
    description: 'Short Onra beat off the Chinoiseries',
    audio: File.open('app/assets/tracks/iwannagoback.mp3'),
    image: File.open('app/assets/images/chinoiseries.jpg')
  }
])


comments = Comment.create([
  {
    author_id: artists[0].id,
    track_id: 1,
    body: 'This track is whack...'
  },
  {
    author_id: artists[0].id,
    track_id: 1,
    body: 'JK it coo'
  },
  {
    author_id: artists[1].id,
    track_id: 1,
    body: 'Thanks'
  },
  {
    author_id: artists[2].id,
    track_id: 1,
    body: 'It\'s Hawt!!'
  },
  {
    author_id: artists[0].id,
    track_id: 3,
    body: 'This is too trippy for me'
  },
  {
    author_id: artists[4].id,
    track_id: 2,
    body: 'I\'m Lovin It!!'
  },
  {
    author_id: artists[0].id,
    track_id: 2,
    body: 'Not My Style'
  },
  {
    author_id: artists[1].id,
    track_id: 2,
    body: 'Let the haters hate!!'
  },
  {
    author_id: artists[6].id,
    track_id: 11,
    body: 'RIP ILY NUJABES'
  }
])


favorites = Favorite.create!([
  {
    user_id: artists[0].id,
    track_id: tracks[1].id
  },
  {
    user_id: artists[0].id,
    track_id: tracks[2].id
  },
  {
    user_id: artists[0].id,
    track_id: tracks[3].id
  },
  {
    user_id: artists[0].id,
    track_id: tracks[4].id
  },
  {
    user_id: artists[0].id,
    track_id: tracks[5].id
  },
  {
    user_id: artists[3].id,
    track_id: tracks[2].id
  },
  {
    user_id: artists[3].id,
    track_id: tracks[4].id
  },
  {
    user_id: artists[3].id,
    track_id: tracks[6].id
  },
  {
    user_id: artists[3].id,
    track_id: tracks[7].id
  },
  {
    user_id: artists[3].id,
    track_id: tracks[5].id
  },
  {
    user_id: artists[5].id,
    track_id: tracks[1].id
  },
  {
    user_id: artists[5].id,
    track_id: tracks[0].id
  },
  {
    user_id: artists[4].id,
    track_id: tracks[1].id
  }
])
