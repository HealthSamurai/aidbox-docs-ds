---
sidebar_position: 1
description: Follow these steps to launch Aidbox locally using Docker
---

# Run locally

It takes 5 minutes to launch Aidbox locally using docker compose.
This setup is perfect for local development and testing.
Script will download docker compose file and start Aidbox.
Aidbox is just a two containers - postgres and aidbox.

:::info
**Prerequisites**: Please make sure that both [Docker & Docker Compose](https://docs.docker.com/engine/install/) are installed.
:::

### 1. Create a directory

```sh
mkdir aidbox && cd aidbox
```

### 2. **Run Aidbox on Docker**

```bash
curl -JO https://aidbox.app/runme && docker compose up
```

This command downloads the Aidbox script and starts Aidbox using Docker Compose.
You can edit docker-compose.yaml file to configure ports and volumes.

```yaml
volumes:
  aidbox_pg_data: {}
services:
  aidbox_db:
    image: healthsamurai/aidboxdb:17
    volumes:
    - aidbox_pg_data:/var/lib/postgresql/data:delegated
    environment:
      POSTGRES_USER: aidbox
      POSTGRES_PORT: '5432'
      POSTGRES_DB: aidbox
      POSTGRES_PASSWORD: <gen>
  aidbox:
    image: healthsamurai/aidboxone:edge
    pull_policy: always
    depends_on:
    - aidbox_db
    ports:
    - 8080:8080
    environment:
      AIDBOX_TERMINOLOGY_SERVICE_BASE_URL: https://tx.fhir.org/r4
      AIDBOX_FHIR_PACKAGES: hl7.fhir.r4.core#4.0.1
      AIDBOX_FHIR_SCHEMA_VALIDATION: true
      AIDBOX_CREATED_AT_URL: https://aidbox.app/ex/createdAt
      AIDBOX_CLIENT_SECRET: <gen>
      AIDBOX_CORRECT_AIDBOX_FORMAT: true
      AIDBOX_ADMIN_PASSWORD: <gen>
      AIDBOX_COMPLIANCE: enabled
      AIDBOX_SECURITY_AUDIT__LOG_ENABLED: true
      BOX_SEARCH_FHIR__COMPARISONS: true
      PGHOST: aidbox_db
      BOX_COMPATIBILITY_VALIDATION_JSON__SCHEMA_REGEX: '#{:fhir-datetime}'
      BOX_SEARCH_AUTHORIZE_INLINE_REQUESTS: true
      PGUSER: aidbox
      AIDBOX_PORT: 8080
      PGDATABASE: aidbox
      PGPASSWORD: <gen>
      PGPORT: '5432'
      BOX_SEARCH_INCLUDE_CONFORMANT: true


```

### 3. Access Aidbox

Open in browser [http://localhost:8080/](http://localhost:8080)

### 4. Activate your Aidbox instance

* Using AidboxID:
  AidboxID is a unique identifier within the Aidbox ecosystem used for product activation
* Using Aidbox license:
  Aidbox license can be issued on the [Aidbox user portal](https://aidbox.app/). More about Aidbox licenses [here](../../overview/aidbox-user-portal/licenses.md)


:::info
If you’re using an Aidbox license, you’ll be prompted for a username (or email) and password.
Use the **admin** username and retrieve the password 
from the **AIDBOX\_ADMIN\_PASSWORD** environment variable in the `docker-compose.yaml` file.

For security, Aidbox generates a unique password for each instance.
:::

### 5. **Discover Aidbox features using Notebooks**

Use Getting Started Notebooks to explore basic Aidbox features

![Aidbox UI: notebooks](notebooks.avif)

:::info
**Aidbox Notebooks**

Notebooks are interactive tutorials within the Aidbox UI with built-in REST, RPC, and SQL editors and the ability to execute requests and queries on the fly and see the result. You can use pre-built or create your own Notebooks. [Learn more.](../../overview/aidbox-ui/notebooks.md)
:::

## Next Steps

* Learn more about [Aidbox Configuration](../../aidbox-configuration/aidbox-zen-lang-project/)
* Unlock additional capabilities of [Aidbox UI](../../overview/aidbox-ui/)
* Dive into the built-in [Aidbox Notebooks](../../overview/aidbox-ui/notebooks.md)

