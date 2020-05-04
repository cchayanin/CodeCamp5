SELECT
  r.sid
FROM reserves r
JOIN boats b ON r.bid = b.bid
WHERE
  color = "Red"
  AND r.sid NOT IN (
    SELECT
      r.sid
    FROM reserves r
    JOIN boats b ON r.bid = b.bid
    WHERE
      b.color = "Green"
  )