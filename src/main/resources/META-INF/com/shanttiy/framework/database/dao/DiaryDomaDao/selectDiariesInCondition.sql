SELECT
    d.*
FROM
    diaries AS d
WHERE
    d.posted_at = /* date */'2019-05-01'
AND
    d.team_id = /* teamId */0
;