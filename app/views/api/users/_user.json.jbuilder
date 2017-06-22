json.id user.id
json.username user.username
json.image_url asset_path(user.avatar.url)
json.tracks do
  json.array! user.tracks do |track|
    json.partial! 'api/tracks/track', track: track
  end
end
