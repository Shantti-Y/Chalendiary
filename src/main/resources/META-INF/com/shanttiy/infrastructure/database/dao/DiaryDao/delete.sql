UPDATE
  diaries
SET
  deleted_at = NOW(),
  updated_at = NOW()
WHERE
id = /* diaryEntity.id */0
;