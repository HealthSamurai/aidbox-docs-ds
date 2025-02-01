---
title: Architecture
sidebar_position: 1
---

# Architecture

Aidbox is dynamic and highly configurable platform. It generates tables and API on fly based on configuration. It consists of JVM service, written in clojure and PostgreSQL database. Aidbox stores FHIR and Custom Resources in PostgreSQL
as JSONB columns. 

Aidbox has multiple validation engines, but currently recomended is [FHIR Schema](/overviews/fhir-schema) based validation, 
which is designed to be fast and deeply compatible with FHIR.

## Database

At first start Aidbox creates tables for all resources and generate API on fly.
All resource tables have similar structure:

```sql
CREATE TABLE patient (
    "id" uuid NOT NULL PRIMARY KEY,
    "cts" timestamp NOT NULL DEFAULT now(),
    "ts" timestamp NOT NULL DEFAULT now(),
    "resource" jsonb NOT NULL,
);
```

CRUD and Search operations are translated to SQL queries and executed in PostgreSQL.

```sql
SELECT * FROM patient WHERE id = '123';
```

### Storage Format

Aidbox can store resources in JSONB in two formats. First one we call "Aidbox" format, which is now considered legacy and will be replaced with "FHIR format" in future.

### On Search & Indexes

Aidbox can search resources without materialization of search parameters. But this queries may become slow, and you have to build indexes. Aidbox prefers more tranditional approach
to indexes, users are responsible for building them.
That's because user may build different indexes, 
not all indexes are useful for all queries, but they can slow down insert/update operations.


## FHIR Packages and StructureDefinition


## Extensibility - Custom Operations and Resources


