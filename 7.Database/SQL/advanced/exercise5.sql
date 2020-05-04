SELECT
  d.customer_name name,
  sum(a.balance) balance
FROM depositor d
JOIN account a on d.account_number = a.account_number
GROUP BY
  d.customer_name
HAVING
  count(d.customer_name) > 1
ORDER BY
  balance DESC