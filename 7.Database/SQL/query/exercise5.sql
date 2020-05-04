SELECT
  DISTINCT b.color
FROM boats b
JOIN reserves res on b.bid = res.bid
JOIN sailors sail on res.sid = sail.sid
WHERE
  sail.sname = "Lubber";