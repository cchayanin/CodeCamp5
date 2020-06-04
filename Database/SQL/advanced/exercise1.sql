SELECT
  a.account_number
FROM account a
JOIN branch b ON a.branch_name = b.branch_name
WHERE
  b.branch_city = "Riverside"