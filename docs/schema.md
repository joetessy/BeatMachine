# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |

## tracks
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
artist_id     | text      | not null, foreign key (references users)
description   | string    |

## comments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign_key (references users)
track_id     | integer   | not null, foreign key (references tracks)
body         | string    | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
followee_id | integer   | not null, foreign key (references users)

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)


# BONUS:

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

## reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign_key
recipient_id| integer   | not null, foreign_key

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references tracks)
playlist_id | integer   | foreign key (references playlists)
