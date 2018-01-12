
CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name  TEXT,
  last_name   TEXT,
  roundness   TEXT,
  image_url   TEXT,
  description TEXT,
  species     TEXT,
  alive       INTEGER,   -- fake boolean type (foolean): 0 = dead, 1 = alive
  age         INTEGER
);

INSERT INTO animals(  first_name, last_name, roundness, image_url, description, species, alive, age)
             VALUES(  "Clarence", "Boddicker", "medium, partial, cranial", "https://vignette.wikia.nocookie.net/robocop/images/3/36/Grenade.jpg/revision/latest?cb=20160822222459", "Robocop killer and sworn enemy... not really an animal except in a metaphorical sense", "Human", 0, 48);

INSERT INTO animals( first_name, last_name, roundness, image_url, description, species, alive, age)
            VALUES(  "Ruby", "Diamonds", "low, sadly", "http://www.mans-best-friend.org.uk/dog-images/ruby-king-charles-spaniel.jpg", "Not the real Ruby", "Canine (doggo)", 1, 3);

INSERT INTO animals( first_name, last_name, roundness, image_url, description, species, alive, age)
            VALUES( "Fat Frankie", "Sahara", "CRITICAL EMERGENCY LEVELS", "https://pbs.twimg.com/media/DS1ku7XUMAATBqk.jpg", "Dang this is one seriously ROUND BOY", "Desert Rain Frog", 1, 4 );
