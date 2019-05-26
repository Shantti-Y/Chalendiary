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

