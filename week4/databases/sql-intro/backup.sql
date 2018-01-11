PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE pets (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name  TEXT,
  roundness  TEXT,
  age        INTEGER
);
INSERT INTO "pets" VALUES(1,'Clarence','Boddicker','medium to high',3);
INSERT INTO "pets" VALUES(2,'Ruby','Diamonds','low',1);
INSERT INTO "pets" VALUES(3,'Fluffball','McFluffy','EXTREME',5);
INSERT INTO "pets" VALUES(4,'Bazza','Dazza','marginal',17);
COMMIT;
