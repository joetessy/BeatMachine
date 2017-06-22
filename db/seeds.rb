User.destroy_all
User.reset_pk_sequence

Track.destroy_all
Track.reset_pk_sequence


artists = User.create!([
  {
    username: 'SnoopDogg',
    password: 'password',
    location: 'Compton',
    avatar: File.open('app/assets/images/snoopdogg.jpg')
  },
  {
    username: 'FlyingLotus',
    password: 'password',
    location: 'LA',
    avatar: File.open('app/assets/images/flyinglotus.jpg')
  },
  {
    username: 'Quasimoto',
    password: 'password',
    location: 'cloud 9',
    avatar: File.open('app/assets/images/quasimoto.jpg')
  },
  {
    username: 'Madlib',
    password: 'password',
    location: 'tha bombshelter',
    avatar: File.open('app/assets/images/madlib.jpg')
  }])

tracks = Track.create([
  {
    title: 'Super Crip',
    artist_id: artists[0].id,
    description: 'Another dope track by Snoop',
    audio: File.open('app/assets/tracks/supercrip.mp3')
  },
  {
    title: 'Drop It Like It\'s Hot',
    artist_id: artists[0].id,
    description: 'Sn00000000p',
    audio: File.open('app/assets/tracks/dropitlikeitshot.mp3')
  },
  {
    title: 'Massage Situation',
    artist_id: artists[1].id,
    description: 'Flylo Rulez',
    audio: File.open('app/assets/tracks/massagesituation.mp3')
  },
  {
    title: 'Microphone Mathematics',
    artist_id: artists[2].id,
    description: 'Respect for Lord Quas',
    audio: File.open('app/assets/tracks/microphonemathematics.mp3')
  },
  {
    title: 'Conducted Rhythms',
    artist_id: artists[3].id,
    description: 'Chill to this!',
    audio: File.open('app/assets/tracks/conductedrhythms.mp3')
  }
])
