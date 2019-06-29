UPDATE
  diaries
SET
  content_text = /* diaryEntity.contentText */'',
  emoji_id = /* diaryEntity.emojiId */1,
  deleted_at = /* diaryEntity.deletedAt */NULL,
  updated_at = NOW()
WHERE
  id = /* diaryEntity.id */0
;