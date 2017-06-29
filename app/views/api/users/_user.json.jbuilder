json.id user.id
json.username user.username
json.location user.location
json.image_url asset_path(user.avatar.url)
json.set! 'tracks' do
  user.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track.json.jbuilder', track: track
  end
  end
end
json.set! 'favorite_tracks' do
  json.array! user.favorite_tracks.map(&:id)
end
