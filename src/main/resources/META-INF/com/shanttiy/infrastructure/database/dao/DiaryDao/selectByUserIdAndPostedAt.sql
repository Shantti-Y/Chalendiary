SELECT
  d.*
FROM
  diaries AS d
WHERE
  d.user_id = /* userId */0
AND
  d.posted_at = /* postedAt */'2019-01-01'
LIMIT 1
;