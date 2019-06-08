UPDATE
  tags
SET
  owner_user_id = /* tagEntity.ownerUserId */0,
  name = /* tagEntity.name */'',
  public_flag = /* tagEntity.publicFlag */FALSE,
  updated_at = NOW()
WHERE
  id = /* tagEntity.id */0
;