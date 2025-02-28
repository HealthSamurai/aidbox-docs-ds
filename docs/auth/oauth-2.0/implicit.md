# Implicit Grant

The Implicit Grant is an OAuth 2.0 flow that client-side apps use in order to access an API, typically as Web SPA applications. For more detailed information read [OAuth2.0 specifcation](https://tools.ietf.org/html/rfc6749#section-4.2).

## Authorization Request

The client initiates the flow by directing the resource owner's user-agent to the authorization endpoint. The client includes its client identifier, requested scope, local state, and a redirection URI to which the authorization server will send the user-agent back once access is granted (or denied).

<RequestExample>
  <Request title="Authorization Endpoint" method="GET" path="/oauth2/authorize">
    Initiate implicit flow

    Query parameters:
    - `state` (string, optional) - An opaque value used by the client to maintain state between the request and callback
    - `scope` (string, optional) - The scope of the request. If you want use OpenID Connect, value must contain `openid`
    - `response_type` (string, required) - Value MUST be set to `token`. If you want use OpenID Connect and get `id_token`, value must be set to `id_token token`
    - `client_id` (string, required) - Id of Client
    - `redirect_uri` (string, optional) - Client redirect_uri, if not presented, authorization server will redirect to the first redirect_uri described in client
  </Request>

  <Response title="200 OK">
    Html page with ResourceOwner authorization form
  </Response>
</RequestExample>

### Example

Example of authorization URL for client `web-app`, and use OpenID.
