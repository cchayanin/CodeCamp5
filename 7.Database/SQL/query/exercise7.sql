SELECT
  DISTINCT s.sname
FROM sailors s
JOIN reserves r ON s.sid = r.sid
JOIN boats b ON r.bid = b.bid
WHERE
  b.color = "Red"
  or b.color = "Green"