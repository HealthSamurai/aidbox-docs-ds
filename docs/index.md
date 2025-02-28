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
* Consent Based Access Control - how to setup access control for different consent types?

* Authorize by JWT?


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




