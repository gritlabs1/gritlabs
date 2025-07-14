# Grit Labs 

Grit Labs is a structured framework that guides language models through iterative execution.  
It focuses on clear, immediate tasks—avoiding speculative planning—and relies on concise Markdown templates with strictly defined language to steer the model’s reasoning. When projects require explicit tracking, Grit Labs can generate verifiable artifacts such as using `GOALS.md` to express features and using `DEPENDENCY_MODELING.md` to build component relationships.


Grit Labs optimizes for:

* Solving what’s visible **now**  
* Avoiding documentation for hypothetical futures  
* Executability by both humans **and** language models  

---

## QUICK START 🚀

 

1. Upload markdown template files to ChatGPT (or an LLM like ChatGPT).

    > **Required files only:** 4 total  
    > **With optional files:** 6 total
        
    - `README.md` (this document, required)
    - `TERMINOLOGY.md` (required)
    - `ACTION_SCHEMA.md` (required)
    - `DIRECTIVE.md` (required)
    - `GOALS.md` (optional)
    - `DEPENDENCY_MODELING.md` (optional)
        
    
    
1. If you are ready to begin executing a directive, declare the template upload mode: 
    
    ```
    We are switching the template upload mode to execution. Follow the rules in DIRECTIVE.md and use the current Action Schema.
    ```  
    
    - If you uploaded `GOALS.md`, also state:

        ``` 
        I intend to reference a goal hierarchy and acceptance test structure during this conversation.
        ```
    
    - If you uploaded `DEPENDENCY_MODELING.md`, also state:
    
        ``` 
        I intend to build a dependency graph using a relational database, according to the specifications outlined in `DEPENDENCY_MODELING.md`.
        ```
   
1. Perform Rotations until the **purpose of the conversation** is met.



---

## 🧱 Description of Files 



| File              | Purpose                                                                                 |
|-------------------|-----------------------------------------------------------------------------------------|
| **README.md**     | One-screen introduction and quick-start guide                                           |
| **TERMINOLOGY.md**| Template defining the shared vocabulary of Grit Labs                                                        |
| **ACTION_SCHEMA.md** | Template specifying the Action Items table format & rules |
| **DIRECTIVE.md** | Template instructing an LLM how to run a Rotation                                                  |                                  |
| **GOALS.md** (optional)|  Template defining Missions, Goals, and Acceptance Tests. Provides traceable, testable structure for reasoning and documentation.|
| **DEPENDENCY_MODELING.md** (optional)| Template specifying component relationships, dependencies, and use cases. |


---

## 🚫 What Grit Labs Does *Not* Do

* No roadmapping or milestone forecasts  
* No separate backlog grooming  
* No role hierarchies or ceremonies  
* No meta-documentation for unknown audiences  

---

## ✅ What Grit Labs Does

* Defines the **Problem Space** for the current rotation  
* Updates Action Items via **Notes** and **Triggers**  
* Executes fully in the present moment  
* Treats the **Action Items table** as an immutable snapshot

---

## 🔄 Running a Rotation

1. Provide the current **Action Schema**
2. Add any new **Action Notes** or **Action Triggers**  
3. Apply the **Rotation Directive** (`DIRECTIVE.md`)  
4. Accept the updated table and act on the next visible work  

---

## 🧭 Template Upload Mode

**Template Upload Mode** defines the interaction context when uploading Grit Labs templates into a language model session.

There are two allowed modes:

- **Shared Language** (default)  
  Templates are uploaded only to establish a common vocabulary and schema understanding. No directives are executed. No Rotations occur.

- **Execution**  
  Templates are uploaded with the intent to execute a directive, perform a Rotation, or emit a new snapshot (e.g., an updated Action Schema or a dependency mapping).

> ⚠️  If no mode is declared, the system defaults to `Shared Language`.



### 🔁 Switching Modes

You may switch modes at any time with an inline declaration:

```markdown
Template Upload Mode: Shared Language
```

```markdown
Template Upload Mode: Execution
```

This ensures clarity for both humans and language models, especially when templates are reused across multiple stages of a project.

For terminology alignment, see `TERMINOLOGY.md`.

---

## 🛠 Local Development

To preview the documentation site locally:

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/gritlabs/gritlabs.git
    cd gritlabs
    ```
    
1. **(Optional) Create and activate a virtual environment**
    
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
    
    > 💡 **On Windows**, use:
    > 
    > PowerShell: `.\venv\Scripts\Activate.ps1`  
    > Command Prompt: `venv\Scripts\activate.bat`  
    > [Need help with virtual environments?](https://docs.python.org/3/library/venv.html)
    
1. **Install dependencies**
    
    ```bash
    pip install -r requirements.txt
    ```
    
1. **Serve the documentation site**
    
    ```bash
    cd docs
    mkdocs serve
    ```
    

Then open `http://localhost:8000` in your browser.

> ⚠️ If you see an error like "`mkdocs` is not recognized", try this on Windows:
> 
> ```powershell
> .\venv\Scripts\mkdocs.exe serve
> ```


---

## 🔐 License

All content in this repository is licensed under the **GNU Affero General Public License v3.0 (AGPL)**.


See [`LICENSE`](https://github.com/gritlabs1/gritlabs/blob/main/LICENSE) for full terms.






