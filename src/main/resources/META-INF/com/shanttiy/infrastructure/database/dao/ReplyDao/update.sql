UPDATE
  replies
SET
  content_text = /* replyEntity.contentText */'',
  updated_at = NOW()
WHERE
  id = /* replyEntity.id */0
;