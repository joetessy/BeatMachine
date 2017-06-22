json.id track.id
json.title track.title
json.artist_id track.artist.id
json.artist track.artist.username
json.description track.description
json.audio_url asset_path(track.audio.url)
json.image_url asset_path(track.image.url)
