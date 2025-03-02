# Discovery & Well Known endpoint

OpenID Connect Discovery

```http
GET [base]/.well-known/openid-configuration

```

```http
{
    "grant_types_supported": [
        "authorization_code",
        "implicit",
        "password",
        "client_credentials"
    ],
    "jwks_uri": "http://localhost:7777/.well-known/jwks.json"
    "userinfo_endpoint": "http://localhost:8888/oauth2/userinfo",
    "token_endpoint_auth_methods_supported": [
        "client_secret_post",
        "client_secret_basic"
    ],
    "claims_supported": [
        "profile",
        "openid",
        "exp",
        "family_name",
        "given_name",
        "iat",
        "iss",
        "locale",
        "name",
        "picture",
        "sub"
    ],
    "subject_types_supported": [
        "public"
    ],
    "uthorization_endpoint": "http://localhost:8888/oauth2/authoraize",
    "scopes_supported": [
        "openid",
        "profile",
        "email",
        "groups"
    ],
    "issuer": "http://localhost:8888",
    "response_types_supported": [
        "code",
        "token",
        "token id_token",
        "code id_token"
    ],
    "token_endpoint": "http://localhost:8888/oauth2/token",
    "id_token_signing_alg_values_supported": [
        "RS256"
    ]
}
```





| module | url | aciton |
| :--- | :--- | :--- |
| auth | [GET](https://niquola5.aidbox.app/static/console.html#/entities/Operation/auth-jwks-json) /.well-known/jwks.json | auth/jwks |
| auth | [GET](https://niquola5.aidbox.app/static/console.html#/entities/Operation/auth-authorization-server) /.well-known/oauth-authorization-server | auth/configuration |
| auth | [GET](https://niquola5.aidbox.app/static/console.html#/entities/Operation/openid-configuration) /.well-known/openid-configuration | auth/configuration |
| auth | [GET](https://niquola5.aidbox.app/static/console.html#/entities/Operation/smart-configuration) /.well-known/smart-configuration | auth/configuration |

