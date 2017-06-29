json.set! 'user' do
  json.partial! "api/users/user", user: @user
end

json.set! 'track' do
  json.partial! "api/tracks/track", track: @track
end
