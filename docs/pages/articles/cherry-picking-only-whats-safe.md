# Cherry Picking Only What’s Safe

## A Practical Guide to Rewinding Branches Without Introducing New Conflicts

---

### **The Scenario**

You discover that a remote branch—let’s call it `work`—has been polluted by an unwanted feature (perhaps a merge or commit that nobody wants). At the same time, there are earlier, unrelated commits on the remote that you **do** want to keep, but your local branch (which you want to reset to) doesn’t have them.

You want to:

* **Rewind the branch** to before the unwanted feature,
* **Preserve and bring in only safe, unrelated good commits** that came before the mistake,
* **Avoid introducing any commits after the unwanted feature,** because they might depend on or conflict with the code you’re trying to remove.

---

### **The Problem**

A brute-force force-push of your local branch would erase **everything** added since your last good commit—including valuable, unrelated improvements.

Cherry-picking **all** missing remote commits is risky, since you could accidentally pull in changes that depend on the unwanted feature, causing new bugs or conflicts.

---

### **The Solution: Cherry Pick Only What’s Safe**

#### **Step 1: Fetch the Latest Remote History**

Bring all remote commits into your local repo:

```bash
git fetch origin
```

---

#### **Step 2: Review the Commit Log and Identify Safe Commits**

Use your CLI or Git GUI to look for commits on the remote that:

* Came **before** the unwanted feature/merge,
* Are **independent** of the unwanted code,
* Add value you don’t want to lose.

For example:

```
A -- B -- C -- W -- U -- ...   (origin/work)
              |      |
            [good] [unwanted]
```

* Your local: at **C**
* Want to keep: **W** (good, before U)
* Want to drop: **U** and anything after

---

#### **Step 3: Backup Your Local Branch (Optional but Recommended)**

```bash
git checkout work
git checkout -b work-backup
```

---

#### **Step 4: Cherry-Pick Only the Good, Unrelated Commits**

Apply each commit you want to keep, one by one, in order:

```bash
git cherry-pick <commit-hash-of-W>
```

* **Do not** cherry-pick U or any commit after it.
* If there are multiple independent good commits before U, repeat for each.

---

#### **Step 5: Review and Push Your Cleaned Branch**

Inspect your new branch history:

```bash
git log --oneline
```

If it looks good:

```bash
git push origin work --force
```

---

### **Key Principle**

> **Only cherry-pick commits you know are safe and unrelated to the code you’re removing.
> Avoid everything after the bad feature or merge unless you’ve thoroughly reviewed for dependencies.**

---

### **Why This Approach Works**

* **Minimizes risk** of introducing new bugs or conflicts.
* **Preserves valuable work** without bringing back the unwanted code.
* Keeps your branch history clean and intentional.

---

### **Summary Table**

| Commit                 | Cherry-pick? | Why?                           |
| ---------------------- | ------------ | ------------------------------ |
| Good, before unwanted  | Yes          | Safe, unrelated, worth keeping |
| Unwanted feature/merge | No           | Should be removed              |
| Any after unwanted     | No           | May depend on bad code, risky  |

---

## **Conclusion**

When cleaning up after a bad merge or unwanted feature, **be picky** about what you restore.
Cherry-picking only what’s safe lets you roll back confidently—preserving progress, preventing regressions, and saving yourself a world of future trouble.

---

*Have a similar scenario? Share your story or best practices in the comments!*
