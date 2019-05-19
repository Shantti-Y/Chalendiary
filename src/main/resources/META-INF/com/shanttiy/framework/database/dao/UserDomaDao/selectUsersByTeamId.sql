SELECT
    u.*
FROM
    users AS u
INNER JOIN
    user_teams AS ut
ON ut.user_id = u.id
WHERE
    ut.team_id = /* teamId */0
;