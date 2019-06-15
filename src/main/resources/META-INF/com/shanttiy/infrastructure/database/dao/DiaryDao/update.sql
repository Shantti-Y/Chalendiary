UPDATE
  diaries
SET
  content_text = /* diaryEntity.contentText */'',
  deleted_at = /* diaryEntity.deletedAt */NULL,
  updated_at = NOW()
WHERE
  id = /* diaryEntity.id */0
;