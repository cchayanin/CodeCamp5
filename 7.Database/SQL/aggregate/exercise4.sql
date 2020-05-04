SELECT
  sname
FROM sailors
WHERE
  age = (
    SELECT
      max(age)
    FROM sailors
  )