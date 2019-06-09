UPDATE
  users
SET
  screen_name = /* userEntity.screenName */'',
  email = /* userEntity.email */'',
  thumbnail_path = /* userEntity.thumbnailPath */'',
  phone = /* userEntity.phone */'',
  updated_at = NOW()
WHERE
  id = /* userEntity.id */0
;