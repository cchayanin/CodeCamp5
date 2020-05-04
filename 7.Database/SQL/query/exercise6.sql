SELECT
  DISTINCT sail.sname
FROM sailors sail
JOIN reserves res ON sail.sid = res.sid;