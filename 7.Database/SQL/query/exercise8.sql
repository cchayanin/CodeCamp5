SELECT
  DISTINCT s.sname
FROM sailors s
JOIN reserves r ON s.sid = r.sid
JOIN boats b ON r.bid = b.bid
WHERE
  color = "Red"
  AND r.sid IN (
    SELECT
      r.sid
    FROM reserves r
    JOIN boats b ON r.bid = b.bid
    WHERE
      b.color = "Green"
  )