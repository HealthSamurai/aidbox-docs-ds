# Resource Owner Credentials Grant

[Aidbox](https://www.health-samurai.io/aidbox) OAuth module supports Resource Owner Credentials flow in two formats. First — strict adherence to specifications for better compatibility. Second — JSON request as a more modern and simple way. Read official [OAuth2.0 specification](https://tools.ietf.org/html/rfc6749#section-4.3) for more details.

## JSON Request

In JSON Request, you need to specify `client_id`, `client_secret`, `grant_type`, `username`, and `password`. All parameters are required.

<RequestExample>
  <Request title="Token Endpoint" method="POST" path="/oauth2/token">
    Get `access_token` via Resource Owner Credentials Grant.

    Body parameters:
    - `grant_type` (string, required) - Value MUST be set to `password`
    - `client_secret` (string, required) - Client secret
    - `client_id` (string, required) - Client Id
    - `password` (string, required) - User password
    - `username` (string, required) - User identification email

    ```json
    {
      "client_id": "web-app",
      "client_secret": "client-secret",
      "username": "admin@example.com", 
      "password": "long-user-password",
      "grant_type": "password"
    }
    ```
  </Request>

  <Response title="200 OK">
    Returns access_token

    ```json
    {
      "access_token": "cd97340505f2-42c4-4267-a472-cd97340505f2",
      "token_type": "bearer"
    }
    ```
  </Response>
</RequestExample>

## OAuth2.0 RFC Specification

As described in [OAuth2.0 specification](https://tools.ietf.org/html/rfc6749#section-4.4) client credentials should be presented via Authorization Basic header, and `body` should be in `application/x-www-form-urlencoded` format and `grant_type`, `username` and `password` parameter. `grant_type` parameter value MUST be set to `password`.

<RequestExample>
  <Request title="Token Endpoint" method="POST" path="/oauth2/token">
    Get `access_token` via Resource Owner Credentials Grant

    Headers:
    - Content-Type: application/x-www-form-urlencoded
    - Authorization: Basic credentials of client

    Form parameters:
    - `grant_type` (string, required) - Value MUST be set to `password`
    - `username` (string, required) - User Identification email
    - `password` (string, required) - User password

    ```bash
    curl -X POST \
      http://localhost:8888/oauth2/token \
      -H 'Authorization: Basic d2ViLWFwcDpjbGllbnQtc2VjcmV0' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=password&username=admin@example.com&password=long-user-password'
    ```
  </Request>

  <Response title="200 OK">
    Returns access_token

    ```json
    {
      "access_token": "f2a3c18c-42c4-4267-a472-cd97340505f2",
      "token_type": "bearer"
    }
    ```
  </Response>
</RequestExample>
