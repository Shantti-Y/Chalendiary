FORMAT: 1A
# Group Me

## Fetch logged in user's information [/v1/me/]

### [WIP] Fetch logged in user's information [GET]

#### Outline

* This API fetches users who belong to a team that you specified.
* TODO: Find what kind of authentication can be used.

+ Request (application/json)

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Attributes
        + user (required)
            + id: 1 (number, required)
            + screenName: Taro Wada (string, required)
            + email: t-wada@gmail.com (string, required)
            + thumbnailPath: https://sample.com/images/1 (string, required)
            + phone: 0000000000 (string, required)

    + Headers

            X-My-Message-Header: 42

# Group Diaries

## Fetch diaries submitted by users belonging to a specified team [/v1/diaries?{teamId,date}]

### Fetch diaries [GET]

#### Outline

* This API fetches diaries in a specified team.
* To get a response successfully, you must be a member of the team.

+ Request (application/json)

    + Parameters
        + teamId: 1 (number, required) - A team ID that you belong to
        + date: 2019/04/05 (string, required) - A date to get what diaries of the day you want

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Attributes
        + diaries (array, required)
            + (object)
                + id: 1 (number, required)
                + contentText: Hello world (string, required)
                + postedAt: 2019/04/04 (string, required)
                + user (required)
                    + id: 1 (number, required)
                    + screenName: Taro Wada (string, required)
                    + email: t-wada@gmail.com (string, required)
                    + thumbnailPath: https://sample.com/images/1 (string, required)
                    + phone: 0000000000 (string, required)
                + replies (array, required)
                    + (object)
                        + id: 1 (number, required)
                        + contentText: How's going? (string, required)
                        + user (required)
                        + id: 1 (number, required)
                        + screenName: Taro Wada (string, required)
                        + email: t-wada@gmail.com (string, required)
                        + thumbnailPath: https://sample.com/images/1 (string, required)
                        + phone: 0000000000 (string, required)

## Submit a new diary [/v1/diaries]

### [WIP] Submit a new diary [POST]

#### Outline

* This API delegates to a DB to create a new diary.
* If you want to crate a new diary, the combination of these following fields must be unique.
* 1.postedAt (date)
* 2.userId (number)
* 3.teamId (number)

+ Response 200 (application/json)

## Operate diary's information [/v1/diaries/{diaryId}]

### [WIP] Update user's information [PUT]

#### Outline

* This API updates diary's information.
* The target diary must be updated by its author.

+ Response 200 (application/json)

    + Attributes

### [WIP] Delete diary [DELETE]

#### Outline

* This API deletes a diary.
* The target diary must be updated by its author.

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

# Group Users

## Fetch users who belong to a specific team [/v1/users/{teamId}]

### Fetch users [GET]

#### Outline

* This API fetches users who belong to a team that you specified.
* To get a response successfully, you must be a member of the team.

+ Request (application/json)

    + Parameters

        + teamId: 1 (number, required) - A team ID that you belong to

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Attributes
        + users (array, required)
            + (object)
                + id: 1 (number, required)
                + screenName: Taro Wada (string, required)
                + email: t-wada@gmail.com (string, required)
                + thumbnailPath: https://sample.com/images/1 (string, required)
                + phone: 0000000000 (string, required)


## Submit a new user [/v1/users]

### [WIP] Submit a new user [POST]

#### Outline

* This API delegates to a DB to create a new user.
* A user's email must be unique.

+ Response 200 (application/json)

## Operate user's information [/v1/users/{userId}]

### [WIP] Update user's information [PUT]

#### Outline

* This API updates user's information.
* Users can change their own account's profile(only includes screenName, thumbnailPath)

+ Response 200 (application/json)

### [WIP] Delete user account [DELETE]

#### Outline

* This API deletes user account.
* Once an account is deleted, its relative datas are treated in the following actions depending on data type.
* 1.post: remained, but its author's information is treated as a `deleted user`.
* 2.reply: remained, but its author's information is treated as a `deleted user`.
* 3.tag (created by deleted user): deleted.

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

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

# Group Teams

## Fetch teams in a specified team [/v1/teams/{teamId}]

### Fetch teams [GET]

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
        + Team (required)
            + name: SUZUKI company (string, required)
            + domain: suzuki (string, required)
            + thumbnailPath: https://suzuki.com/images/1.jpg (string, required)
            + description: This is a company (string, required)

## Submit a new team [/v1/teams]

### [WIP] Submit a new team [POST]

#### Outline

* This API delegates to a DB to create a new team.

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

