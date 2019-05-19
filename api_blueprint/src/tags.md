# Group Tags

## Fetch tags in a specified team [/v1/tags/{teamId}]

### Fetch tags [GET]

#### Outline

* This API fetches tags in a specified team.
* To get a response successfully, you must be a member of the team.

+ Request (application/json)

    + Parameters
        + teamId: 1 (number, required) - A team ID that you belong to

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Attributes
        + Tags (array, required)
            + (object)
                + id: 1 (number, required)
                + name: Team salesforce (string, required)
                + description: This is a specified tag (string, required)
                + publicFlag: true (boolean, required)
                + owner
                    + id: 1 (number, required)
                    + screenName: Taro Wada (string, required)
                    + email: t-wada@gmail.com (string, required)
                    + thumbnailPath: https://sample.com/images/1 (string, required)
                    + phone: 0000000000 (string, required)
                + users (array, required)
                    + (object)
                        + id: 1 (number, required)
                        + screenName: Taro Wada (string, required)
                        + email: t-wada@gmail.com (string, required)
                        + thumbnailPath: https://sample.com/images/1 (string, required)
                        + phone: 0000000000 (string, required)

## Submit a new diary [/v1/tags]

### [WIP] Submit a new tag [POST]

#### Outline

* This API delegates to a DB to create a new diary.
* If you want to crate a new diary, the combination of these following fields must be unique.

+ Response 200 (application/json)

## Operate tag's information [/v1/tags/{tagId}]

### [WIP] Update tag's information [PUT]

#### Outline

* This API updates tag's information.
* Anyone in the team can update tag's information.

+ Response 200 (application/json)

### [WIP] Delete tag [DELETE]

#### Outline

* This API deletes a tag.
* Anyone in the team can delete tag's information.

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

