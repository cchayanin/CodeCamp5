--1
SELECT
  s.sname
FROM sailors s
JOIN reserves r ON s.sid = r.sid
JOIN boats b ON r.bid = b.bid
WHERE
  b.color = "Red"
UNION
SELECT
  s.sname
FROM sailors s
JOIN reserves r ON s.sid = r.sid
JOIN boats b ON r.bid = b.bid
WHERE
  b.color = "Green";
--2
SELECT
  sname
FROM (
    SELECT
      s.sname
    FROM sailors s
    JOIN reserves r ON s.sid = r.sid
    JOIN boats b ON r.bid = b.bid
    WHERE
      b.color = "Red"
    UNION
    SELECT
      s.sname
    FROM sailors s
    JOIN reserves r ON s.sid = r.sid
    JOIN boats b ON r.bid = b.bid
    WHERE
      b.color = "Green"
  );