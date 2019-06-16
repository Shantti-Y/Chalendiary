SELECT
  d.*
FROM
  diaries AS d
WHERE
  d.posted_at
BETWEEN
  /* from */'2019-01-01'
AND
  /* to */'2019-01-30'
ORDER BY
  d.posted_at
;