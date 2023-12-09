# Data Model

## Overview

### Entity Relationship Diagrams (ERD)

> An entity–relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types). Wikipedia

### Diagram

```mermaid
erDiagram
    Course
    Instructor ||--|{ Course: has
    Course  ||--|{ Student: has
    Course ||--|{ Evidence: contains
    Course ||--|{ Objective : contains

    Instructor {
        string name
    }

    Course {
        string name
    }

    Student {
        string name
    }

    Evidence {
        string name
    }

    Objective {
        string name
    }
    
    Portfolio {

    }
```

## References

### Links

-   [Mermaid: Entity Relationship Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)
