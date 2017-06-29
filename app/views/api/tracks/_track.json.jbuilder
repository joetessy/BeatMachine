json.id track.id
json.title track.title
json.artist_id track.artist.id
json.artist track.artist.username
json.artist_image track.artist.avatar.url
json.description track.description
json.audio_url asset_path(track.audio.url)
json.image_url asset_path(track.image.url)
json.comments track.comments.map(&:id)
json.set! 'favorited_users' do
  json.array! track.favorite_users.map(&:id)
end
json.time_ago track.time_ago
