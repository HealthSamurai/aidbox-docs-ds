# Users and Clients

## Client

The `Client` is the application that must access the user account or user data. Before performing access, it must be authorized by the user, and authorization must be approved by the Authorization Server.

:::info
Besides OAuth2.0 authorization, [Aidbox](https://www.health-samurai.io/aidbox) support simply basic auth which use the same client credentials as OAuth. For more information read documentation [Authentication and Authorization](https://docs.aidbox.app/tutorials/authentication-and-authorization) and [REST Api Access Aidbox.Dev](../../tutorials/how-to-use-rest-api.md).
:::

### Structure

| Attribute | Type | Description |
| :--- | :--- | :--- |
| id | [string](../../basic-concepts/meta-model/aidbox-data-types.md#string) | Client id |
| secret | [password](../../basic-concepts/meta-model/aidbox-data-types.md#password) | Client secret |
| redirect_uri | [string](../../basic-concepts/meta-model/aidbox-data-types.md#string) | Set of available redirect uri separated by comma |

### Samples

Client for web SPA application
