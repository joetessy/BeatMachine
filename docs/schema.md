# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_img     | string    |
location        | string    |


## tracks
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
artist_id     | text      | not null, foreign key (references users)
track_url     | integer   | not null
description   | string    |

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
followee_id | integer   | not null, foreign key (references users)


## playlists
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users)
title         | string    | not null
playlist_type | string    |
release_date  | string    |  
description   | string    |


## playlist_tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
track_id    | integer   | not null. foreign key (references tracks)


## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)


## reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)


# messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign_key
recipient_id| integer   | not null, foreign_key


# tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)
