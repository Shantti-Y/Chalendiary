DELETE
FROM user_tags
WHERE
  user_id = /* userTagEntity.userId */0
AND
  tag_id = /* userTagEntity.tagId */0
;