SELECT
    t.*
FROM
    teams AS t
INNER JOIN
    user_teams AS ut
ON
    ut.team_id = t.id
WHERE
    ut.user_id = /* userId */0
;