User.destroy_all
User.reset_pk_sequence

Track.destroy_all
Track.reset_pk_sequence


artists = User.create!([
  {
    username: 'Snoop Dogg',
    password: 'password',
    location: 'LBC',
    avatar: File.open('app/assets/images/snoopdogg.jpg')
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
    location: 'cloud 9',
    avatar: File.open('app/assets/images/quasimoto.jpg')
  },
  {
    username: 'Madlib',
    password: 'password',
    location: 'tha bombshelter',
    avatar: File.open('app/assets/images/madlib.jpg')
  },
  {
    username: 'guest',
    password: 'password',
    location: 'NYC',
    avatar: File.open('app/assets/images/logo.png')
  }])

tracks = Track.create([
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
    title: 'Do The Astral Plane',
    artist_id: artists[1].id,
    description: 'Track off of Cosmogramma',
    audio: File.open('app/assets/tracks/dotheastralplane.mp3'),
    image: File.open('app/assets/images/cosmogramma.jpg')
  },
  {
    title: 'Real Eyes',
    artist_id: artists[2].id,
    description: 'Long Live Quasimoto',
    audio: File.open('app/assets/tracks/realeyes.m4a'),
    image: File.open('app/assets/images/realeyes.jpg')
  },
  {
    title: 'Microphone Mathematics',
    artist_id: artists[2].id,
    description: 'Respect for Lord Quas',
    audio: File.open('app/assets/tracks/microphonemathematics.mp3'),
    image: File.open('app/assets/images/microphonemathematics.jpg')
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
    title: 'Gin N Juice',
    artist_id: artists[0].id,
    description: 'Another dope track by Snoop',
    audio: File.open('app/assets/tracks/ginNjuice.mp3'),
    image: File.open('app/assets/images/ginNjuice.jpg')
  },
  {
    title: 'Drop It Like It\'s Hot',
    artist_id: artists[0].id,
    description: 'Sn00000000p',
    audio: File.open('app/assets/tracks/dropitlikeitshot.mp3'),
    image: File.open('app/assets/images/dropit.jpg')
  }
])
