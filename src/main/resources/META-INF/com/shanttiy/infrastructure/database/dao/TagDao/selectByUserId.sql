SELECT
    t.*
FROM
    tags AS t
INNER JOIN
    user_tags AS ut
ON
    ut.tag_id = t.id
WHERE
    ut.user_id = /* userId */0
;