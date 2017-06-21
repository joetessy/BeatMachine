User.destroy_all
Track.destroy_all

artists = User.create!([
  {
    username: 'snoopdogg',
    password: 'password',
    avatar: File.open('app/assets/images/snoopdogg.jpg')
  },
  {
    username: 'flyinglotus',
    password: 'password',
    avatar: File.open('app/assets/images/flyinglotus.jpg')
  },
  {
    username: 'quasimoto',
    password: 'password',
    avatar: File.open('app/assets/images/quasimoto.jpg')
  },
  {
    username: 'madlib',
    password: 'password',
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
    title: 'Conducted Rhythems',
    artist_id: artists[3].id,
    description: 'Chill to this!',
    audio: File.open('app/assets/tracks/conductedrhythms.mp3')
  }
])
