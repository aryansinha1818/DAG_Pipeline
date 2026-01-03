🚀 PipelineBuilder -- Visual DAG Pipeline Editor
===============================================

PipelineBuilder is a **visual drag-and-drop pipeline editor** that allows users to create workflows using nodes and connections, validate the pipeline structure, and check whether it forms a **Directed Acyclic Graph (DAG)**.\
The project demonstrates frontend architecture, graph-based UI logic, and backend validation using FastAPI.

* * * * *

✨ Features
----------

-   Drag-and-drop pipeline builder using a visual canvas

-   Multiple node types (Input, Text, LLM, Math, Delay, Output)

-   Reusable node abstraction (`BaseNode`) for scalability

-   Dynamic Text node:

    -   Auto-resizes based on content

    -   Generates input handles from `{{variable}}` syntax

-   Backend validation:

    -   Counts nodes and edges

    -   Checks if pipeline is a valid DAG

-   Clean frontend--backend integration

* * * * *

🧱 Tech Stack
-------------

### Frontend

-   React

-   ReactFlow

-   Zustand (state management)

-   JavaScript

-   CSS

### Backend

-   Python

-   FastAPI

-   Pydantic

-   Uvicorn

* * * * *

📁 Project Structure
--------------------

`frontend/
 ├── src/
 │   ├── nodes/
 │   ├── store.js
 │   ├── ui.js
 │   ├── toolbar.js
 │   ├── submit.js
 │   └── App.js

backend/
 ├── main.py`

* * * * *

▶️ How to Run the Project
-------------------------

### 1️⃣ Clone the Repository

`git clone <your-repo-url>
cd PipelineBuilder`

* * * * *

### 2️⃣ Run the Frontend

`cd frontend
npm install
npm start`

Frontend will run at:

`http://localhost:3000`

* * * * *

### 3️⃣ Run the Backend

`cd backend
uvicorn main:app --reload`

Backend will run at:

`http://localhost:8000`

* * * * *

🔄 How It Works (Quick Overview)
--------------------------------

1.  User drags nodes onto the canvas

2.  Nodes are connected visually using edges

3.  Clicking **Submit** sends nodes and edges to the backend

4.  Backend:

    -   Counts nodes and edges

    -   Checks if the graph is a DAG (no cycles)

5.  Frontend displays the result in an alert

* * * * *

📌 API Endpoint
---------------

### `POST /pipelines/parse`

**Request Body**

`{
  "nodes": [{ "id": "node-1" }],
  "edges": [{ "source": "node-1", "target": "node-2" }]
}`

**Response**

`{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}`

* * * * *

🎯 What This Project Demonstrates
---------------------------------

-   Scalable React component design

-   Graph-based UI handling

-   State synchronization with ReactFlow

-   Dynamic UI updates

-   Clean frontend--backend contract

-   Practical graph algorithm usage (DAG detection)
