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

