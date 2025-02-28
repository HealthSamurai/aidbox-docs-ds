##  Access Control

## Target audience

* Product managers/owners - research and define security requirements
* Architects & developers - implement security features
* Security officers & engineers - review security features
* DevOps engineers - deploy and monitor security features

There are some special topics:

* Patient API (for patient-centric systems)
* Organization API (for multi-tenant systems)
* Practitioner API

## Summary

Aidbox provides a set of security features to implement access control
and data protection in your system.

* Identity Management (developers) - manage users, applications, their roles and permissions
* Authentication (developers) - authenticate users and applications
* Authorization (developers) - authorize users and applications to access resources and operations
* Audit & Logging (developers & DevOps) - monitor and audit user and application actions


## Identity Management

How to manage users and applications in Aidbox or integrate with external identity providers?

## Authentication

How to authenticate users and applications?

* Authentication & Identity & Access Management
  * How to manage users in Aidbox? How to block user?
  * How to use external identity providers? Google, Okta etc
  * Why should I use internal Aidbox authorization instead of external identity provider? 
  * How to setup multifactor authentication?
  * How to manage sessions?
  * Auth 2.0 & other protocols
    * What is the difference between auth flows?
    * Does Aidbox support Pixy?
    * Does Aidbox support SAML?
    * Does Aidbox support Scim?
  * How to create REST client? How to provide access to my app?
  * How my backend can securely use Aidbox?
  * How my frontend can securely use Aidbox?

## Authorization

How to authorize users and applications to access resources and operations?

* Role Based Access Control - how to setup access control for different roles?
* Attribute Based Access Control - how to setup access control for different attributes?
* Access Policies based Access Control - how to setup access control using Access Policies?
* Security Labels Access Control - how to setup access control using Security Labels?
* Organization based Access Control - how to setup access control for different organizations?
* Patient API (SMART on FHIR) - how to setup access control for Patient API?
* SMART scopes based Access Control - how to setup access control using SMART scopes?
* Authorize by JWT?
* Consent Based Access Control - how to setup access control for different consent types?

### Role Based Access Control

Aidbox does not have explicit concept of roles. But you can use Access Policies to achieve role-based access control.

### Attribute Based Access Control

There is no full support for attribute-based access control in Aidbox. But some elements of it can be implemented using Access Policies and/or Security Labels.

### Access Policies

Access Policies access control implemented on operations level. Every operation triggers access policies evaluation.

There are different engines for Access Policies:

* Allow - allow all requests, used for root access
* Matcho - custom DSL for access control
* JSON Schema - for simple policies
* SQL engine - can access Aidbox database to make more complex decisions
 
AccessPolicy can be linked to User, Application or specific Operation. In general, Access Policy is a function that accepts enriched request as JSON document and returns true or false.

1. Aidbox collects all Access Policies that are linked to the operation, user or application.
2. Aidbox evaluates all Access Policies.
3. If one of Access Policies returns true, operation is allowed - else access is denied.


:::warn

Complex SQL policies can be slow down the API performance. Consider using Security Labels instead.

:::

* Best practice - use Access Policies for complex access control logic
* Debugging Access Policies


### Security Labels

Security Labels are a way to control access to resources based on the resource's security labels.

### Consent Based Access Control

Consent Based Access Control is a way to control access to resources based on the patient's consent.



### Questions
* Access Control
  * How to setup Role Based Access Control? How to realize access only to patients of practitioner or organization?
  * How access control works in Aidbox?
  * How to add permission to client or user? 
  * How to setup multitenancy?
  * Is there Attribute Based Access Control in Aidbox?
  * How to filter data based on user permissions?
  * How to realize breaking glass? 
  * How to dynamically provide or restrict access from my application?
  * How to turn off UI or one section in UI?
  * How to create read-only FHIR API user?
  * How to make an endpoint public?
  * Access Policies
    * How to debug access policy?
    * How to create AccessPolicy? What is the connection between AccessPolicy and User?
    * How can I be sure that AccessPolicies work as expected?
    * What are the most popular AccessPolicies? Any examples? What are the best practices?
    * How to restrict access, not to allow?
  * Consent based access control
    * Do you support Consent? What is Consent Based Access Control?
  * What is Compartments? Compartment Based Access Control?
    * What is Patient/everything? What data is in Patient/$everything?
  * How to check which permissions concrete user has?
  * How to debug access from certain user? 
  * How to create access control for Practitioner API?

## Audit & Logging

* Audit & Logging
  * How to setup logging and audit?
  * Does Aidbox support BALP?
  * How to understand which user cannot log in?
  * How to audit user actions?




