SELECT
  DISTINCT sail.sname
FROM sailors sail
JOIN reserves res on sail.sid = res.sid
JOIN boats on res.bid = boats.bid
WHERE
  boats.color = "Red"