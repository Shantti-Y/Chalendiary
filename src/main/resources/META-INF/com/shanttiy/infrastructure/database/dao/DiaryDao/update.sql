UPDATE
  diaries
SET
  content_text = /* diaryEntity.contentText */'',
  updated_at = NOW()
WHERE
  id = /* diaryEntity.id */0
;