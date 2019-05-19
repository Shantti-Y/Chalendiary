SELECT
  u.*
FROM
  users AS u
INNER JOIN
  user_tags AS ut
ON
  ut.user_id = u.id
WHERE
  ut.tag_id = /* tagId */0
;