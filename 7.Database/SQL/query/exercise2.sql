SELECT
  sailors.sname
FROM sailors
JOIN reserves on sailors.sid = reserves.sid
WHERE
  reserves.bid = "103";