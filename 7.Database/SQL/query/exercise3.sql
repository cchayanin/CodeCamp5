SELECT
  DISTINCT reserves.sid
FROM reserves
JOIN boats on reserves.bid = boats.bid
WHERE
  boats.color = "Red"