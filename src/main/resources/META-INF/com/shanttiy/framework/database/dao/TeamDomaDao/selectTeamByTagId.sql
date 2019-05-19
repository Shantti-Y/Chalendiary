SELECT
    teams.*
FROM
    teams
INNER JOIN
    tags
ON
    tags.team_id = teams.id
WHERE
    tags.id = /* tagId */0
;