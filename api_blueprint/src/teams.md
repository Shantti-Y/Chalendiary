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

