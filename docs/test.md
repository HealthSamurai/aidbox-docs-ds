---
title: Test
sidebar_position: 1000
---

import SchemaView from '@site/src/components/Schema';



# Patient CRUD API

## POST /Patient

### Description
Create a new patient record.

### Authentication
Requires a valid API token in the header.   

### Parameters
- **if-none-match** (string, optional): The ETag of the resource to be updated.
- **body** (string, required): The patient resource to create.

### Body

<SchemaView schemaUrl="./schema.json" />

### Example

```json
POST /Patient
{
  "resourceType": "Patient",
  "name": ["John", "Doe"],
  "gender": "male"
}
// response: 201 Created
{
  "id": "123",
  "name": ["John", "Doe"],
  "gender": "male"
}
```




## GET /Patient/\{id\}

### Description
Retrieve detailed information about a user by their unique ID.

### Authentication
Requires a valid API token in the header.

### Parameters
- **id** (string, required): The unique identifier of the user.

### Responses
- **200 OK**: Returns user information.
  ```json
  {
    "id": "123",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }