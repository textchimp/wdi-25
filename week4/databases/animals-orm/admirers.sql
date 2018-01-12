
CREATE TABLE admirers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  location   TEXT,
  image_url  TEXT,
  admiration INTEGER
);

-- seed data for this table
INSERT INTO admirers( name, location, image_url, admiration, animal_id)
  VALUES('Mikaela', 'Sydney', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOGI5ZjFmYWYtNjdhMi00OWVhLWJhZmYtMGQ4NzViZjUwYWM4XkEyXkFqcGdeQXVyOTQ0NTUzMQ@@._V1_UY317_CR9,0,214,317_AL_.jpg', 50, 1);

  INSERT INTO admirers( name, location, image_url, admiration, animal_id)
    VALUES('Joel', 'Glasgow', 'https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1051/thumb_joel.jpg', 0, 2);

  INSERT INTO admirers( name, location, image_url, admiration, animal_id)
    VALUES('Olivia', 'The Moon', 'http://fillmurray.com/400/300', 0, 1);

  INSERT INTO admirers( name, location, image_url, admiration, animal_id)
    VALUES('Hayley', 'Kyrgistan', 'http://fillmurray.com/300/200', 0, 3);
