# Configure Aidbox and Multibox

## FHIR Server Configuration

Aidbox is configured with a set of Setting Parameters.

Users can not add new Setting Parameters. Setting parameters are defined by server and can be changed by server administrator or by users through UI and API.

Specific Settings require restart of the server to take effect.

Setting Parameters can be set using environment variables or by Setting Parameter API. 
Parameters set from environment variables could not be changed in UI and API

User can use UI to set Setting Parameters over API.

Setting Parameters can be grouped by categories. Here are the categories:

| Category | Description |
| --- | --- |
| General | General configuration - misc configuration like license key, etc. |
| FHIR | FHIR related configuration - search, validation, terminology, etc. |
| Web | Web Server related configuration - port, host, etc. |
| Database | Database related configuration - connection, pool size, etc. |
| Security and Access Control | Authorization related configuration |
| Observability | Observability related configuration |
| Modules | Aidbox Modules configuration |
| Zen (obsolete) | Zen related configuration |

The list of Setting Parameters is server defined and can be listed ` GET /api/v1/settings_introspect`. 


:::info

Settings API and database schema are subject to change. It's not recommended to use it in production.

:::

## Setting Parameters Elements

- **name** (string) - Parameter identifier
- **source** (string) - Current source of parameter value
- **category** (string[]) - Parameter categories for grouping
- **title** (string) - Human readable name
- **description** (string) - Detailed description of the parameter
- **with-default?** (boolean) - Whether parameter has a default value
- **optional?** (boolean) - Whether parameter is optional
- **required?** (boolean) - Whether parameter is required
- **type** (string) - Data type of parameter value
- **editable** (boolean) - Whether parameter can be changed via API/UI
- **sensitive** (boolean) - Whether parameter contains sensitive data
- **overridden** (boolean) - Whether default value is overridden
- **value** (any) - Current parameter value
- **unit** (string) - Unit of measurement (if applicable)
- **pending-source** (string) - Source of pending change
- **pending-restart** (boolean) - Whether change requires restart
- **pending-value** (any) - Value to be applied after restart
- **restart-required** (boolean) - Whether parameter change needs restart
- **envs** (string[]) - Environment variables that can set this parameter
- **variants** (any) - Possible parameter values
- **sources** (object[]) - History of parameter value changes

```json

{

    "name": "aidbox.fhir.search.authorize-inline-requests",
    "category": [ "FHIR", "Search" ], // means FHIR/Search category
    "title": "Authorize inline requests",
    "description": "Authorize inline requests (_revinclude and _include) with access policies.", 

    "with-default?": true, // is parameter with default value

    "optional?": null, // is parameter optional
    "required?": null, // is parameter required

    "type": "bool",

    "editable": true, // parameter can be changed in API or UI
    "sensitive": false, // parameter is not sensitive

    "overridden": false,
    "value": true,
    "unit": null,

    "pending-source": null, // source of change
    "pending-restart": false, // parameter was changed and requires restart
    "pending-value": null, // value will be applied after restart
    "restart-required": false,


    "source": "Database", // could be Environment Variable, Database, Default
    "envs": [ "BOX_SEARCH_AUTHORIZE_INLINE_REQUESTS" ], // environment variables that can be used to set this parameter

    "variants": null,
    "sources": [
        {
            "reason": "Set by user",
            "location": "n/a",
            "value": true,
            "source": "Database"
        },
        {
            "value": true,
            "location": "n/a",
            "reason": "Default value",
            "source": "Default"
        }
    ]
}
```

## List of Setting Parameters

* 


Setting Parameters fields:
- name: string
- type: string
- value: string
- description: string


Aidbox provides extensive configuration options for the FHIR server functionality. Below are the key configuration parameters:

Aidbox can be configured with a set of Setting Parameters.
Setting Parameters consists of name, type, value,  and description.


Aidbox configuration consists of set of Setting Parameters. 
Setting Parameters can be set using environment variables or by Setting Parameter API.

Users can set Setting Parameter using environment variables, REST API and from UI (using REST API under the hood).
