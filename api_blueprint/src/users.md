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

