SELECT
    u.*
FROM
    users AS u
WHERE
    u.unique_id = /* uniqueId */''
LIMIT 1
;