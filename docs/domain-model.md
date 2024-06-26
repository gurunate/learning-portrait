# Domain Model

A domain model is a conceptual representation of a system or subject matter that depicts its key concepts, relationships, and rules. It serves as a visual or diagrammatic tool to help people understand and communicate the structure and behavior of a particular domain or area of interest. In simpler terms, it's like creating a map or blueprint that outlines the important elements and how they relate to each other within a specific context.

## Overview

At its core, Learning Portrait is a system of entities and relationships. Understanding how they relate is key to understanding the system.

### System Entities

This is a list of canonical system terms. These terms, or entities, represent the building blocks of the Learning Portrait base system. Term descriptions and examples of each are included below.

| Term / Entity  | Description                                       | Example                                                                                       |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **User**       | An individual who uses Learning Portrait.         | instructor, student, etc.                                                                     |
| **Instructor** | A type of user that instructs a course.           | teacher, professor, etc.                                                                      |
| **Course**     | A discipline/subject that is taught.              | art, math, literacy, science, etc.                                                            |
| **Objective**  | An expected outcome of a course.                  | learning target, target, SWBOT, standard, learning goals, learning descriptors, domains, etc. |
| **Section**    | ...                                               |
| **Student**    | A type of user that participates in a course.     |
| **Portfolio**  | ...                                               |
| **Evidence**   | An artifact submitted in support of an objective. | assignments, tests, etc.                                                                      |
| **Rating**     | An evaluation of a piece of evidence.             |

See [Canonical Names](https://docs.google.com/document/d/1mvypDW1ZFg4vDAbsu4TGTkHxP9fMyJ1OTCzU8DnU_ys/edit?usp=sharing) for more details.

### Entity Relationship Diagrams (ERD)

> An entity–relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types). Wikipedia

### Basic Education System

The following diagram represents a simple relationship between LP system entities. In it the key entities are **users** (_e.g.,_ instructors and students) and **courses** that ancillary entities need to associated with them. In it's simplest form users are connected by courses as either an instructor or student. Additionally, the two user roles are then connected by coursework by **evidence** which is associated to a course by **objectives**.

```mermaid
erDiagram
    User ||--|| Instructor: type
    User ||--|| Student: type
    Instructor ||--|{ Course: has
    Section  }|--|{ Student: has
    Objective }|--|{ Evidence: contains
    Course ||--|{ Objective : contains
    Course ||--|{ Section : contains
    Student ||--|| Portfolio: has
    Instructor ||--|{ Evidence: creates
    Rating ||--|| Objective: subjective
    Rating }|--|| Student: of
    Student ||--|{ Evidence: submits
    Portfolio ||--|{ Evidence : contains
    Instructor ||--|{ Rating: evaluates
    Instructor ||--|{ Rating: evaluates
    Rating ||--|| Evidence: for
```

### Extended Education System

The basic diagram (_above_) lacks the expansive education system representations. A more cohesive diagram would include:

-   Organizations
    -   _e.g.,_ Institution\* system, district, university, etc.
-   Institutions
    -   _e.g.,_ School, training center, etc.
-   Administrators
    -   _e.g.,_ Principal, counselor, advisor, etc.
-   Guardians
    -   _e.g.,_ Parent, legal guardian, etc.

```mermaid
erDiagram
    Organization ||--|{ Institution: has
    Institution ||--|{ Course: has
    Organization ||--|{ Administrator: has
    Administrator ||--|{ Institution: has
    Institution }|--|{ Instructor: has
    User ||--|| Instructor: type
    User ||--|| Student: type
    User ||--|| Administrator: type
    User ||--|| Guardian: type
    Instructor }|--|{ Course: has
    Guardian ||--|{ Student: has
    Course  }|--|{ Student: has
    Objective ||--|{ Evidence: contains
    Course ||--|{ Objective : contains
    Student ||--|| Portfolio: has
    Student ||--|{ Rating: reflects
    Student ||--|{ Evidence: submits
    Portfolio ||--|{ Evidence : contains
    Instructor ||--|{ Evidence : creates
    Instructor ||--|{ Rating: evaluates
    Rating ||--|| Evidence: for
    Assessment ||--|| Objective: subjective
    Assessment ||--|| Student: subjective
```

## References

### Links

-   [Mermaid: Entity Relationship Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)
