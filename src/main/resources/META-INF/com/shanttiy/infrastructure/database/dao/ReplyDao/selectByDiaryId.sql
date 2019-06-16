SELECT
    r.*
FROM
    replies AS r
WHERE
    r.diary_id = /* diaryId */0
ORDER BY
    r.created_at
;